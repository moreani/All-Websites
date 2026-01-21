
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-roboto font-bold text-4xl md:text-5xl mb-8 text-gray-800">
            Who We Are
          </h2>
          
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <p className="font-opensans text-lg text-gray-700 leading-relaxed mb-6">
                Rajasthani AI Solutions is at the forefront of innovation, dedicated to empowering businesses across Rajasthan through advanced artificial intelligence technologies. Our expertise lies in developing customized AI tools that address the specific needs of local industries, ranging from agriculture to textile manufacturing.
              </p>
              
              <p className="font-opensans text-lg text-gray-700 leading-relaxed mb-6">
                We believe in harnessing the unique heritage and industrial potential of Rajasthan, providing businesses with the digital tools they need to thrive in an evolving marketplace.
              </p>
              
              <p className="font-opensans text-lg text-gray-700 leading-relaxed">
                Our mission is to contribute to the economic growth of Rajasthan by integrating AI into core operations, facilitating smarter decision-making, and fostering sustainability.
              </p>
            </div>
            
            <div className="relative">
              <div 
                className="rounded-lg shadow-2xl overflow-hidden"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '400px'
                }}
              >
                <div className="absolute inset-0 bg-primary/20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
