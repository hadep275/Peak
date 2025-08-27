'use client';

import { useState } from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Use the same Formspree endpoint but with different form data
      const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
      if (!formspreeId) {
        console.error('Environment variables:', process.env);
        throw new Error('Formspree ID not configured. Please check your .env.local file.');
      }

      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          _subject: 'Newsletter Subscription',
          type: 'newsletter',
          message: `New newsletter subscription from: ${email}`
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
        
        // Optional: Save to local storage for Excel export later
        const existingEmails = JSON.parse(localStorage.getItem('newsletter_emails') || '[]');
        const newEntry = {
          email,
          date: new Date().toISOString(),
          timestamp: Date.now()
        };
        existingEmails.push(newEntry);
        localStorage.setItem('newsletter_emails', JSON.stringify(existingEmails));
        
      } else {
        throw new Error('Failed to subscribe');
      }
    } catch (err) {
      setError('Failed to subscribe. Please try again.');
      console.error('Newsletter subscription error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-coffee-50 dark:bg-coffee-900/20 rounded-lg p-6 text-center border border-coffee-200 dark:border-coffee-700">
        <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-coffee-900 dark:text-coffee-50 mb-2">
          Thanks for subscribing!
        </h3>
        <p className="text-coffee-600 dark:text-coffee-200">
          You&apos;ll receive our latest updates and insights.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-coffee-50 dark:bg-coffee-900/20 rounded-lg p-6 border border-coffee-200 dark:border-coffee-700">
      <div className="flex items-center space-x-3 mb-4">
        <EnvelopeIcon className="w-6 h-6 text-coffee-600 dark:text-coffee-400" />
        <h3 className="text-lg font-semibold text-coffee-900 dark:text-coffee-50">
          Stay Updated
        </h3>
      </div>
      <p className="text-coffee-600 dark:text-coffee-200 mb-4">
        Get the latest e-commerce insights, tips, and Peak updates delivered to your inbox.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="w-full px-4 py-3 border border-coffee-300 dark:border-coffee-600 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent bg-white dark:bg-coffee-800 text-coffee-900 dark:text-coffee-50 placeholder-coffee-500 dark:placeholder-coffee-400"
          />
        </div>
        
        {error && (
          <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
        )}
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-coffee-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-coffee-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe to Newsletter'}
        </button>
      </form>
      
      <p className="text-xs text-coffee-500 dark:text-coffee-400 mt-3">
        No spam, unsubscribe at any time. We respect your privacy.
      </p>
    </div>
  );
}
