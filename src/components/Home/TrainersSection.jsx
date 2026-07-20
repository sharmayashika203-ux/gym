import React from "react";
import { Link } from "react-router-dom";
import TrainerCard from "../Trainers/TrainerCard";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const TrainersSection = () => {
  const trainersData = [
    {
      id: 1,
      name: "Alex Rivers",
      specialization: "Head Strength Coach",
      experience: "10 Years",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=600",
      instagramUrl: "https://instagram.com",
      linkedinUrl: "https://linkedin.com",
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      specialization: "HIIT & Cardio Coach",
      experience: "6 Years",
      image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=600",
      instagramUrl: "https://instagram.com",
      linkedinUrl: "https://linkedin.com",
    },
    {
      id: 3,
      name: "Master Kenji",
      specialization: "Combat Master",
      experience: "8 Years",
      image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=600",
      instagramUrl: "https://instagram.com",
      linkedinUrl: "https://linkedin.com",
    },
    {
      id: 4,
      name: "Diana Prince",
      specialization: "Yoga & Mindfulness",
      experience: "7 Years",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600",
      instagramUrl: "https://instagram.com",
      linkedinUrl: "https://linkedin.com",
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative ambient background shadow */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto mb-16">
          <span className="text-primary text-xs uppercase tracking-widest font-extrabold mb-3.5 block">
            Expert Staff
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black uppercase text-white mb-4">
            Meet Our <span className="text-primary">Coaches</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Our certified instructors are here to guide, push, and support you on your fitness journey.
          </p>
        </div>

        {/* Trainers Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {trainersData.map((trainer) => (
            <TrainerCard key={trainer.id} {...trainer} />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center"
        >
          <Link
            to="/trainers"
            className="group inline-flex items-center gap-2 border border-neutral-800 hover:border-white text-white font-bold uppercase tracking-wider text-xs sm:text-sm px-8 py-4 rounded-xl transition-all duration-300 bg-cardBg/30 backdrop-blur-sm transform hover:-translate-y-0.5"
          >
            Meet the Whole Crew
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default TrainersSection;
