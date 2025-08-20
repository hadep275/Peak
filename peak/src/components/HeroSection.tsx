'use client';

import { useState } from 'react';
import { ChevronRightIcon, ShieldCheckIcon, StarIcon } from '@heroicons/react/24/solid';
import { PlayIcon } from '@heroicons/react/24/outline';
import ContactForm from './ContactForm';
import ThemeToggle from './ThemeToggle';

export default function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <section className="relative bg-gradient-to-br from-coffee-50 via-background to-chocolate-50 dark:from-espresso-950 dark:via-espresso-900 dark:to-chocolate-950 overflow-hidden transition-all duration-500 min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-coffee-300 dark:bg-coffee-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-48 h-48 md:w-72 md:h-72 bg-chocolate-300 dark:bg-chocolate-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-48 h-48 md:w-72 md:h-72 bg-espresso-300 dark:bg-espresso-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Navigation */}
      <nav className="relative z-10 px-4 py-4 lg:px-8">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 elegant-gradient rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-xl font-bold text-foreground">Peak</span>
          </div>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#features" className="text-coffee-600 dark:text-coffee-200 hover:text-coffee-800 dark:hover:text-coffee-100 transition-all duration-200 font-medium">Features</a>
            <a href="#pricing" className="text-coffee-600 dark:text-coffee-200 hover:text-coffee-800 dark:hover:text-coffee-100 transition-all duration-200 font-medium">Pricing</a>
            <a href="#comparison" className="text-coffee-600 dark:text-coffee-200 hover:text-coffee-800 dark:hover:text-coffee-100 transition-all duration-200 font-medium">Compare</a>
            <a href="#case-studies" className="text-coffee-600 dark:text-coffee-200 hover:text-coffee-800 dark:hover:text-coffee-100 transition-all duration-200 font-medium">Case Studies</a>
            <ThemeToggle />
            <button className="elegant-button">
              Book Demo
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button className="text-coffee-600 dark:text-coffee-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 px-4 py-12 lg:px-8 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-2 bg-coffee-50 dark:bg-coffee-900/30 text-coffee-700 dark:text-coffee-200 px-4 py-2 rounded-full text-sm font-medium shadow-md">
                <ShieldCheckIcon className="w-4 h-4" />
                <span>Enterprise-grade security & compliance</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Complete E-commerce Platform for{' '}
                  <span className="elegant-text-gradient">
                    Growing Businesses
                  </span>
                </h1>
                <p className="text-lg lg:text-xl text-coffee-600 dark:text-coffee-200 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Advanced CRM, operational intelligence, and powerful automation.
                  Everything you need to scale your business in one unified platform.
                </p>
              </div>

              {/* Value Props */}
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">Advanced CRM</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">AI Intelligence</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">All-in-One Platform</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => setShowContactForm(true)}
                  className="elegant-button flex items-center justify-center space-x-2"
                >
                  <span>Book Free Demo</span>
                  <ChevronRightIcon className="w-4 h-4" />
                </button>
                <a
                  href="#pricing"
                  className="elegant-button-outline text-center"
                >
                  View Pricing
                </a>
              </div>

              {/* Social Proof */}
              <div className="flex items-center justify-center lg:justify-start space-x-6 pt-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
                  <span className="text-sm text-coffee-600 dark:text-coffee-300 ml-2">4.9/5 from 200+ reviews</span>
                </div>
              </div>
            </div>

            {/* Right Column - Demo/Screenshot */}
            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                {!isVideoPlaying ? (
                  <div className="relative">
                    <div className="w-full aspect-video bg-gradient-to-br from-coffee-100 to-chocolate-100 dark:from-coffee-900 dark:to-chocolate-900 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-coffee-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                          <span className="text-white font-bold text-2xl">P</span>
                        </div>
                        <p className="text-coffee-700 dark:text-coffee-200 font-semibold text-lg">Peak Dashboard</p>
                        <p className="text-coffee-600 dark:text-coffee-300 text-sm mt-1">Live Demo Available</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center rounded-lg">
                      <button
                        onClick={() => setIsVideoPlaying(true)}
                        className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-4 transition-all transform hover:scale-105"
                      >
                        <PlayIcon className="w-8 h-8 text-coffee-600 ml-1" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="aspect-video bg-coffee-900 dark:bg-espresso-950 flex items-center justify-center rounded-lg">
                    <span className="text-coffee-100">Demo Video Placeholder</span>
                  </div>
                )}
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-background rounded-xl shadow-lg p-4 border border-coffee-200 dark:border-coffee-700">
                <div className="text-2xl font-bold text-foreground">$2.3M+</div>
                <div className="text-sm text-coffee-600 dark:text-coffee-300">Revenue Generated</div>
              </div>

              <div className="absolute -top-6 -right-6 bg-background rounded-xl shadow-lg p-4 border border-coffee-200 dark:border-coffee-700">
                <div className="text-2xl font-bold text-foreground">99.9%</div>
                <div className="text-sm text-coffee-600 dark:text-coffee-300">Uptime SLA</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="relative z-10 px-6 py-12 lg:px-8 border-t border-coffee-200 dark:border-coffee-700 bg-background">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm text-coffee-500 dark:text-coffee-400 mb-8">Trusted by growing businesses worldwide</p>
          <div className="flex items-center justify-center space-x-8 lg:space-x-12 opacity-60 flex-wrap gap-4">
            {/* Placeholder for client logos */}
            <div className="text-coffee-400 dark:text-coffee-500 font-semibold text-sm lg:text-base">PEAK SKINCARE</div>
            <div className="text-coffee-400 dark:text-coffee-500 font-semibold text-sm lg:text-base">ARTISAN BAKERY</div>
            <div className="text-coffee-400 dark:text-coffee-500 font-semibold text-sm lg:text-base">TECH STARTUP</div>
            <div className="text-coffee-400 dark:text-coffee-500 font-semibold text-sm lg:text-base">RETAIL CHAIN</div>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setShowContactForm(false)}
                className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <ContactForm formType="demo" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
