# Lumina Commerce Platform - Deployment Guide

## Firebase Hosting Setup

### Prerequisites
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Create a Firebase project at https://console.firebase.google.com/

### Initial Setup
1. Login to Firebase: `firebase login`
2. Initialize Firebase in your project: `firebase init hosting`
   - Select your Firebase project
   - Set public directory to `out`
   - Configure as single-page app: Yes
   - Set up automatic builds and deploys with GitHub: Optional

### Deploy to Firebase
1. Build the project: `npm run build`
2. Deploy: `firebase deploy`

### Custom Domain Setup
1. Go to Firebase Console > Hosting
2. Click "Add custom domain"
3. Enter your domain (e.g., luminacommerce.com)
4. Follow the verification steps
5. Update DNS records as instructed

## Alternative Hosting Options

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy-github": "gh-pages -d out"`
3. Build and deploy: `npm run build && npm run deploy-github`

### Vercel (Recommended for Next.js)
1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel`
3. Follow the prompts
4. For custom domain: Add domain in Vercel dashboard

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `out` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

## Environment Variables
Create a `.env.local` file for local development:
```
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

## Performance Optimizations
- Images are optimized for static export
- CSS and JS files are cached for 1 year
- Security headers are configured
- Gzip compression is enabled

## SEO Configuration
- Sitemap is automatically generated
- robots.txt is configured
- Structured data (JSON-LD) is included
- Meta tags are optimized

## Contact Form Setup
1. Sign up at https://formspree.io/
2. Create a new form
3. Update the form endpoint in `ContactForm.tsx`
4. Replace `YOUR_FORM_ID` with your actual Formspree form ID

## Analytics Setup
1. Create a Google Analytics 4 property
2. Add your GA4 measurement ID to environment variables
3. Update the tracking code in the layout

## Custom Domain with Firebase
1. Purchase your domain from a registrar
2. In Firebase Console, go to Hosting
3. Add custom domain
4. Update DNS records:
   - A record: 151.101.1.195
   - A record: 151.101.65.195
   - CNAME record: www -> your-project.web.app

## SSL Certificate
Firebase automatically provides SSL certificates for custom domains.

## Monitoring
- Firebase provides hosting analytics
- Set up Google Analytics for detailed user tracking
- Monitor Core Web Vitals in Google Search Console

## Backup and Version Control
- All code is version controlled with Git
- Firebase hosting keeps deployment history
- Database backups (if using Firestore) are automatic

## Support
For deployment issues, contact the development team or refer to:
- Firebase Hosting docs: https://firebase.google.com/docs/hosting
- Next.js deployment docs: https://nextjs.org/docs/deployment
