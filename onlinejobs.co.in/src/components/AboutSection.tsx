
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-gray-800 mb-8">
            About <span className="text-primary">OnlineJobs</span>
          </h2>
          <div className="bg-gradient-to-r from-primary to-teal-600 h-1 w-24 mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&crop=center" 
                alt="AI technology and coding"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="text-left">
              <p className="text-lg font-roboto text-gray-700 mb-6 leading-relaxed">
                OnlineJobs harnesses <span className="font-semibold text-primary">artificial intelligence</span> to enhance your job search experience. Our innovative platform matches you with job opportunities based on your skills and preferences, ensuring that you find the roles that are the best fit.
              </p>
              <p className="text-lg font-roboto text-gray-700 mb-6 leading-relaxed">
                For employers, we offer advanced AI tools that assist in identifying and recruiting the best talent swiftly and efficiently.
              </p>
              <p className="text-lg font-roboto text-gray-700 leading-relaxed">
                <span className="font-semibold text-accent">Join us</span> in revolutionizing how jobs are found and talent is acquired.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
