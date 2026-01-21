
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const HowItWorks = () => {
  const steps = [
    {
      step: '01',
      title: 'Take the AI Assessment',
      description: 'Our AI evaluates your current musical knowledge, preferred learning style, and personal goals through an interactive assessment.',
      color: 'bg-yellow-500'
    },
    {
      step: '02',
      title: 'Get Your Custom Path',
      description: 'Receive a personalized learning roadmap with lessons, exercises, and milestones tailored specifically to your needs.',
      color: 'bg-orange-500'
    },
    {
      step: '03',
      title: 'Learn & Practice',
      description: 'Follow your AI-curated lessons with real-time feedback, interactive exercises, and adaptive difficulty adjustments.',
      color: 'bg-amber-500'
    },
    {
      step: '04',
      title: 'Track Progress',
      description: 'Monitor your improvement with detailed analytics and celebrate achievements as you reach new musical milestones.',
      color: 'bg-yellow-600'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How Our{' '}
            <span className="bg-gradient-music bg-clip-text text-transparent">AI System</span>{' '}
            Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From assessment to mastery - discover how our AI creates the perfect learning experience for you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <Card key={index} className="border-l-4 border-l-yellow-500 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`${step.color} text-white text-lg font-bold w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0`}>
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border-4 border-yellow-200">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-music rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🎓</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">AI Learning Dashboard</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                    <span className="font-medium">Current Lesson</span>
                    <span className="text-primary font-bold">Chord Progressions</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Weekly Progress</span>
                      <span className="font-bold">78%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-music h-3 rounded-full" style={{width: '78%'}}></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-3 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">127</div>
                      <div className="text-sm text-gray-600">Songs Learned</div>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">24</div>
                      <div className="text-sm text-gray-600">Skills Mastered</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating AI indicators */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium animate-pulse">
              AI Active
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Learning Optimized
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-music text-white hover:opacity-90 text-lg px-8 py-6">
            Start Your AI-Powered Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
