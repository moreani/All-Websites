import type React from "react"
import type { Metadata } from "next"
import "./globals.css" // Make sure globals.css is imported
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Calls.Org - Transforming Conversations into Insights",
  description:
    "Calls.Org - Empowering enterprises through advanced AI data analytics solutions tailored for the Indian market. Unlock the hidden potential in your communication streams.",
  keywords:
    "AI analytics, call analytics, data insights, enterprise solutions, India, speech recognition, customer insights, predictive analytics",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Montserrat:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      {/* Apply base background and text colors using Tailwind utilities that map to CSS variables */}
      <body className="bg-background text-foreground font-body antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
