import React from 'react';
import { 
  Search, 
  TrendingDown, 
  PieChart, 
  FileText, 
  Calculator as CalculatorIcon,
  ArrowRight 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Personalized Loan Analysis',
      description: 'We evaluate your financial health and recommend loan products that best fit your situation, ensuring optimal terms and rates.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: TrendingDown,
      title: 'EMI Optimization',
      description: 'Our AI analyzes your financial data to suggest strategies for minimizing your EMIs and reducing total repayment costs.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: PieChart,
      title: 'Debt Management Strategies',
      description: 'Expert advice on managing existing debts, helping you develop a plan that prioritizes financial freedom and lowers financial stress.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: FileText,
      title: 'Custom Financial Reports',
      description: 'Receive in-depth reports outlining your financial standing, risks, and tailored recommendations for your financial well-being.',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: CalculatorIcon,
      title: 'Interactive Calculation Tools',
      description: 'Engage with our calculators that allow you to experiment with different loan scenarios and stay informed about your financial options.',
      color: 'bg-red-100 text-red-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-text">
            Our Financial{' '}
            <span className="text-primary">Advisory Services</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
          <p className="font-opensans text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI-driven financial solutions designed to optimize your loan decisions 
            and enhance your financial well-being.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-backgroundLight p-8 rounded-xl hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <div className="space-y-6">
                <div className={`${service.color} p-4 rounded-lg w-fit`}>
                  <service.icon className="h-8 w-8" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-montserrat font-semibold text-xl text-text group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-opensans text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center text-primary font-opensans font-medium group-hover:translate-x-2 transition-transform">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-red-600 rounded-2xl p-8 sm:p-12 text-center text-white">
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="font-montserrat font-bold text-2xl sm:text-3xl">
              Ready to Optimize Your Financial Future?
            </h3>
            <p className="font-opensans text-lg opacity-90">
              Join thousands of satisfied users who have transformed their financial decisions 
              with our AI-powered insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary hover:bg-gray-100 font-opensans font-semibold px-8 py-4 rounded-lg transition-colors">
                Start Your Analysis
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary font-opensans font-semibold px-8 py-4 rounded-lg transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;