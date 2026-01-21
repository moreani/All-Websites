
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      title: "Agricultural Technology Solutions",
      description: "Implement AI-driven analytics for crop management and yield prediction. Enhance precision agriculture through data-driven insights.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Crop Management", "Yield Prediction", "Precision Agriculture", "Data Analytics"]
    },
    {
      title: "Textile Automation",
      description: "Revolutionize manufacturing processes with smart automation solutions. From design to production, leverage AI for optimized efficiency and quality control.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Smart Automation", "Quality Control", "Design Optimization", "Production Efficiency"]
    },
    {
      title: "Tourism Optimization",
      description: "Utilize AI to enhance visitor experiences through personalized recommendations and predictive analytics, driving growth in Rajasthan's vibrant tourism sector.",
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Personalized Recommendations", "Predictive Analytics", "Visitor Experience", "Growth Optimization"]
    },
    {
      title: "Heritage Data Management",
      description: "Preserve and promote Rajasthan's rich cultural heritage with AI tools for data organization, digital archiving, and visitor engagement analytics.",
      image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Digital Archiving", "Data Organization", "Cultural Preservation", "Engagement Analytics"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-roboto font-bold text-4xl md:text-5xl mb-8 text-gray-800">
            Our Services
          </h2>
          
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          
          <p className="font-opensans text-xl text-gray-600 max-w-3xl mx-auto">
            At Rajasthani AI Solutions, we offer a suite of specialized AI services tailored to specific industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors"></div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="font-roboto text-xl text-gray-800 group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="font-opensans text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex}
                      className="px-3 py-1 bg-accent/20 text-primary text-sm rounded-full font-opensans font-semibold"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
