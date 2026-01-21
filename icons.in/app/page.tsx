"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Sparkles,
  Palette,
  Repeat,
  Monitor,
  Shield,
  Play,
  Menu,
  X,
} from "lucide-react"

export default function IconsInWebsite() {
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
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const services = [
    {
      icon: <Sparkles className="w-8 h-8 text-accent" />,
      title: "Generative Icon Design",
      description: "Users input text prompts to receive a selection of unique, AI-generated icons in SVG format.",
    },
    {
      icon: <Palette className="w-8 h-8 text-accent" />,
      title: "Style Transfer",
      description:
        "Upload an icon or style reference, and our AI applies that aesthetic to generate new, compliant designs.",
    },
    {
      icon: <Repeat className="w-8 h-8 text-accent" />,
      title: "Intelligent Icon Variations",
      description:
        "Produce numerous variations of a given icon, modifying strokes, fills, and colors to keep your design fresh.",
    },
    {
      icon: <Monitor className="w-8 h-8 text-accent" />,
      title: "Responsive Design Optimization",
      description:
        "Automatically generate icons tailored for various devices and resolutions, ensuring versatility and clarity across platforms.",
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "Brand Guideline Adherence",
      description:
        "By inputting your brand's palette and guidelines, we ensure our designs maintain consistency and professionalism.",
    },
    {
      icon: <Play className="w-8 h-8 text-accent" />,
      title: "Animated Icons",
      description: "Offering simple, looped animations (GIFs/Lottie files), we add a dynamic element to your branding.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-bold text-primary font-poppins">Icons.in</div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Contact
              </button>
            </nav>

            {/* Contact Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="tel:+918369848475"
                className="text-primary hover:text-accent transition-colors"
                aria-label="Call us"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@icons.in"
                className="text-primary hover:text-accent transition-colors"
                aria-label="Email us"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-left text-gray-700 hover:text-primary transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left text-gray-700 hover:text-primary transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-left text-gray-700 hover:text-primary transition-colors"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left text-gray-700 hover:text-primary transition-colors"
                >
                  Contact
                </button>
                <div className="flex items-center space-x-4 pt-2">
                  <a
                    href="tel:+918369848475"
                    className="text-primary hover:text-accent transition-colors"
                    aria-label="Call us"
                  >
                    <Phone className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:info@icons.in"
                    className="text-primary hover:text-accent transition-colors"
                    aria-label="Email us"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10"
        style={{
          backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute inset-0 bg-white/80"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-poppins">
            Transform Your Ideas into <span className="text-primary">Stunning Icons</span> with AI
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto font-roboto">
            Generate, customize, and optimize your icon designs effortlessly.
          </p>
          <p className="text-lg text-accent font-semibold mb-8 font-poppins">
            Unleashing Creative Potential with AI-Driven Icon Design
          </p>
          <Button
            onClick={() => scrollToSection("services")}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Get Started Today
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-poppins">About Icons.in</h2>
            <div className="text-lg text-gray-700 leading-relaxed space-y-6 font-roboto">
              <p>
                At Icons.in, we are redefining how icons are created and customized. Utilizing advanced AI technologies,
                we provide a platform where users can turn text prompts into beautiful, vector-format icons within
                seconds.
              </p>
              <p>
                Our tools not only generate unique designs but also allow for iterative variations, ensuring every icon
                meets the highest standards of quality and aesthetic appeal. With a commitment to innovation, we cater
                to designers, businesses, and brands, making it easier to express their unique identity through
                compelling iconography.
              </p>
              <p>
                In a world where visual communication is paramount, we help our clients stand out with custom solutions
                designed for their individual needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-roboto">
              Comprehensive AI-powered icon design solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-2 border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-poppins">{service.title}</h3>
                  <p className="text-gray-600 font-roboto">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">Get in Touch</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-roboto">
              We want to hear from you! Reach out with your design ideas, inquiries, or feedback. Let's create something
              amazing together!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-2 border-gray-100">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 font-poppins">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
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
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-3 font-semibold">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-2 border-gray-100">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6 font-poppins">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700 font-roboto">
                          701, Stellar Tower, Chembur East, Sion Opposite, Diamond Garden, Basant Garden, Chembur,
                          Mumbai, Maharashtra 400071
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <a
                        href="tel:+918369848475"
                        className="text-gray-700 hover:text-primary transition-colors font-roboto"
                      >
                        +91 8369848475
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <a
                        href="mailto:info@icons.in"
                        className="text-gray-700 hover:text-primary transition-colors font-roboto"
                      >
                        info@icons.in
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp Button */}
              <Card className="border-2 border-green-100 bg-green-50">
                <CardContent className="p-6">
                  <a
                    href="https://wa.me/918369848475"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-3 text-green-600 hover:text-green-700 transition-colors"
                  >
                    <MessageCircle className="w-6 h-6" />
                    <span className="font-semibold font-poppins">Connect on WhatsApp</span>
                  </a>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="border-2 border-gray-100">
                <CardContent className="p-0">
                  <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin className="w-12 h-12 mx-auto mb-2" />
                      <p className="font-roboto">Google Maps Location</p>
                      <p className="text-sm">Mumbai, Maharashtra</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 font-roboto">
            Owned by{" "}
            <a
              href="https://scalium.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition-colors"
            >
              Scalium.in
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
