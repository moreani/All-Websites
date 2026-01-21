import React from 'react';
import { Globe, Rocket, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-primary mb-6">
            The Future of Website Creation is Here
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="AI Coding in India"
              className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl"></div>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Rocket className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-gray-700 font-poppins leading-relaxed">
                  Webpages.in is revolutionizing how Indian businesses establish their online presence. Our AI automates everything from design to hosting. We understand time constraints, so we offer a fast way to launch a professional website without coding.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-full">
                <Globe className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-gray-700 font-poppins leading-relaxed">
                  Our AI learns from design trends and SEO practices for visually appealing and effective websites. We offer customizable options, including e-commerce and multilingual support.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-gray-700 font-poppins leading-relaxed">
                  We empower Indian businesses with easy-to-use tools and support. With Webpages.in, focus on business growth while we manage your online presence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;