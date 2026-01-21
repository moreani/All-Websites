import React from 'react';
import { Target, Users, Award, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: "Precision & Accuracy",
      description: "Our AI algorithms ensure every detail in your annual report is accurate and meaningful."
    },
    {
      icon: Users,
      title: "Built for India",
      description: "Specifically designed for Indian enterprises, understanding local business dynamics."
    },
    {
      icon: Award,
      title: "Professional Quality",
      description: "Generate reports that meet the highest standards of professional presentation."
    },
    {
      icon: Lightbulb,
      title: "Smart Insights",
      description: "Uncover hidden patterns and trends in your data with intelligent analysis."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-neutral-800 mb-4">
            About Annual Report Creator
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Modern office with financial charts and analytics"
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
          </div>
          <div>
            <p className="text-lg text-neutral-600 font-roboto leading-relaxed mb-6">
              At Annual Report Creator, we provide sophisticated AI-driven tools designed specifically 
              for businesses in India. Our platform eliminates the hassle of compiling and designing 
              annual reports, leveraging cutting-edge machine learning algorithms to bring out the 
              best in your data.
            </p>
            <p className="text-lg text-neutral-600 font-roboto leading-relaxed">
              We understand the unique challenges faced by enterprises in a dynamic economy and are 
              dedicated to streamlining the reporting process, so you can concentrate on what truly 
              matters – growing your business.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-neutral-50 hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-poppins font-semibold text-neutral-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-neutral-600 font-roboto">
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