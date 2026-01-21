
const ServicesSection = () => {
  const services = [
    {
      title: "AI-Powered Trend Forecasting",
      description: "We harness machine learning algorithms to analyze data from social media, fashion shows, and consumer preferences, helping brands stay ahead of trends and consumer needs.",
      icon: "📊"
    },
    {
      title: "Smart Fabric Selection",
      description: "Our AI technology recommends materials based on trends, sustainability score, and market demands, facilitating better decision-making for designers.",
      icon: "🧵"
    },
    {
      title: "Supply Chain Optimization",
      description: "We offer AI-driven solutions for inventory management, ensuring that businesses minimize waste and maximize efficiency while meeting consumer expectations.",
      icon: "🔗"
    },
    {
      title: "Personalized Consumer Insights",
      description: "By integrating AI, we enable brands to understand their customers better, segmenting audiences for targeted marketing strategies that resonate with diverse consumers.",
      icon: "👥"
    }
  ];

  return (
    <section id="services" className="py-20 bg-bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-roboto text-accent mb-4">
            Our Services
          </h2>
          <p className="text-xl font-lora text-gray-600 max-w-2xl mx-auto">
            Comprehensive AI solutions designed to transform your fashion business
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold font-roboto text-accent mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700 font-lora leading-relaxed">
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
