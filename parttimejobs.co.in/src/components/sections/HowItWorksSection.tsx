
import { Card, CardContent } from "@/components/ui/card";

const HowItWorksSection = () => {
  const steps = [
    {
      step: "01",
      title: "Create Your Profile",
      description: "Sign up and create a comprehensive profile showcasing your skills, experience, and availability. Our AI analyzes your profile to understand your strengths.",
      color: "from-purple-500 to-purple-600"
    },
    {
      step: "02", 
      title: "Get Matched",
      description: "Our intelligent algorithm finds and recommends jobs that perfectly match your skills, preferences, and schedule. No more endless searching through irrelevant listings.",
      color: "from-blue-500 to-blue-600"
    },
    {
      step: "03",
      title: "Apply & Connect",
      description: "Apply to jobs with one click or get invited directly by employers. Start conversations and negotiate terms through our secure messaging system.",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      step: "04",
      title: "Work & Earn",
      description: "Complete projects, build relationships, and grow your freelance career. Get paid securely and on time through our integrated payment system.",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in minutes with our simple, AI-powered process that connects 
            you with the right opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-white">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-lg mb-6 mx-auto`}>
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
