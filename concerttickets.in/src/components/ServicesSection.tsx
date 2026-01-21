
import { TrendingUp, Users, Shield, Bot, BarChart3 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "AI-Driven Ticket Pricing & Optimization",
      description: "Maximize your revenue with our dynamic pricing engine. ConcertTickets.in uses machine learning to analyze real-time demand, competitor pricing, and historical data to automatically adjust ticket prices, ensuring optimal revenue generation for every event. We help you understand price elasticity for your events and prevent selling tickets below optimal price."
    },
    {
      icon: Users,
      title: "Personalized Event Recommendations",
      description: "Enhance user engagement and drive ticket sales with personalized event recommendations. Our AI algorithms analyze user preferences, past purchase history, and social media activity to suggest relevant events, increasing the likelihood of conversion and fostering customer loyalty. We use collaborative filtering and content-based filtering techniques to deliver targeted recommendations."
    },
    {
      icon: Shield,
      title: "Real-Time Fraud Detection & Prevention",
      description: "Protect your events from fraud and unauthorized resales. ConcertTickets.in employs advanced AI techniques to identify and prevent fraudulent activities, such as scalping and bot purchases, ensuring a fair and secure ticketing process for all attendees. Our anomaly detection algorithms flag suspicious transactions in real-time, enabling you to take immediate action."
    },
    {
      icon: Bot,
      title: "Enhanced Customer Experience with AI Chatbots",
      description: "Provide instant customer support and enhance the overall event experience with our AI-powered chatbots. These virtual assistants can answer frequently asked questions, provide event information, and assist with ticket purchases, freeing up your staff to focus on other critical tasks. Our chatbots are trained on a vast knowledge base of event-related information."
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics for Event Planning",
      description: "Make data-driven decisions about event planning with our predictive analytics tools. ConcertTickets.in analyzes historical data, market trends, and audience demographics to forecast ticket sales, identify potential risks, and optimize event logistics. This helps you make smarter decisions about venue selection, marketing spend, and resource allocation."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-900 mb-6">
            AI-Powered Solutions for the{' '}
            <span className="text-primary">Indian Entertainment</span> Industry
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leverage cutting-edge artificial intelligence to transform your event management and ticketing operations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-poppins font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 font-roboto leading-relaxed">
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
