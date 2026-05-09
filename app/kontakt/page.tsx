import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import Contact from "@/components/Contact";

const CITY = "Bielefeld";

export const metadata: Metadata = {
  title: `Kontakt & Anfahrt | Loki's Pasta – Pasta Restaurant in ${CITY}`,
  description:
    "Finde Loki's Pasta in Deiner Stadt: Adresse, Öffnungszeiten, Anfahrt per Google Maps. Montag–Freitag 11–21 Uhr, Samstag & Sonntag 12–21 Uhr.",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    title: "Kontakt & Anfahrt – Loki's Pasta",
    description: "Adresse, Öffnungszeiten und Anfahrt für Loki's Pasta.",
    type: "website",
  },
};

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen">
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
