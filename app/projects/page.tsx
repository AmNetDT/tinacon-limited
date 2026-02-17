import type { Metadata } from "next";
import PageLayout from "../../src/components/layout/page-layout";
import ProjectsSection from "../../src/features/projects/components/projects-section";

export const metadata: Metadata = {
  title: "Projects - Tinacon Limited",
  description:
    "Stay updated with the latest projects and insights from Tinacon Limited. Explore our innovative solutions and industry expertise.",
};

export default function BlogPage() {
  return (
    <PageLayout title="Projects - Tinacon Limited">
      <ProjectsSection />
    </PageLayout>
  );
}
