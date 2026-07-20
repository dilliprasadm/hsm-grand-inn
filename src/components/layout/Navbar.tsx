"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Phone, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showTransparent = !scrolled && pathname !== "/gallery";

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-500",
          showTransparent
            ? "bg-transparent py-5"
            : "bg-surface/95 backdrop-blur-md shadow-[0_8px_30px_rgb(17,28,45,0.08)] py-3"
        )}
      >
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop flex justify-between items-center">
          <Link href="/" className="group flex flex-col">
            <span
              className={cn(
                "font-serif text-headline-md tracking-tighter select-none transition-colors duration-300",
                showTransparent ? "text-white" : "text-primary"
              )}
            >
              HSM Grand Inn
            </span>
            <span
              className={cn(
                "text-[9px] uppercase tracking-[0.35em] font-semibold -mt-1 select-none transition-colors duration-300",
                showTransparent ? "text-secondary-fixed" : "text-secondary"
              )}
            >
              Luxury Hospitality
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {SITE_CONFIG.navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative py-1 font-sans text-xs uppercase tracking-widest font-semibold transition-colors duration-300",
                    isActive
                      ? "text-secondary"
                      : showTransparent
                      ? "text-white/90 hover:text-secondary"
                      : "text-primary hover:text-secondary"
                  )}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Call / Book Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/rooms"
              className={cn(
                "px-6 py-2.5 rounded-full font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300 border shadow-sm hover:scale-105 active:scale-95",
                showTransparent
                  ? "bg-white text-primary border-white hover:bg-secondary hover:text-white hover:border-secondary"
                  : "bg-primary text-white border-primary hover:bg-secondary hover:border-secondary"
              )}
            >
              Book Your Stay
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className={cn(
              "md:hidden p-2 transition-colors focus:outline-none",
              showTransparent ? "text-white hover:text-secondary" : "text-primary hover:text-secondary"
            )}
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-4/5 max-w-sm bg-surface shadow-2xl z-50 p-8 flex flex-col justify-between"
            >
              <div className="space-y-12">
                <div className="flex justify-between items-center">
                  <span className="font-serif text-xl tracking-tight text-primary">Navigation</span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-primary hover:text-secondary transition-colors focus:outline-none"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="flex flex-col gap-6">
                  {SITE_CONFIG.navigation.map((item, index) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            "text-lg font-serif tracking-wide block transition-colors py-2",
                            isActive ? "text-secondary font-bold" : "text-primary hover:text-secondary"
                          )}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              <div className="space-y-6 pt-6 border-t border-outline-variant/30">
                <div className="flex flex-col gap-3">
                  <a
                    href={`tel:${SITE_CONFIG.phoneRaw}`}
                    className="flex items-center gap-3 text-sm text-on-surface-variant hover:text-secondary transition-colors"
                  >
                    <Phone className="w-4 h-4 text-secondary" />
                    <span>{SITE_CONFIG.phone}</span>
                  </a>
                  <a
                    href={SITE_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-on-surface-variant hover:text-secondary transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-secondary" />
                    <span>WhatsApp Chat</span>
                  </a>
                </div>

                <Link
                  href="/rooms"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-secondary text-white py-4 rounded-xl font-sans text-xs uppercase tracking-widest font-semibold transition-all hover:bg-secondary-hover shadow-lg shadow-secondary/15"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
