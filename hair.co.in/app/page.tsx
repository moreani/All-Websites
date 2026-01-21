"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, MessageCircle, Users, Sparkles, Heart, Zap, CheckCircle } from "lucide-react"

export default function HairAIWebsite() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
    alert("Thank you for your message! We'll get back to you soon.")
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-accent" style={{ fontFamily: "Lato, sans-serif" }}>
              Hair.ai
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-accent hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-accent hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-accent hover:text-primary transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-accent hover:text-primary transition-colors"
              >
                Contact
              </button>
            </nav>
            <div className="flex items-center space-x-4">
              <a href="tel:+918369848475" className="text-accent hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href="mailto:info@hair.co.in" className="text-accent hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(60, 60, 60, 0.4), rgba(255, 111, 97, 0.3)), url('/placeholder.svg?height=1080&width=1920&text=Beautiful+Hair+Styles')`,
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: "Lato, sans-serif" }}>
            Your Personalized AI Hair Coach
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Transforming Your Hair Journey with Expert AI-Driven Solutions
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg rounded-full"
            onClick={() => scrollToSection("contact")}
          >
            Discover Your Hair Potential – Chat with Our AI!
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-accent mb-8" style={{ fontFamily: "Lato, sans-serif" }}>
              About Hair.ai
            </h2>
            <div
              className="text-lg text-gray-700 leading-relaxed space-y-6"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              <p>
                Hair.ai is at the forefront of hair care innovation, providing users with expert, AI-driven insights
                tailored to their unique hair types and concerns. We understand that every individual's hair journey is
                different, influenced by factors like genetics, environment, and personal lifestyle choices.
              </p>
              <p>
                Our interactive platform serves as a personal coach, delivering customized advice, troubleshooting tips,
                and engaging interactions that cater to your distinct needs. We are committed to empowering you to take
                charge of your hair health, helping you achieve the look and feel you've always wanted.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-accent mb-2">AI-Powered</h3>
                <p className="text-gray-600">Advanced algorithms for personalized recommendations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-accent mb-2">Personalized</h3>
                <p className="text-gray-600">Tailored solutions for your unique hair needs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-accent mb-2">Community</h3>
                <p className="text-gray-600">Join thousands of hair care enthusiasts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4" style={{ fontFamily: "Lato, sans-serif" }}>
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive AI-driven solutions for all your hair care needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-accent mb-4">Personalized Hair Advice</h3>
                <p className="text-gray-600">
                  Leverage AI to receive tailored recommendations for hair care routines based on your specific hair
                  type and challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-accent mb-4">Symptom Troubleshooting</h3>
                <p className="text-gray-600">
                  Interact with our chatbot to identify and resolve common hair issues, from dryness to split ends.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-accent mb-4">Product Recommendations</h3>
                <p className="text-gray-600">
                  Get suggestions for the best products suited to your unique hair needs, from shampoos to growth oils.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-accent mb-4">Styling Tips</h3>
                <p className="text-gray-600">
                  Enhance your styling techniques with expert tips to achieve your desired look with confidence.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-accent mb-4">Community Engagement</h3>
                <p className="text-gray-600">
                  Join a growing community of hair care enthusiasts, sharing experiences and support.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-accent mb-4">24/7 AI Support</h3>
                <p className="text-gray-600">
                  Get instant answers to your hair care questions anytime with our intelligent chatbot.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4" style={{ fontFamily: "Lato, sans-serif" }}>
              Get in Touch with Us!
            </h2>
            <p className="text-xl text-gray-600">
              We'd love to hear from you! Please reach out for personalized advice or inquiries.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 h-12">
                  Send Message
                </Button>
              </form>

              {/* WhatsApp Button */}
              <div className="mt-8">
                <a
                  href="https://wa.me/918369848475"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-accent mb-2">Address</h3>
                  <p className="text-gray-600">
                    701, Stellar Tower, Chembur East, Sion Opposite,
                    <br />
                    Diamond Garden, Basant Garden, Chembur,
                    <br />
                    Mumbai, Maharashtra 400071
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-accent mb-2">Phone</h3>
                  <a href="tel:+918369848475" className="text-gray-600 hover:text-primary transition-colors">
                    +91 8369848475
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-accent mb-2">Email</h3>
                  <a href="mailto:info@hair.co.in" className="text-gray-600 hover:text-primary transition-colors">
                    info@hair.co.in
                  </a>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5234567890123!2d72.8856!3d19.0176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAxJzAzLjQiTiA3MsKwNTMnMDguMiJF!5e0!3m2!1sen!2sin!4v1234567890123"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-3xl font-bold mb-4" style={{ fontFamily: "Lato, sans-serif" }}>
              Hair.ai
            </div>
            <p className="text-gray-300 mb-8">Stay Connected</p>

            {/* Social Media Icons */}
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">f</span>
                </div>
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">t</span>
                </div>
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">i</span>
                </div>
              </a>
            </div>

            {/* Newsletter Signup */}
            <div className="max-w-md mx-auto mb-8">
              <p className="text-gray-300 mb-4">Subscribe to our newsletter for updates</p>
              <div className="flex">
                <Input
                  placeholder="Enter your email"
                  className="rounded-r-none bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Button className="rounded-l-none bg-primary hover:bg-primary/90">Subscribe</Button>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-400 text-sm">© 2024 Hair.ai. All rights reserved. | Website: hair.co.in</p>
              <p className="text-gray-500 text-xs mt-2">Owned by Scalium.in</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
