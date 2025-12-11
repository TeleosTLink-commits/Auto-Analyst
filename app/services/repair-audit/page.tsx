'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Upload, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function RepairAuditPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [quoteFiles, setQuoteFiles] = useState<File[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);

    try {
      // Upload quote images first
      const uploadPromises = quoteFiles.map(async (file) => {
        const fileFormData = new FormData();
        fileFormData.append('file', file);
        const res = await fetch('/api/upload', {
          method: 'POST',
          body: fileFormData,
        });
        if (!res.ok) throw new Error('Upload failed');
        const data = await res.json();
        return data.url;
      });

      const quoteImageUrls = await Promise.all(uploadPromises);

      // Submit case
      const caseData = {
        serviceType: 'repair-audit',
        customerName: formData.get('customerName'),
        customerEmail: formData.get('customerEmail'),
        customerPhone: formData.get('customerPhone'),
        vehicleYear: formData.get('vehicleYear'),
        vehicleMake: formData.get('vehicleMake'),
        vehicleModel: formData.get('vehicleModel'),
        vehicleMileage: formData.get('vehicleMileage'),
        vehicleVin: formData.get('vehicleVin'),
        diagnosticCodes: formData.get('diagnosticCodes'),
        symptoms: formData.get('symptoms'),
        shopName: formData.get('shopName'),
        shopLocation: formData.get('shopLocation'),
        estimatedCost: formData.get('estimatedCost'),
        quoteImages: quoteImageUrls,
      };

      const response = await fetch('/api/cases', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(caseData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit case');
      }

      const result = await response.json();

      // Redirect to payment
      router.push(`/payment?caseId=${result.caseId}&amount=39`);
    } catch (err) {
      setError('Failed to submit. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setQuoteFiles(Array.from(e.target.files));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center text-primary-600 hover:text-primary-700 mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Repair Audit Service</h1>
          <p className="text-gray-600 mb-8">
            Submit your repair quote and vehicle details. We'll analyze it and provide a detailed report within 24-48 hours.
          </p>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start">
              <AlertCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
              <span className="text-red-800">{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Customer Information */}
            <div className="border-b pb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Information</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="customerName"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="customerEmail"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="customerPhone"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Vehicle Information */}
            <div className="border-b pb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Vehicle Information</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Year *
                  </label>
                  <input
                    type="text"
                    name="vehicleYear"
                    required
                    placeholder="2020"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Make *
                  </label>
                  <input
                    type="text"
                    name="vehicleMake"
                    required
                    placeholder="Honda"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Model *
                  </label>
                  <input
                    type="text"
                    name="vehicleModel"
                    required
                    placeholder="Accord"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mileage *
                  </label>
                  <input
                    type="text"
                    name="vehicleMileage"
                    required
                    placeholder="85,000"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    VIN (Optional)
                  </label>
                  <input
                    type="text"
                    name="vehicleVin"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Diagnostic Information */}
            <div className="border-b pb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Diagnostic & Shop Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Diagnostic Codes (P-Codes) *
                  </label>
                  <input
                    type="text"
                    name="diagnosticCodes"
                    required
                    placeholder="P0420, P0301"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <p className="text-sm text-gray-500 mt-1">Separate multiple codes with commas</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Symptoms *
                  </label>
                  <textarea
                    name="symptoms"
                    required
                    rows={4}
                    placeholder="Describe what the vehicle is doing (stalling, rough idle, check engine light, etc.)"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Shop Name (Optional)
                    </label>
                    <input
                      type="text"
                      name="shopName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Shop Location (Optional)
                    </label>
                    <input
                      type="text"
                      name="shopLocation"
                      placeholder="City, State"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Estimated Repair Cost *
                  </label>
                  <input
                    type="text"
                    name="estimatedCost"
                    required
                    placeholder="$2,200"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Upload Quote */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Upload Repair Quote *</h2>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <label className="cursor-pointer">
                  <span className="text-primary-600 hover:text-primary-700 font-medium">
                    Click to upload
                  </span>
                  <span className="text-gray-600"> or drag and drop</span>
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    multiple
                    required
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
                <p className="text-sm text-gray-500 mt-2">
                  Upload photos of your repair estimate (PNG, JPG, PDF)
                </p>
                {quoteFiles.length > 0 && (
                  <div className="mt-4 text-sm text-gray-700">
                    {quoteFiles.length} file(s) selected
                  </div>
                )}
              </div>
            </div>

            {/* Submit */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-medium text-gray-900">Service Fee</span>
                <span className="text-3xl font-bold text-primary-600">$39</span>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary-600 text-white py-4 rounded-lg font-semibold hover:bg-primary-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {loading ? 'Submitting...' : 'Proceed to Payment'}
              </button>
              <p className="text-sm text-gray-500 text-center mt-3">
                You'll receive your detailed audit report within 24-48 hours
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
