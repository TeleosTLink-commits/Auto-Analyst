# Stripe Payment Setup Guide

## What's Already Working

✅ **Promo Code System** - `FIRST10FREE` gives 100% off for first 10 customers
✅ **Payment Page** - Displays pricing, applies discounts, tracks promo usage
✅ **Free Submission** - When promo = 100% off, case is submitted without payment

## Setting Up Stripe (When Ready to Charge)

### Step 1: Create Stripe Account

1. Go to https://stripe.com
2. Click **Sign Up**
3. Create your account
4. Complete business verification

### Step 2: Get Your API Keys

1. Go to Stripe Dashboard → **Developers** → **API keys**
2. Copy these keys:
   - **Publishable key** (starts with `pk_test_...`)
   - **Secret key** (starts with `sk_test_...`)

### Step 3: Add Keys to Vercel

1. Go to your Vercel project → **Settings** → **Environment Variables**
2. Add:
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` = your publishable key
   - `STRIPE_SECRET_KEY` = your secret key
3. Redeploy

### Step 4: Install Stripe Libraries

```powershell
cd C:\Auto-Auditor
npm install @stripe/stripe-js stripe
```

### Step 5: Enable Payment Methods

In Stripe Dashboard:
1. Go to **Settings** → **Payment methods**
2. Enable:
   - Credit/Debit cards
   - Google Pay
   - Apple Pay (if desired)

## Current Promo Strategy

**First 10 Customers Free:**
- Code: `FIRST10FREE`
- Discount: 100%
- Limit: 10 uses
- Benefit: Build trust, get reviews, populate shop database

**After 10 Free Customers:**
1. Update promo code in `app/api/promo/route.ts`:
   - Change `maxUses: 10` to `maxUses: 0` (disable)
   - Or create new promo like `LAUNCH25` for 25% off

2. Regular pricing kicks in automatically:
   - Repair Audit: $39
   - Pre-Diagnosis: $49
   - Bike Purchase: $59

## Tracking Promo Usage

Check Firebase Console → Firestore → `promos` collection:
- See how many times `FIRST10FREE` has been used
- Track when customers used it
- Remaining uses

## Payment Flow (Once Stripe is Active)

1. Customer fills out service form
2. Redirects to payment page
3. Can enter promo code
4. If promo = 100% off → Free submission
5. If promo < 100% → Shows discounted price
6. Stripe payment → Case marked as paid
7. Email confirmation sent
8. You review and generate report

## Test Mode vs Live Mode

**Test Mode** (current):
- Use test cards: `4242 4242 4242 4242`
- No real charges
- Good for testing

**Live Mode** (production):
- Real customer cards
- Real money
- Enable when ready to accept payments

## Next Steps

1. **Week 1-2:** Run first 10 free cases with `FIRST10FREE`
2. **Collect Reviews:** Ask free customers for Google/Facebook reviews
3. **Build Shop Database:** Add shops from free cases
4. **After 10 Free Cases:** Disable promo or reduce to 25% off
5. **Enable Stripe:** Follow setup steps above
6. **Market Paid Service:** Use reviews and shop database as social proof

## Important Notes

- Promo tracking is automatic (stored in Firestore)
- First 10 customers get email saying "Promo code applied - Free service!"
- After limit reached, code shows "maximum usage limit" error
- You can manually adjust limits in Firebase Console if needed

---

**Your Free Customer Strategy:**
Use these 10 free cases to:
1. Perfect your audit process
2. Time how long reviews take
3. Build case studies
4. Get testimonials
5. Identify trusted shops
6. Get comfortable with the platform

Then transition to paid customers with confidence! 🚀
