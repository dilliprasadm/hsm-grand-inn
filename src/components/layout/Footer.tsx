import Link from "next/link";
import { Mail, Phone, MapPin, Globe, Share2, Play } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants/site";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/30 w-full pt-16 pb-8 mt-auto rounded-t-[32px] md:rounded-t-[48px] overflow-hidden">
      <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter mb-12">
        {/* Brand Column */}
        <div className="space-y-6 md:pr-8">
          <Link href="/" className="inline-block">
            <span className="font-serif text-2xl tracking-tighter text-primary">HSM Grand Inn</span>
            <span className="text-[8px] uppercase tracking-[0.3em] text-secondary font-semibold block -mt-1">
              Luxury Hospitality
            </span>
          </Link>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Redefining luxury hospitality in Chittoor. Experience premium comfort, contemporary heritage, and personalized service tailored for you.
          </p>
          <div className="flex gap-4">
            <a
              href={SITE_CONFIG.gmapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-all duration-300"
              aria-label="Find our location on Google Maps"
            >
              <Globe className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-all duration-300"
              aria-label="Share page"
            >
              <Share2 className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-all duration-300"
              aria-label="View our Youtube channel"
            >
              <Play className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="space-y-6">
          <h4 className="font-sans text-xs uppercase tracking-widest text-primary font-bold">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            {SITE_CONFIG.navigation.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="text-on-surface-variant hover:text-secondary transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/rooms/executive-suite" className="text-on-surface-variant hover:text-secondary transition-colors">
                Executive Suite
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal Column */}
        <div className="space-y-6">
          <h4 className="font-sans text-xs uppercase tracking-widest text-primary font-bold">Legal & Corporate</h4>
          <ul className="space-y-4 text-sm">
            <li>
              <a href="#" className="text-on-surface-variant hover:text-secondary transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-on-surface-variant hover:text-secondary transition-colors">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="text-on-surface-variant hover:text-secondary transition-colors">
                Refund Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-on-surface-variant hover:text-secondary transition-colors">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="space-y-6">
          <h4 className="font-sans text-xs uppercase tracking-widest text-primary font-bold">Get In Touch</h4>
          <div className="space-y-4 text-sm text-on-surface-variant">
            <p className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-secondary shrink-0 mt-1" />
              <span>{SITE_CONFIG.address}</span>
            </p>
            <p className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-secondary shrink-0" />
              <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="hover:text-primary transition-colors">
                {SITE_CONFIG.phone}
              </a>
            </p>
            <p className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-secondary shrink-0" />
              <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-primary transition-colors">
                {SITE_CONFIG.email}
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-on-surface-variant">
        <p>© 2024 {SITE_CONFIG.name}. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-secondary transition-colors">Privacy</a>
          <a href="#" className="hover:text-secondary transition-colors">Terms</a>
          <a href="#" className="hover:text-secondary transition-colors">Cookies</a>
          <a href="#" className="hover:text-secondary transition-colors">Accessibility</a>
        </div>
      </div>
    </footer>
  );
}
