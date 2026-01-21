import { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';

const Services = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      icon: "https://pub-cdn.sider.ai/u/U0KAH964791/web-coder/684fd112060d7d85c7238b74/resource/0e35c360-f40d-41bc-9696-bf3fe880e9d4.jpg",
      title: "Search Engine Optimization",
      description: "Boost your visibility in India's search landscape with locally optimized SEO strategies that bring qualified traffic to your website.",
      features: [
        "India-specific keyword research",
        "Local SEO optimization",
        "Multilingual SEO support",
        "Mobile-first optimization"
      ]
    },
    {
      icon: "https://pub-cdn.sider.ai/u/U0KAH964791/web-coder/684fd112060d7d85c7238b74/resource/be596bef-cbab-4f3d-8d0a-63f7c85b382d.jpg",
      title: "Social Media Marketing",
      description: "Engage with India's 500+ million social media users through targeted campaigns that build brand loyalty and drive conversions.",
      features: [
        "Platform-specific strategies",
        "Regional language content",
        "Festival marketing campaigns",
        "Influencer collaborations"
      ]
    },
    {
      icon: "https://pub-cdn.sider.ai/u/U0KAH964791/web-coder/684fd112060d7d85c7238b74/resource/1af45636-867d-474f-b4ce-8e536a32086b.jpg",
      title: "Content Marketing",
      description: "Create compelling content that resonates with diverse Indian audiences across multiple languages, formats, and cultural contexts.",
      features: [
        "Multilingual content creation",
        "Industry-specific expertise",
        "Video content production",
        "Content distribution"
      ]
    },
    {
      icon: "https://pub-cdn.sider.ai/u/U0KAH964791/web-coder/684fd112060d7d85c7238b74/resource/0817b164-58df-4e38-86d8-40efc3c00d9a.jpg",
      title: "Performance Marketing",
      description: "Drive measurable results through optimized PPC, display, and remarketing campaigns tailored for India's digital ecosystem.",
      features: [
        "Google & Facebook Ads",
        "Regional ad platforms",
        "Conversion optimization",
        "Advanced analytics"
      ]
    },
    {
      icon: "https://pub-cdn.sider.ai/u/U0KAH964791/web-coder/684fd112060d7d85c7238b74/resource/029111ef-d9f1-4374-8afd-3241be494ed0.jpg",
      title: "Web Development",
      description: "Build responsive, fast-loading websites optimized for India's diverse internet speeds and device preferences.",
      features: [
        "Responsive design",
        "E-commerce development",
        "Page speed optimization",
        "UX/UI design"
      ]
    },
    {
      icon: "https://pub-cdn.sider.ai/u/U0KAH964791/web-coder/684fd112060d7d85c7238b74/resource/0915c05e-5944-436e-91e4-385a07f9eed3.jpg",
      title: "Analytics & Reporting",
      description: "Gain actionable insights with comprehensive tracking and reporting that measures your digital marketing ROI.",
      features: [
        "Custom dashboard setup",
        "Real-time monitoring",
        "Competitive analysis",
        "Strategic recommendations"
      ]
    }
  ];

  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">Comprehensive Digital Marketing Services</h2>
          <p className="text-[#6B7280] text-lg">
            Transform your business presence across India's rapidly evolving digital landscape with our complete suite of marketing solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all ${
                activeService === index ? 'scale-105 shadow-lg' : 'hover:shadow-lg'
              }`}
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="p-6">
                <div className="bg-[#EFF6FF] p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <img src={service.icon} alt={service.title} className="w-10 h-10 object-contain" />
                </div>
                <h3 className="text-xl font-bold text-[#1F2937] mb-3">{service.title}</h3>
                <p className="text-[#6B7280] mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-[#0F7DFF] mr-2" />
                      <span className="text-[#6B7280]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-[#0F7DFF] hover:bg-[#0B5DC7] text-white font-medium py-2.5 rounded-lg transition-colors text-center">
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className="inline-flex items-center justify-center bg-[#0F7DFF] hover:bg-[#0B5DC7] text-white font-medium px-8 py-3 rounded-lg transition-colors cursor-pointer"
          >
            Schedule Your Strategy Session <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        
        <div className="mt-16 pt-10 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-center text-[#1F2937] mb-8">Trusted By Leading Indian Brands</h3>
          <div className="flex flex-wrap justify-center items-center gap-10 opacity-70">
            {[
              "https://pub-cdn.sider.ai/u/U0KAH964791/web-coder/684fd112060d7d85c7238b74/resource/38aca9da-2b6a-4d46-847a-06e49f4e29c5.jpg",
              "https://pub-cdn.sider.ai/u/U0KAH964791/web-coder/684fd112060d7d85c7238b74/resource/ce4b89a4-5489-4ab9-b7fd-b2c36dbdba4c.jpg",
              "https://pub-cdn.sider.ai/u/U0KAH964791/web-coder/684fd112060d7d85c7238b74/resource/34731545-2b41-46fd-9af2-a790d4902c40.jpg",
              "https://pub-cdn.sider.ai/u/U0KAH964791/web-coder/684fd112060d7d85c7238b74/resource/5431650c-364b-4c09-a3c3-7bed03561a31.jpg",
              "https://pub-cdn.sider.ai/u/U0KAH964791/web-coder/684fd112060d7d85c7238b74/resource/75c4692c-7d87-4095-9d2a-77f53927013e.jpg"
            ].map((logo, index) => (
              <div key={index} className="w-24 h-24 md:w-32 md:h-16 flex items-center justify-center">
                <img src={logo} alt={`Client Logo ${index}`} className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
