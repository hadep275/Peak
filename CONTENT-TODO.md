# Peak Landing Page - Content TODO List

## 🖼️ Replace Placeholder Images

### High Priority
- [ ] **Logo Assets**
  - [ ] Add Peak logo to `/public/logo.svg` or `/public/logo.png`
  - [ ] Update logo in navigation (currently shows "P" in a box)
  - [ ] Add favicon.ico with Peak branding

- [ ] **Hero Section**
  - [ ] Replace placeholder dashboard screenshot
  - [ ] Add actual Peak platform demo video or screenshot
  - [ ] Consider adding customer logos or trust badges

### Medium Priority  
- [ ] **Feature Section Images** (Currently using via.placeholder.com)
  - [ ] Admin Panel screenshot → `/public/features/admin-panel.png`
  - [ ] CRM System screenshot → `/public/features/crm-system.png`
  - [ ] AI Intelligence dashboard → `/public/features/ai-intelligence.png`
  - [ ] Inventory Management → `/public/features/inventory.png`
  - [ ] Email Marketing → `/public/features/email-marketing.png`
  - [ ] Shipping Management → `/public/features/shipping.png`
  - [ ] Financial Dashboard → `/public/features/financial.png`
  - [ ] Security & Compliance → `/public/features/security.png`

- [ ] **Case Studies**
  - [ ] Add real client logos
  - [ ] Add before/after screenshots
  - [ ] Add team photos for testimonials

### Low Priority
- [ ] **Background Images**
  - [ ] Add subtle background patterns or textures
  - [ ] Consider adding office photos or team images
  - [ ] Add product lifestyle images

---

## 📞 Update Contact Information

### Critical
- [ ] **Phone Number**
  - [ ] Replace `1-800-PEAK-123` with real business phone
  - [ ] Update in ContactSection.tsx
  - [ ] Update in Footer.tsx

- [ ] **Email Addresses**
  - [ ] Replace `hello@peak.com` with real business email
  - [ ] Update in ContactSection.tsx
  - [ ] Update in Footer.tsx
  - [ ] Consider different emails for different purposes:
    - [ ] `hello@` for general inquiries
    - [ ] `sales@` for sales inquiries
    - [ ] `support@` for customer support

### Important
- [ ] **Business Address**
  - [ ] Replace "San Francisco, CA" with real location
  - [ ] Add full address if you have a physical office
  - [ ] Or update to reflect "Remote-first" accurately

- [ ] **Business Hours**
  - [ ] Update "Mon-Fri 9AM-6PM PST" with actual hours
  - [ ] Consider time zone of your target customers

- [ ] **Social Media Links**
  - [ ] Add LinkedIn profile/company page
  - [ ] Add Twitter/X handle if applicable
  - [ ] Add other relevant social platforms

---

## 🌐 Custom Domain Setup (Optional)

### Planning Phase
- [ ] **Domain Research**
  - [ ] Brainstorm domain options (peak.com, peakcommerce.com, etc.)
  - [ ] Check domain availability
  - [ ] Consider .com, .io, .co alternatives
  - [ ] Budget for domain purchase ($10-50/year)

### Purchase & Setup
- [ ] **Domain Purchase**
  - [ ] Buy chosen domain from registrar (Namecheap, GoDaddy, etc.)
  - [ ] Set up domain management account

- [ ] **Firebase Configuration**
  - [ ] Go to Firebase Console → Hosting
  - [ ] Add custom domain
  - [ ] Follow DNS configuration steps
  - [ ] Wait for SSL certificate provisioning (24-48 hours)

### Update References
- [ ] **Update Sitemap URLs**
  - [ ] Change from `peak-0.web.app` to your custom domain
  - [ ] Update in `src/app/sitemap.ts`
  - [ ] Update in `public/robots.txt`

- [ ] **Update Social Media Meta Tags**
  - [ ] Update Open Graph URLs in layout.tsx
  - [ ] Update canonical URLs if using them

---

## 📊 Analytics & Tracking

### Google Analytics Setup
- [ ] **Create GA4 Property**
  - [ ] Go to https://analytics.google.com/
  - [ ] Create new property for Peak
  - [ ] Get measurement ID (starts with G-)
  - [ ] Add to `.env.local` file

- [ ] **Conversion Tracking**
  - [ ] Set up goals for form submissions
  - [ ] Track demo requests
  - [ ] Track pricing page visits
  - [ ] Set up e-commerce tracking if applicable

### Additional Tracking (Optional)
- [ ] **Hotjar or Similar**
  - [ ] Set up heatmap tracking
  - [ ] Record user sessions
  - [ ] Get user behavior insights

- [ ] **Facebook Pixel** (if using Facebook ads)
  - [ ] Create Facebook Business account
  - [ ] Set up pixel tracking
  - [ ] Add to website

---

## 📝 Content Refinements

### Case Study Updates
- [ ] **Lumina Skincare Case Study**
  - [ ] ✅ Update link to real domain: luminaco.skin
  - [ ] Add more specific metrics if available
  - [ ] Consider adding more case studies

### Pricing Updates
- [ ] **Review Pricing Strategy**
  - [ ] Confirm pricing tiers are accurate
  - [ ] Update setup fees if needed
  - [ ] Review feature lists for accuracy

### FAQ Updates
- [ ] **Add More Questions**
  - [ ] Based on actual customer questions
  - [ ] Industry-specific concerns
  - [ ] Technical implementation questions

---

## 🔧 Technical Improvements (Future)

### Performance
- [ ] **Image Optimization**
  - [ ] Compress all images before uploading
  - [ ] Use WebP format where possible
  - [ ] Implement lazy loading for images

### SEO
- [ ] **Content SEO**
  - [ ] Research target keywords
  - [ ] Optimize page titles and descriptions
  - [ ] Add alt text to all images
  - [ ] Create blog section (optional)

### Accessibility
- [ ] **A11y Improvements**
  - [ ] Test with screen readers
  - [ ] Ensure proper color contrast
  - [ ] Add ARIA labels where needed
  - [ ] Test keyboard navigation

---

## 📋 Launch Checklist

### Pre-Launch
- [ ] Test all forms with real email addresses
- [ ] Test on multiple devices and browsers
- [ ] Check all links work correctly
- [ ] Verify analytics tracking works
- [ ] Test contact information is correct

### Post-Launch
- [ ] Monitor form submissions
- [ ] Check analytics data
- [ ] Monitor site performance
- [ ] Collect user feedback
- [ ] Plan content updates

---

**Notes:**
- Priority levels: High = needed for launch, Medium = improve conversions, Low = nice to have
- Update this file as you complete items
- Add new items as you think of them
