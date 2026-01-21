"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, MessageCircle, TrendingUp, Shield, BarChart3, Target, Eye, Menu, X } from "lucide-react"

export default function NavAnalyticsWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "services", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const services = [
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Predictive Financial Modeling",
      description: "Anticipate market trends and investor behavior through advanced AI algorithms.",
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Risk Assessment Tools",
      description: "Employ sophisticated analysis to minimize investment risks.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "Performance Analytics",
      description: "Monitor and optimize the performance of mutual funds with in-depth reporting tools.",
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Portfolio Management Assistance",
      description: "AI insights to help diversify and maximize your investment portfolio.",
    },
    {
      icon: <Eye className="w-8 h-8 text-primary" />,
      title: "Market Insights & Trends",
      description: "Stay ahead with real-time insights and analytics driven by market data.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary">NAV Analytics</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {[
                  { id: "hero", label: "Home" },
                  { id: "about", label: "About" },
                  { id: "services", label: "Services" },
                  { id: "contact", label: "Contact" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? "text-primary bg-primary/10"
                        : "text-gray-700 hover:text-primary hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-primary">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {[
                { id: "hero", label: "Home" },
                { id: "about", label: "About" },
                { id: "services", label: "Services" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                    activeSection === item.id
                      ? "text-primary bg-primary/10"
                      : "text-gray-700 hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-16 pb-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Unlock Investment Potential with <span className="text-primary">NAV Analytics</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Empowering Investment Decisions with AI Precision. Harnessing AI to guide your mutual fund decisions
                  for higher returns.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-accent hover:bg-accent/90 text-gray-900 px-8 py-3 text-lg font-semibold"
                >
                  Start Your Journey
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("about")}
                  className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Financial Analytics Dashboard"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="NAV Analytics Team"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Us</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At NAV Analytics, we specialize in providing advanced AI solutions tailored to the mutual fund industry.
                Understanding the significance of NAV in investment decisions, our team is dedicated to transforming
                complex data into actionable insights that empower our clients.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through our innovative technology, we help mutual fund managers and investors make informed decisions
                that lead to financial success. In an environment where every data point can influence market movements,
                our services stand out by delivering precise analytics and effective risk assessment tools.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We leverage the latest in artificial intelligence to help you chart a course through the intricacies of
                financial markets, ensuring that your investment strategies are data-driven and effective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI-powered solutions designed to enhance your investment strategies and maximize returns in
              the mutual fund sector.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-xl text-gray-600">
              We are here to assist you. Reach out for inquiries, demos, or partnership opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                      <a href="tel:+918369848475" className="text-primary hover:underline">
                        +91 8369848475
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                      <a href="mailto:info@nav.in" className="text-primary hover:underline">
                        info@nav.in
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-0 shadow-md">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                      <p className="text-gray-600 leading-relaxed">
                        701, Stellar Tower, Chembur East, Sion Opposite, Diamond Garden, Basant Garden, Chembur, Mumbai,
                        Maharashtra 400071
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <Button asChild className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg font-semibold">
                  <a
                    href="https://wa.me/918369848475"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp Us</span>
                  </a>
                </Button>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-2">
              <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-4" />
                  <p className="text-lg font-medium">Interactive Map</p>
                  <p className="text-sm">Mumbai, Maharashtra</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-2xl font-bold text-primary mb-2">NAV Analytics</p>
              <p className="text-gray-400">Empowering Investment Decisions with AI Precision</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">Owned by Scalium.in</p>
              <p className="text-sm text-gray-500 mt-1">© 2024 NAV Analytics. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
