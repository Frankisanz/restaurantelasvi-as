import Image from "next/image";
import { Flame, Wine, Heart } from "lucide-react";

export function AboutSection() {
  const features = [
    {
      icon: Flame,
      title: "Brasa de Encina",
      description:
        "Nuestras carnes descansan sobre el fuego lento de la encina seleccionada, logrando un ahumado profundo y una textura que solo el tiempo y el respeto al fuego pueden otorgar.",
    },
    {
      icon: Wine,
      title: "Cava de Proximidad",
      description:
        "Una selección honesta de caldos de Jaén y las mejores denominaciones nacionales, elegidos para elevar cada matiz de nuestra cocina mediterránea.",
    },
    {
      icon: Heart,
      title: "Orgullo Jiennense",
      description:
        "El Aceite de Oliva Virgen Extra de Baeza es el alma de nuestra cocina. Trabajamos mano a mano con agricultores y ganaderos locales para garantizar la frescura.",
    },
  ];

  return (
    <section className="py-16 md:py-32 w-full" id="sobre-nosotros">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold">
              Nuestro Legado
            </p>
            <h2 className="text-4xl md:text-6xl font-black text-white font-[family-name:var(--font-playfair)] leading-tight">
              Donde la Tierra <br />
              <span className="text-gradient-gold">Se Vuelve Arte</span>
            </h2>
          </div>
          
          <div className="space-y-6 text-white/60 font-light leading-relaxed text-lg">
            <p>
              En el corazón de Baeza, **Restaurante Las Viñas** nació con una promesa: honrar la despensa de Jaén. No entendemos la cocina sin el crepitar de la brasa de encina ni el brillo del mejor aceite de oliva del mundo.
            </p>
            <p>
              Cada plato es un viaje por nuestra geografía, desde las Huertas de Baeza hasta las Sierras de Cazorla. Nuestra cocina de autor no olvida sus raíces, transformando lo tradicional en una experiencia contemporánea y honesta.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-4">
            <div className="space-y-1">
              <p className="text-3xl font-bold text-brand-gold">15+</p>
              <p className="text-xs uppercase tracking-widest text-white/40">Años de Tradición</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-bold text-brand-gold">100%</p>
              <p className="text-xs uppercase tracking-widest text-white/40">Producto KM 0</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 h-[500px]">
          <div className="relative rounded-3xl overflow-hidden mt-12 bg-brand-dark/50 group">
             <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/20 to-transparent z-10 pointer-events-none" />
             <Image 
                src="/emplatado.jpg.jpg" 
                alt="Emplatado de alta cocina en Restaurante Las Viñas Baeza" 
                fill 
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
             />
          </div>
          <div className="relative rounded-3xl overflow-hidden mb-12 bg-brand-dark/50 group">
             <div className="absolute inset-0 bg-gradient-to-t from-brand-gold/20 to-transparent z-10 pointer-events-none" />
             <Image 
                src="/comedor.jpg.jpg" 
                alt="Comedor elegante del Restaurante Las Viñas" 
                fill 
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
             />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="glass-panel rounded-[2.5rem] p-8 group hover:border-brand-gold/40 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-gold/20 transition-colors duration-300">
                <Icon size={28} className="text-brand-gold" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3 font-[family-name:var(--font-playfair)]">
                {feature.title}
              </h3>
              <p className="text-white/50 text-sm font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
