import React from 'react';
import { Target, Users, Award, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Precision Engineering',
      description: 'Inspired by Japanese methodologies, we deliver solutions with unmatched accuracy and attention to detail.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our specialists combine local market knowledge with international best practices.',
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Every solution undergoes rigorous testing to ensure superior performance and reliability.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Focus',
      description: 'We stay at the forefront of AI technology to bring you cutting-edge solutions.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-5xl text-text mb-6">
            About Japanese AI Solutions
          </h2>
          <p className="font-roboto text-lg text-text/70 max-w-3xl mx-auto">
            Transforming Industries with Japanese Innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h3 className="font-poppins font-semibold text-2xl md:text-3xl text-text mb-6">
              Where Tradition Meets Technology
            </h3>
            <div className="space-y-4 font-roboto text-text/80 text-lg leading-relaxed">
              <p>
                Japanese AI Solutions stands at the intersection of tradition and technology. Drawing inspiration from Japan's illustrious legacy in innovation and precision engineering, we specialize in delivering AI-driven solutions that cater to specific industries, including automotive, manufacturing, and technology.
              </p>
              <p>
                Our mission is to empower Indian enterprises with the same advanced technologies that have propelled Japan to the forefront of global industry. Through a deep understanding of both local market needs and Japanese technological advancements, we craft customized AI solutions that enhance operational efficiencies and foster unprecedented growth.
              </p>
              <p>
                Our expert team, rooted in robust research and deep industry experience, collaborates with businesses to integrate AI uniquely suited to their challenges. From automation and predictive analytics to enhanced customer engagement strategies, we ensure that every solution is tailored to drive transformative results.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&crop=center"
              alt="AI Technology and Innovation"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 hover:shadow-lg transition-all duration-300"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-poppins font-semibold text-xl text-text mb-3">
                {feature.title}
              </h4>
              <p className="font-roboto text-text/70 leading-relaxed">
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