import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import ProblemSolutionSection from '@/components/ProblemSolutionSection';
import FeaturesSection from '@/components/FeaturesSection';
import ComparisonSection from '@/components/ComparisonSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-all duration-300">
      <HeroSection />
      <ProblemSolutionSection />
      <FeaturesSection />
      <ComparisonSection />
      <CaseStudiesSection />
      <FAQSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-coffee-600 to-chocolate-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ color: 'white' }}>
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            Join hundreds of businesses that have already made the smart choice with Peak.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-coffee-600 px-8 py-4 rounded-lg font-semibold hover:bg-coffee-50 transition-colors shadow-lg"
            >
              Get Started Today
            </Link>
            <Link
              href="/pricing"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-coffee-600 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
