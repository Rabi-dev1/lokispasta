"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ type: "spring", stiffness: 300, damping: 35 }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-sm z-50"
        >
          <div className="bg-wood border border-cream/20 rounded-2xl shadow-2xl p-5">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-xl">🍪</span>
              <div>
                <p className="text-cream font-semibold text-sm font-body mb-1">
                  Cookie-Hinweis
                </p>
                <p className="text-cream/60 text-xs font-body leading-relaxed">
                  Wir verwenden Cookies, um dein Erlebnis zu verbessern. Mehr dazu
                  in unserer{" "}
                  <Link
                    href="/datenschutz"
                    className="text-gold underline hover:text-gold/80"
                  >
                    Datenschutzerklärung
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={accept}
                className="flex-1 bg-terracotta hover:bg-terracotta-light text-cream text-xs font-semibold py-2.5 rounded-xl transition-colors font-body"
              >
                Alle akzeptieren
              </button>
              <button
                onClick={decline}
                className="flex-1 bg-cream/10 hover:bg-cream/20 text-cream text-xs font-semibold py-2.5 rounded-xl transition-colors font-body"
              >
                Ablehnen
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
