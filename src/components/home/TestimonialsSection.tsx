"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const REVIEWS = [
  {
    id: 1,
    name: "María Gómez",
    text: "La mejor carne a la brasa que he probado en toda la provincia de Jaén. El chuletón de 45 días es espectacular. El servicio impecable y la atmósfera, elegante pero acogedora. Volveremos seguro.",
    rating: 5,
    date: "Hace 2 semanas",
  },
  {
    id: 2,
    name: "Carlos R.",
    text: "Espectacular paella de marisco. Recomiendo reservar con antelación porque siempre está lleno, y con razón. Las croquetas de ibérico son de otro mundo. Una experiencia gastronómica completa.",
    rating: 5,
    date: "Hace 1 mes",
  },
  {
    id: 3,
    name: "Ana Martínez",
    text: "Celebramos nuestro aniversario aquí y fue perfecto. El secreto ibérico estaba increíble y el tiramisú casero, para morirse. El personal nos trató de maravilla. Precio justo para la calidad.",
    rating: 5,
    date: "Hace 3 semanas",
  },
  {
    id: 4,
    name: "Javier L.",
    text: "Sin duda el mejor restaurante de Baeza. El arroz meloso de setas y boletus es una obra de arte. El vino de la Sierra de Cazorla marida a la perfección. Local muy acogedor.",
    rating: 4,
    date: "Hace 2 meses",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  // Mobile: show 1, Desktop: show 2
  const goNext = () => setCurrent((prev) => (prev + 1) % REVIEWS.length);
  const goPrev = () =>
    setCurrent((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);

  // Get the visible reviews (current and next for desktop)
  const visibleReviews = [
    REVIEWS[current],
    REVIEWS[(current + 1) % REVIEWS.length],
  ];

  return (
    <section className="py-12 md:py-20 w-full" id="reviews">
      <div className="text-center mb-10">
        <p className="text-brand-gold uppercase tracking-[0.2em] text-xs font-medium mb-3">
          Reseñas Verificadas
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-playfair)] mb-3">
          Lo que dicen de{" "}
          <span className="text-gradient-gold">nosotros</span>
        </h2>
        <div className="flex items-center justify-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              className="text-brand-gold"
              fill="currentColor"
            />
          ))}
          <span className="text-white/50 text-sm ml-2 font-light">
            4.6 en Google ({REVIEWS.length * 82} reseñas)
          </span>
        </div>
      </div>

      {/* Desktop: 2-column grid */}
      <div className="hidden md:grid grid-cols-2 gap-6">
        {visibleReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {/* Mobile: single card carousel */}
      <div className="md:hidden">
        <ReviewCard review={REVIEWS[current]} />
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={goPrev}
          className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
          aria-label="Reseña anterior"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex gap-1.5">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-brand-gold w-6"
                  : "bg-white/15 w-3 hover:bg-white/25"
              }`}
              aria-label={`Ir a reseña ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
          aria-label="Siguiente reseña"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}

function ReviewCard({
  review,
}: {
  review: (typeof REVIEWS)[number];
}) {
  return (
    <div className="glass-panel p-6 rounded-2xl flex flex-col justify-between min-h-[200px]">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex text-brand-gold">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} size={15} fill="currentColor" />
            ))}
          </div>
          <span className="text-white/30 text-xs font-light">
            {review.date}
          </span>
        </div>
        <p className="text-white/75 font-light italic text-sm leading-relaxed mb-6">
          &ldquo;{review.text}&rdquo;
        </p>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-brand-gold/15 flex items-center justify-center text-brand-gold font-bold text-sm">
          {review.name.charAt(0)}
        </div>
        <div>
          <span className="text-white font-medium text-sm block leading-tight">
            {review.name}
          </span>
          <span className="text-white/30 text-xs">Google Reviews</span>
        </div>
      </div>
    </div>
  );
}
