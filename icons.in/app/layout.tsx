import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Roboto, Poppins } from "next/font/google"

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-roboto" })
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "600"], variable: "--font-poppins" })

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${roboto.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  )
}
