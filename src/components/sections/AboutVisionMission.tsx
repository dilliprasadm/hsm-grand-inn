"use client";

import { motion } from "framer-motion";
import { Eye, Rocket } from "lucide-react";

export default function AboutVisionMission() {
  return (
    <section className="bg-surface-container-low py-section-gap px-6 md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-white p-10 md:p-12 rounded-[24px] shadow-sm hover:shadow-xl transition-shadow duration-500 border-t-4 border-secondary flex flex-col items-start space-y-6"
          >
            <div className="w-14 h-14 bg-secondary-container flex items-center justify-center rounded-full">
              <Eye className="w-6 h-6 text-on-secondary-container" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-primary font-bold">
              Our Vision
            </h3>
            <p className="font-sans text-base text-on-surface-variant font-light leading-relaxed">
              To become the preferred destination in Chittoor, recognized globally for our distinctive blend of contemporary luxury and heartfelt service that resonates with every traveler.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-10 md:p-12 rounded-[24px] shadow-sm hover:shadow-xl transition-shadow duration-500 border-t-4 border-primary flex flex-col items-start space-y-6"
          >
            <div className="w-14 h-14 bg-primary-container flex items-center justify-center rounded-full">
              <Rocket className="w-6 h-6 text-on-primary" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-primary font-bold">
              Our Mission
            </h3>
            <p className="font-sans text-base text-on-surface-variant font-light leading-relaxed">
              To consistently deliver quality accommodation and unparalleled service by maintaining the highest standards of hygiene, comfort, and professional hospitality for our guests.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
