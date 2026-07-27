import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Pillars } from "@/components/home/Pillars";
import { MissionBand } from "@/components/home/MissionBand";
import { TrustSection } from "@/components/home/TrustSection";
import { HomeCTA } from "@/components/home/HomeCTA";

export const metadata: Metadata = {
  title: "Vardian Capital Partners — Wealth Strategy & Legacy Planning | Manhattan Beach, CA",
  description:
    "Vardian Capital Partners helps families in Manhattan Beach and beyond protect their wealth, plan their legacy, and build lasting financial security. Education-first. Truth-driven.",
  alternates: { canonical: "https://vardiancapitalpartners.com" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Pillars />
      <MissionBand />
      <TrustSection />
      <HomeCTA />
    </>
  );
}
