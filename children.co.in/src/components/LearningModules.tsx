import { Brain, Code, Lightbulb } from "lucide-react";
import ModuleCard from "./ModuleCard";

const LearningModules = () => {
  const modules = [
    {
      id: 1,
      icon: <Brain className="w-12 h-12 text-accent-orange" />,
      title: "AI-Personalized Academics (Maths & Science)",
      description: "Move past one-size-fits-all lessons. Our core academic module for Grades 1-8 uses a sophisticated AI engine to diagnose your child's exact level of understanding in Mathematics and Science. The system generates custom-tailored lesson plans, interactive problems, and engaging quizzes that adapt in difficulty. If a concept proves challenging, the AI provides alternative explanations and reinforcing exercises until mastery is achieved, ensuring a rock-solid foundation without gaps."
    },
    {
      id: 2,
      icon: <Code className="w-12 h-12 text-accent-orange" />,
      title: "Introduction to AI & Coding (Ages 8-16)",
      description: "We demystify the technology that is shaping our future. In this project-based module, children are introduced to the fundamentals of computational thinking, logic, and even the core principles of machine learning. Through fun, hands-on projects—like building a simple chatbot or creating AI-generated art—they learn to become creators of technology, not just consumers. This fosters invaluable problem-solving skills and digital literacy for the 21st century."
    },
    {
      id: 3,
      icon: <Lightbulb className="w-12 h-12 text-accent-orange" />,
      title: "Brain Training & Critical Thinking",
      description: "True intelligence extends beyond academics. Our suite of AI-powered games and challenges is scientifically designed to enhance crucial cognitive abilities. These engaging activities target critical thinking, spatial reasoning, memory retention, and strategic planning. The platform continuously monitors performance and adjusts the complexity to keep your child challenged but not overwhelmed, promoting resilient and agile thinking in a playful, stimulating environment."
    }
  ];

  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-6">
        <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary-blue mb-12 text-center">
          Our Intelligent Learning Ecosystem
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module) => (
            <ModuleCard 
              key={module.id}
              icon={module.icon}
              title={module.title}
              description={module.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningModules;
