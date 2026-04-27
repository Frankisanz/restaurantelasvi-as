import { MapPin, Navigation, ExternalLink } from "lucide-react";

export function LocationSection() {
  const address = "Carretera Vieja de Rus, s/n, 23440 Baeza, Jaén";
  const encodedAddress = encodeURIComponent(address);
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
  const wazeUrl = `https://waze.com/ul?q=${encodedAddress}&navigate=yes`;

  return (
    <section className="py-12 md:py-20 w-full" id="ubicacion">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 font-[family-name:var(--font-playfair)]">
          Ven a <span className="text-gradient-gold">visitarnos</span>
        </h2>
        <p className="text-white/60 text-sm font-light max-w-md mx-auto">
          Nos encontramos en la carretera de Rus, a las afueras de Baeza, en un
          entorno tranquilo y con amplio aparcamiento.
        </p>
      </div>

      {/* Map Embed */}
      <div className="glass-panel rounded-2xl overflow-hidden mb-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.5!2d-3.4711!3d37.9938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDU5JzM3LjciTiAzwrAyOCcxNi4wIlc!5e0!3m2!1ses!2ses!4v1700000000000"
          width="100%"
          height="300"
          style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.1)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de Restaurante Las Viñas en Baeza"
          className="w-full"
        />
      </div>

      {/* Address & Buttons */}
      <div className="glass-panel rounded-2xl p-6 space-y-5">
        <div className="flex items-start gap-3">
          <MapPin size={20} className="text-brand-gold mt-0.5 shrink-0" />
          <div>
            <p className="text-white font-medium text-sm">Dirección</p>
            <p className="text-white/60 text-sm font-light">
              Carretera Vieja de Rus, s/n
              <br />
              23440 Baeza, Jaén
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-brand-gold text-brand-dark font-semibold py-3 px-6 rounded-xl hover:bg-brand-gold-hover transition-all duration-300 text-sm"
          >
            <Navigation size={16} />
            Cómo llegar (Google Maps)
          </a>
          <a
            href={wazeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 border border-brand-gold/40 text-brand-gold font-semibold py-3 px-6 rounded-xl hover:bg-brand-gold/10 transition-all duration-300 text-sm"
          >
            <ExternalLink size={16} />
            Abrir en Waze
          </a>
        </div>
      </div>
    </section>
  );
}
