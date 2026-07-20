"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import PremiumImage from "@/components/shared/PremiumImage";
import { ATTRACTIONS } from "@/lib/constants/attractions";

export default function NearbyAttractions() {
  return (
    <section id="nearby" className="py-section-gap bg-background overflow-hidden">
      <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-secondary font-sans text-xs uppercase tracking-[0.4em] font-semibold block">
            Explore Chittoor
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-primary font-bold">
            Nearby Destinations
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
            className="w-20 h-[2px] bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto origin-center"
          />
        </motion.div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {ATTRACTIONS.map((attraction, idx) => (
            <motion.div
              key={attraction.name}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.7,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group cursor-pointer flex flex-col h-full"
            >
              {/* Image box */}
              <div className="relative rounded-[20px] overflow-hidden aspect-square mb-5 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <PremiumImage
                  src={attraction.image}
                  alt={attraction.alt}
                  width={400}
                  height={400}
                  hoverZoom
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent group-hover:from-black/85 transition-all duration-500" />
                
                {/* Distance pill - appears on hover */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary px-3 py-1.5 rounded-full shadow-md"
                >
                  <span className="font-sans text-[10px] font-bold uppercase tracking-wider">
                    {attraction.distance}
                  </span>
                </motion.div>

                {/* Labels in Image Overlay */}
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-[10px] font-sans uppercase tracking-widest font-semibold text-secondary-fixed block">
                    {attraction.distance} Away
                  </span>
                  <h4 className="font-serif text-lg md:text-xl font-bold leading-tight group-hover:text-secondary-fixed transition-colors duration-300">
                    {attraction.name}
                  </h4>
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="flex items-center justify-between px-2 text-on-surface-variant font-sans text-xs font-semibold uppercase tracking-wider">
                <span className="text-[10px] tracking-widest text-outline">
                  {attraction.category}
                </span>
                <span className="flex items-center gap-1.5 text-secondary group-hover:gap-2 transition-all duration-300">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{attraction.time}</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
