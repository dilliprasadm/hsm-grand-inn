"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles, Bed, ShieldCheck } from "lucide-react";

const VALUES = [
  {
    icon: <Heart className="w-8 h-8 text-primary" />,
    title: "Guest First",
    description: "Your comfort is our top priority. Every request is treated with absolute care.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "Clean & Hygienic",
    description: "Spotless environments maintained constantly to provide clean, healthy spaces.",
  },
  {
    icon: <Bed className="w-8 h-8 text-primary" />,
    title: "Comfort & Quality",
    description: "Premium sleep experience and rich stay details tailored to exceed expectations.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Trust & Transparency",
    description: "Honest operations and transparent pricing policies, establishing clear trust.",
  },
];

export default function AboutValues() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section className="py-section-gap px-6 md:px-margin-desktop bg-background">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-secondary font-sans text-xs uppercase tracking-[0.4em] font-semibold block">
            Core Principles
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-primary font-bold">
            What We Stand For
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-gutter"
        >
          {VALUES.map((val, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="text-center space-y-4 group p-4"
            >
              <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-[20px] bg-surface-container hover:bg-secondary-container hover:scale-105 transition-all duration-300">
                <div className="transition-transform duration-300 group-hover:scale-110">
                  {val.icon}
                </div>
              </div>
              <h4 className="font-sans text-xs uppercase tracking-widest font-bold text-primary block mt-2">
                {val.title}
              </h4>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed max-w-[200px] mx-auto font-light">
                {val.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
