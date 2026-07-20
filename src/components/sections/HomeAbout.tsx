"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Link from "next/link";
import { Award, ArrowRight } from "lucide-react";
import PremiumImage from "@/components/shared/PremiumImage";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function HomeAbout() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const badgeScale = useTransform(scrollYProgress, [0.2, 0.5], [0.8, 1]);

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.15,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  return (
    <section ref={sectionRef} className="py-section-gap px-6 md:px-margin-desktop bg-background overflow-hidden">
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Text Area with staggered reveals */}
        <div className="space-y-6">
          <motion.span
            custom={0}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-secondary font-sans text-xs uppercase tracking-[0.4em] font-semibold block"
          >
            Our Heritage
          </motion.span>

          <motion.h2
            custom={1}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="font-serif text-3xl md:text-5xl text-primary font-bold leading-tight"
          >
            Modern Hospitality Meets <br />
            <motion.span
              className="inline-block"
              whileInView={{ backgroundSize: "100% 3px" }}
              initial={{ backgroundSize: "0% 3px" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
              style={{
                backgroundImage: "linear-gradient(to right, var(--secondary), var(--secondary))",
                backgroundPosition: "0 100%",
                backgroundRepeat: "no-repeat",
              }}
            >
              Exceptional Service
            </motion.span>
          </motion.h2>

          <motion.p
            custom={2}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="font-sans text-base text-on-surface-variant font-light leading-relaxed"
          >
            HSM Grand Inn redefines the hospitality landscape in Chittoor. Born from a vision of creating a sanctuary for the discerning traveler, we offer an unparalleled blend of modern luxury and traditional warmth.
          </motion.p>

          {/* Animated Stats */}
          <motion.div
            custom={3}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-3 gap-8 py-8 border-y border-outline-variant/30"
          >
            <div className="space-y-1 text-center lg:text-left">
              <h4 className="font-serif text-4xl text-primary font-bold">
                <AnimatedCounter target={100} suffix="+" />
              </h4>
              <p className="font-sans text-xs uppercase tracking-widest text-outline font-semibold">
                Luxury Suites
              </p>
            </div>
            <div className="space-y-1 text-center lg:text-left">
              <h4 className="font-serif text-4xl text-primary font-bold">
                <AnimatedCounter target={15} suffix="yr" />
              </h4>
              <p className="font-sans text-xs uppercase tracking-widest text-outline font-semibold">
                Hospitality Legacy
              </p>
            </div>
            <div className="space-y-1 text-center lg:text-left">
              <h4 className="font-serif text-4xl text-primary font-bold">
                <AnimatedCounter target={500} suffix="+" />
              </h4>
              <p className="font-sans text-xs uppercase tracking-widest text-outline font-semibold">
                Happy Guests
              </p>
            </div>
          </motion.div>

          <motion.div
            custom={4}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="pt-4"
          >
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 border border-primary text-primary px-8 py-4.5 rounded-xl font-sans text-xs uppercase tracking-widest font-bold hover:bg-primary hover:text-white transition-all duration-500 hover:scale-105 active:scale-95 shadow-sm"
            >
              <span>Discover Our Story</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>

        {/* Visual Area with parallax */}
        <div className="relative group w-full">
          {/* Main Image with scroll-linked Y offset */}
          <motion.div
            style={{ y: imageY }}
            className="rounded-[24px] overflow-hidden aspect-[4/5] luxury-shadow relative"
          >
            <PremiumImage
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPBfNYm2nl41yAlFpCFZEQR2AYxLIs-lEnTUhLNxkpA6hokYK29_XLE50eCt5j5w0-zvJFKXCrDlkwUV_3dfP35FEE1cI4SRXUdtdr1zzmMXkmR2puyKpEWpUhINRAQ0MOE2lUXzTwpOYyw-SrqlZEuahnbCP-BqFbG4BTuOWjMaT_oSXFKbad5r4JjZaaDtxauqeyewqcqvGHEhoBKXuiEBgXZs-1oWSIhwAgLi6zPwyTUiMLDZxYVw"
              alt="Luxury hotel bedroom at HSM Grand Inn"
              width={800}
              height={1000}
              hoverZoom
              className="w-full h-full object-cover"
            />

            {/* Animated corner accent */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-secondary/40 rounded-tr-2xl pointer-events-none"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="absolute bottom-6 left-6 w-16 h-16 border-b-2 border-l-2 border-secondary/40 rounded-bl-2xl pointer-events-none"
            />
          </motion.div>

          {/* Certificate Badge with scroll-linked scale */}
          <motion.div
            style={{ scale: badgeScale }}
            className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[20px] luxury-shadow border border-outline-variant/20 hidden lg:flex flex-col items-center text-center w-48"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Award className="w-10 h-10 text-secondary mb-3" />
            </motion.div>
            <span className="font-serif text-lg font-bold text-primary block leading-none">
              Elite Stay
            </span>
            <span className="font-sans text-[10px] text-outline uppercase tracking-widest font-semibold mt-1">
              Certified 2024
            </span>
          </motion.div>

          {/* Decorative floating badge - top right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute -top-6 -right-6 bg-secondary text-primary px-5 py-3 rounded-2xl shadow-lg hidden lg:block"
          >
            <span className="font-sans text-xs font-bold uppercase tracking-wider">★ 4.9 Rated</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
