
import { Building, ShoppingCart, MessageCircle, Newspaper, MapPin, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Local Services Directory",
      description: "A comprehensive directory of local service providers—from restaurants to hospitals—ensuring you have access to everything you need in your community.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: TrendingUp,
      title: "AI-Powered E-commerce for Local Businesses",
      description: "We help local sellers optimize their pricing strategies with predictive analytics, enabling them to adjust in real-time based on demand fluctuations, ensuring customer satisfaction.",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: ShoppingCart,
      title: "AI-Enhanced Marketplace",
      description: "Our AI solutions assist local businesses in managing stock levels and customizing marketing strategies to improve customer engagement. By analyzing consumer behaviors, our platform empowers sellers to tailor their approaches.",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: MessageCircle,
      title: "AI Chat Support",
      description: "Our smart chat assistant is available 24/7, providing immediate answers to queries about local services, events, and products, enhancing your user experience.",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: Newspaper,
      title: "Personalized Local News Feed",
      description: "Stay updated with a news feed tailored for you, showcasing local events, updates, and articles that matter to your community and interests.",
      gradient: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-lightbg to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-800 mb-6">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-gray-600 font-roboto max-w-3xl mx-auto">
              Empowering your local experience with cutting-edge AI technology and community-focused solutions
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6"></div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background Gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full -translate-y-16 translate-x-16"></div>
                
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-montserrat font-semibold text-gray-800 mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 font-roboto leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            ))}

            {/* Special Featured Service */}
            <div className="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-primary to-accent rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold mb-4">
                  Complete Local Ecosystem
                </h3>
                <p className="font-roboto leading-relaxed opacity-90">
                  Experience the full power of Near.Co.In with all services integrated into one seamless platform designed for your local community needs.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in delay-700">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-montserrat font-semibold text-gray-800 mb-4">
                Ready to Transform Your Local Experience?
              </h3>
              <p className="text-gray-600 font-roboto mb-6">
                Join thousands of users who are already discovering their communities in a whole new way.
              </p>
              <button 
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-montserrat font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
