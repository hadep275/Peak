import Link from 'next/link';
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
          <div className="bg-white dark:bg-espresso-800 rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-coffee-600 dark:text-coffee-400 text-sm mb-8">
              <em>Last updated: {new Date().toLocaleDateString()}</em>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-coffee-900 dark:text-coffee-50 mb-4">Information We Collect</h2>
                <p className="text-coffee-700 dark:text-coffee-200 mb-4">
                  We collect information you provide directly to us, such as when you:
                </p>
                <ul className="space-y-2 text-coffee-700 dark:text-coffee-200">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-coffee-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Fill out our contact forms</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-coffee-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Subscribe to our newsletter</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-coffee-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Request a demo or pricing information</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-coffee-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Communicate with our support team</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-coffee-900 dark:text-coffee-50 mb-4">How We Use Your Information</h2>
                <p className="text-coffee-700 dark:text-coffee-200 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="space-y-2 text-coffee-700 dark:text-coffee-200">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-coffee-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Respond to your inquiries and provide customer support</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-coffee-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Send you marketing communications (with your consent)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-coffee-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Improve our website and services</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-coffee-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Comply with legal obligations</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-coffee-900 dark:text-coffee-50 mb-4">Information Sharing</h2>
                <p className="text-coffee-700 dark:text-coffee-200">
                  We do not sell, trade, or otherwise transfer your personal information to third parties
                  without your consent, except as described in this policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-coffee-900 dark:text-coffee-50 mb-4">Data Security</h2>
                <p className="text-coffee-700 dark:text-coffee-200">
                  We implement appropriate security measures to protect your personal information against
                  unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div className="bg-coffee-50 dark:bg-coffee-900 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-coffee-900 dark:text-coffee-50 mb-4">Contact Us</h2>
                <p className="text-coffee-700 dark:text-coffee-200 mb-4">
                  If you have any questions about this Privacy Policy, please contact us through our contact form.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-coffee-600 dark:text-coffee-400 hover:text-coffee-700 dark:hover:text-coffee-300 font-semibold"
                >
                  Contact Us →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
