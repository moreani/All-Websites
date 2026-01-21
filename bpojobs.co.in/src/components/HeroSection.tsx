
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-green-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-gray-900 leading-tight mb-6">
              Revolutionize Your <span className="text-primary">BPO</span> with <span className="text-accent">AI Automation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Unlock unparalleled efficiency, reduce costs, and drive growth with our cutting-edge AI solutions, tailored for the Indian BPO landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={scrollToContact}
                className="bg-accent hover:bg-accent/90 text-white font-medium px-8 py-3 text-lg"
                size="lg"
              >
                Request a Demo
              </Button>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white font-medium px-8 py-3 text-lg"
                size="lg"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop" 
              alt="AI-Powered BPO Technology"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8 max-w-4xl mx-auto text-lg leading-relaxed">
            In today's rapidly evolving business environment, staying ahead requires embracing transformative technologies. BPO Jobs brings you the power of AI automation, specifically designed to revolutionize your Business Process Outsourcing operations. We understand the unique challenges and opportunities within the Indian BPO sector, and our solutions are meticulously crafted to address them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
