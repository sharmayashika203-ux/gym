import React from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const PricingCard = ({ title, price, billing, popular, features, buttonText, currency = "₹" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between border transition-all duration-300 h-full ${
        popular
          ? "bg-[#1A1A1A] border-primary shadow-[0_15px_40px_-15px_rgba(229,9,20,0.3)] md:-translate-y-4 z-10"
          : "bg-[#141414] border-neutral-900 hover:border-neutral-800"
      }`}
    >
      {/* Highlight/Popular Tag */}
      {popular && (
        <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
          Recommended
        </span>
      )}

      {/* Plan Header */}
      <div className="flex flex-col gap-4">
        <span className="text-neutral-400 font-display font-extrabold uppercase text-xs sm:text-sm tracking-wider">
          {title}
        </span>
        <div className="flex items-baseline gap-1 mt-2">
          <span className="text-4xl sm:text-5xl font-display font-black text-white">
            {currency}{price}
          </span>
          <span className="text-neutral-500 text-sm">/{billing}</span>
        </div>
      </div>

      {/* Feature Checklist */}
      <div className="flex flex-col gap-4 my-8 border-t border-neutral-900 pt-6">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
            <div className={`p-0.5 rounded-full shrink-0 mt-0.5 ${popular ? "bg-primary/20 text-primary" : "bg-neutral-800 text-neutral-400"}`}>
              <Check className="h-3.5 w-3.5" />
            </div>
            <span>{feature}</span>
          </div>
        ))}
      </div>

      {/* Call to action */}
      <Link
        to="/contact"
        className={`w-full text-center font-bold uppercase tracking-wider text-xs sm:text-sm py-4 rounded-xl transition-all duration-300 shadow-md ${
          popular
            ? "bg-primary hover:bg-red-700 text-white hover:shadow-[0_0_15px_rgba(229,9,20,0.4)]"
            : "bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-white"
        }`}
      >
        {buttonText}
      </Link>
    </motion.div>
  );
};

export default PricingCard;
