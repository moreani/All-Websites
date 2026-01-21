
import { TrendingUp, Brain, BookOpen, Heart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Intelligent Development Tracking",
      description: "Our advanced AI algorithms monitor your child's developmental milestones across cognitive, emotional, social, and physical domains. By analyzing daily interactions, learning patterns, and behavioral indicators, we provide detailed insights into your child's unique growth trajectory. Parents receive personalized recommendations for activities, educational resources, and intervention strategies that support optimal development. Our culturally-aware AI considers Indian family structures, educational systems, and social expectations while maintaining global child development standards.",
      color: "bg-nurturing-teal",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&q=80"
    },
    {
      icon: Brain,
      title: "Behavioral Analysis & Guidance",
      description: "Transform challenging behaviors into learning opportunities with our AI-powered behavioral analysis system. Our platform identifies patterns in your child's behavior, triggers, and responses, providing evidence-based strategies for positive discipline and emotional regulation. Whether dealing with tantrum management, sibling rivalry, or teenage rebellion, our AI offers personalized interventions that respect Indian values while promoting healthy psychological development. Real-time coaching helps parents respond effectively in the moment while building long-term behavioral improvements.",
      color: "bg-warm-coral",
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=600&h=400&fit=crop&q=80"
    },
    {
      icon: BookOpen,
      title: "Educational Path Optimization",
      description: "Navigate India's complex educational landscape with AI-driven academic planning and learning optimization. Our platform analyzes your child's learning style, interests, and abilities to recommend personalized educational strategies, career pathways, and skill development opportunities. From choosing the right school to planning extracurricular activities, our AI considers local educational options, competitive exam requirements, and future career prospects while ensuring balanced development and reduced academic stress.",
      color: "bg-nurturing-teal",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop&q=80"
    },
    {
      icon: Heart,
      title: "Cultural Values Integration",
      description: "Seamlessly blend traditional Indian values with modern parenting approaches through our culturally-intelligent AI system. Our platform helps parents teach respect, family bonds, and cultural heritage while fostering independence, critical thinking, and global awareness. We provide age-appropriate methods for discussing Indian festivals, family traditions, and moral values in ways that resonate with today's children, ensuring cultural continuity without compromising individual growth and expression.",
      color: "bg-warm-coral",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=400&fit=crop&q=80"
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-deep-text mb-6">
              Comprehensive AI-Powered 
              <span className="text-gradient block mt-2">Parenting Solutions</span>
            </h2>
            <div className="w-24 h-1 bg-nurturing-teal mx-auto mb-8"></div>
            <p className="text-xl text-soft-text max-w-3xl mx-auto leading-relaxed">
              Discover how our cutting-edge AI technology transforms every aspect of parenting with personalized, culturally-aware guidance.
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                {/* Content */}
                <div className={`space-y-6 animate-slide-up ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mb-6`}>
                    <service.icon size={32} className="text-white" />
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-playfair font-bold text-deep-text">
                    {service.title}
                  </h3>
                  
                  <p className="text-lg text-soft-text leading-relaxed">
                    {service.description}
                  </p>

                  <button className={`px-8 py-3 ${service.color} text-white rounded-full font-semibold hover:opacity-90 transition-all duration-300 hover-scale`}>
                    Learn More
                  </button>
                </div>

                {/* Image */}
                <div className={`animate-scale-in ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="rounded-2xl shadow-2xl hover-scale w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center animate-fade-in">
            <div className="bg-family-gray rounded-3xl p-12 md:p-16">
              <h3 className="text-3xl md:text-4xl font-playfair font-bold text-deep-text mb-6">
                Ready to Transform Your Parenting Journey?
              </h3>
              <p className="text-xl text-soft-text mb-8 max-w-2xl mx-auto">
                Join thousands of Indian families who are already experiencing the power of AI-driven parenting insights.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-4 bg-nurturing-teal text-white rounded-full font-semibold text-lg hover:bg-nurturing-teal/90 transition-all duration-300 hover-scale"
              >
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
