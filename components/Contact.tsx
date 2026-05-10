"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Contact() {
  const hours = [
    { days: "Montag – Samstag", time: "12:00 – 21:00 Uhr" },
  ];

  return (
    <section id="kontakt" className="py-20 sm:py-28 bg-wood">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-body text-gold text-sm font-medium tracking-[0.3em] uppercase mb-3">
            Besuche uns
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cream">
            Kontakt & Anfahrt
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Info */}
          <div className="space-y-8">
            {/* Storefront Image */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-56 sm:h-64 rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/food-takeout-pasta.jpg"
                alt="Loki's Pasta Restaurant"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wood/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="font-display text-cream text-lg font-bold italic">
                  Wir freuen uns auf dich!
                </span>
              </div>
            </motion.div>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-cream/10 border border-cream/10 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-gold mt-0.5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <p className="text-cream/50 text-xs font-body uppercase tracking-widest mb-1">
                      Adresse
                    </p>
                    <p className="text-cream font-body text-sm font-medium">
                      Loki&apos;s Pasta
                      <br />
                      Herforderstraße 12<br />
                      33602 Bielefeld
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-cream/10 border border-cream/10 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-gold mt-0.5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <p className="text-cream/50 text-xs font-body uppercase tracking-widest mb-1">
                      Kontakt
                    </p>
                    <p className="text-cream font-body text-sm font-medium">
                      bielefeld@lokispasta.de
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-cream/10 border border-cream/10 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-4">
                <svg
                  className="w-5 h-5 text-gold shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-cream/50 text-xs font-body uppercase tracking-widest">
                  Öffnungszeiten
                </p>
              </div>
              {hours.map((h) => (
                <div
                  key={h.days}
                  className="flex justify-between items-center py-2 border-b border-cream/10 last:border-0"
                >
                  <span className="text-cream/70 text-sm font-body">{h.days}</span>
                  <span className="text-cream font-semibold text-sm font-body">
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl overflow-hidden border border-cream/10 h-80 sm:h-96 lg:h-full min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.3576289523826!2d13.40495!3d52.520008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDMxJzEyLjAiTiAxM8KwMjQnMTcuOCJF!5e0!3m2!1sde!2sde!4v1620000000000!5m2!1sde!2sde"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Loki's Pasta – Standort"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
