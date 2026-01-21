
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-marriageBlue/5 to-marriageRed/5 pt-20">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-poppins font-bold text-5xl md:text-7xl text-gray-900 mb-6 leading-tight">
            Find Your Perfect Match with{' '}
            <span className="text-marriageBlue">AI</span>
          </h1>
          
          <h2 className="font-poppins font-medium text-2xl md:text-3xl text-marriageRed mb-8">
            Revolutionizing Indian Matrimony Through Intelligent Technology
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto">
            Are you tired of endless profiles and disappointing matchmaking experiences? MarriageAI offers a modern, 
            data-driven approach to finding your ideal life partner. Our AI algorithms analyze compatibility factors 
            beyond traditional methods, ensuring deeper connections and more successful unions. Discover how MarriageAI 
            is transforming the future of Indian marriages.
          </p>
          
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="bg-marriageRed hover:bg-marriageRed/90 text-white font-poppins font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Get Started Now
          </Button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-marriageBlue/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-marriageRed/10 rounded-full animate-pulse delay-1000"></div>
    </section>
  );
};

export default HeroSection;
