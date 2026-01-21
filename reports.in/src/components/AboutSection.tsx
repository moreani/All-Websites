
import { Brain, Clock, Users, Target } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Advanced algorithms analyze and extract key insights from your content automatically."
    },
    {
      icon: Clock,
      title: "Time-Saving Automation",
      description: "Transform hours of manual work into minutes of automated processing."
    },
    {
      icon: Users,
      title: "Multi-Industry Solution",
      description: "Perfect for education, business, content creation, and professional services."
    },
    {
      icon: Target,
      title: "Precision & Accuracy",
      description: "Reliable extraction and summarization of essential information and data."
    }
  ];

  return (
    <section id="about" className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-roboto font-bold text-4xl md:text-5xl text-gray-900 mb-6">
            About ReportGen AI
          </h2>
          <p className="font-open-sans text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transforming the way professionals create reports through intelligent automation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="AI technology visualization"
              className="rounded-2xl shadow-xl"
            />
          </div>
          
          <div className="animate-fade-in">
            <h3 className="font-roboto font-bold text-3xl text-gray-900 mb-6">
              Streamlining Report Generation for Busy Professionals
            </h3>
            <p className="font-open-sans text-lg text-gray-700 mb-6 leading-relaxed">
              At ReportGen AI, we understand the challenges of generating insightful reports from varied content formats. Our intelligent tool is developed to automate the extraction of vital information and data from both videos and documents, simplifying the reporting process for busy professionals.
            </p>
            <p className="font-open-sans text-lg text-gray-700 mb-8 leading-relaxed">
              Whether you're in education, business, or content creation, our AI tool takes the stress out of report generation. Users can quickly upload their files, and within moments, receive a structured PDF report that highlights the key insights and data from their content.
            </p>
            <p className="font-open-sans text-lg text-gray-700 leading-relaxed">
              We're committed to helping you save time and streamline your workflow so you can focus on what matters most—making informed decisions.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="text-primary" size={32} />
              </div>
              <h4 className="font-roboto font-bold text-xl text-gray-900 mb-4">
                {feature.title}
              </h4>
              <p className="font-open-sans text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
