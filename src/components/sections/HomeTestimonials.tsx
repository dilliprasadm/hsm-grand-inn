"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function HomeTestimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const quoteY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={sectionRef} id="reviews" className="py-section-gap bg-surface-container-lowest overflow-hidden">
      <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          {/* Featured Large Review (Left Column) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="text-secondary font-sans text-xs uppercase tracking-[0.4em] font-semibold block">
              Testimonials
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-primary font-bold">
              What Our Guests Say
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
              className="w-16 h-[2px] bg-gradient-to-r from-secondary to-transparent origin-left"
            />
            
            <motion.div
              style={{ y: quoteY }}
              className="relative p-10 bg-white rounded-[24px] luxury-shadow border border-outline-variant/10"
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Quote className="w-16 h-16 text-secondary/10 absolute top-6 right-8 pointer-events-none" />
              </motion.div>
              
              <div className="flex text-secondary gap-0.5 mb-6">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.3, type: "spring" }}
                  >
                    <Star className="w-4 h-4 fill-current" />
                  </motion.div>
                ))}
              </div>
              
              <p className="font-serif text-lg md:text-xl italic text-primary leading-relaxed mb-8">
                &ldquo;Exceeded all expectations. The rooms were spotless, the staff was incredibly attentive, and the food was simply divine. Best place to stay in Chittoor for families.&rdquo;
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed font-bold font-sans">
                  AK
                </div>
                <div>
                  <h5 className="font-sans text-sm font-bold text-primary">Anand Krishnan</h5>
                  <p className="font-sans text-[10px] text-outline uppercase tracking-widest font-semibold mt-0.5">
                    Business Traveler
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Staggered Reviews Grid (Right Column) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-gutter">
            
            {/* Column 1 */}
            <div className="space-y-gutter lg:mt-12">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="p-8 bg-white rounded-2xl luxury-shadow border border-outline-variant/10 transition-shadow duration-300 hover:shadow-xl"
              >
                <p className="font-sans text-sm text-on-surface-variant font-light leading-relaxed mb-6">
                  &ldquo;Very professional service. Perfect for my corporate meetings and remote work setups.&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-xs font-bold text-primary">- Sarah J.</span>
                  <div className="flex text-secondary gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="p-8 bg-white rounded-2xl luxury-shadow border border-outline-variant/10 transition-shadow duration-300 hover:shadow-xl"
              >
                <p className="font-sans text-sm text-on-surface-variant font-light leading-relaxed mb-6">
                  &ldquo;The bed was like sleeping on a cloud. Highly recommend! Extremely comfortable rooms.&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-xs font-bold text-primary">- Rahul M.</span>
                  <div className="flex text-secondary gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Column 2 */}
            <div className="space-y-gutter">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="p-8 bg-white rounded-2xl luxury-shadow border border-outline-variant/10 transition-shadow duration-300 hover:shadow-xl"
              >
                <p className="font-sans text-sm text-on-surface-variant font-light leading-relaxed mb-6">
                  &ldquo;Best breakfast buffet in the city. Incredible variety of local and continental options.&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-xs font-bold text-primary">- Priya D.</span>
                  <div className="flex text-secondary gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="p-8 bg-white rounded-2xl luxury-shadow border border-outline-variant/10 transition-shadow duration-300 hover:shadow-xl"
              >
                <p className="font-sans text-sm text-on-surface-variant font-light leading-relaxed mb-6">
                  &ldquo;Immaculate rooms and very helpful front desk staff. Felt very safe and well looked after.&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-xs font-bold text-primary">- Mike T.</span>
                  <div className="flex text-secondary gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
