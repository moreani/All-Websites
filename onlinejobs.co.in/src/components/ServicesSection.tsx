
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, FileText, BarChart3, Bell } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: "AI Job Matching",
    description: "Our intelligent algorithms analyze user profiles to provide personalized job recommendations, aligning applicants with roles that suit their skill sets."
  },
  {
    icon: FileText,
    title: "Resume Optimization",
    description: "Leveraging AI, we offer tools that help candidates create ATS-friendly resumes, increasing their chances of landing interviews."
  },
  {
    icon: BarChart3,
    title: "Employer Analytics",
    description: "Our platform gives businesses insights into candidate behaviors and hiring trends, enabling data-driven decisions for recruitment strategies."
  },
  {
    icon: Bell,
    title: "Automated Job Alerts",
    description: "Get customized notifications about new job postings that match your criteria directly to your inbox."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-gray-800 mb-8">
            Our <span className="text-primary">Services</span>
          </h2>
          <div className="bg-gradient-to-r from-primary to-teal-600 h-1 w-24 mx-auto mb-8"></div>
          <p className="text-xl font-roboto text-gray-600 max-w-3xl mx-auto">
            Discover how our AI-powered solutions transform the job search and recruitment experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-teal-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="font-montserrat font-semibold text-gray-800 text-xl">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-roboto text-gray-600 text-center leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
