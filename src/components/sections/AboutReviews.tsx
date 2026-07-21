"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function AboutReviews() {
  return (
    <section className="py-section-gap px-6 md:px-margin-desktop bg-surface-container-low overflow-hidden">
      <div className="max-w-3xl mx-auto text-center relative space-y-8">
        
        {/* Rating stars */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center items-center gap-1.5"
        >
          <div className="flex text-secondary gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span className="ml-3 font-sans text-xs uppercase tracking-widest font-bold text-primary">
            4.8/5 on Google Reviews
          </span>
        </motion.div>

        {/* Quote details */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative italic"
        >
          <Quote className="w-24 h-24 absolute -top-12 md:-left-10 -left-2 text-secondary/10 pointer-events-none" />
          <blockquote className="font-serif text-2xl md:text-4xl text-primary leading-snug font-bold select-none relative z-10">
            &ldquo;From the moment we arrived, the service was impeccable. The rooms are incredibly clean, modern, and provide a level of comfort that's hard to find. It truly is the best hotel in Chittoor.&rdquo;
          </blockquote>
        </motion.div>

        {/* Author detail */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-sans text-xs uppercase tracking-widest text-on-surface-variant font-bold block pt-4"
        >
          — Rajesh Kumar, Verified Guest
        </motion.p>

      </div>
    </section>
  );
}
