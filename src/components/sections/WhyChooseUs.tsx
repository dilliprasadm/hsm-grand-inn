"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, Utensils, MapPin, HeartHandshake } from "lucide-react";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Unmatched Safety",
    description: "24/7 CCTV surveillance and verified staff to ensure your complete peace of mind.",
    number: "01",
  },
  {
    icon: Utensils,
    title: "Gourmet Dining",
    description: "Multi-cuisine restaurant serving local delicacies and international favorites.",
    number: "02",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description: "Located in the heart of Chittoor, close to transport hubs and major attractions.",
    number: "03",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Care",
    description: "Dedicated concierge to cater to your specific travel and business needs.",
    number: "04",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={sectionRef} className="py-section-gap bg-primary text-white overflow-hidden relative">
      {/* Animated background pattern */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/3 rounded-full blur-[120px]" />
      </motion.div>

      {/* Subtle grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-secondary font-sans text-xs uppercase tracking-[0.4em] font-semibold block">
            Why HSM Grand Inn
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-white font-bold">
            The HSM Difference
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
            className="w-20 h-[2px] bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto origin-center"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {VALUES.map((val, idx) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.12,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.3 },
                }}
                className="relative space-y-6 p-8 rounded-2xl border border-white/5 hover:bg-white/5 hover:border-white/15 transition-all duration-500 group cursor-default"
              >
                {/* Numbered indicator */}
                <span className="absolute top-6 right-6 font-sans text-xs text-white/10 font-bold tracking-wider group-hover:text-secondary/30 transition-colors duration-500">
                  {val.number}
                </span>

                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="w-10 h-10 text-secondary" />
                </motion.div>
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-secondary transition-colors duration-300">
                  {val.title}
                </h3>
                <p className="font-sans text-sm text-surface-container-highest/80 leading-relaxed font-light">
                  {val.description}
                </p>

                {/* Bottom accent line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 + idx * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                  className="w-12 h-[2px] bg-secondary/40 origin-left"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
