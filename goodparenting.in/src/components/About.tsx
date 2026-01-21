
import { Brain, Heart, Users, Target } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Advanced algorithms analyze child development patterns for personalized guidance"
    },
    {
      icon: Heart,
      title: "Cultural Sensitivity",
      description: "Blending traditional Indian values with modern parenting approaches"
    },
    {
      icon: Users,
      title: "Family-Centered",
      description: "Understanding unique Indian family dynamics and structures"
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Preparing children for tomorrow while honoring today's values"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-family-gray">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-deep-text mb-6">
              Revolutionizing Indian Parenting Through 
              <span className="text-gradient block mt-2">Artificial Intelligence</span>
            </h2>
            <div className="w-24 h-1 bg-nurturing-teal mx-auto mb-8"></div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-slide-up">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop&q=80" 
                alt="Indian family using technology for parenting"
                className="rounded-2xl shadow-2xl hover-scale"
              />
            </div>

            <div className="space-y-6 animate-fade-in">
              <p className="text-lg md:text-xl text-soft-text leading-relaxed">
                Indian families today face unique challenges in raising children who are prepared for tomorrow's world while staying connected to our rich cultural values. Good Parenting bridges this gap by leveraging advanced artificial intelligence to provide personalized, culturally-sensitive parenting guidance that evolves with your child's growth.
              </p>

              <p className="text-lg md:text-xl text-soft-text leading-relaxed">
                Our AI-powered platform understands the complexities of modern Indian parenting—from balancing screen time with outdoor play, managing academic pressure while fostering creativity, to nurturing emotional intelligence alongside traditional values. We analyze child development patterns, family dynamics, and behavioral indicators to offer real-time insights that help you make confident parenting decisions.
              </p>

              <p className="text-lg md:text-xl text-soft-text leading-relaxed">
                Founded by child development experts and AI researchers, our platform combines the wisdom of Indian parenting traditions with cutting-edge technology. We recognize that every child is unique, every family has different needs, and every parent deserves support in their most important role. Our AI doesn't replace parental intuition—it enhances it with data-driven insights, evidence-based recommendations, and personalized strategies that grow with your family.
              </p>

              <p className="text-lg md:text-xl text-soft-text leading-relaxed">
                Whether you're navigating the toddler years, managing school-age challenges, or guiding teenagers through their transformative journey, Good Parenting provides the intelligent support system that helps you raise confident, capable, and culturally-grounded children who are ready to lead India's future.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale animate-scale-in text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-nurturing-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon size={32} className="text-nurturing-teal" />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-deep-text mb-3">
                  {feature.title}
                </h3>
                <p className="text-soft-text leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
