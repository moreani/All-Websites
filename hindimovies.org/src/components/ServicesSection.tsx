
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, TrendingUp, Users, Bot } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Bot className="w-12 h-12 text-cinema-blue" />,
      title: "Personalized Movie Recommendations",
      description: "Our AI analyzes your viewing history and preferences to suggest films you are likely to enjoy, enabling a seamless exploration of Hindi cinema."
    },
    {
      icon: <Star className="w-12 h-12 text-cinema-red" />,
      title: "In-Depth Reviews",
      description: "Explore comprehensive movie reviews that provide insights into performances, plot, direction, and audience reception, helping you make informed decisions on what to watch next."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-cinema-blue" />,
      title: "Trending Films Spotlight",
      description: "Stay up to date with the latest trends in Hindi cinema. Our platform highlights current hit movies, ensuring you're always in the loop with what's popular."
    },
    {
      icon: <Users className="w-12 h-12 text-cinema-red" />,
      title: "User Ratings and Reviews",
      description: "Engage with a community of film lovers—rate films, leave reviews, and share your opinions to enrich the experience for yourself and others."
    }
  ];

  return (
    <section id="services" className="py-20 bg-cinema-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-montserrat font-bold text-gray-900 mb-6">
            Our <span className="text-cinema-blue">Services</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-roboto">
            Discover the power of AI-driven movie recommendations and comprehensive 
            reviews tailored specifically for Hindi cinema enthusiasts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-cinema-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg"
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-montserrat font-bold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-roboto leading-relaxed text-center">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
