import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service - Peak',
  description: 'Peak terms of service and usage agreement.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-coffee-50 to-chocolate-50 dark:from-espresso-950 dark:to-coffee-950 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-coffee-900 dark:text-coffee-50 mb-4 md:mb-6">
            Terms of Service
          </h1>
          <p className="text-lg md:text-xl text-coffee-600 dark:text-coffee-200 max-w-3xl mx-auto px-4">
            Terms and conditions for using Peak services.
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
                <h2 className="text-2xl font-bold text-coffee-900 dark:text-coffee-50 mb-4">Acceptance of Terms</h2>
                <p className="text-coffee-700 dark:text-coffee-200">
                  By accessing and using Peak's website and services, you accept and agree to be bound
                  by the terms and provision of this agreement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-coffee-900 dark:text-coffee-50 mb-4">Use License</h2>
                <p className="text-coffee-700 dark:text-coffee-200">
                  Permission is granted to temporarily download one copy of Peak's materials for personal,
                  non-commercial transitory viewing only.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-coffee-900 dark:text-coffee-50 mb-4">Disclaimer</h2>
                <p className="text-coffee-700 dark:text-coffee-200">
                  The materials on Peak's website are provided on an 'as is' basis. Peak makes no warranties,
                  expressed or implied, and hereby disclaims and negates all other warranties including without
                  limitation, implied warranties or conditions of merchantability, fitness for a particular
                  purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-coffee-900 dark:text-coffee-50 mb-4">Limitations</h2>
                <p className="text-coffee-700 dark:text-coffee-200">
                  In no event shall Peak or its suppliers be liable for any damages (including, without
                  limitation, damages for loss of data or profit, or due to business interruption) arising
                  out of the use or inability to use Peak's materials.
                </p>
              </div>

              <div className="bg-coffee-50 dark:bg-coffee-900 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-coffee-900 dark:text-coffee-50 mb-4">Contact Information</h2>
                <p className="text-coffee-700 dark:text-coffee-200 mb-4">
                  If you have any questions about these Terms of Service, please contact us through our contact form.
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
