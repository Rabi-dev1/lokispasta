import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – Loki's Pasta",
  robots: { index: false },
};

export default function DatenschutzPage() {
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
          Datenschutzerklärung
        </h1>

        <div className="font-body space-y-8 text-wood/80 text-sm leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-semibold text-wood mb-3">
              1. Datenschutz auf einen Blick
            </h2>
            <p>
              Diese Datenschutzerklärung klärt Sie über Art, Umfang und Zweck der
              Verarbeitung von personenbezogenen Daten auf unserer Website auf.
              Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
              identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-wood mb-3">
              2. Verantwortlicher
            </h2>
            <p>
              Loki&apos;s Pasta
              <br />
              Musterstraße 1, 12345 Musterstadt
              <br />
              E-Mail: info@lokispasta.de
              <br />
              Telefon: +49 (0) 123 456789
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-wood mb-3">
              3. Datenerfassung auf dieser Website
            </h2>
            <h3 className="font-semibold text-wood mb-2">Reservierungsformular</h3>
            <p>
              Wenn Sie über unser Reservierungsformular eine Tischreservierung
              anfragen, erheben wir folgende Daten: Name, E-Mail-Adresse, Telefon
              (optional), Datum, Uhrzeit, Personenanzahl und optionale Anmerkungen.
              Diese Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage
              verwendet.
            </p>
            <h3 className="font-semibold text-wood mt-4 mb-2">Cookies</h3>
            <p>
              Unsere Website verwendet Cookies, um die Nutzererfahrung zu
              verbessern. Sie können die Verwendung von Cookies über den
              Cookie-Banner ablehnen. Technisch notwendige Cookies können nicht
              deaktiviert werden.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-wood mb-3">
              4. Ihre Rechte
            </h2>
            <p>Sie haben das Recht auf:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            </ul>
            <p className="mt-3">
              Für Anfragen wenden Sie sich an: info@lokispasta.de
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-wood mb-3">
              5. Google Maps
            </h2>
            <p>
              Auf unserer Website ist Google Maps eingebunden. Beim Laden der
              Karte werden Daten an Google LLC, 1600 Amphitheatre Parkway,
              Mountain View, CA 94043, USA übermittelt. Rechtsgrundlage ist Art.
              6 Abs. 1 lit. f DSGVO. Mehr Informationen finden Sie in der{" "}
              <span className="text-sage">Datenschutzerklärung von Google</span>.
            </p>
          </section>

          <p className="text-wood/40 text-xs">
            Stand: {new Date().toLocaleDateString("de-DE", { month: "long", year: "numeric" })}
          </p>
        </div>
      </div>
    </div>
  );
}
