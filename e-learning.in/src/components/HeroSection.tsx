
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onStartLearning: () => void;
  onBrowseCourses: () => void;
}

const HeroSection = ({ onStartLearning, onBrowseCourses }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary to-accent pt-20">
      <div className="container mx-auto px-4 text-center text-white">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold font-secondary mb-6 leading-tight">
            Discover Learning<br />
            <span className="text-accent">Tailored Just for You</span><br />
            <span className="text-3xl md:text-5xl">—Driven by AI</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 font-light">
            Unlock a World of Knowledge with Our Intelligent Course Search
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={onStartLearning}
              size="lg" 
              className="bg-accent text-darkText hover:bg-accent/90 font-semibold px-8 py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Start Learning
            </Button>
            <Button 
              onClick={onBrowseCourses}
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Browse Courses
            </Button>
          </div>
        </div>
        
        {/* Animated elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
