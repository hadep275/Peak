'use client';

import { ArrowUpIcon, ClockIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

export default function CaseStudiesSection() {
  const caseStudies = [
    {
      company: "Peak Skincare",
      industry: "Beauty & Wellness",
      size: "Mid-market",
      logo: null,
      image: null,
      challenge: "Outgrew basic e-commerce platform, needed advanced CRM and operational insights",
      solution: "Migrated to Peak Professional plan with full CRM integration",
      results: [
        { metric: "Revenue Growth", value: "150%", period: "12 months" },
        { metric: "Customer Retention", value: "85%", period: "vs 60% before" },
        { metric: "Time Saved", value: "15 hours", period: "per week" },
        { metric: "Conversion Rate", value: "3.2%", period: "vs 1.8% before" }
      ],
      testimonial: {
        quote: "Peak transformed our business operations. The integrated CRM and AI intelligence gave us insights we never had before.",
        author: "Luma Rae",
        title: "Founder & CEO"
      }
    },
    {
      company: "Artisan Bakery Co.",
      industry: "Food & Beverage",
      size: "Small Business",
      logo: null,
      image: null,
      challenge: "Managing inventory across multiple locations with basic tools",
      solution: "Implemented Peak with multi-location inventory management",
      results: [
        { metric: "Inventory Accuracy", value: "99.5%", period: "vs 85% before" },
        { metric: "Waste Reduction", value: "40%", period: "through better forecasting" },
        { metric: "Order Processing", value: "3x faster", period: "automated workflows" },
        { metric: "Customer Satisfaction", value: "4.9/5", period: "improved fulfillment" }
      ],
      testimonial: {
        quote: "The inventory management and forecasting features have revolutionized how we operate. We've cut waste by 40% and never run out of popular items.",
        author: "Mike Chen",
        title: "Operations Manager"
      }
    }
  ];

  const metrics = [
    { label: "Average Revenue Increase", value: "127%", icon: ArrowUpIcon },
    { label: "Time Saved Per Week", value: "12 hrs", icon: ClockIcon },
    { label: "ROI Within", value: "6 months", icon: CurrencyDollarIcon }
  ];

  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Real Results from Real Businesses
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See how businesses like yours have transformed their operations and accelerated growth with Peak.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="w-12 h-12 bg-coffee-100 dark:bg-coffee-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-coffee-600 dark:text-coffee-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            );
          })}
        </div>

        {/* Case Studies */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Content */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-coffee-600 to-chocolate-700 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{study.company.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-coffee-50">{study.company}</h3>
                      <p className="text-gray-600 dark:text-coffee-200">{study.industry} • {study.size}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Results</h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="bg-gray-50 rounded-lg p-4">
                            <div className="text-2xl font-bold text-coffee-600 dark:text-coffee-400">{result.value}</div>
                            <div className="text-sm font-medium text-gray-900">{result.metric}</div>
                            <div className="text-xs text-gray-600">{result.period}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-coffee-50 dark:bg-coffee-900/20 rounded-lg p-6 border border-coffee-200 dark:border-coffee-700">
                      <blockquote className="text-coffee-700 dark:text-coffee-200 italic mb-4">
                        "{study.testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-coffee-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-sm">
                            {study.testimonial.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{study.testimonial.author}</div>
                          <div className="text-sm text-coffee-600 dark:text-coffee-300">{study.testimonial.title}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dashboard Preview */}
                <div className="p-8 lg:p-12 flex items-center">
                  <div className="w-full bg-gradient-to-br from-coffee-100 to-chocolate-100 dark:from-coffee-900 dark:to-chocolate-900 rounded-xl shadow-lg p-8 min-h-[300px] flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-coffee-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                        <span className="text-white font-bold text-xl">{study.company.charAt(0)}</span>
                      </div>
                      <p className="text-coffee-700 dark:text-coffee-200 font-medium">Dashboard Preview</p>
                      <p className="text-coffee-600 dark:text-coffee-300 text-sm mt-2">{study.company} Analytics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-coffee-600 to-chocolate-700 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-coffee-100 mb-6 max-w-2xl mx-auto">
              Join these successful businesses and see what Peak can do for your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-coffee-600 px-8 py-3 rounded-lg font-semibold hover:bg-coffee-50 transition-colors shadow-md">
                Schedule Demo
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-coffee-600 transition-colors">
                Download Case Study
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
