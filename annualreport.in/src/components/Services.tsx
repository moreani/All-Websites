import React from 'react';
import { BarChart, FileText, Palette, Link, Headphones } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: BarChart,
      title: "Data Analysis",
      description: "Seamlessly analyze your financial data to identify key trends and insights that matter most to your stakeholders."
    },
    {
      icon: FileText,
      title: "Automated Report Generation",
      description: "Automatically generate visually stunning annual reports in minutes, saving you valuable time and resources."
    },
    {
      icon: Palette,
      title: "Customizable Templates",
      description: "Choose from a variety of professionally designed templates tailored for your branding and information needs."
    },
    {
      icon: Link,
      title: "Integration Capabilities",
      description: "Easy integration with popular tools and software to pull data directly into your reports seamlessly."
    },
    {
      icon: Headphones,
      title: "Expert Support",
      description: "Our dedicated team is always here to assist you with any questions you may have throughout the process."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-neutral-800 mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-neutral-600 font-roboto max-w-3xl mx-auto">
            Comprehensive solutions designed to transform your annual reporting experience 
            with cutting-edge AI technology and professional expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-poppins font-semibold text-neutral-800 mb-4">
                {service.title}
              </h3>
              <p className="text-neutral-600 font-roboto leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-poppins font-bold text-neutral-800 mb-4">
              Ready to Transform Your Annual Reports?
            </h3>
            <p className="text-lg text-neutral-600 font-roboto mb-6">
              Join hundreds of businesses already using our AI-powered solution to create 
              professional, insightful annual reports.
            </p>
            <button className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-lg font-poppins font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;