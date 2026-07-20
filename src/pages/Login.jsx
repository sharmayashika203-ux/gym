import React, { useState } from "react";
import PageTransition from "../components/Common/PageTransition";
import { Link, useNavigate } from "react-router-dom";
import { Dumbbell, Eye, EyeOff, LogIn, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login, loginWithGoogle } = useAuth();

  // Controlled React Inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Email/Password login submission
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      setLoading(true);
      await login(email, password);
      setLoading(false);
      setSuccess(true);
      
      // Navigate to dashboard after success alert
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } catch (err) {
      setLoading(false);
      const errMsg = err.code ? err.code.split("/")[1].replace(/-/g, " ") : err.message;
      setError(errMsg.charAt(0).toUpperCase() + errMsg.slice(1) || "Failed to sign in.");
    }
  };

  // Google SSO login trigger
  const handleGoogleLogin = async () => {
    setError("");
    try {
      setLoading(true);
      await loginWithGoogle();
      setLoading(false);
      setSuccess(true);
      
      // Navigate to dashboard after success alert
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } catch (err) {
      setLoading(false);
      const errMsg = err.code ? err.code.split("/")[1].replace(/-/g, " ") : err.message;
      setError(errMsg.charAt(0).toUpperCase() + errMsg.slice(1) || "Google login failed.");
    }
  };

  return (
    <PageTransition>
      <div className="bg-background min-h-screen flex items-center justify-center pt-24 pb-20 px-4 relative overflow-hidden">
        
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Modern Glass Card Container */}
        <div className="w-full max-w-md glass-card rounded-3xl p-8 sm:p-10 shadow-2xl relative z-10">
          
          {/* Brand Header */}
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
              Welcome Back
            </h2>
            <p className="text-neutral-400 text-xs">
              Sign in to manage your workout regimes.
            </p>
          </div>

          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6 flex flex-col items-center gap-4"
            >
              <div className="bg-green-500/10 border border-green-500/30 text-green-400 rounded-full p-4">
                <LogIn className="h-10 w-10 text-green-400" />
              </div>
              <div>
                <h3 className="font-display font-black text-lg text-white uppercase tracking-wider mb-1">
                  Access Granted!
                </h3>
                <p className="text-neutral-400 text-xs leading-relaxed max-w-xs mx-auto">
                  Authentication successful. Syncing your member profile details...
                </p>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleLogin} className="flex flex-col gap-5">
              
              {/* Validation Error Banner */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-semibold p-3.5 rounded-lg flex items-center gap-2.5 text-left"
                >
                  <AlertTriangle className="h-4.5 w-4.5 shrink-0" />
                  <span>{error}</span>
                </motion.div>
              )}

              {/* Email Controlled Input */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase tracking-wider text-neutral-400 font-bold">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. member@cultfitness.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-premium"
                />
              </div>

              {/* Password Controlled Input */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-xs uppercase tracking-wider text-neutral-400 font-bold">
                    Password
                  </label>
                  <a href="#forgot" className="text-[10px] text-primary hover:underline uppercase font-bold">
                    Forgot Password?
                  </a>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-premium pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
                  </button>
                </div>
              </div>

              {/* Remember Me Controlled Toggle */}
              <div className="flex items-center gap-2 mt-1">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="accent-primary h-4 w-4 bg-neutral-900 border border-neutral-800 rounded cursor-pointer"
                />
                <label htmlFor="remember" className="text-[11px] text-neutral-400 font-medium select-none cursor-pointer">
                  Remember Me
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-red-700 text-white font-bold uppercase tracking-wider text-sm py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(229,9,20,0.4)] flex items-center justify-center gap-2 mt-2 disabled:bg-neutral-800 disabled:text-neutral-500"
              >
                {loading ? (
                  <span className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin" />
                ) : (
                  "Login"
                )}
              </button>

              {/* Social Login Separator */}
              <div className="relative my-3 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-neutral-900" />
                </div>
                <span className="relative bg-[#171717] px-4 text-[10px] uppercase font-bold text-neutral-500 tracking-wider">
                  Or
                </span>
              </div>

              {/* Continue with Google Button */}
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="w-full bg-neutral-950 hover:bg-neutral-900 border border-neutral-850 hover:border-neutral-700 text-white text-xs uppercase tracking-wider font-extrabold py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2.5 shadow-md"
              >
                {/* Google SVG Icon */}
                <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.24 10.285V13.4h6.887C18.2 15.614 15.645 18 12.24 18c-3.86 0-7-3.14-7-7s3.14-7 7-7c1.705 0 3.268.614 4.5 1.625l2.437-2.437C17.387 1.83 14.973 1 12.24 1 6.577 1 2 5.577 2 11.24s4.577 10.24 10.24 10.24c5.795 0 10.24-4.11 10.24-10.24 0-.682-.082-1.336-.205-1.955H12.24z"/>
                </svg>
                Continue with Google
              </button>

              {/* Link: Create Account */}
              <div className="text-center mt-4">
                <span className="text-xs text-neutral-500">Don't have an account? </span>
                <Link to="/signup" className="text-xs text-primary font-bold hover:underline ml-1">
                  Create Account
                </Link>
              </div>

            </form>
          )}

        </div>
      </div>
    </PageTransition>
  );
};

export default Login;
