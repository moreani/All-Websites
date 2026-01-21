
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-lato font-bold text-4xl md:text-5xl text-center mb-12 text-gray-800">
            About EnglishSpeaking.ai
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="font-roboto text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
              At EnglishSpeaking.ai, we believe that language is the bridge to global opportunities. 
              Leveraging cutting-edge artificial intelligence, our platform tailors English language 
              learning to meet the needs of busy professionals. Imagine achieving fluency through an 
              experience designed for your unique learning style and pace.
            </p>
            <p className="font-roboto text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
              Our AI algorithms analyze your progress, adapt content, and provide real-time feedback, 
              ensuring a personalized learning journey that fits seamlessly into your life. Whether 
              preparing for an important presentation, negotiating international contracts, or connecting 
              with global partners, mastering English is essential in today's interconnected world.
            </p>
            <p className="font-roboto text-lg md:text-xl leading-relaxed text-gray-700">
              Join us, and empower your career growth through effective communication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
