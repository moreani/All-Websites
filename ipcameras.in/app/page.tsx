"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { IPCameraLogo } from "@/components/logo"
import {
  Phone,
  Mail,
  MapPin,
  Shield,
  Eye,
  Brain,
  Cloud,
  Users,
  CheckCircle,
  Menu,
  X,
  MessageCircle,
  Star,
  Zap,
  Award,
} from "lucide-react"

export default function IPCamerasWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your inquiry! We will get back to you soon.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <IPCameraLogo size="md" />
              <h1 className="text-xl font-bold text-primary font-montserrat">
                IPCameras<span className="text-yellow">.In</span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-gray-600 hover:text-primary transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-600 hover:text-primary transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-600 hover:text-primary transition-colors font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-600 hover:text-primary transition-colors font-medium"
              >
                Contact
              </button>
            </nav>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {/* Contact Icons - Desktop only */}
              <div className="hidden lg:flex items-center space-x-3">
                <a
                  href="tel:+918369848475"
                  className="p-2 rounded-full hover:bg-yellow/10 text-primary transition-colors"
                  title="Call us"
                >
                  <Phone className="h-5 w-5" />
                </a>
                <a
                  href="mailto:info@ipcameras.in"
                  className="p-2 rounded-full hover:bg-orange/10 text-primary transition-colors"
                  title="Email us"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>

              {/* CTA Button */}
              <Button
                size="sm"
                className="hidden md:flex bg-primary hover:bg-yellow hover:text-primary text-white font-medium px-6"
                onClick={() => scrollToSection("contact")}
              >
                Get Quote
              </Button>

              {/* Mobile Menu Button */}
              <button className="md:hidden p-2 text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
              <nav className="flex flex-col space-y-3 mt-4">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-left text-gray-600 hover:text-primary transition-colors py-2 font-medium"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left text-gray-600 hover:text-primary transition-colors py-2 font-medium"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-left text-gray-600 hover:text-primary transition-colors py-2 font-medium"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left text-gray-600 hover:text-primary transition-colors py-2 font-medium"
                >
                  Contact
                </button>

                {/* Mobile Contact */}
                <div className="flex items-center space-x-4 pt-3 border-t border-gray-100">
                  <a href="tel:+918369848475" className="text-primary">
                    <Phone className="h-5 w-5" />
                  </a>
                  <a href="mailto:info@ipcameras.in" className="text-primary">
                    <Mail className="h-5 w-5" />
                  </a>
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-yellow hover:text-primary text-white font-medium px-4 ml-auto"
                    onClick={() => scrollToSection("contact")}
                  >
                    Get Quote
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="pt-20 pb-16 bg-gradient-to-br from-primary via-blue-700 to-primary text-white relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow/20 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-orange/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-yellow/30 rounded-full blur-lg"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-orange/20 rounded-full blur-xl"></div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-yellow/20 to-orange/20 text-yellow px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-orange/30">
              <Star className="h-4 w-4 mr-2 text-orange" />
              #1 IP Camera Solutions in India
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat">
              Welcome to <span className="text-yellow">IPCameras.In</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 font-montserrat">
              <span className="text-yellow">Smart Surveillance Solutions</span> for a Safer Tomorrow
            </h2>
            <p className="text-xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Transform your security with AI-powered IP cameras that deliver real-time insights and proactive
              monitoring. Join us in redefining safety standards for the modern enterprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-yellow text-primary hover:bg-yellow-dark hover:text-white font-semibold px-8 py-3 shadow-lg transform hover:scale-105 transition-all"
                onClick={() => scrollToSection("about")}
              >
                <Zap className="h-5 w-5 mr-2" />
                Learn More
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-yellow text-yellow hover:bg-yellow hover:text-primary font-semibold px-8 py-3 shadow-lg transform hover:scale-105 transition-all"
                onClick={() => scrollToSection("contact")}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-yellow/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-3xl font-bold text-primary mb-2 group-hover:text-orange transition-colors">500+</div>
              <div className="text-gray-600">Cameras Installed</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-primary mb-2 group-hover:text-yellow transition-colors">
                99.9%
              </div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-primary mb-2 group-hover:text-orange transition-colors">24/7</div>
              <div className="text-gray-600">AI Monitoring</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-primary mb-2 group-hover:text-yellow transition-colors">100+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-background relative">
        {/* Yellow and orange accent shapes */}
        <div className="absolute top-10 right-10 w-24 h-24 bg-yellow/10 rounded-full"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-orange/15 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-orange/20 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-yellow/25 rounded-full"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-gradient-to-r from-orange/20 to-yellow/20 text-orange-dark px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-yellow/30">
                <Award className="h-4 w-4 mr-2 text-orange" />
                About Our Company
              </div>
              <h2 className="text-4xl font-bold text-primary font-montserrat">About Us</h2>
              <div className="w-20 h-1 bg-yellow mx-auto mt-4"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                  At IPCameras AI, we believe that security should be intelligent, proactive, and accessible.
                  Specializing in AI for IP cameras, we provide advanced surveillance solutions that leverage deep
                  learning and real-time analytics.
                </p>
                <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                  Our commitment to innovation drives us to equip businesses across India with the tools they need to
                  safeguard their operations effectively.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our solutions help detect threats automatically, reducing the need for constant human monitoring while
                  enhancing overall situational awareness. Whether you're in retail, logistics, or public safety, our
                  technology adapts to your needs and grows with you.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-yellow">
                  <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-primary">Smart Analytics</h3>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-accent">
                  <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-primary">AI-Powered</h3>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-green-500">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-primary">Secure</h3>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-500">
                  <Cloud className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-primary">Cloud-Based</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-yellow/20 to-orange/20 text-orange-dark px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-orange/30">
              <Zap className="h-4 w-4 mr-2 text-orange" />
              Our Services
            </div>
            <h2 className="text-4xl font-bold text-primary font-montserrat">Our Services</h2>
            <div className="w-20 h-1 bg-yellow mx-auto mt-4"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Service 1 */}
            <Card className="border-2 border-gray-200 hover:border-orange transition-all hover:shadow-xl group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow to-orange"></div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary flex items-center group-hover:text-orange-dark transition-colors">
                  <Eye className="h-6 w-6 mr-2 text-orange" />
                  AI Surveillance Solutions Bundle
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Intelligent Video Analytics with facial recognition and behavior analysis
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Smart Notifications System for unusual activities</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Automated Incident Reporting with AI-generated insights</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Comprehensive surveillance capabilities that enhance security and reduce false alarms by delivering
                  actionable insights and organized reporting.
                </p>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="border-2 border-gray-200 hover:border-yellow transition-all hover:shadow-xl group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange to-yellow"></div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary flex items-center group-hover:text-yellow-dark transition-colors">
                  <Users className="h-6 w-6 mr-2 text-yellow" />
                  Smart Access Control Bundle
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">AI-Driven Facial Recognition Access Control</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Integration with Smart Home Systems</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">AI-Enhanced Customer Support with 24/7 chatbots</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Increases access control security while simplifying user interaction with surveillance systems, making
                  monitoring and management more efficient.
                </p>
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="border-2 border-gray-200 hover:border-orange transition-all hover:shadow-xl group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-orange to-yellow"></div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary flex items-center group-hover:text-orange-dark transition-colors">
                  <Brain className="h-6 w-6 mr-2 text-orange" />
                  Predictive Security Insights Package
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Predictive Security Insights using machine learning</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Intelligent Motion Detection and Tracking</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Cloud-Based AI Surveillance platform</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Empowers users to prevent security breaches proactively while providing easy access to real-time and
                  historical data for maximum preparedness.
                </p>
              </CardContent>
            </Card>

            {/* Service 4 */}
            <Card className="border-2 border-gray-200 hover:border-yellow transition-all hover:shadow-xl group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-yellow to-orange"></div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary flex items-center group-hover:text-yellow-dark transition-colors">
                  <Shield className="h-6 w-6 mr-2 text-yellow" />
                  Comprehensive Managed Security Service
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Complete AI Surveillance Solutions Bundle</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Full Predictive Security Insights Package</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Tailored Security Solutions based on risk assessment</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  All-inclusive managed security system that adapts to client needs while utilizing AI technology for
                  optimal performance and complete peace of mind.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-background relative">
        {/* Yellow and orange decorative elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange via-yellow to-orange"></div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-orange/20 to-yellow/20 text-orange-dark px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-orange/30">
              <MessageCircle className="h-4 w-4 mr-2 text-orange" />
              Contact Us
            </div>
            <h2 className="text-4xl font-bold text-primary font-montserrat">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange to-yellow mx-auto mt-4"></div>
          </div>
          <p className="text-center text-lg text-gray-700 mb-12">
            For inquiries and support, feel free to reach out to us!
          </p>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-orange">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-2">Address</h3>
                  <p className="text-gray-700">
                    701, Stellar Tower, Chembur East, Sion Opposite,
                    <br />
                    Diamond Garden, Basant Garden, Chembur,
                    <br />
                    Mumbai, Maharashtra 400071
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-yellow">
                <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-2">Phone</h3>
                  <a href="tel:+918369848475" className="text-gray-700 hover:text-yellow-dark transition-colors">
                    +91 8369848475
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-orange">
                <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-2">Email</h3>
                  <a href="mailto:info@ipcameras.in" className="text-gray-700 hover:text-yellow-dark transition-colors">
                    info@ipcameras.in
                  </a>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="pt-4">
                <a
                  href="https://wa.me/918369848475"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-all font-semibold shadow-lg transform hover:scale-105"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Contact Us on WhatsApp!
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-xl border-t-4 border-yellow">
              <CardHeader className="bg-gradient-to-r from-yellow/10 to-yellow-light/10">
                <CardTitle className="text-primary">Send us a message</CardTitle>
                <CardDescription>We'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="focus:border-yellow focus:ring-yellow"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="focus:border-yellow focus:ring-yellow"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Your Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="focus:border-yellow focus:ring-yellow"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="focus:border-yellow focus:ring-yellow"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-yellow hover:text-primary transition-all transform hover:scale-105 shadow-lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Google Maps */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-center mb-6 text-primary">Find Us</h3>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute -top-2 -left-2 w-full h-full bg-yellow/20 rounded-lg"></div>
                <iframe
                  src="https://www.google.com/maps?q=Chembur+East,+Mumbai,+Maharashtra+400071&output=embed"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg shadow-lg relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange via-yellow to-orange"></div>

        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 items-start">
            {/* Logo Section */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <IPCameraLogo size="md" variant="dark" />
                <h3 className="text-xl font-bold font-montserrat">
                  IPCameras<span className="text-yellow">.In</span>
                </h3>
              </div>
              <p className="text-yellow font-medium mb-2 text-sm">Smart Surveillance Solutions for a Safer Tomorrow</p>
              <p className="text-blue-200 text-sm max-w-md">
                Smart surveillance solutions powered by AI technology for enhanced security and peace of mind.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-3 text-white">Quick Links</h4>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection("about")}
                  className="block text-blue-200 hover:text-yellow transition-colors text-sm"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="block text-blue-200 hover:text-yellow transition-colors text-sm"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block text-blue-200 hover:text-yellow transition-colors text-sm"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-3 text-white">Contact</h4>
              <div className="space-y-2 text-sm">
                <a href="tel:+918369848475" className="block text-blue-200 hover:text-orange transition-colors">
                  +91 8369848475
                </a>
                <a href="mailto:info@ipcameras.in" className="block text-blue-200 hover:text-orange transition-colors">
                  info@ipcameras.in
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-blue-700 mt-6 pt-6 text-center">
            <p className="text-blue-200 text-sm">
              © 2025 <span className="text-yellow">IPCameras.In</span> • All rights reserved • Owned by Scalium.in
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
