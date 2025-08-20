'use client';

import ContactForm from './ContactForm';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function ContactSection() {
  const contactInfo = [
    {
      icon: PhoneIcon,
      title: "Phone",
      details: "1-800-PEAK-123",
      subtext: "Mon-Fri 9AM-6PM PST"
    },
    {
      icon: EnvelopeIcon,
      title: "Email",
      details: "hello@peak.com",
      subtext: "We respond within 24 hours"
    },
    {
      icon: MapPinIcon,
      title: "Office",
      details: "San Francisco, CA",
      subtext: "Remote-first company"
    },
    {
      icon: ClockIcon,
      title: "Response Time",
      details: "< 24 hours",
      subtext: "Average response time"
    }
  ];

  return (
    <section className="py-20 bg-coffee-50 dark:bg-espresso-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-coffee-600 dark:text-coffee-200 max-w-3xl mx-auto">
            Contact our team to discuss your specific needs and see how Peak can transform your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <p className="text-gray-600 mb-8">
                Our team of e-commerce experts is here to help you find the perfect solution for your business. 
                Whether you need a demo, have questions about pricing, or want to discuss a custom implementation, 
                we&apos;re here to help.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="bg-background rounded-xl p-6 shadow-sm border border-coffee-200 dark:border-coffee-700">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-coffee-100 dark:bg-coffee-800 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-coffee-600 dark:text-coffee-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        <p className="text-foreground font-medium">{info.details}</p>
                        <p className="text-sm text-coffee-600 dark:text-coffee-300">{info.subtext}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="bg-coffee-50 dark:bg-coffee-900/20 rounded-xl p-6 border border-coffee-200 dark:border-coffee-700">
              <h4 className="font-semibold text-foreground mb-3">What to Expect</h4>
              <ul className="space-y-2 text-sm text-coffee-700 dark:text-coffee-200">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-coffee-600 rounded-full mt-2"></div>
                  <span>Personalized demo tailored to your business needs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-coffee-600 rounded-full mt-2"></div>
                  <span>Detailed pricing and implementation timeline</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-coffee-600 rounded-full mt-2"></div>
                  <span>Migration strategy from your current platform</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-coffee-600 rounded-full mt-2"></div>
                  <span>ROI analysis and cost comparison</span>
                </li>
              </ul>
            </div>

            {/* Testimonial */}
            <div className="bg-background rounded-xl p-6 border-l-4 border-coffee-600 shadow-sm">
              <blockquote className="text-coffee-700 dark:text-coffee-200 italic mb-4">
                "                &ldquo;The Peak team was incredibly helpful throughout our migration. They understood our needs
                and delivered exactly what we were looking for.&rdquo;"
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-coffee-600 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white font-semibold text-sm">LR</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Luma Rae</div>
                  <div className="text-sm text-coffee-600 dark:text-coffee-300">CEO, Peak Skincare</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm 
              formType="contact"
              title="Let's Talk"
              description="Fill out the form below and we'll get back to you within 24 hours."
            />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-coffee-600 to-chocolate-700 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              Prefer to Talk Directly?
            </h3>
            <p className="text-coffee-100 mb-6 max-w-2xl mx-auto">
              Schedule a call with our team to discuss your specific needs and get answers to all your questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:1-800-PEAK-123"
                className="bg-white text-coffee-600 px-8 py-3 rounded-lg font-semibold hover:bg-coffee-50 transition-colors inline-flex items-center justify-center space-x-2 shadow-md"
              >
                <PhoneIcon className="w-5 h-5" />
                <span>Call Now</span>
              </a>
              <a
                href="mailto:hello@peak.com"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-coffee-600 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <EnvelopeIcon className="w-5 h-5" />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
