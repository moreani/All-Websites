import React from 'react';
import { Brain, Shield, Users, BarChart } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'Personalized Learning Paths',
      description: 'Our AI algorithms analyze individual learning styles and performance data to create customized training paths for each cabin crew member. This ensures that trainees focus on areas where they need the most improvement, leading to faster skill development and higher knowledge retention. We offer adaptive learning modules that adjust in real-time based on trainee performance, providing a truly personalized learning experience. We incorporate gamification elements and interactive simulations to keep trainees engaged and motivated throughout the training process.',
      color: 'bg-blue-500'
    },
    {
      icon: Shield,
      title: 'AI-Driven Safety Training',
      description: 'Enhance safety protocols with our AI-powered simulations that recreate real-world emergency scenarios. Trainees can practice critical decision-making skills in a safe and controlled environment, receiving immediate feedback and guidance from our AI instructors. We use virtual reality (VR) and augmented reality (AR) technologies to create immersive training experiences that enhance realism and engagement. Our safety training modules cover a wide range of emergency situations, including fire suppression, evacuation procedures, and medical emergencies.',
      color: 'bg-red-500'
    },
    {
      icon: Users,
      title: 'Enhanced Customer Service Training',
      description: 'Elevate customer service standards with our AI-powered training modules that focus on communication skills, conflict resolution, and cultural sensitivity. Trainees learn how to handle challenging customer interactions with empathy and professionalism, ensuring a positive and memorable flight experience. Our platform uses natural language processing (NLP) to analyze trainee communication skills and provide personalized feedback on tone, clarity, and effectiveness.',
      color: 'bg-green-500'
    },
    {
      icon: BarChart,
      title: 'Performance Analytics and Reporting',
      description: 'Gain valuable insights into trainee performance with our comprehensive analytics and reporting dashboard. Track progress, identify areas for improvement, and measure the effectiveness of your training programs. Our AI algorithms analyze trainee performance data to generate actionable insights that can be used to optimize training content and delivery methods. We provide customizable reports that can be tailored to meet the specific needs of your organization.',
      color: 'bg-purple-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-gray-900 mb-6">
            AI-Powered Training Solutions for
            <span className="text-primary block mt-2">Cabin Crew Excellence</span>
          </h2>
          <p className="font-roboto text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive training modules designed specifically for the modern aviation industry
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="flex items-start space-x-4">
                <div className={`${service.color} rounded-xl p-3 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-montserrat font-semibold text-2xl text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="font-roboto text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
              alt="AI Aviation Learning"
              className="rounded-2xl shadow-2xl w-full max-w-4xl mx-auto"
            />
            <div className="absolute inset-0 bg-primary bg-opacity-20 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;