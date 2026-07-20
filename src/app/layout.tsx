import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HSM Grand Inn | Premium Luxury Hotel in Chittoor",
  description: "Experience premium comfort and contemporary heritage at HSM Grand Inn, Chittoor's finest luxury hotel. Clean rooms, secure parking, and exceptional hospitality.",
  keywords: ["HSM Grand Inn", "Hotel in Chittoor", "Luxury stay Chittoor", "Best hotel in Chittoor", "Chittoor accommodation"],
  authors: [{ name: "HSM Grand Inn" }],
  metadataBase: new URL("https://hsmgrandinn.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "HSM Grand Inn | Premium Luxury Hotel in Chittoor",
    description: "Experience premium comfort and contemporary heritage at HSM Grand Inn, Chittoor's finest luxury hotel.",
    url: "https://hsmgrandinn.com",
    siteName: "HSM Grand Inn",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBlsnn5RIo5dqFJoBf1XIFNm_YTJJkGoq37SFJE1lzvOVlqCY5Xae8Mk-nc6WSyUfHPz6zZI-BVbmV70gYkkQejMDVNMfMNinInwrW1ilZknXaBql6_q7Hqd8oLNzRAq9XpnO3WiTJ_sVGDHj-wJuQGksD4aCJtZcVQManA-RPZqwdCvVUyws0xrK9DjBDo1FWfdZOp2XGAhiFaCqKt-4Jl2l07NpifaS6GtIvJSuY8JoZ6T3zy29Oag",
        width: 1200,
        height: 630,
        alt: "HSM Grand Inn Luxury Lobby",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HSM Grand Inn | Premium Luxury Hotel in Chittoor",
    description: "Experience premium comfort and contemporary heritage at HSM Grand Inn, Chittoor's finest luxury hotel.",
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuDBlsnn5RIo5dqFJoBf1XIFNm_YTJJkGoq37SFJE1lzvOVlqCY5Xae8Mk-nc6WSyUfHPz6zZI-BVbmV70gYkkQejMDVNMfMNinInwrW1ilZknXaBql6_q7Hqd8oLNzRAq9XpnO3WiTJ_sVGDHj-wJuQGksD4aCJtZcVQManA-RPZqwdCvVUyws0xrK9DjBDo1FWfdZOp2XGAhiFaCqKt-4Jl2l07NpifaS6GtIvJSuY8JoZ6T3zy29Oag"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": "HSM Grand Inn",
    "description": "Premium luxury hotel in Chittoor, Andhra Pradesh offering contemporary heritage stays.",
    "url": "https://hsmgrandinn.com",
    "telephone": "+91 98765 43210",
    "priceRange": "₹3,499 - ₹18,000 INR",
    "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuDBlsnn5RIo5dqFJoBf1XIFNm_YTJJkGoq37SFJE1lzvOVlqCY5Xae8Mk-nc6WSyUfHPz6zZI-BVbmV70gYkkQejMDVNMfMNinInwrW1ilZknXaBql6_q7Hqd8oLNzRAq9XpnO3WiTJ_sVGDHj-wJuQGksD4aCJtZcVQManA-RPZqwdCvVUyws0xrK9DjBDo1FWfdZOp2XGAhiFaCqKt-4Jl2l07NpifaS6GtIvJSuY8JoZ6T3zy29Oag",
    "starRating": {
      "@type": "Rating",
      "ratingValue": "4.8"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Greamspet Main Road, Near Chittoor RTC Bus Stand",
      "addressLocality": "Chittoor",
      "addressRegion": "Andhra Pradesh",
      "postalCode": "517002",
      "addressCountry": "IN"
    }
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
