import React, { useState } from "react";
import PageTransition from "../components/Common/PageTransition";
import { Link, useNavigate } from "react-router-dom";
import { Dumbbell, Eye, EyeOff, CheckCircle2, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();

  // Controlled Inputs
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    // Validation checks
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      await signup(email, password, fullName);
      setLoading(false);
      setSuccess(true);
      
      // Navigate to login after 2 seconds
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setLoading(false);
      // Clean up Firebase error messages for user presentation
      const errMsg = err.code ? err.code.split("/")[1].replace(/-/g, " ") : err.message;
      setError(errMsg.charAt(0).toUpperCase() + errMsg.slice(1) || "Failed to create account.");
    }
  };

  return (
    <PageTransition>
      <div className="bg-background min-h-screen flex items-center justify-center pt-24 pb-20 px-4 relative overflow-hidden">
        
        {/* Glow Details */}
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Modern Glass Card */}
        <div className="w-full max-w-md glass-card rounded-3xl p-8 sm:p-10 shadow-2xl relative z-10">
          
          {/* Header */}
          <div className="flex flex-col items-center gap-2 text-center mb-8">
            <Link to="/" className="flex items-center gap-2 group mb-1">
              <div className="bg-primary p-2 rounded-lg text-white">
                <Dumbbell className="h-5.5 w-5.5" />
              </div>
              <span className="font-display font-extrabold text-2xl tracking-tight text-white">
                CULT<span className="text-primary">FITNESS</span>
              </span>
            </Link>
            <h2 className="font-display font-black text-xl uppercase tracking-wider text-white">
              Create Account
            </h2>
            <p className="text-neutral-400 text-xs">
              Join CultFitness to start your physical transformation today.
            </p>
          </div>

          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6 flex flex-col items-center gap-4"
            >
              <div className="bg-green-500/10 border border-green-500/30 text-green-400 rounded-full p-4">
                <CheckCircle2 className="h-10 w-10 text-green-400" />
              </div>
              <div>
                <h3 className="font-display font-black text-lg text-white uppercase tracking-wider mb-1">
                  Signup Successful!
                </h3>
                <p className="text-neutral-400 text-xs leading-relaxed max-w-xs mx-auto">
                  Your profile has been created successfully. Navigating you to the login screen...
                </p>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSignup} className="flex flex-col gap-4">
              
              {/* Validation Error Banner */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-semibold p-3.5 rounded-lg flex items-center gap-2.5"
                >
                  <AlertTriangle className="h-4.5 w-4.5 shrink-0" />
                  <span className="capitalize">{error}</span>
                </motion.div>
              )}

              {/* Full Name */}
              <div className="flex flex-col gap-1">
                <label className="text-xs uppercase tracking-wider text-neutral-400 font-bold">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="input-premium py-2.5"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <label className="text-xs uppercase tracking-wider text-neutral-400 font-bold">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-premium py-2.5"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1">
                <label className="text-xs uppercase tracking-wider text-neutral-400 font-bold">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="input-premium py-2.5"
                />
              </div>

              {/* Password */}
              <div className="flex flex-col gap-1">
                <label className="text-xs uppercase tracking-wider text-neutral-400 font-bold">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="•••••••• (Min 6 chars)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-premium py-2.5 pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="flex flex-col gap-1">
                <label className="text-xs uppercase tracking-wider text-neutral-400 font-bold">
                  Confirm Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="input-premium py-2.5"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-red-700 text-white font-bold uppercase tracking-wider text-sm py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(229,9,20,0.4)] flex items-center justify-center gap-2 mt-3 disabled:bg-neutral-800 disabled:text-neutral-500"
              >
                {loading ? (
                  <span className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin" />
                ) : (
                  "Create Account"
                )}
              </button>

              {/* Redirect link to login */}
              <div className="text-center mt-3">
                <span className="text-xs text-neutral-500">Already have an account? </span>
                <Link to="/login" className="text-xs text-primary font-bold hover:underline ml-1">
                  Log In
                </Link>
              </div>

            </form>
          )}

        </div>
      </div>
    </PageTransition>
  );
};

export default Signup;
