'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "How long does it take to set up Peak Commerce?",
          answer: "Most businesses are up and running within 2-4 weeks. This includes data migration, customization, and team training. Our setup process is streamlined to minimize downtime."
        },
        {
          question: "Can you migrate my existing data from Shopify/WooCommerce?",
          answer: "Yes! We provide complete data migration services including products, customers, orders, and historical data. Our migration specialists ensure zero data loss and minimal downtime."
        },
        {
          question: "What's included in the setup fee?",
          answer: "Setup fees cover platform configuration, data migration, custom integrations, team training, and go-live support. No hidden costs or surprise charges."
        }
      ]
    },
    {
      category: "Features & Functionality",
      questions: [
        {
          question: "What makes Pulse Intelligence different?",
          answer: "Pulse Intelligence uses AI to analyze your business data and provide predictive insights, automated alerts, and actionable recommendations. It's like having a business analyst working 24/7."
        },
        {
          question: "How does the CRM integration work?",
          answer: "Our CRM is built directly into the platform, providing a complete 360° view of each customer including purchase history, communication logs, support tickets, and predictive analytics."
        },
        {
          question: "Can I integrate with my existing tools?",
          answer: "Yes! We offer integrations with QuickBooks, major shipping carriers, email platforms, and hundreds of other business tools through our API and Zapier connections."
        }
      ]
    },
    {
      category: "Pricing & Plans",
      questions: [
        {
          question: "Are there any hidden fees or long-term contracts?",
          answer: "No hidden fees! Our pricing is transparent with month-to-month billing. Setup fees are one-time only. You can upgrade, downgrade, or cancel anytime with 30 days notice."
        },
        {
          question: "What happens if I exceed my plan limits?",
          answer: "We'll notify you before you reach limits and help you upgrade to the appropriate plan. No surprise overage charges - we believe in transparent, predictable pricing."
        },
        {
          question: "Do you offer discounts for annual payments?",
          answer: "Yes! Save 15% with annual billing. We also offer special pricing for non-profits and startups. Contact our team for custom pricing options."
        }
      ]
    },
    {
      category: "Support & Training",
      questions: [
        {
          question: "What kind of support do you provide?",
          answer: "All plans include email support. Professional and Enterprise plans get priority support. Enterprise customers get 24/7 phone support and a dedicated account manager."
        },
        {
          question: "Do you provide training for my team?",
          answer: "Yes! We provide comprehensive training including video tutorials, live training sessions, and documentation. Enterprise customers get custom training programs."
        },
        {
          question: "What's your uptime guarantee?",
          answer: "We guarantee 99.9% uptime with our Enterprise plan. Our infrastructure is built on AWS with automatic failover and daily backups to ensure your business never stops."
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about Peak Commerce.
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-background rounded-2xl shadow-sm overflow-hidden border border-coffee-200 dark:border-coffee-700">
              <div className="bg-gray-50 px-6 py-4 border-b">
                <h3 className="text-lg font-semibold text-gray-900">{category.category}</h3>
              </div>
              
              <div className="divide-y divide-gray-200">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 10 + faqIndex; // Simple way to create unique indices
                  const isOpen = openFAQ === globalIndex;
                  
                  return (
                    <div key={faqIndex}>
                      <button
                        className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                        onClick={() => setOpenFAQ(isOpen ? null : globalIndex)}
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-medium text-gray-900 pr-4">
                            {faq.question}
                          </h4>
                          <ChevronDownIcon 
                            className={`w-5 h-5 text-gray-500 transition-transform ${
                              isOpen ? 'transform rotate-180' : ''
                            }`}
                          />
                        </div>
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-coffee-50 dark:bg-coffee-900/20 rounded-xl p-8 border border-coffee-200 dark:border-coffee-700">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h3>
            <p className="text-coffee-600 dark:text-coffee-200 mb-6">
              Our team is here to help you find the perfect solution for your business.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-coffee-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-coffee-700 transition-colors shadow-md"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
