import { Calendar, Shield, Users, BarChart3 } from "lucide-react"

const services = [
  {
    icon: Calendar,
    title: "Intelligent Project Planning & Forecasting",
    description:
      "Our AI algorithms analyze historical project data, team capabilities, and market variables to create hyper-accurate project timelines and resource requirements. Indian enterprises using our planning solutions report 60% fewer scope creep incidents and 45% improved budget adherence.",
    stats: "60% fewer scope creep incidents",
  },
  {
    icon: Shield,
    title: "Real-Time Risk Assessment & Mitigation",
    description:
      "Advanced machine learning models continuously monitor project health indicators, stakeholder sentiment, and external factors to predict and prevent project derailments before they occur. Our early warning system has prevented over ₹50 crores in potential project losses across our client base.",
    stats: "₹50Cr+ losses prevented",
  },
  {
    icon: Users,
    title: "Automated Resource Optimization",
    description:
      "Dynamic AI-driven resource allocation ensures optimal team productivity by analyzing individual performance patterns, workload distribution, and skill complementarity. Clients experience average productivity increases of 35% within the first quarter of implementation.",
    stats: "35% productivity increase",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics & Business Intelligence",
    description:
      "Transform project data into strategic insights with our advanced analytics suite. Generate executive-ready reports that demonstrate clear ROI, identify process improvements, and support data-driven decision making for future project investments.",
    stats: "Executive-ready insights",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-charcoal mb-6">
              <span className="text-primary-blue">AI-Powered</span> Solutions for{" "}
              <span className="text-accent-emerald">Project Excellence</span>
            </h2>
            <p className="text-xl text-text-gray max-w-3xl mx-auto">
              Comprehensive suite of intelligent tools designed to transform how Indian enterprises manage and deliver
              projects
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-neutral-light/50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary-blue/20"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-blue/10 rounded-xl p-3 group-hover:bg-primary-blue group-hover:text-white transition-all duration-300">
                    <service.icon className="h-8 w-8 text-primary-blue group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-text-charcoal mb-3 group-hover:text-primary-blue transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-text-gray leading-relaxed mb-4">{service.description}</p>
                    <div className="inline-flex items-center bg-accent-emerald/10 rounded-full px-4 py-2">
                      <span className="text-sm font-semibold text-accent-emerald">{service.stats}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Background Image */}
          <div className="mt-16 relative rounded-2xl overflow-hidden">
            <div className="aspect-[21/9] bg-gradient-to-r from-primary-blue/10 to-accent-emerald/10">
              <img
                src="/placeholder.svg?height=400&width=1200"
                alt="AI-powered project management analytics dashboard"
                className="w-full h-full object-cover mix-blend-overlay"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/80 to-accent-emerald/80 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  Ready to Experience AI-Powered Project Management?
                </h3>
                <p className="text-lg opacity-90">Join 200+ enterprises already transforming their project delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
