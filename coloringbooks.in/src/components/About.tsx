
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-8 animate-fade-in">
            About Coloring Books
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <img 
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Children enjoying coloring activities"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
            
            <div className="text-left animate-fade-in">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At Coloring Books, we understand that every child is a unique artist. Our AI tools 
                empower young minds to express themselves freely while advancing their skills.
              </p>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Integrating technology into art fosters not only creativity but also key cognitive 
                abilities such as problem-solving and fine motor skills.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Our platform is designed to inspire and nurture the next generation of innovators, 
                making art accessible, enjoyable, and educational for children everywhere.
              </p>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-primary/10 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary font-poppins">AI-Powered</div>
                  <div className="text-sm text-gray-600">Smart Tools</div>
                </div>
                <div className="bg-accent/10 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-accent font-poppins">Educational</div>
                  <div className="text-sm text-gray-600">Learning Focus</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
