import { NextRequest, NextResponse } from 'next/server';
import { adminDb, collections } from '@/lib/firebase-admin';
import type { Shop } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const now = new Date();

    const shopData: Partial<Shop> = {
      name: body.name,
      location: body.location,
      address: body.address || '',
      phone: body.phone || '',
      rating: body.rating,
      auditHistory: {
        totalAudits: 0,
        approvedQuotes: 0,
        rejectedQuotes: 0,
        upsellAttempts: 0,
      },
      notes: body.notes || '',
      lastAuditDate: now,
      createdAt: now,
    };

    const shopRef = await adminDb.collection(collections.shops).add(shopData);

    return NextResponse.json({
      success: true,
      shopId: shopRef.id,
    });
  } catch (error) {
    console.error('Error creating shop:', error);
    return NextResponse.json({ error: 'Failed to create shop' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const shopId = searchParams.get('id');

    if (shopId) {
      const shopDoc = await adminDb.collection(collections.shops).doc(shopId).get();
      
      if (!shopDoc.exists) {
        return NextResponse.json({ error: 'Shop not found' }, { status: 404 });
      }

      return NextResponse.json({
        id: shopDoc.id,
        ...shopDoc.data(),
      });
    } else {
      const shopsSnapshot = await adminDb
        .collection(collections.shops)
        .orderBy('name', 'asc')
        .get();

      const shops = shopsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return NextResponse.json({ shops });
    }
  } catch (error) {
    console.error('Error fetching shops:', error);
    return NextResponse.json({ error: 'Failed to fetch shops' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { shopId, ...updates } = body;

    if (!shopId) {
      return NextResponse.json({ error: 'Shop ID required' }, { status: 400 });
    }

    await adminDb.collection(collections.shops).doc(shopId).update({
      ...updates,
      lastAuditDate: new Date(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating shop:', error);
    return NextResponse.json({ error: 'Failed to update shop' }, { status: 500 });
  }
}
