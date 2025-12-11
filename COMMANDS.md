# Auto Auditor - Quick Commands Reference

## 🚀 Essential Commands

### Installation & Setup
```powershell
# Navigate to project
cd C:\Auto-Auditor

# Install dependencies (first time only)
npm install

# Create environment file
copy .env.example .env.local

# Edit environment file
notepad .env.local
```

### Running the Application
```powershell
# Start development server
npm run dev

# Visit in browser
# http://localhost:3000
```

### Building for Production
```powershell
# Create production build
npm run build

# Start production server
npm start

# Test the build locally
npm run build; npm start
```

### Development Commands
```powershell
# Check for errors
npm run lint

# Fix auto-fixable lint errors
npm run lint -- --fix

# Clean install (if issues)
Remove-Item -Recurse -Force node_modules
npm install
```

## 📁 File Paths

### Edit Key Files
```powershell
# Homepage
notepad app\page.tsx

# Repair Audit Form
notepad app\services\repair-audit\page.tsx

# Admin Dashboard
notepad app\admin\page.tsx

# Environment Variables
notepad .env.local

# Tailwind Config (colors)
notepad tailwind.config.js
```

### View Logs
```powershell
# Server logs
# Check terminal where npm run dev is running

# Browser logs
# Open browser DevTools (F12) → Console tab
```

## 🔥 Firebase Commands

### Open Firebase Console
```powershell
# Open in browser
start https://console.firebase.google.com
```

### View Your Data
1. Firebase Console → Firestore Database
2. See collections: cases, customers, shops
3. View individual documents

### View Uploaded Files
1. Firebase Console → Storage
2. Navigate to uploads/ folder
3. See images/, videos/, documents/

## 🎨 Customization Commands

### Change Primary Color
```powershell
# Edit this file
notepad tailwind.config.js

# Look for:
# primary: {
#   500: '#0ea5e9',  ← Change this
#   600: '#0284c7',  ← And this
# }
```

### Change Pricing
```powershell
# Search for current prices
findstr /s /i "$39" *.tsx
findstr /s /i "$49" *.tsx
findstr /s /i "$59" *.tsx

# Edit each file found
```

### Add Your Branding
```powershell
# Change company name in homepage
notepad app\page.tsx

# Change in admin header
notepad app\admin\page.tsx

# Change in all service forms
notepad app\services\repair-audit\page.tsx
# etc.
```

## 🐛 Troubleshooting Commands

### Clear Everything & Reinstall
```powershell
# Delete node_modules
Remove-Item -Recurse -Force node_modules

# Delete .next cache
Remove-Item -Recurse -Force .next

# Reinstall
npm install

# Run again
npm run dev
```

### Check Node & npm Versions
```powershell
node --version    # Should be 18.x or higher
npm --version     # Should be 9.x or higher
```

### Test Firebase Connection
```powershell
# Create test file
@"
const admin = require('firebase-admin');
admin.initializeApp();
console.log('Firebase connected!');
"@ | Out-File -Encoding UTF8 test-firebase.js

# Run test (after setting up .env.local)
node test-firebase.js

# Clean up
Remove-Item test-firebase.js
```

## 📊 Database Commands

### View Firestore Data (via API)
```powershell
# Start your dev server first
npm run dev

# Then open in browser:
start http://localhost:3000/api/cases
start http://localhost:3000/api/shops
```

### Manual Firestore Query (Node)
```powershell
# Create query script
@"
const admin = require('firebase-admin');
require('dotenv').config({ path: '.env.local' });

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
    clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY.replace(/\\n/g, '\n'),
  }),
});

const db = admin.firestore();

async function getCases() {
  const snapshot = await db.collection('cases').get();
  snapshot.forEach(doc => {
    console.log(doc.id, '=>', doc.data());
  });
}

getCases();
"@ | Out-File -Encoding UTF8 query-db.js

# Run it
node query-db.js

# Clean up
Remove-Item query-db.js
```

## 🧪 Testing Commands

### Submit Test Case
```powershell
# Open browser and submit a form
start http://localhost:3000/services/repair-audit

# View in admin
start http://localhost:3000/admin
```

### Test API Endpoint
```powershell
# Using PowerShell
Invoke-RestMethod -Uri http://localhost:3000/api/cases -Method GET

# Or using curl (if installed)
curl http://localhost:3000/api/cases
```

### Test File Upload
```powershell
# Create a test image
Add-Type -AssemblyName System.Drawing
$bmp = New-Object System.Drawing.Bitmap(100, 100)
$graphics = [System.Drawing.Graphics]::FromImage($bmp)
$graphics.Clear([System.Drawing.Color]::Blue)
$bmp.Save("test-upload.jpg")
$graphics.Dispose()
$bmp.Dispose()

# Upload via form at:
# http://localhost:3000/services/repair-audit

# Clean up
Remove-Item test-upload.jpg
```

## 📦 Deployment Commands

### Build & Test Locally
```powershell
# Create production build
npm run build

# Test production build locally
npm start

# Visit
start http://localhost:3000
```

### Deploy to Vercel
```powershell
# Install Vercel CLI (first time only)
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Environment Variables for Deployment
```powershell
# Add each variable via Vercel dashboard
# Or use CLI:
vercel env add NEXT_PUBLIC_FIREBASE_API_KEY
# (paste value when prompted)
```

## 🔍 Useful Searches

### Find All TODOs
```powershell
findstr /s /i "TODO" *.ts *.tsx
```

### Find All Console Logs
```powershell
findstr /s /i "console.log" *.ts *.tsx
```

### Find Specific Text
```powershell
# Example: Find where price is set
findstr /s /i "paymentAmount" *.ts *.tsx
```

## 📱 Open Important URLs

```powershell
# Your app (after npm run dev)
start http://localhost:3000

# Admin dashboard
start http://localhost:3000/admin

# Shop management
start http://localhost:3000/admin/shops

# Firebase Console
start https://console.firebase.google.com

# Stripe Dashboard
start https://dashboard.stripe.com
```

## 🎯 Daily Workflow Commands

### Morning Routine
```powershell
# Navigate to project
cd C:\Auto-Auditor

# Pull latest changes (if using git)
git pull

# Start dev server
npm run dev

# Open admin dashboard
start http://localhost:3000/admin
```

### Check New Cases
```powershell
# View API response
Invoke-RestMethod http://localhost:3000/api/cases | ConvertTo-Json

# Or just open admin
start http://localhost:3000/admin
```

### End of Day
```powershell
# Stop dev server
# Press Ctrl+C in terminal

# Commit changes (if using git)
git add .
git commit -m "Daily updates"
git push
```

## 🆘 Emergency Commands

### Site Won't Start
```powershell
# Kill all Node processes
Get-Process node | Stop-Process -Force

# Clean everything
Remove-Item -Recurse -Force node_modules, .next

# Reinstall
npm install

# Try again
npm run dev
```

### Firebase Connection Lost
```powershell
# Check .env.local exists
Test-Path .env.local

# Verify variables are set
Get-Content .env.local

# Restart server
# Ctrl+C then npm run dev
```

### Port 3000 Already in Use
```powershell
# Find process using port 3000
netstat -ano | findstr :3000

# Kill it (replace PID)
taskkill /PID <PID_NUMBER> /F

# Or use different port
$env:PORT=3001; npm run dev
```

## 📝 Git Commands (If Using Version Control)

```powershell
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add remote
git remote add origin <your-repo-url>

# Push
git push -u origin main

# Daily workflow
git add .
git commit -m "Updates"
git push
```

## 🔐 Security Commands

### Generate Admin Password Hash
```powershell
# Install bcrypt (if needed)
npm install bcryptjs

# Create hash script
@"
const bcrypt = require('bcryptjs');
const password = 'YourSecurePassword123!';
const hash = bcrypt.hashSync(password, 10);
console.log('Hash:', hash);
"@ | Out-File -Encoding UTF8 hash-password.js

# Run it
node hash-password.js

# Add hash to .env.local as ADMIN_PASSWORD_HASH
# Clean up
Remove-Item hash-password.js
```

## 🎓 Learning Commands

### View Project Structure
```powershell
tree /F /A
```

### Count Lines of Code
```powershell
Get-ChildItem -Recurse -Include *.ts,*.tsx | 
  Get-Content | 
  Measure-Object -Line
```

### View Package Dependencies
```powershell
npm list --depth=0
```

---

## 💡 Pro Tips

1. **Keep terminal open**: Run `npm run dev` in one terminal, use another for commands
2. **Use VS Code**: Open project with `code .`
3. **Hot reload**: Changes appear automatically when you save files
4. **Browser DevTools**: F12 shows errors and network requests
5. **Save often**: Ctrl+S after every change

---

## 🚀 Quick Reference Card

```
START SERVER:     npm run dev
VIEW SITE:        http://localhost:3000
VIEW ADMIN:       http://localhost:3000/admin
STOP SERVER:      Ctrl + C
REINSTALL:        npm install
CLEAN BUILD:      Remove-Item -Recurse -Force .next; npm run dev
```

---

**Bookmark this file! You'll use these commands daily.** 📌
