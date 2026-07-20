import React from "react";
import { Award, Dumbbell, Apple, Target, Users, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Features = () => {
  const stats = [
    { number: "10K+", label: "Happy Members" },
    { number: "40", label: "Certified Trainers" },
    { number: "24/7", label: "Access Enabled" },
    { number: "15 Years", label: "Experience" },
  ];

  const features = [
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Certified Trainers",
      description: "Train under board-certified coaches dedicated to formulating specialized, result-oriented fitness guides tailored to your athletic goals.",
    },
    {
      icon: <Dumbbell className="h-8 w-8 text-primary" />,
      title: "Modern Equipment",
      description: "Experience state-of-the-art strength machines and specialized cardio decks designed for optimal bio-mechanical safety and lift efficiency.",
    },
    {
      icon: <Apple className="h-8 w-8 text-primary" />,
      title: "Nutrition Plans",
      description: "Get customized meal plans and macros tracking sheets designed by expert dieticians to complement and accelerate your hypertrophy or fat loss.",
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Personal Coaching",
      description: "Work 1-on-1 with dedicated personal coaches to correct lifting forms, perform body scans, and monitor progressive overload charts.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Group Classes",
      description: "Thrive in high-intensity community classes including rhythm-based indoor cycling, functional HIIT, powerlifting circles, and yoga flow.",
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Recovery Zone",
      description: "Rejuvenate sore muscles in our premium recovery lounge featuring cold plunge pools, infrared saunas, and targeted compression gear.",
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-xs uppercase tracking-widest font-extrabold mb-3.5 block">
            Why CultFitness
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black uppercase text-white mb-4">
            Why Choose <span className="text-primary">CultFitness</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            We provide a premium, full-suite ecosystem designed to support your transformation. From elite trainers to state-of-the-art recovery services, we have you covered.
          </p>
        </div>

        {/* Features Grid - Glassmorphism Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06, duration: 0.5 }}
              className="glass-card glass-card-hover p-8 rounded-2xl flex flex-col gap-5 text-left group cursor-pointer"
            >
              {/* Icon Container with subtle animate-on-hover */}
              <div className="bg-primary/10 w-fit p-3.5 rounded-xl border border-primary/20 transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              
              <div>
                <h3 className="font-display font-bold text-xl text-white mb-2.5 transition-colors duration-300 group-hover:text-primary">
                  {feature.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
