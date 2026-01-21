
import { Brain, TrendingUp, Users, Target, BarChart3 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Sentiment Intelligence Platform",
      subtitle: "Deep Review Analysis",
      description: "Our advanced NLP algorithms process reviews from BookMyShow, IMDb, social media platforms, and regional film websites, analyzing sentiment across multiple Indian languages. We identify emotional triggers, cultural references, and audience satisfaction patterns that influence box office performance and streaming engagement rates.",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Predictive Box Office Analytics",
      subtitle: "Pre-Release Success Forecasting",
      description: "Utilizing machine learning models trained on historical box office data, social media buzz, star power metrics, and genre preferences, we predict opening weekend collections and total theatrical run performance with 87% accuracy. Our models account for regional variations, festival releases, and competitive landscape impacts.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Users,
      title: "Audience Segmentation & Targeting",
      subtitle: "Demographic Intelligence",
      description: "We create detailed audience personas based on review patterns, viewing behaviors, and engagement metrics. Our AI identifies micro-segments within Indian audiences – from urban millennials preferring content-driven cinema to Tier-2 family audiences gravitating toward star-driven entertainers – enabling precise marketing strategies.",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Target,
      title: "Content Optimization Recommendations",
      subtitle: "Script & Marketing Enhancement",
      description: "Our platform analyzes successful film patterns to provide actionable recommendations for script development, trailer optimization, and promotional campaign strategies. We identify which story elements, casting choices, and marketing messages resonate with specific audience segments across different Indian markets.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: BarChart3,
      title: "Competitive Intelligence Dashboard",
      subtitle: "Market Position Analysis",
      description: "Real-time monitoring of competitor releases, audience response patterns, and market share movements. Our dashboard provides strategic insights for release planning, pricing strategies, and counter-programming opportunities in the highly competitive Indian entertainment landscape.",
      color: "from-gold-accent to-yellow-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-outfit font-bold text-cinema-dark mb-6">
            AI-Powered Cinema Solutions
          </h2>
          <div className="w-24 h-1 bg-gold-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive intelligence suite designed for India's entertainment ecosystem
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative p-8">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${service.color} text-white mb-6`}>
                  <service.icon size={24} />
                </div>
                
                <h3 className="text-xl font-outfit font-bold text-cinema-dark mb-2">
                  {service.title}
                </h3>
                
                <h4 className="text-gold-accent font-semibold mb-4">
                  {service.subtitle}
                </h4>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-cinema-dark text-white p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-outfit font-bold mb-4">
              Ready to Transform Your Entertainment Strategy?
            </h3>
            <p className="text-gray-300 mb-6">
              Join leading production houses and streaming platforms already using our AI insights
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-gold-accent text-cinema-dark px-4 py-2 rounded-full font-medium">87% Prediction Accuracy</span>
              <span className="bg-gold-accent text-cinema-dark px-4 py-2 rounded-full font-medium">22 Indian Languages</span>
              <span className="bg-gold-accent text-cinema-dark px-4 py-2 rounded-full font-medium">₹19,000 Cr Market Coverage</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
