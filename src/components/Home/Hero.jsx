import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Dumbbell, Award, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 14 } },
  };

  const stats = [
    {
      icon: <Users className="h-5 w-5 text-primary" />,
      number: "10K+",
      label: "Members Active",
    },
    {
      icon: <Dumbbell className="h-5 w-5 text-primary" />,
      number: "40",
      label: "Expert Trainers",
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      number: "24/7",
      label: "Access Hours",
    },
    {
      icon: <Award className="h-5 w-5 text-primary" />,
      number: "15 Years",
      label: "Fitness Experience",
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col justify-center bg-black overflow-hidden pt-20">
      
      {/* Luxury Gym Background Image Covered with Dark Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1920"
          alt="CultFitness Luxury Club Layout"
          className="w-full h-full object-cover object-center opacity-45"
        />
        {/* Dark radial glow and linear overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/65 to-black/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#0F0F0F_100%)]" />
      </div>

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none z-0" />

      {/* Left side glowing red source */}
      <div className="absolute top-1/3 left-10 w-[250px] h-[250px] bg-primary/10 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col justify-between h-full pt-16 pb-12 sm:pb-16">
        
        {/* Main Content Area */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 text-left max-w-4xl"
        >
          {/* Tagline Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 text-primary text-xs uppercase tracking-widest font-extrabold px-4 py-2 rounded-full w-fit"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
            Unleash Your Limits
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.95]"
          >
            Train Smarter. <br />
            <span className="text-primary">Become Stronger.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="max-w-xl text-neutral-300 text-sm sm:text-base md:text-lg font-normal leading-relaxed"
          >
            Join CultFitness and transform your body with professional coaching and world-class equipment.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 mt-2 w-full sm:w-auto"
          >
            <Link
              to="/membership"
              className="group w-full sm:w-auto bg-primary hover:bg-red-700 text-white font-bold uppercase tracking-wider text-xs sm:text-sm px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(229,9,20,0.6)] transform hover:-translate-y-0.5"
            >
              Join Membership
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/programs"
              className="w-full sm:w-auto border border-neutral-800 hover:border-white text-white font-bold uppercase tracking-wider text-xs sm:text-sm px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 bg-black/50 backdrop-blur-md"
            >
              <Play className="h-4 w-4 fill-white text-white" />
              Explore Programs
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats Row Block (Aligned Bottom) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 80, damping: 15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 pt-8 border-t border-neutral-900/60"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-cardBg/25 border border-neutral-900/40 p-5 rounded-2xl backdrop-blur-sm hover:border-primary/20 transition-all duration-300 flex items-center gap-4 group"
            >
              <div className="bg-primary/10 p-3 rounded-xl border border-primary/25 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
                {stat.icon}
              </div>
              <div className="text-left">
                <span className="font-display font-black text-xl sm:text-2xl text-white block">
                  {stat.number}
                </span>
                <span className="text-neutral-400 text-[10px] sm:text-xs uppercase tracking-widest font-semibold">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;
