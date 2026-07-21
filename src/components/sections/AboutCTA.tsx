"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, MessageSquare } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants/site";
import PremiumImage from "@/components/shared/PremiumImage";

export default function AboutCTA() {
  return (
    <section className="px-6 md:px-margin-desktop py-12 bg-background">
      <div className="max-w-container-max mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full bg-primary rounded-[32px] md:rounded-[40px] overflow-hidden py-24 px-8 md:px-12 text-center text-white luxury-shadow"
        >
          {/* Background Image */}
          <div className="absolute inset-0 -z-10">
            <PremiumImage
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgbzJWkbqLsGkAyMJDgcQ-rRsOlmmoc1Q36jJUjnSY5ASoLaVqDyPLZ5uBefF4YgL3RLrzn2-dETuVcxPLlavOtuKGGzjR4UEx4hNqvF6H4Nsgu5906-jMHEmxojlsqb-9Tm1MGpxLVQ4Y717yLvshaGgSW9tnAMSHWaTUyrLOgNMB-fkWtdd2W2hIwLNEM8iKe1aVmqIf5RWcm5bODfnXU5uk0OVf5cPRLE0tF-DH2rjVVVT-6N7yyg"
              alt="HSM Grand Inn Exterior Entrance"
              width={1600}
              height={900}
              className="w-full h-full object-cover animate-none"
            />
            <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm" />
          </div>

          <div className="max-w-3xl mx-auto space-y-8 relative z-10">
            <h2 className="font-serif text-3xl md:text-5xl text-white font-bold leading-tight">
              Experience Premium Comfort <br />
              in the Heart of Chittoor
            </h2>
            <p className="font-sans text-base text-surface-container-highest/80 max-w-xl mx-auto font-light leading-relaxed">
              Book your stay today and discover why we are the city's preferred choice for luxury and hospitality.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                href="/rooms"
                className="bg-secondary text-primary font-bold px-10 py-4.5 rounded-full font-sans text-xs uppercase tracking-widest hover:bg-secondary-hover hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-secondary/10"
              >
                Explore Rooms
              </Link>
              
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="bg-white text-primary px-10 py-4.5 rounded-full font-sans text-xs uppercase tracking-widest font-bold hover:bg-surface-variant hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-secondary" />
                <span>Call Now</span>
              </a>
              
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4.5 rounded-full font-sans text-xs uppercase tracking-widest font-semibold hover:bg-white/20 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-secondary" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
