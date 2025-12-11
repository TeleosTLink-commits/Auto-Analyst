# Business Workflow Guide - Auto Auditor

## 🎯 How to Actually Use This Platform to Make Money

This guide walks you through the **entire process** from customer submission to delivered audit report.

---

## Workflow 1: Repair Audit Service ($39)

### Phase 1: Customer Submits Case

**What the customer does:**
1. Visits your site and clicks "Repair Audit"
2. Fills out form:
   - Personal info
   - Vehicle details (year, make, model, mileage)
   - Diagnostic codes (P0420, P0301, etc.)
   - Symptoms description
   - Shop name and location (optional)
   - Estimated repair cost
   - Photos of the quote
3. Pays $39
4. Receives confirmation email (you'll set this up)

**What you see in the admin dashboard:**
- New case appears with "Pending" status
- Payment status shows "Paid"
- All customer data is organized

### Phase 2: You Review the Case (30-60 minutes)

**Step 1: Open the case in admin dashboard**
- Go to http://localhost:3000/admin
- Click "View Details" on the case

**Step 2: Gather information**
- Download/view the quote images
- Write down the diagnostic codes
- Note the symptoms
- Check the estimated cost

**Step 3: Apply the 4 Filters**

Create a document or use the template below:

#### Filter 1: Code vs. Part Logic Check
**Question:** Does the recommended repair address the root cause or just the symptom?

**Example Analysis:**
```
Code: P0420 (Catalyst System Efficiency Below Threshold)
Shop's Recommendation: Replace catalytic converter ($1,800)
Your Analysis:
- P0420 can be caused by:
  1. Failed catalytic converter
  2. Exhaust leak before the downstream O2 sensor
  3. Faulty downstream O2 sensor
  4. Rich/lean fuel condition (bad fuel injectors, MAF sensor)
- Shop did not verify O2 sensor readings
- No mention of exhaust leak inspection
- No fuel trim data to rule out rich/lean conditions
Verdict: RED FLAG - Parts cannon approach
```

#### Filter 2: Diagnostic Proof Check
**Question:** Did they prove the diagnosis with test results?

**What to look for:**
- "Tested downstream O2 sensor - verified switching is slow"
- "Performed smoke test - found exhaust leak at manifold"
- "Fuel trims show -15% LTFT indicating rich condition"

**Example:**
```
Invoice shows: "Diagnosed P0420. Replace catalytic converter."
No test results documented.
Verdict: FAIL - No proof of actual testing
```

#### Filter 3: Shotgun Upsell Check
**Question:** Are they selling parts that aren't broken?

**Example:**
```
Primary Issue: Bad ignition coil on Cylinder 3
Shop Quote:
- Replace all 4 coils ($400)
- Replace all 4 spark plugs ($120)
- Replace plug wires ($180)
- Clean fuel injectors ($150)
Total: $850

Analysis: Only Cylinder 3 coil is bad. Others are upsells.
Recommendation: Replace only Cyl 3 coil (~$100)
Potential Savings: $750
```

#### Filter 4: Labor & Part Padding
**Question:** Is the labor time realistic? Are parts marked up excessively?

**How to check:**
- Google: "[Year Make Model] [repair] labor time"
- Check RockAuto/NAPA for part prices
- Compare to shop's quote

**Example:**
```
Alternator Replacement - 2018 Honda Accord
Shop Quote:
- Labor: 3.5 hours @ $150/hr = $525
- Alternator: $380
- Shop supplies: $45
Total: $950

Market Research:
- Actual labor time: 0.8 hours (45 minutes)
- Alternator cost (NAPA): $185
- Fair labor: 1.5 hours @ $150 = $225

Analysis: 
- Labor padded by 2 hours ($300 overcharge)
- Part marked up 105% ($195 overcharge)
Total Overcharge: ~$495
```

### Phase 3: Write Your Report

**Section 1: The Claim**
- Restate the customer's issue
- Show the shop's diagnosis
- Display the quoted cost

**Section 2: Technical Review**
- Walk through each of the 4 filters
- Explain in plain English what you found
- Point out specific red flags

**Section 3: Recommendation**

**If verdict is APPROVE:**
```
VERDICT: APPROVE
The shop correctly diagnosed the issue and provided 
proof via downstream O2 sensor testing. The labor 
time is appropriate and parts pricing is fair. 
You can proceed with this repair.
```

**If verdict is REJECT:**
```
VERDICT: DO NOT APPROVE

The shop is attempting to replace the catalytic 
converter without proving it's the problem. 

NEXT STEPS:
1. Do NOT authorize this repair yet
2. Ask the shop these specific questions:
   - "Can you show me the downstream O2 sensor data?"
   - "Did you perform a smoke test for exhaust leaks?"
   - "What are the fuel trim values?"
3. If they can't answer, take your car to [suggest shop name]

Questions to Ask:
- "Have you verified the downstream O2 sensor is switching?"
- "Did you check for exhaust leaks before the O2 sensor?"
- "Can you show me the data that proves the cat is bad?"
```

### Phase 4: Generate & Deliver Report

**Using the platform:**
1. In admin dashboard, click "Generate Report"
2. PDF is automatically created using your analysis
3. Upload to case (or email directly to customer)

**Manual method (until automated):**
1. Write your analysis in a document
2. Export as PDF
3. Email to customer

**Email template:**
```
Subject: Your Auto Audit Report - Case #AA-123456

Hi [Customer Name],

Thank you for using Auto Auditor! I've completed the review 
of your repair quote.

TL;DR: [APPROVE / REJECT / INVESTIGATE FURTHER]

Your detailed audit report is attached. Here's what I found:

[2-3 sentence summary]

Next Steps:
[Bullet points of what they should do]

If you have questions, reply to this email or call me at 
[your phone].

Best regards,
[Your Name]
Auto Auditor
```

---

## Workflow 2: Pre-Diagnosis Roadmap ($49)

### Phase 1: Customer Submits

**What they provide:**
- Vehicle info
- Detailed symptoms
- Diagnostic codes (if they have them)
- OBD2 scanner data (if available)
- Video of the issue (optional)

### Phase 2: You Create the Roadmap

**Step 1: Analyze the symptoms**

Example:
```
Customer symptoms: "Car stalls at stops, rough idle, 
check engine light. Code P0505 - Idle Air Control valve."

Your analysis:
- P0505 points to IAC system
- Stalling at stops confirms idle control issue
- Could be: bad IAC valve, vacuum leak, throttle body carbon
```

**Step 2: Create diagnostic steps**

```
SUSPECTED ISSUE: Idle Air Control System Malfunction

DIAGNOSTIC STEPS:
Step 1: Inspect for vacuum leaks (smoke test)
Step 2: Clean throttle body and IAC valve
Step 3: Test IAC valve operation with scan tool
Step 4: If steps 1-3 pass, replace IAC valve

ESTIMATED COST:
- If just cleaning: $100-$150 (1 hour labor)
- If IAC valve needed: $200-$350 (part + labor)
```

**Step 3: Write the mechanic note**

This is THE KEY DELIVERABLE - the customer hands this to their mechanic:

```
NOTE FOR YOUR MECHANIC:

Vehicle: 2015 Honda Civic, 98,000 miles
Code: P0505 - Idle Air Control Circuit Malfunction
Symptoms: Stalling at stops, rough idle

Before replacing parts, please:
1. Perform smoke test to rule out vacuum leaks
2. Clean throttle body and IAC valve
3. Test IAC valve operation with scan tool

If cleaning doesn't resolve the issue and IAC valve 
tests show failure, then replacement is warranted.

Please provide test results before quoting parts replacement.

Thank you!
```

### Phase 3: Deliver the Roadmap

**What the customer gets:**
- Suspected issue explanation
- Step-by-step diagnostic plan
- Note to hand to mechanic
- Cost estimates (low and high)

**Value to customer:**
- They walk in educated
- Mechanic takes them seriously
- Prevents "diagnostic fee" fishing expeditions
- They know what questions to ask

---

## Workflow 3: Bike Pre-Purchase ($59)

### Phase 1: Customer Submits

**What they provide:**
- Bike details (year, make, model, type)
- Asking price
- Seller's description
- Videos (running, startup, idle)
- Photos (overall condition, air filter, chain, tires)

### Phase 2: You Analyze

**Watch for red flags:**

**Visual inspection from photos/videos:**
- Air filter condition (dirty = not maintained)
- Chain slack and wear (expensive to replace)
- Tire tread (immediate $$ if worn)
- Oil condition (black/burnt = abuse)
- Smoke from exhaust (blue = oil burning, white = coolant)
- Unusual noises (knocking, rattling)
- Missing parts or damage

**Maintenance red flags:**
- Can't provide service records
- "Just needs a carb cleaning" (code for "I don't know what's wrong")
- Recent top-end rebuild (why was it needed?)
- Non-OEM parts (aftermarket carb, Chinese parts)

### Phase 3: Create Inspection Report

**Section 1: Red Flags**
```
⚠️ RED FLAGS IDENTIFIED:
1. Air filter is completely caked with dirt
2. Chain is rusty and has excessive slack
3. Coolant is brown (indicates neglect or head gasket issue)
4. Seller can't provide service records
```

**Section 2: Questions to Ask**
```
QUESTIONS FOR THE SELLER:
1. When was the last time valves were shimmed?
2. Why was the top-end rebuilt at 80 hours? (if applicable)
3. Can you provide any maintenance records?
4. Has it ever overheated?
5. Can I see a cold start? (not warmed up first)
6. Why are you selling it?
```

**Section 3: Physical Inspection Checklist**
```
THINGS TO CHECK IN PERSON:
☐ Cold start (should start within 2-3 kicks)
☐ Listen for rattling/knocking at idle
☐ Check for coolant leaks around water pump
☐ Look at fork seals for oil leaking
☐ Check brake pads thickness
☐ Inspect subframe for cracks (common on MX bikes)
☐ Check VIN matches title
```

**Section 4: Verdict**

**BUY:**
```
VERDICT: BUY (with negotiation)

This bike appears to be in decent shape overall. 
The chain and air filter need immediate attention 
(~$200 in parts). Use this as negotiation leverage.

Offer: $3,800 (down from $4,500 asking price)
Justification: $500 for chain/sprockets/filter + labor
```

**NEGOTIATE:**
```
VERDICT: NEGOTIATE

The bike has some issues but nothing catastrophic. 
Estimated repair costs: $600-$800

Current asking price: $5,000
Fair price considering repairs: $4,200-$4,400
```

**WALK AWAY:**
```
VERDICT: WALK AWAY

Multiple red flags indicate this bike has been 
abused and poorly maintained:
- Brown coolant (head gasket failure risk)
- Excessive smoke (piston rings worn)
- Seller evasive about history
- No service records

Estimated repair costs: $1,500-$2,500
This is a money pit. Keep looking.
```

---

## 💰 Pricing & Upsell Strategy

### Base Services
- Repair Audit: $39
- Pre-Diagnosis: $49
- Bike Purchase: $59

### Upsells (Future)
- **Rush Service (+$20)**: 12-hour turnaround
- **Video Call Consultation (+$30)**: 15-minute call to discuss report
- **Shop Recommendation (+$0)**: Free, builds trust
- **Follow-up Audit (+$20)**: Review the shop's revised quote

### Package Deals
- **3-Audit Package**: $99 (save $18)
- **Annual Unlimited**: $299 (for fleet managers or DIYers)

---

## 📊 Time Management

**Goal:** Complete each audit in under 1 hour

**Repair Audit:** 45-60 minutes
- Research codes: 10 minutes
- Analyze quote: 15 minutes
- Write report: 20 minutes
- Generate PDF: 5 minutes
- Email customer: 5 minutes

**Pre-Diagnosis:** 30-45 minutes
- Analyze symptoms: 10 minutes
- Research TSBs/common issues: 15 minutes
- Write roadmap: 15 minutes
- Email customer: 5 minutes

**Bike Pre-Purchase:** 45-60 minutes
- Watch videos: 15 minutes
- Review photos: 10 minutes
- Research model issues: 10 minutes
- Write report: 20 minutes
- Email customer: 5 minutes

**At $39-59 per audit, 1 hour per audit = $40-60/hour**
**Goal:** Scale to 5-10 audits per day = $200-500/day

---

## 🚀 Marketing Ideas

1. **Local Facebook Groups**
   - "Just saved someone $1,200 on a bogus cat replacement!"
   - Offer first 5 customers 50% off

2. **Before/After Posts**
   - "Shop quoted $2,200. Real fix: $185."
   - Show your analysis (with permission)

3. **Partner with YouTube Mechanics**
   - Offer their viewers a discount code

4. **Craigslist/Marketplace**
   - Target people selling cars ("selling because repair is too expensive")

5. **Testimonials**
   - "Paid $39, saved $1,500. Best money I ever spent!"

---

## ✅ Your First Real Case Checklist

- [ ] Customer submits and pays
- [ ] You download all documents
- [ ] Research the diagnostic codes
- [ ] Apply the 4-filter analysis
- [ ] Write clear recommendations
- [ ] Generate professional PDF
- [ ] Email report to customer
- [ ] Follow up in 3 days
- [ ] Ask for testimonial if happy

---

**You're ready to start your Auto Auditor business! 🚗💰**

Remember: You're not just saving people money - you're restoring trust in an industry that desperately needs it.
