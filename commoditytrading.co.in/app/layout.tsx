import type React from "react"
import "./globals.css"
import { Poppins, Roboto } from "next/font/google"
import type { Metadata } from "next"
import { cn } from "@/lib/utils"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Commodity Insights AI – Transforming Data into Trading Decisions",
  description: "Navigate market complexities with AI-driven insights for India’s commodity market.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn(poppins.variable, roboto.variable)} suppressHydrationWarning>
      <body className="bg-background text-foreground">{children}</body>
    </html>
  )
}
