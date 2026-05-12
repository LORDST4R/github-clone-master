import { useState } from "react";
import heroBg from "@/assets/tjmaxx-hero.jpg";
import tjmaxxLogo from "@/assets/tjmaxx-logo.png";
import StepCard from "@/components/StepCard";
import { Users, ShieldCheck, Gift, Globe, Lock, ClipboardCheck, ShieldAlert } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const OFFER_LINK = "https://giftclick.org/aff_c?offer_id=2914&aff_id=28933";

const steps = [
  { number: 1, text: "Go Through A Quick Questionnaire" },
  { number: 2, text: "Complete 4-5 Quick Tasks (Guided)" },
  { number: 3, text: "Unlock Your TJ Maxx Rewards Offer" },
];

const faqs = [
  {
    question: "Do I need to provide bank details?",
    answer:
      "No. We will never ask for your bank or credit card details. This program is completely free to join.",
  },
  {
    question: "How long do the tasks take?",
    answer:
      "Most tasks take around 5–15 minutes total. The more you complete, the faster you unlock your reward.",
  },
  {
    question: "What kind of tasks are included?",
    answer: "Short surveys, free trials, and quick app installs from trusted partners.",
  },
];

const Index = () => {
  const [approvedCount] = useState(() => {
    const baseCount = 500;
    const launchDate = new Date("2026-03-01").getTime();
    const now = Date.now();
    const daysSinceLaunch = Math.max(
      0,
      Math.floor((now - launchDate) / (1000 * 60 * 60 * 24))
    );
    return baseCount + daysSinceLaunch * 5;
  });

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Hero banner */}
      <div className="relative h-60 w-full overflow-hidden animate-fade-in">
        <img
          src={heroBg}
          alt="TJ Maxx storefront with shopping bags and fashion items"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-primary" />
        <div className="absolute left-4 top-4 flex items-center gap-2.5 rounded-xl bg-white p-2 shadow-md">
          <img src={tjmaxxLogo} alt="TJ Maxx" className="h-8 w-auto" />
        </div>
      </div>

      {/* Content */}
      <main className="mx-auto flex w-full max-w-lg flex-col items-center px-5 py-8 animate-slide-up">
        <h1 className="mb-2 text-center text-2xl sm:text-3xl font-extrabold leading-tight text-foreground">
          Claim Your{"\n"}
          <span className="text-primary">TJ Maxx</span> Rewards Offer
        </h1>
        <p className="mb-5 text-center text-sm text-muted-foreground">
          Exclusive savings and rewards opportunities available for shoppers like you.
        </p>

        {/* Trust badges */}
        <div className="mb-5 grid w-full grid-cols-3 divide-x divide-border rounded-2xl border border-border bg-card p-4 shadow-sm">
          <div className="flex flex-col items-center gap-2 px-2 text-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Users className="h-5 w-5" />
            </div>
            <p className="text-sm font-bold text-foreground leading-tight">
              {approvedCount.toLocaleString()}+
            </p>
            <p className="text-[11px] leading-tight text-muted-foreground">
              Shoppers Approved This Month
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 px-2 text-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <p className="text-[11px] leading-tight text-muted-foreground mt-auto">
              Safe &amp; Secure Process
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 px-2 text-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Gift className="h-5 w-5" />
            </div>
            <p className="text-[11px] leading-tight text-muted-foreground mt-auto">
              Rewards &amp; Savings Opportunities
            </p>
          </div>
        </div>

        <div className="mb-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Globe className="h-4 w-4" />
          <span>Available in US, UK, AU &amp; CA</span>
        </div>

        <a
          href={OFFER_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-2xl bg-primary py-4 text-center text-base font-bold uppercase tracking-wide text-primary-foreground shadow-lg transition-all hover:brightness-110 active:scale-[0.98]"
        >
          Get Started
        </a>
        <div className="mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <Lock className="h-3.5 w-3.5" />
          <span>Secure. Fast. Easy.</span>
        </div>

        <div className="my-7 h-px w-full bg-border" />

        <div className="mb-4 flex items-center justify-center gap-2">
          <ClipboardCheck className="h-5 w-5 text-primary" />
          <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
            How To Qualify
          </h2>
        </div>
        <p className="mb-5 -mt-3 text-center text-xs text-muted-foreground">
          Takes ~5–10 minutes
        </p>

        <div className="flex w-full flex-col gap-3 mb-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="animate-fade-in-step"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <StepCard number={step.number} text={step.text} />
            </div>
          ))}
        </div>

        {/* Our Promise */}
        <div className="w-full rounded-2xl bg-primary/5 border border-primary/20 p-4 flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
            <ShieldAlert className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-bold text-foreground mb-1">Our Promise</p>
            <p className="text-xs leading-relaxed text-muted-foreground">
              We value your time and privacy. Your information is secure and will never be shared.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-10 w-full animate-fade-in" style={{ animationDelay: "300ms" }}>
          <h2 className="mb-3 text-center text-sm font-bold uppercase tracking-widest text-foreground">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-sm font-medium text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>

      {/* Footer band */}
      <footer className="mt-8 bg-primary py-6 flex flex-col items-center gap-2">
        <div className="rounded-lg bg-white px-4 py-2 shadow-sm">
          <img src={tjmaxxLogo} alt="TJ Maxx" className="h-7 w-auto" />
        </div>
        <p className="text-xs text-primary-foreground/80">Powered by TJ Maxx Rewards</p>
      </footer>
    </div>
  );
};

export default Index;
