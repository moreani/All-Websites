
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1466442929976-97f336a657be?w=600&h=400&fit=crop&auto=format" 
              alt="Indian Cultural Festivals and Costumes"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>

          {/* Text Content */}
          <div className="animate-fade-in">
            <h2 className="font-nunito font-bold text-4xl md:text-5xl text-gray-900 mb-6">
              The Future of{" "}
              <span className="text-primary">Costume Rental</span> is Here
            </h2>
            <div className="space-y-6 text-gray-600 font-lato text-lg leading-relaxed">
              <p>
                <span className="text-primary font-semibold">Costumes AI</span> is revolutionizing the costume rental industry with cutting-edge AI technology. We understand the challenges of managing a diverse and fluctuating inventory, especially in a vibrant market like India, with its numerous festivals, cultural events, and seasonal demands.
              </p>
              <p>
                Our AI-powered platform analyzes historical rental data, upcoming events, and location-specific trends to provide unparalleled insights into customer demand. We help you predict which costumes will be popular, where they will be needed most, and when to replenish your stock.
              </p>
              <p>
                We are dedicated to helping costume rental businesses of all sizes thrive in a competitive market. Our commitment is to provide accurate, reliable, and actionable insights that transform your inventory management from a guessing game into a <span className="text-accent font-semibold">data-driven strategy</span>.
              </p>
              <p className="text-primary font-semibold text-xl">
                Focus on creativity and customer service – let our technology handle the logistics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
