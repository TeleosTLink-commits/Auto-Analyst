import { NextRequest, NextResponse } from 'next/server';
import { adminDb, collections } from '@/lib/firebase-admin';
import { generateCaseNumber } from '@/lib/utils';
import type { Case, RepairAuditCase, PreDiagnosisCase, BikePurchaseCase } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { serviceType } = body;

    const caseNumber = generateCaseNumber();
    const now = new Date();

    let caseData: Partial<Case>;

    // Build case data based on service type
    if (serviceType === 'repair-audit') {
      caseData = {
        caseNumber,
        serviceType: 'repair-audit',
        customerId: '', // Will be set after customer creation
        customerName: body.customerName,
        customerEmail: body.customerEmail,
        customerPhone: body.customerPhone,
        status: 'pending',
        paymentStatus: 'pending',
        paymentAmount: 39,
        createdAt: now,
        updatedAt: now,
        vehicleInfo: {
          year: body.vehicleYear,
          make: body.vehicleMake,
          model: body.vehicleModel,
          mileage: body.vehicleMileage,
          vin: body.vehicleVin,
        },
        diagnosticCodes: body.diagnosticCodes.split(',').map((c: string) => c.trim()),
        symptoms: body.symptoms,
        quoteImages: body.quoteImages || [],
        estimatedCost: parseFloat(body.estimatedCost.replace(/[$,]/g, '')) || 0,
        shopName: body.shopName,
        shopLocation: body.shopLocation,
      } as Partial<RepairAuditCase>;
    } else if (serviceType === 'pre-diagnosis') {
      caseData = {
        caseNumber,
        serviceType: 'pre-diagnosis',
        customerId: '',
        customerName: body.customerName,
        customerEmail: body.customerEmail,
        customerPhone: body.customerPhone,
        status: 'pending',
        paymentStatus: 'pending',
        paymentAmount: 49,
        createdAt: now,
        updatedAt: now,
        vehicleInfo: {
          year: body.vehicleYear,
          make: body.vehicleMake,
          model: body.vehicleModel,
          mileage: body.vehicleMileage,
        },
        symptoms: body.symptoms,
        diagnosticCodes: body.diagnosticCodes?.split(',').map((c: string) => c.trim()),
        videoUrl: body.videoUrl,
        freezeFrameData: body.freezeFrameData,
        obd2ScannerData: body.obd2Data,
      } as Partial<PreDiagnosisCase>;
    } else if (serviceType === 'bike-purchase') {
      caseData = {
        caseNumber,
        serviceType: 'bike-purchase',
        customerId: '',
        customerName: body.customerName,
        customerEmail: body.customerEmail,
        customerPhone: body.customerPhone,
        status: 'pending',
        paymentStatus: 'pending',
        paymentAmount: 59,
        createdAt: now,
        updatedAt: now,
        bikeInfo: {
          year: body.bikeYear,
          make: body.bikeMake,
          model: body.bikeModel,
          type: body.bikeType,
          askingPrice: parseFloat(body.askingPrice.replace(/[$,]/g, '')) || 0,
          mileage: body.mileageOrHours,
        },
        sellerDescription: body.sellerDescription,
        videoUrls: body.videoUrls || [],
        images: body.imageUrls || [],
      } as Partial<BikePurchaseCase>;
    } else {
      return NextResponse.json({ error: 'Invalid service type' }, { status: 400 });
    }

    // Create or update customer
    const customersRef = adminDb.collection(collections.customers);
    const customerQuery = await customersRef.where('email', '==', body.customerEmail).get();

    let customerId: string;

    if (customerQuery.empty) {
      // New customer
      const customerRef = await customersRef.add({
        name: body.customerName,
        email: body.customerEmail,
        phone: body.customerPhone,
        createdAt: now,
        totalCases: 1,
      });
      customerId = customerRef.id;
    } else {
      // Existing customer
      const customerDoc = customerQuery.docs[0];
      customerId = customerDoc.id;
      await customerDoc.ref.update({
        totalCases: (customerDoc.data().totalCases || 0) + 1,
      });
    }

    caseData.customerId = customerId;

    // Create case
    const caseRef = await adminDb.collection(collections.cases).add(caseData);

    return NextResponse.json({
      success: true,
      caseId: caseRef.id,
      caseNumber,
    });
  } catch (error) {
    console.error('Error creating case:', error);
    return NextResponse.json({ error: 'Failed to create case' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const caseId = searchParams.get('id');

    if (caseId) {
      // Get specific case
      const caseDoc = await adminDb.collection(collections.cases).doc(caseId).get();
      
      if (!caseDoc.exists) {
        return NextResponse.json({ error: 'Case not found' }, { status: 404 });
      }

      return NextResponse.json({
        id: caseDoc.id,
        ...caseDoc.data(),
      });
    } else {
      // Get all cases (for admin)
      const casesSnapshot = await adminDb
        .collection(collections.cases)
        .orderBy('createdAt', 'desc')
        .limit(100)
        .get();

      const cases = casesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return NextResponse.json({ cases });
    }
  } catch (error) {
    console.error('Error fetching cases:', error);
    return NextResponse.json({ error: 'Failed to fetch cases' }, { status: 500 });
  }
}
