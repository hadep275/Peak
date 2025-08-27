'use client';

import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function ComparisonSection() {
  const comparisons = [
    {
      title: "vs Enterprise Platforms",
      subtitle: "Enterprise features without enterprise complexity",
      features: [
        { name: "Monthly Cost", peak: "$499-899", competitor: "$2,000+", advantage: "peak" },
        { name: "Setup Time", peak: "2-4 weeks", competitor: "3-6 months", advantage: "peak" },
        { name: "CRM Included", peak: true, competitor: false, advantage: "peak" },
        { name: "AI Intelligence", peak: true, competitor: false, advantage: "peak" },
        { name: "Email Marketing", peak: true, competitor: "Extra cost", advantage: "peak" },
        { name: "Custom Features", peak: "Included", competitor: "$50K+", advantage: "peak" }
      ]
    },
    {
      title: "vs Custom Development",
      subtitle: "Ready-to-use vs build from scratch",
      features: [
        { name: "Initial Cost", peak: "$3K-6K", competitor: "$50K+", advantage: "peak" },
        { name: "Time to Launch", peak: "2-4 weeks", competitor: "6-12 months", advantage: "peak" },
        { name: "Ongoing Maintenance", peak: "Included", competitor: "$10K+/month", advantage: "peak" },
        { name: "Updates & Features", peak: "Automatic", competitor: "Custom dev needed", advantage: "peak" },
        { name: "Support", peak: "24/7 included", competitor: "Extra cost", advantage: "peak" },
        { name: "Scalability", peak: "Built-in", competitor: "Requires planning", advantage: "peak" }
      ]
    }
  ];

  return (
    <section id="comparison" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Peak Outperforms Alternatives
          </h2>
          <p className="text-xl text-coffee-600 dark:text-coffee-200 max-w-3xl mx-auto">
            See why businesses choose Peak over expensive enterprise platforms and custom development.
          </p>
        </div>

        <div className="space-y-12">
          {comparisons.map((comparison, index) => (
            <div key={index} className="bg-coffee-50 dark:bg-espresso-900 rounded-2xl overflow-hidden shadow-lg">
              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-coffee-900 dark:text-coffee-50 mb-2">{comparison.title}</h3>
                  <p className="text-coffee-600 dark:text-coffee-200">{comparison.subtitle}</p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-coffee-200 dark:border-coffee-700">
                        <th className="text-left py-4 px-4 font-semibold text-coffee-900 dark:text-coffee-50">Feature</th>
                        <th className="text-center py-4 px-4 font-semibold text-coffee-600 dark:text-coffee-400">Peak</th>
                        <th className="text-center py-4 px-4 font-semibold text-coffee-900 dark:text-coffee-50">Alternative</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparison.features.map((feature, featureIndex) => (
                        <tr key={featureIndex} className="border-b border-coffee-100 dark:border-coffee-800">
                          <td className="py-4 px-4 font-medium text-coffee-900 dark:text-coffee-50">{feature.name}</td>
                          <td className="py-4 px-4 text-center">
                            {typeof feature.peak === 'boolean' ? (
                              feature.peak ? (
                                <CheckIcon className="w-6 h-6 text-green-500 mx-auto" />
                              ) : (
                                <XMarkIcon className="w-6 h-6 text-red-500 mx-auto" />
                              )
                            ) : (
                              <span className={`font-semibold ${
                                feature.advantage === 'peak' ? 'text-green-600 dark:text-green-400' : 'text-coffee-900 dark:text-coffee-50'
                              }`}>
                                {feature.peak}
                              </span>
                            )}
                          </td>
                          <td className="py-4 px-4 text-center">
                            {typeof feature.competitor === 'boolean' ? (
                              feature.competitor ? (
                                <CheckIcon className="w-6 h-6 text-green-500 mx-auto" />
                              ) : (
                                <XMarkIcon className="w-6 h-6 text-red-500 mx-auto" />
                              )
                            ) : (
                              <span className={`font-semibold ${
                                feature.advantage === 'competitor' ? 'text-green-600 dark:text-green-400' : 'text-coffee-600 dark:text-coffee-300'
                              }`}>
                                {feature.competitor}
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="rounded-2xl p-8 shadow-xl" style={{ background: 'linear-gradient(to right, #af6f3e, #87543f)' }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'white' }}>Ready to Make the Switch?</h3>
            <p className="mb-6 max-w-2xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Join hundreds of businesses that have already made the smart choice.
            </p>
            <button
              onClick={() => document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-coffee-600 px-8 py-3 rounded-lg font-semibold hover:bg-coffee-50 transition-colors shadow-lg"
            >
              Start Your Migration
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
