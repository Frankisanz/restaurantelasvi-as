"use client";

import Image from "next/image";
import { MENU_ITEMS } from "@/data/menu";
import { Flame } from "lucide-react";

export function BarbacoaSection() {
  // Extract dishes that are grilled or roasted
  const brasaItems = MENU_ITEMS.filter(
    (item) => item.category === "Nuestras Brasas" || item.name.toLowerCase().includes("brasa")
  ).slice(0, 4); // Take top 4 for the showcase

  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden" id="barbacoa">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/barbacoa.mp4" type="video/mp4" />
        </video>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-brand-dark/80 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-brand-gold/20 rounded-full mb-4">
            <Flame size={32} className="text-brand-gold" />
          </div>
          <p className="text-brand-gold uppercase tracking-[0.2em] text-sm font-bold mb-4 drop-shadow-md">
            El Corazón de Nuestra Cocina
          </p>
          <h2 className="text-5xl md:text-7xl font-black text-white font-[family-name:var(--font-playfair)] drop-shadow-lg">
            Maestros de la <span className="text-gradient-gold">Brasa</span>
          </h2>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            Nuestras carnes maduradas y pescados selectos se rinden ante el calor lento y profundo de la encina. Un ritual ancestral que despierta sabores únicos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brasaItems.map((item) => (
            <article 
              key={item.id}
              className="glass-panel border border-brand-gold/20 rounded-3xl overflow-hidden hover:border-brand-gold/50 transition-all duration-500 hover:-translate-y-2 group bg-brand-dark/40 backdrop-blur-md flex flex-col"
            >
              {item.image && (
                <div className="relative h-48 w-full overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={`Especialidad a la brasa: ${item.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent" />
                </div>
              )}
              
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-gold transition-colors font-[family-name:var(--font-playfair)] mb-2">
                    {item.name}
                  </h3>
                  <p className="text-white/60 text-sm font-light line-clamp-3 mb-4">
                    {item.description || "Asado artesanal en nuestra parrilla de encina, conservando todo el sabor y jugosidad."}
                  </p>
                </div>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-brand-gold font-black text-lg">
                    {item.price !== null ? `${item.price.toFixed(2)}€` : "S/M"}
                  </span>
                  <div className="bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/20">
                    <span className="text-brand-gold text-[10px] uppercase tracking-wider font-bold">
                      Brasa
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
