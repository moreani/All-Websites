
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-cricket-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-cricket-text mb-6">
              About <span className="text-cricket-primary">CricketScore AI</span>
            </h2>
            <div className="w-24 h-1 bg-cricket-accent mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <div className="bg-gradient-to-br from-cricket-primary/10 to-cricket-accent/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-heading font-bold text-cricket-text mb-6">
                  Our Mission
                </h3>
                <p className="text-lg font-body text-cricket-text/80 leading-relaxed mb-6">
                  At CricketScore AI, we are passionate about transforming the way cricket enthusiasts engage with the game. Our unique data analytics platform leverages cutting-edge artificial intelligence to provide insights that are not only informative but also actionable.
                </p>
                <p className="text-lg font-body text-cricket-text/80 leading-relaxed">
                  We believe that every ball, every run, and every wicket tells a story. With our tools, fans can dive deep into historical trends and player metrics, empowering them to make informed predictions and analyses.
                </p>
              </div>
            </div>

            <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-cricket-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl font-heading font-semibold text-cricket-text mb-2">
                      Advanced AI Algorithms
                    </h4>
                    <p className="font-body text-cricket-text/70">
                      Our proprietary algorithms analyze vast amounts of data effectively, highlighting patterns and insights typically overlooked.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-cricket-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl font-heading font-semibold text-cricket-text mb-2">
                      Comprehensive Analysis
                    </h4>
                    <p className="font-body text-cricket-text/70">
                      From critical assessments of player performance to head-to-head statistics, our solutions serve everyone from fans to professional teams.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-cricket-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl font-heading font-semibold text-cricket-text mb-2">
                      Future-Oriented Technology
                    </h4>
                    <p className="font-body text-cricket-text/70">
                      Going beyond mere statistics, we enable a richer, more insightful cricket experience through innovative technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="bg-gradient-to-r from-cricket-primary/5 to-cricket-accent/5 p-8 rounded-2xl">
              <p className="text-lg font-body text-cricket-text/80 leading-relaxed max-w-4xl mx-auto">
                CricketScore AI offers an unparalleled opportunity to access deep analytical insights into cricket, enhancing strategic decision-making for fans and professionals alike. Our proprietary AI algorithms provide a fresh perspective on performance metrics, enabling users to experience the game like never before.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
