
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Code, BarChart3, GraduationCap } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Strategy & Roadmap",
      description: "We work with you to develop a comprehensive AI strategy aligned with your business goals. This includes identifying high-impact use cases, assessing your current AI readiness, and creating a detailed roadmap for implementation. We delve deep into your business processes, analyze your data landscape, and understand your competitive environment to craft a bespoke AI strategy that delivers measurable results.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&h=400&q=80"
    },
    {
      icon: Code,
      title: "AI Implementation & Development", 
      description: "Our team of experienced AI developers can help you build and deploy custom AI solutions tailored to your specific needs. We leverage the latest AI technologies, including machine learning, natural language processing, and computer vision, to create intelligent applications that automate tasks, improve decision-making, and enhance customer experiences.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=400&q=80"
    },
    {
      icon: BarChart3,
      title: "AI Data Analytics & Insights",
      description: "Unlock the hidden potential of your data with our AI-powered analytics services. We use advanced machine learning algorithms to identify patterns, trends, and insights that can help you make better decisions and improve your business performance. We offer a range of data analytics services, including predictive modeling, customer segmentation, and fraud detection.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&h=400&q=80"
    },
    {
      icon: GraduationCap,
      title: "AI Training & Enablement",
      description: "Equip your team with the skills and knowledge they need to succeed in the age of AI. We offer customized AI training programs for businesses of all sizes. Our training programs cover a wide range of topics, including AI fundamentals, machine learning, natural language processing, and computer vision. We empower your team to leverage AI effectively and drive innovation across your business.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&h=400&q=80"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-roboto-slab text-primary mb-4">
            AI Consulting Services for Indian Enterprises
          </h2>
          <p className="text-lg font-open-sans text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI solutions designed to transform your business and drive exponential growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-roboto-slab text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="font-open-sans text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
