
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-roboto text-accent mb-8">
            About Us
          </h2>
          
          <div className="text-lg font-lora text-gray-700 leading-relaxed space-y-6">
            <p>
              Fashion Designing AI is at the forefront of revolutionizing the fashion industry through artificial intelligence. Our mission is to empower designers, brands, and retailers with intelligent tools that enhance creativity, streamline production, and predict trends effectively.
            </p>
            
            <p>
              By merging cutting-edge technology with the art of fashion, we provide innovative solutions tailored to meet the unique challenges of the industry. Our platform transforms how fashion professionals work, making design processes more efficient, sustainable, and data-driven.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Designs Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99%</div>
              <div className="text-gray-600">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600">Fashion Brands</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-600">AI Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
