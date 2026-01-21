
const FeaturesSection = () => {
  const features = [
    {
      title: "Intelligent Matching",
      description: "Our AI algorithms analyze your profile, skills, and interests to suggest relevant connections with a high probability of mutual benefit. Find mentors, collaborators, and job opportunities that align with your goals.",
      icon: "🧠",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Skill Gap Analysis",
      description: "ConnectAI identifies areas where you can improve your skills and suggests relevant learning resources, mentors, and online courses. Stay ahead of the curve and continuously develop your expertise.",
      icon: "📊",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Automated Icebreakers",
      description: "Break the ice and start meaningful conversations with our AI-generated icebreaker messages, tailored to shared interests and recent achievements.",
      icon: "💬",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Sentiment Analysis",
      description: "ConnectAI analyzes communication within the app to identify potential conflicts or misunderstandings, and offers suggestions for resolution. Build stronger and more productive relationships.",
      icon: "🎯",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Event Recommendations",
      description: "ConnectAI recommends relevant networking events, conferences, and workshops based on your profile and interests, prioritizing events in India.",
      icon: "🎪",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="features" className="py-20 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-primary-brand">ConnectAI:</span> Key Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our AI-powered features revolutionize professional networking and career development
          </p>
        </div>

        <div className="space-y-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{feature.icon}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Mock App Screenshot/Feature Demo */}
                <div className="mt-8 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-500">ConnectAI App</span>
                  </div>
                  
                  {/* Feature-specific mockup content */}
                  {index === 0 && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-primary-brand/10 rounded-lg">
                        <span className="font-medium">AI Match Score: 95%</span>
                        <span className="text-primary-brand font-bold">Perfect Match!</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        Based on: Skills alignment, Career goals, Industry experience
                      </div>
                    </div>
                  )}
                  
                  {index === 1 && (
                    <div className="space-y-3">
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-accent-brand rounded-full" style={{ width: '75%' }}></div>
                      </div>
                      <div className="text-sm text-gray-600">
                        Skill Development Progress: React.js, Machine Learning, Leadership
                      </div>
                    </div>
                  )}
                  
                  {index === 2 && (
                    <div className="space-y-3">
                      <div className="p-3 bg-gray-50 rounded-lg border-l-4 border-primary-brand">
                        <span className="text-sm text-gray-700">
                          "Hi Raj! I noticed we both attended IIT Delhi and work in fintech. 
                          Would love to discuss the latest trends in blockchain technology!"
                        </span>
                      </div>
                    </div>
                  )}
                  
                  {index === 3 && (
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">Positive sentiment detected</span>
                      </div>
                      <div className="text-xs text-gray-500">
                        Conversation health: Excellent • Engagement level: High
                      </div>
                    </div>
                  )}
                  
                  {index === 4 && (
                    <div className="space-y-3">
                      <div className="p-3 bg-accent-brand/10 rounded-lg">
                        <div className="font-medium text-sm">Recommended Event</div>
                        <div className="text-sm text-gray-600">
                          Tech Leaders Summit • Mumbai • Next Week
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="rounded-xl shadow-2xl w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-primary-brand/10 rounded-xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
