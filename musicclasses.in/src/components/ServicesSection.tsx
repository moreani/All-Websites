
const ServicesSection = () => {
  const services = [
    {
      title: "AI-Enhanced Learning",
      description: "Customized lessons that adapt based on your progress and capability.",
      icon: "🤖",
      color: "primary"
    },
    {
      title: "Performance Analytics",
      description: "Track your improvements with built-in metrics that highlight strengths and areas for growth.",
      icon: "📊",
      color: "accent"
    },
    {
      title: "Interactive Tools",
      description: "Participate in engaging exercises that not only make learning fun but also deepen your understanding of music.",
      icon: "🎵",
      color: "primary"
    },
    {
      title: "Community Engagement",
      description: "Connect with fellow musicians, share experiences, and collaborate through our platform.",
      icon: "🤝",
      color: "accent"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-roboto text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl font-lora text-gray-600 max-w-3xl mx-auto">
            Discover how our AI-powered platform transforms traditional music education into an engaging, personalized experience
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 bg-gray-50 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`text-6xl mb-6 text-center`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold font-roboto text-gray-900 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 font-roboto text-center leading-relaxed">
                {service.description}
              </p>
              <div className={`w-full h-1 ${service.color === 'primary' ? 'bg-primary' : 'bg-accent'} mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold font-roboto mb-4">
            Ready to Transform Your Musical Journey?
          </h3>
          <p className="text-xl font-lora mb-6 opacity-90">
            Join thousands of students who are already experiencing the future of music education
          </p>
          <button className="bg-accent hover:bg-accent/90 text-black font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
