
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
              alt="NGO Team Collaboration"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
          
          <div className="order-1 lg:order-2 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-roboto text-gray-900 mb-8">
              Transforming Nonprofits with{' '}
              <span className="gradient-text">AI</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                As nonprofits face growing challenges from resource constraints and rising demands, 
                <strong className="text-primary"> NGOVision.ai</strong> is here to empower you with 
                innovative AI solutions tailored to your operational needs.
              </p>
              
              <p>
                Our expertise enables NGOs to navigate their unique environments more effectively. 
                We provide custom data analytics, intelligent reporting tools, and outreach 
                optimizations that foster growth and engagement.
              </p>
              
              <p>
                Discover how you can leverage AI to improve efficiency, engage stakeholders, 
                and achieve your <strong className="text-accent">Mission</strong>.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-roboto">95%</div>
                <div className="text-sm text-gray-600">Efficiency Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent font-roboto">3x</div>
                <div className="text-sm text-gray-600">Outreach Impact</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-roboto">24/7</div>
                <div className="text-sm text-gray-600">AI Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
