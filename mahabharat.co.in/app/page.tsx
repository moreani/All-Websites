"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { BookOpen, Users, MessageCircle, Phone, Mail, MapPin, ExternalLink } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-dark">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
          }}
        />
        <div className="absolute inset-0 hero-gradient" />

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Explore the Threads of Mahabharata
          </h1>
          <p className="font-roboto text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
            Unfold the epic narrative of destiny, duty, and righteousness with AI.
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white font-roboto text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            Start Exploring
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-bg-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
              Navigate the Epic. Understand Through AI.
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Mahabharata Characters"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>

            <div className="space-y-6">
              <p className="font-roboto text-lg text-gray-700 leading-relaxed">
                In a world where ancient wisdom meets modern technology,{" "}
                <strong className="text-primary">Mahabharat AI Explorer</strong> stands as a beacon for learners eager
                to delve into the depths of one of humanity's greatest epics.
              </p>

              <p className="font-roboto text-lg text-gray-700 leading-relaxed">
                The Mahabharata is not merely a story; it is an intricate tapestry of human emotions, philosophical
                debates, and moral dilemmas that resonate even today. Our platform harnesses AI to bring forth an
                interactive experience that transforms traditional reading into an exploratory adventure.
              </p>

              <p className="font-roboto text-lg text-gray-700 leading-relaxed">
                Users can navigate through characters, plot lines, and essential themes with ease, gaining insights that
                elevate their understanding of this monumental text. Our goal is to cultivate a community of informed
                readers who appreciate the Mahabharata's relevance in today's world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-bg-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">Our Services</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8" />
            <p className="font-roboto text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the Mahabharata through innovative AI-powered tools designed to enhance your understanding and
              engagement with this timeless epic.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-playfair text-2xl text-primary">Interactive Storyline Explorer</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-roboto text-gray-600 text-center leading-relaxed">
                  Navigate the complex narrative of the Mahabharata through an AI-driven interface that breaks down
                  story arcs, character developments, and pivotal moments. Ask questions like "What happened after the
                  dice game?" and receive instant, informative responses.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/30 transition-colors">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-playfair text-2xl text-primary">Character Relationship Mapper</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-roboto text-gray-600 text-center leading-relaxed">
                  Dive deep into the relationships that weave through the epic with our innovative knowledge graph. This
                  feature visualizes the intricate connections between characters, allowing users to understand roles,
                  intentions, and conflicts at a glance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-playfair text-2xl text-primary">Contextual Explainer</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-roboto text-gray-600 text-center leading-relaxed">
                  As you explore the text, our AI provides instant explanations on cultural nuances, philosophical
                  concepts such as Dharma and Karma, ancient warfare terminology, and narratives surrounding
                  lesser-known characters.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-bg-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">Get in Touch</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-primary mb-2">Address</h3>
                    <p className="font-roboto text-gray-600">
                      701, Stellar Tower, Chembur East, Sion Opposite,
                      <br />
                      Diamond Garden, Basant Garden, Chembur,
                      <br />
                      Mumbai, Maharashtra 400071
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-primary mb-2">Phone</h3>
                    <a
                      href="tel:+918369848475"
                      className="font-roboto text-gray-600 hover:text-primary transition-colors"
                    >
                      +91 8369848475
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-primary mb-2">Email</h3>
                    <a
                      href="mailto:info@mahabharat.co.in"
                      className="font-roboto text-gray-600 hover:text-primary transition-colors"
                    >
                      info@mahabharat.co.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <ExternalLink className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-primary mb-2">Website</h3>
                    <p className="font-roboto text-gray-600">mahabharat.co.in</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/918369848475"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition-colors font-roboto font-medium"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Contact Form */}
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl text-primary">Send us a Message</CardTitle>
                <CardDescription className="font-roboto">
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" className="font-roboto" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="your@email.com" className="font-roboto" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Your message..." rows={5} className="font-roboto" />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-roboto">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Google Maps */}
          <div className="mt-12">
            <div className="rounded-lg overflow-hidden shadow-xl h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5234567890123!2d72.8856!3d19.0176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAxJzAzLjQiTiA3MsKwNTMnMDguMiJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mahabharat AI Explorer Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-playfair text-2xl font-bold mb-4">Mahabharat AI Explorer</h3>
              <p className="font-roboto text-gray-300 mb-4">Navigate the Epic. Understand Through AI.</p>
              <p className="font-roboto text-sm text-gray-400">Owned by Scalium.in</p>
            </div>

            <div>
              <h4 className="font-playfair text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 font-roboto">
                <li>
                  <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-playfair text-lg font-bold mb-4">Connect</h4>
              <div className="space-y-2 font-roboto text-gray-300">
                <p>info@mahabharat.co.in</p>
                <p>+91 8369848475</p>
                <p>mahabharat.co.in</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 pt-8 text-center">
            <p className="font-roboto text-gray-400">© 2024 Mahabharat AI Explorer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
