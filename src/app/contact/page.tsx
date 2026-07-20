"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Phone, MessageSquare, Mail, MapPin, Clock, Train, Compass, HelpCircle, ChevronDown } from "lucide-react";
import ClientPageLayout from "@/components/layout/ClientPageLayout";
import PremiumImage from "@/components/shared/PremiumImage";
import { SITE_CONFIG } from "@/lib/constants/site";
import { ATTRACTIONS } from "@/lib/constants/attractions";

const CONTACT_CARDS = [
  {
    icon: <Phone className="w-8 h-8 text-secondary" />,
    title: "Phone",
    value: SITE_CONFIG.phone,
    link: `tel:${SITE_CONFIG.phoneRaw}`,
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-secondary" />,
    title: "WhatsApp",
    value: SITE_CONFIG.whatsapp,
    link: SITE_CONFIG.whatsappUrl,
  },
  {
    icon: <Mail className="w-8 h-8 text-secondary" />,
    title: "Email",
    value: SITE_CONFIG.email,
    link: `mailto:${SITE_CONFIG.email}`,
  },
  {
    icon: <MapPin className="w-8 h-8 text-secondary" />,
    title: "Address",
    value: "Greamspet, Chittoor, AP",
    link: SITE_CONFIG.gmapsUrl,
  },
  {
    icon: <Clock className="w-8 h-8 text-secondary" />,
    title: "Business Hours",
    value: "Open 24/7",
    link: "#",
  },
];

const FEATURES = [
  { icon: <MapPin className="w-6 h-6 text-secondary" />, title: "Prime Location", desc: "Ideally situated in the heart of Chittoor, close to transport hubs and attractions." },
  { icon: <CheckCircleIcon />, title: "Clean Rooms", desc: "Immaculately maintained spaces with premium linen and modern conveniences." },
  { icon: <CheckCircleIcon />, title: "Friendly Hospitality", desc: "Our dedicated staff is committed to providing a personalized, warm experience." },
  { icon: <CheckCircleIcon />, title: "Free Parking", desc: "Secure and spacious on-site parking facilities available free of charge." },
  { icon: <CheckCircleIcon />, title: "24x7 Assistance", desc: "Round-the-clock reception and room service to cater to your needs at any hour." },
  { icon: <WifiIcon />, title: "Free WiFi", desc: "Stay connected with high-speed internet throughout the property." },
];

function CheckCircleIcon() {
  return (
    <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10.5 10.5 0 0114.142 0M1.414 7.05a16.5 16.5 0 0121.172 0" />
    </svg>
  );
}

export default function ContactPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <ClientPageLayout>
      <main className="flex-grow">
        {/* Contact Hero */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-primary">
          <div className="absolute inset-0 z-0">
            <PremiumImage
              src="https://lh3.googleusercontent.com/aida/AP1WRLsaTfe8nbSu89ZFw2UnvtpR5X82HppDyEy5C9sg7V4uNFUVUWvlsp5mfOS8NtppFUPC20vYbnZjfnZqlhAJT5i6OMUimMlEqXWg-NVUHRQMXlQYUtYC6x1Xo1edHay9HijU-EmnxmIAnDModMO0_7AOQl3gaT2UcS4Jhg7zX_VOMCpIymb_QeGQ5FyeiaJxDjx_n7ZSwtJKAd4q0N7zK3eMrl_BWry-o4DDck--BYf4viQ9vSfcf0aFhG12"
              alt="HSM Grand Inn Luxury Entrance Lobby"
              width={1600}
              height={900}
              priority
              className="w-full h-full object-cover brightness-[0.7] scale-105"
            />
            <div className="absolute inset-0 bg-black/45 z-10" />
          </div>

          <div className="relative z-20 text-center text-white px-6 md:px-margin-desktop max-w-4xl space-y-6">
            <div className="flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-secondary-fixed">Contact</span>
            </div>

            <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight">Get in Touch</h1>
            <p className="font-sans text-base md:text-lg font-light text-white/90 leading-relaxed max-w-2xl mx-auto">
              We&apos;re here to make your stay comfortable and memorable. Reach out to us for room enquiries, reservations, or any assistance during your visit to Chittoor.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="bg-primary text-white border border-primary px-10 py-4.5 rounded-xl font-sans text-xs uppercase tracking-widest font-bold hover:bg-secondary hover:border-secondary hover:scale-105 transition-all duration-300 w-full sm:w-auto text-center"
              >
                Call Now
              </a>
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-primary font-bold px-10 py-4.5 rounded-xl font-sans text-xs uppercase tracking-widest hover:bg-secondary-hover hover:scale-105 transition-all duration-300 w-full sm:w-auto text-center shadow-lg shadow-secondary/10"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        {/* Quick Contact Cards */}
        <section className="max-w-container-max mx-auto px-6 md:px-margin-desktop py-12 -mt-24 relative z-30">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {CONTACT_CARDS.map((card, idx) => (
              <a
                key={idx}
                href={card.link}
                target={card.link.startsWith("http") ? "_blank" : undefined}
                rel={card.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(17,28,45,0.06)] border border-outline-variant/20 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center space-y-4 col-span-1"
              >
                <div className="p-3 bg-surface-container-low rounded-full transition-transform duration-300 group-hover:scale-115">
                  {card.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="font-sans text-xs uppercase tracking-wider font-bold text-primary">{card.title}</h3>
                  <p className="font-sans text-xs text-on-surface-variant font-light break-all">{card.value}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Visit Us Section */}
        <section className="max-w-container-max mx-auto px-6 md:px-margin-desktop py-section-gap grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h2 className="font-serif text-3xl md:text-5xl text-primary font-bold">Visit Us</h2>
            <div className="space-y-6">
              <span className="font-sans text-xs uppercase tracking-widest text-secondary font-bold block">Our Location</span>
              <p className="font-sans text-base text-on-surface-variant font-light leading-relaxed">
                HSM Grand Inn is located in the heart of Chittoor, offering unparalleled access to the city&apos;s key travel hubs and spiritual centers.
              </p>
              <p className="font-sans text-sm font-semibold text-primary">
                {SITE_CONFIG.address}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="space-y-3">
                <h4 className="font-sans text-xs uppercase tracking-wider font-bold text-primary border-b border-outline-variant/30 pb-2">Landmarks</h4>
                <ul className="space-y-2 text-xs font-medium text-on-surface-variant font-sans">
                  <li className="flex items-center gap-2">
                    <Train className="w-4 h-4 text-secondary shrink-0" />
                    <span>Chittoor Railway Station (2km)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-secondary shrink-0" />
                    <span>Chittoor Bus Stand (0.5km)</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-sans text-xs uppercase tracking-wider font-bold text-primary border-b border-outline-variant/30 pb-2">Nearby Travel</h4>
                <ul className="space-y-2 text-xs font-medium text-on-surface-variant font-sans">
                  <li className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-secondary shrink-0" />
                    <span>Kanipakam Temple (12km)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-secondary shrink-0" />
                    <span>Tirupati Hills (70km)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href={SITE_CONFIG.gmapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white border border-primary px-8 py-3.5 rounded-xl font-sans text-xs uppercase tracking-widest font-bold hover:bg-secondary hover:border-secondary hover:scale-105 transition-all duration-300"
              >
                Get Directions
              </a>
              <a
                href={SITE_CONFIG.gmapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-outline text-primary px-8 py-3.5 rounded-xl font-sans text-xs uppercase tracking-widest font-semibold hover:bg-surface-container hover:scale-105 transition-all duration-300"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* Map Image rendering */}
          <div className="w-full h-[450px] bg-surface-container rounded-2xl overflow-hidden shadow-xl border border-outline-variant/20 relative">
            <PremiumImage
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD69sZuLikDyFOP-wJ71VviHv17gpTf9If16Wmr8W_NDPUiaWTB3PMUUBePL9L9cjUy0Ch2IP1Y5g8jrOfskd2pkAG2uxNtY1cDV2J9XKT7afdwePyGrlDr8KYGixadhi9G9S_S0QMhA98FLyar27c4_941SzrgtDvpwPWOIcc2o_Ndxl0PxgzJQBr7yrxWknszflQsSxzXVRN7Z0g6LKJVQNgI1uEm7hho4vquYvhxEJ8GxZda0Wmr5g"
              alt="Stylized directions map of Chittoor city center"
              width={800}
              height={500}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-between border border-white/50 shadow-md">
              <span className="font-sans text-xs font-bold text-primary uppercase tracking-widest">Chittoor City Center</span>
              <Compass className="w-5 h-5 text-secondary animate-spin-slow" />
            </div>
          </div>
        </section>

        {/* Why Stay With Us */}
        <section className="py-section-gap px-6 md:px-margin-desktop bg-surface-container-low/50 border-t border-outline-variant/30">
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-16 space-y-4">
              <span className="text-secondary font-sans text-xs uppercase tracking-[0.4em] font-semibold block">Excellence in Service</span>
              <h2 className="font-serif text-3xl md:text-5xl text-primary font-bold">Why Stay With Us</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {FEATURES.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-[20px] shadow-sm border border-outline-variant/10 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-surface-container rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary-container transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="font-sans text-xs text-on-surface-variant font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nearby attractions */}
        <section className="py-section-gap max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
              <span className="text-secondary font-sans text-xs uppercase tracking-[0.4em] font-semibold block">Discover Chittoor</span>
              <h2 className="font-serif text-3xl md:text-5xl text-primary font-bold">Nearby Attractions</h2>
            </div>
            <p className="max-w-md font-sans text-sm text-on-surface-variant font-light leading-relaxed">
              Explore the rich heritage and scenic beauty surrounding HSM Grand Inn, from spiritual landmarks to serene hill stations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {ATTRACTIONS.map((attr, idx) => (
              <div
                key={idx}
                className="group rounded-2xl overflow-hidden bg-white shadow-md border border-outline-variant/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden relative">
                  <PremiumImage
                    src={attr.image}
                    alt={attr.name}
                    width={400}
                    height={300}
                    hoverZoom
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full font-sans text-[10px] uppercase tracking-wider font-bold shadow-sm">
                    {attr.distance}
                  </div>
                </div>
                <div className="p-6 space-y-1">
                  <h4 className="font-serif text-base font-bold text-primary">{attr.name}</h4>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-secondary font-semibold">{attr.category}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common Enquiries FAQ Accordion */}
        <section className="py-section-gap bg-surface-container-low/50 border-t border-outline-variant/30">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
              <span className="text-secondary font-sans text-xs uppercase tracking-[0.4em] font-semibold block">Common Enquiries</span>
              <h2 className="font-serif text-3xl md:text-5xl text-primary font-bold">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "How do I make a reservation?",
                  a: `You can easily book a room by calling us directly at ${SITE_CONFIG.phone} or messaging us on WhatsApp. Our reservation team is available 24/7 to assist you.`,
                },
                {
                  q: "Is there secure parking available on-site?",
                  a: "Yes, we provide complimentary secure parking for all our guests within the hotel premises, monitored 24/7.",
                },
                {
                  q: "What are the check-in and check-out timings?",
                  a: "Our standard check-in time is 2:00 PM and check-out time is 11:00 AM. Early check-in or late check-out is subject to availability.",
                },
                {
                  q: "Is HSM Grand Inn family-friendly?",
                  a: "Absolutely. We pride ourselves on being a family-friendly hotel with spacious rooms and a welcoming environment for guests of all ages.",
                },
              ].map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div key={idx} className="border border-outline-variant/50 rounded-xl overflow-hidden bg-white shadow-sm">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-surface-container-low transition-colors focus:outline-none"
                    >
                      <span className="font-sans text-sm md:text-base font-bold text-primary">{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 text-on-surface-variant transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-8 pb-6 font-sans text-xs text-on-surface-variant font-light leading-relaxed border-t border-outline-variant/10 pt-4 bg-background/30">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="relative py-32 overflow-hidden bg-primary">
          <PremiumImage
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcY-hvq3qVo4mvVN1v7smXUuDrZSDp-XGP-4NkG9-sewuVsu2h_BzOcI4OC_8nXY9FM_thyvSKyLTzs_dQcJUCGqYYZNSahi1WA2R2CR-WdbpgInsWf2ZtmTzuLdqJr6KFlt6C0-7Mes51ApkFC_F6psGvGzTtVLzfJIoWyfTIICnmzRfEIB5TGWs8JhPV-dKCpKEjzq0m8HaLUvKlV5NA51ak7edUL-PBCS6fyVUA2ek0evzhhRcqjw"
            alt="HSM Grand Inn hotel illuminated facade at night"
            width={1600}
            height={900}
            className="absolute inset-0 w-full h-full object-cover brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-black/60 z-10" />

          <div className="relative z-20 max-w-container-max mx-auto px-6 text-center text-white space-y-8">
            <h2 className="font-serif text-3xl md:text-5xl font-bold max-w-2xl mx-auto leading-tight">Planning Your Stay in Chittoor?</h2>
            <p className="font-sans text-base text-surface-container-highest/80 max-w-xl mx-auto font-light leading-relaxed">
              Our team is ready to help you with reservations and any questions you may have about your upcoming visit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="bg-secondary text-primary font-bold px-10 py-4 rounded-xl font-sans text-xs uppercase tracking-widest hover:bg-secondary-hover hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-primary fill-current" />
                <span>Call Now</span>
              </a>
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary font-bold px-10 py-4 rounded-xl font-sans text-xs uppercase tracking-widest hover:bg-surface-variant hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-secondary fill-current" />
                <span>WhatsApp</span>
              </a>
              <a
                href={SITE_CONFIG.gmapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/30 text-white hover:bg-white/10 px-10 py-4 rounded-xl font-sans text-xs uppercase tracking-widest font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Compass className="w-4 h-4 text-secondary" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </section>

      </main>
    </ClientPageLayout>
  );
}
