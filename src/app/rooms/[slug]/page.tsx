import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Star, CheckCircle, Phone, MessageSquare, Square, Bed, Users, LogIn, LogOut, ArrowUp, Wifi, Wind, Tv, Coffee, ShieldAlert, DoorOpen, HelpCircle } from "lucide-react";
import ClientPageLayout from "@/components/layout/ClientPageLayout";
import PremiumImage from "@/components/shared/PremiumImage";
import { ROOMS } from "@/lib/constants/rooms";
import { SITE_CONFIG } from "@/lib/constants/site";
import { ATTRACTIONS } from "@/lib/constants/attractions";
import { formatCurrency } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static routes for build time optimization
export async function generateStaticParams() {
  return ROOMS.map((room) => ({
    slug: room.slug,
  }));
}

export default async function RoomDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const room = ROOMS.find((r) => r.slug === slug);

  if (!room) {
    notFound();
  }

  // Helper icons for amenities
  const getAmenityIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "free wifi":
      case "high-speed wifi":
        return <Wifi className="w-5 h-5 text-secondary" />;
      case "full ac":
      case "air conditioning":
        return <Wind className="w-5 h-5 text-secondary" />;
      case "smart tv":
        return <Tv className="w-5 h-5 text-secondary" />;
      case "tea/coffee":
        return <Coffee className="w-5 h-5 text-secondary" />;
      default:
        return <CheckCircle className="w-5 h-5 text-secondary" />;
    }
  };

  return (
    <ClientPageLayout>
      <main className="flex-grow">
        {/* Dynamic Room Hero */}
        <section className="relative h-[75vh] md:h-[80vh] w-full overflow-hidden bg-primary">
          <PremiumImage
            src={room.mainImage}
            alt={room.name}
            width={1600}
            height={900}
            priority
            className="absolute inset-0 w-full h-full object-cover brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
          
          <div className="relative z-10 h-full max-w-container-max mx-auto px-6 md:px-margin-desktop flex flex-col justify-end pb-20 text-white">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-white/70 mb-4 font-sans">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/rooms" className="hover:text-white transition-colors">Rooms</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-secondary-fixed">{room.name}</span>
            </nav>

            <h1 className="font-serif text-4xl md:text-6xl text-white font-bold mb-4 leading-tight">
              {room.name}
            </h1>
            <p className="font-sans text-base md:text-lg text-white/80 max-w-2xl font-light leading-relaxed mb-8">
              {room.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-secondary text-primary font-bold px-10 py-4 rounded-full font-sans text-xs uppercase tracking-widest hover:bg-secondary-hover hover:scale-105 transition-all duration-300"
              >
                Book This Room
              </Link>
              
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-sans text-xs uppercase tracking-widest font-semibold hover:bg-white/20 transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-secondary" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </section>

        {/* Room Details Split Layout */}
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop py-section-gap grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-16 relative">
          
          {/* Left Column Content (8 cols) */}
          <div className="lg:col-span-8 space-y-20">
            
            {/* Bento Gallery Collage */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-primary mb-6">Gallery Highlights</h2>
              <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[450px]">
                <div className="col-span-2 row-span-2 overflow-hidden rounded-2xl luxury-shadow relative">
                  <PremiumImage
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwgUmTGgv6stKLPhp0CfuYH1YIiszNwDCfZ0nCGd4MANfB-xaZPHzPzcsjSiJUT32SB615kw_lJlo7o5PImxx6wztlwKqoXvloHA9fg5xYo2XqNcxT-iEULkvrfyNlFqhmPSiJO1uXCM3jq4XqRN5lDrRc6V4CGXBR4AWNTAOSigF9evHOMVgw5Gy-QazbHu6Aa5mXReMwZ8CzG4_PgM-RzVGNHKBI9nApdr7rGJLJvmiur-nLxB0CSw"
                    alt="Luxury washroom bathtub setting"
                    width={500}
                    height={400}
                    hoverZoom
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="col-span-2 overflow-hidden rounded-2xl luxury-shadow relative">
                  <PremiumImage
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJsWc_VhiN3wtgxe-YSk-RMtiM7i7RRymFWF-SpOsGcPlS7LwxGsu26N5dcd75ZnBWenuBgODxUkhcCJtcfhbzfDh80Err-oTKUXc3e-7YnIiVE9qdd0KMPqbvZnPBIZ28dsMimvcPfU3aQKKBnOJN47CP8MoivinyMjA258HK-NfY4uwJ0m3zeYiCfFD1WQLLmGPGFlRrAGkRSHkd1BHN1_c8hSFgpY_85xRzsFhtxJiRYhdK7r1SMA"
                    alt="Refined oak workstation desk layout"
                    width={500}
                    height={200}
                    hoverZoom
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl luxury-shadow relative">
                  <PremiumImage
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcN_ugEBWDnl3o6GVCbRac1t_tNdR9L3DFepgPcfNS9OkEV37EyolupzuW1w19E4w0cfkQw7gVBPM_rc2mIPNbXU5zZEkYwgGcM3id1vHqeaFDQuhBy627jk_OzCna8RERU692GfOSC8YsuSYmuugxgZ1gTGFFRK-fCNNQQsaFf9iaTic-bnoalRgS7lQogidq-Tx1QMLyf4A7QiKHsifvmmW7DNeyRJVvVBrxvRXt70qyuPYLj2NBMw"
                    alt="Tea maker and amenities detail"
                    width={250}
                    height={200}
                    hoverZoom
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl luxury-shadow relative">
                  <PremiumImage
                    src="https://lh3.googleusercontent.com/aida/fe8a979da2a24290bdd4501efbf0ff46"
                    alt="Orthopedic bed details"
                    width={250}
                    height={200}
                    hoverZoom
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </section>

            {/* Room Overview & Tech Details */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-outline-variant/30 pb-16 items-start">
              <div className="space-y-6">
                <h3 className="font-serif text-2xl font-bold text-primary">The Space</h3>
                <p className="font-sans text-sm text-on-surface-variant font-light leading-relaxed">
                  {room.longDescription}
                </p>
              </div>

              <div className="bg-surface-container-low p-8 rounded-[20px] space-y-4 border border-outline-variant/10">
                <div className="flex justify-between items-center py-3 border-b border-outline-variant/30 font-sans text-xs">
                  <span className="text-on-surface-variant font-semibold uppercase tracking-wider">Room Size</span>
                  <span className="font-bold text-primary flex items-center gap-1.5">
                    <Square className="w-3.5 h-3.5 text-secondary" />
                    {room.size}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-outline-variant/30 font-sans text-xs">
                  <span className="text-on-surface-variant font-semibold uppercase tracking-wider">Bed Type</span>
                  <span className="font-bold text-primary flex items-center gap-1.5">
                    <Bed className="w-3.5 h-3.5 text-secondary" />
                    {room.bedType}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-outline-variant/30 font-sans text-xs">
                  <span className="text-on-surface-variant font-semibold uppercase tracking-wider">Occupancy</span>
                  <span className="font-bold text-primary flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-secondary" />
                    {room.occupancy}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-outline-variant/30 font-sans text-xs">
                  <span className="text-on-surface-variant font-semibold uppercase tracking-wider">Check-in</span>
                  <span className="font-bold text-primary flex items-center gap-1.5">
                    <LogIn className="w-3.5 h-3.5 text-secondary" />
                    <span>2:00 PM</span>
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-outline-variant/30 font-sans text-xs">
                  <span className="text-on-surface-variant font-semibold uppercase tracking-wider">Check-out</span>
                  <span className="font-bold text-primary flex items-center gap-1.5">
                    <LogOut className="w-3.5 h-3.5 text-secondary" />
                    <span>11:00 AM</span>
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 font-sans text-xs">
                  <span className="text-on-surface-variant font-semibold uppercase tracking-wider">Floor</span>
                  <span className="font-bold text-primary flex items-center gap-1.5">
                    <DoorOpen className="w-3.5 h-3.5 text-secondary" />
                    {room.floor}
                  </span>
                </div>
              </div>
            </section>

            {/* Room Amenities Grid */}
            <section className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-primary">Room Amenities</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {room.amenities.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center p-6 bg-white rounded-2xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow text-center space-y-3 cursor-default"
                  >
                    {getAmenityIcon(item)}
                    <span className="font-sans text-xs font-bold text-primary uppercase tracking-wider">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Why You'll Love This */}
            <section className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-primary">Why You&apos;ll Love This</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {room.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-8 bg-surface-container-low rounded-2xl space-y-4 border border-outline-variant/10 luxury-shadow"
                  >
                    <CheckCircle className="w-8 h-8 text-secondary" />
                    <h4 className="font-serif text-lg font-bold text-primary">Feature Highlight</h4>
                    <p className="font-sans text-xs text-on-surface-variant font-light leading-relaxed">
                      {highlight}. Every detail is calibrated to offer an exceptional stay experience.
                    </p>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Right Column Sticky Booking Widget (4 cols) */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 bg-white p-8 rounded-[24px] luxury-shadow border border-outline-variant/20 space-y-6">
              <div>
                <span className="text-secondary font-sans text-[10px] uppercase tracking-widest font-bold block">
                  Premium Choice
                </span>
                <h3 className="font-serif text-2xl font-bold text-primary mt-2">
                  {room.name}
                </h3>
                <div className="flex items-center gap-1 mt-2 text-on-surface-variant font-sans text-xs">
                  <div className="flex text-secondary gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 font-semibold font-sans">({room.reviewsCount} Reviews)</span>
                </div>
              </div>

              {/* Inclusions */}
              <ul className="space-y-4 font-sans text-xs text-on-surface-variant font-medium border-y border-outline-variant/30 py-6">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                  <span>Complimentary breakfast included</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                  <span>Free high-speed airport shuttle</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                  <span>24/7 Personal concierge access</span>
                </li>
              </ul>

              {/* Rate & Booking actions */}
              <div className="space-y-4">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="font-serif text-3xl font-bold text-primary">
                    {formatCurrency(room.price)}
                  </span>
                  <span className="font-sans text-xs uppercase tracking-wider text-on-surface-variant font-semibold">
                    / Night
                  </span>
                </div>
                <Link
                  href="/contact"
                  className="w-full block bg-secondary text-primary font-bold py-4 rounded-xl font-sans text-xs uppercase tracking-widest text-center hover:bg-secondary-hover hover:scale-102 transition-all duration-300 shadow-md shadow-secondary/10"
                >
                  Book This Room
                </Link>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href={`tel:${SITE_CONFIG.phoneRaw}`}
                    className="flex items-center justify-center gap-2 border border-outline px-4 py-3 rounded-xl font-sans text-xs uppercase tracking-wider font-semibold text-primary hover:bg-surface-container transition-colors duration-300"
                  >
                    <Phone className="w-3.5 h-3.5 text-secondary" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href={SITE_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 border border-outline px-4 py-3 rounded-xl font-sans text-xs uppercase tracking-wider font-semibold text-primary hover:bg-surface-container transition-colors duration-300"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-secondary" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
              
              <p className="text-center text-[10px] text-outline font-sans font-semibold uppercase tracking-wider">
                Best price guaranteed booking direct.
              </p>
            </div>
          </aside>

        </div>

        {/* Hotel Facilities Full-Width */}
        <section className="bg-surface-container-low py-section-gap border-y border-outline-variant/30">
          <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop text-center">
            <h2 className="font-serif text-3xl font-bold text-primary mb-12">Hotel Facilities</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
              {[
                { name: "24/7 Reception", icon: <Users className="w-7 h-7 text-secondary mx-auto" /> },
                { name: "Secure Parking", icon: <CheckCircle className="w-7 h-7 text-secondary mx-auto" /> },
                { name: "Elevator Access", icon: <ArrowUp className="w-7 h-7 text-secondary mx-auto" /> },
                { name: "Support Agent", icon: <CheckCircle className="w-7 h-7 text-secondary mx-auto" /> },
                { name: "CCTV Security", icon: <CheckCircle className="w-7 h-7 text-secondary mx-auto" /> },
                { name: "Hi-Speed WiFi", icon: <Wifi className="w-7 h-7 text-secondary mx-auto" /> },
                { name: "Diner Restaurant", icon: <CheckCircle className="w-7 h-7 text-secondary mx-auto" /> },
                { name: "Power Backup", icon: <CheckCircle className="w-7 h-7 text-secondary mx-auto" /> },
              ].map((fac, idx) => (
                <div key={idx} className="space-y-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  {fac.icon}
                  <span className="font-sans text-xs font-bold text-primary uppercase tracking-wider block">
                    {fac.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nearby attractions */}
        <section className="py-section-gap max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <h2 className="font-serif text-3xl font-bold text-primary mb-12">Nearby Attractions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ATTRACTIONS.map((attr, idx) => (
              <div
                key={idx}
                className="group rounded-2xl overflow-hidden luxury-shadow bg-white border border-outline-variant/10 flex flex-col hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="h-48 overflow-hidden relative">
                  <PremiumImage
                    src={attr.image}
                    alt={attr.name}
                    width={400}
                    height={300}
                    hoverZoom
                    className="w-full h-full object-cover animate-none"
                  />
                </div>
                <div className="p-6 space-y-1">
                  <h4 className="font-serif text-lg font-bold text-primary">{attr.name}</h4>
                  <p className="font-sans text-xs text-on-surface-variant font-semibold uppercase tracking-wider">{attr.distance} from Hotel</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-section-gap bg-surface-container-low/50 border-t border-outline-variant/30">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-serif text-3xl font-bold text-primary text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "What are the check-in and check-out timings?",
                  a: "Check-in starts from 2:00 PM and check-out is by 11:00 AM. Early check-in or late check-out is subject to room availability.",
                },
                {
                  q: "Is parking available on-site?",
                  a: "Yes, we offer complimentary secure parking for all our guests within the hotel premises, monitored 24/7 by security staff.",
                },
                {
                  q: "Do you offer complimentary breakfast?",
                  a: "Yes, a premium continental breakfast buffet is included with every Executive Suite booking.",
                },
              ].map((faq, idx) => (
                <div key={idx} className="border border-outline-variant/50 rounded-2xl overflow-hidden bg-white shadow-sm">
                  <div className="p-6 flex items-start gap-4">
                    <HelpCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <div className="space-y-2">
                      <h4 className="font-sans text-sm font-bold text-primary">{faq.q}</h4>
                      <p className="font-sans text-xs text-on-surface-variant font-light leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </ClientPageLayout>
  );
}
