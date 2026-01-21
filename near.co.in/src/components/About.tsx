
import { Brain, MapPin, Users, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-800 mb-6">
              About <span className="text-primary">Near.Co.In</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="animate-slide-in">
              <p className="text-lg text-gray-600 font-roboto mb-6 leading-relaxed">
                At Near.Co.In, we harness the power of artificial intelligence to connect you with your local environment effortlessly. With a hyper-local focus, our platform curates a comprehensive directory of service providers, attractions, and events tailored to your interests and preferences.
              </p>
              <p className="text-lg text-gray-600 font-roboto mb-6 leading-relaxed">
                Whether you're looking for hidden gems in your neighborhood or essential services nearby, we guarantee an enhanced experience filled with relevant information.
              </p>
              <p className="text-lg text-gray-600 font-roboto leading-relaxed">
                Our innovative AI algorithms analyze real-time data to deliver you personalized recommendations, making sure that every piece of information is just a click away. With Near.Co.In, experience a new era of local engagement that empowers users to explore, enjoy, and interact with their surroundings like never before.
              </p>
            </div>

            {/* Visual Element */}
            <div className="relative animate-fade-in delay-300">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-accent/20 rounded-full blur-xl"></div>
                
                <div className="relative z-10 grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4">
                      <Brain className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-montserrat font-semibold text-gray-800 mb-2">AI-Powered</h4>
                    <p className="text-sm text-gray-600 font-roboto">Smart algorithms for better recommendations</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-montserrat font-semibold text-gray-800 mb-2">Hyper-Local</h4>
                    <p className="text-sm text-gray-600 font-roboto">Focused on your immediate community</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-montserrat font-semibold text-gray-800 mb-2">Community</h4>
                    <p className="text-sm text-gray-600 font-roboto">Connecting neighbors and local businesses</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-montserrat font-semibold text-gray-800 mb-2">Real-time</h4>
                    <p className="text-sm text-gray-600 font-roboto">Live updates and instant information</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in delay-500">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-2">10K+</div>
              <div className="text-gray-600 font-roboto">Local Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-montserrat font-bold text-accent mb-2">50K+</div>
              <div className="text-gray-600 font-roboto">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-2">1M+</div>
              <div className="text-gray-600 font-roboto">Recommendations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-montserrat font-bold text-accent mb-2">24/7</div>
              <div className="text-gray-600 font-roboto">AI Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
