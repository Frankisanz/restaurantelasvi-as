"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#menu", label: "Carta" },
  { href: "#reviews", label: "Opiniones" },
  { href: "#ubicacion", label: "Ubicación" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-brand-dark/90 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-brand-gold text-xl font-bold font-[family-name:var(--font-playfair)] tracking-tight group-hover:opacity-80 transition-opacity">
            Las Viñas
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-brand-gold text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+34953462074"
            className="flex items-center gap-1.5 text-brand-gold text-sm font-semibold hover:opacity-80 transition-opacity"
          >
            <Phone size={14} />
            953 46 20 74
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden text-white/80 hover:text-white p-2 -mr-2 transition-colors"
          aria-label="Abrir menú"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-brand-dark/95 backdrop-blur-xl border-t border-white/5 animate-fade-in">
          <div className="px-6 py-6 space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="block text-white/80 hover:text-brand-gold text-lg font-medium py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10">
              <a
                href="tel:+34953462074"
                className="flex items-center gap-2 text-brand-gold font-semibold"
              >
                <Phone size={16} />
                953 46 20 74
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
