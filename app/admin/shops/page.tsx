'use client';

import { useState, useEffect } from 'react';
import { Shield, AlertTriangle, ThumbsUp, ThumbsDown, MapPin, Phone } from 'lucide-react';
import type { Shop } from '@/types';

export default function ShopsPage() {
  const [shops, setShops] = useState<Shop[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    fetchShops();
  }, []);

  const fetchShops = async () => {
    try {
      const response = await fetch('/api/shops');
      const data = await response.json();
      setShops(data.shops || []);
    } catch (error) {
      console.error('Error fetching shops:', error);
    } finally {
      setLoading(false);
    }
  };

  const getRatingColor = (rating: Shop['rating']) => {
    switch (rating) {
      case 'trusted':
        return 'bg-green-100 text-green-800';
      case 'verified':
        return 'bg-blue-100 text-blue-800';
      case 'caution':
        return 'bg-yellow-100 text-yellow-800';
      case 'avoid':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary-600" />
              <span className="text-2xl font-bold text-gray-900">Shop Directory</span>
            </div>
            <button
              onClick={() => setShowAddForm(true)}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
            >
              Add Shop
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Rating Legend */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h3 className="font-semibold text-gray-900 mb-4">Rating System</h3>
          <div className="grid grid-cols-4 gap-4">
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Trusted
              </span>
              <span className="text-sm text-gray-600">Never tried to upsell</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Verified
              </span>
              <span className="text-sm text-gray-600">Honest, good track record</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                Caution
              </span>
              <span className="text-sm text-gray-600">Some questionable quotes</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                Avoid
              </span>
              <span className="text-sm text-gray-600">Multiple bad audits</span>
            </div>
          </div>
        </div>

        {/* Shops Grid */}
        {loading ? (
          <div className="text-center py-12 text-gray-600">Loading shops...</div>
        ) : shops.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <p className="text-gray-600">No shops tracked yet. Add your first shop audit!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shops.map((shop) => (
              <div key={shop.id} className="bg-white rounded-lg shadow hover:shadow-lg transition p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{shop.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getRatingColor(shop.rating)}`}>
                    {shop.rating.toUpperCase()}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-start text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                    <span>{shop.location}</span>
                  </div>
                  {shop.address && (
                    <div className="text-sm text-gray-600 ml-6">{shop.address}</div>
                  )}
                  {shop.phone && (
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="h-4 w-4 mr-2" />
                      <span>{shop.phone}</span>
                    </div>
                  )}
                </div>

                {/* Audit Stats */}
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-gray-900">{shop.auditHistory.totalAudits}</p>
                      <p className="text-xs text-gray-600">Total Audits</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-green-600">{shop.auditHistory.approvedQuotes}</p>
                      <p className="text-xs text-gray-600">Approved</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-red-600">{shop.auditHistory.rejectedQuotes}</p>
                      <p className="text-xs text-gray-600">Rejected</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-yellow-600">{shop.auditHistory.upsellAttempts}</p>
                      <p className="text-xs text-gray-600">Upsells</p>
                    </div>
                  </div>
                </div>

                {shop.notes && (
                  <div className="text-sm text-gray-600 mb-4">
                    <p className="font-medium mb-1">Notes:</p>
                    <p className="line-clamp-2">{shop.notes}</p>
                  </div>
                )}

                <div className="text-xs text-gray-500">
                  Last audit: {new Date(shop.lastAuditDate).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add Shop Form Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6">
            <h3 className="text-2xl font-bold mb-6">Add New Shop</h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Shop Name *</label>
                  <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
                  <input type="text" required placeholder="City, State" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rating *</label>
                  <select required className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                    <option value="">Select rating</option>
                    <option value="trusted">Trusted</option>
                    <option value="verified">Verified</option>
                    <option value="caution">Caution</option>
                    <option value="avoid">Avoid</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Notes</label>
                  <textarea rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                </div>
              </div>

              <div className="flex space-x-3 pt-4">
                <button type="submit" className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
                  Add Shop
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
