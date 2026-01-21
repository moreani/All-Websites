"use client"

import { useState } from "react"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-primary font-poppins">Commodity Insights AI</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-text hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-text hover:text-primary transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-text hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Contact Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+918369848475"
              className="flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href="mailto:info@commoditytrading.co.in"
              className="flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 mt-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-text hover:text-primary transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-text hover:text-primary transition-colors font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-text hover:text-primary transition-colors font-medium"
              >
                Contact
              </button>
              <div className="flex items-center space-x-4 pt-2">
                <a
                  href="tel:+918369848475"
                  className="flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </a>
                <a
                  href="mailto:info@commoditytrading.co.in"
                  className="flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
