import type { Metadata } from "next";
import { ApplicationScenarios } from "@/components/home/ApplicationScenarios";
import { CoreCapabilities } from "@/components/home/CoreCapabilities";
import { HeroSection } from "@/components/home/HeroSection";
import { HomeCTA } from "@/components/home/HomeCTA";
import { ProductComposition } from "@/components/home/ProductComposition";
import { ScenarioStrip } from "@/components/home/ScenarioStrip";
import { WhyChoose } from "@/components/home/WhyChoose";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "FieldSense 场感｜近场扫描系统与电磁云图分析平台",
  description: siteConfig.seo.defaultDescription,
  keywords: siteConfig.seo.keywords
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ScenarioStrip />
      <CoreCapabilities />
      <ApplicationScenarios />
      <ProductComposition />
      <WhyChoose />
      <HomeCTA />
    </>
  );
}

