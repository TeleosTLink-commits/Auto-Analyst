import Link from 'next/link';
import { Shield, FileCheck, TrendingDown, Clock, ArrowRight } from 'lucide-react';

export default function Home() {
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
              <Link href="/" className="text-sm font-medium text-primary-600 border-b-2 border-primary-600">
                Home
              </Link>
              <Link href="/services" className="text-sm font-medium text-gray-700 hover:text-primary-600 transition">
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
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px),
                             repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)`
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Stop Overpaying for <span className="text-primary-400">Vehicle Repairs</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Professional, unbiased second opinions from a retired master mechanic with nearly 20 years of experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white text-lg font-semibold rounded-lg hover:bg-primary-700 transition shadow-lg"
              >
                View Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 text-lg font-semibold rounded-lg hover:bg-gray-100 transition"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide independent analysis of vehicle repair quotes, diagnostic plans, and pre-purchase inspections 
              to protect you from unnecessary charges and dishonest practices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-primary-500 transition">
              <div className="bg-primary-100 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
                <FileCheck className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Unbiased Analysis</h3>
              <p className="text-gray-600 leading-relaxed">
                No shop affiliations, no commissions, no upselling. Just honest, expert analysis you can trust.
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-primary-500 transition">
              <div className="bg-primary-100 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
                <TrendingDown className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Save Money</h3>
              <p className="text-gray-600 leading-relaxed">
                Identify overcharges, unnecessary repairs, and inflated labor rates before you spend a dime.
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-primary-500 transition">
              <div className="bg-primary-100 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
                <Clock className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Turnaround</h3>
              <p className="text-gray-600 leading-relaxed">
                Detailed reports delivered within 24-48 hours so you can make informed decisions quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Get expert analysis in four simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-primary-600 h-full">
                <div className="bg-primary-600 rounded-full h-12 w-12 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">Choose Service</h3>
                <p className="text-gray-600">Select the service that matches your needs from our three specialized offerings.</p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-primary-600 h-full">
                <div className="bg-primary-600 rounded-full h-12 w-12 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">Submit Information</h3>
                <p className="text-gray-600">Upload your repair quote, photos, videos, or provide details about your vehicle issue.</p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-primary-600 h-full">
                <div className="bg-primary-600 rounded-full h-12 w-12 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">Expert Review</h3>
                <p className="text-gray-600">Our master technician analyzes everything with nearly 20 years of industry experience.</p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-primary-600 h-full">
                <div className="bg-primary-600 rounded-full h-12 w-12 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">Receive Report</h3>
                <p className="text-gray-600">Get a detailed, easy-to-understand report within 24-48 hours with clear recommendations.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white text-lg font-semibold rounded-lg hover:bg-primary-700 transition shadow-lg"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Yourself?</h2>
          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            Don't let dishonest shops take advantage of you. Get a professional second opinion today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-900 text-lg font-semibold rounded-lg hover:bg-gray-100 transition"
            >
              View Services
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-700 text-white text-lg font-semibold rounded-lg hover:bg-primary-600 transition border-2 border-white"
            >
              Contact Us
            </Link>
          </div>
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