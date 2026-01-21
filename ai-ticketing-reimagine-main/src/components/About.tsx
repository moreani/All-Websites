
const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-roboto font-bold text-gray-900 mb-6">
              The Future of Airline Ticketing is Here: 
              <span className="text-primary"> Powered by AI</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="AI Technology"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            
            <div className="space-y-6 animate-slide-up">
              <p className="text-lg text-gray-700 leading-relaxed">
                AirlineTickets.in is dedicated to transforming the Indian airline industry through cutting-edge AI automation. We understand the unique challenges and opportunities within the Indian market, and our solutions are tailored to address these specific needs.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Our AI-powered platform automates key processes, including booking, pricing, customer service, and fraud detection, leading to significant cost savings and improved operational efficiency.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                By partnering with AirlineTickets.in, Indian airlines can unlock the full potential of AI and embark on a journey of continuous improvement and sustainable growth.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50%</div>
                  <div className="text-gray-600">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                  <div className="text-gray-600">AI Support</div>
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
