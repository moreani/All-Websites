"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // You can integrate with your backend or email service here
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact" className="py-20 bg-neutral-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-charcoal mb-6">
              Ready to <span className="text-primary-blue">Transform</span> Your{" "}
              <span className="text-accent-emerald">Project Delivery</span>?
            </h2>
            <p className="text-xl text-text-gray max-w-3xl mx-auto">
              Let's discuss how our AI-powered solutions can revolutionize your project management approach
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-text-charcoal mb-6">Get Started Today</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-charcoal mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="w-full"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-text-charcoal mb-2">
                      Company Name *
                    </label>
                    <Input
                      id="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="w-full"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-charcoal mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text-charcoal mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="w-full"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-text-charcoal mb-2">
                    Project Type
                  </label>
                  <Select onValueChange={(value) => handleInputChange("projectType", value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="software-development">Software Development</SelectItem>
                      <SelectItem value="infrastructure">Infrastructure</SelectItem>
                      <SelectItem value="digital-transformation">Digital Transformation</SelectItem>
                      <SelectItem value="consulting">Consulting</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-charcoal mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="w-full"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary-blue hover:bg-primary-blue/90 text-white py-3 text-lg font-semibold"
                >
                  Start Your AI Transformation
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-text-charcoal mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary-blue mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-text-charcoal">Address</p>
                      <p className="text-text-gray">
                        701, Stellar Tower, Chembur East,
                        <br />
                        Sion Opposite, Diamond Garden,
                        <br />
                        Basant Garden, Chembur,
                        <br />
                        Mumbai, Maharashtra 400071
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-accent-emerald flex-shrink-0" />
                    <div>
                      <p className="font-medium text-text-charcoal">Phone</p>
                      <a href="tel:+918369848475" className="text-text-gray hover:text-primary-blue transition-colors">
                        +91 8369848475
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-primary-blue flex-shrink-0" />
                    <div>
                      <p className="font-medium text-text-charcoal">Email</p>
                      <a
                        href="mailto:info@projectmanagement.co.in"
                        className="text-text-gray hover:text-primary-blue transition-colors"
                      >
                        info@projectmanagement.co.in
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Clock className="h-6 w-6 text-accent-emerald flex-shrink-0" />
                    <div>
                      <p className="font-medium text-text-charcoal">Business Hours</p>
                      <p className="text-text-gray">Mon - Fri: 9:00 AM - 6:00 PM IST</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-text-charcoal mb-4">Our Location</h3>
                <div className="aspect-video bg-neutral-light rounded-lg flex items-center justify-center">
                  <div className="text-center text-text-gray">
                    <MapPin className="h-12 w-12 mx-auto mb-2 text-primary-blue" />
                    <p className="font-medium">Interactive Map</p>
                    <p className="text-sm">Chembur, Mumbai</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
