import React from 'react';
import { FileText, TrendingUp, Shield, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Intelligent Accounts Payable Automation",
      description: "Automate invoice processing, eliminate manual data entry, and reduce payment errors with AI-powered invoice recognition and approval workflows.",
      features: [
        "AI-powered invoice recognition",
        "Automated data extraction",
        "GST compliance handling",
        "Fraud detection capabilities",
        "Seamless integration with existing systems"
      ],
      content: "Tired of spending countless hours manually processing invoices? Our Intelligent Accounts Payable Automation solution uses AI to automatically extract data from invoices, match them to purchase orders, and route them for approval. This eliminates manual data entry, reduces payment errors, and frees up your finance team to focus on more strategic tasks."
    },
    {
      icon: TrendingUp,
      title: "AI-Driven Budgeting & Forecasting",
      description: "Create accurate budgets and forecasts, identify potential risks, and make data-driven decisions with AI-powered predictive analytics.",
      features: [
        "Machine learning predictions",
        "Historical data analysis",
        "Risk identification",
        "Scenario planning",
        "Real-time market adaptation"
      ],
      content: "Uncertain economic conditions make accurate budgeting and forecasting more critical than ever. Our AI-Driven Budgeting & Forecasting solution uses machine learning to analyze historical data, identify trends, and predict future financial performance. This enables you to create more accurate budgets, identify potential risks, and make data-driven decisions that improve profitability."
    },
    {
      icon: Shield,
      title: "Automated Financial Reporting & Compliance",
      description: "Streamline your financial reporting processes, ensure compliance with Indian regulations, and generate accurate reports with AI-powered data validation and automation.",
      features: [
        "Automated report generation",
        "Indian regulatory compliance",
        "AI-powered data validation",
        "Error detection and correction",
        "Real-time compliance monitoring"
      ],
      content: "Navigating the complex world of Indian financial regulations can be challenging and time-consuming. Our Automated Financial Reporting & Compliance solution helps you streamline your reporting processes, ensure compliance with all applicable regulations, and generate accurate reports with ease. We stay up-to-date on the latest regulatory changes."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-primary">
            AI-Powered Automation for Every Financial Need
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-secondary">
            Comprehensive solutions designed to transform your financial operations and drive business growth
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="text-primary" size={32} />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-primary">
                  {service.title}
                </h3>
                
                <p className="text-lg text-gray-600 mb-6 font-secondary">
                  {service.description}
                </p>
                
                <p className="text-gray-700 mb-8 leading-relaxed font-secondary">
                  {service.content}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 inline-flex items-center gap-2 font-medium">
                  Learn More
                  <ArrowRight size={16} />
                </button>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="bg-gradient-to-br from-primary/20 to-green-800/20 rounded-2xl p-8 h-80 flex items-center justify-center">
                  <service.icon className="text-primary animate-float" size={120} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;