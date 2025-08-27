export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lumina Commerce Platform",
    "description": "Enterprise e-commerce platform with advanced CRM and operational intelligence. The Shopify alternative for serious businesses.",
    "url": "https://luminacommerce.com",
    "logo": "https://luminacommerce.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "1-800-LUMINA-1",
      "contactType": "customer service",
      "email": "hello@luminacommerce.com"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Calgary",
      "addressRegion": "AB",
      "addressCountry": "CA"
    },
    "sameAs": [
      "https://twitter.com/luminacommerce",
      "https://linkedin.com/company/luminacommerce"
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Lumina Commerce Platform",
    "description": "Enterprise e-commerce platform with advanced CRM and operational intelligence",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web-based",
    "offers": [
      {
        "@type": "Offer",
        "name": "Starter Plan",
        "price": "199",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "199",
          "priceCurrency": "USD",
          "unitCode": "MON"
        }
      },
      {
        "@type": "Offer",
        "name": "Professional Plan",
        "price": "499",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "499",
          "priceCurrency": "USD",
          "unitCode": "MON"
        }
      },
      {
        "@type": "Offer",
        "name": "Enterprise Plan",
        "price": "899",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "899",
          "priceCurrency": "USD",
          "unitCode": "MON"
        }
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "200"
    },
    "provider": {
      "@type": "Organization",
      "name": "Lumina Commerce Platform"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does it take to set up Lumina Commerce?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most businesses are up and running within 2-4 weeks. This includes data migration, customization, and team training."
        }
      },
      {
        "@type": "Question",
        "name": "Can you migrate my existing data from Shopify/WooCommerce?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We provide complete data migration services including products, customers, orders, and historical data."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Pulse Intelligence different?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pulse Intelligence uses AI to analyze your business data and provide predictive insights, automated alerts, and actionable recommendations."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
