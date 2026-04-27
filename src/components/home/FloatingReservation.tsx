"use client";

import { useState } from "react";
import { CalendarDays, X } from "lucide-react";
import { ReservationForm } from "@/components/reservations/ReservationForm";

export function FloatingReservation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating CTA Button — always visible on mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-0 md:bottom-8 md:right-8 md:left-auto">
        <button
          onClick={() => setIsOpen(true)}
          className="w-full md:w-auto flex items-center justify-center gap-2.5 bg-brand-gold text-brand-dark font-bold py-4 px-8 rounded-2xl md:rounded-full shadow-2xl shadow-brand-gold/30 hover:shadow-brand-gold/50 hover:scale-105 transition-all duration-300 text-base md:text-sm"
          aria-label="Reservar mesa"
        >
          <CalendarDays size={20} />
          Reservar Mesa
        </button>
      </div>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-end md:items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative w-full max-w-lg bg-brand-card border border-white/10 rounded-t-3xl md:rounded-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto animate-slide-up">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white font-[family-name:var(--font-playfair)]">
                  Reservar Mesa
                </h2>
                <p className="text-white/50 text-sm font-light mt-1">
                  Selecciona fecha, hora y número de comensales
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/40 hover:text-white transition-colors p-2 -mr-2"
                aria-label="Cerrar formulario de reserva"
              >
                <X size={24} />
              </button>
            </div>

            <ReservationForm onSuccess={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}
