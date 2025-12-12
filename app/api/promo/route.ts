import { NextRequest, NextResponse } from 'next/server';
import { adminDb, collections } from '@/lib/firebase-admin';

// Promo codes configuration
const PROMO_CODES = {
  'FIRST10FREE': {
    discount: 100, // 100% off
    maxUses: 10,
    description: 'First 10 customers free!',
  },
};

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json();

    if (!code || !PROMO_CODES[code.toUpperCase()]) {
      return NextResponse.json(
        { error: 'Invalid promo code' },
        { status: 400 }
      );
    }

    const promoConfig = PROMO_CODES[code.toUpperCase()];
    
    // Check how many times this code has been used
    const promoRef = collections.db.collection('promos').doc(code.toUpperCase());
    const promoDoc = await promoRef.get();
    
    let usageCount = 0;
    if (promoDoc.exists) {
      usageCount = promoDoc.data()?.usageCount || 0;
    }

    if (usageCount >= promoConfig.maxUses) {
      return NextResponse.json(
        { error: 'Promo code has reached maximum usage limit' },
        { status: 400 }
      );
    }

    // Return the promo details
    return NextResponse.json({
      valid: true,
      discount: promoConfig.discount,
      description: promoConfig.description,
      remainingUses: promoConfig.maxUses - usageCount,
    });
  } catch (error) {
    console.error('Error validating promo code:', error);
    return NextResponse.json(
      { error: 'Failed to validate promo code' },
      { status: 500 }
    );
  }
}

// Track promo code usage
export async function PATCH(request: NextRequest) {
  try {
    const { code } = await request.json();

    if (!code || !PROMO_CODES[code.toUpperCase()]) {
      return NextResponse.json(
        { error: 'Invalid promo code' },
        { status: 400 }
      );
    }

    const promoRef = collections.db.collection('promos').doc(code.toUpperCase());
    const promoDoc = await promoRef.get();

    if (promoDoc.exists) {
      await promoRef.update({
        usageCount: (promoDoc.data()?.usageCount || 0) + 1,
        lastUsed: new Date(),
      });
    } else {
      await promoRef.set({
        code: code.toUpperCase(),
        usageCount: 1,
        firstUsed: new Date(),
        lastUsed: new Date(),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error tracking promo usage:', error);
    return NextResponse.json(
      { error: 'Failed to track promo usage' },
      { status: 500 }
    );
  }
}
