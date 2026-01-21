"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Brain,
  BarChart3,
  Users,
  Shield,
  MessageSquare,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  Menu,
  X,
  CheckCircle,
} from "lucide-react"

export default function DaruwalaDotIn() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const services = [
    {
      icon: <BarChart3 className="h-8 w-8 text-deep-blue" />,
      title: "Beverage Insight Platform",
      description:
        "Gain real-time insights into market trends, sales data, and consumer behavior. Our platform helps liquor brands and retailers navigate the complexities of the market with confidence, enabling you to make informed decisions that drive growth.",
    },
    {
      icon: <Users className="h-8 w-8 text-deep-blue" />,
      title: "Personalized Recommendation Engine",
      description:
        "Utilize AI to offer personalized drink recommendations based on user preferences and purchase history. Enhance customer satisfaction and increase sales by providing tailored suggestions that resonate with individual tastes.",
    },
    {
      icon: <Shield className="h-8 w-8 text-deep-blue" />,
      title: "Beverage Compliance Tracker",
      description:
        "Stay compliant with industry regulations effortlessly. Our tool automatically tracks changes in the alcoholic beverage landscape, providing alerts and reports to ensure your business remains aligned with legal standards.",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-deep-blue" />,
      title: "Social Media Monitoring Tool",
      description:
        "Monitor brand sentiment and consumer engagement on social media platforms. Get actionable insights to refine your marketing strategies, understand consumer perspectives, and improve brand positioning.",
    },
    {
      icon: <Brain className="h-8 w-8 text-deep-blue" />,
      title: "Chatbot for Liquor Retailers",
      description:
        "Improve customer service with our custom AI chatbot, designed to assist customers with their orders and provide personalized recommendations. Enhance engagement and streamline the shopping experience on your website.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-deep-blue" />,
      title: "Dynamic Pricing Model",
      description:
        "Optimize your pricing strategy according to market demand and consumer behavior. Our AI solution analyzes trends to adjust prices dynamically, maximizing revenue and staying competitive in the market.",
    },
  ]

  return (
    <div className="min-h-screen bg-background font-roboto">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-deep-blue/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="#home" className="font-montserrat font-bold text-deep-blue text-2xl">
              Daruwala.in
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-deep-blue hover:text-accent transition-colors link-hover">
                Home
              </a>
              <a href="#about" className="text-deep-blue hover:text-accent transition-colors link-hover">
                About
              </a>
              <a href="#services" className="text-deep-blue hover:text-accent transition-colors link-hover">
                Services
              </a>
              <a href="#contact" className="text-deep-blue hover:text-accent transition-colors link-hover">
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-deep-blue" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-deep-blue/20">
              <div className="flex flex-col space-y-4 pt-4">
                <a
                  href="#home"
                  className="text-deep-blue hover:text-accent transition-colors link-hover"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-deep-blue hover:text-accent transition-colors link-hover"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#services"
                  className="text-deep-blue hover:text-accent transition-colors link-hover"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="#contact"
                  className="text-deep-blue hover:text-accent transition-colors link-hover"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 gradient-bg text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold font-montserrat mb-6">Welcome to Daruwala.in</h1>
              <h2 className="text-xl md:text-2xl mb-6 text-white/90">
                Transforming the Liquor Industry with Intelligent Solutions
              </h2>
              <p className="text-lg mb-8 text-white/80">
                Empower your brand with our suite of AI-driven tools designed to enhance efficiency, compliance, and
                consumer engagement.
              </p>
              <Button
                size="lg"
                className="btn-deep-blue text-white font-semibold px-8 py-3"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get Started
              </Button>
            </div>
            <div className="animate-fade-in-up">
              <img
                src="/placeholder.svg?height=500&width=600&text=AI+Solutions+for+Liquor+Industry"
                alt="AI Solutions for Liquor Industry"
                className="rounded-lg shadow-2xl w-full border-2 border-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-deep-blue mb-8">About Us</h2>
            <div className="text-lg text-dark-gray space-y-6 leading-relaxed">
              <p>
                Daruwala.in is dedicated to revolutionizing the liquor industry through innovative AI technologies. Our
                solutions cater specifically to the needs of liquor brands and retailers, leveraging advanced analytics
                and insights to enhance decision-making processes and operational efficiency.
              </p>
              <p>
                As the beverage market evolves, staying informed and agile is paramount. We provide real-time analytics
                through our <span className="text-deep-blue font-semibold">Beverage Insight Platform</span>, predictive
                capabilities with our{" "}
                <span className="text-deep-blue font-semibold">Personalized Recommendation Engine</span>, and proactive
                compliance monitoring through our{" "}
                <span className="text-deep-blue font-semibold">Beverage Compliance Tracker</span>.
              </p>
              <p>
                Our <span className="text-deep-blue font-semibold">Social Media Monitoring Tool</span> enhances brand
                visibility and consumer engagement, while our{" "}
                <span className="text-deep-blue font-semibold">AI Chatbot</span> ensures seamless customer interactions.
                Additionally, the <span className="text-deep-blue font-semibold">Dynamic Pricing Model</span> adapts to
                market fluctuations, maximizing revenue potential.
              </p>
              <div className="bg-white p-6 rounded-lg border-l-4 border-accent shadow-sm">
                <p className="text-primary font-semibold text-xl">
                  Partnering with Daruwala.in means gaining a strategic ally that invests in your success. Join us in
                  shaping the future of the liquor industry through smart technology and data-driven insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-deep-blue mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-dark-gray max-w-2xl mx-auto">
              Comprehensive AI solutions tailored for the liquor industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="service-card bg-white">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl font-montserrat text-deep-blue">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-dark-gray leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Highlight Section */}
      <section className="py-16 deep-blue-section text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">Why Choose Daruwala.in?</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Industry-leading AI solutions designed specifically for the liquor market
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Industry Expertise</h3>
              <p className="text-white/80">Deep understanding of liquor industry challenges and opportunities</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-time Analytics</h3>
              <p className="text-white/80">Live data insights for immediate decision-making capabilities</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Compliance Ready</h3>
              <p className="text-white/80">Automated tracking and reporting for regulatory requirements</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-white/80">Round-the-clock assistance and monitoring for your business</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-deep-blue mb-4">Contact Us</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-dark-gray">Get in touch for inquiries or to request a demo</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-deep-blue mt-1" />
                <div>
                  <h3 className="font-semibold text-deep-blue mb-2">Address</h3>
                  <p className="text-dark-gray">
                    701, Stellar Tower, Chembur East, Sion Opposite,
                    <br />
                    Diamond Garden, Basant Garden, Chembur,
                    <br />
                    Mumbai, Maharashtra 400071
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-deep-blue" />
                <div>
                  <h3 className="font-semibold text-deep-blue mb-2">Phone</h3>
                  <a href="tel:+918369848475" className="text-dark-gray hover:text-accent transition-colors link-hover">
                    +91 83698 48475
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-deep-blue" />
                <div>
                  <h3 className="font-semibold text-deep-blue mb-2">Email</h3>
                  <a
                    href="mailto:info@daruwala.in"
                    className="text-dark-gray hover:text-accent transition-colors link-hover"
                  >
                    info@daruwala.in
                  </a>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3"
                  onClick={() => window.open("https://wa.me/918369848475", "_blank")}
                >
                  WhatsApp Us
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-lg bg-white border-deep-blue/20">
              <CardHeader>
                <CardTitle className="text-deep-blue font-montserrat">Get in Touch</CardTitle>
                <CardDescription className="text-dark-gray">
                  Fill out the form below and we'll get back to you soon.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-deep-blue/30 focus:border-deep-blue focus:ring-deep-blue"
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
                      className="border-deep-blue/30 focus:border-deep-blue focus:ring-deep-blue"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      required
                      className="border-deep-blue/30 focus:border-deep-blue focus:ring-deep-blue"
                    />
                  </div>
                  <Button type="submit" className="w-full btn-deep-blue text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="deep-blue-section text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <a href="#home" className="font-montserrat font-bold text-white text-2xl mb-4 block">
                Daruwala.in
              </a>
              <p className="text-white/80 mb-4">Transforming the Liquor Industry with Intelligent Solutions</p>
              <p className="text-sm text-white/60">Owned by Scalium.in</p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-montserrat font-semibold text-white text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-white/80 hover:text-accent transition-colors link-hover">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-white/80 hover:text-accent transition-colors link-hover">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white/80 hover:text-accent transition-colors link-hover">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white/80 hover:text-accent transition-colors link-hover">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-montserrat font-semibold text-white text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-white/80 hover:text-accent transition-colors p-2 rounded-lg hover:bg-white/10"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-white/80 hover:text-accent transition-colors p-2 rounded-lg hover:bg-white/10"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-white/80 hover:text-accent transition-colors p-2 rounded-lg hover:bg-white/10"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
              <div className="mt-4">
                <p className="text-white/60 text-sm mb-2">Contact Info:</p>
                <p className="text-white/80 text-sm">+91 83698 48475</p>
                <p className="text-white/80 text-sm">info@daruwala.in</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/60">
              © 2024 Daruwala.in. All rights reserved. |
              <a href="https://www.daruwala.in" className="hover:text-accent transition-colors ml-1 link-hover">
                www.daruwala.in
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
