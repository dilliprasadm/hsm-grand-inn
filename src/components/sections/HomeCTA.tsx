"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HomeCTA() {
  return (
    <section className="py-section-gap px-6 md:px-margin-desktop bg-background">
      <div className="max-w-container-max mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
          className="relative bg-primary rounded-[32px] md:rounded-[48px] overflow-hidden py-16 md:py-28 px-8 md:px-16 text-center text-white luxury-shadow"
        >
          {/* Animated radial glow */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.08, 0.15, 0.08],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,106,0.2)_0%,transparent_60%)] pointer-events-none"
          />

          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-secondary/20 rounded-full"
                initial={{
                  x: `${20 + i * 20}%`,
                  y: "100%",
                  opacity: 0,
                }}
                animate={{
                  y: "-10%",
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 6 + i * 2,
                  delay: i * 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </div>

          {/* Corner accents */}
          <div className="absolute top-8 left-8 w-20 h-20 border-t border-l border-secondary/15 rounded-tl-3xl pointer-events-none" />
          <div className="absolute bottom-8 right-8 w-20 h-20 border-b border-r border-secondary/15 rounded-br-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-secondary font-sans text-xs uppercase tracking-[0.4em] font-semibold">
                Special Offer
              </span>
              <Sparkles className="w-4 h-4 text-secondary" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-serif text-3xl md:text-5xl lg:text-6xl text-white font-bold leading-tight"
            >
              Ready for a <br />
              <span className="italic text-secondary-fixed">Comfortable Stay?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-sans text-base md:text-lg text-surface-container-highest/70 font-light leading-relaxed"
            >
              Join hundreds of satisfied guests and experience the finest hospitality in Chittoor. Book your room today and get a complimentary breakfast on your first stay.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              <Link
                href="/rooms"
                className="group relative bg-secondary text-primary font-bold px-12 py-5 rounded-full font-sans text-xs uppercase tracking-widest overflow-hidden transition-all duration-500 shadow-2xl shadow-secondary/20 hover:shadow-secondary/40 hover:scale-105 active:scale-95 w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <span className="relative z-10">Book Now</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </Link>
              <Link
                href="/contact"
                className="bg-white/5 backdrop-blur-xl text-white border border-white/15 px-10 py-4.5 rounded-full font-sans text-xs uppercase tracking-widest font-semibold hover:bg-white/15 hover:border-white/30 transition-all duration-500 w-full sm:w-auto text-center"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
