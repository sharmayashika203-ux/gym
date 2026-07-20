import React from "react";
import { motion } from "framer-motion";

const GallerySection = () => {
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800",
      title: "Main Training Floor",
      category: "Strength Zone",
      gridClass: "md:col-span-2 md:row-span-2 h-[350px] md:h-[520px]",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600",
      title: "Rhythm Cycle Studio",
      category: "Cardio Arena",
      gridClass: "md:col-span-1 h-[240px]",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600",
      title: "Mind & Body Deck",
      category: "Yoga & Sound",
      gridClass: "md:col-span-1 h-[240px]",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=600",
      title: "Combat Circle",
      category: "MMA & Striking",
      gridClass: "md:col-span-1 h-[240px]",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800",
      title: "Recovery Lounge",
      category: "Spa & Saunas",
      gridClass: "md:col-span-2 h-[240px]",
    },
  ];

  return (
    <section className="py-20 bg-[#141414] relative overflow-hidden">
      {/* Background glow visual */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto mb-16">
          <span className="text-primary text-xs uppercase tracking-widest font-extrabold mb-3.5 block">
            Inside the Club
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black uppercase text-white mb-4">
            Our <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Take a virtual tour of our premium training floors, heavy lift sections, sound studios, and recovery spaces.
          </p>
        </div>

        {/* Bento Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max">
          {images.map((img) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45 }}
              className={`relative overflow-hidden rounded-3xl border border-neutral-900 group cursor-pointer ${img.gridClass}`}
            >
              {/* Picture backdrop */}
              <img
                src={img.src}
                alt={img.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Gradient mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-300 opacity-80 group-hover:opacity-95" />

              {/* Text overlay bottom left */}
              <div className="absolute bottom-6 left-6 text-left flex flex-col gap-1 z-10 transition-transform duration-300 transform group-hover:translate-y-[-2px]">
                <span className="text-primary text-[10px] uppercase tracking-widest font-extrabold bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-md w-fit">
                  {img.category}
                </span>
                <h3 className="font-display font-black text-lg sm:text-xl uppercase tracking-wider text-white">
                  {img.title}
                </h3>
              </div>

              {/* Subtle hover border glow */}
              <div className="absolute inset-0 border border-transparent group-hover:border-primary/30 rounded-3xl transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GallerySection;
