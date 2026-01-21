import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
const Hero = () => {
  return <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                AI-Powered{' '}
                <span className="bg-gradient-music bg-clip-text text-orange-400">
                  Music Learning
                </span>{' '}
                For Everyone
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience personalized music education like never before. Our AI creates custom learning pathways 
                based on your skill level, interests, and musical goals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-music text-white hover:opacity-90 text-lg px-8 py-6">
                Start Your Musical Journey
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span>10,000+ Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span>AI-Personalized</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span>Expert Teachers</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Card className="p-8 bg-white/80 backdrop-blur-sm shadow-2xl border-0">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Your AI Music Tutor</h3>
                    <p className="text-gray-600">Analyzing your musical preferences...</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                      <span className="text-sm font-medium">Skill Level</span>
                      <span className="text-sm bg-primary text-primary-foreground px-2 py-1 rounded">Beginner</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                      <span className="text-sm font-medium">Instrument</span>
                      <span className="text-sm bg-primary text-primary-foreground px-2 py-1 rounded">Guitar</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                      <span className="text-sm font-medium">Goal</span>
                      <span className="text-sm bg-primary text-primary-foreground px-2 py-1 rounded">Play Songs</span>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-music text-white">
                    Generate My Learning Path
                  </Button>
                </div>
              </Card>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full animate-pulse-music"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-orange-300/30 rounded-full animate-pulse-music" style={{
            animationDelay: '1s'
          }}></div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;