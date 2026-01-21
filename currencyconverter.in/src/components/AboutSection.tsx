
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-lato font-bold text-4xl md:text-5xl text-primary text-center mb-12">
            About CurrencyWise
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Learning Currency Trading"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <p className="font-roboto text-lg text-gray-700 leading-relaxed">
                CurrencyWise is dedicated to educating users about the vibrant world of currency trading and exchange. Whether you're a beginner looking to grasp the basics or a seasoned trader seeking insights into market trends, our platform provides comprehensive resources tailored to diverse learning styles.
              </p>
              <p className="font-roboto text-lg text-gray-700 leading-relaxed">
                With features like our <span className="text-primary font-medium">AI Currency Coach</span>, users can engage in interactive learning, discussing topics like currency rates and economic indicators in an approachable manner.
              </p>
              <p className="font-roboto text-lg text-gray-700 leading-relaxed">
                Our goal is to empower individuals with the confidence to navigate the complexities of global markets, making financial education accessible to everyone in India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
