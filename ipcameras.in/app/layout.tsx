import type React from "react"
import type { Metadata } from "next"
import { roboto, montserrat } from "@/lib/fonts"
import "./globals.css"

export const metadata: Metadata = {
  title: "IPCameras.In - Smart Surveillance Solutions",
  description:
    "Smart Surveillance Solutions for a Safer Tomorrow. AI-powered IP cameras with real-time insights and proactive monitoring.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${montserrat.variable}`}>
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
