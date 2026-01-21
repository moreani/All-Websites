import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Playfair_Display, Roboto } from "next/font/google"

// load Google fonts locally via next/font
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
  display: "swap",
})
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-roboto",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Mahabharat AI Explorer",
  description: "Navigate the Epic. Understand Through AI.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${roboto.variable} font-roboto bg-background text-foreground`}>
        {children}
      </body>
    </html>
  )
}
