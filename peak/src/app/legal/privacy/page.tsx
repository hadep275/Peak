import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy - Peak',
  description: 'Peak privacy policy and data protection information.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-coffee-50 to-chocolate-50 dark:from-espresso-950 dark:to-coffee-950 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-coffee-900 dark:text-coffee-50 mb-4 md:mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-coffee-600 dark:text-coffee-200 max-w-3xl mx-auto px-4">
            How we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert mx-auto text-coffee-900 dark:text-coffee-50">
            <p><em>Last updated: {new Date().toLocaleDateString()}</em></p>

            <h2>Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you:
            </p>
            <ul>
              <li>Fill out our contact forms</li>
              <li>Subscribe to our newsletter</li>
              <li>Request a demo or pricing information</li>
              <li>Communicate with our support team</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy.
            </p>

            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us through our 
              contact form.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
