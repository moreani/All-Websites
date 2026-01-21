import React from 'react';
import { Activity, Brain, Shield, BarChart3, Settings, AlertTriangle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description: "We utilize IoT sensors to continuously monitor dispenser performance, compressor health, pressure levels, and pipeline integrity, enabling early detection of potential issues.",
      features: ["24/7 System Monitoring", "Performance Analytics", "Equipment Health Tracking"]
    },
    {
      icon: Brain,
      title: "Predictive Maintenance",
      description: "Our AI analyzes real-time sensor data to anticipate equipment failures, ensuring maintenance is performed proactively to minimize disruptions.",
      features: ["AI-Powered Predictions", "Maintenance Scheduling", "Cost Optimization"]
    },
    {
      icon: Shield,
      title: "Leak Detection & Safety Alerts",
      description: "Our solutions feature intelligent leak detection capabilities that trigger immediate alerts and initiate automated safety mechanisms, ensuring rapid response to potential hazards.",
      features: ["Instant Alert System", "Automated Safety Protocols", "Emergency Response"]
    },
    {
      icon: BarChart3,
      title: "Data Analytics and Reporting",
      description: "We provide comprehensive analytics reports that empower station management to make data-driven decisions and optimize overall operations.",
      features: ["Custom Dashboards", "Performance Reports", "Operational Insights"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full mb-6 shadow-sm">
              <Settings className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Services</span>
            </div>
            <h2 className="font-oswald font-bold text-3xl md:text-4xl text-gray-800 mb-6">
              Comprehensive <span className="gradient-text">Smart Solutions</span> for Modern Gas Stations
            </h2>
            <p className="font-roboto text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI-driven platform delivers end-to-end solutions that transform how gas stations operate, 
              ensuring maximum efficiency, safety, and profitability.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className={`service-card animate-fade-in-up delay-${(index + 1) * 100}`}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-oswald font-bold text-xl text-gray-800 mb-3">{service.title}</h3>
                    <p className="font-roboto text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-sm text-gray-700 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Process Flow */}
          <div className="bg-white rounded-2xl p-8 shadow-lg animate-fade-in-up delay-500">
            <h3 className="font-oswald font-bold text-2xl text-gray-800 text-center mb-8">
              How Our <span className="gradient-text">Smart System</span> Works
            </h3>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <Activity className="w-8 h-8 text-primary" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-white text-xs rounded-full flex items-center justify-center font-bold">1</div>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Data Collection</h4>
                <p className="text-sm text-gray-600">IoT sensors continuously gather real-time data from all station equipment</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <Brain className="w-8 h-8 text-accent" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent text-white text-xs rounded-full flex items-center justify-center font-bold">2</div>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">AI Analysis</h4>
                <p className="text-sm text-gray-600">Our AI algorithms analyze patterns and predict potential issues</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <AlertTriangle className="w-8 h-8 text-red-500" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">3</div>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Smart Alerts</h4>
                <p className="text-sm text-gray-600">Instant notifications for maintenance needs and safety concerns</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <BarChart3 className="w-8 h-8 text-green-500" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 text-white text-xs rounded-full flex items-center justify-center font-bold">4</div>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Optimization</h4>
                <p className="text-sm text-gray-600">Continuous improvement of operations based on data insights</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;