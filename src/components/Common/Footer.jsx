import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dumbbell, Mail, Phone, MapPin, Send, Check } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-background border-t border-neutral-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary p-1.5 rounded text-white">
                <Dumbbell className="h-5 w-5" />
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight text-white">
                CULT<span className="text-primary">FITNESS</span>
              </span>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Premium training club dedicated to empowering your potential. Elevate your body, mind, and spirit with our professional classes and elite trainers.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="bg-[#1A1A1A] hover:bg-primary text-white p-2.5 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_10px_rgba(229,9,20,0.4)] flex items-center justify-center">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="bg-[#1A1A1A] hover:bg-primary text-white p-2.5 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_10px_rgba(229,9,20,0.4)] flex items-center justify-center">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="bg-[#1A1A1A] hover:bg-primary text-white p-2.5 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_10px_rgba(229,9,20,0.4)] flex items-center justify-center">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/>
                  <polygon points="10 15 15 12 10 9"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-base uppercase tracking-wider text-white border-l-2 border-primary pl-2.5 mb-6">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3.5 text-sm text-neutral-400">
              <Link to="/" className="hover:text-primary transition-colors duration-200">Home</Link>
              <Link to="/about" className="hover:text-primary transition-colors duration-200">About</Link>
              <Link to="/programs" className="hover:text-primary transition-colors duration-200">Programs</Link>
              <Link to="/trainers" className="hover:text-primary transition-colors duration-200">Trainers</Link>
              <Link to="/membership" className="hover:text-primary transition-colors duration-200">Membership</Link>
              <Link to="/contact" className="hover:text-primary transition-colors duration-200">Contact</Link>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-display font-bold text-base uppercase tracking-wider text-white border-l-2 border-primary pl-2.5 mb-6">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-4 text-sm text-neutral-400">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>100 Fitness Boulevard, Suite A, Bengaluru, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span>info@cultfitness.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter Form */}
          <div>
            <h4 className="font-display font-bold text-base uppercase tracking-wider text-white border-l-2 border-primary pl-2.5 mb-6">
              Newsletter
            </h4>
            <p className="text-neutral-400 text-sm mb-4">
              Subscribe to get latest gym updates, nutrition blogs, and premium membership deals.
            </p>
            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="w-full bg-[#1A1A1A] border border-neutral-800 rounded-lg py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-primary transition-all duration-300"
              />
              <button
                type="submit"
                disabled={subscribed}
                className="absolute right-1 top-1 bottom-1 px-3.5 bg-primary hover:bg-red-700 text-white rounded-md transition-all duration-300 flex items-center justify-center"
              >
                {subscribed ? <Check className="h-4 w-4" /> : <Send className="h-4 w-4" />}
              </button>
            </form>
            {subscribed && (
              <p className="text-green-500 text-xs mt-2.5 animate-pulse">
                Thank you for subscribing! Check your inbox.
              </p>
            )}
          </div>
        </div>

        <div className="border-t border-neutral-900 mt-12 pt-8 text-center text-xs text-neutral-500 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>&copy; {new Date().getFullYear()} CultFitness. All Rights Reserved.</span>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
