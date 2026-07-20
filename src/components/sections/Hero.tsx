"use client";

import { motion } from "framer-motion";
import { Phone, MessageSquare, ChevronDown } from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants/site";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
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
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Image with Ken Burns zoom */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.7 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDBlsnn5RIo5dqFJoBf1XIFNm_YTJJkGoq37SFJE1lzvOVlqCY5Xae8Mk-nc6WSyUfHPz6zZI-BVbmV70gYkkQejMDVNMfMNinInwrW1ilZknXaBql6_q7Hqd8oLNzRAq9XpnO3WiTJ_sVGDHj-wJuQGksD4aCJtZcVQManA-RPZqwdCvVUyws0xrK9DjBDo1FWfdZOp2XGAhiFaCqKt-4Jl2l07NpifaS6GtIvJSuY8JoZ6T3zy29Oag')",
        }}
      >
        <div className="absolute inset-0 bg-black/45" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 md:px-margin-desktop max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.span
            variants={itemVariants}
            className="text-secondary font-sans text-xs uppercase tracking-[0.4em] block font-semibold"
          >
            A Sanctuary of Hospitality
          </motion.span>
          
          <motion.h1
            variants={itemVariants}
            className="font-serif text-4xl md:text-6xl text-white font-bold leading-tight"
          >
            Experience Comfort &amp; Luxury <br />
            <span className="italic font-normal text-secondary-fixed">
              in the Heart of Chittoor
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-sans text-base md:text-lg text-white/80 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Your sanctuary for business and family stays, blending modern hospitality with timeless elegance.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Link
              href="/rooms"
              className="bg-secondary text-primary font-bold px-10 py-4.5 rounded-full font-sans text-xs uppercase tracking-widest hover:bg-secondary-hover hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-secondary/10"
            >
              Book Your Stay
            </Link>
            
            <div className="flex gap-3">
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 py-4 rounded-full font-sans text-xs uppercase tracking-widest font-semibold hover:bg-white/25 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <Phone className="w-4 h-4 text-secondary" />
                <span>Call Now</span>
              </a>
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 py-4 rounded-full font-sans text-xs uppercase tracking-widest font-semibold hover:bg-white/25 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <MessageSquare className="w-4 h-4 text-secondary" />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/80 cursor-pointer select-none"
        onClick={() => {
          const nextSection = document.getElementById("trust-indicators");
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-semibold">
          Explore
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
