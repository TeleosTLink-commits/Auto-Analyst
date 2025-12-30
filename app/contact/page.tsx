'use client';

import Link from 'next/link';
import { Shield, Mail, MapPin, Clock, Send, Facebook } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1000);
  };

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
              <Link href="/services" className="text-sm font-medium text-gray-700 hover:text-primary-600 transition">
                Services
              </Link>
              <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-primary-600 transition">
                About
              </Link>
              <Link href="/contact" className="text-sm font-medium text-primary-600 border-b-2 border-primary-600">
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to get your second opinion? Have questions? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none transition"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none transition"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none transition resize-none"
                    placeholder="Tell us about your situation or ask any questions..."
                  />
                </div>
                {status === 'success' && (
                  <div className="p-4 bg-green-50 border-2 border-green-500 rounded-lg text-green-700 font-semibold">
                    Message sent successfully! We'll get back to you within 24 hours.
                  </div>
                )}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full inline-flex items-center justify-center px-6 py-4 bg-primary-600 text-white text-lg font-semibold rounded-lg hover:bg-primary-700 transition shadow-lg disabled:opacity-50"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Email */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200 hover:border-primary-500 transition">
                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-lg p-4 mr-4">
                    <Mail className="h-8 w-8 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                    <a
                      href="mailto:owner@auto-analyst.com"
                      className="text-lg text-primary-600 hover:text-primary-700 font-medium"
                    >
                      owner@auto-analyst.com
                    </a>
                    <p className="text-gray-600 mt-2">We respond within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200">
                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-lg p-4 mr-4">
                    <MapPin className="h-8 w-8 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
                    <p className="text-lg text-gray-900 font-medium">Gilroy, California</p>
                    <p className="text-gray-600 mt-2">Serving customers nationwide</p>
                  </div>
                </div>
              </div>

              {/* Turnaround */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200">
                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-lg p-4 mr-4">
                    <Clock className="h-8 w-8 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Turnaround Time</h3>
                    <p className="text-lg text-gray-900 font-medium">24-48 Hours</p>
                    <p className="text-gray-600 mt-2">For all analysis reports</p>
                  </div>
                </div>
              </div>

              {/* Facebook */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg p-8 text-white">
                <div className="flex items-start">
                  <div className="bg-white rounded-lg p-4 mr-4">
                    <Facebook className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Follow Us on Facebook</h3>
                    <p className="mb-4">Stay updated with tips, insights, and news</p>
                    <a
                      href="https://facebook.com/autoanalystofficial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition"
                    >
                      Visit Our Page
                    </a>
                  </div>
                </div>
              </div>
            </div>
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