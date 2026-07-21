"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PremiumImage from "@/components/shared/PremiumImage";

export default function AboutBentoGallery() {
  return (
    <section className="py-section-gap px-6 md:px-margin-desktop bg-background">
      <div className="max-w-container-max mx-auto">
        
        {/* Title */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-3xl md:text-5xl text-primary font-bold">
            Capturing Moments
          </h2>
          <p className="font-sans text-base text-on-surface-variant font-light max-w-md mx-auto">
            A glimpse into our world of elegance, comfort, and premium hospitality.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[550px] relative">
          
          {/* Main Large Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden aspect-[4/3] md:aspect-auto luxury-shadow"
          >
            <PremiumImage
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM0FbfmfmzlCcGg_QnE1TUWOIx2-ox01zclH37VB0ogkRcVFZmYqTGeLxfDQA_HmlUCN8lcpLO5-gZGVCS7zZr3bWjoiXWBcqyGwiO5AhsAmq6yVwWtEDRfJTI18GiYnBXVJSU81jyyjAjtpRPqa3p5DkSr4VNjMspcxXdXJLHVP5gWO0YRh8S-oATVqKySEm16uloz1NzxrG9n8xP5x3FF-RKi8_BSJaO2g5jY13EUxKCQHO0_nKN9A"
              alt="HSM Grand Inn Lobby Lounge"
              width={800}
              height={600}
              hoverZoom
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Facade Close-up */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl overflow-hidden aspect-[4/3] md:aspect-auto luxury-shadow"
          >
            <PremiumImage
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZLac-iXN6zaIRnXaUU7pDJekxsYrDB6oWu8XqMYr7auDae-c7wxgAfDQUHYMCcJvm21_mskH0DZdR9ZeSzAHrOeDoQ_SLB51x3UNS-kwJwo2ZK73Xsdq6NOVtSPOlz8H31e8OXKdQMjho7_7gGVxq8AW4ClisG3_ZdgRV9VKmDxmxURJ3sZEtVCciNFOVdFDpEHMCoWFE7lx10WGyacz1bjS-FuR6WAKwwP0vbZeAW3EU6o5sEjDVAg"
              alt="Stone Facade"
              width={400}
              height={300}
              hoverZoom
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Dining Table */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden aspect-[4/3] md:aspect-auto luxury-shadow"
          >
            <PremiumImage
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz1BXxhhNlSP83s8JafBaYSt-14I6jsGqnGvBnwtf_wTqQFczdDPMs2XKA32h2jqv8eMUOymPRM-zaHqHxz7Gpvyx2G0-VoQVW_1BMFTw-IAm74afZeDS5y4UA0qVVFbsrxa5-usj3mAYs4B0ntXM_o8LURjTN-9bmX4G-uoApSTaoxNiY3BvJ72QH5Dnj4rT1-GUdWYDbtq--cyCPcfQ_7KIMt62MrgGjumjY7thWlWOXBgpaYRKsyg"
              alt="Exquisite Table dining"
              width={400}
              height={300}
              hoverZoom
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Suite Workstation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-2 rounded-2xl overflow-hidden aspect-[2/1] md:aspect-auto luxury-shadow"
          >
            <PremiumImage
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCddJBVnimgdFLXMCiaB170a21fsGkq289qBv-RONl186YvfPGz8vLvXPEp8P465-f95KZXezuKy7p1ypp4iFnUl4lpgVo6yzEZDZ7p0sPW8zesmo3AMcMy7V2yBkzLvo6sOoUmQ610TuZX4unI73z0hkCsY8AEgKqKkKm_dEtwQdIMVI94uF8GgM1BqbXVdFsh-nMxmXnn49PeF1RvAoIgoDrD3n5YoPDD8KdXYmgob0177GGbSkf3zw"
              alt="Executive Suite bento collage element"
              width={800}
              height={400}
              hoverZoom
              className="w-full h-full object-cover"
            />
          </motion.div>

        </div>

        {/* View gallery CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/gallery"
            className="inline-block bg-primary text-white px-10 py-4.5 rounded-full font-sans text-xs uppercase tracking-widest font-bold hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
          >
            View Full Gallery
          </Link>
        </div>

      </div>
    </section>
  );
}
