'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Upload, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function BikePurchasePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [videoFiles, setVideoFiles] = useState<File[]>([]);
  const [imageFiles, setImageFiles] = useState<File[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);

    try {
      // Upload videos
      const videoUploadPromises = videoFiles.map(async (file) => {
        const fileFormData = new FormData();
        fileFormData.append('file', file);
        const res = await fetch('/api/upload', { method: 'POST', body: fileFormData });
        if (!res.ok) throw new Error('Upload failed');
        const data = await res.json();
        return data.url;
      });

      // Upload images
      const imageUploadPromises = imageFiles.map(async (file) => {
        const fileFormData = new FormData();
        fileFormData.append('file', file);
        const res = await fetch('/api/upload', { method: 'POST', body: fileFormData });
        if (!res.ok) throw new Error('Upload failed');
        const data = await res.json();
        return data.url;
      });

      const [videoUrls, imageUrls] = await Promise.all([
        Promise.all(videoUploadPromises),
        Promise.all(imageUploadPromises),
      ]);

      const caseData = {
        serviceType: 'bike-purchase',
        customerName: formData.get('customerName'),
        customerEmail: formData.get('customerEmail'),
        customerPhone: formData.get('customerPhone'),
        bikeYear: formData.get('bikeYear'),
        bikeMake: formData.get('bikeMake'),
        bikeModel: formData.get('bikeModel'),
        bikeType: formData.get('bikeType'),
        askingPrice: formData.get('askingPrice'),
        mileageOrHours: formData.get('mileageOrHours'),
        sellerDescription: formData.get('sellerDescription'),
        videoUrls,
        imageUrls,
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
      router.push(`/payment?caseId=${result.caseId}&amount=59`);
    } catch (err) {
      setError('Failed to submit. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Used Bike Pre-Purchase Inspection</h1>
          <p className="text-gray-600 mb-8">
            Provide details and media of the bike you're considering. We'll analyze it and tell you what questions to ask and what to look for.
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input type="text" name="customerName" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input type="email" name="customerEmail" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input type="tel" name="customerPhone" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                </div>
              </div>
            </div>

            {/* Bike Information */}
            <div className="border-b pb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Bike Information</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Year *</label>
                  <input type="text" name="bikeYear" required placeholder="2018" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Make *</label>
                  <input type="text" name="bikeMake" required placeholder="Honda" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Model *</label>
                  <input type="text" name="bikeModel" required placeholder="CRF450R" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type *</label>
                  <select name="bikeType" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    <option value="">Select type</option>
                    <option value="dirt-bike">Dirt Bike</option>
                    <option value="atv">ATV</option>
                    <option value="utv">UTV</option>
                    <option value="street-bike">Street Bike</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Asking Price *</label>
                  <input type="text" name="askingPrice" required placeholder="$4,500" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mileage or Hours *</label>
                  <input type="text" name="mileageOrHours" required placeholder="120 hours" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                </div>
              </div>
            </div>

            {/* Seller Description */}
            <div className="border-b pb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Seller Information</h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Seller's Description *</label>
                <textarea name="sellerDescription" required rows={6} placeholder="Paste or type the seller's description from the listing" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
              </div>
            </div>

            {/* Upload Videos */}
            <div className="border-b pb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Upload Videos *</h2>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <label className="cursor-pointer">
                  <span className="text-primary-600 hover:text-primary-700 font-medium">Click to upload videos</span>
                  <input type="file" accept="video/*" multiple required onChange={(e) => setVideoFiles(Array.from(e.target.files || []))} className="hidden" />
                </label>
                <p className="text-sm text-gray-500 mt-2">Videos of bike running, startup, idle, etc.</p>
                {videoFiles.length > 0 && <div className="mt-4 text-sm text-gray-700">{videoFiles.length} video(s) selected</div>}
              </div>
            </div>

            {/* Upload Images */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Upload Photos *</h2>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <label className="cursor-pointer">
                  <span className="text-primary-600 hover:text-primary-700 font-medium">Click to upload photos</span>
                  <input type="file" accept="image/*" multiple required onChange={(e) => setImageFiles(Array.from(e.target.files || []))} className="hidden" />
                </label>
                <p className="text-sm text-gray-500 mt-2">Photos of bike condition, air filter, chain, tires, etc.</p>
                {imageFiles.length > 0 && <div className="mt-4 text-sm text-gray-700">{imageFiles.length} photo(s) selected</div>}
              </div>
            </div>

            {/* Submit */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-medium text-gray-900">Service Fee</span>
                <span className="text-3xl font-bold text-primary-600">$59</span>
              </div>
              <button type="submit" disabled={loading} className="w-full bg-primary-600 text-white py-4 rounded-lg font-semibold hover:bg-primary-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed">
                {loading ? 'Submitting...' : 'Proceed to Payment'}
              </button>
              <p className="text-sm text-gray-500 text-center mt-3">You'll receive your inspection report within 24-48 hours</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
