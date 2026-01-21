
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              <span className="text-primary-brand">Smarter Networking,</span> Stronger Connections with ConnectAI
            </h2>
            
            <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
              <p>
                ConnectAI was born from the belief that professional success is built on strong relationships. 
                We saw a need for a more intelligent and efficient way for professionals in India to connect, 
                collaborate, and grow.
              </p>
              
              <p>
                Our team of AI experts, career coaches, and networking professionals has created a unique app 
                that leverages the power of AI to facilitate meaningful connections and mentorship opportunities. 
                ConnectAI is designed to be more than just a digital Rolodex; it's your AI-powered partner in 
                career development.
              </p>
              
              <p>
                We are committed to providing a safe, secure, and ethical platform for professionals in India 
                to connect and achieve their full potential. Our mission is to empower the next generation of 
                Indian leaders through intelligent networking and mentorship.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-brand rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-medium text-gray-900">Intelligent Connections</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-accent-brand rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-medium text-gray-900">Collaborative Growth</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-brand rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-medium text-gray-900">Accessible Mentorship</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-accent-brand rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-medium text-gray-900">Ethical AI</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image Collage */}
          <div className="animate-fade-in">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Professionals networking with AI technology"
                  className="rounded-xl shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Professional woman using ConnectAI app"
                  className="rounded-xl shadow-lg w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Collaborative networking environment"
                  className="rounded-xl shadow-lg w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Professional using ConnectAI on MacBook"
                  className="rounded-xl shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
