import React from 'react';
import { BookOpen, Bot, BarChart3, Users, ArrowRight, CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  const courses = [
    {
      icon: BookOpen,
      title: 'Introduction to Vedic Maths',
      description: 'Learn core principles and tricks to solve problems quickly',
      features: ['Basic Vedic Sutras', 'Mental Calculation Techniques', 'Problem-Solving Shortcuts', 'Interactive Exercises'],
      level: 'Beginner',
      duration: '4 weeks'
    },
    {
      icon: Bot,
      title: 'Advanced Techniques',
      description: 'Explore deeper mathematical concepts with AI assistance',
      features: ['Complex Problem Solving', 'AI-Guided Learning', 'Advanced Calculations', 'Real-World Applications'],
      level: 'Advanced',
      duration: '8 weeks'
    },
    {
      icon: Users,
      title: 'Workshops for Educators',
      description: 'Equip teachers with tools to integrate Vedic Maths in curriculum',
      features: ['Teaching Methodologies', 'Curriculum Integration', 'Assessment Tools', 'Student Engagement'],
      level: 'Professional',
      duration: '2 weeks'
    }
  ];

  const tools = [
    {
      icon: Bot,
      title: 'Math Problem Solver',
      description: 'AI-enabled tool providing step-by-step solutions and explanations',
      features: ['Instant Solutions', 'Step-by-Step Explanations', 'Multiple Approaches', 'Error Detection']
    },
    {
      icon: BarChart3,
      title: 'Progress Tracker',
      description: 'Monitor learning paths and improvements through AI analytics',
      features: ['Performance Analytics', 'Learning Insights', 'Progress Reports', 'Goal Setting']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-light-gray to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-accent font-roboto font-medium text-sm mb-4">
            <BookOpen className="w-4 h-4 mr-2" />
            Our Services
          </div>
          <h2 className="font-poppins font-bold text-3xl md:text-5xl text-dark-gray mb-6">
            Comprehensive Learning{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="font-roboto text-lg text-text-gray max-w-3xl mx-auto leading-relaxed">
            From beginner courses to advanced AI tools, we provide everything you need to master Vedic mathematics and enhance your problem-solving abilities.
          </p>
        </div>

        {/* Courses Section */}
        <div className="mb-20">
          <h3 className="font-poppins font-bold text-2xl text-dark-gray text-center mb-12">
            Courses Offered
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                    <course.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-roboto font-medium text-accent bg-orange-100 px-2 py-1 rounded-full">
                      {course.level}
                    </div>
                    <div className="text-xs font-roboto text-text-gray mt-1">
                      {course.duration}
                    </div>
                  </div>
                </div>
                
                <h4 className="font-poppins font-bold text-xl text-dark-gray mb-3">
                  {course.title}
                </h4>
                <p className="font-roboto text-text-gray mb-6 leading-relaxed">
                  {course.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  {course.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="font-roboto text-sm text-text-gray">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-gradient-to-r from-primary to-accent text-white py-3 rounded-full font-roboto font-medium flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                  <span>Enroll Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* AI Tools Section */}
        <div className="mb-16">
          <h3 className="font-poppins font-bold text-2xl text-dark-gray text-center mb-12">
            Interactive AI Tools
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                  <tool.icon className="w-6 h-6 text-white" />
                </div>
                
                <h4 className="font-poppins font-bold text-xl text-dark-gray mb-3">
                  {tool.title}
                </h4>
                <p className="font-roboto text-text-gray mb-6 leading-relaxed">
                  {tool.description}
                </p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {tool.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                      <span className="font-roboto text-xs text-text-gray">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="bg-primary text-white px-6 py-3 rounded-full font-roboto font-medium hover:bg-primary/90 transition-colors duration-200">
                  Try Free
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Personalized Learning Plans */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="font-poppins font-bold text-2xl md:text-3xl mb-4">
            Personalized Learning Plans
          </h3>
          <p className="font-roboto text-lg mb-8 opacity-90">
            Tailored study programs that adapt to each learner's style and pace, powered by advanced AI algorithms.
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-full font-roboto font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105">
            Get Your Plan
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;