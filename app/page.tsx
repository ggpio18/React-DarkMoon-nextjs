"use client";

import Hero from "@/components/sections/Hero";
import FeaturedEvent from "@/components/sections/FeaturedEvent";
import LatestReleases from "@/components/sections/LatestReleases";
import UpcomingShows from "@/components/sections/UpcomingShows";
import Gallery from "@/components/sections/Gallery";
import ArtistSpotlight from "@/components/sections/ArtistSpotlight";
import RecentPosts from "@/components/sections/RecentPosts";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Hero />
      <FeaturedEvent />
      <LatestReleases />
      <UpcomingShows />
      <Gallery />
      <ArtistSpotlight />
      <RecentPosts />
      <ContactSection />
    </main>
  );
}