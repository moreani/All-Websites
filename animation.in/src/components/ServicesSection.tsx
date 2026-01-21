
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      title: "AI-Powered Portfolio Review & Feedback",
      description: "Upload your animation works for personalized critiques. Our AI analyzes various elements such as character movement, timing, and storytelling flow to provide constructive insights along with recommendations for tutorials and industry best practices.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      title: "Personalized Learning Pathways",
      description: "Discover your animation career potential with a personalized curriculum tailored to your goals, whether you're looking to become a 2D animator, VFX artist, or game animator. Our assessments guide you to the right courses, tutorials, and projects.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gradient: "from-accent/20 to-accent/5"
    },
    {
      title: "AI-Assisted Practice & Skill Development",
      description: "Engage with interactive tools that deliver real-time feedback on your animation techniques. Our AI can generate challenges and exercises based on the key principles of animation to improve your craft progressively.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gradient: "from-primary/20 to-accent/10"
    },
    {
      title: "Career Path & Job Market Insights",
      description: "Stay informed with thorough analyses of the job market, including current trends and in-demand skills specific to the animation industry in India. Our platform also recommends networking events and opportunities to connect with industry professionals.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gradient: "from-accent/20 to-primary/10"
    }
  ];

  return (
    <section id="services" className="py-20 bg-backgroundLight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-gray-600 font-roboto max-w-3xl mx-auto">
            Comprehensive AI-powered solutions to accelerate your animation career
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up border-0">
              <div className={`h-48 bg-gradient-to-br ${service.gradient} rounded-t-lg overflow-hidden`}>
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-poppins text-gray-900 group-hover:text-primary transition-colors duration-200">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 font-roboto leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
