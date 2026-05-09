"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export type TabId = "baukasten" | "empfehlungen" | "davor-danach" | "getraenke";

export const TABS: { id: TabId; label: string }[] = [
  { id: "baukasten", label: "Pasta Baukasten" },
  { id: "empfehlungen", label: "Loki's Empfehlungen" },
  { id: "davor-danach", label: "Für davor & danach" },
  { id: "getraenke", label: "Getränke" },
];

function PriceRow({ name, price }: { name: string; price: string }) {
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-cream-dark/50 last:border-0">
      <span className="text-wood font-body text-sm sm:text-base">{name}</span>
      <span className="text-terracotta font-semibold text-sm sm:text-base ml-4 shrink-0">
        +{price} €
      </span>
    </div>
  );
}

function MenuItemCard({
  number,
  ingredients,
  price,
  image,
  imageAlt,
}: {
  number: number;
  ingredients: string;
  price: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <div className="bg-cream border border-cream-dark rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
      {image && (
        <div className="relative h-40 sm:h-48">
          <Image
            src={image}
            alt={imageAlt ?? `Loki's Pasta Menü ${number} – handgemachte Fettuccine Alfredo`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-wood/40 to-transparent" />
        </div>
      )}
      <div className="p-5 flex flex-col flex-1">
        <p className="font-display text-sage font-semibold text-sm tracking-widest uppercase mb-2">
          Menü {number}
        </p>
        <p className="text-wood/80 font-body text-sm leading-relaxed flex-1">{ingredients}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-display text-2xl font-bold text-terracotta">{price} €</span>
          <span className="text-xs text-wood/50 font-body">inkl. Getränk</span>
        </div>
      </div>
    </div>
  );
}

function BaukastenTab() {
  const saucen = [
    { name: "Bolognese", price: "2,00" },
    { name: "Tomatensoße", price: "1,00" },
    { name: "Pesto", price: "1,00" },
    { name: "Cheddar", price: "1,50" },
    { name: "Arrabbiata", price: "1,50" },
    { name: "Scharfe Soße", price: "0,50" },
    { name: "Weiße Schokolade", price: "1,00" },
    { name: "Vollmilch Schokolade", price: "1,00" },
  ];

  const toppings = [
    { name: "Gebratene Hähnchen", price: "2,00" },
    { name: "Gebratene Champignons", price: "1,00" },
    { name: "Garnelen", price: "3,00" },
    { name: "Lachs", price: "3,00" },
    { name: "Brokkoli", price: "1,00" },
    { name: "Gebratene Paprika", price: "1,00" },
    { name: "Pinienkerne", price: "1,50" },
    { name: "Cherry Tomaten", price: "1,00" },
    { name: "Mini Mozzarella", price: "1,50" },
    { name: "Grüne / Schwarze Oliven", price: "1,00" },
    { name: "Spinat", price: "0,50" },
    { name: "Mais", price: "0,50" },
    { name: "Jalapeño", price: "0,50" },
    { name: "Röstzwiebeln", price: "0,50" },
    { name: "Getrocknete Tomaten", price: "1,00" },
    { name: "Natur Joghurt", price: "0,50" },
    { name: "Rucola", price: "0,50" },
    { name: "Knoblauchöl", price: "0,50" },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-cream rounded-2xl p-6 sm:p-8 border border-cream-dark">
        <div className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden mb-6">
          <Image
            src="/images/pasta-bowls.jpg"
            alt="Hausgemachte Fettuccine Alfredo als Basis für den Loki's Pasta Baukasten – verschiedene Variationen"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-wood/60 to-transparent" />
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <span className="font-display text-cream text-2xl font-bold">Fettuccine Alfredo</span>
          </div>
        </div>
        <div className="flex items-center justify-between bg-sage/10 rounded-xl px-6 py-4">
          <div>
            <p className="font-body text-sm text-wood/60 uppercase tracking-widest">Basis</p>
            <p className="font-display text-xl font-semibold text-wood">Fettuccine Alfredo</p>
          </div>
          <p className="font-display text-3xl font-bold text-sage">7,50 €</p>
        </div>
        <div className="mt-4 bg-gold/20 rounded-xl px-6 py-3 flex items-center justify-between">
          <span className="font-body text-sm text-wood/70">+ Extra Parmesan</span>
          <span className="font-semibold text-terracotta">+0,50 €</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-cream rounded-2xl p-6 border border-cream-dark">
          <h2 className="font-display text-xl font-semibold text-sage mb-4">Wähle deine Soße</h2>
          {saucen.map((s) => <PriceRow key={s.name} name={s.name} price={s.price} />)}
        </div>
        <div className="bg-cream rounded-2xl p-6 border border-cream-dark">
          <h2 className="font-display text-xl font-semibold text-sage mb-4">Wähle deine Toppings</h2>
          {toppings.map((t) => <PriceRow key={t.name} name={t.name} price={t.price} />)}
        </div>
      </div>
    </div>
  );
}

function EmpfehlungenTab() {
  const menus = [
    {
      number: 1,
      ingredients: "Bolognese + Parmesan + Getränk nach Wahl",
      price: "11,50",
      image: "/images/menu-1-bolognese.jpg",
      imageAlt: "Loki's Pasta Menü 1 – Hausgemachte Fettuccine Alfredo mit Bolognese und frischem Parmesan in Bielefeld",
    },
    {
      number: 2,
      ingredients: "Cherry-Tomaten + Mini Mozzarella + Rucola + Pinienkerne + Parmesan + Getränk nach Wahl",
      price: "13,50",
      image: "/images/menu-2-cherry-mozzarella.jpg",
      imageAlt: "Loki's Pasta Menü 2 – Fettuccine mit Cherry-Tomaten, Mini Mozzarella, Rucola und Pinienkerne bei Loki's Pasta Bielefeld",
    },
    {
      number: 3,
      ingredients: "Pesto + Mini Mozzarella + getrocknete Tomaten + Pinienkerne + Parmesan + Getränk nach Wahl",
      price: "14,00",
      image: "/images/menu-3-pesto-mozzarella.jpg",
      imageAlt: "Loki's Pasta Menü 3 – Fettuccine mit Basilikum-Pesto, Mini Mozzarella und getrockneten Tomaten in Bielefeld",
    },
    {
      number: 4,
      ingredients: "Gebratene Hähnchen + Sahnesoße + Parmesan + Getränk nach Wahl",
      price: "11,50",
      image: "/images/menu-4-chicken-cream.jpg",
      imageAlt: "Loki's Pasta Menü 4 – Fettuccine mit gebratenem Hähnchen in cremiger Sahnesoße bei Loki's Pasta",
    },
    {
      number: 5,
      ingredients: "Lachs + Sahnesoße + Spinat + Knoblauch + Parmesan + Getränk nach Wahl",
      price: "13,00",
      image: "/images/menu-5-lachs-spinat.jpg",
      imageAlt: "Loki's Pasta Menü 5 – Hausgemachte Fettuccine mit Lachs, frischem Spinat und Sahnesoße in Bielefeld",
    },
    {
      number: 6,
      ingredients: "Gebratene Garnelen + Cherry Tomaten + Knoblauch + Parmesan + Getränk nach Wahl",
      price: "13,00",
      image: "/images/menu-6-garnelen.jpg",
      imageAlt: "Loki's Pasta Menü 6 – Fettuccine mit gebratenen Garnelen, Cherry Tomaten und Knoblauch bei Loki's Pasta Bielefeld",
    },
    {
      number: 7,
      ingredients: "Gebratene Hähnchen + Gebratene Champignons + Curry-Sahnesoße + Parmesan + Getränk nach Wahl",
      price: "12,50",
      image: "/images/menu-7-chicken-curry.jpg",
      imageAlt: "Loki's Pasta Menü 7 – Fettuccine mit Hähnchen, Champignons und würziger Curry-Sahnesoße in Bielefeld",
    },
    {
      number: 8,
      ingredients: "Cheddar + Mais + Jalapeños + Röstzwiebeln + Parmesan + Getränk nach Wahl",
      price: "12,50",
      image: "/images/menu-8-cheddar-mais.jpg",
      imageAlt: "Loki's Pasta Menü 8 – Fettuccine mit Cheddar, Mais, Jalapeños und Röstzwiebeln bei Loki's Pasta Bielefeld",
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {menus.map((m) => <MenuItemCard key={m.number} {...m} />)}
    </div>
  );
}

function DavorDanachTab() {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      <div className="bg-cream rounded-2xl overflow-hidden border border-cream-dark hover:shadow-lg transition-shadow">
        <div className="relative h-56">
          <Image
            src="/images/garlic-bread-pesto.jpg"
            alt="Hausgemachtes Knoblauchbrot Spezial mit Pesto, Kräuterbutter und frisch geriebenem Parmesan bei Loki's Pasta"
            fill
            className="object-cover object-center"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-wood/60 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="bg-terracotta text-cream text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              Highlight
            </span>
          </div>
        </div>
        <div className="p-6">
          <h2 className="font-display text-xl font-semibold text-wood">Knoblauchbrot Spezial</h2>
          <p className="text-wood/60 text-sm font-body mt-1 mb-4">
            Frisch gebackenes Knoblauchbrot mit Kräuterbutter und Parmesan
          </p>
          <span className="font-display text-2xl font-bold text-terracotta">3,50 €</span>
        </div>
      </div>

      <div className="bg-cream rounded-2xl overflow-hidden border border-cream-dark hover:shadow-lg transition-shadow">
        <div className="h-56 bg-gradient-to-br from-wood-light to-wood flex items-center justify-center">
          <div className="text-center px-6">
            <p className="text-6xl mb-3">🍮</p>
            <p className="font-display text-cream italic text-xl">Tiramisu</p>
          </div>
        </div>
        <div className="p-6">
          <h2 className="font-display text-xl font-semibold text-wood">Tiramisu</h2>
          <p className="text-wood/60 text-sm font-body mt-1 mb-4">
            Klassisches italienisches Tiramisu – der perfekte Abschluss
          </p>
          <span className="font-display text-2xl font-bold text-terracotta">3,50 €</span>
        </div>
      </div>
    </div>
  );
}

function GetraenkeTab() {
  const softdrinks = [
    { name: "Coca Cola / Coca Cola Zero / Sprite", price: "2,80" },
    { name: "Fanta Orange / Exotic", price: "2,80" },
    { name: "Fritz-Kola / Fritz-Kola Superzero", price: "2,80" },
    { name: "Fritz-Limo Orange / Honigmelone / Mischmasch", price: "2,80" },
    { name: "Elephant Bay Peach / Lemon / Blue Berry / Pomegranate", price: "2,80" },
    { name: "Wasser Still", price: "2,80" },
    { name: "Wasser Sprudel", price: "2,80" },
  ];

  const heissgetraenke = [
    { name: "Caffe Creme", price: "2,00" },
    { name: "Espresso", price: "2,00" },
    { name: "Espresso doppelt", price: "3,10" },
    { name: "Cappuccino", price: "2,80" },
    { name: "Milchkaffee", price: "3,00" },
    { name: "Latte Macchiato", price: "3,00" },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-cream rounded-2xl p-6 border border-cream-dark">
        <div className="flex items-center gap-3 mb-5">
          <span className="text-2xl">🥤</span>
          <h2 className="font-display text-xl font-semibold text-sage">Softdrinks & Wasser</h2>
        </div>
        {softdrinks.map((d) => (
          <div key={d.name} className="flex items-center justify-between py-2.5 border-b border-cream-dark/50 last:border-0">
            <span className="text-wood font-body text-sm">{d.name}</span>
            <span className="text-terracotta font-semibold text-sm ml-4 shrink-0">{d.price} €</span>
          </div>
        ))}
      </div>
      <div className="bg-cream rounded-2xl p-6 border border-cream-dark">
        <div className="flex items-center gap-3 mb-5">
          <span className="text-2xl">☕</span>
          <h2 className="font-display text-xl font-semibold text-sage">Heiße Spezialitäten</h2>
        </div>
        {heissgetraenke.map((d) => (
          <div key={d.name} className="flex items-center justify-between py-2.5 border-b border-cream-dark/50 last:border-0">
            <span className="text-wood font-body text-sm">{d.name}</span>
            <span className="text-terracotta font-semibold text-sm ml-4 shrink-0">{d.price} €</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const TAB_CONTENT: Record<TabId, React.ReactNode> = {
  baukasten: <BaukastenTab />,
  empfehlungen: <EmpfehlungenTab />,
  "davor-danach": <DavorDanachTab />,
  getraenke: <GetraenkeTab />,
};

export default function MenuSection({ defaultTab = "baukasten" }: { defaultTab?: TabId }) {
  const [activeTab, setActiveTab] = useState<TabId>(defaultTab);
  const [, startTransition] = useTransition();
  const router = useRouter();

  const handleTabChange = (tab: TabId) => {
    setActiveTab(tab);
    startTransition(() => {
      router.push(`/speisekarte/${tab}`, { scroll: false });
    });
  };

  return (
    <section id="menu" className="py-20 sm:py-28 bg-cream-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-body text-terracotta text-sm font-medium tracking-[0.3em] uppercase mb-3">
            Speisekarte
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-wood mb-4">
            Handgemachte Pasta Fresca
          </h1>
          <p className="text-wood/60 font-body max-w-xl mx-auto">
            Wähle deinen Stil – ob individueller Pasta Baukasten oder eine unserer kuratierten
            Empfehlungen.
          </p>
        </div>

        {/* Animated Tab Switcher */}
        <div className="flex flex-wrap gap-2 justify-center mb-10 bg-white/70 backdrop-blur-sm border border-cream-dark rounded-2xl p-2 w-fit mx-auto shadow-sm">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`relative px-5 sm:px-7 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 font-body whitespace-nowrap ${
                activeTab === tab.id
                  ? "text-cream shadow-md"
                  : "text-wood hover:text-sage hover:bg-sage/10"
              }`}
              aria-current={activeTab === tab.id ? "page" : undefined}
            >
              {activeTab === tab.id && (
                <motion.span
                  layoutId="activeTab"
                  className="absolute inset-0 bg-sage rounded-xl"
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28 }}
          >
            {TAB_CONTENT[activeTab]}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
