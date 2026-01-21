
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      title: "AI Currency Coach",
      description: "An interactive chatbot designed to respond to user inquiries about currency exchange, financial concepts, and economic indicators. This feature makes learning engaging and accessible, helping users develop a solid foundation in currency-related topics.",
      icon: "🤖"
    },
    {
      title: "Historical Data Analysis with AI",
      description: "Utilizing advanced algorithms, our platform analyzes historical exchange rate data, identifying patterns and correlations with significant economic events. This service empowers users with actionable insights and contextual understanding of currency trends.",
      icon: "📊"
    },
    {
      title: "Simulated Forex Trading Environment",
      description: "Our unique 'sandbox' feature allows users to practice trading based on historical data or AI predictions, enabling them to learn about market dynamics without financial risks. This hands-on experience fosters confidence and skill-building in forex trading.",
      icon: "🎯"
    }
  ];

  return (
    <section id="services" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-lato font-bold text-4xl md:text-5xl text-primary mb-6">
            Our Services
          </h2>
          <p className="font-roboto text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our AI-powered tools and educational resources designed to make currency trading accessible and understandable for everyone.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
