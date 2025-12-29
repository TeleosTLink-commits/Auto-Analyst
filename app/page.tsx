import Link from 'next/link';
import { Wrench, Stethoscope, Bike, Shield, DollarSign, Clock, Check, Mail, MapPin, Award, Heart } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary-600" />
              <span className="text-2xl font-bold text-gray-900">Auto Analyst</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#about" className="text-sm font-medium text-gray-700 hover:text-primary-600 transition">
                About
              </a>
              <a href="#services" className="text-sm font-medium text-gray-700 hover:text-primary-600 transition">
                Services
              </a>
              <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-primary-600 transition">
                Contact
              </a>
            </div>
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
            Get an unbiased second opinion from a retired master mechanic with nearly 20 years of experience. 
            We analyze repair quotes and help you avoid unnecessary charges.
          </p>
          <div className="mt-10">
            <a
              href="#services"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white text-lg font-semibold rounded-lg hover:bg-primary-700 transition shadow-lg"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-primary-50 rounded-full mb-6">
                <Award className="h-5 w-5 text-primary-600 mr-2" />
                <span className="text-sm font-semibold text-primary-600">Nearly 20 Years of Experience</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Fighting for Honest Auto Service
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  After spending nearly two decades as a master mechanic, I've witnessed firsthand how the auto industry 
                  often prioritizes profit over honesty. Too many times, I watched innocent customers get pressured into 
                  unnecessary repairs, overcharged for labor, or sold parts they didn't need.
                </p>
                <p>
                  I couldn't be part of that system anymore. So I walked away from the shop floor and started Auto Analyst 
                  with a simple mission: <strong>give customers the truth they deserve</strong>.
                </p>
                <p>
                  Now, I use my expertise to level the playing field. Every repair quote I analyze, every diagnostic plan 
                  I create, and every pre-purchase inspection I conduct is about protecting you from the tactics I used to 
                  see every single day.
                </p>
                <p className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Proudly serving customers nationwide from our base in <strong>Gilroy, California</strong></span>
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start">
                    <div className="bg-primary-100 rounded-lg p-3 mr-4">
                      <Shield className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Certified Master Technician</h3>
                      <p className="text-sm text-gray-600">ASE certified with expertise across all vehicle systems</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start">
                    <div className="bg-primary-100 rounded-lg p-3 mr-4">
                      <Heart className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Customer Advocate First</h3>
                      <p className="text-sm text-gray-600">No shop commissions. No upselling. Just honest analysis.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start">
                    <div className="bg-primary-100 rounded-lg p-3 mr-4">
                      <Wrench className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Industry Insider Knowledge</h3>
                      <p className="text-sm text-gray-600">I know the tricks because I've seen them all</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Professional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the service that fits your needs. All reports delivered within 24-48 hours.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Repair Audit */}
            <Link href="/services/repair-audit">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer border-2 border-transparent hover:border-primary-500 h-full">
                <div className="flex justify-center mb-4">
                  <Wrench className="h-16 w-16 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
                  Repair Audit
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  Already got a quote? We'll analyze it line-by-line to identify overcharges, unnecessary work, and markup schemes.
                </p>
                <div className="bg-primary-50 rounded-lg p-4 mb-6">
                  <p className="text-3xl font-bold text-center text-primary-600">$39</p>
                  <p className="text-sm text-center text-gray-600">Per Quote Analysis</p>
                </div>
                <ul className="space-y-3 text-sm text-gray-700 mb-6">
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
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer border-2 border-transparent hover:border-primary-500 h-full">
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
                <ul className="space-y-3 text-sm text-gray-700 mb-6">
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
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer border-2 border-transparent hover:border-primary-500 h-full">
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
                <ul className="space-y-3 text-sm text-gray-700 mb-6">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                    Video & photo analysis
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                    Common issue checklist
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                    Red flag identification
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                    Fair price assessment
                  </li>
                </ul>
                <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
                  Get Started
                </button>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-primary-100">
              Have questions? Ready to get started? Reach out today.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary-100 rounded-lg p-3 mr-4">
                        <Mail className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-500 uppercase">Email</p>
                        <a href="mailto:owner@auto-analyst.com" className="text-lg font-medium text-gray-900 hover:text-primary-600 transition">
                          owner@auto-analyst.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary-100 rounded-lg p-3 mr-4">
                        <MapPin className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-500 uppercase">Location</p>
                        <p className="text-lg font-medium text-gray-900">Gilroy, California</p>
                        <p className="text-sm text-gray-600">Serving customers nationwide</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary-100 rounded-lg p-3 mr-4">
                        <Clock className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-500 uppercase">Response Time</p>
                        <p className="text-lg font-medium text-gray-900">24-48 hours</p>
                        <p className="text-sm text-gray-600">All reports delivered promptly</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Auto Analyst?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Nearly 20 years of master technician experience</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">No conflicts of interest - we don't profit from repairs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Detailed, easy-to-understand reports</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Fast turnaround on all analysis</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Affordable pricing that pays for itself</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-300">
                  <p className="text-sm text-gray-600 italic">
                    "I left the industry because I couldn't stand watching customers get ripped off. 
                    Now I use my knowledge to protect you instead."
                  </p>
                </div>
              </div>
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
            <p className="text-gray-400 mb-2">
              Your trusted second opinion for vehicle repairs
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Gilroy, California | owner@auto-analyst.com
            </p>
            <p className="text-sm text-gray-500">
               2025 Auto Analyst. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}