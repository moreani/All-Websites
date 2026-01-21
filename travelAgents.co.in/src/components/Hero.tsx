import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-primary/95 to-primary">
      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-accent/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-blue-400/30 rounded-full blur-3xl"></div>
        
        {/* Animated flow lines */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i}
              className="absolute h-px bg-white/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 300 + 100}px`,
                transform: `rotate(${Math.random() * 360}deg)`,
                opacity: Math.random() * 0.5 + 0.2
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-white leading-tight mb-6">
            Reimagine Travel Operations.<br />
            <span className="text-accent">Scale with Intelligence.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Our AI platform automates complex workflows, personalizes client experiences, and unlocks new revenue streams for India's leading travel agencies and tour operators. Stop competing on price; start competing on intelligence.
          </p>
          
          <button 
            className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-medium flex items-center mx-auto space-x-2 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
          >
            <span>Schedule a Free Demo</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
