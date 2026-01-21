import { Brain, Target, TrendingUp } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-neutral-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-charcoal mb-6">
              The Future of Project Management is <span className="text-primary-blue">Intelligent</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <p className="text-lg text-text-gray leading-relaxed">
                In India's hyper-competitive business landscape, traditional project management approaches are becoming
                obsolete. ProjectManagement emerges as the definitive solution for enterprises ready to harness the
                transformative power of artificial intelligence in project delivery.
              </p>

              <p className="text-lg text-text-gray leading-relaxed">
                We understand the unique challenges facing Indian businesses today: complex stakeholder ecosystems,
                rapid scaling demands, resource optimization pressures, and the need for precise delivery timelines. Our
                AI-powered platform doesn't just manage projects—it predicts potential roadblocks, optimizes resource
                allocation in real-time, and delivers insights that turn project managers into strategic visionaries.
              </p>

              <p className="text-lg text-text-gray leading-relaxed">
                Founded by a team of AI specialists and project management veterans, we've witnessed firsthand how
                intelligent automation can revolutionize project outcomes. Our solutions have helped over 200+ Indian
                enterprises achieve an average 40% reduction in project delivery time while maintaining 99.2% quality
                standards.
              </p>

              {/* Key Features */}
              <div className="grid sm:grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="bg-primary-blue/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Brain className="h-8 w-8 text-primary-blue" />
                  </div>
                  <h3 className="font-semibold text-text-charcoal mb-2">AI-Powered</h3>
                  <p className="text-sm text-text-gray">Advanced machine learning algorithms</p>
                </div>
                <div className="text-center">
                  <div className="bg-accent-emerald/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-accent-emerald" />
                  </div>
                  <h3 className="font-semibold text-text-charcoal mb-2">Precision Delivery</h3>
                  <p className="text-sm text-text-gray">On-time, every time execution</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary-blue/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-primary-blue" />
                  </div>
                  <h3 className="font-semibold text-text-charcoal mb-2">Scalable Growth</h3>
                  <p className="text-sm text-text-gray">Enterprise-ready solutions</p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Team working with AI-powered project management"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 border border-accent-emerald/20">
                <div className="text-2xl font-bold text-accent-emerald">₹50Cr+</div>
                <div className="text-sm text-text-gray">Losses Prevented</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
