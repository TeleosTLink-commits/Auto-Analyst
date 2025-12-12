'use client';

import { useState, useEffect } from 'react';
import { Shield, FileText, Users, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import type { Case } from '@/types';

export default function AdminDashboard() {
  const [cases, setCases] = useState<Case[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCase, setSelectedCase] = useState<Case | null>(null);

  useEffect(() => {
    fetchCases();
  }, []);

  const fetchCases = async () => {
    try {
      const response = await fetch('/api/cases');
      const data = await response.json();
      setCases(data.cases || []);
    } catch (error) {
      console.error('Error fetching cases:', error);
    } finally {
      setLoading(false);
    }
  };

  const stats = {
    total: cases.length,
    pending: cases.filter(c => c.status === 'pending').length,
    inReview: cases.filter(c => c.status === 'in-review').length,
    completed: cases.filter(c => c.status === 'completed').length,
  };

  const handleStartReview = async (caseItem: Case) => {
    try {
      const response = await fetch(`/api/cases/${caseItem.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'in-review' }),
      });
      if (response.ok) {
        await fetchCases();
        alert('Case status updated to "In Review"');
      }
    } catch (error) {
      console.error('Error updating case:', error);
      alert('Failed to update case status');
    }
  };

  const handleGenerateReport = (caseItem: Case) => {
    // For now, create a simple text report
    const reportContent = `
AUTO ANALYST REPORT
Case #: ${caseItem.caseNumber}
Date: ${new Date(caseItem.createdAt).toLocaleDateString()}

CUSTOMER INFORMATION
Name: ${caseItem.customerName}
Email: ${caseItem.customerEmail}
Phone: ${caseItem.customerPhone}

SERVICE TYPE: ${caseItem.serviceType.replace('-', ' ').toUpperCase()}

${caseItem.serviceType === 'repair-audit' && 'vehicleInfo' in caseItem ? `
VEHICLE INFORMATION
Year: ${caseItem.vehicleInfo.year}
Make: ${caseItem.vehicleInfo.make}
Model: ${caseItem.vehicleInfo.model}
Mileage: ${caseItem.vehicleInfo.mileage}

DIAGNOSTIC INFORMATION
Codes: ${caseItem.diagnosticCodes.join(', ')}
Symptoms: ${caseItem.symptoms}

SHOP INFORMATION
Shop: ${caseItem.shopName}
Location: ${caseItem.shopLocation}
Estimated Cost: $${caseItem.estimatedCost.toFixed(2)}

ANALYSIS
[Add your professional analysis here]

RECOMMENDATIONS
[Add your recommendations here]
` : ''}

STATUS: ${caseItem.status.toUpperCase()}
Payment Status: ${caseItem.paymentStatus}

---
Auto Analyst - Professional Vehicle Repair Analysis
    `.trim();

    // Download as text file
    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `report-${caseItem.caseNumber}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary-600" />
            <span className="text-2xl font-bold text-gray-900">Auto Analyst Admin</span>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Cases</p>
                <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
              </div>
              <FileText className="h-12 w-12 text-primary-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending</p>
                <p className="text-3xl font-bold text-yellow-600">{stats.pending}</p>
              </div>
              <Clock className="h-12 w-12 text-yellow-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">In Review</p>
                <p className="text-3xl font-bold text-blue-600">{stats.inReview}</p>
              </div>
              <AlertCircle className="h-12 w-12 text-blue-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Completed</p>
                <p className="text-3xl font-bold text-green-600">{stats.completed}</p>
              </div>
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
          </div>
        </div>

        {/* Cases Table */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Cases</h2>
          </div>

          {loading ? (
            <div className="p-8 text-center text-gray-600">Loading cases...</div>
          ) : cases.length === 0 ? (
            <div className="p-8 text-center text-gray-600">No cases yet</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Case #
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Service
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Payment
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cases.map((caseItem) => (
                    <tr key={caseItem.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {caseItem.caseNumber}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {caseItem.customerName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {caseItem.serviceType.replace('-', ' ')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${caseItem.status === 'completed' ? 'bg-green-100 text-green-800' : ''}
                          ${caseItem.status === 'in-review' ? 'bg-blue-100 text-blue-800' : ''}
                          ${caseItem.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : ''}
                        `}>
                          {caseItem.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${caseItem.paymentStatus === 'paid' ? 'bg-green-100 text-green-800' : ''}
                          ${caseItem.paymentStatus === 'pending' ? 'bg-yellow-100 text-yellow-800' : ''}
                        `}>
                          {caseItem.paymentStatus}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {new Date(caseItem.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => setSelectedCase(caseItem)}
                          className="text-primary-600 hover:text-primary-900"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Case Details Modal */}
      {selectedCase && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white">
              <h3 className="text-2xl font-bold text-gray-900">Case {selectedCase.caseNumber}</h3>
              <button
                onClick={() => setSelectedCase(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <div className="p-6">
              {/* Customer Info */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Customer Information</h4>
                <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
                  <div>
                    <p className="text-sm text-gray-600">Name</p>
                    <p className="font-medium">{selectedCase.customerName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-medium">{selectedCase.customerEmail}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="font-medium">{selectedCase.customerPhone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Service Type</p>
                    <p className="font-medium capitalize">{selectedCase.serviceType.replace('-', ' ')}</p>
                  </div>
                </div>
              </div>

              {/* Repair Audit Specific */}
              {selectedCase.serviceType === 'repair-audit' && 'vehicleInfo' in selectedCase && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Vehicle & Diagnostic Info</h4>
                  <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                    <div>
                      <p className="text-sm text-gray-600">Vehicle</p>
                      <p className="font-medium">
                        {selectedCase.vehicleInfo.year} {selectedCase.vehicleInfo.make} {selectedCase.vehicleInfo.model}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Mileage</p>
                      <p className="font-medium">{selectedCase.vehicleInfo.mileage}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Diagnostic Codes</p>
                      <p className="font-medium">{selectedCase.diagnosticCodes.join(', ')}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Symptoms</p>
                      <p className="font-medium">{selectedCase.symptoms}</p>
                    </div>
                    {selectedCase.shopName && (
                      <div>
                        <p className="text-sm text-gray-600">Shop</p>
                        <p className="font-medium">{selectedCase.shopName} - {selectedCase.shopLocation}</p>
                      </div>
                    )}
                    <div>
                      <p className="text-sm text-gray-600">Estimated Cost</p>
                      <p className="font-medium text-lg">${selectedCase.estimatedCost.toFixed(2)}</p>
                    </div>
                    {selectedCase.quoteImages && selectedCase.quoteImages.length > 0 && (
                      <div>
                        <p className="text-sm text-gray-600 mb-2">Quote Images</p>
                        <div className="grid grid-cols-3 gap-2">
                          {selectedCase.quoteImages.map((url, idx) => (
                            <a key={idx} href={url} target="_blank" rel="noopener noreferrer" className="block">
                              <img src={url} alt={`Quote ${idx + 1}`} className="w-full h-24 object-cover rounded" />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex space-x-3">
                <button
                  onClick={() => handleStartReview(selectedCase)}
                  className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
                >
                  Start Review
                </button>
                <button
                  onClick={() => handleGenerateReport(selectedCase)}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
                >
                  Generate Report
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
