import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, Dumbbell, User, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle sticky scrolling and auto show/hide transitions
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleLogout = async () => {
    try {
      await logout();
      setIsOpen(false);
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Trainers", path: "/trainers" },
    { name: "Membership", path: "/membership" },
    { name: "Contact", path: "/contact" },
  ];

  // Append Dashboard link if authenticated
  if (currentUser) {
    navLinks.push({ name: "Dashboard", path: "/dashboard" });
  }

  const listVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120, damping: 14 } },
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 transform ${
          visible ? "translate-y-0" : "-translate-y-full"
        } ${
          scrolled ? "glass-header shadow-xl py-3.5" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-primary p-2 rounded-lg text-white transition-transform duration-300 group-hover:rotate-12">
                <Dumbbell className="h-5 w-5" />
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight text-white">
                CULT<span className="text-primary">FITNESS</span>
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `font-medium text-xs tracking-wider uppercase transition-colors duration-300 relative py-1 hover:text-primary ${
                      isActive ? "text-primary font-bold" : "text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-primary"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              {currentUser ? (
                <>
                  <Link
                    to="/dashboard"
                    className="flex items-center gap-2 text-white hover:text-primary transition-all text-xs uppercase font-extrabold"
                  >
                    {currentUser.photoURL ? (
                      <img src={currentUser.photoURL} alt="Avatar" className="w-7 h-7 rounded-full border border-primary object-cover" />
                    ) : (
                      <User className="h-4.5 w-4.5 text-primary" />
                    )}
                    <span>{currentUser.displayName || "My Profile"}</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-1.5 border border-neutral-850 hover:border-primary text-neutral-400 hover:text-primary font-bold text-xs uppercase px-4 py-2.5 rounded-lg transition-all duration-300 bg-black/35 backdrop-blur-sm"
                  >
                    <LogOut className="h-3.5 w-3.5" />
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="flex items-center gap-1.5 border border-neutral-800 hover:border-white text-white font-bold text-xs uppercase px-5 py-2.5 rounded-lg transition-all duration-300 bg-black/35 backdrop-blur-sm"
                  >
                    <User className="h-3.5 w-3.5 text-primary" />
                    Login
                  </Link>
                  <Link
                    to="/contact"
                    className="bg-primary hover:bg-red-700 text-white font-bold text-xs uppercase px-5 py-2.5 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(229,9,20,0.5)] transform hover:-translate-y-0.5"
                  >
                    Join Now
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Toggles */}
            <div className="lg:hidden flex items-center gap-3">
              {currentUser ? (
                <Link
                  to="/dashboard"
                  className="text-white hover:text-primary transition-colors p-1"
                  aria-label="Dashboard"
                >
                  {currentUser.photoURL ? (
                    <img src={currentUser.photoURL} alt="Avatar" className="w-6 h-6 rounded-full border border-primary object-cover" />
                  ) : (
                    <User className="h-5.5 w-5.5 text-primary" />
                  )}
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="text-white hover:text-primary transition-colors p-1"
                  aria-label="Login Account"
                >
                  <User className="h-5.5 w-5.5" />
                </Link>
              )}

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-primary transition-colors focus:outline-none p-1"
                aria-label="Toggle Navigation Menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Modern Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/75 z-40 lg:hidden backdrop-blur-md"
            />

            {/* Slide Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[300px] bg-background border-l border-neutral-900 z-50 p-6 flex flex-col justify-between lg:hidden shadow-2xl"
            >
              <div className="flex flex-col gap-8 mt-6">
                <div className="flex items-center justify-between">
                  <span className="font-display font-extrabold text-lg tracking-wider text-white">
                    CULT<span className="text-primary">FITNESS</span>
                  </span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:text-primary transition-colors p-1"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Staggered Links */}
                <motion.div
                  variants={listVariants}
                  initial="hidden"
                  animate="show"
                  className="flex flex-col gap-4"
                >
                  {navLinks.map((link) => (
                    <motion.div variants={itemVariants} key={link.name}>
                      <NavLink
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `block text-base font-bold tracking-wide uppercase transition-all py-2.5 pl-0 ${
                            isActive
                              ? "text-primary pl-3 border-l-2 border-primary"
                              : "text-white hover:text-primary hover:pl-2"
                          }`
                        }
                      >
                        {link.name}
                      </NavLink>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Drawer Bottom Actions */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col gap-3.5 mb-6"
              >
                {currentUser ? (
                  <button
                    onClick={handleLogout}
                    className="w-full text-center border border-neutral-800 hover:border-primary text-neutral-400 hover:text-primary font-bold uppercase py-3 rounded-lg text-sm bg-black/40 flex items-center justify-center gap-2"
                  >
                    <LogOut className="h-4 w-4" />
                    Sign Out
                  </button>
                ) : (
                  <>
                    <Link
                      to="/login"
                      onClick={() => setIsOpen(false)}
                      className="w-full text-center border border-neutral-800 hover:border-white text-white font-bold uppercase py-3 rounded-lg text-sm bg-black/40"
                    >
                      Login Account
                    </Link>
                    <Link
                      to="/contact"
                      onClick={() => setIsOpen(false)}
                      className="w-full text-center bg-primary hover:bg-red-700 text-white font-bold uppercase py-3 rounded-lg text-sm shadow-md"
                    >
                      Join CultFitness
                    </Link>
                  </>
                )}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
