
interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  color: "primary" | "accent";
  delay?: number;
}

const ServiceCard = ({ title, description, image, color, delay = 0 }: ServiceCardProps) => {
  const colorClasses = {
    primary: "border-primary/20 hover:border-primary/40",
    accent: "border-accent/20 hover:border-accent/40"
  };

  const titleColors = {
    primary: "text-primary",
    accent: "text-accent"
  };

  return (
    <div 
      className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 ${colorClasses[color]} animate-fade-in`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="p-6">
        <div className="mb-6">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover rounded-xl"
          />
        </div>
        
        <h3 className={`font-nunito font-bold text-xl mb-4 ${titleColors[color]}`}>
          {title}
        </h3>
        
        <p className="text-gray-600 font-lato leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
