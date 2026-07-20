"use client";

import { motion } from "framer-motion";
import { Wifi, Wind, Tv, Shield, Coffee, Dumbbell } from "lucide-react";

const AMENITIES = [
  { icon: <Wifi className="w-8 h-8 text-secondary" />, name: "High Speed WiFi" },
  { icon: <Wind className="w-8 h-8 text-secondary" />, name: "Air Conditioning" },
  { icon: <Tv className="w-8 h-8 text-secondary" />, name: "Smart TV" },
  { icon: <Shield className="w-8 h-8 text-secondary" />, name: "Secure Parking" },
  { icon: <Coffee className="w-8 h-8 text-secondary" />, name: "Room Service" },
  { icon: <Dumbbell className="w-8 h-8 text-secondary" />, name: "Gym Facility" },
];

export default function HomeAmenities() {
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
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="amenities" className="py-section-gap bg-background">
      <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-16"
        >
          <span className="text-secondary font-sans text-xs uppercase tracking-[0.4em] font-semibold block">
            Luxury Essentials
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-primary font-bold">
            Curated for Your Comfort
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-6 gap-gutter"
        >
          {AMENITIES.map((amenity, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-8 rounded-[20px] bg-surface-container-low border border-outline-variant/10 flex flex-col items-center justify-center text-center cursor-default hover:bg-surface-container transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
            >
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                {amenity.icon}
              </div>
              <span className="font-sans text-xs uppercase tracking-widest font-bold text-primary block leading-snug">
                {amenity.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
