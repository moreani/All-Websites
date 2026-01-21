
export const ServicesSection = () => {
  const services = [
    {
      title: "Text-to-Wallpaper Generation",
      description: "Simply \"Describe Your Style\" with text prompts, and our AI generates unique wallpapers instantly.",
      icon: "📝"
    },
    {
      title: "Indian Cultural Inspiration",
      description: "AI models trained on Indian art forms and architectural motifs, ensuring culturally relevant and unique designs.",
      icon: "🏛️"
    },
    {
      title: "Color Palette Customizer",
      description: "Select a color from your photo or use a specific HEX code, and our AI generates wallpapers matching that exact palette.",
      icon: "🎨"
    },
    {
      title: "Resolution Options",
      description: "Generate wallpapers in various resolutions, optimized for desktops, smartphones, and tablets.",
      icon: "📱"
    },
    {
      title: "AI Wallpaper Creator Software",
      description: "Robust software for generative image creation with advanced customization options.",
      icon: "💻"
    },
    {
      title: "Integration Capabilities",
      description: "Seamlessly integrate our software with current enterprise solutions for enhanced workflow efficiency.",
      icon: "🔗"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container-width section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-8">
            Our <span className="text-primary">Services</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the full range of AI-powered wallpaper creation tools and services designed to transform your digital spaces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-poppins font-semibold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary text-lg"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};
