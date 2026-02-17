import type { Metadata } from 'next';
import PageLayout from '../../src/components/layout/page-layout';
import ContactFormSection from '../../src/features/contact/components/contact-form-section';

export const metadata: Metadata = {
  title: "Contact - GlobalBank",
  description: "Get in touch with our team for support and inquiries",
};

export default function ContactPage() {
  return (
    <PageLayout title="Contact - Global Bank">
      <ContactFormSection />
    </PageLayout>
  );
}