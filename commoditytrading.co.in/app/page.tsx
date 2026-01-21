import type { Metadata } from "next"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Services from "@/components/Services"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"

export const metadata: Metadata = {
  title: "Commodity Insights AI - Transforming Data into Trading Decisions",
  description:
    "Navigate market complexities with AI-driven insights. Commodity trading analytics and risk management solutions for Indian markets.",
  keywords: "commodity trading, AI analytics, market insights, risk management, trading decisions, India",
  openGraph: {
    title: "Commodity Insights AI - Transforming Data into Trading Decisions",
    description:
      "Navigate market complexities with AI-driven insights. Commodity trading analytics and risk management solutions for Indian markets.",
    url: "https://commoditytrading.co.in",
    siteName: "Commodity Insights AI",
    type: "website",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
