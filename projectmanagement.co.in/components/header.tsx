"use client"

import { useState } from "react"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-neutral-light z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-bold text-primary-blue">
              ProjectManagement<span className="text-accent-emerald">.AI</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-text-gray hover:text-primary-blue transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-text-gray hover:text-primary-blue transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-text-gray hover:text-primary-blue transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+918369848475"
              className="flex items-center space-x-2 text-text-gray hover:text-primary-blue transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">+91 8369848475</span>
            </a>
            <a
              href="mailto:info@projectmanagement.co.in"
              className="flex items-center space-x-2 text-text-gray hover:text-primary-blue transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span className="text-sm font-medium">info@projectmanagement.co.in</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-neutral-light">
              <button
                onClick={() => scrollToSection("about")}
                className="block px-3 py-2 text-text-gray hover:text-primary-blue transition-colors font-medium w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block px-3 py-2 text-text-gray hover:text-primary-blue transition-colors font-medium w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 text-text-gray hover:text-primary-blue transition-colors font-medium w-full text-left"
              >
                Contact
              </button>
              <div className="pt-4 border-t border-neutral-light">
                <a
                  href="tel:+918369848475"
                  className="flex items-center space-x-2 px-3 py-2 text-text-gray hover:text-primary-blue transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span className="text-sm font-medium">+91 8369848475</span>
                </a>
                <a
                  href="mailto:info@projectmanagement.co.in"
                  className="flex items-center space-x-2 px-3 py-2 text-text-gray hover:text-primary-blue transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span className="text-sm font-medium">info@projectmanagement.co.in</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
