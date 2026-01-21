import { ReactNode } from "react";

interface ModuleCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ModuleCard = ({ icon, title, description }: ModuleCardProps) => {
  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 h-full flex flex-col group">
      <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      
      <h3 className="font-poppins font-bold text-xl text-primary-blue mb-4">{title}</h3>
      
      <p className="font-inter text-text-light flex-grow">{description}</p>
      
      <div className="mt-6 pt-4 border-t border-gray-100">
        <button className="text-accent-orange font-medium flex items-center group-hover:text-primary-blue transition-colors">
          Learn More 
          <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ModuleCard;
