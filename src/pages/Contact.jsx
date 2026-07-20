import React, { useState } from "react";
import PageTransition from "../components/Common/PageTransition";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      // Reset success status after a delay
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <PageTransition>
      <div className="bg-background pt-32 pb-20 relative overflow-hidden">
        {/* Ambient background blur */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary text-xs uppercase tracking-widest font-extrabold mb-3.5 block">
              Contact Us
            </span>
            <h1 className="text-4xl sm:text-6xl font-display font-black uppercase text-white mb-4">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Have a question about program registrations, timings, or memberships? Fill out the form or view our coordinates below.
            </p>
          </div>

          {/* Grid: Maps & Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
            
            {/* Left: Google Maps Placeholder with Dark filter */}
            <div className="lg:col-span-6 h-full flex flex-col">
              <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px] rounded-3xl overflow-hidden border border-neutral-900 shadow-xl bg-cardBg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.836068884!2d77.06889750567674!3d28.527218143924765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204d!2sDelhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(1) invert(0.92) contrast(1.2)" }}
                  allowFullScreen=""
                  loading="lazy"
                  title="CultFitness Location Map"
                  className="w-full h-full absolute inset-0"
                />
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-6 bg-[#141414] border border-neutral-900 rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-center">
              <h2 className="font-display font-black text-2xl uppercase tracking-wider text-white border-b border-neutral-900 pb-4 mb-6">
                Send Message
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-500/10 border border-green-500/20 text-green-400 rounded-2xl p-8 text-center flex flex-col items-center gap-4"
                >
                  <CheckCircle2 className="h-16 w-16 text-green-400 animate-bounce" />
                  <div>
                    <h3 className="font-display font-black text-xl uppercase tracking-wider text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      Thank you for contacting CultFitness. A support coordinator will check your details and reply within 24 hours.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-wider text-neutral-400 font-bold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="input-premium"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-wider text-neutral-400 font-bold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="input-premium"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-wider text-neutral-400 font-bold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. +91 9876543210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input-premium"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-wider text-neutral-400 font-bold">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows="4"
                      placeholder="Write details of your inquiry here..."
                      value={formData.message}
                      onChange={handleChange}
                      className="input-premium resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary hover:bg-red-700 text-white font-bold uppercase tracking-wider text-sm py-4 rounded-md transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(229,9,20,0.4)] flex items-center justify-center gap-2 mt-2 disabled:bg-neutral-800 disabled:text-neutral-500"
                  >
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Below Info Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Email Card */}
            <div className="bg-cardBg border border-neutral-900 p-6 rounded-2xl flex items-center gap-4 hover:border-primary/20 transition-colors duration-350 text-left">
              <div className="bg-primary/10 p-3 rounded-xl border border-primary/20 text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-black text-neutral-500 tracking-wider block mb-0.5">Email Support</span>
                <a href="mailto:contact@cultfitness.com" className="text-sm font-bold text-white hover:text-primary transition-colors">
                  contact@cultfitness.com
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-cardBg border border-neutral-900 p-6 rounded-2xl flex items-center gap-4 hover:border-primary/20 transition-colors duration-350 text-left">
              <div className="bg-primary/10 p-3 rounded-xl border border-primary/20 text-primary">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-black text-neutral-500 tracking-wider block mb-0.5">Call Hotline</span>
                <a href="tel:+919876543210" className="text-sm font-bold text-white hover:text-primary transition-colors">
                  +91 9876543210
                </a>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-cardBg border border-neutral-900 p-6 rounded-2xl flex items-center gap-4 hover:border-primary/20 transition-colors duration-350 text-left">
              <div className="bg-primary/10 p-3 rounded-xl border border-primary/20 text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-black text-neutral-500 tracking-wider block mb-0.5">Club Location</span>
                <span className="text-sm font-bold text-white">
                  Delhi, India
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
