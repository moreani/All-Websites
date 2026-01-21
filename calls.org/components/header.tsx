"use client"

import Link from "next/link"
import { Phone, Mail, Menu, X, Podcast } from "lucide-react" // Added Podcast icon
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled || isMobileMenuOpen ? "bg-card shadow-lg" : "bg-transparent", // Changed to bg-card for scrolled state
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            href="#hero"
            className="flex items-center gap-2 text-2xl sm:text-3xl font-heading font-bold text-primary"
            onClick={closeMobileMenu}
          >
            <Podcast size={30} className="text-primary" /> {/* Added Icon */}
            Calls.Org
          </Link>

          <nav className="hidden md:flex items-center space-x-5 lg:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:+918369848475"
              aria-label="Call us"
              className="text-foreground/80 hover:text-primary p-2 rounded-full hover:bg-primary/10 transition-colors"
            >
              <Phone size={20} />
            </a>
            <a
              href="mailto:info@calls.org"
              aria-label="Email us"
              className="text-foreground/80 hover:text-primary p-2 rounded-full hover:bg-primary/10 transition-colors"
            >
              <Mail size={20} />
            </a>
          </nav>

          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              className="text-foreground/80 hover:text-primary"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-card shadow-lg py-4 z-40", // Changed to bg-card
          "transition-all duration-300 ease-in-out transform",
          isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none",
        )}
      >
        <nav className="flex flex-col items-center space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors font-medium text-lg py-2"
              onClick={closeMobileMenu}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex space-x-6 pt-4 border-t border-border w-full justify-center mt-2">
            <a
              href="tel:+918369848475"
              aria-label="Call us"
              className="text-foreground/80 hover:text-primary p-2"
              onClick={closeMobileMenu}
            >
              <Phone size={24} />
            </a>
            <a
              href="mailto:info@calls.org"
              aria-label="Email us"
              className="text-foreground/80 hover:text-primary p-2"
              onClick={closeMobileMenu}
            >
              <Mail size={24} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
