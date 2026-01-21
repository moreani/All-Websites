import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Podcast } from "lucide-react" // Import the icon

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="bg-gradient-to-br from-primary/10 via-background to-background pt-28 pb-20 md:pt-40 md:pb-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Updated h1 to include the logo icon */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground mb-4 flex items-center justify-center gap-3 sm:gap-4">
          <Podcast className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-primary" />
          Calls.Org
        </h1>
        <p className="text-xl sm:text-2xl text-teal font-heading font-semibold mb-8">
          "Transforming Conversations into Insights"
        </p>
        <p className="max-w-3xl mx-auto text-lg text-foreground/80 mb-12 leading-relaxed">
          Discover how Calls Analytics empowers your business by transforming calls into valuable insights that reveal
          opportunities for growth. Join us in harnessing the power of AI-driven analytics, personalized for your
          enterprise needs.
        </p>
        <Link href="#contact">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-10 py-3 text-lg rounded-md shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </Button>
        </Link>
      </div>
    </section>
  )
}
