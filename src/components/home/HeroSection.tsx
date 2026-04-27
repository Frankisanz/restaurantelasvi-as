import Image from "next/image";
import { MapPin, Clock } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full h-[70vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image con Optimización Next.js */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070"
          alt="Restaurante Las Viñas Ambiente"
          fill
          priority
          className="object-cover opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-brand-dark/20 to-brand-dark" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 flex flex-col items-center max-w-4xl mx-auto space-y-6">
        <span className="text-brand-gold uppercase tracking-[0.3em] font-semibold text-xs md:text-sm animate-fade-in">
          Arte, Brasa y Tradición Jiennense
        </span>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-2 font-[family-name:var(--font-playfair)]">
          Donde el Fuego <br/> <span className="text-gradient-gold italic">Abraza el Sabor</span>
        </h1>
        <p className="text-lg md:text-2xl text-white/80 font-light max-w-2xl leading-relaxed">
          Descubra el alma de Baeza en cada bocado. Cortes selectos asados a la brasa de encina y recetas heredadas que rinden homenaje a nuestra tierra.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 text-sm text-white/70 font-light pt-8 border-t border-white/10 w-full justify-center">
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-brand-gold" />
            <span className="hover:text-brand-gold transition-colors cursor-pointer">Carretera Vieja de Rus, s/n, Baeza</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={18} className="text-brand-gold" />
            <span>Almuerzos: 13:00 - 16:00 | Cenas: 20:30 - 23:30</span>
          </div>
        </div>
      </div>
    </section>
  );
}
