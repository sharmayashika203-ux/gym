import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { ArrowUp, Dumbbell } from "lucide-react";
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Trainers from "./pages/Trainers";
import Membership from "./pages/Membership";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/Common/ProtectedRoute";
import NotFound from "./pages/NotFound";

function App() {
  const location = useLocation();
  const { scrollYProgress } = useScroll();

  const [appLoading, setAppLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Initial Boot Page Loader (1.2s timeout)
  useEffect(() => {
    const timer = setTimeout(() => setAppLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Monitor scroll height to show/hide Back-to-Top button
  useEffect(() => {
    const handleScrollVisibility = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScrollVisibility);
    return () => window.removeEventListener("scroll", handleScrollVisibility);
  }, []);

  // Scroll to top on every route transition
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Render Premium Boot Loader
  if (appLoading) {
    return (
      <div className="fixed inset-0 bg-background flex flex-col items-center justify-center z-50 gap-4">
        {/* Spinning logo ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
          className="text-primary bg-neutral-900 p-5 rounded-full border border-neutral-800 shadow-xl"
        >
          <Dumbbell className="h-12 w-12" />
        </motion.div>
        
        {/* Pulsing tagline */}
        <motion.h2
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="font-display font-black text-2xl uppercase tracking-widest text-white mt-2"
        >
          CULT<span className="text-primary">FITNESS</span>
        </motion.h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-white relative">
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Sticky Header */}
      <Navbar />
      
      {/* Route Switcher with transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Back to Top Floating Action Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.25 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-red-700 text-white p-3.5 rounded-full shadow-lg transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(229,9,20,0.5)] cursor-pointer"
            aria-label="Back to Top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
