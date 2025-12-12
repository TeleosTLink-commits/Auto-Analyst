'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Shield, CheckCircle } from 'lucide-react';
import Link from 'next/link';

function PaymentContent() {
  const searchParams = useSearchParams();
  const caseId = searchParams.get('caseId');
  const amount = searchParams.get('amount');

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-16 w-16 text-primary-600" />
          </div>
          
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Payment Processing
          </h1>

          <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-medium text-gray-900">Service Fee</span>
              <span className="text-3xl font-bold text-primary-600">${amount}</span>
            </div>
            <p className="text-sm text-gray-600">
              Case ID: <span className="font-mono">{caseId}</span>
            </p>
          </div>

          {/* Stripe Payment Integration Goes Here */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center mb-6">
            <p className="text-gray-600 mb-4">
              <strong>Stripe Payment Integration</strong>
            </p>
            <p className="text-sm text-gray-500">
              Add your Stripe publishable key to .env and implement Stripe Elements here
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-green-900 mb-2">What happens next?</h3>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>✓ You'll receive a confirmation email</li>
                  <li>✓ We'll review your case within 24-48 hours</li>
                  <li>✓ You'll receive a detailed audit report via email</li>
                  <li>✓ Report includes actionable recommendations</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/" className="text-primary-600 hover:text-primary-700">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PaymentPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 py-12 flex items-center justify-center">
        <div className="text-center">
          <Shield className="h-16 w-16 text-primary-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading payment details...</p>
        </div>
      </div>
    }>
      <PaymentContent />
    </Suspense>
  );
}
