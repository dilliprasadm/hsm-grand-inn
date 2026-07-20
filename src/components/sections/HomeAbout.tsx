"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Award } from "lucide-react";
import PremiumImage from "@/components/shared/PremiumImage";

export default function HomeAbout() {
  return (
    <section className="py-section-gap px-6 md:px-margin-desktop bg-background overflow-hidden">
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Text Area */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <span className="text-secondary font-sans text-xs uppercase tracking-[0.4em] font-semibold block">
            Our Heritage
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-primary font-bold leading-tight">
            Modern Hospitality Meets <br />
            Exceptional Service
          </h2>
          <p className="font-sans text-base text-on-surface-variant font-light leading-relaxed">
            HSM Grand Inn redefines the hospitality landscape in Chittoor. Born from a vision of creating a sanctuary for the discerning traveler, we offer an unparalleled blend of modern luxury and traditional warmth.
          </p>

          {/* Stats details */}
          <div className="grid grid-cols-2 gap-8 py-6 border-y border-outline-variant/30">
            <div className="space-y-1">
              <h4 className="font-serif text-4xl text-primary font-bold">100+</h4>
              <p className="font-sans text-xs uppercase tracking-widest text-outline font-semibold">
                Luxury Suites
              </p>
            </div>
            <div className="space-y-1">
              <h4 className="font-serif text-4xl text-primary font-bold">15yr</h4>
              <p className="font-sans text-xs uppercase tracking-widest text-outline font-semibold">
                Hospitality Legacy
              </p>
            </div>
          </div>

          <div className="pt-4">
            <Link
              href="/about"
              className="inline-block border border-primary text-primary px-8 py-4.5 rounded-xl font-sans text-xs uppercase tracking-widest font-bold hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
            >
              Discover Our Story
            </Link>
          </div>
        </motion.div>

        {/* Visual Area */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative group w-full"
        >
          {/* Main Image */}
          <div className="rounded-[24px] overflow-hidden aspect-[4/5] luxury-shadow relative">
            <PremiumImage
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPBfNYm2nl41yAlFpCFZEQR2AYxLIs-lEnTUhLNxkpA6hokYK29_XLE50eCt5j5w0-zvJFKXCrDlkwUV_3dfP35FEE1cI4SRXUdtdr1zzmMXkmR2puyKpEWpUhINRAQ0MOE2lUXzTwpOYyw-SrqlZEuahnbCP-BqFbG4BTuOWjMaT_oSXFKbad5r4JjZaaDtxauqeyewqcqvGHEhoBKXuiEBgXZs-1oWSIhwAgLi6zPwyTUiMLDZxYVw"
              alt="Luxury hotel bedroom at HSM Grand Inn"
              width={800}
              height={1000}
              hoverZoom
              className="w-full h-full object-cover"
            />
          </div>

          {/* Certificate Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[20px] luxury-shadow border border-outline-variant/20 hidden lg:flex flex-col items-center text-center w-48"
          >
            <Award className="w-10 h-10 text-secondary mb-3" />
            <span className="font-serif text-lg font-bold text-primary block leading-none">
              Elite Stay
            </span>
            <span className="font-sans text-[10px] text-outline uppercase tracking-widest font-semibold mt-1">
              Certified 2024
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
