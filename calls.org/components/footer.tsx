import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Podcast } from "lucide-react" // Added Podcast

export default function Footer() {
  return (
    <footer className="bg-foreground text-gray-300 py-12 md:py-16 border-t border-border/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-8 text-center md:text-left items-start">
          <div className="flex flex-col items-center md:items-start">
            <Link href="#hero" className="flex items-center gap-2 text-2xl font-heading font-bold text-primary mb-2">
              <Podcast size={28} className="text-primary" /> {/* Added Icon */}
              Calls.Org
            </Link>
            {/* Tagline added to the footer */}
            <p className="text-sm text-gray-400 italic">"Transforming Conversations into Insights"</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-background mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2 items-center md:items-start">
              <Link href="#about" className="hover:text-teal transition-colors text-gray-400">
                About Us
              </Link>
              <Link href="#services" className="hover:text-teal transition-colors text-gray-400">
                Services
              </Link>
              <Link href="#contact" className="hover:text-teal transition-colors text-gray-400">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-background mb-4">Follow Us</h3>
            <div className="flex space-x-4 justify-center md:justify-start mb-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-teal transition-colors">
                <Facebook size={22} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-teal transition-colors">
                <Twitter size={22} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-teal transition-colors">
                <Linkedin size={22} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-teal transition-colors">
                <Instagram size={22} />
              </a>
            </div>
            <p className="text-sm text-gray-500">
              Website:{" "}
              <a
                href="https://calls.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal underline"
              >
                calls.org
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-500">&copy; 2025 Calls.Org | Owned by Scalium.in</p>
        </div>
      </div>
    </footer>
  )
}
