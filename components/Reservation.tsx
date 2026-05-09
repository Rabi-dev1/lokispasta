"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  message: string;
}

export default function Reservation() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reservierungsanfrage:", form);
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-cream border border-cream-dark rounded-xl px-4 py-3 text-wood font-body text-sm focus:outline-none focus:border-sage focus:ring-2 focus:ring-sage/20 transition-all placeholder:text-wood/40";

  return (
    <section id="reservierung" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-body text-terracotta text-sm font-medium tracking-[0.3em] uppercase mb-3">
            Reservierung
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-wood mb-4">
            Tisch reservieren
          </h2>
          <p className="text-wood/60 font-body max-w-md mx-auto">
            Sichere dir deinen Platz – wir freuen uns auf dich!
          </p>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-sage/10 border border-sage/30 rounded-2xl p-10 text-center"
          >
            <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-cream"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="font-display text-2xl font-bold text-wood mb-2">
              Danke, {form.name}!
            </h3>
            <p className="text-wood/70 font-body">
              Deine Reservierungsanfrage ist eingegangen. Wir bestätigen in Kürze.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 text-sage font-semibold text-sm hover:underline"
            >
              Neue Reservierung
            </button>
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-cream-dark/40 rounded-2xl p-6 sm:p-8 border border-cream-dark"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-wood/70 text-xs font-semibold uppercase tracking-widest mb-2 font-body">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Dein Name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-wood/70 text-xs font-semibold uppercase tracking-widest mb-2 font-body">
                  E-Mail *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="deine@email.de"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-wood/70 text-xs font-semibold uppercase tracking-widest mb-2 font-body">
                  Telefon
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+49 ..."
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-wood/70 text-xs font-semibold uppercase tracking-widest mb-2 font-body">
                  Personen *
                </label>
                <select
                  name="guests"
                  required
                  value={form.guests}
                  onChange={handleChange}
                  className={inputClass}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "Person" : "Personen"}
                    </option>
                  ))}
                  <option value="9+">9+ Personen</option>
                </select>
              </div>

              <div>
                <label className="block text-wood/70 text-xs font-semibold uppercase tracking-widest mb-2 font-body">
                  Datum *
                </label>
                <input
                  type="date"
                  name="date"
                  required
                  value={form.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-wood/70 text-xs font-semibold uppercase tracking-widest mb-2 font-body">
                  Uhrzeit *
                </label>
                <select
                  name="time"
                  required
                  value={form.time}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Uhrzeit wählen</option>
                  {[
                    "11:00","11:30","12:00","12:30","13:00","13:30","14:00",
                    "14:30","15:00","15:30","16:00","16:30","17:00","17:30",
                    "18:00","18:30","19:00","19:30","20:00","20:30",
                  ].map((t) => (
                    <option key={t} value={t}>
                      {t} Uhr
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label className="block text-wood/70 text-xs font-semibold uppercase tracking-widest mb-2 font-body">
                Anmerkungen
              </label>
              <textarea
                name="message"
                rows={3}
                placeholder="Besondere Wünsche, Allergien, Anlässe..."
                value={form.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-terracotta hover:bg-terracotta-light text-cream font-semibold py-4 rounded-xl text-base tracking-wide transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 font-body"
            >
              Reservierungsanfrage senden
            </button>

            <p className="text-center text-wood/40 text-xs mt-4 font-body">
              Mit dem Absenden stimmst du unserer{" "}
              <a href="/datenschutz" className="underline hover:text-wood/70">
                Datenschutzerklärung
              </a>{" "}
              zu.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
