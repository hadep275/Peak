# Firebase Deployment Setup

## Steps to enable automatic deployment:

### 1. Generate Firebase Service Account Key

Run this command in your terminal (make sure you're logged into Firebase CLI):

```bash
cd peak
firebase projects:list
```

If you're not logged in, run:
```bash
firebase login
```

Then generate the service account key:
```bash
firebase init hosting:github
```

This will:
- Create a service account for your project
- Generate the necessary GitHub secrets
- Set up the workflow (though we've already created a custom one)

### 2. Alternative Manual Setup

If you prefer manual setup:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your `peak-0` project
3. Go to Project Settings (gear icon) → Service Accounts
4. Click "Generate new private key"
5. Download the JSON file

### 3. Add GitHub Secrets

Go to your GitHub repository: https://github.com/hadep275/Peak.git

1. Go to Settings → Secrets and variables → Actions
2. Add a new repository secret:
   - Name: `FIREBASE_SERVICE_ACCOUNT_PEAK_0`
   - Value: The entire contents of the service account JSON file

### 4. Connect GitHub Repository (if not done)

```bash
git remote add origin https://github.com/hadep275/Peak.git
git branch -M main
git add .
git commit -m "Initial commit with deployment workflow"
git push -u origin main
```

### 5. Test the Deployment

Once you push to GitHub, the workflow will automatically:
1. Install dependencies
2. Build your Next.js project
3. Deploy to Firebase Hosting

Your site will be available at: `https://peak-0.web.app` or your custom domain if configured.

## Formspree Integration

For your forms, you'll need to:
1. Sign up at [Formspree](https://formspree.io/)
2. Create a form endpoint
3. Update your form action to point to the Formspree endpoint

Example form integration:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="email" name="email" required>
  <textarea name="message" required></textarea>
  <button type="submit">Send</button>
</form>
```

## What You Get

✅ **Automatic deployment** - Push to GitHub → Auto-deploy to Firebase  
✅ **Static hosting** - Fast, reliable hosting for your landing page  
✅ **Form handling** - Formspree integration for contact forms  
✅ **No database needed** - Perfect for landing pages  
✅ **Custom domain support** - Can add your own domain later  
✅ **SSL/HTTPS** - Automatic SSL certificates  

## Next Steps

1. Run the Firebase setup commands above
2. Push your code to GitHub
3. Watch the automatic deployment in the Actions tab
4. Set up Formspree for your contact forms
