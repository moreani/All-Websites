import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/80 to-primary-blue/60 z-10"></div>
        <img 
          src="https://pub-cdn.sider.ai/u/U0KAH964791/web-coder/684ff92c060d7d85c724afe0/resource/9e37637f-30ab-4e8b-a931-c15aabad5902.jpg" 
          className="w-full h-full object-cover" 
          alt="Indian child learning with tablet"
        />
      </div>
      
      {/* Neural network animated overlay */}
      <div className="absolute inset-0 bg-[url('https://pub-cdn.sider.ai/u/U0KAH964791/web-coder/684ff92c060d7d85c724afe0/resource/60e530fd-fc58-4ea6-a6c3-132522039ade.jpg')] bg-no-repeat bg-center opacity-20 z-20"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-30">
        <div className="max-w-2xl text-white">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Unlock Your Child's Genius.
          </h1>
          <p className="font-inter text-xl md:text-2xl mb-10 text-white/90">
            We are India's premier AI-driven learning platform, crafting personalized 
            educational journeys that ignite curiosity, build critical skills, and prepare 
            your child for the world of tomorrow.
          </p>
          <button 
            onClick={scrollToServices}
            className="bg-accent-orange text-white px-8 py-4 rounded-lg text-lg font-poppins font-medium 
            hover:bg-white hover:text-accent-orange transition-colors duration-300 flex items-center"
          >
            Discover Our Programs
            <ArrowDown className="ml-2" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
