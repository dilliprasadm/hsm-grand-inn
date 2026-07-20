"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PremiumImage from "@/components/shared/PremiumImage";

const IMAGES = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDBlsnn5RIo5dqFJoBf1XIFNm_YTJJkGoq37SFJE1lzvOVlqCY5Xae8Mk-nc6WSyUfHPz6zZI-BVbmV70gYkkQejMDVNMfMNinInwrW1ilZknXaBql6_q7Hqd8oLNzRAq9XpnO3WiTJ_sVGDHj-wJuQGksD4aCJtZcVQManA-RPZqwdCvVUyws0xrK9DjBDo1FWfdZOp2XGAhiFaCqKt-4Jl2l07NpifaS6GtIvJSuY8JoZ6T3zy29Oag",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBPBfNYm2nl41yAlFpCFZEQR2AYxLIs-lEnTUhLNxkpA6hokYK29_XLE50eCt5j5w0-zvJFKXCrDlkwUV_3dfP35FEE1cI4SRXUdtdr1zzmMXkmR2puyKpEWpUhINRAQ0MOE2lUXzTwpOYyw-SrqlZEuahnbCP-BqFbG4BTuOWjMaT_oSXFKbad5r4JjZaaDtxauqeyewqcqvGHEhoBKXuiEBgXZs-1oWSIhwAgLi6zPwyTUiMLDZxYVw",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAeW81nv-_BDmU9xd6Lb22-l2Ct0FyMyisult6uPlDistN-5dxCUpiybr3EMSgvyRjKI2G4wKBPTuqJWmGCc2vrm3AQDPFePVrIY_deKRwWrc5QfmbPgvE1XFM3PQ_C0nXxyrhPFunz1XiuBhKv2Wt81LKjTfVn8H-bUlDCWUy94k3eKM18go_SLLyKqyM424xQJaXBV3zGUcwBj9W3QNd5g9U1jTqOlXzXJ6zeGT8xZ5eeMf42JIpKYw",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD9V7mxlQyG_7rQG675dmam0QQoCUSTKXLlwQcSc7IVkqqU9EmOtb3PHNbzE8ogntnzWhy8wNFm84ElYkGFBoJOcYQNOaUmmvHnj57N0MGXkD4xex7KqCU5D8VrQLEcjABTb_eK_uChuLNjEewCM_cRyUULCo8lf9AWLJVBoWpdv1J9BXo9SfRS6ojhC3ro7Edqbs-6meWvVOjlCn9J_Xz74vpmuVRoNXznG_oF_k-Qoy8ynOJZrLcfJg",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA--uiDXBX8ChkiMJDMmLS3I8GxWlTXuFfhtX3vpSoSzpqtVIuhQIy50P5dNqH57I0QFQwrIa7-aLmvTa8wzGoNc0_CGW-0XpkRzgFGU7UB4d3Tx3NQiMXC9WK21affV43oMOrunmfWP16FKN1U1Fgpp8IE3wj9Fgp37U7s-0G4Jp0RC9og9HdhsVLOePqpdVXou5jzy1vxjml2EzkcJeEHjDhLCEHB_oCcsAWJqyeYCa33loZOjWGKtQ"
];

const LABELS = ["Lobby & Reception", "Premium Suite", "Business Lounge", "Fine Dining", "Rooftop View"];

export default function HomeGalleryPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Alternate parallax for masonry items
  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <section ref={sectionRef} id="gallery" className="py-section-gap px-6 md:px-margin-desktop bg-background overflow-hidden">
      <div className="max-w-container-max mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-secondary font-sans text-xs uppercase tracking-[0.4em] font-semibold block">
            Visual Tour
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-primary font-bold">
            Immerse Yourself in Luxury
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
            className="w-20 h-[2px] bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto origin-center"
          />
        </motion.div>

        <div className="masonry-grid">
          {IMAGES.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.8,
                delay: (idx % 3) * 0.12,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              style={{ y: idx % 2 === 0 ? y1 : y2 }}
              className="masonry-item rounded-[20px] overflow-hidden luxury-shadow bg-white hover:shadow-2xl transition-all duration-500 relative group"
            >
              <PremiumImage
                src={img}
                alt={`HSM Grand Inn Visual Gallery ${idx + 1}`}
                width={500}
                height={idx % 2 === 0 ? 350 : 500}
                hoverZoom
                className="w-full h-full object-cover"
              />

              {/* Hover overlay with label */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                <motion.span
                  initial={{ y: 10 }}
                  className="font-sans text-xs uppercase tracking-widest font-semibold text-white/90 translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
                >
                  {LABELS[idx] || "Gallery"}
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
