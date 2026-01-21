
export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-width section-padding">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-8">
            About <span className="text-primary">Wallpaper AI</span>
          </h2>
          
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
          
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-roboto">
            Wallpaper AI is revolutionizing digital aesthetics by combining cutting-edge artificial intelligence 
            with user-centric design principles. Our platform enables users to effortlessly create bespoke 
            wallpapers using simple text prompts.
          </p>
          
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-roboto">
            Inspired by India's rich artistic heritage, our AI models generate culturally relevant designs 
            that reflect local tastes. From traditional block prints to geometric art deco patterns, 
            Wallpaper AI empowers you to express your individuality and enhance your digital spaces 
            with unparalleled creativity.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-poppins font-semibold text-gray-800 mb-2">
                AI-Powered Creativity
              </h3>
              <p className="text-gray-600">
                Advanced algorithms transform your ideas into stunning visual masterpieces
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🇮🇳</span>
              </div>
              <h3 className="text-xl font-poppins font-semibold text-gray-800 mb-2">
                Cultural Heritage
              </h3>
              <p className="text-gray-600">
                Designs inspired by India's rich artistic traditions and contemporary aesthetics
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-poppins font-semibold text-gray-800 mb-2">
                Instant Generation
              </h3>
              <p className="text-gray-600">
                Create personalized wallpapers in seconds with simple text descriptions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
