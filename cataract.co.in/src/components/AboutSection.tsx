
import { Target, Heart, Users, Award } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: "Precision Diagnostics",
      description: "Advanced AI algorithms ensure accurate cataract detection and analysis"
    },
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Focus on improving patient outcomes and quality of life"
    },
    {
      icon: Users,
      title: "Healthcare Empowerment",
      description: "Supporting healthcare providers with cutting-edge technology"
    },
    {
      icon: Award,
      title: "Excellence Standards",
      description: "Maintaining the highest standards in medical AI solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-custom-bg">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Transforming Eye Care with 
              <span className="text-accent block mt-2">Artificial Intelligence</span>
            </h2>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                CataractAI stands at the forefront of integrating artificial intelligence into ophthalmology. With a focus on cataract treatment, we offer solutions that not only enhance diagnostic procedures but also streamline surgical planning and patient management.
              </p>
              
              <p>
                Our mission is to alleviate the burden of cataract blindness and ensure that every patient receives timely and effective treatment. By harnessing cutting-edge technology, we aim to transform eye health management, empowering healthcare providers with tools that enhance their capabilities.
              </p>
              
              <p>
                We believe in the power of technology to bridge gaps in healthcare accessibility and quality, making advanced eye care available to patients everywhere.
              </p>
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg shadow-lg border-l-4 border-accent">
              <blockquote className="text-primary italic text-lg">
                "Our vision is a world where advanced AI technology makes quality eye care accessible to everyone, everywhere."
              </blockquote>
            </div>
          </div>

          {/* Features Grid */}
          <div className="animate-fade-in-right">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-primary mb-6">Our Commitment</h3>
            <p className="text-xl text-gray-700 leading-relaxed">
              We are committed to revolutionizing eye care through innovative AI solutions that enhance diagnostic accuracy, 
              improve treatment outcomes, and make quality healthcare accessible to all. Our technology empowers healthcare 
              professionals to provide the best possible care for their patients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
