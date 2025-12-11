# Auto Auditor Platform

A professional platform for providing expert vehicle repair audits, pre-diagnosis roadmaps, and pre-purchase inspections. This application helps customers save thousands by getting a second opinion before approving expensive repairs.

## 🚀 Features

### Customer-Facing Services

1. **Repair Audit Service ($39)**
   - Upload repair quotes and diagnostic codes
   - Get line-by-line analysis of the estimate
   - Identify upselling attempts and padding
   - Receive actionable recommendations

2. **Pre-Diagnosis Roadmap ($49)**
   - Submit vehicle symptoms and OBD2 data
   - Get a diagnostic plan before visiting a shop
   - Receive a note to hand to your mechanic
   - Know what questions to ask

3. **Used Bike Pre-Purchase ($59)**
   - Upload videos and photos of bikes/ATVs
   - Get red flags identified
   - Receive questions to ask seller
   - Buy/negotiate/walk-away verdict

### Admin Features

- **Dashboard**: View all cases with status tracking
- **Case Management**: Review submissions and create audit reports
- **Shop Reputation System**: Track good/bad shops
- **PDF Report Generation**: Professional audit reports
- **Customer Database**: Track customer history

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: Firebase Firestore
- **Storage**: Firebase Storage
- **PDF Generation**: jsPDF
- **Payments**: Stripe (integration ready)

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Firebase account
- (Optional) Stripe account for payments

## ⚙️ Installation

1. **Clone or navigate to the project**
   ```bash
   cd C:\Auto-Auditor
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   
   a. Create a Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com)
   
   b. Enable Firestore Database
   
   c. Enable Firebase Storage
   
   d. Create a service account:
      - Go to Project Settings → Service Accounts
      - Click "Generate New Private Key"
      - Save the JSON file
   
   e. Get your web app config:
      - Go to Project Settings → General
      - Scroll to "Your apps" and click the web icon
      - Copy the config object

4. **Configure environment variables**
   
   Copy `.env.example` to `.env.local`:
   ```bash
   copy .env.example .env.local
   ```
   
   Fill in your Firebase credentials in `.env.local`:
   ```env
   # Firebase Web Config
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

   # Firebase Admin (from service account JSON)
   FIREBASE_ADMIN_PROJECT_ID=your_project_id
   FIREBASE_ADMIN_CLIENT_EMAIL=firebase-adminsdk-xxxxx@your_project.iam.gserviceaccount.com
   FIREBASE_ADMIN_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour_Key_Here\n-----END PRIVATE KEY-----\n"

   # Stripe (optional for now)
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   STRIPE_SECRET_KEY=sk_test_...
   ```

5. **Set up Firestore Security Rules**
   
   In Firebase Console → Firestore Database → Rules:
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       // Cases collection
       match /cases/{caseId} {
         allow read, write: if true; // Adjust based on your auth needs
       }
       
       // Customers collection
       match /customers/{customerId} {
         allow read, write: if true;
       }
       
       // Shops collection
       match /shops/{shopId} {
         allow read, write: if true;
       }
       
       // Audit reports collection
       match /auditReports/{reportId} {
         allow read, write: if true;
       }
     }
   }
   ```

6. **Set up Firebase Storage Rules**
   
   In Firebase Console → Storage → Rules:
   ```javascript
   rules_version = '2';
   service firebase.storage {
     match /b/{bucket}/o {
       match /uploads/{allPaths=**} {
         allow read, write: if true; // Adjust based on your needs
       }
     }
   }
   ```

## 🚀 Running the Application

### Development Mode
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Production Build
```bash
npm run build
npm start
```

## 📁 Project Structure

```
Auto-Auditor/
├── app/
│   ├── admin/              # Admin dashboard
│   │   ├── page.tsx        # Main admin dashboard
│   │   └── shops/          # Shop management
│   ├── api/                # API routes
│   │   ├── cases/          # Case management API
│   │   ├── shops/          # Shop management API
│   │   └── upload/         # File upload API
│   ├── services/           # Customer service pages
│   │   ├── repair-audit/
│   │   ├── pre-diagnosis/
│   │   └── bike-purchase/
│   ├── payment/            # Payment processing
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── lib/
│   ├── firebase.ts         # Firebase client config
│   ├── firebase-admin.ts   # Firebase admin config
│   ├── pdf-generator.ts    # PDF report generation
│   └── utils.ts            # Utility functions
├── types/
│   └── index.ts            # TypeScript types
├── .env.example            # Environment variables template
├── package.json
└── README.md
```

## 🎯 Key Workflows

### Customer Submits a Case

1. Customer selects a service (Repair Audit, Pre-Diagnosis, or Bike Purchase)
2. Fills out the intake form with vehicle/issue details
3. Uploads photos/videos/documents
4. Proceeds to payment ($39, $49, or $59)
5. Receives confirmation email

### Admin Reviews a Case

1. Log into admin dashboard at `/admin`
2. View pending cases
3. Click "View Details" to see full case information
4. Review uploaded documents and customer details
5. Perform analysis using the 4-filter checklist
6. Generate and send PDF report

### Shop Reputation Tracking

1. Navigate to `/admin/shops`
2. Add shops as you encounter them in audits
3. Track audit history (approved/rejected quotes)
4. Build a database of trusted vs. avoid shops
5. Share "Pre-Approved Shop List" with customers

## 🔧 Customization

### Pricing
Edit prices in the following files:
- `app/page.tsx` (homepage cards)
- `app/services/repair-audit/page.tsx` (form)
- `app/services/pre-diagnosis/page.tsx` (form)
- `app/services/bike-purchase/page.tsx` (form)

### Branding
- Update colors in `tailwind.config.js`
- Modify logo and company name in layouts
- Customize email templates (to be added)

### Add New Services
1. Create new service page in `app/services/`
2. Add service type to `types/index.ts`
3. Update API routes to handle new service
4. Add PDF report generator for the service

## 💳 Stripe Integration

To enable real payments:

1. Sign up for Stripe: [https://stripe.com](https://stripe.com)
2. Get your API keys from the Stripe Dashboard
3. Add keys to `.env.local`
4. Implement Stripe Elements in `app/payment/page.tsx`:

```typescript
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

// Add payment form component
```

5. Create payment intent API route
6. Handle webhook for payment confirmation

## 📊 Database Collections

### cases
- Stores all customer submissions
- Fields: caseNumber, customerInfo, vehicleInfo, serviceType, status, etc.

### customers
- Customer records
- Fields: name, email, phone, totalCases

### shops
- Shop reputation database
- Fields: name, location, rating, auditHistory

### auditReports
- Generated PDF reports
- Fields: caseId, pdfUrl, sections

## 🔐 Security Notes

- Never commit `.env.local` to version control
- Use Firebase security rules in production
- Implement admin authentication (currently open)
- Validate all user inputs on the server
- Sanitize uploaded files
- Use HTTPS in production

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project to Vercel
3. Add environment variables
4. Deploy!

### Other Platforms

Works with any Node.js hosting:
- Netlify
- AWS Amplify
- Heroku
- DigitalOcean App Platform

## 📝 TODO / Future Enhancements

- [ ] Email notifications (SendGrid/Mailgun)
- [ ] SMS notifications (Twilio)
- [ ] Admin authentication system
- [ ] Customer portal to track cases
- [ ] Advanced search and filtering
- [ ] Analytics dashboard
- [ ] Automated report templates
- [ ] Video call scheduling integration
- [ ] Mobile app (React Native)

## 🤝 Support

For questions or issues:
- Review the code comments
- Check Firebase Console for data
- Review browser console for errors
- Check API route responses in Network tab

## 📄 License

This project is private and proprietary. All rights reserved.

---

**Built with ❤️ for helping people avoid unnecessary vehicle repairs**
