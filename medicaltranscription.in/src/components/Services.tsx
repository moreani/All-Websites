
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: "Real-Time Transcription & Scribing",
      description: "Our AI-driven platform allows physicians to dictate notes effortlessly. With immediate transcription visibility, healthcare providers can review and correct their notes in real time—transforming consultation documentation from a time-consuming task to a seamless experience.",
      icon: "🎤"
    },
    {
      title: "Automated Data Entry into EHR/EMR Systems",
      description: "Integration is key in today's medical environment. Our service automatically populates Electronic Health Records (EHR) or Electronic Medical Records (EMR) systems with structured, AI-generated data, dramatically reducing manual entry errors and freeing up valuable time for healthcare staff.",
      icon: "💾"
    },
    {
      title: "Prioritization & Load Balancing",
      description: "Our AI tools intelligently analyze and prioritize incoming transcription requests, ensuring urgent cases are handled promptly. By optimally managing workloads among transcribers, we maintain high service standards and responsiveness, crucial in healthcare settings.",
      icon: "⚡"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-lato text-gray-900 mb-6">
            Our <span className="text-primary">AI-Powered</span> Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive transcription services designed specifically for healthcare professionals
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-l-primary">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold font-lato text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
