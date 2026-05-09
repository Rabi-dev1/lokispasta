import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Loki's Pasta – Handgemachte Pasta Fresca | Lokales Pasta Restaurant",
  description:
    "Loki's Pasta: frische, handgemachte Fettuccine Alfredo im einzigartigen Pasta Baukasten-System. Wähle Soße und Toppings oder greife zu Loki's kuratierten Empfehlungen ab 11,50 €. Wir kochen frisch!",
  alternates: { canonical: "/" },
};

function CtaSection() {
  const links = [
    {
      href: "/speisekarte/baukasten",
      icon: "🍝",
      title: "Pasta Baukasten",
      desc: "Stelle deine perfekte Pasta Fresca nach Wahl zusammen – ab 7,50 €.",
      cta: "Zur Speisekarte",
      image: "/images/pasta-bowls.jpg",
      imageAlt:
        "Hausgemachte Fettuccine Alfredo in verschiedenen Variationen – Loki's Pasta Baukasten",
    },
    {
      href: "/reservierung",
      icon: "📅",
      title: "Tisch reservieren",
      desc: "Sichere deinen Platz direkt online – unkompliziert und kostenlos.",
      cta: "Jetzt reservieren",
      image: "/images/restaurant-ambiance.jpg",
      imageAlt:
        "Restaurantatmosphäre bei Loki's Pasta – Marmortische mit Blick auf die Innenstadt",
    },
    {
      href: "/kontakt",
      icon: "📍",
      title: "Kontakt & Anfahrt",
      desc: "Öffnungszeiten, Adresse und Anfahrt auf einen Blick.",
      cta: "Zum Kontakt",
      image: "/images/food-takeout-pasta.jpg",
      imageAlt:
        "Loki's Pasta Takeout – Knoblauchbrot Brioche und Hähnchen-Spinat-Pasta to go",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-body text-terracotta text-sm font-medium tracking-[0.3em] uppercase mb-3">
            Entdecke Loki&apos;s Pasta
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-wood">
            Alles, was du brauchst
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group bg-cream-dark rounded-2xl overflow-hidden border border-cream-dark hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={l.image}
                  alt={l.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wood/60 to-transparent" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-xl font-semibold text-wood mb-2">{l.title}</h3>
                <p className="text-wood/60 font-body text-sm leading-relaxed flex-1">{l.desc}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sage font-semibold text-sm group-hover:gap-3 transition-all">
                  {l.cta}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CtaSection />
        <Reviews />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
