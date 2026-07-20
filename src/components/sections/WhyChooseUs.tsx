"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Utensils, MapPin, HeartHandshake } from "lucide-react";

const VALUES = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-secondary" />,
    title: "Unmatched Safety",
    description: "24/7 CCTV surveillance and verified staff to ensure your complete peace of mind.",
  },
  {
    icon: <Utensils className="w-10 h-10 text-secondary" />,
    title: "Gourmet Dining",
    description: "Multi-cuisine restaurant serving local delicacies and international favorites.",
  },
  {
    icon: <MapPin className="w-10 h-10 text-secondary" />,
    title: "Prime Location",
    description: "Located in the heart of Chittoor, close to transport hubs and major attractions.",
  },
  {
    icon: <HeartHandshake className="w-10 h-10 text-secondary" />,
    title: "Personalized Care",
    description: "Dedicated concierge to cater to your specific travel and business needs.",
  },
];

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="py-section-gap bg-primary text-white overflow-hidden">
      <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter"
        >
          {VALUES.map((val, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="space-y-6 p-6 rounded-2xl border border-white/5 hover:bg-white/5 transition-colors duration-300 group"
            >
              <div className="transition-transform duration-300 group-hover:scale-110">
                {val.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-white group-hover:text-secondary transition-colors duration-300">
                {val.title}
              </h3>
              <p className="font-sans text-sm text-surface-container-highest/80 leading-relaxed font-light">
                {val.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
