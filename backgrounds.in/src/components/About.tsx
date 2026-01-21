import React from 'react';
import { Brain, Zap, Target, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Brain,
      title: 'Advanced AI Technology',
      description: 'Cutting-edge algorithms and deep learning techniques power our background generation engine.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Generate high-quality backgrounds in seconds, not hours. Efficiency meets excellence.'
    },
    {
      icon: Target,
      title: 'Precision Perfect',
      description: 'Every pixel matters. Our AI ensures your backgrounds are crisp, detailed, and production-ready.'
    },
    {
      icon: Users,
      title: 'Creative Community',
      description: 'Join thousands of designers, marketers, and creators who trust Backgrounds AI for their projects.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-width">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-6">
            Revolutionizing <span className="gradient-text">Creative Vision</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Backgrounds AI, we specialize in turning your visionary ideas into breathtaking backgrounds. Our platform utilizes cutting-edge AI technology to offer a wide array of background options tailored precisely to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="animate-fade-in-up">
            <h3 className="text-3xl font-bold font-poppins text-gray-900 mb-6">
              Where Technology Meets Creativity
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We understand that the right background is crucial to making an impression. In a world where visual content reigns supreme, our platform provides cutting-edge AI solutions to transform your ideas into spectacular backgrounds.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Using advanced algorithms and deep learning techniques, we allow users to generate background options tailored to their specific requests. From vibrant gradients for tech startups to serene natural landscapes, our goal is to cater to every creative vision.
            </p>
            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
              <p className="text-gray-700 italic">
                "By leveraging sophisticated style transfer techniques, we enable users to refine existing images or create entire thematic packs, ensuring each background is as unique as the user's imagination."
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <Brain className="text-primary" size={24} />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">AI Powered</h4>
                  <p className="text-sm text-gray-600">Advanced neural networks</p>
                </div>
                <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                    <Target className="text-accent" size={24} />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Precise</h4>
                  <p className="text-sm text-gray-600">Pixel-perfect results</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-green-200 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="text-green-600" size={24} />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Fast</h4>
                  <p className="text-sm text-gray-600">Instant generation</p>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-purple-200 rounded-lg flex items-center justify-center mb-4">
                    <Users className="text-purple-600" size={24} />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Trusted</h4>
                  <p className="text-sm text-gray-600">By thousands of creators</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                <feature.icon className="text-white" size={28} />
              </div>
              <h4 className="text-xl font-semibold font-poppins text-gray-900 mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;