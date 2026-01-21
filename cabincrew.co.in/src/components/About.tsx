import React from 'react';
import { Target, Users, Zap, Shield } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Empowering cabin crew with cutting-edge AI technology'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Aviation experts, AI specialists, and education professionals'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Continuously refining our platform with latest AI advancements'
    },
    {
      icon: Shield,
      title: 'Industry Standards',
      description: 'Aligned with regulatory requirements and best practices'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-gray-900 mb-6">
            CabinCrew.AI: Shaping the Future of 
            <span className="text-primary block mt-2">Aviation Training</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="prose prose-lg max-w-none">
              <p className="font-roboto text-gray-700 leading-relaxed mb-6">
                At CabinCrew.AI, we're pioneering the next generation of cabin crew training through the power of artificial intelligence. Recognizing the unique demands of the Indian aviation landscape, we've developed a platform that delivers personalized, efficient, and engaging learning experiences.
              </p>
              
              <p className="font-roboto text-gray-700 leading-relaxed mb-6">
                Our mission is to empower cabin crew professionals with the skills and knowledge they need to excel in their roles, ensuring the highest standards of safety and customer service. We understand the rapid growth of the Indian aviation industry and the increasing need for highly trained professionals.
              </p>
              
              <p className="font-roboto text-gray-700 leading-relaxed mb-8">
                Leveraging cutting-edge AI algorithms, we analyze individual learning styles and performance data to tailor training modules that maximize knowledge retention and skill development. Our team comprises seasoned aviation experts, AI specialists, and educational professionals who are passionate about transforming the way cabin crew members are trained.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-primary bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-opacity-20 transition-all duration-300">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-montserrat font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="font-roboto text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
                alt="AI and Education Team"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent rounded-2xl w-full h-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;