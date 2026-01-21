
import { Card, CardContent } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: '🎯',
      title: 'Personalized Learning Paths',
      description: 'AI analyzes your current skill level, musical interests, and goals to create a customized curriculum just for you.'
    },
    {
      icon: '🎵',
      title: 'Real-time Progress Tracking',
      description: 'Advanced AI monitors your progress and adjusts the difficulty and pace to keep you challenged but not overwhelmed.'
    },
    {
      icon: '🎼',
      title: 'Interactive Music Theory',
      description: 'Learn music theory through engaging, interactive lessons that adapt to your learning style and pace.'
    },
    {
      icon: '🎸',
      title: 'Multi-Instrument Support',
      description: 'From piano to guitar, drums to violin - our AI supports learning paths for over 15 different instruments.'
    },
    {
      icon: '🎤',
      title: 'Voice Analysis & Feedback',
      description: 'AI-powered vocal analysis provides instant feedback on pitch, timing, and tone to improve your singing.'
    },
    {
      icon: '🎧',
      title: 'Smart Practice Sessions',
      description: 'AI creates dynamic practice sessions based on your weaknesses and strengths, maximizing learning efficiency.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Our{' '}
            <span className="bg-gradient-music bg-clip-text text-transparent">AI-Powered</span>{' '}
            Platform?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our cutting-edge AI technology revolutionizes music education by providing personalized, 
            adaptive learning experiences that grow with you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-yellow-50">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-gradient-secondary p-6 rounded-2xl">
            <div className="text-3xl">🤖</div>
            <div className="text-left">
              <h4 className="text-lg font-bold text-gray-900">Powered by Advanced AI</h4>
              <p className="text-gray-600">Machine learning algorithms that understand music and your learning patterns</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
