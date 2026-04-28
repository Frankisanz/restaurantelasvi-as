import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { MenuSection } from "@/components/menu/MenuSection";
import { BarbacoaSection } from "@/components/home/BarbacoaSection";
import { FloatingReservation } from "@/components/home/FloatingReservation";
import { FloatingWhatsApp } from "@/components/home/FloatingWhatsApp";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { LocationSection } from "@/components/home/LocationSection";
import { AboutSection } from "@/components/home/AboutSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-brand-dark selection:bg-brand-gold selection:text-brand-dark">
        <HeroSection />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <AboutSection />
          <MenuSection />
        </div>

        <BarbacoaSection />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <TestimonialsSection />
          <LocationSection />
        </div>

        <FloatingReservation />
        <FloatingWhatsApp />
      </main>
      <Footer />
    </>
  );
}
