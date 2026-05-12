import { useState } from "react";
import foodBg from "@/assets/food-bg.jpg";
import justeatLogo from "@/assets/tjmaxx-logo.png";
import StepCard from "@/components/StepCard";
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
  { number: 3, text: "We'll Go Through Your Application And Email You Within 24hrs" },
];

const faqs = [
  {
    question: "Do I need to provide bank details?",
    answer: "No. We will never ask for your bank or credit card details. This program is completely free to join.",
  },
  {
    question: "How long do the deals take?",
    answer: "Most deals take around 10–15 minutes. The more deals you complete, the more you earn.",
  },
  {
    question: "What kind of deals are included?",
    answer: "Free trials, app installs, surveys, and deals.",
  },
];

const Index = () => {
  const [approvedCount] = useState(() => {
    const baseCount = 500;
    const launchDate = new Date("2026-03-01").getTime();
    const now = Date.now();
    const daysSinceLaunch = Math.max(0, Math.floor((now - launchDate) / (1000 * 60 * 60 * 24)));
    return baseCount + daysSinceLaunch * 5;
  });

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Hero banner with food background */}
      <div className="relative h-52 w-full overflow-hidden animate-fade-in">
        <img
          src={foodBg}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background" />
        <div className="absolute left-4 top-4 flex items-center gap-2.5">
          <img src={justeatLogo} alt="TJ Maxx" className="h-9 w-9 rounded-lg" />
          <span className="text-lg font-bold text-primary-foreground tracking-wide">TJ Maxx</span>
        </div>
      </div>

      {/* Content */}
      <main className="mx-auto flex w-full max-w-lg flex-col items-center px-5 py-8 animate-slide-up">
        <h1 className="mb-1.5 text-center text-2xl sm:text-3xl font-extrabold leading-tight text-foreground">
          Claim Your TJ Maxx{"\n"}Rewards Offer
        </h1>
        <p className="mb-4 text-center text-sm text-muted-foreground">
          Available in US, UK, AU & CA
        </p>

        {/* Social Proof */}
        <div className="mb-5 flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="hsl(142, 71%, 45%)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          <span className="text-sm font-bold text-foreground">{approvedCount.toLocaleString()}+ Shoppers Approved This Month</span>
        </div>

        {/* Divider */}
        <div className="mb-6 h-1 w-12 rounded-full bg-primary" />

        <h2 className="mb-1 text-center text-sm font-bold uppercase tracking-widest text-foreground">
          How To Qualify
        </h2>
        <p className="mb-5 text-center text-xs text-muted-foreground">
          Takes ~5–10 minutes
        </p>

        <div className="flex w-full flex-col gap-3 mb-6">
          {steps.map((step, i) => (
            <div key={step.number} className="animate-fade-in-step" style={{ animationDelay: `${i * 60}ms` }}>
              <StepCard number={step.number} text={step.text} />
            </div>
          ))}
        </div>

        <a
          href={OFFER_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-2xl bg-primary py-4 text-center text-base font-bold uppercase tracking-wide text-primary-foreground shadow-lg transition-all hover:brightness-110 active:scale-[0.98]"
        >
          Apply Now
        </a>

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

        {/* Footer */}
        <div className="mt-8 flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <img src={justeatLogo} alt="TJ Maxx" className="h-7 w-7 rounded-md" />
            <span className="text-base font-bold text-muted-foreground">TJ Maxx</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Powered by TJ Maxx
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
