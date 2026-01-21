
import { Button } from '@/components/ui/button';
import { Shield, Zap, Bot } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold font-open-sans mb-6 leading-tight">
            Secure File Transfer,{' '}
            <span className="gradient-text">Reimagined with AI</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 font-roboto-mono">
            Experience Unparalleled Security, Speed, and Automation for Your Critical Data Transfers.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center space-x-3 text-wire-green">
              <Shield className="animate-pulse-green" size={24} />
              <span className="font-roboto-mono">Military-Grade Security</span>
            </div>
            <div className="flex items-center space-x-3 text-wire-blue">
              <Zap size={24} />
              <span className="font-roboto-mono">Lightning Fast</span>
            </div>
            <div className="flex items-center space-x-3 text-wire-green">
              <Bot size={24} />
              <span className="font-roboto-mono">AI-Powered</span>
            </div>
          </div>
          
          <Button 
            onClick={scrollToContact}
            className="bg-wire-green hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-lg glow-effect transition-all duration-300 hover:scale-105"
          >
            Request a Demo
          </Button>
          
          <div className="mt-16 relative">
            <div className="data-stream h-1 w-full max-w-2xl mx-auto"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
