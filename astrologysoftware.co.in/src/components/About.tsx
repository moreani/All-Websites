import React from 'react';
import { Target, Users, Globe, Award } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Precision & Accuracy',
      description: 'Our AI-driven algorithms ensure the highest accuracy in astrological predictions and analysis.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced software developers and certified astrologers working in perfect harmony.'
    },
    {
      icon: Globe,
      title: 'Cultural Respect',
      description: 'Deep understanding and respect for Indian astrological traditions and cultural significance.'
    },
    {
      icon: Award,
      title: 'Proven Excellence',
      description: 'Award-winning software solutions trusted by thousands of users across India.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-text mb-6">
            About <span className="gradient-text">AstroTech Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transforming Cosmic Insights into Intelligent Software
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              AstroTech Solutions is dedicated to merging the ancient art of astrology with modern technology. Our team of experienced software developers and astrologers work hand-in-hand to create unique applications that empower users to navigate their lives with confidence and insight.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Based in India, our focus is on delivering solutions that respect the cultural significance of astrology while providing robust, user-centric software that responds to the needs of contemporary life. Join us in exploring the profound connections between the stars and your unique journey.
            </p>
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-2xl">
              <h3 className="font-heading font-semibold text-xl mb-3">Our Mission</h3>
              <p className="text-gray-700">
                To provide state-of-the-art tools designed to facilitate astrological research, interpretation, and usage in everyday decision-making processes, while honoring traditional wisdom through technological innovation.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="card-hover bg-gray-50 p-6 rounded-2xl text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-3xl font-heading font-bold mb-4">
            Trusted by Professionals Across India
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Our software solutions are used by astrologers, researchers, and businesses throughout India's growing tech ecosystem.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold">5+</div>
              <div className="text-sm opacity-80">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm opacity-80">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm opacity-80">Software Solutions</div>
            </div>
            <div>
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm opacity-80">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;