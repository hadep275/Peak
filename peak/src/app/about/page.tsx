import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { CheckIcon, RocketLaunchIcon, HeartIcon, LightBulbIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'About Us - Peak',
  description: 'Learn about Peak - the e-commerce platform built for growing businesses.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen relative">
      {/* Hero Section with Integrated Background Logo */}
      <section className="relative bg-gradient-to-br from-coffee-50 to-chocolate-50 dark:from-espresso-950 dark:to-coffee-950 py-20 md:py-32 overflow-hidden">
        {/* Background Logo - Integrated into the background, positioned behind text */}
        <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center">
          <Image
            src="/Peak-logo.png"
            alt="Peak Logo Background"
            width={1200}
            height={1200}
            className="object-contain opacity-15 dark:opacity-15"
            style={{
              width: 'clamp(800px, 150vw, 1200px)',
              height: 'clamp(800px, 150vh, 1200px)'
            }}
          />

          {/* Large screen version */}
          <Image
            src="/Peak-logo.png"
            alt="Peak Logo Background"
            width={1200}
            height={1200}
            className="hidden lg:block object-contain opacity-15 dark:opacity-15"
            style={{
              width: '2200vw',
              height: '2200vh'
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-coffee-900 dark:text-coffee-50 mb-8">
            About Peak
          </h1>
          <p className="text-xl md:text-2xl text-coffee-600 dark:text-coffee-200 max-w-4xl mx-auto leading-relaxed">
            We're building the future of e-commerce platforms for growing businesses.
            <span className="block mt-2 text-lg md:text-xl">
              Simple, powerful, and designed to scale with your success.
            </span>
          </p>
        </div>
      
      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-coffee-900 dark:text-coffee-50 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-coffee-600 dark:text-coffee-200 max-w-4xl mx-auto leading-relaxed">
              Peak was founded with a simple mission: to provide growing businesses with enterprise-level
              e-commerce capabilities without the enterprise complexity and cost.
            </p>
          </div>
        </div>
      </section>


      {/* Values Section */}
      <section className="py-20 bg-coffee-50 dark:bg-espresso-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-coffee-900 dark:text-coffee-50 mb-6">
              What We Believe In
            </h2>
            <p className="text-xl text-coffee-600 dark:text-coffee-200 max-w-3xl mx-auto">
              Our core values drive everything we do, from product development to customer support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white dark:bg-espresso-800 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-coffee-100 dark:bg-coffee-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <LightBulbIcon className="w-8 h-8 text-coffee-600 dark:text-coffee-400" />
              </div>
              <h3 className="text-xl font-bold text-coffee-900 dark:text-coffee-50 mb-3">Simplicity</h3>
              <p className="text-coffee-600 dark:text-coffee-200">
                Complex features made simple to use. No technical degree required.
              </p>
            </div>

            <div className="text-center p-6 bg-white dark:bg-espresso-800 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-coffee-100 dark:bg-coffee-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <RocketLaunchIcon className="w-8 h-8 text-coffee-600 dark:text-coffee-400" />
              </div>
              <h3 className="text-xl font-bold text-coffee-900 dark:text-coffee-50 mb-3">Scalability</h3>
              <p className="text-coffee-600 dark:text-coffee-200">
                Grow from startup to enterprise on one platform. No migration headaches.
              </p>
            </div>

            <div className="text-center p-6 bg-white dark:bg-espresso-800 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-coffee-100 dark:bg-coffee-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckIcon className="w-8 h-8 text-coffee-600 dark:text-coffee-400" />
              </div>
              <h3 className="text-xl font-bold text-coffee-900 dark:text-coffee-50 mb-3">Transparency</h3>
              <p className="text-coffee-600 dark:text-coffee-200">
                Clear pricing, no hidden fees. What you see is what you get.
              </p>
            </div>

            <div className="text-center p-6 bg-white dark:bg-espresso-800 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-coffee-100 dark:bg-coffee-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartIcon className="w-8 h-8 text-coffee-600 dark:text-coffee-400" />
              </div>
              <h3 className="text-xl font-bold text-coffee-900 dark:text-coffee-50 mb-3">Support</h3>
              <p className="text-coffee-600 dark:text-coffee-200">
                Real humans helping real businesses. We're here when you need us.
              </p>
            </div>
          </div>
        </div>
      </section>
</section>
      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-coffee-900 dark:text-coffee-50 mb-6">
                Why Peak Exists
              </h2>
              <div className="space-y-6 text-lg text-coffee-600 dark:text-coffee-200">
                <p>
                  After years of working with businesses struggling with platform limitations, we realized
                  there was a gap in the market. Existing solutions were either too basic for growing companies
                  or too complex and expensive for mid-market businesses.
                </p>
                <p>
                  We saw talented entrepreneurs held back by their technology, not their ideas.
                  That's when we decided to build something different.
                </p>
                <p>
                  Peak bridges that gap - giving you enterprise-level capabilities with startup-friendly
                  simplicity and pricing.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-coffee-100 to-chocolate-100 dark:from-coffee-800 to-chocolate-800 rounded-2xl p-8 shadow-xl">
                <div className="text-center">
                  <Image
                    src="/Peak-logo.png"
                    alt="Peak Logo"
                    width={160}
                    height={160}
                    className="w-32 h-32 md:w-40 md:h-40 object-contain mx-auto mb-6"
                  />
                  <blockquote className="text-xl font-medium text-coffee-900 dark:text-coffee-50 mb-4">
                    "Technology should empower your business, not limit it."
                  </blockquote>
                  <p className="text-coffee-600 dark:text-coffee-200">— The Peak Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & CTA Section */}
      <section className="py-20" style={{ background: 'linear-gradient(to right, #af6f3e, #87543f)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'white' }}>
            Based in Calgary, Serving the World
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            We're proudly based in Calgary, Alberta, Canada, but we serve businesses globally.
            Our remote-first approach means we can work with you wherever you are.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-coffee-600 px-8 py-4 rounded-lg font-semibold hover:bg-coffee-50 transition-colors shadow-lg"
            >
              Get in Touch
            </Link>
            <Link
              href="/pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-coffee-600 transition-colors"
            >
              See Our Plans
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
