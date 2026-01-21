
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      title: "Interactive Player & Team Performance Analysis",
      description: "Users can engage with our platform to ask natural language questions about any player or match, such as \"What's Virat Kohli's average in T20s against spin?\" Our AI ensures quick, accurate responses backed by robust databases.",
      icon: "🎯",
      gradient: "from-cricket-primary/20 to-cricket-primary/5"
    },
    {
      title: "Head-to-Head Battle Insights",
      description: "We provide comprehensive breakdowns of player and team matchups. Whether you want to know how two teams have fared against each other historically or wish to see the statistics of players in similar conditions, our AI delivers precise, contextual analysis.",
      icon: "⚔️",
      gradient: "from-cricket-accent/20 to-cricket-accent/5"
    },
    {
      title: "Worm, Manhattan, and Wagon Wheel Analytics with AI Commentary",
      description: "Beyond just displaying typical graphical analyses, our AI can elucidate the patterns revealed in these charts. For example, we provide context for fluctuations in run rates or player performances across different formats, enriching the viewing experience with expert-level commentary.",
      icon: "📊",
      gradient: "from-cricket-primary/15 to-cricket-accent/15"
    }
  ];

  return (
    <section id="services" className="py-20 bg-cricket-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-cricket-text mb-6">
              What We <span className="text-cricket-primary">Offer</span>
            </h2>
            <div className="w-24 h-1 bg-cricket-accent mx-auto mb-8"></div>
            <p className="text-xl font-body text-cricket-text/70 max-w-3xl mx-auto leading-relaxed">
              Each of our offerings is crafted to enhance your connection with the game. By providing interactive features, we empower our users to delve into the qualitative aspects of cricket performance.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`bg-gradient-to-br ${service.gradient} border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="text-xl font-heading font-bold text-cricket-text leading-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-cricket-text/70 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="bg-cricket-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-heading font-bold text-cricket-text mb-4">
                Ready to Transform Your Cricket Experience?
              </h3>
              <p className="text-lg font-body text-cricket-text/70 mb-6">
                Explore our features today and stay ahead of the curve in cricket analytics.
              </p>
              <div className="flex justify-center">
                <div className="bg-gradient-to-r from-cricket-primary to-cricket-accent w-32 h-1 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
