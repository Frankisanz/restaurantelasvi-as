import type { Metadata, Viewport } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: "#12100E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Restaurante Las Viñas | El Mejor Restaurante en Baeza, Jaén",
  description:
    "Restaurante Las Viñas en Baeza, Jaén. Especialistas en carnes a la brasa de encina, arroces artesanales y cocina de proximidad. Reserva tu mesa online. Experiencia gastronómica 5 estrellas.",
  keywords: [
    "restaurante Baeza",
    "mejor restaurante Jaén",
    "carne a la brasa Baeza",
    "arroces Baeza Jaén",
    "restaurante Las Viñas",
    "comer en Baeza",
    "gastronomía Jaén",
  ],
  authors: [{ name: "Restaurante Las Viñas" }],
  creator: "Restaurante Las Viñas",
  publisher: "Restaurante Las Viñas",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Restaurante Las Viñas | Experiencia Gastronómica en Baeza",
    description: "Donde el fuego abraza la tradición. Cortes selectos a la brasa, arroces con solera y el mejor AOVE de Jaén.",
    url: "https://restaurantelasvinas.com",
    siteName: "Restaurante Las Viñas",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Restaurante Las Viñas Baeza",
      },
    ],
  },
  icons: {
    icon: "/logo-las-vinas.jpg",
    shortcut: "/logo-las-vinas.jpg",
    apple: "/logo-las-vinas.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurante Las Viñas | Baeza, Jaén",
    description: "La mejor brasa de encina y cocina tradicional en el corazón de Jaén.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${outfit.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        {/* Schema.org Restaurant Full Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "@id": "https://restaurantelasvinas.com",
              name: "Restaurante Las Viñas",
              image: [
                "https://images.unsplash.com/photo-1544148103-0773bf10d330",
                "https://images.unsplash.com/photo-1544025162-d76694265947"
              ],
              url: "https://restaurantelasvinas.com",
              telephone: "+34953462074",
              priceRange: "€€-€€€",
              servesCuisine: ["Mediterránea", "Española", "Brasa", "Arroces"],
              hasMenu: "https://restaurantelasvinas.com/#menu",
              acceptsReservations: "true",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Carretera Vieja de Rus, s/n",
                addressLocality: "Baeza",
                addressRegion: "Jaén",
                postalCode: "23440",
                addressCountry: "ES",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 37.993856,
                longitude: -3.471132,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  opens: "13:00",
                  closes: "16:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Thursday", "Friday", "Saturday"],
                  opens: "20:30",
                  closes: "23:30",
                }
              ],
              sameAs: [
                "https://www.facebook.com/restaurantelasvinasbaeza",
                "https://www.instagram.com/restaurante_lasvinas"
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-brand-dark text-brand-light font-sans antialiased selection:bg-brand-gold selection:text-brand-dark">
        {children}
      </body>
    </html>
  );
}
