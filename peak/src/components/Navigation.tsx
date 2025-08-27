'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white/95 dark:bg-espresso-950/95 backdrop-blur-sm border-b border-coffee-200 dark:border-coffee-700 sticky top-0 z-50 shadow-sm dark:shadow-coffee-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-gradient-to-r from-coffee-600 to-chocolate-700 rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-bold text-coffee-900 dark:text-coffee-50">Peak</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors duration-200 ${
                  pathname === link.href
                    ? 'text-coffee-600 dark:text-coffee-300 border-b-2 border-coffee-600 dark:border-coffee-300 pb-1'
                    : 'text-coffee-700 dark:text-coffee-200 hover:text-coffee-600 dark:hover:text-coffee-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <ThemeToggle />
            <Link
              href="/contact"
              className="bg-coffee-600 dark:bg-coffee-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-coffee-700 dark:hover:bg-coffee-600 transition-colors duration-200 shadow-sm"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-coffee-700 dark:text-coffee-200 hover:text-coffee-600 dark:hover:text-coffee-300 transition-colors p-2 rounded-lg hover:bg-coffee-100 dark:hover:bg-coffee-800"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-coffee-200 dark:border-coffee-700 bg-white/95 dark:bg-espresso-950/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-4 px-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium transition-colors duration-200 py-2 px-3 rounded-lg ${
                    pathname === link.href
                      ? 'text-coffee-600 dark:text-coffee-300 bg-coffee-100 dark:bg-coffee-800'
                      : 'text-coffee-700 dark:text-coffee-200 hover:text-coffee-600 dark:hover:text-coffee-300 hover:bg-coffee-50 dark:hover:bg-coffee-900'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="bg-coffee-600 dark:bg-coffee-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-coffee-700 dark:hover:bg-coffee-600 transition-colors text-center shadow-sm mt-2"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
