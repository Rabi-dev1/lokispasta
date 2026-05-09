"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/restaurant-ambiance.jpg"
          alt="Loki's Pasta Restaurant Atmosphäre"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-wood/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-wood/40 via-transparent to-wood/80" />
      </div>

      {/* Decorative Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A96E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gold text-sm sm:text-base font-body font-medium tracking-[0.3em] uppercase mb-4"
        >
          Handgemachte Pasta Fresca
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight mb-6"
        >
          Authentische Pasta
          <br />
          {/* TODO: Ersetze "[Ihre Stadt]" mit dem echten Stadtnamen, z.B. "in Bremen" */}
          <span className="italic text-gold">in [Ihre Stadt]</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-cream/80 text-base sm:text-lg md:text-xl font-body font-light max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Wir kochen frisch! Baue deine perfekte Fettuccine Alfredo mit unserem
          einzigartigen Pasta Baukasten – deine Wahl, dein Geschmack.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="/reservierung"
            className="bg-terracotta hover:bg-terracotta-light text-cream px-8 py-4 rounded-full font-semibold text-base tracking-wide transition-all duration-200 hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto text-center"
          >
            Tisch reservieren
          </a>
          <a
            href="/speisekarte/baukasten"
            className="border-2 border-cream/60 hover:border-gold text-cream hover:text-gold px-8 py-4 rounded-full font-semibold text-base tracking-wide transition-all duration-200 w-full sm:w-auto text-center"
          >
            Zur Speisekarte
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-cream/40 rounded-full flex items-start justify-center pt-2"
          >
            <div className="w-1 h-2 bg-cream/60 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
