
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-brand-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-roboto font-bold text-brand-dark mb-8 text-center">
            About <span className="text-brand-primary">DayTrading.AI</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <p className="text-lg font-open-sans text-brand-dark leading-relaxed mb-6">
                At DayTrading.AI, we specialize in developing innovative AI-driven software solutions tailored for the dynamic and fast-paced world of day trading. Our mission is to empower traders with cutting-edge technology that enhances decision-making, increases efficiency, and optimizes trading strategies.
              </p>
              
              <p className="text-lg font-open-sans text-brand-dark leading-relaxed mb-6">
                Our tools use advanced algorithms to analyze market trends, providing traders with actionable insights and real-time analytics. In a market where timing is crucial, we believe that leveraging AI is no longer optional—it's essential.
              </p>
              
              <p className="text-lg font-open-sans text-brand-primary font-semibold">
                Let us guide you on a journey towards smarter trading.
              </p>
            </div>
            
            <div className="animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80" 
                alt="Trading Analytics"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-3xl font-roboto font-bold text-brand-primary">24/7</div>
              <div className="text-sm font-open-sans text-brand-dark">Trading Bots</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl font-roboto font-bold text-brand-primary">99.9%</div>
              <div className="text-sm font-open-sans text-brand-dark">Uptime</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl font-roboto font-bold text-brand-primary">Real-time</div>
              <div className="text-sm font-open-sans text-brand-dark">Analytics</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl font-roboto font-bold text-brand-primary">AI-Powered</div>
              <div className="text-sm font-open-sans text-brand-dark">Predictions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
