import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, RefreshCw } from "lucide-react";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiResult, setBmiResult] = useState(null);
  const [bmiStatus, setBmiStatus] = useState("");
  const [statusColor, setStatusColor] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (h > 0 && w > 0) {
      const heightInMeters = h / 100;
      const bmi = (w / (heightInMeters * heightInMeters)).toFixed(1);
      setBmiResult(bmi);

      if (bmi < 18.5) {
        setBmiStatus("Underweight");
        setStatusColor("text-yellow-400 border-yellow-500/30 bg-yellow-500/10");
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        setBmiStatus("Healthy Weight");
        setStatusColor("text-green-400 border-green-500/30 bg-green-500/10");
      } else if (bmi >= 25 && bmi <= 29.9) {
        setBmiStatus("Overweight");
        setStatusColor("text-orange-400 border-orange-500/30 bg-orange-500/10");
      } else {
        setBmiStatus("Obese");
        setStatusColor("text-red-500 border-red-500/30 bg-red-500/10");
      }
    }
  };

  const resetCalculator = () => {
    setHeight("");
    setWeight("");
    setBmiResult(null);
    setBmiStatus("");
    setStatusColor("");
  };

  return (
    <section className="py-20 bg-[#141414] relative overflow-hidden">
      {/* Visual backdrop accents */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-1/3 left-10 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Left */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            <span className="text-primary text-xs uppercase tracking-widest font-extrabold">
              Fitness Toolkit
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black uppercase text-white leading-tight">
              Calculate Your <span className="text-primary">BMI</span> Index
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Body Mass Index (BMI) is a convenient indicator used to classify weight heights. Our simple calculator lets you evaluate whether you are in your target weight range.
            </p>

            <div className="mt-4 flex flex-col gap-4 text-xs sm:text-sm text-neutral-400 border-t border-neutral-900 pt-6">
              <div className="grid grid-cols-4 gap-2 text-center font-bold text-white mb-2">
                <div className="pb-1 border-b border-neutral-800">BMI Range</div>
                <div className="pb-1 border-b border-neutral-800 col-span-3">Weight Status</div>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-900">
                <span>Below 18.5</span>
                <span className="text-yellow-400 font-semibold">Underweight</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-900">
                <span>18.5 – 24.9</span>
                <span className="text-green-400 font-semibold">Healthy Weight</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-900">
                <span>25.0 – 29.9</span>
                <span className="text-orange-400 font-semibold">Overweight</span>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <span>30.0 and Above</span>
                <span className="text-red-500 font-semibold">Obese</span>
              </div>
            </div>
          </div>

          {/* Calculator Box Right */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-cardBg border border-neutral-900 p-8 sm:p-10 rounded-2xl shadow-xl flex flex-col gap-6"
            >
              <h3 className="font-display font-black text-2xl uppercase tracking-wider text-white border-b border-neutral-800 pb-4 flex items-center gap-3">
                <Calculator className="h-6 w-6 text-primary" />
                Calculator
              </h3>

              {!bmiResult ? (
                <form onSubmit={calculateBMI} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs uppercase tracking-wider text-neutral-400 font-bold">
                        Height (cm)
                      </label>
                      <input
                        type="number"
                        required
                        min="100"
                        max="250"
                        placeholder="e.g. 175"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        className="input-premium"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs uppercase tracking-wider text-neutral-400 font-bold">
                        Weight (kg)
                      </label>
                      <input
                        type="number"
                        required
                        min="30"
                        max="300"
                        placeholder="e.g. 70"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className="input-premium"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-red-700 text-white font-bold uppercase tracking-wider text-sm py-4 rounded-md transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(229,9,20,0.4)] flex items-center justify-center gap-2"
                  >
                    Calculate BMI
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col gap-6 text-center"
                >
                  <div className="bg-[#0F0F0F] rounded-xl p-6 border border-neutral-900">
                    <span className="text-xs uppercase tracking-wider text-neutral-400 block mb-1">
                      Your Body Mass Index (BMI)
                    </span>
                    <span className="text-5xl sm:text-6xl font-display font-black text-white block">
                      {bmiResult}
                    </span>
                  </div>

                  <div className={`border p-4 rounded-lg text-sm font-bold uppercase tracking-widest ${statusColor}`}>
                    Status: {bmiStatus}
                  </div>

                  <p className="text-xs text-neutral-400 italic">
                    Note: Health indicators can vary depending on muscular builds, bone density, age, and pregnancy.
                  </p>

                  <button
                    onClick={resetCalculator}
                    className="w-full bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-white font-bold uppercase tracking-wider text-sm py-3.5 rounded-md transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <RefreshCw className="h-4 w-4" />
                    Calculate Again
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
