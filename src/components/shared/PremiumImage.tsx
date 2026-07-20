"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Skeleton from "@/components/ui/Skeleton";
import { cn, getHighQualityImageUrl } from "@/lib/utils";

interface PremiumImageProps extends Omit<ImageProps, "onLoad" | "onLoadingComplete"> {
  hoverZoom?: boolean;
}

export default function PremiumImage({
  className,
  hoverZoom = false,
  alt,
  src,
  width,
  height,
  ...props
}: PremiumImageProps) {
  const [loaded, setLoaded] = useState(false);

  const cleanSrc = typeof src === "string" ? getHighQualityImageUrl(src, (width as number) || 1200) : src;

  return (
    <div className={cn("relative overflow-hidden w-full h-full", className)}>
      <AnimatePresence mode="popLayout">
        {!loaded && (
          <motion.div
            key="skeleton"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 z-10 w-full h-full"
          >
            <Skeleton className="w-full h-full rounded-none" />
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div
        initial={{ opacity: 0, scale: 1.03 }}
        animate={loaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.03 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        className={cn(
          "w-full h-full transition-transform duration-700 ease-out",
          hoverZoom && loaded && "hover:scale-105"
        )}
      >
        <Image
          src={cleanSrc}
          alt={alt || "HSM Grand Inn Image"}
          onLoad={() => setLoaded(true)}
          className="object-cover w-full h-full"
          width={width}
          height={height}
          unoptimized
          {...props}
        />
      </motion.div>
    </div>
  );
}
