
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-rates-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-roboto text-rates-text mb-6">
            About RatesAI
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
                alt="Data Analytics and AI"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            <div>
              <p className="text-lg font-lato text-rates-text/80 mb-6 leading-relaxed">
                At RatesAI, our mission is to eliminate confusion around service pricing. We utilize cutting-edge AI analytics to gather data from various providers, delivering insights that help consumers make better choices.
              </p>
              <p className="text-lg font-lato text-rates-text/80 mb-6 leading-relaxed">
                Our emphasis on transparency ensures that you are never left in the dark when considering service options. Whether you're looking for plumbing, digital marketing, or tech repairs, our platform simplifies the rate-tracking process.
              </p>
              <p className="text-lg font-lato text-rates-text/80 leading-relaxed">
                We want to create an intelligent digital space where users can find the best value without the clutter of complicated interfaces, empowering users to make informed decisions backed by data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
