import React, { useState } from "react";
import PricingCard from "../components/Pricing/PricingCard";
import PageTransition from "../components/Common/PageTransition";

const Membership = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      title: "Starter Plan",
      price: isAnnual ? 799 : 999,
      billing: isAnnual ? "mo (billed yearly)" : "mo",
      popular: false,
      buttonText: "Join Starter",
      features: [
        "Access to gym floor & weights",
        "Free locker access",
        "1 Complimentary fitness induction",
        "Biometric club keycard",
        "Standard support",
      ],
    },
    {
      title: "Pro Plan",
      price: isAnnual ? 1599 : 1999,
      billing: isAnnual ? "mo (billed yearly)" : "mo",
      popular: false,
      buttonText: "Join Pro",
      features: [
        "24/7 Premium club access",
        "Unlimited group training classes",
        "2 Personal coach sessions per month",
        "CultFitness workout app tracking",
        "Priority lockers & shower access",
        "10% discount on club nutrition shop",
      ],
    },
    {
      title: "Elite Plan",
      price: isAnnual ? 2399 : 2999,
      billing: isAnnual ? "mo (billed yearly)" : "mo",
      popular: true,
      buttonText: "Join Elite",
      features: [
        "All Pro Plan benefits",
        "Unlimited 1-on-1 private coaching",
        "Personalized daily nutrition guides",
        "Free premium recovery spa & massage",
        "5 Complimentary VIP guest passes/mo",
        "20% discount on club nutrition shop",
        "Exclusive Elite apparel kit",
      ],
    },
  ];

  return (
    <PageTransition>
      <div className="bg-background pt-32 pb-20 relative overflow-hidden">
        {/* Decorative highlights */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[180px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary text-xs uppercase tracking-widest font-extrabold mb-3.5 block">
              Pricing Plans
            </span>
            <h1 className="text-4xl sm:text-6xl font-display font-black uppercase text-white mb-4">
              Select Your <span className="text-primary">Membership</span>
            </h1>
            <p className="text-neutral-400 text-sm sm:text-base">
              Choose the plan that fits your ambition. Get full access to high-tier facilities and expert instruction. Save up to 20% with annual plans!
            </p>
          </div>

          {/* Billing Toggle Selector */}
          <div className="flex justify-center items-center gap-4 mb-16">
            <span className={`text-sm uppercase tracking-wider font-extrabold ${!isAnnual ? "text-primary" : "text-neutral-400"}`}>
              Monthly
            </span>
            
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-16 h-8 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-full p-1 transition-all duration-300 relative focus:outline-none"
              aria-label="Toggle billing frequency"
            >
              <div
                className={`w-5 h-5 bg-primary rounded-full shadow-md transition-transform duration-300 transform ${
                  isAnnual ? "translate-x-8" : "translate-x-0"
                }`}
              />
            </button>

            <span className={`text-sm uppercase tracking-wider font-extrabold flex items-center gap-1.5 ${isAnnual ? "text-primary" : "text-neutral-400"}`}>
              Yearly
              <span className="bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] uppercase font-black px-2 py-0.5 rounded">
                Save 20%
              </span>
            </span>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 items-stretch">
            {plans.map((plan, idx) => (
              <PricingCard key={idx} {...plan} />
            ))}
          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default Membership;
