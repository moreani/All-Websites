import type React from "react"
// Local web-fonts (avoids remote fetch errors)
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/700.css"
import "@fontsource/poppins/300.css"
import "@fontsource/poppins/600.css"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
