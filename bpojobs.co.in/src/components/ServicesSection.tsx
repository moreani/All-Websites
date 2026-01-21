
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      title: "Intelligent Automation of Customer Service",
      description: "AI-powered chatbots and virtual assistants that handle routine inquiries, freeing up human agents for complex issues.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      features: [
        "24/7 AI-powered customer support",
        "Multi-language support for Indian market",
        "Sentiment analysis and escalation",
        "Natural language understanding"
      ]
    },
    {
      title: "AI-Driven Data Entry & Processing",
      description: "Automate manual data entry and processing tasks with AI-powered OCR and intelligent document processing.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      features: [
        "Optical Character Recognition (OCR)",
        "Intelligent document processing",
        "Error reduction and accuracy improvement",
        "Compliance and security measures"
      ]
    },
    {
      title: "Predictive Analytics for BPO Performance",
      description: "Leverage AI-powered predictive analytics to identify trends, forecast demand, and optimize resource allocation.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      features: [
        "Demand forecasting and trend analysis",
        "Resource optimization algorithms",
        "Performance KPI dashboards",
        "Workflow bottleneck identification"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-4">
            Our <span className="text-primary">AI Automation</span> Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming Your BPO Operations with Intelligent Automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-poppins font-semibold text-gray-900 group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
