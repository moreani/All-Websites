
import { Card, CardContent } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      title: "Personalized Matchmaking",
      description: "Our AI algorithms analyze your profile, preferences, and behavioral data to identify potential matches with a high degree of compatibility. We go beyond surface-level criteria to delve into the factors that truly matter for long-term relationship success.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Intelligent Compatibility Analysis",
      description: "We use advanced machine learning techniques to assess compatibility based on personality traits, values, communication styles, and lifestyle preferences. Our comprehensive analysis provides valuable insights into your relationship dynamics and potential for growth.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Assisted Wedding Planning",
      description: "MarriageAI assists you with wedding planning with curated vendor recommendations based on AI analysis of your budget, preferences, and the wedding style you want. The analysis also helps reduce potential fraudulent vendors.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Fraud Detection & Verification",
      description: "MarriageAI can help reduce fraud and false claims by verifying user data using machine learning and image analysis, ensuring you connect with genuine profiles and authentic individuals.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section id="services" className="py-20 bg-marriageBackground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-gray-900 mb-6">
            AI-Powered Matrimonial{' '}
            <span className="text-marriageRed">Solutions</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 rounded-2xl overflow-hidden">
              <div className="relative h-64">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <CardContent className="p-8">
                <h3 className="font-poppins font-semibold text-2xl text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
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
