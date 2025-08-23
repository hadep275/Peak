'use client';

import { XMarkIcon, CheckIcon } from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

export default function ProblemSolutionSection() {
  const challenges = [
    {
      title: "Fragmented Systems",
      description: "Managing multiple tools for e-commerce, CRM, and analytics",
      pain: "Data silos, integration headaches, mounting subscription costs"
    },
    {
      title: "Limited Intelligence",
      description: "Basic platforms lack predictive insights and automation",
      pain: "Manual processes, missed opportunities, reactive decisions"
    },
    {
      title: "Scaling Bottlenecks",
      description: "Outgrowing basic platforms but can't afford enterprise solutions",
      pain: "Feature limitations, expensive upgrades, complex migrations"
    },
    {
      title: "Poor Customer View",
      description: "Incomplete customer data scattered across platforms",
      pain: "Missed personalization, poor retention, limited insights"
    }
  ];

  const solutions = [
    {
      title: "Unified Intelligence",
      description: "AI-powered insights and automation across all business functions",
      benefit: "Make smarter decisions with complete visibility"
    },
    {
      title: "Smart Pricing",
      description: "Enterprise features at mid-market pricing starting at $199/month",
      benefit: "Get more value without enterprise costs"
    },
    {
      title: "Rapid Deployment",
      description: "Launch in weeks with seamless data migration",
      benefit: "Start seeing results immediately"
    },
    {
      title: "Complete Platform",
      description: "E-commerce, CRM, analytics, and automation in one system",
      benefit: "Eliminate data silos and tool sprawl"
    }
  ];

  return (
    <section className="py-20 bg-coffee-50 dark:bg-espresso-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Growing Businesses Choose Peak
          </h2>
          <p className="text-xl text-coffee-600 dark:text-coffee-200 max-w-3xl mx-auto">
            Most e-commerce platforms force you to choose between simplicity and power.
            <br/>
            Peak gives you both in one unified solution.
          </p>
        </div>

        {/* Problem vs Solution Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Problems Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                <XMarkIcon className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Current Challenges</h3>
            </div>

            {challenges.map((challenge, index) => (
              <div key={index} className="bg-background border border-red-200 dark:border-red-800 rounded-xl p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-foreground mb-2">{challenge.title}</h4>
                <p className="text-coffee-600 dark:text-coffee-200 mb-3">{challenge.description}</p>
                <p className="text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 px-3 py-2 rounded-lg">
                  {challenge.pain}
                </p>
              </div>
            ))}
          </div>

          {/* Solutions Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <CheckIcon className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Peak Solution</h3>
            </div>

            {solutions.map((solution, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-green-100 dark:border-green-800 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{solution.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-3">{solution.description}</p>
                <p className="text-sm text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-3 py-2 rounded-lg">
                  {solution.benefit}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Before/After Comparison */}
        <div className="bg-background rounded-2xl shadow-lg overflow-hidden border border-coffee-200 dark:border-coffee-700">
          <div className="grid md:grid-cols-2">
            {/* Before */}
            <div className="p-8 bg-red-50 dark:bg-red-900/20">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                <XMarkIcon className="w-6 h-6 text-red-600 mr-2" />
                Before Peak
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-foreground">Multiple Tools</p>
                    <p className="text-sm text-coffee-600 dark:text-coffee-300">Shopify + CRM + Analytics + Email = $800+/month</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-foreground">Data Silos</p>
                    <p className="text-sm text-coffee-600 dark:text-coffee-300">Customer data scattered across platforms</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-foreground">Limited Insights</p>
                    <p className="text-sm text-coffee-600 dark:text-coffee-300">Basic reporting, no operational intelligence</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-foreground">Manual Processes</p>
                    <p className="text-sm text-coffee-600 dark:text-coffee-300">Time-consuming admin work</p>
                  </div>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="p-8 bg-green-50 dark:bg-green-900/20">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                <CheckIcon className="w-6 h-6 text-green-600 mr-2" />
                After Peak
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-foreground">Unified Platform</p>
                    <p className="text-sm text-coffee-600 dark:text-coffee-300">Everything in one place starting at $199/month</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-foreground">360° Customer View</p>
                    <p className="text-sm text-coffee-600 dark:text-coffee-300">Complete customer journey in one dashboard</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-foreground">Pulse Intelligence</p>
                    <p className="text-sm text-coffee-600 dark:text-coffee-300">AI-powered insights and predictions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-foreground">Automated Workflows</p>
                    <p className="text-sm text-coffee-600 dark:text-coffee-300">Save 10+ hours per week</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-coffee-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-coffee-700 transition-colors inline-flex items-center space-x-2">
            <span>See How It Works</span>
            <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
