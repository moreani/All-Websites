
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-cinema-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-montserrat font-bold text-gray-900 mb-8">
            About <span className="text-cinema-blue">Hindi Movies AI</span>
          </h2>
          
          <div className="text-lg text-gray-700 space-y-6 font-roboto leading-relaxed">
            <p>
              Hindi Movies AI is revolutionizing the way film enthusiasts interact with cinema. 
              Our platform leverages cutting-edge artificial intelligence to tailor movie 
              recommendations based on personal tastes and preferences.
            </p>
            
            <p>
              Founded by cinema lovers, we understand the diversity and richness of Hindi movies, 
              from Bollywood blockbusters to independent films. Our mission is to guide viewers 
              effortlessly through their choices, enhancing their film-watching experience with 
              curated content that speaks to their individual interests.
            </p>
            
            <p className="text-cinema-blue font-semibold">
              Experience the future of movie discovery with personalized AI recommendations 
              that understand your unique taste in Hindi cinema.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-cinema-gray p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl font-bold text-cinema-blue mb-2">10K+</div>
              <div className="text-gray-700 font-roboto">Movies in Database</div>
            </div>
            
            <div className="bg-cinema-gray p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl font-bold text-cinema-red mb-2">50K+</div>
              <div className="text-gray-700 font-roboto">Happy Users</div>
            </div>
            
            <div className="bg-cinema-gray p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl font-bold text-cinema-blue mb-2">95%</div>
              <div className="text-gray-700 font-roboto">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
