import type { Metadata } from "next";
import PageLayout from "../../src/components/layout/page-layout";
import OpenPositionsSection from "@/features/about/components/open-positions-section";

export const metadata: Metadata = {
  title: "Pricing - GlobalBank",
  description: "Choose the perfect plan for your banking needs",
};

export default function PricingPage() {
  return (
    <PageLayout title="Tinacon Limited - Services">
      <OpenPositionsSection />
    </PageLayout>
  );
}
