import React from "react";
import PageTransition from "../components/Common/PageTransition";
import { Award, ShieldCheck, HeartHandshake, Dumbbell } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const values = [
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Unyielding Excellence",
      description: "We provide nothing but top-tier coaching, safety standards, and facilities to ensure our members receive premium results.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: "Authentic Community",
      description: "We foster an inclusive, motivating atmosphere where fitness enthusiasts of all experience levels support each other.",
    },
    {
      icon: <HeartHandshake className="h-8 w-8 text-primary" />,
      title: "Compassionate Support",
      description: "Our staff and coaches are always approachable, dedicated to guiding you through weight loss, recovery, and hypertrophy.",
    },
  ];

  return (
    <PageTransition>
      <div className="bg-background pt-32 pb-20 relative overflow-hidden">
        {/* Ambient lighting */}
        <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary text-xs uppercase tracking-widest font-extrabold mb-3.5 block">
              Our Story
            </span>
            <h1 className="text-4xl sm:text-6xl font-display font-black uppercase text-white mb-4">
              About <span className="text-primary">CultFitness</span>
            </h1>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Founded with the vision to revolutionize group and personal training, CultFitness has grown into a premium community hubs hosting elite training modules.
            </p>
          </div>

          {/* Grid Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
            {/* Left Column Text */}
            <div className="lg:col-span-6 flex flex-col gap-6 text-left">
              <h2 className="font-display font-black text-3xl uppercase tracking-wider text-white">
                Redefining the <span className="text-primary">Fitness Standards</span>
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                At CultFitness, we believe that fitness is a journey of continuous progression. We do not support quick-fixes. Our club provides scientific, structured routines that integrate heavy resistance lifts, mobility drills, and tailored nutritional habits.
              </p>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Whether you are stepping into a gym for the first time or peaking for an athletic competition, our customized routines and certified coaches will challenge you to unlock your true physical threshold.
              </p>

              <div className="flex gap-4 mt-2">
                <div className="flex items-center gap-2">
                  <Dumbbell className="h-5 w-5 text-primary" />
                  <span className="text-xs uppercase font-extrabold text-white tracking-widest">24/7 Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <Dumbbell className="h-5 w-5 text-primary" />
                  <span className="text-xs uppercase font-extrabold text-white tracking-widest">Elite Equipment</span>
                </div>
              </div>
            </div>

            {/* Right Column Image Block */}
            <div className="lg:col-span-6 relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-neutral-900 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800"
                  alt="CultFitness Facilities"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-primary border border-primary/30 p-6 rounded-2xl shadow-xl max-w-[200px] text-center hidden sm:block">
                <span className="font-display font-black text-3xl text-white block">10+</span>
                <span className="text-[10px] uppercase font-bold text-white tracking-wider">Years of Fitness Excellence</span>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="border-t border-neutral-900 pt-20">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-display font-black text-3xl uppercase tracking-wider text-white">
                Our Core <span className="text-primary">Values</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((val, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-cardBg border border-neutral-900 p-8 rounded-2xl flex flex-col gap-4 text-left"
                >
                  <div className="bg-primary/10 w-fit p-3 rounded-xl border border-primary/20">
                    {val.icon}
                  </div>
                  <h3 className="font-display font-bold text-xl text-white uppercase tracking-wider">
                    {val.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {val.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default About;
