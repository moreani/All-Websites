import { TrendingUp, Shield, FileText, Monitor, Users } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: TrendingUp,
      title: "Market Analytics",
      description:
        "Utilizing sophisticated algorithms to provide insights on price trends, supply and demand forecasts, and market volatility. Detailed analysis of commodity trends and forces, leading to informed decisions.",
    },
    {
      icon: Shield,
      title: "Risk Management Solutions",
      description:
        "Our predictive models help identify potential risks in trading strategies, enabling proactive measures. Advanced models to mitigate potential risks and maximize returns.",
    },
    {
      icon: FileText,
      title: "Custom Reporting",
      description:
        "We offer personalized reports that focus on specific commodities, tailored to meet the strategic needs of trading firms. Tailored insights focused on your trading needs with periodic updates.",
    },
    {
      icon: Monitor,
      title: "Real-Time Dashboard",
      description:
        "Our user-friendly interface provides real-time analytics and visualization tools, facilitating quick and informed decisions. Dynamic tools for monitoring market changes in real time, enhancing reaction times.",
    },
    {
      icon: Users,
      title: "Consultancy Services",
      description:
        "In addition to our analytic capabilities, we offer expert consultancy to help businesses integrate AI-driven solutions into their existing strategies. Expert guidance for incorporating AI solutions into your existing trading strategies.",
    },
  ]

  return (
    <section id="services" className="py-16 bg-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-poppins">Our Specialized Offerings</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-text/80 max-w-3xl mx-auto">
              At Commodity Insights AI, we offer tailored data analytics services designed specifically for the
              commodity trading sector.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6 mx-auto">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4 text-center font-poppins">{service.title}</h3>
                  <p className="text-text/80 text-center leading-relaxed font-roboto">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
