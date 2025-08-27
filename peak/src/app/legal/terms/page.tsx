import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service - Peak',
  description: 'Peak terms of service and usage agreement.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-coffee-50 to-chocolate-50 dark:from-espresso-950 dark:to-coffee-950 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-coffee-900 dark:text-coffee-50 mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-coffee-600 dark:text-coffee-200 max-w-3xl mx-auto">
            Terms and conditions for using Peak services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p><em>Last updated: {new Date().toLocaleDateString()}</em></p>

            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using Peak's website and services, you accept and agree to be bound 
              by the terms and provision of this agreement.
            </p>

            <h2>Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of Peak's materials for personal, 
              non-commercial transitory viewing only.
            </p>

            <h2>Disclaimer</h2>
            <p>
              The materials on Peak's website are provided on an 'as is' basis. Peak makes no warranties, 
              expressed or implied, and hereby disclaims and negates all other warranties including without 
              limitation, implied warranties or conditions of merchantability, fitness for a particular 
              purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2>Limitations</h2>
            <p>
              In no event shall Peak or its suppliers be liable for any damages (including, without 
              limitation, damages for loss of data or profit, or due to business interruption) arising 
              out of the use or inability to use Peak's materials.
            </p>

            <h2>Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us through our 
              contact form.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
