import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-card border-t border-white/5 pt-12 pb-28 md:pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-10">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image 
                src="/logo-las-vinas.jpg" 
                alt="Logo Restaurante Las Viñas" 
                width={48} 
                height={48} 
                className="rounded-full shadow-lg"
              />
              <h3 className="text-brand-gold text-2xl font-bold font-[family-name:var(--font-playfair)]">
                Las Viñas
              </h3>
            </div>
            <p className="text-white/50 text-sm font-light leading-relaxed">
              Cocina mediterránea de tradición, con productos de proximidad y la
              pasión que define a Jaén. Una experiencia que se saborea con cada
              bocado.
            </p>
          </div>

          {/* Horario */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
              Horario
            </h4>
            <div className="space-y-2 text-sm text-white/50 font-light">
              <div className="flex justify-between">
                <span>Martes — Domingo</span>
                <span className="text-white/70">13:00 – 16:00</span>
              </div>
              <div className="flex justify-between">
                <span>Jueves — Sábado</span>
                <span className="text-white/70">20:30 – 23:30</span>
              </div>
              <div className="flex justify-between">
                <span>Lunes</span>
                <span className="text-red-400/70">Cerrado</span>
              </div>
            </div>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
              Contacto
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+34953462074"
                className="flex items-center gap-2 text-sm text-white/50 hover:text-brand-gold transition-colors font-light"
              >
                <Phone size={14} className="text-brand-gold/60" />
                +34 953 46 20 74
              </a>
              <a
                href="mailto:info@restaurantelasvinas.com"
                className="flex items-center gap-2 text-sm text-white/50 hover:text-brand-gold transition-colors font-light"
              >
                <Mail size={14} className="text-brand-gold/60" />
                info@restaurantelasvinas.com
              </a>
              <div className="flex items-start gap-2 text-sm text-white/50 font-light">
                <MapPin size={14} className="text-brand-gold/60 mt-0.5" />
                <span>
                  Carretera Vieja de Rus, s/n
                  <br />
                  23440 Baeza, Jaén
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 pt-6 text-center">
          <p className="text-white/30 text-xs font-light">
            © {currentYear} Restaurante Las Viñas. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
