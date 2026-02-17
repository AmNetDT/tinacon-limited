import type { Metadata } from "next";
import PageLayout from "../../src/components/layout/page-layout";
import AboutHeroSection from "../../src/features/about/components/about-hero-section";
import CompanyStorySection from "../../src/features/about/components/company-story-section";
import WhyUsSection from "@/features/home/components/why-us-section";

export const metadata: Metadata = {
  title: "About Us - GlobalBank",
  description: "Learn about our mission, team, and company story",
};

export default function AboutPage() {
  return (
    <PageLayout title="About Us - Global Bank">
      <AboutHeroSection />
      <WhyUsSection />
      <CompanyStorySection />
    </PageLayout>
  );
}
