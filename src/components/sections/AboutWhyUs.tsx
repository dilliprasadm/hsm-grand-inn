"use client";

import { motion } from "framer-motion";

const HIGHLIGHTS = [
  {
    title: "Prime Location",
    desc: "Situated conveniently near the railway station and major transit points, saving you travel time.",
  },
  {
    title: "Luxurious Rooms",
    desc: "Designer interiors, smart amenities, and soundproofing for undisturbed relaxation.",
  },
  {
    title: "Business Ready",
    desc: "High-speed secure WiFi and workspaces designed specifically for the modern professional.",
  },
  {
    title: "Secure Parking",
    desc: "Ample, monitored parking space for your vehicles, ensuring total peace of mind.",
  },
];

export default function AboutWhyUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="py-section-gap px-6 md:px-margin-desktop bg-primary text-white overflow-hidden">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          
          {/* Left Description Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:col-span-1"
          >
            <h2 className="font-serif text-3xl md:text-5xl text-white font-bold leading-tight">
              Why Guests <br />
              Choose Us
            </h2>
            <p className="font-sans text-base text-surface-container-highest/80 leading-relaxed font-light">
              Over the years, we've perfected the art of hospitality, making us the top choice for discerning travelers, corporate delegates, and families in the Chittoor region.
            </p>
          </motion.div>

          {/* Right Cards Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:col-span-2"
          >
            {HIGHLIGHTS.map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-all duration-300 group"
              >
                <h4 className="font-serif text-lg font-bold text-secondary-fixed mb-4 group-hover:text-white transition-colors">
                  {item.title}
                </h4>
                <p className="font-sans text-sm text-surface-container-highest/70 font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
