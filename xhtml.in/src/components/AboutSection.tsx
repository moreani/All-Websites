
import { Brain, Users, Zap, Target } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-roboto text-gray-900 mb-6">
            About <span className="text-deepIndigo">XHTML.IN</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-deepIndigo to-calmTeal mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 font-open-sans leading-relaxed">
              XHTML.IN is at the forefront of the digital revolution, merging innovative AI strategies with modern web development practices. Our team of experts focuses on creating high-performing websites that are not only aesthetically pleasing but also functional and responsive to user needs.
            </p>
            
            <p className="text-lg text-gray-700 font-open-sans leading-relaxed">
              Understanding the increasing demands of Indian enterprises, we provide solutions that facilitate rapid growth and engagement. Our approach ensures that every digital product we create is tailored to meet the specific requirements of our clients, leveraging AI to enhance performance and user experience.
            </p>
            
            <p className="text-lg text-gray-700 font-open-sans leading-relaxed">
              With a commitment to excellence, XHTML.IN empowers businesses to embrace the future of technology.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-deepIndigo/10 to-calmTeal/10 p-6 rounded-xl text-center transform hover:scale-105 transition-transform duration-300">
              <Brain className="w-12 h-12 text-deepIndigo mx-auto mb-4" />
              <h3 className="font-bold text-lg font-roboto text-gray-900 mb-2">AI Innovation</h3>
              <p className="text-sm text-gray-600 font-open-sans">Cutting-edge artificial intelligence solutions</p>
            </div>
            
            <div className="bg-gradient-to-br from-softSaffron/10 to-calmTeal/10 p-6 rounded-xl text-center transform hover:scale-105 transition-transform duration-300">
              <Users className="w-12 h-12 text-calmTeal mx-auto mb-4" />
              <h3 className="font-bold text-lg font-roboto text-gray-900 mb-2">Expert Team</h3>
              <p className="text-sm text-gray-600 font-open-sans">Skilled professionals dedicated to excellence</p>
            </div>
            
            <div className="bg-gradient-to-br from-calmTeal/10 to-deepIndigo/10 p-6 rounded-xl text-center transform hover:scale-105 transition-transform duration-300">
              <Zap className="w-12 h-12 text-softSaffron mx-auto mb-4" />
              <h3 className="font-bold text-lg font-roboto text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-sm text-gray-600 font-open-sans">Rapid deployment without compromising quality</p>
            </div>
            
            <div className="bg-gradient-to-br from-softSaffron/10 to-deepIndigo/10 p-6 rounded-xl text-center transform hover:scale-105 transition-transform duration-300">
              <Target className="w-12 h-12 text-deepIndigo mx-auto mb-4" />
              <h3 className="font-bold text-lg font-roboto text-gray-900 mb-2">Tailored Solutions</h3>
              <p className="text-sm text-gray-600 font-open-sans">Customized to meet specific business needs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
