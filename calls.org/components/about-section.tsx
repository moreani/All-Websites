export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">About Us</h2>
          {/* Updated subheading color to gold */}
          <p className="text-lg text-gold font-medium">Dedicated to AI-Driven Data Analytics in India</p>
        </div>
        <div className="max-w-4xl mx-auto text-left md:text-lg space-y-6 text-foreground/90 leading-relaxed">
          <p>
            Calls Analytics is at the forefront of AI-driven data analytics, dedicated to serving enterprises in India
            with powerful tools that turn communication data into strategic insights. Our team of experts leverages
            sophisticated algorithms and machine learning techniques to analyze call data, helping businesses understand
            customer sentiments, operational inefficiencies, and market trends.
          </p>
          <p>
            Through our solutions, organizations can anticipate customer needs and refine their services for
            unparalleled satisfaction. Our passion for data science and commitment to innovation drives us to optimize
            every client’s decision-making process, ensuring they remain competitive in a rapidly evolving market.
          </p>
        </div>
      </div>
    </section>
  )
}
