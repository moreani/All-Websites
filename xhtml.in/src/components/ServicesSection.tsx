import { Code, BarChart3, FileText, MessageCircle, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
const ServicesSection = () => {
  const services = [{
    icon: Code,
    title: "AI-Enhanced Web Development",
    description: "Integrating AI at every stage of the development process, our web solutions optimize performance and enhance user experience.",
    features: ["AI-Powered Web Optimization: Utilizing algorithms for superior performance", "Intelligent E-commerce Solutions: Crafting personalized shopping experiences that elevate sales and customer satisfaction"],
    color: "from-deepIndigo to-calmTeal"
  }, {
    icon: BarChart3,
    title: "AI-Driven Analytics and Insights",
    description: "Our approach to data analytics unlocks actionable insights, helping companies make data-informed decisions.",
    features: ["Data-Driven Decision Making: Transforming customer data into strategies that promote growth", "Natural Language Processing (NLP) Services: Enabling businesses to understand customer sentiment and feedback effectively"],
    color: "from-calmTeal to-softSaffron"
  }, {
    icon: FileText,
    title: "Automated Content Solutions",
    description: "Stay relevant with AI-driven content generation and SEO optimization.",
    features: ["Content Generation Automation: Rapidly produce SEO-friendly content that resonates with your audience", "AI-Based SEO Optimization: Enhance visibility and reach with AI-powered analysis"],
    color: "from-softSaffron to-deepIndigo"
  }, {
    icon: MessageCircle,
    title: "Customer Engagement Automation",
    description: "Enhance customer interactions through intelligent solutions.",
    features: ["Intelligent Chatbot Solutions: Providing 24/7 customer support that's efficient and personalized", "Personalized User Experiences: Harnessing user data to tailor interactions seamlessly"],
    color: "from-deepIndigo to-softSaffron"
  }, {
    icon: Shield,
    title: "Quality Assurance through AI",
    description: "Ensure your web applications are top-notch with our AI quality assurance solutions.",
    features: ["AI-Powered Quality Assurance: Automating processes to meet high-performance standards", "Smart Visual Design Tools: Assisting in creating visually appealing designs aligned with trending metrics"],
    color: "from-calmTeal to-deepIndigo"
  }];
  return <section id="services" className="py-20 bg-gradient-to-br from-gray-900 via-deepIndigo/20 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-roboto text-white mb-6">
            Our AI-Powered <span className="text-softSaffron">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-softSaffron to-calmTeal mx-auto mb-8"></div>
          <p className="text-xl max-w-3xl mx-auto font-open-sans text-black text-center">
            Transforming businesses through intelligent solutions that drive growth and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-roboto text-gray-900 group-hover:text-deepIndigo transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4 font-open-sans">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => <li key={featureIndex} className="text-sm text-gray-700 font-open-sans flex items-start">
                      <div className="w-2 h-2 bg-gradient-to-r from-deepIndigo to-calmTeal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>)}
                </ul>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default ServicesSection;