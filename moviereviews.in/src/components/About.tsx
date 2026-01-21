
const About = () => {
  return (
    <section id="about" className="py-20 bg-neutral-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-outfit font-bold text-cinema-dark mb-6">
            Revolutionizing Entertainment Intelligence
          </h2>
          <div className="w-24 h-1 bg-gold-accent mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="space-y-6 animate-slide-in-left">
            <p className="text-lg text-gray-700 leading-relaxed">
              At MovieReviews.AI, we've revolutionized how the Indian entertainment industry understands its audience. 
              Our cutting-edge artificial intelligence platform processes millions of movie reviews, social media conversations, 
              and audience interactions to deliver unprecedented insights that drive strategic decisions for producers, 
              distributors, exhibitors, and streaming platforms across India.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Our proprietary algorithms analyze sentiment patterns across <span className="font-semibold text-cinema-dark">22 Indian languages</span>, 
              identifying cultural nuances that traditional analytics miss. We understand that Indian cinema is not monolithic – 
              regional preferences, cultural contexts, and demographic variations create a complex landscape that requires 
              sophisticated AI interpretation.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Our platform serves India's leading production houses, OTT platforms, and distribution networks, helping them 
              navigate the <span className="font-semibold text-gold-accent">₹19,000 crore Indian film industry</span> with data-driven confidence. 
              From pre-production market analysis to post-release optimization strategies, we provide the intelligence 
              infrastructure that modern entertainment enterprises need to thrive in India's dynamic digital-first entertainment ecosystem.
            </p>
          </div>
          
          <div className="relative">
            <div className="glass-card p-8 animate-fade-in">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gold-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-cinema-dark">AI</span>
                </div>
                <h3 className="text-2xl font-outfit font-bold text-cinema-dark">
                  Cultural DNA Decoding
                </h3>
                <p className="text-gray-600">
                  We don't just process data – we decode the cultural DNA of Indian storytelling preferences, 
                  enabling our clients to create content that resonates deeply with diverse audiences while 
                  maximizing commercial success.
                </p>
                <div className="bg-cinema-dark text-white p-4 rounded-lg">
                  <p className="text-sm font-medium">
                    "Our AI transforms the art of filmmaking into a science of audience engagement."
                  </p>
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
