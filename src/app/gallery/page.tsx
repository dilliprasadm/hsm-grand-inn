"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import ClientPageLayout from "@/components/layout/ClientPageLayout";
import PremiumImage from "@/components/shared/PremiumImage";
import { GALLERY_IMAGES, CATEGORIES, type CategoryType } from "@/lib/constants/gallery";

export default function GalleryPage() {
  const [filter, setFilter] = useState<CategoryType>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter gallery images
  const filteredImages = GALLERY_IMAGES.filter(
    (img) => filter === "all" || img.category === filter
  );

  // Handle keyboard inputs for Lightbox navigation
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredImages]);

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <ClientPageLayout>
      <main className="flex-grow mt-24">
        {/* Gallery Header */}
        <section className="max-w-container-max mx-auto px-6 md:px-margin-desktop py-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-secondary font-sans text-xs uppercase tracking-[0.3em] font-semibold block mb-4"
          >
            Visual Journey
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="font-serif text-4xl md:text-6xl text-primary font-bold mb-10"
          >
            The Gallery
          </motion.h1>

          {/* Filters Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 md:gap-6 mb-12"
          >
            {CATEGORIES.map((cat) => {
              const isActive = filter === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setFilter(cat.value as CategoryType)}
                  className={`px-6 py-2 rounded-full font-sans text-[10px] uppercase tracking-wider font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-secondary text-primary shadow-md hover:scale-102"
                      : "border border-outline-variant hover:border-secondary hover:text-secondary text-on-surface-variant"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </motion.div>
        </section>

        {/* Masonry Grid */}
        <section className="max-w-container-max mx-auto px-6 md:px-margin-desktop pb-section-gap">
          <motion.div layout className="masonry-grid">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="masonry-item rounded-[20px] overflow-hidden luxury-shadow bg-white relative group cursor-pointer border border-outline-variant/10"
                  onClick={() => setLightboxIndex(index)}
                >
                  <PremiumImage
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={index % 2 === 0 ? 400 : 550}
                    hoverZoom
                    className="w-full block"
                  />
                  
                  {/* Zoom Overlay on Hover */}
                  <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                    <ZoomIn className="w-10 h-10 mb-2 scale-90 group-hover:scale-100 transition-transform duration-300" />
                    <span className="font-sans text-[10px] uppercase tracking-widest font-bold">
                      {image.title}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 md:p-8"
            >
              {/* Close button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 text-white/70 hover:text-white p-2 transition-colors focus:outline-none"
                aria-label="Close Lightbox"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Prev button */}
              <button
                onClick={handlePrev}
                className="absolute left-6 text-white/70 hover:text-white p-2 transition-colors focus:outline-none"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-10 h-10" />
              </button>

              {/* Next button */}
              <button
                onClick={handleNext}
                className="absolute right-6 text-white/70 hover:text-white p-2 transition-colors focus:outline-none"
                aria-label="Next Image"
              >
                <ChevronRight className="w-10 h-10" />
              </button>

              {/* Image Frame */}
              <div className="max-w-4xl max-h-[80vh] w-full h-full flex flex-col items-center justify-center relative select-none">
                <motion.img
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.3 }}
                  src={filteredImages[lightboxIndex].src}
                  alt={filteredImages[lightboxIndex].alt}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />

                {/* Subtitle & Image counter */}
                <div className="text-center text-white/80 mt-6 space-y-1">
                  <h4 className="font-serif text-lg font-bold">
                    {filteredImages[lightboxIndex].title}
                  </h4>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-white/50">
                    Image {lightboxIndex + 1} of {filteredImages.length} • {filteredImages[lightboxIndex].category}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </ClientPageLayout>
  );
}
