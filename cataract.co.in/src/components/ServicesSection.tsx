
import { Brain, BarChart3, Users, GraduationCap, Eye, Zap, Shield, Clock } from 'lucide-react';

const ServicesSection = () => {
  const mainServices = [
    {
      icon: Brain,
      title: "AI-Powered Diagnostics",
      description: "Utilize advanced algorithms to analyze patient data and deliver instant diagnostic insights for cataract detection.",
      features: ["Real-time analysis", "High accuracy rates", "Automated reporting", "Integration ready"]
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics for Treatment Planning",
      description: "Use AI to forecast patient outcomes, allowing ophthalmologists to create personalized treatment plans that enhance recovery and satisfaction.",
      features: ["Outcome prediction", "Risk assessment", "Personalized plans", "Success optimization"]
    },
    {
      icon: Users,
      title: "Patient Management Systems",
      description: "Streamline clinic operations through AI-driven patient management tools, from scheduling to follow-up care, ensuring a seamless experience for both clinicians and patients.",
      features: ["Smart scheduling", "Automated follow-ups", "Patient tracking", "Workflow optimization"]
    },
    {
      icon: GraduationCap,
      title: "Training Programs",
      description: "Offer workshops and training programs on implementing AI technologies in clinical practices, ensuring that your team is equipped with the latest knowledge and skills.",
      features: ["Expert-led workshops", "Hands-on training", "Certification programs", "Ongoing support"]
    }
  ];

  const additionalFeatures = [
    {
      icon: Eye,
      title: "Advanced Imaging Analysis",
      description: "State-of-the-art image processing for precise cataract assessment"
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Instant results with our high-speed AI algorithms"
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "HIPAA-compliant secure data handling and storage"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock technical support and assistance"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive AI-powered solutions designed to transform your eye care practice and improve patient outcomes through cutting-edge technology.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {mainServices.map((service, index) => (
            <div 
              key={index}
              className="bg-custom-bg rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in group"
            >
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <service.icon size={32} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="border-t border-gray-200 pt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Why Choose CataractAI?</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive platform offers everything you need to enhance your eye care practice with AI technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-custom-bg hover:bg-white hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent transition-colors duration-300">
                  <feature.icon size={24} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-hero rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Practice?</h3>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of healthcare providers who trust CataractAI for their eye care needs.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
