# Quick Start Guide - Auto Auditor Platform

## 🎯 Goal
Get your Auto Auditor business platform running in 15 minutes!

## Step-by-Step Setup

### 1. Install Dependencies (2 minutes)
```powershell
cd C:\Auto-Auditor
npm install
```

### 2. Create Firebase Project (5 minutes)

**Go to**: https://console.firebase.google.com

1. Click "Add Project"
2. Name it "auto-auditor" (or your choice)
3. Disable Google Analytics (optional)
4. Wait for project creation

### 3. Enable Firebase Services (3 minutes)

**Firestore Database:**
1. Left sidebar → Firestore Database
2. Click "Create database"
3. Start in **Test mode** (we'll secure it later)
4. Choose a location closest to you
5. Click "Enable"

**Storage:**
1. Left sidebar → Storage
2. Click "Get started"
3. Start in **Test mode**
4. Click "Done"

### 4. Get Firebase Credentials (5 minutes)

**Web App Config:**
1. Click the gear icon (⚙️) → Project settings
2. Scroll to "Your apps" section
3. Click the `</>` (web) icon
4. Register app (name: "Auto Auditor Web")
5. Copy the `firebaseConfig` object values

**Service Account (Admin SDK):**
1. Project settings → Service accounts tab
2. Click "Generate new private key"
3. Save the JSON file
4. Open it and copy these values:
   - `project_id`
   - `client_email`
   - `private_key` (keep the `\n` characters as literal `\n`)

### 5. Configure Environment Variables (3 minutes)

Copy the example file:
```powershell
copy .env.example .env.local
```

Edit `.env.local` and fill in your Firebase values:

```env
# From firebaseConfig object
NEXT_PUBLIC_FIREBASE_API_KEY=AIza...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123

# From service account JSON
FIREBASE_ADMIN_PROJECT_ID=your-project-id
FIREBASE_ADMIN_CLIENT_EMAIL=firebase-adminsdk-xxxxx@your-project.iam.gserviceaccount.com
FIREBASE_ADMIN_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour_Private_Key_Here\n-----END PRIVATE KEY-----\n"
```

**Important**: For `FIREBASE_ADMIN_PRIVATE_KEY`, keep it as one line with `\n` in the string, wrapped in quotes.

### 6. Run the Application (1 minute)

```powershell
npm run dev
```

Open your browser to: **http://localhost:3000**

## 🎉 You're Live!

### Test the Platform

**Customer Side:**
1. Visit http://localhost:3000
2. Click on "Repair Audit" service
3. Fill out the form with test data
4. Upload a test image (any image works for now)
5. Click "Proceed to Payment"

**Admin Side:**
1. Visit http://localhost:3000/admin
2. View your test case
3. Click "View Details" to see full information

**Shop Tracking:**
1. Visit http://localhost:3000/admin/shops
2. Click "Add Shop"
3. Add a test shop with rating

## 📋 What's Working Now

✅ Customer intake forms (all 3 services)
✅ File uploads to Firebase Storage  
✅ Case management in Firestore
✅ Admin dashboard to view cases
✅ Shop reputation tracking
✅ PDF report generation (backend ready)
✅ Professional UI/UX

## 🔧 What Needs Configuration

⚠️ **Payment Processing**: Add Stripe keys when ready to accept payments
⚠️ **Email Notifications**: Configure SendGrid/Mailgun
⚠️ **Admin Login**: Add authentication (currently open)
⚠️ **Security Rules**: Tighten Firestore/Storage rules for production

## 🚀 Next Steps for Your Business

### 1. Add Your Branding
- Update company name in headers
- Change color scheme in `tailwind.config.js`
- Add your logo

### 2. Set Up Payments
- Sign up for Stripe
- Add keys to `.env.local`
- Implement payment form (placeholder exists)

### 3. Create Your First Real Audit
- Get a real customer case
- Review using the 4-filter system in code comments
- Generate PDF report using admin dashboard
- Send to customer

### 4. Build Your Shop Database
- Add shops as you audit them
- Track their history
- Share trusted shop list with customers

### 5. Market Your Service
- Create social media presence
- Join local community groups
- Offer first audit at discount
- Ask satisfied customers for referrals

## 🐛 Troubleshooting

**"Module not found" errors:**
```powershell
rm -rf node_modules
npm install
```

**Firebase connection errors:**
- Check `.env.local` has correct values
- Ensure Firestore and Storage are enabled
- Verify security rules allow read/write

**File upload fails:**
- Check Firebase Storage is initialized
- Verify bucket name in config
- Check Storage rules

**Can't see cases in admin:**
- Check Firebase Console → Firestore
- Verify cases collection exists
- Check browser console for errors

## 📞 Quick Commands

```powershell
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check for errors
npm run lint
```

## 🎓 Learning the Codebase

**Key Files to Know:**
- `app/page.tsx` - Homepage
- `app/services/*/page.tsx` - Service forms
- `app/admin/page.tsx` - Admin dashboard
- `app/api/cases/route.ts` - Case API
- `types/index.ts` - Database schema
- `lib/pdf-generator.ts` - Report generation

**Making Changes:**
- Edit prices: Search for "$39", "$49", "$59"
- Change colors: `tailwind.config.js`
- Add fields: Update types, forms, and API routes
- Customize reports: Edit `lib/pdf-generator.ts`

## 💡 Pro Tips

1. **Test with Real Data**: Use actual diagnostic codes and symptoms
2. **Build Templates**: Create reusable analysis templates
3. **Document Patterns**: Keep notes on common issues
4. **Time Yourself**: Track how long audits take
5. **Get Feedback**: Ask early customers what they want

## 🎯 Your First Week Checklist

- [ ] Set up Firebase completely
- [ ] Test all 3 service forms
- [ ] Create 3 sample shops in database
- [ ] Generate your first PDF report
- [ ] Configure Stripe (even test mode)
- [ ] Customize branding
- [ ] Do 1 real audit for someone (even free)
- [ ] Get feedback and iterate

---

**You've got this! Your platform is ready to help people save money on repairs.** 🚗💰

Questions? Check the README.md for more details.
