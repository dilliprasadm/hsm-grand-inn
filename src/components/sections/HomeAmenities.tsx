"use client";

import { motion } from "framer-motion";
import { Wifi, Wind, Tv, Shield, Coffee, Dumbbell } from "lucide-react";

const AMENITIES = [
  { icon: Wifi, name: "High Speed WiFi" },
  { icon: Wind, name: "Air Conditioning" },
  { icon: Tv, name: "Smart TV" },
  { icon: Shield, name: "Secure Parking" },
  { icon: Coffee, name: "Room Service" },
  { icon: Dumbbell, name: "Gym Facility" },
];

export default function HomeAmenities() {
  return (
    <section id="amenities" className="py-section-gap bg-background overflow-hidden">
      <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="space-y-4 mb-16"
        >
          <span className="text-secondary font-sans text-xs uppercase tracking-[0.4em] font-semibold block">
            Luxury Essentials
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-primary font-bold">
            Curated for Your Comfort
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
            className="w-20 h-[2px] bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto origin-center"
          />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-gutter">
          {AMENITIES.map((amenity, idx) => {
            const Icon = amenity.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                className="p-8 rounded-[20px] bg-surface-container-low border border-outline-variant/10 flex flex-col items-center justify-center text-center cursor-default hover:bg-surface-container hover:shadow-xl hover:border-secondary/20 transition-all duration-500 group relative overflow-hidden"
              >
                {/* Subtle glow behind icon on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-secondary/0 to-secondary/0 group-hover:from-secondary/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />

                <motion.div
                  className="mb-4 relative z-10"
                  whileHover={{ rotate: [0, -12, 12, -6, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-8 h-8 text-secondary group-hover:text-secondary-hover transition-colors duration-300" />
                </motion.div>
                <span className="font-sans text-xs uppercase tracking-widest font-bold text-primary block leading-snug relative z-10">
                  {amenity.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
