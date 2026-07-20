import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ProgramsSection = () => {
  const programs = [
    {
      title: "Strength Training",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600",
      description: "Build power and bone density. Our compound lifting protocols focus on progressive overloading, form safety, and raw output.",
    },
    {
      title: "Weight Loss",
      image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600",
      description: "Accelerate your metabolism and shed calories. Combine metabolic circuits with nutritional guidelines to drop fat sustainably.",
    },
    {
      title: "CrossFit",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600",
      description: "High-intensity functional movements. Test your speed, endurance, power, and gymnastics coordination in daily workouts.",
    },
    {
      title: "Yoga",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600",
      description: "Restore skeletal alignment, develop flexibility, and practice deep breathing patterns to align body, mind, and spirit.",
    },
    {
      title: "Cardio",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=600",
      description: "Enhance cardiovascular stroke volume and endurance. Perfect for stamina building using high-end run and cycling rigs.",
    },
    {
      title: "Muscle Building",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600",
      description: "Optimize muscle hypertrophy. Target specialized muscle splits under precision coaching to sculpt a symmetrical physique.",
    },
  ];

  return (
    <section className="py-20 bg-[#141414] relative overflow-hidden">
      {/* Visual lighting source */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-xs uppercase tracking-widest font-extrabold mb-3.5 block">
            Our Specialties
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black uppercase text-white mb-4">
            Explore Our <span className="text-primary">Programs</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Choose from a wide variety of fitness routines designed to push your limits and help you achieve your dream body.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((prog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="bg-cardBg border border-neutral-900 rounded-2xl overflow-hidden hover:border-primary/20 transition-all duration-300 flex flex-col h-full group"
            >
              {/* Card Image */}
              <div className="relative h-60 w-full overflow-hidden">
                <img
                  src={prog.image}
                  alt={prog.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cardBg via-transparent to-transparent opacity-90" />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-grow gap-4 text-left">
                <div className="flex flex-col gap-2">
                  <h3 className="font-display font-bold text-xl text-white uppercase tracking-wider transition-colors duration-300 group-hover:text-primary">
                    {prog.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed line-clamp-3">
                    {prog.description}
                  </p>
                </div>

                {/* Learn More Button CTA */}
                <div className="border-t border-neutral-900/60 pt-4 mt-2">
                  <Link
                    to="/programs"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-extrabold text-white group-hover:text-primary transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProgramsSection;
