"use client"

import { Bot, BarChart3, Shield, Headphones, Smartphone } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Bot,
      title: "Automated Recharge Systems",
      description:
        "Implement AI systems that automate recharge processes, reducing transaction times and minimizing human errors.",
      color: "bg-blue-500",
    },
    {
      icon: BarChart3,
      title: "Data-Driven Insights",
      description:
        "Utilize AI analytics to gain insights into user behavior and transaction patterns, allowing businesses to tailor services effectively.",
      color: "bg-green-500",
    },
    {
      icon: Shield,
      title: "Risk Management & Fraud Detection",
      description:
        "Deploy machine learning algorithms to detect and prevent fraudulent activities, ensuring the security of transactions.",
      color: "bg-red-500",
    },
    {
      icon: Headphones,
      title: "24/7 Customer Support Automation",
      description:
        "Feature intelligent chatbots that handle customer inquiries instantly, improving user satisfaction while freeing up resources.",
      color: "bg-purple-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Application Integration",
      description:
        "Seamlessly integrate our AI solutions with existing mobile applications to enhance user experience and operational efficiency.",
      color: "bg-orange-500",
    },
  ]

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-poppins">Our Services</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Comprehensive AI-powered solutions designed to transform your mobile recharge business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div
                className={`${service.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4 font-poppins">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-700 mb-6">
              Join hundreds of businesses already leveraging our AI-powered solutions for mobile recharge automation.
            </p>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors font-semibold"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
