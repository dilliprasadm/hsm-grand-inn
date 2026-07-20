"use client";

import { motion } from "framer-motion";
import { Star, Users, Wifi, Headphones, MapPin, ShieldCheck } from "lucide-react";

export default function TrustBadges() {
  const items = [
    {
      icon: (
        <div className="flex text-secondary gap-0.5">
          <Star className="w-4 h-4 fill-current" />
          <Star className="w-4 h-4 fill-current" />
          <Star className="w-4 h-4 fill-current" />
          <Star className="w-4 h-4 fill-current" />
          <Star className="w-4 h-4 fill-current opacity-70" />
        </div>
      ),
      label: "4.9/5 Star Rating",
      sublabel: "Guest Satisfaction",
    },
    {
      icon: <Users className="w-7 h-7 text-secondary" />,
      label: "500+ Happy Guests",
      sublabel: "Trusted stays",
    },
    {
      icon: <Wifi className="w-7 h-7 text-secondary" />,
      label: "Free High-Speed WiFi",
      sublabel: "Stay connected",
    },
    {
      icon: <Headphones className="w-7 h-7 text-secondary" />,
      label: "24/7 Reception",
      sublabel: "At your service",
    },
    {
      icon: <MapPin className="w-7 h-7 text-secondary" />,
      label: "Prime Location",
      sublabel: "Heart of Chittoor",
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-secondary" />,
      label: "Secure Parking",
      sublabel: "Peace of mind",
    },
  ];

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
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="trust-indicators"
      className="py-12 bg-surface-container-lowest border-y border-outline-variant/30 relative z-20"
    >
      <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-6 gap-gutter"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center justify-center text-center p-3 group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="mb-3 transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>
              <span className="font-sans text-xs uppercase tracking-widest font-bold text-primary block">
                {item.label}
              </span>
              <span className="font-sans text-[10px] text-on-surface-variant uppercase tracking-wider block mt-1 font-medium opacity-75">
                {item.sublabel}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
