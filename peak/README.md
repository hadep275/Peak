# Lumina Commerce Platform - Landing Page

A modern, high-converting landing page for Lumina Commerce Platform - the enterprise e-commerce solution that competes with Shopify Plus at mid-market pricing.

## 🚀 Features

- **Modern Design**: Clean, professional design that builds trust
- **Mobile-First**: Fully responsive across all devices
- **High Performance**: Optimized for speed and SEO
- **Conversion Optimized**: Multiple CTAs and lead capture forms
- **Interactive Elements**: ROI calculator, feature comparisons, and demos

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Animations**: Framer Motion
- **Forms**: Formspree integration
- **Hosting**: Firebase Hosting (with custom domain support)
- **Analytics**: Google Analytics 4 ready

## 📋 Sections

1. **Hero Section** - Compelling headline with demo CTA
2. **Problem/Solution** - Pain points and how Lumina solves them
3. **Features Showcase** - Interactive feature exploration
4. **Pricing** - Three-tier pricing with comparison matrix
5. **Competitive Comparison** - vs Shopify Plus and custom development
6. **Case Studies** - Real results from Lumina Skincare and others
7. **ROI Calculator** - Interactive savings calculator
8. **FAQ** - Comprehensive answers to common questions
9. **Contact Forms** - Multiple lead capture points
10. **Footer** - Complete site navigation and contact info

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd peak

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) to view the site.

### Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

## 📝 Content Management

### Updating Pricing

Edit `src/components/PricingSection.tsx` to modify:

- Plan prices and features
- Setup fees
- Feature comparison matrix

### Adding Case Studies

Update `src/components/CaseStudiesSection.tsx` with:

- New client stories
- Updated metrics
- Testimonials

### Modifying Contact Forms

Configure Formspree in `src/components/ContactForm.tsx`:

1. Sign up at https://formspree.io/
2. Replace `YOUR_FORM_ID` with your actual form ID

## 🎨 Customization

### Brand Colors

Update Tailwind config in `tailwind.config.js`:

```javascript
colors: {
  primary: '#your-primary-color',
  secondary: '#your-secondary-color'
}
```

### Typography

Fonts are configured in `src/app/layout.tsx` using Google Fonts.

### Images

Replace placeholder images in `/public` directory with:

- Logo files
- Product screenshots
- Team photos
- Client logos

## 📊 Analytics & SEO

### SEO Features

- Optimized meta tags and Open Graph
- Structured data (JSON-LD)
- Sitemap generation
- robots.txt configuration

### Performance

- Static site generation
- Image optimization
- CSS/JS minification
- CDN-ready assets

## 🚀 Deployment

### Firebase Hosting (Recommended)

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login and initialize
firebase login
firebase init hosting

# Build and deploy
npm run build
firebase deploy
```

### Alternative Hosting

- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop `out` folder
- **GitHub Pages**: Use gh-pages package

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## 🔧 Development

### Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/          # React components
│   ├── HeroSection.tsx
│   ├── PricingSection.tsx
│   └── ...
└── styles/             # Global styles
```

### Key Components

- `HeroSection`: Main landing section with CTA
- `ContactForm`: Reusable form component
- `PricingSection`: Pricing tables and comparison
- `ROICalculator`: Interactive savings calculator

## 📈 Conversion Optimization

### Lead Capture Points

1. Hero section demo button
2. Pricing section CTAs
3. Feature section demo requests
4. Contact section forms
5. Exit-intent popups (can be added)

### A/B Testing

Ready for A/B testing with:

- Multiple CTA variations
- Different headline options
- Pricing presentation formats

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For technical support or questions:

- Email: hello@luminacommerce.com
- Documentation: See deployment guide
- Issues: Create GitHub issue

## 📄 License

This project is proprietary to Lumina Commerce Platform.

---

Built with ❤️ for serious businesses ready to scale.
