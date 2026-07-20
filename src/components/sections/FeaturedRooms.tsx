"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Square, Users } from "lucide-react";
import PremiumImage from "@/components/shared/PremiumImage";
import { formatCurrency } from "@/lib/utils";

const FEATURED_ROOMS = [
  {
    slug: "executive-suite",
    name: "Executive Suite",
    price: 4999,
    description: "Panoramic city views, king-size bed, and a dedicated workspace for the modern professional.",
    size: "450 sqft",
    occupancy: "2 Adults",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeW81nv-_BDmU9xd6Lb22-l2Ct0FyMyisult6uPlDistN-5dxCUpiybr3EMSgvyRjKI2G4wKBPTuqJWmGCc2vrm3AQDPFePVrIY_deKRwWrc5QfmbPgvE1XFM3PQ_C0nXxyrhPFunz1XiuBhKv2Wt81LKjTfVn8H-bUlDCWUy94k3eKM18go_SLLyKqyM424xQJaXBV3zGUcwBj9W3QNd5g9U1jTqOlXzXJ6zeGT8xZ5eeMf42JIpKYw",
  },
  {
    slug: "deluxe-family-room",
    name: "Deluxe Twin",
    price: 3499,
    description: "Perfect for families or business partners, featuring premium comfort and modern amenities.",
    size: "380 sqft",
    occupancy: "2 Adults",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4FCRvwMNhahqzvlEoWtQxj1cj7O2keuZdjv-v50_6x2UAhJSwNENJqplaToKUz6jgPujqjhzfAHbj7VdNyhINsjV7NWalqkMeFajuvpqnbcNVAIYyWW0b0Hs74NGDErlKJx9tqwyXgcwlxz8EzOAKlE3LA1p_GX4FJN8RQWL7y-wbF-7IguoAgWU-R4d-3--yiUb72PBb1fZo8t6iIxEhQKNfEuAYp_uD07MlE3HCcmgePut5yrKBOw",
  },
  {
    slug: "presidential-suite",
    name: "Presidential",
    price: 8999,
    description: "The pinnacle of luxury. Private lounge, butler service, and the finest silk linens for an elite stay.",
    size: "850 sqft",
    occupancy: "3 Adults",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0ryirrrBu0WAmeT6Nxznwx5I0JvbzkgOWhqV5dTNXjg3x4fZzXlaHg_qB4wkdoIo7R3PANNvFZaubyHGXN-mBn0-4gqNhD_Ed1_guhmbqKfRDrtHWCMMZKZaAKVpOSUb8BIdiyvlZ0W4j6MsmU9FUSvjxIvHDIZL4bezGMShdbG2ErBmBlJYps17BJEpXWyA1nOZpaXgRd7FhrCBO2_Kx0J8vXKMFMv4BVvprbcI71MWz32zHZspFaQ",
  }
];

export default function FeaturedRooms() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.3], [40, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section ref={sectionRef} id="rooms" className="py-section-gap bg-surface-container-low overflow-hidden">
      <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
        {/* Title area with parallax */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <motion.div
            style={{ y: headerY, opacity: headerOpacity }}
            className="space-y-4"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-secondary font-sans text-xs uppercase tracking-[0.4em] font-semibold block"
            >
              Accommodations
            </motion.span>
            <h2 className="font-serif text-3xl md:text-5xl text-primary font-bold">
              Suites Crafted for Perfection
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="shrink-0"
          >
            <Link
              href="/rooms"
              className="group flex items-center gap-2 text-secondary font-sans text-xs uppercase tracking-widest font-semibold border-b border-secondary pb-1 hover:text-primary hover:border-primary transition-all duration-300"
            >
              <span>View All Rooms</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1.5 duration-300" />
            </Link>
          </motion.div>
        </div>

        {/* Rooms Grid with 3D tilt hover */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {FEATURED_ROOMS.map((room, idx) => (
            <motion.div
              key={room.slug}
              initial={{ opacity: 0, y: 60, rotateX: 8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: idx * 0.15,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-[24px] overflow-hidden luxury-shadow group flex flex-col h-full border border-outline-variant/10 transition-shadow duration-500 hover:shadow-2xl"
              style={{ perspective: "1000px" }}
            >
              {/* Card Image with overlay reveal */}
              <div className="h-72 w-full overflow-hidden relative">
                <PremiumImage
                  src={room.image}
                  alt={room.name}
                  width={600}
                  height={400}
                  hoverZoom
                  className="w-full h-full object-cover"
                />
                {/* Price tag floating overlay */}
                <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <span className="text-secondary font-sans text-sm font-bold">
                    {formatCurrency(room.price)}<span className="text-xs text-outline font-normal">/nt</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col flex-grow justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-baseline gap-2">
                    <h3 className="font-serif text-2xl text-primary font-bold group-hover:text-secondary transition-colors duration-300">
                      {room.name}
                    </h3>
                    <span className="text-secondary font-sans text-sm font-bold whitespace-nowrap">
                      {formatCurrency(room.price)}/nt
                    </span>
                  </div>
                  
                  <p className="font-sans text-sm text-on-surface-variant font-light leading-relaxed">
                    {room.description}
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Specs */}
                  <div className="flex items-center gap-6 text-outline font-sans text-xs font-medium">
                    <span className="flex items-center gap-1.5">
                      <Square className="w-3.5 h-3.5 text-secondary" />
                      <span>{room.size}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-secondary" />
                      <span>{room.occupancy}</span>
                    </span>
                  </div>

                  {/* Buttons with animated arrow */}
                  <div className="grid grid-cols-2 gap-4">
                    <Link
                      href={`/rooms/${room.slug}`}
                      className="group/btn relative bg-primary text-white py-3.5 rounded-xl font-sans text-[10px] uppercase tracking-widest font-bold text-center overflow-hidden hover:bg-secondary transition-colors duration-300 shadow-sm"
                    >
                      <span className="relative z-10">Book Now</span>
                    </Link>
                    <Link
                      href={`/rooms/${room.slug}`}
                      className="group/btn flex items-center justify-center gap-1.5 border border-outline-variant text-primary py-3.5 rounded-xl font-sans text-[10px] uppercase tracking-widest font-bold text-center hover:bg-surface-container hover:border-secondary transition-all duration-300"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
