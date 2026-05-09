import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – Loki's Pasta",
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-cream py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sage hover:text-sage-dark font-body text-sm mb-10 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Zurück zur Startseite
        </Link>

        <h1 className="font-display text-3xl sm:text-4xl font-bold text-wood mb-8">
          Impressum
        </h1>

        <div className="prose prose-stone font-body space-y-6 text-wood/80">
          <section>
            <h2 className="font-display text-xl font-semibold text-wood mb-2">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="text-sm leading-relaxed">
              Loki&apos;s Pasta
              <br />
              Musterstraße 1<br />
              12345 Musterstadt
              <br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-wood mb-2">
              Kontakt
            </h2>
            <p className="text-sm leading-relaxed">
              Telefon: +49 (0) 123 456789
              <br />
              E-Mail: info@lokispasta.de
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-wood mb-2">
              Verantwortlich für den Inhalt
            </h2>
            <p className="text-sm leading-relaxed">
              [Name des Inhabers]
              <br />
              Musterstraße 1<br />
              12345 Musterstadt
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-wood mb-2">
              Haftungsausschluss
            </h2>
            <p className="text-sm leading-relaxed">
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt
              erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der
              Inhalte übernehmen wir keine Gewähr. Als Diensteanbieter sind wir
              für eigene Inhalte auf diesen Seiten nach § 7 Abs. 1 TMG
              verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-wood mb-2">
              Streitschlichtung
            </h2>
            <p className="text-sm leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <span className="text-sage">https://ec.europa.eu/consumers/odr/</span>
              . Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
