import React from "react";
import { MessageSquare, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const TrainerCard = ({ name, specialization, experience, image, instagramUrl, linkedinUrl }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#1A1A1A] border border-neutral-900 rounded-2xl overflow-hidden hover:border-primary/20 transition-all duration-300 group flex flex-col h-full relative"
    >
      {/* Trainer Image & Hover Overlay */}
      <div className="relative h-80 w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Shadow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-80" />

        {/* Hover Social Overlay (Slide Up Action) */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
          <a
            href={instagramUrl || "https://instagram.com"}
            target="_blank"
            rel="noreferrer"
            className="bg-primary hover:bg-red-700 text-white p-3.5 rounded-full transition-transform duration-300 transform hover:scale-110 shadow-lg flex items-center justify-center"
            aria-label="Instagram Link"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </a>
          <a
            href={linkedinUrl || "https://linkedin.com"}
            target="_blank"
            rel="noreferrer"
            className="bg-neutral-900 hover:bg-primary border border-neutral-800 hover:border-primary text-white p-3.5 rounded-full transition-transform duration-300 transform hover:scale-110 shadow-lg flex items-center justify-center"
            aria-label="LinkedIn Link"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect width="4" height="12" x="2" y="9"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Trainer Profiles Details */}
      <div className="p-6 flex flex-col justify-between flex-grow gap-4 text-left">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <span className="text-primary text-xs uppercase tracking-widest font-extrabold">
              {specialization}
            </span>
            <div className="flex items-center gap-1 text-[10px] text-neutral-400 font-bold uppercase tracking-wider bg-[#222] px-2 py-0.5 rounded border border-neutral-800">
              <Award className="h-3 w-3 text-primary" />
              <span>{experience} Exp</span>
            </div>
          </div>
          <h3 className="font-display font-black text-2xl uppercase tracking-wider text-white">
            {name}
          </h3>
        </div>

        {/* Quick Consultation Call */}
        <div className="border-t border-neutral-900/60 pt-4 mt-2">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-extrabold text-white hover:text-primary transition-colors"
          >
            <MessageSquare className="h-4 w-4 text-primary animate-pulse" />
            Inquire Coaching
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default TrainerCard;
