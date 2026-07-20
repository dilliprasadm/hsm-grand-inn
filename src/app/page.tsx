import ClientPageLayout from "@/components/layout/ClientPageLayout";
import Hero from "@/components/sections/Hero";
import TrustBadges from "@/components/sections/TrustBadges";
import HomeAbout from "@/components/sections/HomeAbout";
import FeaturedRooms from "@/components/sections/FeaturedRooms";
import HomeAmenities from "@/components/sections/HomeAmenities";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import NearbyAttractions from "@/components/sections/NearbyAttractions";
import HomeTestimonials from "@/components/sections/HomeTestimonials";
import HomeGalleryPreview from "@/components/sections/HomeGalleryPreview";
import HomeCTA from "@/components/sections/HomeCTA";

export default function HomePage() {
  return (
    <ClientPageLayout>
      <main className="flex-grow">
        {/* Scroll narrative storytelling flow */}
        <Hero />
        <TrustBadges />
        <HomeAbout />
        <FeaturedRooms />
        <HomeAmenities />
        <WhyChooseUs />
        <NearbyAttractions />
        <HomeTestimonials />
        <HomeGalleryPreview />
        <HomeCTA />
      </main>
    </ClientPageLayout>
  );
}
