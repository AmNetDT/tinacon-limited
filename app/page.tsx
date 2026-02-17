import PageLayout from "../src/components/layout/page-layout";
import HeroSection from "../src/features/home/components/hero-section";
import WhyUsSection from "../src/features/home/components/why-us-section";
import FeaturesSection from "../src/features/home/components/features-section";
import SecureAccessSection from "../src/features/home/components/secure-access-section";
import OurMissionSection from "@/features/home/components/our-mission";

export default function HomePage() {
  return (
    <PageLayout title="Tinacon Limited is a Nigerian-owned engineering powerhouse.">
      <HeroSection />
      <OurMissionSection />
      <SecureAccessSection />
      <WhyUsSection />
      <FeaturesSection />
    </PageLayout>
  );
}
