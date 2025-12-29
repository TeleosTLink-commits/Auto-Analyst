import Link from 'next/link';
import { Shield, Mail, MapPin, Clock, Check, Zap, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Header */}
      <header className="bg-gray-900 shadow-lg border-b-2 border-primary-600">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <Shield className="h-8 w-8 text-primary-600 group-hover:text-primary-500 transition" />
              <span className="text-2xl font-bold text-white">Auto Analyst</span>
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-sm font-medium text-gray-300 hover:text-primary-400 transition">
                Home
              </Link>
              <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-primary-400 transition">
                About
              </Link>
              <Link href="/contact" className="text-sm font-medium text-primary-400 border-b-2 border-primary-400">
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Tech Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px),
                             repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)`
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gray-800 border-2 border-primary-600 rounded-full mb-6">
              <MessageSquare className="h-6 w-6 text-primary-600 mr-3" />
              <span className="text-lg font-bold text-primary-400 tracking-wide">GET IN TOUCH</span>
            </div>
            <h1 className="text-5xl font-extrabold text-white mb-6 tracking-tight">
              Ready to Get Your <span className="text-primary-500">Second Opinion?</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Have questions? Ready to start an analysis? Reach out today.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mt-6"></div>
          </div>

          {/* Contact Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Contact Information */}
            <div className="space-y-6">
              {/* Email Card */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-primary-600 rounded-lg p-8 shadow-2xl transform hover:scale-105 transition">
                <div className="flex items-start">
                  <div className="bg-primary-600 rounded-lg p-4 mr-4">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-primary-400 uppercase tracking-wide mb-2">Email</p>
                    <a 
                      href="mailto:owner@auto-analyst.com" 
                      className="text-2xl font-bold text-white hover:text-primary-400 transition break-all"
                    >
                      owner@auto-analyst.com
                    </a>
                    <p className="text-gray-400 mt-3">
                      Best way to reach me. I respond to all emails within 24 hours.
                    </p>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 rounded-lg p-8 shadow-xl">
                <div className="flex items-start">
                  <div className="bg-gray-700 rounded-lg p-4 mr-4">
                    <MapPin className="h-8 w-8 text-primary-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-primary-400 uppercase tracking-wide mb-2">Location</p>
                    <p className="text-2xl font-bold text-white mb-1">Gilroy, California</p>
                    <p className="text-gray-400">
                      Serving customers nationwide through remote analysis. All services are conducted digitally for your convenience.
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Time Card */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 rounded-lg p-8 shadow-xl">
                <div className="flex items-start">
                  <div className="bg-gray-700 rounded-lg p-4 mr-4">
                    <Clock className="h-8 w-8 text-primary-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-primary-400 uppercase tracking-wide mb-2">Turnaround Time</p>
                    <p className="text-2xl font-bold text-white mb-1">24-48 Hours</p>
                    <p className="text-gray-400">
                      All analysis reports are delivered within 24-48 hours. Rush service available upon request.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Why Choose Section */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-primary-600 rounded-lg p-8 shadow-2xl">
              <div className="flex items-center mb-6">
                <Zap className="h-8 w-8 text-primary-500 mr-3" />
                <h2 className="text-2xl font-bold text-white">Why Choose Auto Analyst?</h2>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-primary-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-lg leading-relaxed">
                    <strong className="text-white">Nearly 20 years</strong> of master technician experience
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-primary-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-lg leading-relaxed">
                    <strong className="text-white">Zero conflicts</strong> of interest - we don't profit from repairs
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-primary-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-lg leading-relaxed">
                    <strong className="text-white">Detailed reports</strong> that are easy to understand
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-primary-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-lg leading-relaxed">
                    <strong className="text-white">Fast turnaround</strong> on all analysis
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-primary-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-lg leading-relaxed">
                    <strong className="text-white">Affordable pricing</strong> that pays for itself
                  </span>
                </li>
              </ul>

              <div className="border-t-2 border-gray-700 pt-6">
                <div className="bg-gray-800 border border-primary-600 rounded-lg p-6">
                  <p className="text-gray-300 italic text-lg leading-relaxed mb-4">
                    "I left the industry because I couldn't stand watching customers get ripped off. 
                    Now I use my knowledge to protect you instead."
                  </p>
                  <p className="text-primary-400 font-semibold"> Auto Analyst Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-900 to-primary-800 border-t-2 border-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Send className="h-16 w-16 text-primary-300 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Choose a service below and submit your information. I'll get back to you with a detailed analysis.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/services/repair-audit"
              className="inline-flex items-center px-6 py-3 bg-white text-primary-900 font-bold rounded-lg hover:bg-gray-100 transition shadow-lg"
            >
              Repair Audit - $39
            </Link>
            <Link 
              href="/services/pre-diagnosis"
              className="inline-flex items-center px-6 py-3 bg-white text-primary-900 font-bold rounded-lg hover:bg-gray-100 transition shadow-lg"
            >
              Pre-Diagnosis - $49
            </Link>
            <Link 
              href="/services/bike-purchase"
              className="inline-flex items-center px-6 py-3 bg-white text-primary-900 font-bold rounded-lg hover:bg-gray-100 transition shadow-lg"
            >
              Bike Pre-Purchase - $59
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-8 border-t-2 border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Shield className="h-6 w-6 text-primary-400" />
              <span className="text-xl font-bold">Auto Analyst</span>
            </div>
            <p className="text-gray-400 text-sm mb-2">
              Gilroy, California | owner@auto-analyst.com
            </p>
            <p className="text-xs text-gray-500">
               2025 Auto Analyst. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}