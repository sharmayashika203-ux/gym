import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marcus Vance",
      role: "Club Member (1 Year)",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=300",
      quote: "CultFitness changed my life completely! The elite coaching team custom-tailored a program that helped me lose 25 kgs while building solid muscle. The community vibe keeps me coming back every day.",
      rating: 5,
      achievement: "Lost 25kg & Gained Muscle",
    },
    {
      name: "Serena Roy",
      role: "Corporate Executive (6 Months)",
      image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=300",
      quote: "Balancing high-pressure corporate schedules with workouts was nearly impossible until I joined CultFitness. Their 24/7 access and early morning HIIT classes are absolute game-changers.",
      rating: 5,
      achievement: "Reduced Body Fat by 12%",
    },
    {
      name: "Vikram Malhotra",
      role: "Athlete (2 Years)",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=300",
      quote: "As an amateur athlete, I needed specialized conditioning. The heavy powerlifting racks and advanced turf sections here are unmatched. My deadlift form and stamina have reached peak levels.",
      rating: 5,
      achievement: "Deadlift PR: 220kg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto sliding animation effect (slides every 5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-10 left-10 w-[200px] h-[200px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-xs uppercase tracking-widest font-extrabold mb-3.5 block">
            Success Stories
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black uppercase text-white mb-4">
            Hear From Our <span className="text-primary">Champions</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Read inspiring transformations from our dedicated CultFitness family. Join us and write your own success story today.
          </p>
        </div>

        {/* Carousel Slider */}
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden bg-[#1A1A1A] border border-neutral-900 rounded-3xl p-8 sm:p-12 shadow-2xl relative min-h-[380px] sm:min-h-[300px] flex flex-col justify-center">
            
            {/* Quote watermark */}
            <Quote className="absolute right-8 bottom-8 text-neutral-800 h-28 w-28 opacity-10 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              >
                
                {/* Client Avatar / Picture */}
                <div className="md:col-span-4 flex flex-col items-center text-center">
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-primary shadow-lg mb-4">
                    <img
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-display font-bold text-lg text-white">
                    {testimonials[activeIndex].name}
                  </h4>
                  <span className="text-neutral-400 text-xs mt-0.5">
                    {testimonials[activeIndex].role}
                  </span>
                </div>

                {/* Testimonial Quote & Info */}
                <div className="md:col-span-8 flex flex-col gap-4 text-left">
                  <div className="flex gap-1 text-primary">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <p className="text-neutral-300 text-sm sm:text-base italic leading-relaxed">
                    "{testimonials[activeIndex].quote}"
                  </p>

                  <div className="mt-2 w-fit bg-primary/10 border border-primary/20 text-primary text-xs uppercase tracking-widest font-extrabold px-4 py-1.5 rounded-full">
                    Achievement: {testimonials[activeIndex].achievement}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="bg-neutral-900 border border-neutral-800 hover:border-primary hover:text-primary transition-all duration-300 p-3 rounded-full text-white"
              aria-label="Previous story"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="bg-neutral-900 border border-neutral-800 hover:border-primary hover:text-primary transition-all duration-300 p-3 rounded-full text-white"
              aria-label="Next story"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
