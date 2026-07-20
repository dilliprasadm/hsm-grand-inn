"use client";

import Link from "next/link";
import { Bed, Square, Wifi, GlassWater, CheckCircle, Laptop, ShieldCheck, MessageSquare, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ClientPageLayout from "@/components/layout/ClientPageLayout";
import PremiumImage from "@/components/shared/PremiumImage";
import { ROOMS } from "@/lib/constants/rooms";
import { SITE_CONFIG } from "@/lib/constants/site";
import { formatCurrency } from "@/lib/utils";

export default function RoomsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  // Helper to render icon for room specifications
  const renderSpecIcon = (specName: string) => {
    switch (specName.toLowerCase()) {
      case "king bed":
      case "king size":
      case "two queen beds":
      case "queen size":
        return <Bed className="w-4 h-4 text-secondary shrink-0" />;
      case "850 sq ft":
      case "680 sq ft":
      case "450 sq ft":
      case "1200 sq ft":
        return <Square className="w-4 h-4 text-secondary shrink-0" />;
      case "high-speed wifi":
      case "dedicated 1gbps wifi":
      case "free wifi":
        return <Wifi className="w-4 h-4 text-secondary shrink-0" />;
      case "premium bar":
      case "mini fridge":
      case "tea/coffee":
        return <GlassWater className="w-4 h-4 text-secondary shrink-0" />;
      default:
        return <CheckCircle className="w-4 h-4 text-secondary shrink-0" />;
    }
  };

  return (
    <ClientPageLayout>
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-primary">
          <motion.div
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.55 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCX2kH0kyy-Jy3jV9iHOB861f1wqKBB4H4G_SHDPZzx5CSaIicnEj4CX53Ztu5dBKJPuwSmWJsxX2zJmpJTxNMM7EUf_kEhO7yAnrve8iW0mNULDRgOivNBUmFiIW1YMzq4osUsZOAtM5NQyC893Qb2_rKw-BcBn3r4GabaobGCZOecVpcor913iDhueAzom3_01NoFbRU7HboAi2jvq3d6DaK8YQUBgtB1zsNcKoQMvQkdxO_mcU4DZg')",
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>

          <div className="relative z-20 text-center text-white px-6 md:px-margin-desktop">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-sans text-xs uppercase tracking-[0.3em] mb-4 block font-semibold text-secondary-fixed"
            >
              Exquisite Living
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="font-serif text-4xl md:text-6xl mb-6 font-bold"
            >
              Luxury Accommodations
            </motion.h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="h-1 bg-secondary mx-auto rounded-full"
            />
          </div>
        </section>

        {/* Room List Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="py-section-gap max-w-container-max mx-auto px-6 md:px-margin-desktop space-y-28 md:space-y-36"
        >
          {ROOMS.map((room, idx) => {
            const isMediaLeft = idx % 2 === 0;
            return (
              <motion.section
                key={room.slug}
                variants={sectionVariants}
                className={`flex flex-col ${
                  isMediaLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-gutter lg:gap-16 items-stretch`}
              >
                {/* Media Column */}
                <div className="w-full lg:w-3/5 relative overflow-hidden rounded-[24px] luxury-shadow group h-[300px] md:h-[450px]">
                  <PremiumImage
                    src={room.mainImage}
                    alt={room.name}
                    width={900}
                    height={500}
                    hoverZoom
                    className="w-full h-full object-cover"
                  />
                  {room.slug === "executive-suite" && (
                    <div className="absolute top-6 left-6 flex space-x-2">
                      <span className="bg-white/90 backdrop-blur-sm text-primary px-4 py-1 rounded-full font-sans text-[10px] uppercase tracking-wider font-bold shadow-sm">
                        Most Popular
                      </span>
                    </div>
                  )}
                </div>

                {/* Content Column */}
                <div className="w-full lg:w-2/5 flex flex-col justify-center space-y-6">
                  <div>
                    <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold mb-2">
                      {room.name}
                    </h2>
                    <p className="font-sans text-sm md:text-base text-on-surface-variant font-light leading-relaxed">
                      {room.description}
                    </p>
                  </div>

                  {/* Highlights and Specs list */}
                  {room.slug === "deluxe-family-room" ? (
                    <ul className="space-y-3 py-3 border-y border-outline-variant/30">
                      {room.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center space-x-3 text-sm text-on-surface-variant">
                          <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                          <span className="font-sans font-medium">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  ) : room.slug === "premium-business-room" ? (
                    <div className="grid grid-cols-1 gap-4 py-4 border-y border-outline-variant/30">
                      <div className="p-4 bg-surface-container-low rounded-xl flex items-center space-x-4 border border-outline-variant/10">
                        <Laptop className="w-6 h-6 text-secondary shrink-0" />
                        <div>
                          <p className="font-sans text-xs uppercase tracking-wider font-bold text-primary">Ergonomic Workspace</p>
                          <p className="font-sans text-xs text-on-surface-variant font-light">Full-size desk with premium chair</p>
                        </div>
                      </div>
                      <div className="p-4 bg-surface-container-low rounded-xl flex items-center space-x-4 border border-outline-variant/10">
                        <Wifi className="w-6 h-6 text-secondary shrink-0" />
                        <div>
                          <p className="font-sans text-xs uppercase tracking-wider font-bold text-primary">Dedicated 1Gbps WiFi</p>
                          <p className="font-sans text-xs text-on-surface-variant font-light">Secure, private network access</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-4 py-4 border-y border-outline-variant/30 font-sans text-xs uppercase tracking-widest font-bold">
                      <div className="flex items-center space-x-3 text-on-surface">
                        {renderSpecIcon(room.bedType)}
                        <span>{room.bedType}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-on-surface">
                        {renderSpecIcon(room.size)}
                        <span>{room.size}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-on-surface">
                        {renderSpecIcon("free wifi")}
                        <span>High-Speed WiFi</span>
                      </div>
                      <div className="flex items-center space-x-3 text-on-surface">
                        {renderSpecIcon("premium bar")}
                        <span>Room Service</span>
                      </div>
                    </div>
                  )}

                  {/* Pricing and Actions */}
                  <div className="flex justify-between items-baseline gap-2">
                    <div className="flex items-baseline space-x-2">
                      <span className="font-serif text-3xl font-bold text-primary">
                        {formatCurrency(room.price)}
                      </span>
                      <span className="font-sans text-xs uppercase tracking-wider text-on-surface-variant font-semibold">
                        / Night
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Link
                      href={`/rooms/${room.slug}`}
                      className="flex-1 bg-secondary text-primary font-bold py-4 rounded-xl font-sans text-xs uppercase tracking-widest text-center hover:bg-secondary-hover hover:scale-102 transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                    >
                      <span>Book Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <a
                      href={SITE_CONFIG.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 border border-outline text-primary py-4 rounded-xl hover:bg-surface-container transition-colors duration-300 flex items-center justify-center"
                      aria-label="Enquire on WhatsApp"
                    >
                      <MessageSquare className="w-4 h-4 text-secondary" />
                    </a>
                  </div>
                </div>
              </motion.section>
            );
          })}
        </motion.div>
      </main>
    </ClientPageLayout>
  );
}
