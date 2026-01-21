
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-bg-light to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23008080' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-primary-brand">ConnectAI:</span> The AI-Powered 
              <span className="gradient-animation bg-clip-text text-transparent"> Networking App</span> for India's Professionals
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Build meaningful connections, find mentors, and accelerate your career with ConnectAI.
            </p>
            
            <div className="prose prose-lg text-gray-700 mb-10 max-w-none">
              <p>
                In today's competitive business landscape, building a strong professional network is essential for success. 
                But traditional networking can be time-consuming and inefficient. ConnectAI revolutionizes professional 
                networking by leveraging AI to connect you with the right people, at the right time.
              </p>
              <p>
                Our intelligent matching algorithms analyze your skills, interests, and career goals to suggest relevant 
                connections with a high probability of mutual benefit. Find mentors who can guide you, collaborators who 
                can help you achieve your goals, and job opportunities that align with your aspirations.
              </p>
              <p className="font-medium text-primary-brand">
                ConnectAI is more than just a networking app; it's your AI-powered career accelerator, designed 
                specifically for the Indian market.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary-brand hover:bg-primary-brand/90 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Download ConnectAI
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToFeatures}
                className="border-primary-brand text-primary-brand hover:bg-primary-brand hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - App Mockup */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative z-10 bg-gray-900 rounded-[3rem] p-2 shadow-2xl animate-float">
                <div className="bg-white rounded-[2.5rem] overflow-hidden w-80 h-[640px]">
                  {/* Status Bar */}
                  <div className="bg-primary-brand h-12 flex items-center justify-between px-6 text-white text-sm">
                    <span>9:41</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-2 bg-white rounded-sm"></div>
                      <div className="w-1 h-2 bg-white rounded-sm"></div>
                      <div className="w-6 h-2 bg-white rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div className="p-6 bg-gradient-to-b from-primary-brand/10 to-white h-full">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-primary-brand mb-2">ConnectAI</h3>
                      <p className="text-gray-600">Smart Networking</p>
                    </div>
                    
                    {/* Mock Connection Cards */}
                    <div className="space-y-4">
                      <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-accent-brand rounded-full flex items-center justify-center text-white font-bold">
                            RA
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Raj Patel</h4>
                            <p className="text-sm text-gray-600">Software Engineer</p>
                            <p className="text-xs text-primary-brand">95% Match</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-primary-brand rounded-full flex items-center justify-center text-white font-bold">
                            PS
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Priya Sharma</h4>
                            <p className="text-sm text-gray-600">Product Manager</p>
                            <p className="text-xs text-accent-brand">92% Match</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-accent-brand rounded-full flex items-center justify-center text-white font-bold">
                            AK
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Amit Kumar</h4>
                            <p className="text-sm text-gray-600">Data Scientist</p>
                            <p className="text-xs text-primary-brand">88% Match</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent-brand/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-brand/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
