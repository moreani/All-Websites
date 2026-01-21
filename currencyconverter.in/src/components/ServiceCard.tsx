
interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

const ServiceCard = ({ title, description, icon, index }: ServiceCardProps) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="text-4xl mb-6">{icon}</div>
      <h3 className="font-lato font-bold text-2xl text-primary mb-4">
        {title}
      </h3>
      <p className="font-roboto text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
