import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import MenuSection, { type TabId } from "@/components/MenuSection";

const VALID_TABS: TabId[] = ["baukasten", "empfehlungen", "davor-danach", "getraenke"];

const CITY = "Deiner Stadt"; // TODO: Ersetze mit echtem Stadtname, z.B. "Bremen"

const TAB_META: Record<
  TabId,
  { title: string; description: string; canonical: string }
> = {
  baukasten: {
    title: `Pasta Baukasten | Handgemachte Fettuccine Alfredo in ${CITY} – Loki's Pasta`,
    description:
      "Baue deine perfekte Pasta Fresca: Fettuccine Alfredo ab 7,50 € mit Soßen wie Bolognese (+2 €), Pesto (+1 €) oder Arrabbiata (+1,50 €) und Toppings wie Lachs (+3 €) oder Garnelen (+3 €). Jeden Tag frisch gekocht.",
    canonical: "/speisekarte/baukasten",
  },
  empfehlungen: {
    title: `Loki's Empfehlungen | Kuratierte Pasta-Menüs ab 11,50 € – Loki's Pasta`,
    description:
      "8 kuratierte Pasta-Menüs von Loki: Bolognese-Menü ab 11,50 €, Lachs-Spinat-Sahne für 13 €, Pesto mit Mini Mozzarella & getrockneten Tomaten für 14 €. Jedes Menü inklusive Getränk nach Wahl.",
    canonical: "/speisekarte/empfehlungen",
  },
  "davor-danach": {
    title: `Knoblauchbrot & Tiramisu | Für davor & danach – Loki's Pasta`,
    description:
      "Starte mit unserem Knoblauchbrot Spezial mit Pesto und frischem Parmesan (3,50 €) oder genieße zum Abschluss ein klassisches hausgemachtes Tiramisu (3,50 €) bei Loki's Pasta.",
    canonical: "/speisekarte/davor-danach",
  },
  getraenke: {
    title: `Getränkekarte | Softdrinks, Kaffee & mehr – Loki's Pasta`,
    description:
      "Fritz-Kola, Elephant Bay, Coca Cola, stilles und sprudelndes Wasser (je 2,80 €) sowie heiße Spezialitäten: Espresso ab 2 €, Cappuccino 2,80 €, Latte Macchiato 3 €.",
    canonical: "/speisekarte/getraenke",
  },
};

// JSON-LD Menu Schema mit echten Preisen
function menuJsonLd(tab: TabId) {
  const base = {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: "Loki's Pasta – Vollständige Speisekarte",
    description: "Handgemachte Fettuccine Alfredo – Pasta Baukasten und Empfehlungen",
    hasMenuSection: [
      {
        "@type": "MenuSection",
        name: "Loki's Pasta Baukasten",
        description: "Basis: Fettuccine Alfredo – wähle Soße und Toppings",
        hasMenuItem: [
          {
            "@type": "MenuItem",
            name: "Fettuccine Alfredo – Basis",
            offers: { "@type": "Offer", price: "7.50", priceCurrency: "EUR" },
          },
          {
            "@type": "MenuItem",
            name: "Fettuccine Alfredo mit Bolognese",
            offers: { "@type": "Offer", price: "9.50", priceCurrency: "EUR" },
          },
          {
            "@type": "MenuItem",
            name: "Fettuccine Alfredo mit Lachs",
            offers: { "@type": "Offer", price: "10.50", priceCurrency: "EUR" },
          },
          {
            "@type": "MenuItem",
            name: "Fettuccine Alfredo mit Garnelen",
            offers: { "@type": "Offer", price: "10.50", priceCurrency: "EUR" },
          },
        ],
      },
      {
        "@type": "MenuSection",
        name: "Loki's Empfehlungen",
        description: "Kuratierte Kombinations-Menüs inkl. Getränk",
        hasMenuItem: [
          {
            "@type": "MenuItem",
            name: "Menü 1 – Bolognese + Parmesan",
            offers: { "@type": "Offer", price: "11.50", priceCurrency: "EUR" },
          },
          {
            "@type": "MenuItem",
            name: "Menü 2 – Cherry-Tomaten + Mini Mozzarella + Rucola",
            offers: { "@type": "Offer", price: "13.50", priceCurrency: "EUR" },
          },
          {
            "@type": "MenuItem",
            name: "Menü 3 – Pesto + Mini Mozzarella + getrocknete Tomaten",
            offers: { "@type": "Offer", price: "14.00", priceCurrency: "EUR" },
          },
          {
            "@type": "MenuItem",
            name: "Menü 4 – Gebratene Hähnchen + Sahnesoße",
            offers: { "@type": "Offer", price: "11.50", priceCurrency: "EUR" },
          },
          {
            "@type": "MenuItem",
            name: "Menü 5 – Lachs + Sahnesoße + Spinat",
            offers: { "@type": "Offer", price: "13.00", priceCurrency: "EUR" },
          },
          {
            "@type": "MenuItem",
            name: "Menü 6 – Garnelen + Cherry Tomaten + Knoblauch",
            offers: { "@type": "Offer", price: "13.00", priceCurrency: "EUR" },
          },
          {
            "@type": "MenuItem",
            name: "Menü 7 – Hähnchen + Champignons + Curry-Sahnesoße",
            offers: { "@type": "Offer", price: "12.50", priceCurrency: "EUR" },
          },
          {
            "@type": "MenuItem",
            name: "Menü 8 – Cheddar + Mais + Jalapeños",
            offers: { "@type": "Offer", price: "12.50", priceCurrency: "EUR" },
          },
        ],
      },
      {
        "@type": "MenuSection",
        name: "Für davor & danach",
        hasMenuItem: [
          {
            "@type": "MenuItem",
            name: "Knoblauchbrot Spezial",
            offers: { "@type": "Offer", price: "3.50", priceCurrency: "EUR" },
          },
          {
            "@type": "MenuItem",
            name: "Tiramisu",
            offers: { "@type": "Offer", price: "3.50", priceCurrency: "EUR" },
          },
        ],
      },
    ],
  };
  return base;
}

type Props = { params: Promise<{ tab: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tab } = await params;
  const meta = TAB_META[tab as TabId];
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.canonical },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
    },
  };
}

export function generateStaticParams() {
  return VALID_TABS.map((tab) => ({ tab }));
}

export default async function SpeisekartePage({ params }: Props) {
  const { tab } = await params;
  if (!VALID_TABS.includes(tab as TabId)) notFound();

  const jsonLd = menuJsonLd(tab as TabId);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="pt-20">
        <MenuSection defaultTab={tab as TabId} />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
