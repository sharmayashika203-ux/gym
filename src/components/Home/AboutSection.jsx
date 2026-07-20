import React from "react";
import { Link } from "react-router-dom";
import { Award, Dumbbell, Sparkles, Apple, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const highlights = [
    {
      icon: <Award className="h-5 w-5 text-primary" />,
      title: "Certified Coaches",
    },
    {
      icon: <Dumbbell className="h-5 w-5 text-primary" />,
      title: "Modern Machines",
    },
    {
      icon: <Apple className="h-5 w-5 text-primary" />,
      title: "Nutrition Experts",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-primary" />,
      title: "Premium Environment",
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative side accent blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Large Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 60, damping: 14 }}
            className="lg:col-span-6 relative group"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-neutral-900 shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800"
                alt="CultFitness Training Session"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
            </div>
            
            {/* Experience overlay badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary border border-primary/20 p-6 rounded-2xl shadow-xl hidden sm:block">
              <span className="font-display font-black text-3xl text-white block">15+</span>
              <span className="text-[10px] uppercase font-bold text-white tracking-wider block">Years of Legacy</span>
            </div>
          </motion.div>

          {/* Right Side: Professional Description & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 60, damping: 14 }}
            className="lg:col-span-6 flex flex-col gap-6 text-left"
          >
            <span className="text-primary text-xs uppercase tracking-widest font-extrabold">
              About CultFitness
            </span>
            
            <h2 className="text-3xl sm:text-5xl font-display font-black uppercase text-white leading-tight">
              We Are More Than <br />
              Just A <span className="text-primary">Gymnasium</span>
            </h2>
            
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              At CultFitness, we take a holistic and scientific approach to training. We provide state-of-the-art strength and cardio training spaces, coupled with expert guidance from certified athletic coaches and clinical nutritionists. 
            </p>
            
            <p className="text-neutral-400 text-sm leading-relaxed">
              We are committed to building an authentic fitness community where every member is supported, motivated, and challenged to exceed their physical boundaries and build a sustainable healthy lifestyle.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mt-2">
              {highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-[#1A1A1A]/40 border border-neutral-900/60 p-4 rounded-xl backdrop-blur-sm hover:border-primary/25 transition-all duration-300"
                >
                  <div className="bg-primary/10 p-2.5 rounded-lg border border-primary/20 shrink-0">
                    {highlight.icon}
                  </div>
                  <span className="text-xs uppercase font-extrabold text-white tracking-wider">
                    {highlight.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Read Story CTA */}
            <div className="mt-4">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 bg-primary hover:bg-red-700 text-white font-bold uppercase tracking-wider text-xs sm:text-sm px-7 py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(229,9,20,0.4)] transform hover:-translate-y-0.5"
              >
                Read Our Story
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
