import { useEffect, useState } from "react";

const OFFER_LINK = "https://linkthem.net/aff_c?offer_id=3329&aff_id=28933";

const deals = [
  { emoji: "👟", title: "Designer Sneakers", was: "$189", now: "$74.99", off: "-60%" },
  { emoji: "👜", title: "Luxury Handbags", was: "$320", now: "$129.99", off: "-59%" },
  { emoji: "🧴", title: "Beauty & Skincare", was: "$95", now: "$39.99", off: "-58%" },
];

const Index = () => {
  const [browsing, setBrowsing] = useState(847);

  useEffect(() => {
    const id = setInterval(() => {
      setBrowsing((n) => Math.max(780, Math.min(990, n + (Math.random() > 0.5 ? 1 : -1) * (1 + Math.floor(Math.random() * 3)))));
    }, 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto w-full max-w-md">
        {/* Hero */}
        <section className="bg-brand px-6 pt-8 pb-10 text-brand-foreground text-center animate-fade-in">
          <div className="mx-auto inline-block rounded-md bg-white px-6 py-2 shadow-sm">
            <span className="font-serif text-2xl font-bold tracking-tight text-brand">T·J·Maxx</span>
          </div>
          <h1 className="mt-6 font-serif text-4xl font-semibold leading-tight">
            Up to 60% Off<br />Top Brands Today
          </h1>
          <p className="mt-3 text-sm text-brand-foreground/90">
            Exclusive deals — refreshed daily, limited stock
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {["DESIGNER BRANDS", "FREE SHIPPING ELIGIBLE", "NO MEMBERSHIP"].map((t) => (
              <span key={t} className="rounded-full border border-brand-foreground/40 px-4 py-1.5 text-[11px] font-bold tracking-wide">
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Live browsing bar */}
        <div className="bg-accent-yellow px-4 py-3 text-center text-sm font-bold text-foreground flex items-center justify-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-brand animate-pulse" />
          {browsing} people are browsing these deals right now
        </div>

        {/* Deals */}
        <section className="px-5 pt-6 pb-4">
          <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Today's Top Picks
          </h2>
          <div className="flex flex-col gap-3">
            {deals.map((d, i) => (
              <div
                key={d.title}
                className="flex items-center gap-4 rounded-2xl bg-card-dark p-3 text-card-dark-foreground animate-fade-in-step"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-pink-50 text-2xl">
                  {d.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-base">{d.title}</div>
                  <div className="text-xs text-card-dark-foreground/60 line-through">Was {d.was}</div>
                  <div className="text-lg font-extrabold text-brand">{d.now}</div>
                </div>
                <div className="rounded-full bg-pink-50 px-3 py-1 text-xs font-bold text-brand">
                  {d.off}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 pt-4 pb-8">
          <a
            href={OFFER_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-2xl bg-brand py-5 text-center text-lg font-bold text-brand-foreground shadow-lg transition-transform hover:brightness-110 active:scale-[0.98]"
          >
            Claim My Deals Now →
          </a>
          <p className="mt-3 text-center text-sm text-muted-foreground">
            Free to access · No credit card required
          </p>

          <div className="mt-6 flex justify-center gap-6 border-t pt-5 text-sm text-muted-foreground">
            {["Verified deals", "Secure link", "Updated daily"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <span className="text-green-600 font-bold">✓</span> {t}
              </span>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
