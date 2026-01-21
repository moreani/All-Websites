
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      title: "Intelligent Customer Service Automation",
      description: "Elevate your customer experience with our AI-powered chatbots and virtual assistants. We automate routine inquiries, resolve issues quickly, and provide personalized support, freeing up your human agents to focus on complex cases. Our solutions integrate seamlessly with your existing CRM and helpdesk systems, providing a unified view of your customer interactions.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop&auto=format",
      features: ["24/7 Customer Support", "Multi-language Support", "CRM Integration", "Real-time Analytics"]
    },
    {
      title: "Robotic Process Automation (RPA)",
      description: "Streamline your back-office operations with our RPA solutions. We automate repetitive tasks, such as data entry, invoice processing, and report generation, freeing up your employees to focus on more strategic work. Our RPA solutions are highly scalable and customizable, allowing you to automate a wide range of processes.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop&auto=format",
      features: ["Process Automation", "Data Entry", "Invoice Processing", "Report Generation"]
    },
    {
      title: "AI-Powered Supply Chain Optimization",
      description: "Optimize your supply chain with our AI-powered forecasting and inventory management solutions. We analyze historical data, market trends, and external factors to predict demand accurately and optimize inventory levels. Our solutions help you reduce costs, improve efficiency, and ensure that you have the right products in the right place at the right time.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&auto=format",
      features: ["Demand Forecasting", "Inventory Optimization", "Cost Reduction", "Efficiency Improvement"]
    },
    {
      title: "AI-Driven Financial Automation",
      description: "Revolutionize your financial processes with our AI-powered solutions. We automate tasks such as fraud detection, risk assessment, and compliance reporting, ensuring accuracy, efficiency, and regulatory adherence. Our solutions are designed to minimize manual errors and improve your bottom line.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop&auto=format",
      features: ["Fraud Detection", "Risk Assessment", "Compliance Reporting", "Financial Analytics"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-montserrat font-bold text-gray-900">
            Our <span className="primary-color">AI Automation</span> Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI-powered automation services designed to transform your business operations and drive unprecedented growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <p className="text-lg text-gray-600 mb-6">
            Ready to transform your business with AI automation?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-accent-custom hover:bg-green-700 text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
