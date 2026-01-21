import { 
  MapPin, 
  MessageSquare, 
  BarChart3, 
  Workflow 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <MapPin size={24} className="text-accent" />,
      title: "AI-Powered Itinerary Builder",
      description: "Instantly generate complex, multi-destination itineraries complete with flights, hotels, transfers, and activities based on simple natural language inputs. Our AI considers client preferences, budget constraints, and real-time availability to produce stunning, bookable travel plans in seconds, not hours."
    },
    {
      icon: <MessageSquare size={24} className="text-accent" />,
      title: "Automated Client Communication",
      description: "Deploy a 24/7 AI-powered assistant on your website and WhatsApp to handle routine inquiries, provide booking status updates, and answer frequently asked questions. This frees up your agents to manage high-value conversations while ensuring every client receives an immediate, professional response."
    },
    {
      icon: <BarChart3 size={24} className="text-accent" />,
      title: "Dynamic Pricing & Analytics Engine",
      description: "Move beyond static pricing. Our analytics engine continuously monitors market trends, competitor pricing, and demand signals to recommend optimal pricing for your packages. Uncover hidden revenue opportunities and maximize profitability on every single booking with powerful, easy-to-understand dashboards."
    },
    {
      icon: <Workflow size={24} className="text-accent" />,
      title: "End-to-End Workflow Automation",
      description: "Automate the entire post-booking process. From sending confirmations and collecting payments to issuing vouchers and managing vendor communications, our system orchestrates the workflow flawlessly. Reduce human error, ensure compliance, and give your operations team the visibility they need to manage by exception."
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-primary mb-6">
            The Intelligent Engine for Your Travel Business.
          </h2>
          
          <p className="text-lg text-text-dark">
            Our platform is a suite of seamlessly integrated AI tools designed to address the core operational pillars of a modern travel agency. Each module is engineered to reduce manual effort, increase accuracy, and provide data-driven insights that were previously out of reach. Augment your team's expertise and empower them to perform at a higher level, delivering speed and personalization at scale.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-6 bg-light-bg rounded-xl hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/10 rounded-lg mr-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold font-poppins text-primary">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-text-dark">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block p-4 bg-accent/10 rounded-lg mb-6">
            <img 
              src="https://pub-cdn.sider.ai/u/U0KAH964791/web-coder/684ffbd3060d7d85c724be9f/resource/b97706d9-9926-4c26-8508-8fe2f262a94f.jpg" 
              alt="AI-powered travel solutions" 
              className="w-full max-w-3xl mx-auto rounded-lg object-cover"
            />
          </div>
          
          <p className="text-lg italic text-text-light max-w-2xl mx-auto">
            "TravelAgents AI has transformed our operations. What used to take hours now happens in minutes, and our clients are noticing the difference."
          </p>
          <p className="font-medium text-primary mt-2">
            — Rajesh Sharma, Founder, Incredible India Journeys
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
