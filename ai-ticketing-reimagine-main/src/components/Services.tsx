
import { Bot, Shield, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: "AI-Powered Booking & Reservation Systems",
      description: "Automate the entire booking process, from flight search to payment processing. Our AI algorithms intelligently analyze real-time data to optimize pricing and availability, ensuring maximum revenue generation. Reduce manual effort, minimize errors, and enhance the customer experience with our seamless booking automation solutions.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <Bot className="w-12 h-12 text-accent" />,
      title: "24/7 AI Customer Support",
      description: "Provide instant and personalized customer support with our AI-powered chatbots. Answer frequently asked questions, resolve issues, and handle booking changes efficiently. Our chatbots are trained on vast datasets of airline-related information and are capable of understanding and responding to a wide range of customer inquiries in multiple Indian languages.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Secure Ticketing with AI Fraud Detection",
      description: "Protect your business from fraudulent transactions with our advanced AI-powered fraud detection system. Our algorithms analyze booking patterns, payment information, and other relevant data to identify and prevent fraudulent activities in real-time. Minimize financial losses and maintain the integrity of your ticketing system.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-roboto font-bold text-gray-900 mb-6">
              Our AI-Powered 
              <span className="text-primary"> Automation Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to revolutionize every aspect of airline ticketing operations
            </p>
          </div>
          
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center animate-slide-up`}
              >
                <div className="lg:w-1/2">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg shadow-xl w-full h-80 object-cover"
                  />
                </div>
                
                <div className="lg:w-1/2">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <div className="mb-4">
                        {service.icon}
                      </div>
                      <CardTitle className="text-2xl font-roboto font-bold text-gray-900 mb-4">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-lg text-gray-700 leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
