
const AboutSection = () => {
  return (
    <section className="py-20 bg-lightBackground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-secondary text-darkText mb-8">
            Revolutionizing Education Through <span className="text-primary">AI</span>
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 animate-fade-in">
            <p className="text-lg md:text-xl text-darkText leading-relaxed mb-6">
              E-Learning is redefining the educational experience through the power of artificial intelligence. 
              Our platform connects learners with a broad library of courses, enabling intelligent searches 
              that match users with the education they need most.
            </p>
            
            <p className="text-lg md:text-xl text-darkText leading-relaxed mb-6">
              We harness machine learning capabilities to analyze preferences and learning patterns, 
              suggesting optimal learning paths and resources that resonate with individual aspirations. 
              Our commitment is to empower users with the knowledge necessary to excel in various fields 
              through a streamlined, engaging learning process.
            </p>
            
            <div className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              <p className="text-2xl font-bold font-secondary">
                The future of education is here, made accessible and intuitive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
