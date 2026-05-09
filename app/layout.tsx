import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Loki's Pasta – Handgemachte Pasta Fresca im Herzen der Stadt",
  description:
    "Entdecke Loki's Pasta: frische, handgemachte Fettuccine Alfredo im Pasta Baukasten-System. Wähle deine Soße und Toppings – lokales italienisches Restaurant mit echtem Geschmack.",
  keywords: [
    "handgemachte Pasta Fresca",
    "Pasta Baukasten",
    "lokales italienisches Restaurant",
    "Fettuccine Alfredo",
    "Loki's Pasta",
    "frische Pasta",
  ],
  openGraph: {
    title: "Loki's Pasta – Handgemachte Pasta Fresca",
    description:
      "Frische Fettuccine Alfredo mit deiner Wahl aus Soßen und Toppings. Wir kochen frisch!",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Loki's Pasta",
  description:
    "Authentische handgemachte Pasta Fresca – Pasta Baukasten und Loki's Empfehlungen",
  servesCuisine: ["Italian", "Pasta"],
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, Credit Card",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "11:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "12:00",
      closes: "21:00",
    },
  ],
  hasMenu: {
    "@type": "Menu",
    name: "Loki's Pasta Speisekarte",
    hasMenuSection: [
      {
        "@type": "MenuSection",
        name: "Loki's Pasta Baukasten",
        description: "Fettuccine Alfredo mit Wahl der Soße und Toppings",
      },
      {
        "@type": "MenuSection",
        name: "Loki's Empfehlungen",
        description: "Kuratierte Pasta-Kombinationen von Loki",
      },
      {
        "@type": "MenuSection",
        name: "Für davor & danach",
        description: "Knoblauchbrot und Tiramisu",
      },
      {
        "@type": "MenuSection",
        name: "Getränke",
        description: "Softdrinks, Wasser und heiße Spezialitäten",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
