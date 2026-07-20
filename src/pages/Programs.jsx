import React, { useState } from "react";
import ClassCard from "../components/Classes/ClassCard";
import PageTransition from "../components/Common/PageTransition";
import { motion, LayoutGroup } from "framer-motion";

const Programs = () => {
  const classesData = [
    {
      id: 1,
      title: "Powerlifting Elite",
      category: "Strength",
      duration: "60 Mins",
      calories: 650,
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600",
      description: "Focus on squats, bench press, and deadlifts. Perfect for building raw physical strength under precision athletic coaching guidance.",
    },
    {
      id: 2,
      title: "CrossFit Syndicate",
      category: "Strength",
      duration: "50 Mins",
      calories: 720,
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600",
      description: "High-intensity functional training incorporating olympic weights, gymnastics, cardio, and metabolic body conditioning.",
    },
    {
      id: 3,
      title: "Spin Cardio Rhythm",
      category: "Cardio",
      duration: "45 Mins",
      calories: 550,
      image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600",
      description: "Rhythm-based cycling studio session configured with heavy beat drops, resistance intervals, and dynamic light installations.",
    },
    {
      id: 4,
      title: "HIIT Cardio Blast",
      category: "Cardio",
      duration: "40 Mins",
      calories: 600,
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600",
      description: "Accelerate your heart rate and fat loss with short intervals of maximum energy training paired with brief rest cycles.",
    },
    {
      id: 5,
      title: "Vinyasa Flow Yoga",
      category: "Yoga",
      duration: "60 Mins",
      calories: 320,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600",
      description: "Align breathing rhythms with flowing movements to build dynamic core stability, posture alignment, and mindfulness.",
    },
    {
      id: 6,
      title: "Sound Bath Meditation",
      category: "Yoga",
      duration: "50 Mins",
      calories: 120,
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600",
      description: "Deep restorative stretching session accompanied by acoustic singing bowls, ambient gongs, and sensory wind chime therapy.",
    },
    {
      id: 7,
      title: "Kickboxing Striking",
      category: "Combat",
      duration: "50 Mins",
      calories: 680,
      image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=600",
      description: "Learn fundamental punching and kicking combinations on heavy bags. Boosts cardiorespiratory agility and core force production.",
    },
    {
      id: 8,
      title: "MMA Grappling Intro",
      category: "Combat",
      duration: "60 Mins",
      calories: 700,
      image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=600",
      description: "Introduction to wrestling takedowns, submission escapes, and position controls on professional safety mats.",
    },
  ];

  const categories = ["All", "Strength", "Cardio", "Yoga", "Combat"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredClasses =
    activeCategory === "All"
      ? classesData
      : classesData.filter((item) => item.category === activeCategory);

  return (
    <PageTransition>
      <div className="bg-background pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Banner */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary text-xs uppercase tracking-widest font-extrabold mb-3.5 block">
              Our Schedule
            </span>
            <h1 className="text-4xl sm:text-6xl font-display font-black uppercase text-white mb-4">
              Our Fitness <span className="text-primary">Programs</span>
            </h1>
            <p className="text-neutral-400 text-sm sm:text-base">
              Find the perfect training program matching your fitness goals. Filter by discipline and sign up for a session.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center items-center gap-3.5 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-xs sm:text-sm uppercase tracking-wider font-extrabold transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-primary border-primary text-white shadow-[0_0_15px_rgba(229,9,20,0.4)]"
                    : "bg-[#1A1A1A] border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid Layout of Classes */}
          <LayoutGroup>
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredClasses.map((cls) => (
                <ClassCard key={cls.id} {...cls} />
              ))}
            </motion.div>
          </LayoutGroup>

        </div>
      </div>
    </PageTransition>
  );
};

export default Programs;
