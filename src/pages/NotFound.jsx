import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Dumbbell } from "lucide-react";
import PageTransition from "../components/Common/PageTransition";
import { motion } from "framer-motion";


const NotFound = () => {
  return (
    <PageTransition>
      <div className="bg-background min-h-[70vh] flex flex-col items-center justify-center pt-24 pb-20 px-4 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Animated 3D/Outlined Dumbbell Icon */}
          <div className="bg-[#1A1A1A] p-6 rounded-full border border-neutral-800 text-primary animate-bounce mb-4">
            <Dumbbell className="h-16 w-16" />
          </div>

          <h1 className="font-display font-black text-7xl sm:text-9xl text-primary uppercase tracking-tighter leading-none">
            404
          </h1>
          
          <h2 className="font-display font-black text-2xl sm:text-3xl uppercase text-white tracking-wider">
            Page Has Flexed Away!
          </h2>
          
          <p className="max-w-md text-neutral-400 text-sm sm:text-base leading-relaxed">
            The page you are searching for does not exist, has been archived, or was lifted to another server directory.
          </p>

          <RouterLink
            to="/"
            className="mt-4 bg-primary hover:bg-red-700 text-white font-bold uppercase tracking-wider text-sm px-8 py-3.5 rounded-md transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(229,9,20,0.5)] transform hover:-translate-y-0.5"
          >
            Back to Safety
          </RouterLink>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
