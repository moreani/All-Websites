
import { Bot, Target, BarChart, Globe } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Bot className="text-primary" size={48} />,
      title: "Campaign Automation",
      description: "Simplify campaign management by automating ad placements, budget allocations, and performance tracking, ensuring optimal reach and engagement without the manual workload.",
      features: ["Automated Ad Placement", "Smart Budget Allocation", "Real-time Performance Tracking", "Cross-platform Management"]
    },
    {
      icon: <Target className="text-accent" size={48} />,
      title: "Ad Optimization Tools",
      description: "Use AI-driven insights to optimize ad creatives and targeting, enhancing campaign ROI while minimizing costs.",
      features: ["AI-Powered Creative Testing", "Audience Segmentation", "Bid Optimization", "A/B Testing Automation"]
    },
    {
      icon: <BarChart className="text-primary" size={48} />,
      title: "Reporting & Analysis Automation",
      description: "Generate real-time reports and analytics automatically, providing you with actionable insights without the hassle of manual data compilation.",
      features: ["Automated Reporting", "Custom Dashboards", "Predictive Analytics", "Performance Insights"]
    },
    {
      icon: <Globe className="text-accent" size={48} />,
      title: "Multi-Channel Management",
      description: "Effortlessly manage advertising across various platforms from a single interface, ensuring consistency and control.",
      features: ["Unified Dashboard", "Cross-platform Campaigns", "Centralized Analytics", "Brand Consistency"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-800 mb-6">
            Our Solutions
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI-powered tools designed to revolutionize your advertising strategy and maximize your ROI
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 p-4 bg-white rounded-xl shadow-md">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 font-montserrat">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-blue-600 text-white p-12 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-bold mb-4 font-montserrat">
              Ready to Transform Your Advertising?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of businesses already benefiting from our AI automation solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+918369848475"
                className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent/90 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Now
              </a>
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
