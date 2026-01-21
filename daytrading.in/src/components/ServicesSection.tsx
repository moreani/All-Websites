
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      title: "AI Trading Bots",
      description: "Develop and customize intelligent trading bots that act on your behalf, executing trades 24/7 based on your specified conditions and preferences.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
      icon: "🤖"
    },
    {
      title: "Market Predictive Analytics",
      description: "Utilizing machine learning, our analytics tools assess historical data to predict future market movements, allowing traders to make informed decisions.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
      icon: "📊"
    },
    {
      title: "Risk Management Systems",
      description: "Advanced algorithms to calculate risks in real-time and suggest adjustments to protect your investments based on market volatility.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
      icon: "🛡️"
    },
    {
      title: "Performance Optimization Tools",
      description: "Analytics services designed to maximize profit margins and reduce loss, improving your overall trading strategy through real-time feedback and adjustments.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
      icon: "⚡"
    }
  ];

  return (
    <section id="services" className="py-20 bg-brand-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-roboto font-bold text-brand-dark mb-4 text-center">
            Our <span className="text-brand-primary">Services</span>
          </h2>
          <p className="text-xl font-open-sans text-brand-dark text-center mb-16 opacity-80">
            Comprehensive AI-powered solutions for modern traders
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-brand-white hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 animate-fade-in overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 text-4xl">{service.icon}</div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-roboto font-bold text-brand-dark">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-dark font-open-sans leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-brand-primary to-blue-700 text-brand-white p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-roboto font-bold mb-4">
                Ready to Transform Your Trading?
              </h3>
              <p className="text-lg font-open-sans mb-6 opacity-90">
                Join thousands of traders who have already enhanced their performance with our AI solutions.
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-brand-accent hover:bg-orange-600 text-brand-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
