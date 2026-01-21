
const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-roboto">
            About Us
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-textColor leading-relaxed font-lora">
              At ExchangeRates Academy, we're on a mission to revolutionize the way individuals and businesses understand currency exchange. Our platform combines advanced AI technologies with a user-centric approach to education.
            </p>
            <p className="text-lg text-textColor leading-relaxed font-lora">
              Designed for those looking to improve their financial knowledge, our resources cater to beginners and seasoned professionals alike. With our comprehensive tools and real-world insights, you'll gain the confidence to navigate currency fluctuations and make informed decisions.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">1000+</div>
                <div className="text-sm text-textColor">Students Educated</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-textColor">Currency Pairs</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-primary to-accent p-8 rounded-2xl text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-accent rounded-full animate-pulse"></div>
                  <span className="font-roboto">AI-Powered Analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <span className="font-roboto">Real-Time Updates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <span className="font-roboto">Expert Insights</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                  <span className="font-roboto">Educational Resources</span>
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
