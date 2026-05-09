"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "Maximilian R.",
    rating: 5,
    text: "Die beste Pasta, die ich in der Stadt gegessen habe! Der Baukasten ist eine geniale Idee – ich komme jetzt jede Woche. Die Qualität ist einfach unschlagbar.",
    date: "April 2026",
    initial: "M",
  },
  {
    name: "Sophie K.",
    rating: 5,
    text: "Endlich ein Restaurant, das frisch kocht! Man schmeckt sofort, dass die Pasta wirklich handgemacht ist. Menü 3 mit Pesto ist mein absoluter Favorit!",
    date: "März 2026",
    initial: "S",
  },
  {
    name: "Jonas W.",
    rating: 5,
    text: "Das Knoblauchbrot ist ein Traum. Aber die Lachs-Pasta mit Spinat ist nochmal eine Klasse für sich. Freundliches Personal, faire Preise – ich bin begeistert!",
    date: "Mai 2026",
    initial: "J",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-gold fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="py-20 sm:py-28 bg-sage">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-body text-gold text-sm font-medium tracking-[0.3em] uppercase mb-3">
            Was unsere Gäste sagen
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cream">
            Echte Begeisterung
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-cream/10 backdrop-blur-sm border border-cream/20 rounded-2xl p-6 sm:p-7"
            >
              <StarRating count={review.rating} />
              <p className="text-cream/85 font-body text-sm sm:text-base leading-relaxed mt-4 mb-6 italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-terracotta flex items-center justify-center font-display font-bold text-cream text-lg shrink-0">
                  {review.initial}
                </div>
                <div>
                  <p className="font-semibold text-cream text-sm">{review.name}</p>
                  <p className="text-cream/50 text-xs font-body">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-3 gap-4 sm:gap-8 border-t border-cream/20 pt-10">
          {[
            { value: "5.0", label: "Google Bewertung" },
            { value: "100+", label: "Zufriedene Gäste" },
            { value: "frisch", label: "Täglich gekocht" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-2xl sm:text-4xl font-bold text-gold">
                {stat.value}
              </p>
              <p className="font-body text-cream/60 text-xs sm:text-sm mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
