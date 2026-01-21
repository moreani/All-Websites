
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: "Personalized Coloring Pages",
      description: "Our AI generates coloring pages tailored to individual preferences, allowing children to choose themes they love.",
      icon: "🎨",
      color: "bg-primary/10 border-primary/20"
    },
    {
      title: "Interactive Tutorials",
      description: "Step-by-step guidance enhances learning and encourages artistic experimentation through engaging AI-driven tutorials.",
      icon: "📚",
      color: "bg-accent/10 border-accent/20"
    },
    {
      title: "Progress Tracking",
      description: "Built-in AI analytics to monitor a child's development in artistic expression, offering fun and meaningful insights to parents.",
      icon: "📊",
      color: "bg-green-100 border-green-200"
    },
    {
      title: "Collaboration Features",
      description: "Children can share their artwork with friends and receive feedback, making the coloring experience social and communal.",
      icon: "🤝",
      color: "bg-purple-100 border-purple-200"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-4 animate-fade-in">
            Our AI-Powered Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in">
            Discover innovative tools designed to enhance creativity and learning through technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`${service.color} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in`}>
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="font-poppins text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-700">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-lg text-white max-w-4xl mx-auto animate-fade-in">
            <h3 className="text-2xl font-bold font-poppins mb-4">
              Ready to Start Your Child's Creative Journey?
            </h3>
            <p className="text-lg mb-6">
              Join thousands of families who have discovered the joy of AI-powered creativity
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
