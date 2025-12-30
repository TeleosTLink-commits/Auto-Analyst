import Link from 'next/link';
import { Shield, Wrench, Stethoscope, Bike, Check, ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary-600" />
              <span className="text-2xl font-bold text-gray-900">Auto Analyst</span>
            </Link>
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-sm font-medium text-gray-700 hover:text-primary-600 transition">
                Home
              </Link>
              <Link href="/services" className="text-sm font-medium text-primary-600 border-b-2 border-primary-600">
                Services
              </Link>
              <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-primary-600 transition">
                About
              </Link>
              <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-primary-600 transition">
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional vehicle analysis services designed to protect you from overcharges and dishonest practices. 
            All reports delivered within 24-48 hours.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Repair Audit */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-gray-200 hover:border-primary-500 transition-all transform hover:scale-105">
              <div className="bg-primary-600 text-white p-6 text-center">
                <Wrench className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold">Repair Audit</h3>
              </div>
              <div className="p-8">
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  Already got a quote from a shop? We'll analyze it line-by-line to identify overcharges, 
                  unnecessary work, and markup schemes.
                </p>
                <div className="bg-primary-50 rounded-lg p-6 mb-6 text-center">
                  <p className="text-4xl font-bold text-primary-600 mb-1">$39</p>
                  <p className="text-sm text-gray-600">Per Quote Analysis</p>
                </div>
                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Code vs. Part logic verification</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Diagnostic proof review</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Upsell and padding detection</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Labor hour analysis</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Detailed written report</span>
                    </li>
                  </ul>
                </div>
                <Link
                  href="/services/repair-audit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Pre-Diagnosis */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-gray-200 hover:border-primary-500 transition-all transform hover:scale-105">
              <div className="bg-primary-600 text-white p-6 text-center">
                <Stethoscope className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold">Pre-Diagnosis Roadmap</h3>
              </div>
              <div className="p-8">
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  Walk into the shop armed with knowledge. We'll create a diagnostic roadmap so you can't be 
                  taken advantage of.
                </p>
                <div className="bg-primary-50 rounded-lg p-6 mb-6 text-center">
                  <p className="text-4xl font-bold text-primary-600 mb-1">$49</p>
                  <p className="text-sm text-gray-600">Per Diagnostic Plan</p>
                </div>
                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Suspected issue identification</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Step-by-step testing plan</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Professional note for your mechanic</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Fair cost estimates</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Detailed diagnostic roadmap</span>
                    </li>
                  </ul>
                </div>
                <Link
                  href="/services/pre-diagnosis"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Bike Pre-Purchase */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-gray-200 hover:border-primary-500 transition-all transform hover:scale-105">
              <div className="bg-primary-600 text-white p-6 text-center">
                <Bike className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold">Bike Pre-Purchase</h3>
              </div>
              <div className="p-8">
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  Buying a used dirt bike or ATV? We'll analyze photos and videos to tell you what red flags 
                  to look for.
                </p>
                <div className="bg-primary-50 rounded-lg p-6 mb-6 text-center">
                  <p className="text-4xl font-bold text-primary-600 mb-1">$59</p>
                  <p className="text-sm text-gray-600">Per Inspection Report</p>
                </div>
                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Video & photo analysis</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Common issue checklist</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Red flag identification</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Fair market value assessment</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Comprehensive inspection report</span>
                    </li>
                  </ul>
                </div>
                <Link
                  href="/services/bike-purchase"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us and we'll help you choose the right service for your situation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white text-lg font-semibold rounded-lg hover:bg-primary-700 transition shadow-lg"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t-2 border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-6 w-6 text-primary-400" />
                <span className="text-xl font-bold">Auto Analyst</span>
              </div>
              <p className="text-gray-400 text-sm">
                Professional vehicle repair analysis and customer advocacy.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services" className="text-gray-400 hover:text-white transition">Services</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white transition">About</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Gilroy, California</li>
                <li>owner@auto-analyst.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm text-gray-500">
               2025 Auto Analyst. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}