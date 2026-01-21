import { Linkedin, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-text-charcoal text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4">
                ProjectManagement<span className="text-accent-emerald">.AI</span>
              </h3>
              <p className="text-gray-300 mb-4">
                Transforming project delivery through intelligent AI-powered solutions for India's leading enterprises.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-primary-blue transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-primary-blue transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-primary-blue transition-colors">
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <p>701, Stellar Tower, Chembur East</p>
                <p>Mumbai, Maharashtra 400071</p>
                <p>Phone: +91 8369848475</p>
                <p>Email: info@projectmanagement.co.in</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">© 2024 ProjectManagement. All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-2 sm:mt-0">Designed by Scalium Digital Media Private Limited</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
