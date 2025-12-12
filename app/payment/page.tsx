'use client';

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Shield, CheckCircle, Tag } from 'lucide-react';
import Link from 'next/link';

function PaymentContent() {
  const searchParams = useSearchParams();
  const caseId = searchParams.get('caseId');
  const baseAmount = parseFloat(searchParams.get('amount') || '0');
  
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');
  const [discount, setDiscount] = useState(0);
  const [validating, setValidating] = useState(false);

  const finalAmount = baseAmount * (1 - discount / 100);

  const handleApplyPromo = async () => {
    if (!promoCode.trim()) return;
    
    setValidating(true);
    setPromoError('');
    
    try {
      const response = await fetch('/api/promo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: promoCode }),
      });

      const data = await response.json();

      if (response.ok && data.valid) {
        setDiscount(data.discount);
        setPromoApplied(true);
        setPromoError('');
      } else {
        setPromoError(data.error || 'Invalid promo code');
        setDiscount(0);
        setPromoApplied(false);
      }
    } catch (error) {
      setPromoError('Failed to validate promo code');
      setDiscount(0);
      setPromoApplied(false);
    } finally {
      setValidating(false);
    }
  };

  const handlePayment = async () => {
    // Track promo usage if applied
    if (promoApplied && promoCode) {
      await fetch('/api/promo', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: promoCode }),
      });
    }

    if (finalAmount === 0) {
      // Update case as paid
      await fetch(`/api/cases/${caseId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ paymentStatus: 'completed' }),
      });
      alert('Case submitted successfully! No payment required with promo code.');
      window.location.href = '/';
    } else {
      alert('Stripe payment integration would go here');
    }
  };

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

          {/* Promo Code Section */}
          <div className="mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Tag className="h-5 w-5 text-blue-600" />
                <span className="font-semibold text-blue-900">Special Offer!</span>
              </div>
              <p className="text-sm text-blue-800">
                Use code <strong>FIRST10FREE</strong> - First 10 customers get 100% off!
              </p>
            </div>
            
            <div className="flex gap-2">
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                placeholder="Enter promo code"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                disabled={promoApplied}
              />
              <button
                onClick={handleApplyPromo}
                disabled={validating || promoApplied || !promoCode.trim()}
                className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                {validating ? 'Checking...' : promoApplied ? 'Applied!' : 'Apply'}
              </button>
            </div>
            {promoError && (
              <p className="text-sm text-red-600 mt-2">{promoError}</p>
            )}
            {promoApplied && (
              <p className="text-sm text-green-600 mt-2">
                ✓ Promo code applied - {discount}% discount!
              </p>
            )}
          </div>

          <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium text-gray-900">Service Fee</span>
                <span className={`text-xl font-bold ${discount > 0 ? 'line-through text-gray-400' : 'text-primary-600'}`}>
                  ${baseAmount.toFixed(2)}
                </span>
              </div>
              {discount > 0 && (
                <>
                  <div className="flex items-center justify-between text-green-600">
                    <span className="text-sm font-medium">Discount ({discount}%)</span>
                    <span className="text-sm font-bold">-${(baseAmount * discount / 100).toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-300 pt-3 flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">Total</span>
                    <span className="text-3xl font-bold text-primary-600">
                      ${finalAmount.toFixed(2)}
                    </span>
                  </div>
                </>
              )}
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Case ID: <span className="font-mono">{caseId}</span>
            </p>
          </div>

          {finalAmount > 0 ? (
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center mb-6">
              <p className="text-gray-600 mb-4">
                <strong>Stripe Payment Integration</strong>
              </p>
              <p className="text-sm text-gray-500">
                Add your Stripe publishable key to .env and implement Stripe Elements here
              </p>
              <button
                onClick={handlePayment}
                className="mt-4 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold"
              >
                Pay ${finalAmount.toFixed(2)}
              </button>
            </div>
          ) : (
            <div className="bg-green-50 border-2 border-green-300 rounded-lg p-8 text-center mb-6">
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-900 mb-2">Free Service!</h3>
              <p className="text-green-800 mb-4">
                Your promo code covers the full cost. Click below to submit your case.
              </p>
              <button
                onClick={handlePayment}
                className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold text-lg"
              >
                Submit Case (No Payment Required)
              </button>
            </div>
          )}

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
