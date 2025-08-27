import Footer from '@/components/Footer';

export const metadata = {
  title: 'About Us - Peak',
  description: 'Learn about Peak - the e-commerce platform built for growing businesses.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-coffee-50 to-chocolate-50 dark:from-espresso-950 dark:to-coffee-950 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-coffee-900 dark:text-coffee-50 mb-6">
            About Peak
          </h1>
          <p className="text-xl text-coffee-600 dark:text-coffee-200 max-w-3xl mx-auto">
            We're building the future of e-commerce platforms for growing businesses.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <h2>Our Mission</h2>
            <p>
              Peak was founded with a simple mission: to provide growing businesses with enterprise-level 
              e-commerce capabilities without the enterprise complexity and cost.
            </p>

            <h2>Why Peak?</h2>
            <p>
              After years of working with businesses struggling with platform limitations, we realized 
              there was a gap in the market. Existing solutions were either too basic for growing companies 
              or too complex and expensive for mid-market businesses.
            </p>

            <h2>Our Approach</h2>
            <p>
              We believe in:
            </p>
            <ul>
              <li><strong>Simplicity</strong> - Complex features made simple to use</li>
              <li><strong>Scalability</strong> - Grow from startup to enterprise on one platform</li>
              <li><strong>Transparency</strong> - Clear pricing, no hidden fees</li>
              <li><strong>Support</strong> - Real humans helping real businesses</li>
            </ul>

            <h2>Based in Calgary</h2>
            <p>
              We're proudly based in Calgary, Alberta, Canada, but we serve businesses globally. 
              Our remote-first approach means we can work with you wherever you are.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
