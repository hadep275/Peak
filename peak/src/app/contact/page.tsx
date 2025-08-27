import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Contact Us - Peak',
  description: 'Get in touch with our e-commerce experts. Contact Peak for demos, pricing, and custom solutions.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <ContactSection />
      <Footer />
    </main>
  );
}
