'use client';

import { useState } from 'react';
import { 
  CogIcon, 
  UserGroupIcon, 
  ChartBarIcon, 
  EnvelopeIcon,
  TruckIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  BoltIcon
} from '@heroicons/react/24/outline';

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      icon: CogIcon,
      title: "Comprehensive Admin Panel",
      description: "Complete control over your e-commerce operations",
      details: [
        "Intuitive dashboard with real-time metrics",
        "Product management with bulk operations",
        "Order processing and fulfillment",
        "Customer service tools",
        "Role-based access control"
      ],
      image: "/api/placeholder/600/400"
    },
    {
      icon: UserGroupIcon,
      title: "Advanced CRM System",
      description: "360° customer relationship management",
      details: [
        "Complete customer profiles and history",
        "Automated segmentation and tagging",
        "Customer lifetime value tracking",
        "Communication history and notes",
        "Loyalty program management"
      ],
      image: "/api/placeholder/600/400"
    },
    {
      icon: BoltIcon,
      title: "Pulse Operational Intelligence",
      description: "AI-powered insights for smarter decisions",
      details: [
        "Predictive analytics and forecasting",
        "Automated alerts and recommendations",
        "Performance benchmarking",
        "Trend analysis and reporting",
        "Custom KPI dashboards"
      ],
      image: "/api/placeholder/600/400"
    },
    {
      icon: ChartBarIcon,
      title: "Advanced Inventory Management",
      description: "Never run out of stock again",
      details: [
        "Real-time inventory tracking",
        "Automated reorder points",
        "Multi-location management",
        "Supplier integration",
        "Demand forecasting"
      ],
      image: "/api/placeholder/600/400"
    },
    {
      icon: EnvelopeIcon,
      title: "Email Marketing System",
      description: "Engage customers with targeted campaigns",
      details: [
        "Drag-and-drop email builder",
        "Automated drip campaigns",
        "Behavioral triggers",
        "A/B testing capabilities",
        "Advanced segmentation"
      ],
      image: "/api/placeholder/600/400"
    },
    {
      icon: TruckIcon,
      title: "Multi-Carrier Shipping",
      description: "Streamlined shipping and fulfillment",
      details: [
        "Integration with major carriers",
        "Real-time shipping rates",
        "Automated label printing",
        "Tracking and notifications",
        "Returns management"
      ],
      image: "/api/placeholder/600/400"
    },
    {
      icon: CurrencyDollarIcon,
      title: "Financial Dashboards",
      description: "Complete financial visibility",
      details: [
        "Real-time revenue tracking",
        "Profit margin analysis",
        "QuickBooks integration",
        "Tax reporting tools",
        "Financial forecasting"
      ],
      image: "/api/placeholder/600/400"
    },
    {
      icon: ShieldCheckIcon,
      title: "Security & Compliance",
      description: "Enterprise-grade security",
      details: [
        "PCI DSS compliance",
        "SSL encryption",
        "Regular security audits",
        "Data backup and recovery",
        "GDPR compliance tools"
      ],
      image: "/api/placeholder/600/400"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white dark:bg-espresso-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-coffee-900 dark:text-coffee-50 mb-4">
            Everything You Need to Scale Your Business
          </h2>
          <p className="text-xl text-coffee-600 dark:text-coffee-200 max-w-3xl mx-auto">
            From e-commerce basics to advanced operational intelligence,
            Lumina Commerce provides all the tools serious businesses need.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                  activeTab === index
                    ? 'border-coffee-500 bg-coffee-50 dark:bg-coffee-900/30'
                    : 'border-coffee-200 dark:border-coffee-700 hover:border-coffee-300 dark:hover:border-coffee-600'
                }`}
                onClick={() => setActiveTab(index)}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  activeTab === index ? 'bg-coffee-600' : 'bg-coffee-100 dark:bg-coffee-800'
                }`}>
                  <IconComponent className={`w-6 h-6 ${
                    activeTab === index ? 'text-white' : 'text-coffee-600 dark:text-coffee-300'
                  }`} />
                </div>
                <h3 className="text-lg font-semibold text-coffee-900 dark:text-coffee-50 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-coffee-600 dark:text-coffee-200">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Feature Detail */}
        <div className="bg-coffee-50 dark:bg-espresso-900 rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Content */}
            <div className="p-8 lg:p-12">
              <div className="flex items-center space-x-3 mb-6">
                {(() => {
                  const IconComponent = features[activeTab].icon;
                  return <IconComponent className="w-8 h-8 text-coffee-600 dark:text-coffee-400" />;
                })()}
                <h3 className="text-2xl font-bold text-coffee-900 dark:text-coffee-50">
                  {features[activeTab].title}
                </h3>
              </div>

              <p className="text-lg text-coffee-600 dark:text-coffee-200 mb-8">
                {features[activeTab].description}
              </p>

              <div className="space-y-4">
                {features[activeTab].details.map((detail, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-coffee-600 rounded-full mt-2"></div>
                    <p className="text-coffee-700 dark:text-coffee-200">{detail}</p>
                  </div>
                ))}
              </div>

              <button className="mt-8 bg-coffee-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-coffee-700 transition-colors">
                Learn More
              </button>
            </div>

            {/* Image */}
            <div className="p-8 lg:p-12 flex items-center">
              <div className="w-full bg-white dark:bg-espresso-800 rounded-xl shadow-lg overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={features[activeTab].image}
                  alt={features[activeTab].title}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-coffee-600 to-chocolate-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to See These Features in Action?
            </h3>
            <p className="text-coffee-100 mb-6 max-w-2xl mx-auto">
              Book a personalized demo and see how Peak can transform your business operations.
            </p>
            <button className="bg-white text-coffee-600 px-8 py-3 rounded-lg font-semibold hover:bg-coffee-50 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
