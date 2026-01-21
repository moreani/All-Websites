
import { Video, FileText, Palette, BarChart3, Users } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Video,
      title: "Automatic Video Reporting",
      description: "Our AI analyzes video content, transcribes spoken words, and summarizes key points, automatically creating report drafts that highlight significant topics discussed.",
      color: "bg-primary"
    },
    {
      icon: FileText,
      title: "Document Insights",
      description: "Extract essential data and insights from documents such as reports, articles, and presentations. Our tool summarizes the content for easy reference and reporting.",
      color: "bg-accent"
    },
    {
      icon: Palette,
      title: "Customizable PDF Generation",
      description: "Users can choose from customizable templates to create professional reports that reflect their brand identity. Add logos, colors, and preferred layouts with ease.",
      color: "bg-primary"
    },
    {
      icon: BarChart3,
      title: "Data Visualization",
      description: "Convert data extracted from documents into visually appealing graphs and charts, integrated into PDF reports for enhanced clarity and presentation.",
      color: "bg-accent"
    },
    {
      icon: Users,
      title: "Real-Time Collaboration",
      description: "Share your generated reports seamlessly with team members or stakeholders, enabling collaborative review and feedback on the generated content.",
      color: "bg-primary"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-roboto font-bold text-4xl md:text-5xl text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="font-open-sans text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive AI-powered solutions for all your reporting needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="text-white" size={32} />
              </div>
              <h3 className="font-roboto font-bold text-2xl text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="font-open-sans text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-2xl shadow-xl animate-fade-in">
            <h3 className="font-roboto font-bold text-3xl text-white mb-4">
              Ready to Transform Your Reporting Process?
            </h3>
            <p className="font-open-sans text-xl text-white/90 mb-6 max-w-2xl mx-auto">
              Join thousands of professionals who have streamlined their workflow with ReportGen AI
            </p>
            <button className="bg-white text-primary hover:bg-gray-100 font-roboto font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
