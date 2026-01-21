
import { Video, Sparkles, Scissors, BarChart3 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Video,
      title: "AI Video Generation",
      description: "Create unique videos from scripts or raw footage using advanced AI models that understand context and flow."
    },
    {
      icon: Sparkles,
      title: "Content Enhancement",
      description: "Boost your existing video assets with AI tools that improve image quality, sound, and overall production value."
    },
    {
      icon: Scissors,
      title: "Automated Editing",
      description: "Save time with automation; let our software edit, trim, and assemble videos based on your requirements."
    },
    {
      icon: BarChart3,
      title: "Analytics & Optimization",
      description: "Utilize AI to analyze viewer engagement and feedback to refine and optimize future video content, ensuring maximum impact."
    }
  ];

  return (
    <section id="services" className="py-20 bg-brand-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-800 mb-6">
            Our <span className="text-primary">AI-Driven Services</span>
          </h2>
          <p className="text-lg font-roboto text-gray-600 max-w-2xl mx-auto">
            Discover how our cutting-edge AI technology can transform your video production process
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-brand-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 mx-auto">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold font-montserrat text-gray-800 mb-4 text-center">
                {service.title}
              </h3>
              
              <p className="font-roboto text-gray-600 text-center leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
