
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const services: Array<{
    title: string;
    description: string;
    image: string;
    color: "primary" | "accent";
  }> = [
    {
      title: "Predictive Stocking & Demand Forecasting",
      description: "Eliminate stockouts and overstocking with our AI-driven demand forecasting. We analyze historical rental data, upcoming events (festivals, school plays, movie releases), and seasonal trends (Diwali, Halloween, etc.) to predict the demand for specific costumes. Our system learns from patterns and provides accurate forecasts, allowing you to optimize your inventory levels and maximize revenue potential. Gain a competitive edge by anticipating customer needs and ensuring you have the right costumes available when they are in high demand.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop&auto=format",
      color: "primary" as const
    },
    {
      title: "Location-Based Demand Optimization",
      description: "For businesses with multiple outlets, our AI can predict which costumes will be most in-demand at each location. Optimize stock distribution and prevent imbalances by ensuring that each store has the right inventory to meet local customer needs. Understand regional preferences and tailor your offerings to maximize rentals in each specific area. From Mumbai to Delhi, our location-based insights empower you to make intelligent stocking decisions and drive revenue growth.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop&auto=format",
      color: "accent" as const
    },
    {
      title: "Damage & Wear Prediction",
      description: "Minimize losses and optimize costume lifespan with our AI-powered damage and wear prediction. Our system analyzes return data and, potentially with image analysis, identifies patterns of wear and tear. This enables you to proactively repair, clean, or retire costumes before they become unrentable. Reduce maintenance costs, extend the lifespan of your inventory, and ensure that your costumes are always in top condition.",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop&auto=format",
      color: "primary" as const
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-nunito font-bold text-4xl md:text-5xl text-gray-900 mb-6">
            Our <span className="text-primary">AI-Powered Solutions</span> for Optimal Inventory
          </h2>
          <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto">
            Transform your costume rental business with our comprehensive AI-driven solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              {...service} 
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
