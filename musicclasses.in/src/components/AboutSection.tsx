
const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-roboto text-gray-900 mb-8">
            Transforming Music Learning with AI
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg font-lora text-gray-700 leading-relaxed">
              MusicClasses redefines how we approach music education. Our integrated AI tools are designed to offer personalized learning experiences that engage students and elevate their skills.
            </p>
            
            <p className="text-lg font-roboto text-gray-600 leading-relaxed">
              Whether you are looking for vocal training, instrumental lessons, or music theory, our platform adapts to your unique learning style and pace, making music accessible for everyone.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
              <p className="font-lora text-lg italic text-gray-700">
                "We bridge traditional music education and cutting-edge AI technology, creating an unparalleled learning environment that empowers every student to transform their passion into proficiency."
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <div className="text-gray-600 font-roboto">Students Enrolled</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <div className="text-gray-600 font-roboto">AI-Powered Lessons</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80" 
              alt="Music education with technology" 
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
