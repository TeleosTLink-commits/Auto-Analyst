import Link from 'next/link';
import { Wrench, Stethoscope, Bike, Shield, DollarSign, Clock, Check } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary-600" />
              <span className="text-2xl font-bold text-gray-900">Auto Analyst</span>
            </div>
            <Link 
              href="/admin" 
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Admin Login
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl">
            Stop Overpaying for <span className="text-primary-600">Vehicle Repairs</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Get an expert second opinion before approving that expensive repair bill. 
            We analyze quotes, create diagnostic roadmaps, and help you avoid unnecessary repairs.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-700">
              <DollarSign className="h-5 w-5 text-green-600" />
              <span>Save $1,000s</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Clock className="h-5 w-5 text-blue-600" />
              <span>24-48hr Turnaround</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Shield className="h-5 w-5 text-primary-600" />
              <span>Expert Analysis</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Choose Your Service
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Repair Audit */}
          <Link href="/services/repair-audit">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer border-2 border-transparent hover:border-primary-500">
              <div className="flex justify-center mb-4">
                <Wrench className="h-16 w-16 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
                Repair Audit
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Got a high repair quote? We'll review it line-by-line and tell you if it's legit or if you're being upsold.
              </p>
              <div className="bg-primary-50 rounded-lg p-4 mb-6">
                <p className="text-3xl font-bold text-center text-primary-600">$39</p>
                <p className="text-sm text-center text-gray-600">Per Quote Review</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  Code vs. Part logic check
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  Diagnostic proof verification
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  Upsell detection
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  Labor padding analysis
                </li>
              </ul>
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
                Get Started
              </button>
            </div>
          </Link>

          {/* Pre-Diagnosis */}
          <Link href="/services/pre-diagnosis">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer border-2 border-transparent hover:border-primary-500">
              <div className="flex justify-center mb-4">
                <Stethoscope className="h-16 w-16 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
                Pre-Diagnosis Roadmap
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Walk into the shop armed with knowledge. We'll create a diagnostic roadmap so you can't be taken advantage of.
              </p>
              <div className="bg-primary-50 rounded-lg p-4 mb-6">
                <p className="text-3xl font-bold text-center text-primary-600">$49</p>
                <p className="text-sm text-center text-gray-600">Per Diagnostic Plan</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  Suspected issue identification
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  Step-by-step testing plan
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  Note for your mechanic
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  Cost estimates
                </li>
              </ul>
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
                Get Started
              </button>
            </div>
          </Link>

          {/* Bike Pre-Purchase */}
          <Link href="/services/bike-purchase">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer border-2 border-transparent hover:border-primary-500">
              <div className="flex justify-center mb-4">
                <Bike className="h-16 w-16 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
                Bike Pre-Purchase
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Buying a used dirt bike or ATV? We'll analyze videos and tell you what red flags to look for.
              </p>
              <div className="bg-primary-50 rounded-lg p-4 mb-6">
                <p className="text-3xl font-bold text-center text-primary-600">$59</p>
                <p className="text-sm text-center text-gray-600">Per Inspection Report</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  Video & photo analysis
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  Red flag identification
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  Questions to ask seller
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  Buy/negotiate/walk verdict
                </li>
              </ul>
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
                Get Started
              </button>
            </div>
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Choose Service</h3>
              <p className="text-gray-600 text-sm">Select the service that matches your needs</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Submit Details</h3>
              <p className="text-gray-600 text-sm">Upload your quote, photos, or videos</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Expert Analysis</h3>
              <p className="text-gray-600 text-sm">We review and analyze everything</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">4</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Get Report</h3>
              <p className="text-gray-600 text-sm">Receive detailed audit report in 24-48hrs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-primary-400" />
              <span className="text-2xl font-bold">Auto Analyst</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted second opinion for vehicle repairs
            </p>
            <p className="text-sm text-gray-500">
              Ã‚Â© 2025 Auto Auditor. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
