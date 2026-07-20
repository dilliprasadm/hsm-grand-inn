"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, MessageSquare, ChevronDown, Sparkles } from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants/site";
import { getHighQualityImageUrl } from "@/lib/utils";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.25]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.45, 0.85]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const, delay: 0.8 },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-primary"
    >
      {/* Background Image with parallax + Ken Burns */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 bg-cover bg-center will-change-transform"
      >
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('${getHighQualityImageUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuDBlsnn5RIo5dqFJoBf1XIFNm_YTJJkGoq37SFJE1lzvOVlqCY5Xae8Mk-nc6WSyUfHPz6zZI-BVbmV70gYkkQejMDVNMfMNinInwrW1ilZknXaBql6_q7Hqd8oLNzRAq9XpnO3WiTJ_sVGDHj-wJuQGksD4aCJtZcVQManA-RPZqwdCvVUyws0xrK9DjBDo1FWfdZOp2XGAhiFaCqKt-4Jl2l07NpifaS6GtIvJSuY8JoZ6T3zy29Oag", 1920)}')`,
          }}
        />
      </motion.div>

      {/* Animated gradient overlay with parallax */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-[1]"
      />

      {/* Subtle radial glow behind text */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-secondary/5 rounded-full blur-[120px]" />
      </div>

      {/* Floating decorative particles */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-secondary/30 rounded-full"
            initial={{
              x: `${15 + i * 15}%`,
              y: "110%",
              opacity: 0,
            }}
            animate={{
              y: "-10%",
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              delay: i * 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Hero Content with parallax */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 text-center px-6 md:px-margin-desktop max-w-5xl"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Decorative sparkle + label */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-3">
            <motion.div
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-secondary" />
            </motion.div>
            <span className="text-secondary font-sans text-xs uppercase tracking-[0.5em] font-semibold">
              A Sanctuary of Hospitality
            </span>
            <motion.div
              animate={{ rotate: [360, 180, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-secondary" />
            </motion.div>
          </motion.div>

          {/* Animated headline with decorative lines */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-[0.95] tracking-tight">
              Experience Comfort
              <br />
              <span className="italic font-normal text-secondary-fixed">
                &amp; Luxury
              </span>
            </h1>
            <motion.div
              variants={lineVariants}
              className="w-24 h-[2px] bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto origin-center"
            />
            <p className="font-serif text-xl md:text-2xl text-white/60 font-light italic">
              in the Heart of Chittoor
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="font-sans text-base md:text-lg text-white/70 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Your sanctuary for business and family stays, blending modern hospitality with timeless elegance.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
          >
            <Link
              href="/rooms"
              className="group relative bg-secondary text-primary font-bold px-12 py-5 rounded-full font-sans text-xs uppercase tracking-widest overflow-hidden transition-all duration-500 shadow-2xl shadow-secondary/20 hover:shadow-secondary/40 hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">Book Your Stay</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </Link>

            <div className="flex gap-3">
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="group flex items-center gap-2 bg-white/5 backdrop-blur-xl text-white border border-white/15 px-7 py-4.5 rounded-full font-sans text-xs uppercase tracking-widest font-semibold hover:bg-white/15 hover:border-white/30 transition-all duration-500"
              >
                <Phone className="w-4 h-4 text-secondary group-hover:scale-110 transition-transform" />
                <span>Call Now</span>
              </a>
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-white/5 backdrop-blur-xl text-white border border-white/15 px-7 py-4.5 rounded-full font-sans text-xs uppercase tracking-widest font-semibold hover:bg-white/15 hover:border-white/30 transition-all duration-500"
              >
                <MessageSquare className="w-4 h-4 text-secondary group-hover:scale-110 transition-transform" />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Animated scroll indicator with pulsing ring */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/80 cursor-pointer select-none z-10"
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
        <div className="relative">
          <motion.div
            className="absolute -inset-3 rounded-full border border-white/20"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
