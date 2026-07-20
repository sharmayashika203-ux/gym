import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Clock, User, Calendar, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ScheduleSection = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const [activeDay, setActiveDay] = useState("Monday");

  const scheduleData = {
    Monday: [
      { time: "06:00 AM - 07:00 AM", class: "CrossFit Syndicate", trainer: "Sarah Jenkins", duration: "60 Mins" },
      { time: "09:00 AM - 10:00 AM", class: "Powerlifting Elite", trainer: "Alex Rivers", duration: "60 Mins" },
      { time: "05:30 PM - 06:30 PM", class: "Kickboxing Striking", trainer: "Master Kenji", duration: "60 Mins" },
      { time: "07:00 PM - 08:00 PM", class: "Vinyasa Flow Yoga", trainer: "Diana Prince", duration: "60 Mins" },
    ],
    Tuesday: [
      { time: "07:00 AM - 07:45 AM", class: "Spin Cardio Rhythm", trainer: "Sarah Jenkins", duration: "45 Mins" },
      { time: "10:00 AM - 11:00 AM", class: "Muscle Building Elite", trainer: "Alex Rivers", duration: "60 Mins" },
      { time: "06:00 PM - 07:00 PM", class: "HIIT Cardio Blast", trainer: "Sarah Jenkins", duration: "40 Mins" },
      { time: "07:30 PM - 08:30 PM", class: "Sound Bath Meditation", trainer: "Diana Prince", duration: "50 Mins" },
    ],
    Wednesday: [
      { time: "06:00 AM - 07:00 AM", class: "CrossFit Syndicate", trainer: "Sarah Jenkins", duration: "50 Mins" },
      { time: "09:00 AM - 10:00 AM", class: "Powerlifting Elite", trainer: "Alex Rivers", duration: "60 Mins" },
      { time: "05:30 PM - 06:30 PM", class: "MMA Grappling Intro", trainer: "Master Kenji", duration: "60 Mins" },
      { time: "07:00 PM - 08:00 PM", class: "Vinyasa Flow Yoga", trainer: "Diana Prince", duration: "60 Mins" },
    ],
    Thursday: [
      { time: "07:00 AM - 07:45 AM", class: "Spin Cardio Rhythm", trainer: "Sarah Jenkins", duration: "45 Mins" },
      { time: "10:00 AM - 11:00 AM", class: "Muscle Building Elite", trainer: "Alex Rivers", duration: "60 Mins" },
      { time: "06:00 PM - 07:00 PM", class: "HIIT Cardio Blast", trainer: "Sarah Jenkins", duration: "40 Mins" },
      { time: "07:30 PM - 08:30 PM", class: "Sound Bath Meditation", trainer: "Diana Prince", duration: "50 Mins" },
    ],
    Friday: [
      { time: "06:00 AM - 07:00 AM", class: "CrossFit Syndicate", trainer: "Sarah Jenkins", duration: "50 Mins" },
      { time: "09:00 AM - 10:00 AM", class: "Powerlifting Elite", trainer: "Alex Rivers", duration: "60 Mins" },
      { time: "05:30 PM - 06:30 PM", class: "Kickboxing Striking", trainer: "Master Kenji", duration: "50 Mins" },
      { time: "07:00 PM - 08:00 PM", class: "Vinyasa Flow Yoga", trainer: "Diana Prince", duration: "60 Mins" },
    ],
    Saturday: [
      { time: "08:00 AM - 09:00 AM", class: "CrossFit Syndicate", trainer: "Sarah Jenkins", duration: "60 Mins" },
      { time: "10:00 AM - 11:30 AM", class: "Powerlifting Marathon", trainer: "Alex Rivers", duration: "90 Mins" },
      { time: "04:00 PM - 05:00 PM", class: "MMA Sparring Session", trainer: "Master Kenji", duration: "60 Mins" },
      { time: "05:30 PM - 06:30 PM", class: "Restorative Yin Yoga", trainer: "Diana Prince", duration: "60 Mins" },
    ],
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Glow highlight visual */}
      <div className="absolute top-1/2 right-10 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary text-xs uppercase tracking-widest font-extrabold mb-3.5 block">
            Timetable
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black uppercase text-white mb-4">
            Weekly <span className="text-primary">Schedule</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Plan your training week. View timings, coaches, and duration for group sessions from Monday to Saturday.
          </p>
        </div>

        {/* Days Tab Controls */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 mb-12">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm uppercase tracking-wider font-extrabold transition-all duration-300 border ${
                activeDay === day
                  ? "bg-primary border-primary text-white shadow-[0_0_15px_rgba(229,9,20,0.4)]"
                  : "bg-[#1A1A1A] border-neutral-900 text-neutral-400 hover:text-white hover:border-neutral-800"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Schedule Display */}
        <div className="overflow-hidden bg-[#1A1A1A]/40 border border-neutral-900 rounded-3xl p-6 sm:p-8 backdrop-blur-sm shadow-2xl relative">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              
              {/* Desktop Table View */}
              <div className="hidden md:block w-full overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-neutral-900/60 pb-4 text-xs uppercase tracking-wider text-neutral-400 font-bold">
                      <th className="pb-4 pl-4">Time Slot</th>
                      <th className="pb-4">Class Name</th>
                      <th className="pb-4">Instructor</th>
                      <th className="pb-4">Duration</th>
                      <th className="pb-4 pr-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scheduleData[activeDay].map((row, idx) => (
                      <tr
                        key={idx}
                        className="border-b border-neutral-900/40 hover:bg-[#202020]/30 transition-colors duration-200"
                      >
                        {/* Time Slot */}
                        <td className="py-5 pl-4 flex items-center gap-2.5 text-sm font-semibold text-white">
                          <Clock className="h-4.5 w-4.5 text-primary shrink-0" />
                          {row.time}
                        </td>
                        {/* Class Title */}
                        <td className="py-5 text-sm font-bold uppercase tracking-wide text-white">
                          {row.class}
                        </td>
                        {/* Instructor */}
                        <td className="py-5 text-sm text-neutral-300">
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {row.trainer}
                          </div>
                        </td>
                        {/* Duration */}
                        <td className="py-5 text-sm text-neutral-400">
                          {row.duration}
                        </td>
                        {/* Action Link */}
                        <td className="py-5 pr-4 text-right">
                          <Link
                            to="/contact"
                            className="bg-neutral-900 border border-neutral-800 text-white font-bold text-[10px] uppercase tracking-wider px-4 py-2 rounded-lg hover:bg-primary hover:border-primary transition-all duration-300"
                          >
                            Book Spot
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card Stack View */}
              <div className="md:hidden flex flex-col gap-4">
                {scheduleData[activeDay].map((row, idx) => (
                  <div
                    key={idx}
                    className="bg-[#1A1A1A] border border-neutral-900 rounded-2xl p-5 flex flex-col gap-4 text-left"
                  >
                    <div className="flex items-center justify-between border-b border-neutral-900 pb-3">
                      <div className="flex items-center gap-2 text-xs font-semibold text-white">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{row.time}</span>
                      </div>
                      <span className="text-[10px] text-neutral-400 uppercase font-bold bg-neutral-900 px-2 py-0.5 rounded border border-neutral-850">
                        {row.duration}
                      </span>
                    </div>

                    <div className="flex flex-col gap-1">
                      <h3 className="font-display font-black text-lg uppercase tracking-wide text-white">
                        {row.class}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-neutral-400">
                        <User className="h-3.5 w-3.5 text-primary" />
                        <span>Trainer: {row.trainer}</span>
                      </div>
                    </div>

                    <Link
                      to="/contact"
                      className="w-full text-center bg-primary hover:bg-red-700 text-white font-bold text-xs uppercase py-3 rounded-xl transition-all duration-300"
                    >
                      Book Session Slot
                    </Link>
                  </div>
                ))}
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};

export default ScheduleSection;
