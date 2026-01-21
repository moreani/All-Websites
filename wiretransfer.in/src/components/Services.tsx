
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Bot, Gauge, BarChart3 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "AI-Powered Secure File Transfer",
      description: "Our core service leverages AI to enhance the security of your file transfers. We utilize machine learning algorithms to detect and prevent data breaches, identify anomalies, and encrypt data both in transit and at rest.",
      color: "wire-green"
    },
    {
      icon: Bot,
      title: "Intelligent Automation",
      description: "Automate your file transfer workflows with our intelligent automation capabilities. Our platform can automatically transfer files based on predefined rules, schedules, and events, eliminating manual intervention.",
      color: "wire-blue"
    },
    {
      icon: Gauge,
      title: "Adaptive Bandwidth Optimization",
      description: "Maximize your file transfer speeds with our AI-powered bandwidth optimization technology. Our platform intelligently analyzes network conditions and dynamically adjusts bandwidth allocation.",
      color: "wire-green"
    },
    {
      icon: BarChart3,
      title: "Real-Time Monitoring and Reporting",
      description: "Gain complete visibility into your file transfer operations with our real-time monitoring and reporting tools. Our platform provides detailed logs, reports, and dashboards for optimal performance tracking.",
      color: "wire-blue"
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-open-sans">
            Our <span className="gradient-text">Services</span>
          </h2>
          
          <p className="text-xl text-slate-300 text-center mb-12 font-roboto-mono max-w-3xl mx-auto">
            WireTransfer.in offers a comprehensive suite of AI-powered file transfer solutions designed to meet the diverse needs of modern businesses.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="bg-slate-800 border-slate-700 hover:border-wire-green transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg bg-${service.color}/20`}>
                      <service.icon className={`w-8 h-8 text-${service.color}`} />
                    </div>
                    <CardTitle className="text-white font-open-sans text-xl">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 font-roboto-mono leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-slate-300 font-roboto-mono leading-relaxed max-w-3xl mx-auto">
              We are committed to providing our clients with reliable, secure, and efficient file transfer solutions that help them achieve their business goals. Our team of experts is available to provide support and guidance every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
