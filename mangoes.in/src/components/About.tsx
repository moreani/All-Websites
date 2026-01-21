import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6 fade-in">
              About Mangoes AI: Growing a Sustainable Future
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in stagger-1">
              <img 
                src="https://images.pexels.com/photos/1459501/pexels-photo-1459501.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Farmer using tablet in mango orchard analyzing data"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            
            <div className="fade-in stagger-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Mangoes AI is dedicated to transforming mango farming in India through the power of artificial intelligence. We understand the challenges faced by mango farmers – from unpredictable weather patterns to pest infestations and fluctuating market prices.
                </p>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our team of AI experts and agricultural specialists have developed innovative solutions to address these challenges and help farmers achieve greater yields, reduce waste, and improve their livelihoods. We believe that AI can be a powerful tool for sustainable agriculture, and we are committed to providing accessible and affordable solutions to farmers of all sizes.
                </p>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We partner with leading research institutions and agricultural organizations to ensure that our solutions are based on the latest scientific advancements and best practices. At Mangoes AI, we are not just building technology; we are building a better future for mango farmers and for India.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Our commitment extends beyond profits, as we actively engage in community initiatives promoting sustainable farming practices and economic empowerment within mango-growing regions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;