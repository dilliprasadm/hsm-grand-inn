"use client";

import { motion } from "framer-motion";
import PremiumImage from "@/components/shared/PremiumImage";

export default function AboutStory() {
  return (
    <section className="py-section-gap px-6 md:px-margin-desktop bg-background">
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Image Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[24px] overflow-hidden aspect-[4/5] luxury-shadow"
        >
          <PremiumImage
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_i7XPTcIwusW3TKjJaezWMpXjxFU6z7v2GPzcSDLW2feF3aNYysQloKjQpS9mSDkZvvD0NGMkyKpjxsZhKqorP0Pvd8_daJXCXGaPrMWdTzVgBr2ElS0-wXjqGS8s4fr4MaQT3ol6AFEZOvC-a0XOkg1OtyVev2c8pFIf7GScgNA2nJ-09GaB_dF7SfOfMfhOoXzhEyMTK1l1m44EUq7IO2IyvD1P4qof5UtQTebtXnhLne2f7bkGLA"
            alt="HSM Grand Inn Room Interior"
            width={800}
            height={1000}
            hoverZoom
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="lg:pl-8 space-y-8"
        >
          <div className="space-y-4">
            <span className="text-secondary font-sans text-xs uppercase tracking-[0.4em] font-semibold block">
              Our Heritage
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-primary font-bold">
              Dedicated to Your <br />
              Peace of Mind
            </h2>
          </div>

          <div className="space-y-6 font-sans text-base text-on-surface-variant font-light leading-relaxed">
            <p>
              At HSM Grand Inn, our journey began with a simple yet profound vision: to create a sanctuary of comfort for travelers visiting the historic city of Chittoor. We believe that true luxury lies in the details—the crispness of the linens, the warmth of a greeting, and the seamless nature of every service.
            </p>
            <p>
              Our commitment is rooted in providing a welcoming stay that blends modern amenities with traditional hospitality. From businessmen seeking a focused retreat to families exploring local wonders, we provide clean, modern comforts that exceed expectations.
            </p>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <div className="w-12 h-[1px] bg-secondary" />
            <span className="font-serif text-lg italic text-on-surface">
              The Grand Inn Promise
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
