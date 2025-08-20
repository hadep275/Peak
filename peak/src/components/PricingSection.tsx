'use client';

import React from 'react';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: 199,
      setupFee: 3000,
      description: "Perfect for growing businesses ready to scale",
      popular: false,
      features: [
        "Complete E-commerce Platform",
        "Basic Admin Dashboard",
        "Product Management",
        "Order Processing",
        "Customer Management",
        "Basic Analytics",
        "Email Support",
        "SSL Certificate",
        "Mobile Responsive",
        "Payment Processing"
      ],
      notIncluded: [
        "Advanced CRM",
        "Pulse Intelligence",
        "Email Marketing",
        "Advanced Analytics",
        "QuickBooks Integration",
        "Priority Support"
      ]
    },
    {
      name: "Professional",
      price: 499,
      setupFee: 4500,
      description: "Most popular choice for serious businesses",
      popular: true,
      features: [
        "Everything in Starter",
        "Advanced CRM System",
        "Customer Segmentation",
        "Advanced Analytics",
        "Email Marketing Platform",
        "Automated Workflows",
        "Inventory Management",
        "Multi-location Support",
        "API Access",
        "Priority Support",
        "Custom Reporting",
        "A/B Testing"
      ],
      notIncluded: [
        "Pulse Intelligence",
        "QuickBooks Integration",
        "White-label Options",
        "Dedicated Account Manager"
      ]
    },
    {
      name: "Enterprise",
      price: 899,
      setupFee: 6000,
      description: "Complete solution with operational intelligence",
      popular: false,
      features: [
        "Everything in Professional",
        "Pulse Operational Intelligence",
        "Predictive Analytics",
        "QuickBooks Integration",
        "Advanced Automation",
        "Custom Integrations",
        "White-label Options",
        "Dedicated Account Manager",
        "24/7 Phone Support",
        "Custom Training",
        "SLA Guarantee",
        "Advanced Security"
      ],
      notIncluded: []
    }
  ];

  const comparisonFeatures = [
    { category: "E-commerce Core", features: [
      "Product Management",
      "Order Processing", 
      "Payment Processing",
      "Mobile Responsive",
      "SSL Certificate"
    ]},
    { category: "Customer Management", features: [
      "Basic Customer Profiles",
      "Advanced CRM",
      "Customer Segmentation",
      "Lifetime Value Tracking",
      "Communication History"
    ]},
    { category: "Analytics & Intelligence", features: [
      "Basic Analytics",
      "Advanced Analytics", 
      "Custom Reporting",
      "Pulse Intelligence",
      "Predictive Analytics"
    ]},
    { category: "Marketing", features: [
      "Email Marketing",
      "Automated Workflows",
      "A/B Testing",
      "Customer Segmentation",
      "Behavioral Triggers"
    ]},
    { category: "Operations", features: [
      "Inventory Management",
      "Multi-location Support",
      "QuickBooks Integration",
      "Advanced Automation",
      "Custom Integrations"
    ]},
    { category: "Support", features: [
      "Email Support",
      "Priority Support",
      "24/7 Phone Support",
      "Dedicated Account Manager",
      "Custom Training"
    ]}
  ];

  return (
    <section id="pricing" className="py-20 bg-coffee-50 dark:bg-espresso-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-coffee-900 dark:text-coffee-50 mb-4">
            Transparent Pricing for Every Stage
          </h2>
          <p className="text-xl text-coffee-600 dark:text-coffee-200 max-w-3xl mx-auto">
            No hidden fees, no surprises. Choose the plan that fits your business size and growth stage.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-espresso-900 rounded-2xl shadow-lg overflow-hidden ${
                plan.popular ? 'ring-2 ring-coffee-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-coffee-600 text-white text-center py-2 text-sm font-semibold">
                  <div className="flex items-center justify-center space-x-1">
                    <StarIcon className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
              
              <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                <h3 className="text-2xl font-bold text-coffee-900 dark:text-coffee-50 mb-2">{plan.name}</h3>
                <p className="text-coffee-600 dark:text-coffee-200 mb-6">{plan.description}</p>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-coffee-900 dark:text-coffee-50">${plan.price}</span>
                    <span className="text-coffee-600 dark:text-coffee-200 ml-2">/month</span>
                  </div>
                  <p className="text-sm text-coffee-500 dark:text-coffee-300 mt-1">
                    Setup fee: ${plan.setupFee.toLocaleString()}
                  </p>
                </div>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors mb-8 ${
                  plan.popular
                    ? 'bg-coffee-600 text-white hover:bg-coffee-700'
                    : 'bg-coffee-100 dark:bg-espresso-800 text-coffee-900 dark:text-coffee-100 hover:bg-coffee-200 dark:hover:bg-espresso-700'
                }`}>
                  Get Started
                </button>

                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <CheckIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-coffee-700 dark:text-coffee-200 text-sm">{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3 opacity-50">
                      <XMarkIcon className="w-5 h-5 text-coffee-400 dark:text-coffee-500 mt-0.5 flex-shrink-0" />
                      <span className="text-coffee-500 dark:text-coffee-400 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>



        {/* Feature Comparison Table */}
        <div className="bg-white dark:bg-espresso-900 rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-coffee-900 dark:text-coffee-50 mb-8 text-center">
              Detailed Feature Comparison
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-coffee-200 dark:border-coffee-700">
                    <th className="text-left py-4 px-4 font-semibold text-coffee-900 dark:text-coffee-50">Features</th>
                    <th className="text-center py-4 px-4 font-semibold text-coffee-900 dark:text-coffee-50">Starter</th>
                    <th className="text-center py-4 px-4 font-semibold text-coffee-900 dark:text-coffee-50 bg-coffee-50 dark:bg-coffee-800">Professional</th>
                    <th className="text-center py-4 px-4 font-semibold text-coffee-900 dark:text-coffee-50">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((category, categoryIndex) => (
                    <React.Fragment key={categoryIndex}>
                      <tr className="bg-coffee-50 dark:bg-coffee-800">
                        <td colSpan={4} className="py-3 px-4 font-semibold text-coffee-900 dark:text-coffee-50 text-sm uppercase tracking-wide">
                          {category.category}
                        </td>
                      </tr>
                      {category.features.map((feature, featureIndex) => (
                        <tr key={`${categoryIndex}-${featureIndex}`} className="border-b border-coffee-100 dark:border-coffee-700">
                          <td className="py-3 px-4 text-coffee-700 dark:text-coffee-200">{feature}</td>
                          <td className="py-3 px-4 text-center">
                            {plans[0].features.includes(feature) ? (
                              <CheckIcon className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <XMarkIcon className="w-5 h-5 text-coffee-300 dark:text-coffee-600 mx-auto" />
                            )}
                          </td>
                          <td className="py-3 px-4 text-center bg-coffee-50 dark:bg-coffee-800">
                            {plans[1].features.includes(feature) || plans[1].features.includes("Everything in Starter") ? (
                              <CheckIcon className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <XMarkIcon className="w-5 h-5 text-coffee-300 dark:text-coffee-600 mx-auto" />
                            )}
                          </td>
                          <td className="py-3 px-4 text-center">
                            <CheckIcon className="w-5 h-5 text-green-500 mx-auto" />
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-coffee-900 dark:text-coffee-50 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-coffee-600 dark:text-coffee-200 mb-6">
            Schedule a call with our team to discuss your specific needs and get a custom quote.
          </p>
          <button className="bg-coffee-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-coffee-700 transition-colors">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
