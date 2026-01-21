import React from 'react';
import { Target, Users, Lightbulb, Shield } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Empowering healthcare providers with actionable insights'
    },
    {
      icon: Users,
      title: 'Community-Focused',
      description: 'Ensuring safety across communities through data'
    },
    {
      icon: Lightbulb,
      title: 'Innovation-Led',
      description: 'Advanced AI analytics for real-time decision making'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Robust data analysis with privacy protection'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-900 mb-6">
            About <span className="text-crimson">Covid19.In</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-crimson to-bruised-violet mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-up">
            <p className="text-lg text-gray-700 leading-relaxed mb-6 font-roboto">
              Covid19.In specializes in leveraging advanced AI analytics to address the challenges of the COVID-19 pandemic. Our mission is to empower healthcare providers, governments, and the community with actionable insights derived from real-time data.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 font-roboto">
              We recognize the urgency of effective responses in times of a health crisis and aim to enhance decision-making through robust data analysis and predictive modeling. By understanding trends, forecasting outbreaks, and optimizing resource allocation, we help organizations navigate the complexities of COVID-19 impacts.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-roboto">
              Our commitment extends beyond technology—we ensure safety across communities through collaborative solutions that foster a healthier society.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-light-gray rounded-xl hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-crimson to-bruised-violet rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 font-montserrat">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 font-roboto">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-bruised-violet to-cobalt rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold font-montserrat mb-4">
            Leading the Fight Against COVID-19
          </h3>
          <p className="text-lg md:text-xl font-roboto opacity-90 max-w-3xl mx-auto">
            Through collaboration with healthcare providers, we develop tailored solutions that empower frontline workers and enhance patient care, ultimately fostering a healthier society.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;