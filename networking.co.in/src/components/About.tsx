import React from 'react';
import { Target, Users, Lightbulb, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Strategic Focus",
      description: "We align AI strategies with your organizational goals for maximum impact."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Seasoned AI strategists with deep industry knowledge and proven track records."
    },
    {
      icon: Lightbulb,
      title: "Innovation-Led",
      description: "Stay ahead with cutting-edge AI technologies and forward-thinking solutions."
    },
    {
      icon: Award,
      title: "Mumbai-Based",
      description: "Local expertise serving diverse Indian enterprises across all industries."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 font-montserrat mb-6">
            About <span className="text-primary">Networking AI Consult</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
              alt="AI Consulting Team"
              className="rounded-2xl shadow-xl"
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              At Networking AI Consult, we recognize that effective networking is the bedrock of successful business practices. That's why we specialize in guiding enterprises through the complexities of AI integration.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our team of seasoned AI strategists works closely with companies to identify key areas where AI can streamline processes and enhance decision-making. We combine strategic insight with the latest AI technologies, ensuring our clients are not only prepared for the future but are leading the charge in innovation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Located in Mumbai, we focus on serving Indian enterprises, catering to diverse industries seeking to carve out a competitive edge in today's rapidly evolving digital landscape.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-light rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-montserrat">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;