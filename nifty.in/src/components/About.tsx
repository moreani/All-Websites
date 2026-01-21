import React from 'react';
import { Brain, Target, Users, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Brain, label: 'AI Models', value: '50+' },
    { icon: Target, label: 'Accuracy Rate', value: '95%' },
    { icon: Users, label: 'Active Traders', value: '10K+' },
    { icon: Award, label: 'Years Experience', value: '15+' },
  ];

  return (
    <section id="about" className="py-20 bg-lightgray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6">
            Nifty Trading AI: <span className="text-primary">Innovating the Trading Experience</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-up">
            <p className="font-opensans text-lg text-gray-700 mb-6 leading-relaxed">
              At Nifty Trading AI, we recognize the dynamic and fast-paced nature of the trading environment. Our mission is to empower traders and institutions with advanced AI-driven tools that simplify data analysis and enhance trading strategies.
            </p>
            <p className="font-opensans text-lg text-gray-700 mb-6 leading-relaxed">
              With the surge of data in financial markets, the ability to extract insights quickly and accurately is paramount. Our expert team combines years of experience in the financial sector with cutting-edge AI technology to deliver solutions that make a real difference.
            </p>
            <p className="font-opensans text-lg text-gray-700 mb-8 leading-relaxed">
              Whether you are a retail trader or a financial institution, our platform is designed to support you with predictive analytics, market forecasting, and risk management tools tailored specifically for the trading landscape.
            </p>
            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg">
              <p className="font-opensans text-lg text-primary font-semibold italic">
                "Join us as we redefine trading success through intelligent insights and technology."
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="AI Trading Technology"
              className="rounded-lg shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-accent text-white p-4 rounded-lg shadow-lg">
              <div className="font-montserrat font-bold text-2xl">AI Powered</div>
              <div className="font-opensans text-sm">Trading Solutions</div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="font-montserrat font-bold text-3xl text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="font-opensans text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;