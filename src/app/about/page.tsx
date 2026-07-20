import ClientPageLayout from "@/components/layout/ClientPageLayout";
import AboutHero from "@/components/sections/AboutHero";
import AboutStory from "@/components/sections/AboutStory";
import AboutVisionMission from "@/components/sections/AboutVisionMission";
import AboutValues from "@/components/sections/AboutValues";
import AboutWhyUs from "@/components/sections/AboutWhyUs";
import HomeAmenities from "@/components/sections/HomeAmenities";
import NearbyAttractions from "@/components/sections/NearbyAttractions";
import AboutBentoGallery from "@/components/sections/AboutBentoGallery";
import AboutReviews from "@/components/sections/AboutReviews";
import AboutCTA from "@/components/sections/AboutCTA";

export default function AboutPage() {
  return (
    <ClientPageLayout>
      <main className="flex-grow">
        <AboutHero />
        <AboutStory />
        <AboutVisionMission />
        <AboutValues />
        <AboutWhyUs />
        <HomeAmenities />
        <NearbyAttractions />
        <AboutBentoGallery />
        <AboutReviews />
        <AboutCTA />
      </main>
    </ClientPageLayout>
  );
}
