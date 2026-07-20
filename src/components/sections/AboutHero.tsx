"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function AboutHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden bg-primary">
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.65 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCP_eJva_wnO8zv_mqn_fRljINWZ_BEf0iwS0qNIKYLP_eChzAoeBehaTRZLFnBsE1iMhBzO6nDM-STpZTIPQrDm7sZ-tWJFRn10z0jMO4xymYxTvnXf0GHb4uSfEGqEpw0LOGjNGLk3kuehvcl6OU49IPXSGWOvCYnu1WFNuUTCqsvilqX_9E6WEWhRuILzAWpahoake3N8AksLM8mjYQGYc1xPsC5cKTQNEa50uPZPZtL_0SlxseLOw')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-transparent" />
      </motion.div>

      <div className="relative z-10 px-6 md:px-margin-desktop max-w-container-max mx-auto w-full text-white">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl space-y-6"
        >
          {/* Breadcrumb */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-white/70"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-secondary-fixed">About Us</span>
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="font-serif text-4xl md:text-6xl text-white font-bold leading-tight"
          >
            Where Comfort <br />
            <span className="italic font-normal text-secondary-fixed">
              Meets Hospitality
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-sans text-base md:text-lg text-surface-container-lowest/80 leading-relaxed font-light"
          >
            Experience genuine hospitality in the heart of Chittoor. We redefine luxury through minimalist precision and timeless elegance, ensuring every guest feels at home.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Link
              href="/rooms"
              className="bg-secondary text-primary font-bold px-8 py-4 rounded-full font-sans text-xs uppercase tracking-widest hover:bg-secondary-hover hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Explore Our Rooms
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-sans text-xs uppercase tracking-widest font-semibold hover:bg-white/25 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
