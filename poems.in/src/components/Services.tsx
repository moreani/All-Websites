
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: "Interactive Poem Explainer",
      description: "Enjoy in-depth analyses of your favorite poems, complete with line-by-line and stanza-by-stanza breakdowns that unveil themes, historical contexts, and poetic devices.",
      icon: "📖",
      color: "bg-primary/10"
    },
    {
      title: "Mood & Tone Analyzer",
      description: "Discover the emotional depth of any poem. Our AI identifies underlying sentiments and tones, allowing readers to forge deeper connections with the text.",
      icon: "🎭",
      color: "bg-accent/10"
    },
    {
      title: "Vocabulary Builder",
      description: "Enhance your understanding of poetry through our vocabulary tools, where obscure words and phrases are defined, complete with etymological insights and historical contexts.",
      icon: "📚",
      color: "bg-primary/10"
    },
    {
      title: "Personalized Poetry Recommendations",
      description: "Utilize AI to receive curated poem suggestions based on your reading history and interests. Our algorithm matches poems to your preferred themes, moods, or life situations.",
      icon: "🎯",
      color: "bg-accent/10"
    },
    {
      title: "Audio Interpretation & Recitation",
      description: "Listen to beautiful AI-generated recitations tailored to your preferences. Receive detailed feedback on your recitations, focusing on pacing, emphasis, and emotional delivery.",
      icon: "🎵",
      color: "bg-primary/10"
    }
  ];

  return (
    <section id="services" className="py-20 bg-bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-text mb-6">
            Our <span className="text-primary">Offerings</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="font-roboto text-lg text-accent max-w-2xl mx-auto">
            Discover our comprehensive suite of AI-powered tools designed to enhance your poetry experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in border-0 bg-white">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <CardTitle className="font-playfair text-xl text-text">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-roboto text-accent leading-relaxed text-center">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
