import React from 'react';
import { Target, Award, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Precision Analytics",
      description: "Advanced AI algorithms analyze examination data with unparalleled accuracy"
    },
    {
      icon: Award,
      title: "Excellence Driven",
      description: "Empowering educational institutions to achieve continuous improvement"
    },
    {
      icon: Users,
      title: "Student-Centric",
      description: "Focused on enhancing student outcomes through data-driven insights"
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Cutting-edge technology solutions for modern educational challenges"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-primary mb-6">
            About <span className="text-accent">ExamResults.Co.In</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="animate-slide-up">
            <h3 className="font-poppins font-semibold text-2xl text-primary mb-6">
              Revolutionizing Educational Assessment
            </h3>
            <p className="font-roboto text-gray-600 text-lg leading-relaxed mb-6">
              ExamResults.Co.In is an innovative platform dedicated to enhancing examination processes through 
              advanced AI technology. Our mission is to harness the power of artificial intelligence to 
              streamline the assessment lifecycle, ensuring speedy, transparent, and accurate results for 
              educational institutions across India.
            </p>
            <p className="font-roboto text-gray-600 text-lg leading-relaxed mb-8">
              With cutting-edge algorithms and robust data analysis techniques, we make it possible for 
              educational leaders to gain deep insights into student performance and outcomes. Our tools 
              not only facilitate result processing but also empower institutions to identify strengths 
              and weaknesses in their curricula.
            </p>
            
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-accent to-primary p-1 rounded-full">
                <div className="bg-white p-3 rounded-full">
                  <Target className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="font-poppins font-semibold text-primary">Our Mission</h4>
                <p className="font-roboto text-gray-600">Transforming education through intelligent data analysis</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-fade-in">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-light-gray to-white p-6 rounded-xl shadow-lg hover:shadow-xl 
                         transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-accent to-primary p-3 rounded-lg inline-block mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-poppins font-semibold text-primary mb-3">{feature.title}</h4>
                <p className="font-roboto text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 lg:p-12 text-center animate-slide-up">
          <h3 className="font-poppins font-bold text-3xl text-white mb-6">
            Our Vision for Education
          </h3>
          <p className="font-roboto text-white/90 text-lg leading-relaxed max-w-4xl mx-auto">
            We envision a future where every educational institution has access to powerful AI-driven insights 
            that transform how they understand student performance, optimize curricula, and drive excellence. 
            Through our platform, we're not just processing results – we're enabling continuous improvement 
            and fostering a culture of achievement in the Indian educational landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;