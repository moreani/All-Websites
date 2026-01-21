"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/90 to-primary/70 text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
        }}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce" />
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-accent/30 rounded-full animate-ping" />
        <div className="absolute bottom-20 right-40 w-24 h-24 bg-white/5 rounded-full animate-pulse" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-poppins leading-tight">
          Welcome to <span className="text-accent">Mobile Recharge AI</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 font-roboto max-w-3xl mx-auto leading-relaxed">
          Leverage AI-Driven Automation for Seamless Mobile Transactions
        </p>

        <p className="text-lg mb-10 opacity-90 max-w-2xl mx-auto">
          Empowering Instant Transactions Through Intelligent Automation
        </p>

        <Button
          onClick={scrollToServices}
          size="lg"
          className="bg-accent text-primary hover:bg-accent/90 font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Get Started
          <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white/70" />
      </div>
    </section>
  )
}
