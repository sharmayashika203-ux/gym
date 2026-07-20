import React, { useState } from "react";
import PageTransition from "../components/Common/PageTransition";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { LogOut, Dumbbell, Award, Flame, User, Calendar, PlusCircle, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const Dashboard = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      setError("Failed to sign out. Please try again.");
    }
  };

  // Mock Workout & Class Data
  const todaysWorkout = [
    { exercise: "Barbell Back Squats", routine: "4 Sets x 8 Reps (Progressive Overload)" },
    { exercise: "Romanian Deadlifts", routine: "4 Sets x 10 Reps (Form Focus)" },
    { exercise: "Bulgarian Split Squats", routine: "3 Sets x 12 Reps each leg" },
    { exercise: "Hanging Leg Raises", routine: "3 Sets x 15 Reps (Core Lock)" },
  ];

  const upcomingClasses = [
    { class: "CrossFit Syndicate", time: "Wednesday at 06:00 AM", coach: "Sarah Jenkins" },
    { class: "Kickboxing Striking", time: "Friday at 05:30 PM", coach: "Master Kenji" },
    { class: "Sound Bath Meditation", time: "Saturday at 05:30 PM", coach: "Diana Prince" },
  ];

  // Visual Workout Progress Metric (75% completed)
  const progressPercent = 75;

  return (
    <PageTransition>
      <div className="bg-background pt-32 pb-20 relative overflow-hidden">
        {/* Glow highlights */}
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          
          {/* Welcome User Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-b border-neutral-900 pb-8 mb-12">
            <div>
              <span className="text-primary text-xs uppercase tracking-widest font-extrabold block mb-1">
                Active Session
              </span>
              <h1 className="text-3xl sm:text-5xl font-display font-black uppercase text-white leading-none">
                Welcome, <span className="text-primary">{currentUser?.displayName || "Athlete"}</span>!
              </h1>
              <p className="text-neutral-400 text-sm mt-2">
                "Small progress daily adds up to massive results." Let's crush today's training.
              </p>
            </div>
            
            {/* Logout Trigger */}
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 border border-neutral-800 hover:border-primary text-neutral-400 hover:text-primary transition-all duration-300 text-xs uppercase tracking-wider font-extrabold px-5 py-3 rounded-xl bg-cardBg/40 backdrop-blur-sm shadow-md"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/25 text-red-500 text-xs font-semibold p-4 rounded-xl mb-6">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Profile Card (4 Cols) */}
            <div className="lg:col-span-4 bg-[#141414] border border-neutral-900 rounded-3xl p-8 shadow-xl flex flex-col items-center text-center gap-6 relative">
              <div className="relative">
                {currentUser?.photoURL ? (
                  <img
                    src={currentUser.photoURL}
                    alt={currentUser.displayName || "User Avatar"}
                    className="w-24 h-24 rounded-full border-2 border-primary object-cover shadow-lg"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-neutral-900 border-2 border-primary flex items-center justify-center text-primary shadow-lg">
                    <User className="h-10 w-10" />
                  </div>
                )}
                <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-[#141414] rounded-full animate-pulse" />
              </div>

              <div>
                <h3 className="font-display font-black text-xl uppercase tracking-wider text-white">
                  {currentUser?.displayName || "Cult Member"}
                </h3>
                <span className="text-neutral-500 text-xs block mt-0.5">
                  {currentUser?.email}
                </span>
              </div>

              {/* Membership Plan Info Block */}
              <div className="w-full flex flex-col gap-3">
                <div className="bg-[#0F0F0F] rounded-2xl p-4 border border-neutral-900 text-left flex flex-col gap-1.5">
                  <span className="text-[10px] uppercase font-black text-neutral-500 tracking-wider">Membership Plan</span>
                  <span className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <Award className="h-4.5 w-4.5 text-primary" />
                    Elite Plan (Active)
                  </span>
                </div>
                <div className="bg-[#0F0F0F] rounded-2xl p-4 border border-neutral-900 text-left flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-black text-neutral-500 tracking-wider">Expiry / Billing</span>
                  <span className="text-xs text-neutral-300 font-semibold">
                    Renews on Aug 20, 2026
                  </span>
                </div>
              </div>

              {/* Logout Button (Duplicate inside profile card as requested) */}
              <button
                onClick={handleLogout}
                className="w-full bg-neutral-950 border border-neutral-900 hover:border-primary text-neutral-400 hover:text-primary transition-all duration-300 font-bold uppercase tracking-wider text-xs py-3.5 rounded-xl flex items-center justify-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                Sign Out Account
              </button>
            </div>

            {/* Right: Metrics, Today's Workout & Classes (8 Cols) */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              
              {/* Progress metrics and calories */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Calories Burned Stat */}
                <div className="bg-[#141414] border border-neutral-900 p-6 rounded-2xl flex items-center gap-4 hover:border-primary/20 transition-all duration-350 shadow-md">
                  <div className="bg-primary/10 p-3.5 rounded-xl border border-primary/20 text-primary">
                    <Flame className="h-7 w-7 animate-pulse" />
                  </div>
                  <div className="text-left">
                    <span className="text-3xl font-display font-black text-white block leading-tight">3,450 Kcal</span>
                    <span className="text-neutral-400 text-xs uppercase tracking-widest font-bold">Calories Burned (This Week)</span>
                  </div>
                </div>

                {/* Workout Progress Stat */}
                <div className="bg-[#141414] border border-neutral-900 p-6 rounded-2xl flex flex-col justify-between gap-4 hover:border-primary/20 transition-all duration-350 shadow-md text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest font-bold text-neutral-400">Workout Progress</span>
                    <span className="text-sm font-display font-black text-primary">{progressPercent}%</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-neutral-900 rounded-full h-3 border border-neutral-800 overflow-hidden">
                    <div
                      className="bg-primary h-full rounded-full transition-all duration-1000"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                  
                  <span className="text-[10px] text-neutral-500 font-semibold">
                    15 of 20 target monthly training sessions completed.
                  </span>
                </div>

              </div>

              {/* Grid: Today's Workout & Upcoming Classes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Today's Workout Section */}
                <div className="bg-[#141414] border border-neutral-900 rounded-3xl p-6 sm:p-8 shadow-xl text-left">
                  <h3 className="font-display font-black text-lg uppercase tracking-wider text-white border-b border-neutral-900 pb-3 mb-5 flex items-center gap-2">
                    <Dumbbell className="h-5 w-5 text-primary" />
                    Today's Workout
                  </h3>
                  
                  <div className="flex flex-col gap-3.5">
                    {todaysWorkout.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-[#0F0F0F]/80 border border-neutral-900 rounded-xl flex items-start gap-3"
                      >
                        <div className="bg-primary/20 p-1.5 rounded-lg text-primary shrink-0 mt-0.5">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                        </div>
                        <div>
                          <span className="text-sm font-bold text-white block">{item.exercise}</span>
                          <span className="text-xs text-neutral-400 font-medium">{item.routine}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Upcoming Booked Classes Section */}
                <div className="bg-[#141414] border border-neutral-900 rounded-3xl p-6 sm:p-8 shadow-xl text-left">
                  <h3 className="font-display font-black text-lg uppercase tracking-wider text-white border-b border-neutral-900 pb-3 mb-5 flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Upcoming Classes
                  </h3>
                  
                  <div className="flex flex-col gap-3.5">
                    {upcomingClasses.map((row, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 bg-[#0F0F0F]/80 border border-neutral-900 rounded-xl flex flex-col gap-1.5"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-bold text-white uppercase tracking-wider">{row.class}</span>
                          <span className="bg-primary/10 border border-primary/20 text-primary text-[9px] uppercase font-black px-2 py-0.5 rounded">
                            Booked
                          </span>
                        </div>
                        <div className="flex flex-col gap-0.5 text-xs text-neutral-400 font-medium">
                          <span>Timing: {row.time}</span>
                          <span>Coach: {row.coach}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default Dashboard;
