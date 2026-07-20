"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  const monogramVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6,
        duration: 1,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const barVariants = {
    hidden: { width: 0 },
    visible: {
      width: "120px",
      transition: {
        delay: 0.8,
        duration: 1.5,
        ease: "easeInOut" as const,
      },
    },
  };

  const panelVariants = {
    exit: {
      y: "-100%",
      transition: {
        duration: 1.1,
        ease: [0.76, 0, 0.24, 1] as const, // Smooth custom cubic bezier for premium feel
      },
    },
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          variants={panelVariants}
          exit="exit"
          className="fixed inset-0 z-[9999] bg-primary flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Subtle grid layout in background */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />

          <div className="relative flex flex-col items-center select-none">
            {/* Elegant Monogram */}
            <motion.div
              variants={monogramVariants}
              initial="hidden"
              animate="visible"
              className="w-20 h-20 rounded-full border border-secondary flex items-center justify-center mb-6 relative"
            >
              <div className="absolute -inset-1 rounded-full border border-secondary/20 animate-pulse" />
              <span className="font-serif text-3xl font-bold text-secondary tracking-widest leading-none mt-1">
                H
              </span>
            </motion.div>

            {/* Hotel Brand Name */}
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-center space-y-2"
            >
              <span className="block font-serif text-2xl md:text-3xl text-white tracking-[0.2em] uppercase font-bold">
                HSM Grand Inn
              </span>
              <span className="block font-sans text-[10px] text-secondary-fixed uppercase tracking-[0.4em] font-semibold opacity-80">
                Luxury Hospitality
              </span>
            </motion.div>

            {/* Progress Divider */}
            <motion.div
              variants={barVariants}
              initial="hidden"
              animate="visible"
              className="h-[1px] bg-secondary mt-8"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
