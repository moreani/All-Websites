"use client"

import { Button } from "@/components/ui/button"
import { TrendingUp, BarChart3, Brain } from "lucide-react"

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-background to-accent/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 font-poppins leading-tight">
            Unlock the Power of Data in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
              Commodity Trading
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-text/80 mb-8 font-roboto max-w-3xl mx-auto">
            Navigate market complexities with AI-driven insights.
          </p>

          {/* Tagline */}
          <p className="text-lg text-primary/80 mb-12 font-medium">"Transforming Data into Trading Decisions"</p>

          {/* CTA Button */}
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Started
          </Button>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <TrendingUp className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-text mb-2">Market Analytics</h3>
              <p className="text-text/70 text-center">Advanced algorithms for price trends and forecasts</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <BarChart3 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-text mb-2">Risk Management</h3>
              <p className="text-text/70 text-center">Predictive models to identify and mitigate risks</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <Brain className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-text mb-2">AI-Powered Insights</h3>
              <p className="text-text/70 text-center">Transform uncertainty into opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
