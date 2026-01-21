"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, MessageCircle, TrendingUp, Brain, BarChart3, Users, BookOpen } from "lucide-react"

export default function ForexTradingWebsite() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-8 w-8 text-[#1E88E5]" />
              <h1 className="text-2xl font-bold text-[#1E88E5] font-montserrat">Forex Trading AI</h1>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-[#1E88E5] transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-[#1E88E5] transition-colors">
                About
              </a>
              <a href="#services" className="text-gray-700 hover:text-[#1E88E5] transition-colors">
                Services
              </a>
              <a href="#contact" className="text-gray-700 hover:text-[#1E88E5] transition-colors">
                Contact
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <a href="tel:+918369848475" className="text-[#1E88E5] hover:text-[#FF5722] transition-colors">
                <Phone className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@forextrading.co.in"
                className="text-[#1E88E5] hover:text-[#FF5722] transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-[#1E88E5] to-[#1565C0] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold font-montserrat leading-tight">
                Welcome to <span className="text-[#FF5722]">Forex Trading AI</span>
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Where cutting-edge artificial intelligence meets the dynamic world of forex trading. Our AI-powered data
                analytics tools provide you with actionable insights, helping you navigate the complex forex market with
                confidence and precision.
              </p>
              <p className="text-lg text-blue-200 font-medium">
                Join us and revolutionize your trading experience today!
              </p>
              <Button size="lg" className="bg-[#FF5722] hover:bg-[#E64A19] text-white px-8 py-3 text-lg font-semibold">
                Start Your Free Trial
              </Button>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Forex Trading AI Dashboard"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 font-montserrat">About Forex Trading AI</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At Forex Trading AI, we believe that informed trading decisions lead to profitable outcomes. Our team is
                dedicated to harnessing the power of artificial intelligence to transform the forex trading landscape.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                By analyzing vast amounts of historical and real-time data, we deliver insights that empower traders to
                make smarter choices. Our solutions are designed for individual traders and institutions alike, bridging
                the gap between technology and finance.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With our user-friendly platform, we are here to assist you in maximizing your trading potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 font-montserrat">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide a suite of AI-driven data analytics services that cater to traders at all levels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <BarChart3 className="h-8 w-8 text-[#1E88E5] mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Real-Time Data Analysis</h3>
                </div>
                <p className="text-gray-600">
                  Access live market data with sophisticated analytics tools that help predict currency fluctuations and
                  trends.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Brain className="h-8 w-8 text-[#1E88E5] mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Predictive Insights</h3>
                </div>
                <p className="text-gray-600">
                  Leverage machine learning algorithms to forecast market behavior, enabling traders to make proactive
                  decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-8 w-8 text-[#1E88E5] mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Custom Analytics Solutions</h3>
                </div>
                <p className="text-gray-600">
                  Tailor-made data solutions that cater to your unique trading strategies and preferences, enhancing
                  your overall trading effectiveness.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-[#1E88E5] mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Market Sentiment Analysis</h3>
                </div>
                <p className="text-gray-600">
                  Understand market psychology through extensive social media and news sentiment analysis, providing a
                  holistic view of market dynamics.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-8 w-8 text-[#1E88E5] mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Training and Workshops</h3>
                </div>
                <p className="text-gray-600">
                  Empower yourself with our educational resources and workshops, designed to help you master both forex
                  trading and AI usage effectively.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 font-montserrat">Contact Us</h2>
            <p className="text-xl text-gray-600">Get in touch with our team of experts</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-[#1E88E5] mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Address</h3>
                      <p className="text-gray-600">
                        701, Stellar Tower, Chembur East, Sion Opposite,
                        <br />
                        Diamond Garden, Basant Garden, Chembur,
                        <br />
                        Mumbai, Maharashtra 400071
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Phone className="h-6 w-6 text-[#1E88E5]" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Phone</h3>
                      <a href="tel:+918369848475" className="text-[#1E88E5] hover:underline">
                        +91 8369848475
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-[#1E88E5]" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Email</h3>
                      <a href="mailto:info@forextrading.co.in" className="text-[#1E88E5] hover:underline">
                        info@forextrading.co.in
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Google Map Placeholder */}
              <Card>
                <CardContent className="p-0">
                  <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Interactive Google Map</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-[#1E88E5] hover:bg-[#1565C0] text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <TrendingUp className="h-6 w-6 text-[#1E88E5]" />
            <span className="text-xl font-bold font-montserrat">Forex Trading AI</span>
          </div>
          <p className="text-gray-400 mb-4">Empowering Forex Trading through Intelligent Insights</p>
          <p className="text-sm text-gray-500">Owned by Scalium.in</p>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg"
          onClick={() => window.open("https://wa.me/918369848475", "_blank")}
        >
          <MessageCircle className="h-6 w-6" />
          <span className="ml-2 hidden sm:inline">Chat with us</span>
        </Button>
      </div>
    </div>
  )
}
