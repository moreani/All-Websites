
import React from 'react';
import { Award, Users, Globe, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, number: "500+", label: "Projects Completed" },
    { icon: Users, number: "100+", label: "Enterprise Clients" },
    { icon: Globe, number: "50+", label: "Industries Covered" },
    { icon: TrendingUp, number: "99.9%", label: "Accuracy Rate" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-red-600">
              About Industry.co.in
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We are pioneers in AI-driven market intelligence, transforming how businesses 
              understand and navigate their competitive landscapes. Our advanced analytics 
              platform processes millions of data points to deliver actionable insights.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With expertise spanning multiple industries, we help organizations make 
              data-driven decisions, identify growth opportunities, and stay ahead of 
              market trends through cutting-edge artificial intelligence.
            </p>
            <button className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors">
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-red-50 rounded-2xl">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
