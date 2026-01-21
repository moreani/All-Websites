
import { Target, Users, Lightbulb, Shield } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We are committed to staying at the forefront of AI technology."
    },
    {
      icon: Target,
      title: "Impact", 
      description: "We deliver solutions that drive tangible business outcomes."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We operate with the highest ethical standards."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients to achieve shared success."
    }
  ];

  return (
    <section id="about" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&h=600&q=80"
              alt="Professional AI consulting team collaborating in India"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>

          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold font-roboto-slab text-primary">
                Your Strategic AI Partner in India
              </h2>
              <p className="text-lg font-open-sans text-gray-700 leading-relaxed">
                CGI is a leading AI consulting firm dedicated to empowering Indian enterprises with the 
                transformative potential of Artificial Intelligence. We understand the unique challenges 
                and opportunities facing businesses in India, and we tailor our solutions to meet your 
                specific needs.
              </p>
              <p className="text-lg font-open-sans text-gray-700 leading-relaxed">
                Our team comprises seasoned AI strategists, data scientists, and technology experts with 
                a proven track record of success. We are passionate about helping our clients unlock new 
                levels of efficiency, innovation, and growth through the strategic application of AI.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <value.icon className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-roboto-slab font-bold text-primary mb-1">{value.title}</h3>
                    <p className="font-open-sans text-gray-600 text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
