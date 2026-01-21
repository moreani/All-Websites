
import { Brain, MessageCircle, Mic, Briefcase, TrendingUp } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Brain className="w-12 h-12 text-brand-blue mb-4" />,
      title: "Personalized Learning Plans",
      description: "Each learner receives a customized learning path based on their current proficiency level and goals. Our AI analyzes your performance and adjusts lessons accordingly, ensuring you're always challenged yet progressing."
    },
    {
      icon: <MessageCircle className="w-12 h-12 text-brand-blue mb-4" />,
      title: "Interactive Conversational Practice",
      description: "Engage in real-time dialogues with our AI tutoring system. With interactive exercises mimicking real-life scenarios, you can practice speaking and enhance your confidence without the pressure of in-person interactions."
    },
    {
      icon: <Mic className="w-12 h-12 text-brand-blue mb-4" />,
      title: "Pronunciation and Accent Training",
      description: "Utilize our advanced voice recognition technology to receive immediate feedback on your pronunciation. Whether you aim for a neutral accent or wish to soften a regional accent, our training modules cater to all needs."
    },
    {
      icon: <Briefcase className="w-12 h-12 text-brand-blue mb-4" />,
      title: "Business Language Modules",
      description: "Focus on language skills relevant to specific industries and professional scenarios. From emails and reports to negotiations, unlock the terminology and expressions essential for effective communication in your field."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-brand-blue mb-4" />,
      title: "Progress Tracking and Certificates",
      description: "Track your progress through analytic dashboards that highlight improvement areas. Upon completion of each course, receive a certificate that enhances your professional profile."
    }
  ];

  return (
    <section id="services" className="py-20 bg-brand-bg">
      <div className="container mx-auto px-4">
        <h2 className="font-lato font-bold text-4xl md:text-5xl text-center mb-16 text-gray-800">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-center">
                {service.icon}
                <h3 className="font-lato font-bold text-xl mb-4 text-gray-800">
                  {service.title}
                </h3>
                <p className="font-roboto text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
