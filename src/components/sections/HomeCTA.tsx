"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomeCTA() {
  return (
    <section className="py-section-gap px-6 md:px-margin-desktop bg-background">
      <div className="max-w-container-max mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-primary rounded-[32px] md:rounded-[48px] overflow-hidden py-16 md:py-24 px-8 md:px-16 text-center text-white luxury-shadow"
        >
          {/* Overlay Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,106,0.1)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-5xl text-white font-bold leading-tight">
              Ready for a Comfortable Stay?
            </h2>
            <p className="font-sans text-base text-surface-container-highest/80 font-light leading-relaxed">
              Join hundreds of satisfied guests and experience the finest hospitality in Chittoor. Book your room today and get a complimentary breakfast on your first stay.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link
                href="/rooms"
                className="bg-secondary text-primary font-bold px-10 py-4.5 rounded-full font-sans text-xs uppercase tracking-widest hover:bg-secondary-hover hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-secondary/10 w-full sm:w-auto"
              >
                Book Now
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4.5 rounded-full font-sans text-xs uppercase tracking-widest font-semibold hover:bg-white/25 hover:scale-105 active:scale-95 transition-all duration-300 w-full sm:w-auto"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
