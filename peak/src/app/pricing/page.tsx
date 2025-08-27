import PricingSection from '@/components/PricingSection';
import ROICalculator from '@/components/ROICalculator';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Pricing - Peak',
  description: 'Transparent pricing for Peak e-commerce platform. Compare plans and calculate your ROI.',
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section for Pricing */}
      <section className="bg-gradient-to-br from-coffee-50 to-chocolate-50 dark:from-espresso-950 dark:to-coffee-950 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-coffee-900 dark:text-coffee-50 mb-4 md:mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg md:text-xl text-coffee-600 dark:text-coffee-200 max-w-3xl mx-auto px-4">
            Choose the plan that fits your business size and growth goals. All plans include our core features with no hidden fees.
          </p>
        </div>
      </section>

      <PricingSection />
      <ROICalculator />
      <Footer />
    </main>
  );
}
