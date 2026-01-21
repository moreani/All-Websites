
export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Content */}
      <div className="relative z-10 container-width section-padding text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-poppins font-bold leading-tight">
            Unleash Your Creativity:
            <span className="block text-accent mt-4">
              Generative Wallpaper Design with AI
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl font-roboto leading-relaxed text-gray-200 max-w-3xl mx-auto">
            Transform text prompts into stunning, personalized wallpapers that reflect your unique style. 
            Inspired by Indian culture and customizable to your exact color palette.
          </p>
          
          <div className="pt-8">
            <button 
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-accent text-lg"
            >
              Explore AI Designs
            </button>
          </div>
        </div>
      </div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};
