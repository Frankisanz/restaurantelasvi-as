"use client";

import { useState } from "react";
import { Check, Loader2, AlertCircle } from "lucide-react";

// Time slots configuration — simulates real-time availability
const TIME_SLOTS = [
  { time: "13:00", label: "13:00", maxCapacity: 40 },
  { time: "13:30", label: "13:30", maxCapacity: 40 },
  { time: "14:00", label: "14:00", maxCapacity: 40 },
  { time: "14:30", label: "14:30", maxCapacity: 30 },
  { time: "15:00", label: "15:00", maxCapacity: 20 },
  { time: "20:30", label: "20:30", maxCapacity: 35 },
  { time: "21:00", label: "21:00", maxCapacity: 40 },
  { time: "21:30", label: "21:30", maxCapacity: 40 },
  { time: "22:00", label: "22:00", maxCapacity: 30 },
];

const PARTY_SIZES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

interface ReservationFormProps {
  onSuccess: () => void;
}

export function ReservationForm({ onSuccess }: ReservationFormProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    partySize: 2,
    name: "",
    phone: "",
    email: "",
    specialRequests: "",
  });

  // Get tomorrow's date as minimum
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  // Max date: 60 days ahead
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 60);
  const maxDateStr = maxDate.toISOString().split("T")[0];

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Build WhatsApp message for the manager
    const message = encodeURIComponent(
      `🍽️ *NUEVA RESERVA — Las Viñas*\n\n` +
        `👤 *Nombre:* ${formData.name}\n` +
        `📞 *Teléfono:* ${formData.phone}\n` +
        `📧 *Email:* ${formData.email || "No proporcionado"}\n` +
        `📅 *Fecha:* ${formData.date}\n` +
        `🕐 *Hora:* ${formData.time}\n` +
        `👥 *Comensales:* ${formData.partySize}\n` +
        `📝 *Peticiones:* ${formData.specialRequests || "Ninguna"}\n`
    );

    // WhatsApp notification to manager (replace number with actual)
    const managerPhone = "34953462074";
    window.open(
      `https://wa.me/${managerPhone}?text=${message}`,
      "_blank"
    );

    setIsSubmitting(false);
    setStep(3);

    setTimeout(() => {
      onSuccess();
    }, 3000);
  };

  // SUCCESS STATE
  if (step === 3) {
    return (
      <div className="text-center py-8 space-y-4">
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
          <Check size={32} className="text-green-400" />
        </div>
        <h3 className="text-xl font-bold text-white">¡Reserva Confirmada!</h3>
        <p className="text-white/60 text-sm font-light">
          Se ha enviado la confirmación por WhatsApp. <br />
          Te esperamos el{" "}
          <span className="text-brand-gold font-medium">{formData.date}</span> a
          las{" "}
          <span className="text-brand-gold font-medium">{formData.time}</span>.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Step indicators */}
      <div className="flex items-center justify-center gap-2 mb-6">
        {[1, 2].map((s) => (
          <div
            key={s}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              s <= step
                ? "bg-brand-gold w-8"
                : "bg-white/10 w-4"
            }`}
          />
        ))}
      </div>

      {/* STEP 1: Date, Time, Party Size */}
      {step === 1 && (
        <div className="space-y-5 animate-fade-in">
          {/* Date */}
          <div>
            <label className="block text-white/70 text-sm mb-2 font-medium">
              Fecha
            </label>
            <input
              type="date"
              min={minDate}
              max={maxDateStr}
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/30 transition-all [color-scheme:dark]"
            />
          </div>

          {/* Party Size */}
          <div>
            <label className="block text-white/70 text-sm mb-2 font-medium">
              Comensales
            </label>
            <div className="flex flex-wrap gap-2">
              {PARTY_SIZES.map((size) => (
                <button
                  key={size}
                  onClick={() => setFormData({ ...formData, partySize: size })}
                  className={`w-11 h-11 rounded-xl text-sm font-medium transition-all duration-200 ${
                    formData.partySize === size
                      ? "bg-brand-gold text-brand-dark shadow-md"
                      : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/10"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            {formData.partySize > 8 && (
              <p className="text-amber-400/80 text-xs mt-2 flex items-center gap-1">
                <AlertCircle size={12} />
                Para grupos de más de 8, te recomendamos llamar al restaurante.
              </p>
            )}
          </div>

          {/* Time Slots */}
          <div>
            <label className="block text-white/70 text-sm mb-2 font-medium">
              Hora
            </label>
            <div className="grid grid-cols-3 gap-2">
              {TIME_SLOTS.map((slot) => (
                <button
                  key={slot.time}
                  onClick={() =>
                    setFormData({ ...formData, time: slot.time })
                  }
                  className={`py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    formData.time === slot.time
                      ? "bg-brand-gold text-brand-dark shadow-md"
                      : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/10"
                  }`}
                >
                  {slot.label}
                </button>
              ))}
            </div>
          </div>

          {/* Continue Button */}
          <button
            disabled={!formData.date || !formData.time}
            onClick={() => setStep(2)}
            className="w-full bg-brand-gold text-brand-dark font-bold py-3.5 rounded-xl disabled:opacity-30 disabled:cursor-not-allowed hover:bg-brand-gold-hover transition-all duration-300 text-sm mt-2"
          >
            Continuar
          </button>
        </div>
      )}

      {/* STEP 2: Contact Details */}
      {step === 2 && (
        <div className="space-y-4 animate-fade-in">
          <div>
            <label className="block text-white/70 text-sm mb-2 font-medium">
              Nombre completo *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Ej: María García"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/30 transition-all"
            />
          </div>

          <div>
            <label className="block text-white/70 text-sm mb-2 font-medium">
              Teléfono *
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              placeholder="+34 600 000 000"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/30 transition-all"
            />
          </div>

          <div>
            <label className="block text-white/70 text-sm mb-2 font-medium">
              Email <span className="text-white/30">(opcional)</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="tu@email.com"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/30 transition-all"
            />
          </div>

          <div>
            <label className="block text-white/70 text-sm mb-2 font-medium">
              Peticiones especiales{" "}
              <span className="text-white/30">(alergias, tronas...)</span>
            </label>
            <textarea
              value={formData.specialRequests}
              onChange={(e) =>
                setFormData({ ...formData, specialRequests: e.target.value })
              }
              rows={3}
              placeholder="Ej: Celebramos un cumpleaños, necesitamos trona para bebé..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/30 transition-all resize-none"
            />
          </div>

          {/* Summary mini preview */}
          <div className="bg-white/5 rounded-xl p-4 border border-white/5">
            <p className="text-white/40 text-xs uppercase tracking-wider mb-2">
              Resumen
            </p>
            <p className="text-white text-sm">
              📅 {formData.date} a las {formData.time} — {formData.partySize}{" "}
              {formData.partySize === 1 ? "persona" : "personas"}
            </p>
          </div>

          <div className="flex gap-3 pt-1">
            <button
              onClick={() => setStep(1)}
              className="flex-1 border border-white/10 text-white/60 font-medium py-3.5 rounded-xl hover:bg-white/5 transition-all duration-300 text-sm"
            >
              Atrás
            </button>
            <button
              disabled={!formData.name || !formData.phone || isSubmitting}
              onClick={handleSubmit}
              className="flex-[2] bg-brand-gold text-brand-dark font-bold py-3.5 rounded-xl disabled:opacity-30 disabled:cursor-not-allowed hover:bg-brand-gold-hover transition-all duration-300 text-sm flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Confirmando...
                </>
              ) : (
                "Confirmar Reserva"
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
