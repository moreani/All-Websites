"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.1), rgba(16, 185, 129, 0.1)), url('/placeholder.svg?height=900&width=1600')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-primary-blue/20">
            <Zap className="h-4 w-4 text-accent-emerald" />
            <span className="text-sm font-medium text-text-charcoal">
              Intelligent Project Delivery. Exponential Results.
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-text-charcoal mb-6 leading-tight">
            Transform Project <span className="text-primary-blue">Chaos</span> Into{" "}
            <span className="text-accent-emerald">AI-Driven</span> Success
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-text-gray mb-8 max-w-3xl mx-auto leading-relaxed">
            India's most ambitious enterprises trust our AI-powered project management solutions to deliver results that
            exceed expectations, on time, every time.
          </p>

          {/* CTA Button */}
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-primary-blue hover:bg-primary-blue/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            Discover Your Project Potential
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 border border-primary-blue/20">
              <div className="text-3xl font-bold text-primary-blue mb-2">200+</div>
              <div className="text-text-gray font-medium">Enterprises Served</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 border border-accent-emerald/20">
              <div className="text-3xl font-bold text-accent-emerald mb-2">40%</div>
              <div className="text-text-gray font-medium">Faster Delivery</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 border border-primary-blue/20">
              <div className="text-3xl font-bold text-primary-blue mb-2">99.2%</div>
              <div className="text-text-gray font-medium">Quality Standards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
