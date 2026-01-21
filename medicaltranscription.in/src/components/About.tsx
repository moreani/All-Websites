
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-lato text-gray-900 mb-6">
            Empowering Healthcare through{' '}
            <span className="text-accent">AI Automation</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1000&q=80"
              alt="AI Healthcare Technology"
              className="rounded-lg shadow-2xl"
            />
          </div>
          
          <div className="animate-slide-in-right">
            <div className="prose prose-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In today's fast-paced medical landscape, accurate documentation is paramount. At <strong>Medical Transcription AI</strong>, we harness the power of artificial intelligence to deliver real-time transcription solutions tailored for healthcare professionals.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our goal is to alleviate the burden of manual data entry and streamline the transcription process, ensuring that practitioners can focus more on patient care and less on paperwork.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                By incorporating cutting-edge technology, we transform spoken words into structured digital records instantly, enhancing both <span className="text-primary font-semibold">efficiency</span> and <span className="text-accent font-semibold">accuracy</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
