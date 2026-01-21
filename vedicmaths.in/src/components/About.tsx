import React from 'react';
import { Brain, Target, Lightbulb, Zap, Award, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Learning',
      description: 'Our advanced algorithms personalize learning paths to match individual progress and preferences.'
    },
    {
      icon: Target,
      title: 'Vedic Techniques',
      description: 'Ancient mathematical methods that enable faster calculations and deeper understanding.'
    },
    {
      icon: Lightbulb,
      title: 'Interactive Tools',
      description: 'Engaging AI tools that provide step-by-step solutions and real-time feedback.'
    },
    {
      icon: Zap,
      title: 'Accelerated Learning',
      description: 'Proven methods to enhance mental agility and problem-solving speed significantly.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-primary font-roboto font-medium text-sm mb-4">
            <BookOpen className="w-4 h-4 mr-2" />
            About Vedic Maths AI
          </div>
          <h2 className="font-poppins font-bold text-3xl md:text-5xl text-dark-gray mb-6">
            Where Ancient Wisdom Meets{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Modern AI
            </span>
          </h2>
          <p className="font-roboto text-lg text-text-gray max-w-3xl mx-auto leading-relaxed">
            Vedic Maths AI is committed to bringing together the richness of Vedic mathematics with the power of artificial intelligence. Our platform is designed for learners of all ages who wish to enhance their mathematical abilities and experience the joy of learning through interactive and engaging methodologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="font-poppins font-bold text-2xl text-dark-gray">
                Transforming Mathematical Education
              </h3>
              <p className="font-roboto text-text-gray leading-relaxed">
                With our AI algorithms, we personalize learning paths that adapt to individual progress and preference, ensuring that each student thrives. Our core belief is that education should be transformative and engaging.
              </p>
              <p className="font-roboto text-text-gray leading-relaxed">
                By merging ancient wisdom with modern technology, we prepare learners to excel in an increasingly competitive world while fostering a deep appreciation for mathematical beauty.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <Award className="w-3 h-3 text-white" />
                </div>
                <span className="font-roboto text-dark-gray">Enhanced Mental Agility</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <Award className="w-3 h-3 text-white" />
                </div>
                <span className="font-roboto text-dark-gray">Improved Problem-Solving Skills</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <Award className="w-3 h-3 text-white" />
                </div>
                <span className="font-roboto text-dark-gray">Accelerated Learning Speed</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=600&h=400&fit=crop&crop=center"
              alt="Mathematics and technology fusion"
              className="rounded-2xl shadow-xl w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-light-gray rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-poppins font-semibold text-lg text-dark-gray mb-3">
                {feature.title}
              </h4>
              <p className="font-roboto text-text-gray text-sm leading-relaxed">
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