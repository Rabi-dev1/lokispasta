import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import Reservation from "@/components/Reservation";

const CITY = "Deiner Stadt"; // TODO: Ersetze mit echtem Stadtname

export const metadata: Metadata = {
  title: `Tisch reservieren | Loki's Pasta – Handgemachte Pasta in ${CITY}`,
  description:
    "Reserviere jetzt deinen Tisch bei Loki's Pasta – dem lokalen italienischen Restaurant mit handgemachter Pasta Fresca. Schnell, einfach, unkompliziert.",
  alternates: { canonical: "/reservierung" },
  openGraph: {
    title: "Tisch reservieren – Loki's Pasta",
    description: "Sichere dir jetzt deinen Platz bei Loki's Pasta.",
    type: "website",
  },
};

export default function ReservierungPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-cream">
        <Reservation />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
