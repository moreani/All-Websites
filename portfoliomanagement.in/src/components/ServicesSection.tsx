
import { TrendingUp, Shield, BarChart3, FileText } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Utilize AI to forecast market trends and inform your asset allocations with precision and confidence."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Identify potential vulnerabilities in your portfolio with AI-driven analysis helping you make proactive adjustments."
    },
    {
      icon: BarChart3,
      title: "Performance Tracking",
      description: "Monitor and evaluate portfolio performance using advanced data visualization tools to make adjustments as needed to enhance returns."
    },
    {
      icon: FileText,
      title: "Custom Reports",
      description: "Receive tailored reports outlining actionable insights and strategic opportunities, enhancing transparency and decision-making capabilities."
    }
  ];

  return (
    <section className="py-20 bg-backgroundDark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-lg font-roboto text-gray-600 max-w-2xl mx-auto">
            Comprehensive AI-driven solutions to transform your investment approach
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-backgroundLight p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
              </div>
              
              <h3 className="text-xl font-montserrat font-semibold text-primary mb-4 text-center">
                {service.title}
              </h3>
              
              <p className="text-gray-600 font-roboto text-center leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
