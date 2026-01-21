import { ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#0B5DC7] to-[#4DA3FF] text-white min-h-[90vh] flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://pub-cdn.sider.ai/u/U0KAH964791/web-coder/684fd112060d7d85c7238b74/resource/e819129e-e952-4f65-a101-152772c744e5.jpg" 
          alt="Digital Marketing Background" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium">
              Leading Digital Marketing Agency in India
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your Online Presence in India's Digital Landscape
            </h1>
            
            <p className="text-lg md:text-xl text-white/90">
              Strategic digital solutions tailored for Indian businesses, combining global expertise with local market understanding.
            </p>
            
            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="bg-white text-[#0B5DC7] hover:bg-gray-100 px-6 py-3 rounded-lg font-medium flex items-center justify-center cursor-pointer transition-colors"
              >
                Get Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              
              <Link
                to="services"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="bg-transparent hover:bg-white/10 border border-white text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center cursor-pointer transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center">
                <img src="https://pub-cdn.sider.ai/u/U0KAH964791/web-coder/684fd112060d7d85c7238b74/resource/283db25d-7521-4ba6-9206-5c2a0f29e5d6.jpg" alt="Google Partner" className="h-10 object-contain" />
              </div>
              <div className="flex items-center">
                <img src="https://pub-cdn.sider.ai/u/U0KAH964791/web-coder/684fd112060d7d85c7238b74/resource/4ababc29-dd41-4758-b03c-08f440bc8106.jpg" alt="Facebook Marketing Partner" className="h-10 object-contain" />
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-white/20 rounded-lg blur-lg"></div>
              <img 
                src="https://pub-cdn.sider.ai/u/U0KAH964791/web-coder/684fd112060d7d85c7238b74/resource/5cfe09b7-15cf-4a79-8062-a3e844b261c2.jpg" 
                alt="Digital Marketing Strategy" 
                className="relative w-full max-w-md rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { metric: "500+", label: "Indian Clients" },
            { metric: "95%", label: "Client Retention" },
            { metric: "₹250Cr+", label: "Revenue Generated" },
            { metric: "10+", label: "Years Experience" }
          ].map((item, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold">{item.metric}</div>
              <div className="text-sm md:text-base text-white/80">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link
          to="services"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          className="flex flex-col items-center cursor-pointer"
        >
          <span className="text-sm mb-1">Scroll Down</span>
          <ArrowRight className="h-4 w-4 transform rotate-90" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
