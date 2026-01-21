
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-text mb-6">
              Welcome to <span className="text-primary">Poems.ai</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          </div>
          
          <div className="prose prose-lg max-w-none animate-fade-in">
            <p className="font-roboto text-lg text-text leading-relaxed mb-6">
              At Poems.ai, we believe that poetry should be accessible to everyone. Our platform leverages advanced AI technology to not only make poetic works more understandable but also to provide a rich interactive experience.
            </p>
            
            <p className="font-roboto text-lg text-text leading-relaxed mb-6">
              Whether you're a student exploring literary themes, an educator seeking resources, or a poetry lover wanting to delve deeper into your favorite verses, Poems.ai offers tailored tools that transform how you engage with poetry.
            </p>
            
            <p className="font-roboto text-lg text-text leading-relaxed">
              With a focus on contextual analysis, emotional resonance, and personalized recommendations, we aim to cultivate a vibrant community of poetry enthusiasts, fostering appreciation for the art form.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="font-playfair text-xl font-bold text-text mb-2">For Students</h3>
              <p className="font-roboto text-accent">Explore literary themes with AI-powered insights</p>
            </div>
            
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍🏫</span>
              </div>
              <h3 className="font-playfair text-xl font-bold text-text mb-2">For Educators</h3>
              <p className="font-roboto text-accent">Access comprehensive teaching resources</p>
            </div>
            
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="font-playfair text-xl font-bold text-text mb-2">For Enthusiasts</h3>
              <p className="font-roboto text-accent">Discover new depths in your favorite verses</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
