import { NextResponse } from "next/server";

// Simulación de conexión a Software de Reservas (ej. CoverManager)
export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Vapi u otros orquestadores envían el payload del function call
    const { message } = body;
    
    // Seguridad básica
    if (message?.type !== "tool_calls") {
      return NextResponse.json({ error: "Invalid request type" }, { status: 400 });
    }

    const toolCalls = message.toolWithToolCallList;
    const results = [];

    for (const toolCall of toolCalls) {
      const functionName = toolCall.toolCall.function.name;
      const args = JSON.parse(toolCall.toolCall.function.arguments);

      console.log(`[VoiceBot] Ejecutando: ${functionName}`, args);

      if (functionName === "check_availability") {
        const { party_size } = args; // date, time are extracted if needed
        
        // TODO: Llamada real a BD/CoverManager
        // Mock: Asumimos disponible si es para menos de 10 personas
        const isAvailable = party_size <= 10;
        
        results.push({
          toolCallId: toolCall.toolCall.id,
          result: JSON.stringify({
            available: isAvailable,
            message: isAvailable 
              ? "Disponibilidad confirmada." 
              : "No hay mesas para ese número de personas."
          }),
        });
      } 
      
      else if (functionName === "create_reservation") {
        const { phone_number } = args; // customer_name, date, time, party_size are extracted if needed
        
        // Validación de Prompt Injection (Prevenir inputs maliciosos en teléfono o nombre)
        const phoneRegex = /^[0-9+\s]+$/;
        if (!phoneRegex.test(phone_number)) {
          results.push({
            toolCallId: toolCall.toolCall.id,
            result: JSON.stringify({ success: false, error: "Teléfono inválido. Posible inyección." })
          });
          continue;
        }

        // TODO: Insert en BD
        results.push({
          toolCallId: toolCall.toolCall.id,
          result: JSON.stringify({
            success: true,
            reservation_id: "RES-" + Math.floor(Math.random() * 10000),
            message: "Reserva creada exitosamente."
          }),
        });
      }

      else if (functionName === "transfer_to_human") {
        // En Vapi, para transferir, devolvemos un comando especial o la herramienta lo maneja internamente.
        // Aquí confirmamos la recepción.
        results.push({
          toolCallId: toolCall.toolCall.id,
          result: JSON.stringify({ success: true, message: "Iniciando transferencia al SIP trunk." })
        });
      }
    }

    // Retorno en el formato que espera el orquestador
    return NextResponse.json({ results });
    
  } catch (error) {
    console.error("[VoiceBot Error]", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
