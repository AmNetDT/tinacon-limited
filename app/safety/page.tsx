import type { Metadata } from "next";
import PageLayout from "../../src/components/layout/page-layout";
import CompanyStorySection from "../../src/features/about/components/company-story-section";

export const metadata: Metadata = {
  title: "Safety - Tinacon Limited",
  description:
    "Tinacon Limited is a Nigerian-owned engineering, construction, geosciences, and facilities management company established in 1987. With over three decades of experience, Tinacon has built a strong reputation for delivering high-quality, safe, and reliable engineering solutions across Nigeria.",
};

export default function SafetyPage() {
  return (
    <PageLayout title="Tinacon Limited - Safety">
      <CompanyStorySection />
    </PageLayout>
  );
}
