import { Zap, Shield, Users, TrendingUp } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "AI-powered transactions in milliseconds",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Advanced fraud detection and prevention",
    },
    {
      icon: Users,
      title: "User-Centric",
      description: "Designed for seamless user experience",
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "Grow your business with our AI platform",
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-poppins">Who We Are</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 leading-relaxed font-roboto">
            Mobile Recharge AI is committed to revolutionizing the mobile recharge industry in India through intelligent
            automation solutions. Our mission is to provide businesses with tools that not only enhance operational
            efficiency but also deliver a superior experience to end-users.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="AI Technology"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          <div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              In today's fast-paced world, we understand the need for immediate and reliable recharge solutions. Our
              AI-powered platforms ensure that transactions are quick, secure, and efficient, making the recharge
              experience seamless for users.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Partner with us to stay ahead in a rapidly evolving market and redefine customer expectations through
              cutting-edge technology and intelligent automation.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-primary mb-2 font-poppins">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
