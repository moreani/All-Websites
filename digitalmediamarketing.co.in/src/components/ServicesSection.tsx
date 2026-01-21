
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      title: "Custom AI Software Development",
      description: "Tailored solutions that cater to unique business needs, optimizing marketing efforts through data-driven decisions.",
      icon: "🤖"
    },
    {
      title: "Predictive Analytics Tools",
      description: "Software that forecasts consumer behavior, helping marketers to strategize effectively and position their offerings to match market demand.",
      icon: "📊"
    },
    {
      title: "Social Media Automation",
      description: "Tools designed to streamline social media management, from content scheduling to performance analytics.",
      icon: "📱"
    },
    {
      title: "SEO Optimization Solutions",
      description: "Software that analyzes current SEO strategies, offering recommendations to enhance visibility and engagement.",
      icon: "🔍"
    },
    {
      title: "Market Research AI",
      description: "Leveraging AI to gather insights on market trends, competitor activity, and consumer preferences.",
      icon: "📈"
    }
  ];

  return (
    <section className="py-20 bg-brand-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-roboto text-primary mb-6">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl font-lato text-gray-600 max-w-2xl mx-auto">
            Comprehensive AI-powered solutions to transform your marketing strategy
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-roboto text-primary mb-2">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 font-lato leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
