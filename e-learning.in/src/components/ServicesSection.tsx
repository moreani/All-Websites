
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      title: "AI-Driven Course Library",
      description: "Explore a vast library of courses across diverse subject areas. Our AI algorithms enhance the search capabilities, allowing users to find courses tailored to their specific interests and proficiency levels swiftly.",
      icon: "🤖",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Personalized Learning Paths",
      description: "Utilizing advanced analytics, our platform creates customized learning pathways based on user preferences, previous knowledge, and career goals. This personalized approach increases engagement and enhances learning outcomes.",
      icon: "🎯", 
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Real-Time Feedback & Support",
      description: "Receive instant feedback on your progress and assessments throughout your learning journey. Our AI tools offer insights and suggestions to help improve performance and guide learners toward effective study practices.",
      icon: "⚡",
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Community Interaction",
      description: "Join an interactive community of learners and experts. Participate in forums, discussion boards, and collaborative projects, fostering a robust environment of shared knowledge and mentorship.",
      icon: "👥",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Certification & Credentials",
      description: "Upon completing courses, earn certifications that are recognized by industry leaders. Validate your skills and enhance your employability in a competitive job market.",
      icon: "🏆",
      gradient: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-secondary text-darkText mb-6">
            Our <span className="text-primary">AI-Powered</span> Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our advanced artificial intelligence transforms your learning experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
              <CardHeader className="text-center pb-4">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-secondary text-darkText group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed text-center">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
