'use client';

import { useState } from 'react';
import { CalculatorIcon } from '@heroicons/react/24/outline';

export default function ROICalculator() {
  const [revenue, setRevenue] = useState(500000);
  const [currentPlatform, setCurrentPlatform] = useState('enterprise');

  const platforms = {
    'enterprise': { name: 'Enterprise Platform', monthlyCost: 2000, setupCost: 10000 },
    'custom': { name: 'Custom Development', monthlyCost: 5000, setupCost: 75000 },
    'other': { name: 'Other Solutions', monthlyCost: 1200, setupCost: 25000 }
  };

  const peakCost = revenue < 1000000 ? 499 : 899;
  const peakSetup = revenue < 1000000 ? 4500 : 6000;

  const currentCost = platforms[currentPlatform as keyof typeof platforms] || platforms.enterprise;
  const monthlySavings = currentCost.monthlyCost - peakCost;
  const setupSavings = currentCost.setupCost - peakSetup;
  const annualSavings = monthlySavings * 12 + setupSavings;

  return (
    <section className="py-20 bg-white dark:bg-espresso-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-coffee-900 dark:text-coffee-50 mb-4">
            Calculate Your Savings
          </h2>
          <p className="text-xl text-coffee-600 dark:text-coffee-200 max-w-3xl mx-auto">
            See how much you could save by switching to Peak.
          </p>
        </div>

        <div className="bg-coffee-50 dark:bg-espresso-900 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calculator Inputs */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <CalculatorIcon className="w-8 h-8 text-coffee-600 dark:text-coffee-400" />
                <h3 className="text-2xl font-bold text-coffee-900 dark:text-coffee-50">ROI Calculator</h3>
              </div>

              <div>
                <label className="block text-sm font-medium text-coffee-700 dark:text-coffee-200 mb-2">
                  Annual Revenue
                </label>
                <input
                  type="range"
                  min="100000"
                  max="5000000"
                  step="50000"
                  value={revenue}
                  onChange={(e) => setRevenue(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="text-center mt-2 text-lg font-semibold text-coffee-900 dark:text-coffee-50">
                  ${revenue.toLocaleString()}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-coffee-700 dark:text-coffee-200 mb-2">
                  Current Platform
                </label>
                <select
                  value={currentPlatform}
                  onChange={(e) => setCurrentPlatform(e.target.value)}
                  className="w-full p-3 border border-coffee-300 dark:border-coffee-600 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-coffee-500 dark:bg-espresso-800 dark:text-coffee-50 bg-white text-coffee-900 dark:text-coffee-50"
                >
                  {Object.entries(platforms).map(([key, platform]) => (
                    <option key={key} value={key} className="bg-white dark:bg-espresso-800 text-coffee-900 dark:text-coffee-50">
                      {platform.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="bg-white dark:bg-espresso-800 rounded-lg p-6 border border-coffee-200 dark:border-coffee-700">
                <h4 className="font-semibold text-coffee-900 dark:text-coffee-50 mb-4">Cost Comparison</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-coffee-600 dark:text-coffee-200">Current Monthly Cost:</span>
                    <span className="font-semibold">${currentCost.monthlyCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-coffee-600 dark:text-coffee-200">Peak Monthly Cost:</span>
                    <span className="font-semibold text-green-600">${peakCost}</span>
                  </div>
                  <div className="flex justify-between border-t border-coffee-200 dark:border-coffee-600 pt-2">
                    <span className="text-coffee-600 dark:text-coffee-200">Monthly Savings:</span>
                    <span className="font-bold text-green-600">${monthlySavings.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-espresso-800 rounded-xl p-6 border-2 border-green-200 dark:border-green-700">
                <h4 className="text-lg font-semibold text-coffee-900 dark:text-coffee-50 mb-4">Your Savings</h4>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      ${annualSavings.toLocaleString()}
                    </div>
                    <div className="text-coffee-600 dark:text-coffee-200">Total First Year Savings</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-coffee-200 dark:border-coffee-600">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-coffee-900 dark:text-coffee-50">${monthlySavings.toLocaleString()}</div>
                      <div className="text-sm text-coffee-600 dark:text-coffee-200">Monthly Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-coffee-900 dark:text-coffee-50">${setupSavings.toLocaleString()}</div>
                      <div className="text-sm text-coffee-600 dark:text-coffee-200">Setup Savings</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-coffee-50 dark:bg-coffee-900/30 rounded-lg p-6">
                <h4 className="font-semibold text-coffee-900 dark:text-coffee-50 mb-3">Additional Benefits</h4>
                <ul className="space-y-2 text-sm text-coffee-700 dark:text-coffee-200">
                  <li>• Advanced CRM included (saves $200+/month)</li>
                  <li>• Email marketing platform (saves $150+/month)</li>
                  <li>• Operational intelligence (saves $300+/month)</li>
                  <li>• 24/7 support included (saves $500+/month)</li>
                </ul>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-coffee-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-coffee-700 transition-colors">
                  Get Custom Quote
                </button>
                <button className="w-full border border-coffee-300 dark:border-coffee-600 text-coffee-700 dark:text-coffee-200 py-3 px-6 rounded-lg font-semibold hover:bg-coffee-50 dark:hover:bg-coffee-900/20 transition-colors">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-coffee-600 dark:text-coffee-200 mb-4">
            Results are estimates based on typical usage. Actual savings may vary.
          </p>
          <p className="text-sm text-coffee-500 dark:text-coffee-300">
            Want a more detailed analysis? Our team can provide a custom ROI assessment for your business.
          </p>
        </div>
      </div>
    </section>
  );
}
