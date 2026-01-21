"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Shield, Zap, BarChart3, Users, Phone, Mail, MapPin, MessageCircle } from "lucide-react"

export default function RemittancePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-header/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="font-poppins font-bold text-2xl text-primary">Remittance AI</div>
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="text-text hover:text-primary transition-colors">
                Home
              </a>
              <a href="#about" className="text-text hover:text-primary transition-colors">
                About
              </a>
              <a href="#services" className="text-text hover:text-primary transition-colors">
                Services
              </a>
              <a href="#contact" className="text-text hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.8), rgba(99, 102, 241, 0.8)), url('/placeholder.svg?height=1080&width=1920')`,
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="font-poppins font-bold text-5xl md:text-7xl mb-6 leading-tight">
            Transform Your Remittance Process with AI
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Secure, Fast, and Efficient Solutions Tailored for Your Business
          </p>
          <p className="text-lg mb-8 italic">"Revolutionizing Remittances with Intelligent Solutions"</p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4 rounded-full"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get Started Today
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-poppins font-semibold text-4xl md:text-5xl mb-8 text-text">About Remittance AI</h2>
            <div className="text-lg leading-relaxed text-gray-700 space-y-6">
              <p>
                At Remittance AI, we leverage the latest advancements in artificial intelligence to revolutionize the
                way remittance services operate. Our smart solutions are designed to streamline transactions, enhance
                security protocols, and comply with regulatory standards effortlessly.
              </p>
              <p>
                Based in India, we cater specifically to the needs of local businesses looking to optimize their
                remittance processes. Our vision is clear—empower financial institutions with intelligent systems that
                deliver unprecedented efficiency and customer satisfaction.
              </p>
              <p>
                We understand the complexities of the financial landscape and the critical importance of trust,
                security, and compliance in remittance operations. That's why our AI-powered solutions are built with
                these principles at their core.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-semibold text-4xl md:text-5xl mb-6 text-text">Our AI-Powered Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to transform your remittance operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-poppins text-xl">Fraud Detection & Prevention</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Utilize machine learning algorithms to monitor transactions in real-time, ensuring safety and
                  compliance with advanced threat detection.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-poppins text-xl">Automated Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Simplify and automate regulatory reporting processes, reducing human error and increasing reliability
                  with intelligent automation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-poppins text-xl">Cost Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  AI-driven analytics provide insights into transaction costs, helping companies save significantly and
                  enhance profit margins.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-poppins text-xl">Customer Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Leverage predictive analytics to understand customer behavior and improve service offerings, driving
                  loyalty and growth.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-semibold text-4xl md:text-5xl mb-6 text-text">Get in Touch</h2>
            <p className="text-xl text-gray-600">
              Our team is ready to discuss how our AI solutions can transform your business
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Address</h3>
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
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Phone</h3>
                  <p className="text-gray-600">+91 8369848475</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Email</h3>
                  <p className="text-gray-600">info@remittance.in</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MessageCircle className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">WhatsApp</h3>
                  <Button
                    className="bg-green-500 hover:bg-green-600 text-white"
                    onClick={() => window.open("https://wa.me/918369848475", "_blank")}
                  >
                    WhatsApp Us
                  </Button>
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

            {/* Contact Form */}
            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="font-poppins text-2xl">Send us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you shortly</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <Input id="name" type="text" placeholder="Your full name" className="w-full" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your.email@example.com" className="w-full" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your remittance needs..."
                      rows={5}
                      className="w-full"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-text text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="font-poppins font-bold text-2xl mb-2">Remittance AI</div>
              <p className="text-gray-300">Revolutionizing Remittances with Intelligent Solutions</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-300 mb-2">Website: remittance.in</p>
              <p className="text-sm text-gray-400">Owned by Scalium.in</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 Remittance AI. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg"
          onClick={() => window.open("https://wa.me/918369848475", "_blank")}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}
