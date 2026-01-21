
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, TrendingUp, Target } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: '"Why Did This Rate Change?" Explainer',
      description: 'Leverage AI technology to receive detailed yet straightforward explanations whenever significant currency shifts occur, elucidating the underlying economic factors at play.',
      color: 'from-primary to-blue-600'
    },
    {
      icon: TrendingUp,
      title: 'Historical Performance Analysis',
      description: 'Explore historical data trends through interactive AI insights that reveal past influences on currency movements, helping you predict future behavior.',
      color: 'from-accent to-orange-600'
    },
    {
      icon: Target,
      title: 'Simulated Trading/Exchange Scenarios',
      description: 'Engage in simulated trading exercises where you can practice currency exchange based on real historical data or AI predictions, allowing you to learn and strategize without financial risk.',
      color: 'from-green-500 to-emerald-600'
    }
  ];

  return (
    <section className="py-20 bg-bgColor">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-roboto">
            Our Offerings
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl text-textColor font-lora">
            Comprehensive tools and insights to master currency exchange
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white overflow-hidden"
            >
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-primary font-roboto group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-textColor font-lora leading-relaxed text-center">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4 font-roboto">Ready to Get Started?</h3>
            <p className="text-textColor font-lora mb-6">
              Join thousands of learners who have transformed their understanding of currency markets with our AI-powered platform.
            </p>
            <button className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-lg font-roboto font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Start Learning Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
