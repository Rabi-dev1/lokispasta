import Link from "next/link";

const RESTAURANT_NAME = "Loki's Pasta";
const STREET = "Herforderstraße 12";
const ZIP_CITY = "33602 Bielefeld";
const EMAIL = "bielefeld@lokispasta.de";

export default function Footer() {
  return (
    <footer className="bg-wood-light border-t border-cream/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <p className="font-display text-2xl font-bold text-cream mb-3 italic">
              Loki&apos;s Pasta
            </p>
            <p className="text-cream/60 text-sm font-body leading-relaxed mb-4">
              <span className="text-gold font-semibold">Wir kochen frisch!</span>
              <br />
              So bringen wir echten Geschmack auf den Teller.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/lokis.pasta/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-cream/10 hover:bg-terracotta flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 text-cream" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-cream font-semibold text-sm uppercase tracking-widest mb-4 font-body">
              Öffnungszeiten
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-body">
                <span className="text-cream/60">Mo – Sa</span>
                <span className="text-cream">12:00 – 21:00</span>
              </div>
              <div className="flex justify-between text-sm font-body">
                <span className="text-cream/60">So</span>
                <span className="text-cream">Geschlossen</span>
              </div>
            </div>

            <h3 className="text-cream font-semibold text-sm uppercase tracking-widest mb-4 mt-8 font-body">
              Schnellnavigation
            </h3>
            <div className="space-y-2">
              {[
                { href: "#menu", label: "Speisekarte" },
                { href: "#reservierung", label: "Tisch reservieren" },
                { href: "#kontakt", label: "Kontakt" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-cream/60 hover:text-gold text-sm font-body transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Address – plain text for Google Local SEO */}
          <div>
            <h3 className="text-cream font-semibold text-sm uppercase tracking-widest mb-4 font-body">
              Adresse
            </h3>
            <address className="not-italic text-cream/60 text-sm font-body space-y-1 leading-relaxed">
              <strong className="text-cream font-semibold">{RESTAURANT_NAME}</strong>
              <br />
              <span>{STREET}</span>
              <br />
              <span>{ZIP_CITY}</span>
              <br />
              <a href={`mailto:${EMAIL}`} className="hover:text-gold transition-colors block mt-2">
                {EMAIL}
              </a>
            </address>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-cream font-semibold text-sm uppercase tracking-widest mb-4 font-body">
              Rechtliches
            </h3>
            <div className="space-y-2">
              <Link
                href="/impressum"
                className="block text-cream/60 hover:text-gold text-sm font-body transition-colors"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="block text-cream/60 hover:text-gold text-sm font-body transition-colors"
              >
                Datenschutzerklärung
              </Link>
              <a
                href="#"
                className="block text-cream/60 hover:text-gold text-sm font-body transition-colors"
              >
                Cookie-Einstellungen
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cream/40 text-xs font-body">
            © {new Date().getFullYear()} Loki&apos;s Pasta. Alle Rechte vorbehalten.
          </p>
          <p className="text-cream/30 text-xs font-body italic">
            Handgemachte Pasta Fresca – Pasta Baukasten – Lokales italienisches Restaurant
          </p>
        </div>
        <div className="mt-6 pb-2 text-center">
          <a
            href="https://www.kundenpilot.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 font-body transition-all duration-300"
            style={{ textDecoration: "none" }}
          >
            <span style={{ fontSize: "0.72rem", color: "rgba(250,247,242,0.35)", letterSpacing: "0.04em" }}>
              Website by
            </span>
            <span
              className="group-hover:text-gold transition-colors duration-300"
              style={{
                fontSize: "0.82rem",
                fontWeight: 600,
                color: "rgba(250,247,242,0.7)",
                letterSpacing: "0.03em",
                borderBottom: "1px solid rgba(250,247,242,0.2)",
                paddingBottom: "1px",
              }}
            >
              KundenPilot
            </span>
            <svg
              className="w-3 h-3 transition-all duration-300 group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              style={{ color: "rgba(250,247,242,0.35)" }}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
