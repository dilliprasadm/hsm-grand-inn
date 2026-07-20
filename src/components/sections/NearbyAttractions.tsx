"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import PremiumImage from "@/components/shared/PremiumImage";
import { ATTRACTIONS } from "@/lib/constants/attractions";

export default function NearbyAttractions() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section id="nearby" className="py-section-gap bg-background">
      <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
        {/* Title */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-secondary font-sans text-xs uppercase tracking-[0.4em] font-semibold block">
            Explore Chittoor
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-primary font-bold">
            Nearby Destinations
          </h2>
        </div>

        {/* Attractions Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter"
        >
          {ATTRACTIONS.map((attraction, idx) => (
            <motion.div
              key={attraction.name}
              variants={itemVariants}
              className="group cursor-pointer flex flex-col h-full"
            >
              {/* Image box */}
              <div className="relative rounded-[20px] overflow-hidden aspect-square mb-5 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <PremiumImage
                  src={attraction.image}
                  alt={attraction.alt}
                  width={400}
                  height={400}
                  hoverZoom
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent group-hover:from-black/85 transition-all duration-300" />
                
                {/* Labels in Image Overlay */}
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-[10px] font-sans uppercase tracking-widest font-semibold text-secondary-fixed block">
                    {attraction.distance} Away
                  </span>
                  <h4 className="font-serif text-lg md:text-xl font-bold leading-tight">
                    {attraction.name}
                  </h4>
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="flex items-center justify-between px-2 text-on-surface-variant font-sans text-xs font-semibold uppercase tracking-wider">
                <span className="text-[10px] tracking-widest text-outline">
                  {attraction.category}
                </span>
                <span className="flex items-center gap-1.5 text-secondary">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{attraction.time}</span>
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
