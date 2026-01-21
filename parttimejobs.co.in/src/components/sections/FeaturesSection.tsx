
import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: "🤖",
      title: "AI-Powered Matching",
      description: "Our advanced AI algorithm analyzes your skills, preferences, and experience to match you with the perfect opportunities."
    },
    {
      icon: "⚡",
      title: "Instant Applications",
      description: "Apply to jobs with one click. Our system pre-fills applications based on your profile and job requirements."
    },
    {
      icon: "💰",
      title: "Competitive Rates",
      description: "Access high-paying part-time and freelance opportunities with transparent pricing and secure payments."
    },
    {
      icon: "🛡️",
      title: "Verified Employers",
      description: "Work with confidence knowing all employers are thoroughly vetted and verified for legitimacy and reliability."
    },
    {
      icon: "📊",
      title: "Real-Time Analytics",
      description: "Track your application success rate, earnings, and performance with detailed analytics and insights."
    },
    {
      icon: "🎯",
      title: "Smart Recommendations",
      description: "Get personalized job recommendations that match your skills, schedule, and career goals perfectly."
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Modern Freelancers
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the future of freelancing with our cutting-edge AI technology 
            and comprehensive platform features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-2"
            >
              <CardContent className="p-8">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
