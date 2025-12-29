import Link from 'next/link';
import { Shield, Award, Heart, Wrench, MapPin, Cog, Zap, Settings } from 'lucide-react';

export default function About() {
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
              <Link href="/about" className="text-sm font-medium text-primary-400 border-b-2 border-primary-400">
                About
              </Link>
              <Link href="/contact" className="text-sm font-medium text-gray-300 hover:text-primary-400 transition">
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
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gray-800 border-2 border-primary-600 rounded-full mb-6">
              <Cog className="h-6 w-6 text-primary-600 mr-3 animate-spin-slow" />
              <span className="text-lg font-bold text-primary-400 tracking-wide">NEARLY 20 YEARS OF EXPERIENCE</span>
            </div>
            <h1 className="text-5xl font-extrabold text-white mb-6 tracking-tight">
              Fighting for <span className="text-primary-500">Honest Auto Service</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto"></div>
          </div>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Story */}
            <div className="bg-gray-800 border-2 border-gray-700 rounded-lg p-8 shadow-2xl">
              <div className="flex items-center mb-6">
                <Wrench className="h-8 w-8 text-primary-500 mr-3" />
                <h2 className="text-3xl font-bold text-white">My Story</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
                <p>
                  After spending nearly <strong className="text-white">two decades as a master mechanic</strong>, I've witnessed firsthand how the auto industry 
                  often prioritizes profit over honesty. Too many times, I watched innocent customers get pressured into 
                  unnecessary repairs, overcharged for labor, or sold parts they didn't need.
                </p>
                <p>
                  The breaking point came when I realized I was contributing to a system that exploited people's lack of technical knowledge. 
                  Shop managers pushed quotas. Technicians got bonuses for upselling. Diagnostic fees were waived only if customers approved 
                  expensive repairs. <strong className="text-primary-400">I couldn't be part of that anymore.</strong>
                </p>
                <p>
                  So I walked away from the shop floor and started <strong className="text-primary-400">Auto Analyst</strong> with a simple mission: 
                  give customers the truth they deserve.
                </p>
                <p>
                  Now, I use my expertise to level the playing field. Every repair quote I analyze, every diagnostic plan 
                  I create, and every pre-purchase inspection I conduct is about <strong className="text-white">protecting you from the tactics 
                  I used to see every single day</strong>.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-700 flex items-start">
                <MapPin className="h-6 w-6 text-primary-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold text-lg">Proudly Based in Gilroy, California</p>
                  <p className="text-gray-400">Serving customers nationwide with remote analysis</p>
                </div>
              </div>
            </div>

            {/* Right: Credentials */}
            <div className="space-y-6">
              {/* Credential Card 1 */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-primary-600 rounded-lg p-6 shadow-xl transform hover:scale-105 transition">
                <div className="flex items-start">
                  <div className="bg-primary-600 rounded-lg p-4 mr-4">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">ASE Certified Master Technician</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Certified across all major vehicle systems including engine performance, electrical, brakes, 
                      suspension, HVAC, and advanced diagnostics. Continuous education on modern vehicle technology.
                    </p>
                    <div className="mt-4 flex items-center">
                      <Zap className="h-5 w-5 text-primary-400 mr-2" />
                      <span className="text-sm text-primary-400 font-semibold">Expert-level diagnostics</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Credential Card 2 */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-primary-600 rounded-lg p-6 shadow-xl transform hover:scale-105 transition">
                <div className="flex items-start">
                  <div className="bg-primary-600 rounded-lg p-4 mr-4">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Customer Advocate First</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Zero shop affiliations. No commission on parts. No incentive to upsell. 
                      My only goal is giving you honest, unbiased analysis so you can make informed decisions.
                    </p>
                    <div className="mt-4 flex items-center">
                      <Zap className="h-5 w-5 text-primary-400 mr-2" />
                      <span className="text-sm text-primary-400 font-semibold">100% conflict-free</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Credential Card 3 */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-primary-600 rounded-lg p-6 shadow-xl transform hover:scale-105 transition">
                <div className="flex items-start">
                  <div className="bg-primary-600 rounded-lg p-4 mr-4">
                    <Settings className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Industry Insider Knowledge</h3>
                    <p className="text-gray-300 leading-relaxed">
                      I know every trick in the book because I've seen them all: inflated labor times, 
                      unnecessary part replacements, diagnostic fee schemes, and pressure tactics. 
                      I use this knowledge to protect you.
                    </p>
                    <div className="mt-4 flex items-center">
                      <Zap className="h-5 w-5 text-primary-400 mr-2" />
                      <span className="text-sm text-primary-400 font-semibold">Real-world expertise</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gradient-to-r from-primary-900 to-primary-800 border-t-2 border-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="h-16 w-16 text-primary-300 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">My Mission</h2>
          <p className="text-xl text-gray-200 leading-relaxed mb-8">
            "I left the industry because I couldn't stand watching customers get ripped off. 
            Now I use my knowledge to protect you instead. Every analysis I provide is about 
            <strong className="text-white"> empowering you with the truth</strong> so you never get taken advantage of again."
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-primary-900 font-bold rounded-lg hover:bg-gray-100 transition shadow-lg"
          >
            Get Your Second Opinion
          </Link>
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