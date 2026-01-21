"use client"

import { MapPin, Phone, Mail, Globe } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4 font-poppins">Commodity Insights AI</h3>
              <p className="text-white/80 mb-4 font-roboto">Transforming Data into Trading Decisions</p>
              <p className="text-white/70 text-sm leading-relaxed">
                Empowering traders with AI-driven insights for navigating complex market dynamics in the commodity
                trading sector.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-lg font-semibold mb-4 font-poppins">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-white/80 flex-shrink-0 mt-0.5" />
                  <p className="text-white/80 text-sm">
                    701, Stellar Tower, Chembur East,
                    <br />
                    Mumbai, Maharashtra 400071
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-white/80" />
                  <a href="tel:+918369848475" className="text-white/80 hover:text-white transition-colors text-sm">
                    +91 8369848475
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-white/80" />
                  <a
                    href="mailto:info@commoditytrading.co.in"
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    info@commoditytrading.co.in
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-white/80" />
                  <span className="text-white/80 text-sm">commoditytrading.co.in</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 font-poppins">Quick Links</h4>
              <div className="space-y-2">
                <button
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="block text-white/80 hover:text-white transition-colors text-sm"
                >
                  About Us
                </button>
                <button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="block text-white/80 hover:text-white transition-colors text-sm"
                >
                  Our Services
                </button>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="block text-white/80 hover:text-white transition-colors text-sm"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/70 text-sm">
              © 2024 Commodity Insights AI. All rights reserved. | Owned by{" "}
              <a
                href="https://scalium.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 transition-colors"
              >
                Scalium.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
