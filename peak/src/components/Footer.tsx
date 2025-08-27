'use client';

import Link from 'next/link';
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import NewsletterSignup from './NewsletterSignup';

export default function Footer() {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Integrations', href: '#integrations' },
      { name: 'API Documentation', href: '#api' },
      { name: 'Security', href: '#security' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Case Studies', href: '/#case-studies' },
      { name: 'Contact', href: '/contact' },
      { name: 'Pricing', href: '/pricing' }
    ],
    support: [
      { name: 'Contact Support', href: '/contact' },
      { name: 'Help Center', href: '/contact' },
      { name: 'System Status', href: '/contact' },
      { name: 'Migration Guide', href: '/contact' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/legal/privacy' },
      { name: 'Terms of Service', href: '/legal/terms' },
      { name: 'Contact Us', href: '/contact' }
    ]
  };

  return (
    <footer className="bg-espresso-950 dark:bg-espresso-950 text-coffee-50">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-8 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-coffee-600 to-chocolate-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold">Peak</span>
            </div>

            <p className="text-coffee-200 mb-6 leading-relaxed">
              Complete e-commerce platform for growing businesses. Advanced CRM, AI intelligence,
              and powerful automation in one unified solution.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="w-5 h-5 text-coffee-400" />
                <span className="text-coffee-200">Contact via form only</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPinIcon className="w-5 h-5 text-coffee-400" />
                <span className="text-coffee-200">Calgary, AB, Canada</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-coffee-200 hover:text-coffee-50 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-coffee-200 hover:text-coffee-50 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-coffee-200 hover:text-coffee-50 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-coffee-200 hover:text-coffee-50 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="lg:col-span-2">
            <NewsletterSignup />
          </div>
        </div>


      </div>

      {/* Bottom Bar */}
      <div className="border-t border-coffee-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-coffee-400 text-sm">
              © 2024 Peak. All rights reserved.
            </div>


          </div>
        </div>
      </div>
    </footer>
  );
}
