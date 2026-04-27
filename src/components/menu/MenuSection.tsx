"use client";

import { useState } from "react";
import Image from "next/image";
import { Info, Leaf, WheatOff, Shell, Milk } from "lucide-react";
import { CATEGORIES, MENU_ITEMS } from "@/data/menu";

const ALLERGEN_ICONS: Record<string, { icon: any; color: string; label: string }> = {
  Vegano: { icon: Leaf, color: "text-green-400", label: "Vegano" },
  "Sin Gluten": { icon: WheatOff, color: "text-amber-400", label: "Sin Gluten" },
  Gluten: { icon: WheatOff, color: "text-orange-400/60", label: "Gluten" },
  Marisco: { icon: Shell, color: "text-rose-400", label: "Marisco" },
  Lácteos: { icon: Milk, color: "text-blue-300", label: "Lácteos" },
};

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("Destacados");

  const filteredItems = MENU_ITEMS.filter((item) =>
    activeCategory === "Destacados" ? item.isPopular : item.category === activeCategory
  );

  return (
    <section className="py-12 md:py-24 w-full scroll-mt-20" id="menu">
      <div className="text-center mb-12">
        <p className="text-brand-gold uppercase tracking-[0.2em] text-xs font-semibold mb-3">
          Nuestra Propuesta
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white font-[family-name:var(--font-playfair)]">
          Sabores que Cuentan <span className="text-gradient-gold">Historias</span>
        </h2>
      </div>

      <div className="flex flex-col gap-8">
        {/* Category Tabs */}
        <div className="glass-panel p-2 rounded-2xl shadow-2xl w-full sticky top-20 z-40 overflow-hidden">
          <div className="flex overflow-x-auto hide-scrollbar gap-2 px-1 py-1 items-center">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300
                  ${activeCategory === category 
                    ? "bg-brand-gold text-brand-dark shadow-[0_0_20px_rgba(212,175,55,0.3)]" 
                    : "text-white/60 hover:text-white hover:bg-white/5"}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="glass-panel rounded-3xl overflow-hidden flex flex-col transition-all duration-500 hover:border-brand-gold/30 hover:-translate-y-1 group"
            >
              {item.image && (
                <div className="relative h-64 w-full overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-card/80 to-transparent" />
                  {item.isPopular && (
                    <div className="absolute top-4 right-4 bg-brand-gold text-brand-dark text-[10px] font-extrabold px-3 py-1.5 uppercase rounded-full shadow-lg">
                      Imprescindible
                    </div>
                  )}
                </div>
              )}
              
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-brand-gold transition-colors font-[family-name:var(--font-playfair)]">{item.name}</h3>
                    <span className="text-brand-gold font-black text-lg ml-4">{item.price.toFixed(2)}€</span>
                  </div>
                  <p className="text-white/50 text-sm font-light leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>
                
                {/* Diet Markers */}
                <div className="flex flex-wrap gap-2">
                  {item.allergens.map((alg) => {
                    const cfg = ALLERGEN_ICONS[alg];
                    if (!cfg) return null;
                    const Icon = cfg.icon;
                    return (
                      <div key={alg} className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                        <Icon size={12} className={cfg.color} />
                        <span className="text-[10px] uppercase tracking-tighter text-white/40">{cfg.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
          
          {filteredItems.length === 0 && (
            <div className="col-span-1 md:col-span-2 text-center py-12 text-white/40 glass-panel rounded-2xl">
              <Info size={32} className="mx-auto mb-3 opacity-50" />
              <p>Esta sección se está actualizando con nuevas delicias.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
