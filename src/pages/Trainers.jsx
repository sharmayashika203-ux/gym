import React from "react";
import TrainerCard from "../components/Trainers/TrainerCard";
import PageTransition from "../components/Common/PageTransition";

const Trainers = () => {
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
    <PageTransition>
      <div className="bg-background pt-32 pb-20 relative overflow-hidden">
        {/* Ambient background highlight */}
        <div className="absolute top-1/4 right-10 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary text-xs uppercase tracking-widest font-extrabold mb-3.5 block">
              The Crew
            </span>
            <h1 className="text-4xl sm:text-6xl font-display font-black uppercase text-white mb-4">
              Meet Our Elite <span className="text-primary">Coaches</span>
            </h1>
            <p className="text-neutral-400 text-sm sm:text-base">
              Train under professional guidance. Our coaches are industry certified specialists committed to monitoring your form, plans, and progression milestones.
            </p>
          </div>

          {/* Trainers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainersData.map((trainer) => (
              <TrainerCard key={trainer.id} {...trainer} />
            ))}
          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default Trainers;
