import React from "react";
import { Link } from "react-router-dom";
import { Clock, Flame, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const ClassCard = ({ title, category, duration, calories, image, description }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="bg-[#1A1A1A] border border-neutral-900 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 flex flex-col h-full group"
    >
      {/* Class Image & Tag */}
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-primary text-white text-xs font-extrabold uppercase px-3 py-1.5 rounded-md tracking-wider">
          {category}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-80" />
      </div>

      {/* Class Content */}
      <div className="p-6 flex flex-col justify-between flex-grow gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="font-display font-black text-xl uppercase tracking-wider text-white">
            {title}
          </h3>
          <p className="text-neutral-400 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Info Grid */}
        <div className="flex items-center gap-6 text-xs text-neutral-400 font-medium py-3 border-t border-b border-neutral-800">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Flame className="h-4 w-4 text-primary" />
            <span>{calories} Kcal</span>
          </div>
        </div>

        {/* Action Button */}
        <Link
          to="/contact"
          className="w-full bg-neutral-900 border border-neutral-800 text-white font-bold text-center text-xs uppercase tracking-wider py-3 rounded-lg group-hover:bg-primary group-hover:border-primary transition-all duration-300 flex items-center justify-center gap-2"
        >
          Book Session
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ClassCard;
