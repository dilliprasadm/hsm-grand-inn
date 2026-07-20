"use client";

import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Preloader from "../shared/Preloader";

export default function ClientPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Preloader />
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex-grow flex flex-col"
      >
        {children}
      </motion.div>
      <Footer />
    </div>
  );
}
