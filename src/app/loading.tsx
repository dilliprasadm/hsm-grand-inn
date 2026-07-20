"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center">
      <div className="space-y-4 text-center max-w-xs w-full">
        {/* Monogram/Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <span className="font-serif text-3xl tracking-widest text-primary">
            HSM
          </span>
          <span className="text-[10px] uppercase tracking-[0.4em] text-secondary font-semibold mt-1">
            Grand Inn
          </span>
        </motion.div>

        {/* Premium Progress Bar */}
        <div className="h-[2px] w-48 bg-surface-container-high mx-auto rounded-full overflow-hidden relative">
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="absolute top-0 bottom-0 w-1/2 bg-secondary rounded-full"
          />
        </div>

        {/* Ambient message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-[10px] uppercase tracking-widest text-on-surface-variant font-medium font-sans"
        >
          Preparing Your Stay
        </motion.p>
      </div>
    </div>
  );
}
