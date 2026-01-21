
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Creative animation workspace"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>
          
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-6">
              About <span className="text-primary">Animation AI</span>
            </h2>
            <div className="space-y-6 text-gray-700 font-roboto text-lg leading-relaxed">
              <p>
                Animation AI leverages state-of-the-art AI technology to empower aspiring animators in their creative journeys. Our platform is a dedicated space where students can upload their animation reels or projects and receive constructive feedback based on industry standards.
              </p>
              <p>
                Recognizing that each animator's journey is unique, we provide tailored learning experiences aimed at enhancing creativity and technical skills. Our AI-powered insights help you understand industry trends, improve your portfolio, and accelerate your career growth in the animation industry.
              </p>
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-xl border-l-4 border-primary">
                <p className="font-semibold text-accent">
                  "Empowering the next generation of animators through personalized learning experiences powered by AI."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
