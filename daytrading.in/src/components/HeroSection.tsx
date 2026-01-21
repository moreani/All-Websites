
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-primary to-blue-700 text-brand-white pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-roboto font-bold mb-6 leading-tight">
            Boost Your Trading with{" "}
            <span className="text-brand-accent">AI-Driven Insights</span>
          </h1>
          <p className="text-xl md:text-2xl font-open-sans mb-8 opacity-90">
            Harness the power of artificial intelligence to maximize your trading performance.
          </p>
          <Button 
            onClick={scrollToContact}
            className="bg-brand-accent hover:bg-orange-600 text-brand-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Get Started Today
          </Button>
        </div>
        
        {/* Floating Animation Element */}
        <div className="mt-16 animate-float">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80" 
            alt="AI Trading Technology"
            className="mx-auto rounded-lg shadow-2xl max-w-2xl w-full opacity-80"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
