import React from 'react';
import { Wand2, Palette, Package, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Wand2,
      title: 'Generative Background Resource',
      description: 'Transform your text prompts into high-quality visuals—select colors, styles, and themes to manifest your vision with ease.',
      features: [
        'Text-to-background AI generation',
        'Customizable color palettes',
        'Multiple style options',
        'High-resolution outputs',
        'Batch generation support'
      ],
      gradient: 'from-primary to-blue-600'
    },
    {
      icon: Palette,
      title: 'Style Transfer Technology',
      description: 'Upload an image, and let our AI create a customized background that aligns with your aesthetic preferences, ensuring every detail strikes the right chord.',
      features: [
        'Image-based style transfer',
        'Mood board integration',
        'Aesthetic matching',
        'Color harmony analysis',
        'Brand consistency tools'
      ],
      gradient: 'from-accent to-orange-500'
    },
    {
      icon: Package,
      title: 'Thematic Background Packs',
      description: 'Choose from curated collections designed for specific themes—whether for professional presentations, vibrant gaming scenes, or elegant wedding backdrops, we have you covered!',
      features: [
        'Pre-designed theme collections',
        'Business presentation packs',
        'Gaming environment sets',
        'Event-specific backgrounds',
        'Seasonal collections'
      ],
      gradient: 'from-purple-600 to-pink-600'
    }
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-6">
            Our <span className="gradient-text">Innovative Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of AI-powered background generation services, designed to meet every creative need and transform your visual content.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl card-shadow hover:shadow-2xl transition-all duration-500 overflow-hidden group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${service.gradient} p-8 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold font-poppins mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="group w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="bg-white rounded-2xl card-shadow p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold font-poppins text-gray-900 mb-4">
              Ready to Transform Your Creative Vision?
            </h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join thousands of creators who trust Backgrounds AI to bring their ideas to life. Experience the future of background generation today.
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center mx-auto"
            >
              Start Your Journey
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;