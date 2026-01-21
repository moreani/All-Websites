"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"
import { useState, type FormEvent } from "react"
import { FaWhatsapp } from "react-icons/fa"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log("Form data submitted:", formData)
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-background-white border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">Contact Us</h2>
          <p className="text-lg text-primary font-medium">Connect with us to unlock the potential of your data.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-background p-8 rounded-lg shadow-lg">
            {" "}
            {/* Changed to bg-background */}
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="font-medium text-foreground/90">
                  Name
                </Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 bg-card" /* Changed to bg-card */
                  placeholder="Your Name"
                />
              </div>
              <div>
                <Label htmlFor="email" className="font-medium text-foreground/90">
                  Email
                </Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 bg-card" /* Changed to bg-card */
                  placeholder="Your Email"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="font-medium text-foreground/90">
                  Phone
                </Label>
                <Input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 bg-card" /* Changed to bg-card */
                  placeholder="Your Phone (Optional)"
                />
              </div>
              <div>
                <Label htmlFor="message" className="font-medium text-foreground/90">
                  Message
                </Label>
                <Textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 bg-card" /* Changed to bg-card */
                  placeholder="Your Message"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 text-lg rounded-md shadow-md hover:shadow-lg transition-shadow"
              >
                Submit Message
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-background p-8 rounded-lg shadow-lg">
              {" "}
              {/* Changed to bg-background */}
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">Our Information</h3>
              <div className="space-y-5 text-foreground/90">
                <div className="flex items-start">
                  {/* Updated icon color to gold */}
                  <MapPin size={24} className="text-gold mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Address:</p>
                    <p>
                      701, Stellar Tower, Chembur East, Sion Opposite, Diamond Garden, Basant Garden, Chembur, Mumbai,
                      Maharashtra 400071
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  {/* Updated icon color to gold */}
                  <Phone size={20} className="text-gold mr-4 flex-shrink-0" />
                  <a href="tel:+918369848475" className="hover:text-primary transition-colors">
                    +91 8369848475
                  </a>
                </div>
                <div className="flex items-center">
                  {/* Updated icon color to gold */}
                  <Mail size={20} className="text-gold mr-4 flex-shrink-0" />
                  <a href="mailto:info@calls.org" className="hover:text-primary transition-colors">
                    info@calls.org
                  </a>
                </div>
                <div className="flex items-center">
                  {/* Updated icon color to gold */}
                  <FaWhatsapp size={22} className="text-gold mr-4 flex-shrink-0" />
                  <a
                    href="https://wa.me/918369848475?text=Hello%20Calls%20Analytics!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/placeholder.svg?width=600&height=400"
                alt="Map showing office location in Chembur, Mumbai"
                width={600}
                height={400}
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
