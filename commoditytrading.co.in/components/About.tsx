import { Target, Users, Globe } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-poppins">
              Discover the Future of Trading
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-text/80 mb-6 font-roboto leading-relaxed">
                As the commodity market continues to evolve, leveraging AI for data analytics positions firms at the
                cutting edge. Commodity Insights AI merges technology with industry expertise, providing transformative
                insights that convert data into actionable strategies.
              </p>
              <p className="text-lg text-text/80 mb-6 font-roboto leading-relaxed">
                Our team consists of seasoned professionals with a passion for innovation, committed to guiding your
                business through the ever-changing landscape of commodity trading. Experience unparalleled accuracy and
                efficiency in decision-making and redefine your trading operations with our state-of-the-art solutions.
              </p>
              <p className="text-lg text-text/80 font-roboto leading-relaxed">
                In an era where information is power, we ensure our clients are equipped with insights derived from vast
                amounts of data, transforming uncertainty into opportunities. Our vision aligns with India's growing
                commodity market, poised to become a global leader in trading and investment.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-accent/30 rounded-lg">
                <Target className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Our Mission</h3>
                  <p className="text-text/80">
                    Empowering traders with data-driven insights that uncover market trends, price movements, and
                    consumer behavior.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-accent/30 rounded-lg">
                <Users className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Our Team</h3>
                  <p className="text-text/80">
                    Seasoned professionals combining deep market expertise with cutting-edge AI technology.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-accent/30 rounded-lg">
                <Globe className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Our Vision</h3>
                  <p className="text-text/80">
                    Aligning with India's growing commodity market to become a global leader in trading and investment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
