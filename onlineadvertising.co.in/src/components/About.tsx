
import { Users, Lightbulb, Cog, Trophy } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Users className="text-primary" size={48} />,
      title: "Expert Team",
      description: "Years of expertise in digital marketing and AI automation"
    },
    {
      icon: <Lightbulb className="text-accent" size={48} />,
      title: "Innovation First",
      description: "Cutting-edge AI solutions tailored for Indian enterprises"
    },
    {
      icon: <Cog className="text-primary" size={48} />,
      title: "Seamless Integration",
      description: "Easy integration with your existing marketing infrastructure"
    },
    {
      icon: <Trophy className="text-accent" size={48} />,
      title: "Proven Results",
      description: "Track record of delivering exceptional ROI for our clients"
    }
  ];

  return (
    <section id="about" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-800 mb-6">
            Our Vision
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              At <span className="font-semibold text-primary">Online Advertising Automation</span>, our goal is to transform the landscape of digital marketing for Indian enterprises through intelligent automation. In an era where speed and precision define successful advertising, our AI-powered tools streamline your campaign management processes, saving you time and resources.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With years of expertise in digital marketing, we understand the challenges businesses face, and our automation solutions are designed to navigate these challenges seamlessly. By integrating our technology into your advertising strategy, you'll unlock greater efficiency, allowing your team to focus on strategic initiatives and creative innovation.
            </p>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary">
              <h3 className="font-bold text-xl text-gray-800 mb-2">Our Mission</h3>
              <p className="text-gray-600">
                "Streamline Your Campaigns with Intelligent Automation"
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format"
              alt="Team collaboration and automation"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-accent text-white p-6 rounded-xl shadow-lg">
              <h4 className="font-bold text-2xl">500+</h4>
              <p className="text-sm">Campaigns Automated</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
            >
              <div className="mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-3 font-montserrat">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
