
interface Service {
  title: string;
  description: string;
  image: string;
  features: string[];
}

interface ServiceCardProps {
  service: Service;
  delay: number;
}

const ServiceCard = ({ service, delay }: ServiceCardProps) => {
  return (
    <div 
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="relative">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10"></div>
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-montserrat font-bold text-gray-900">
          {service.title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed">
          {service.description}
        </p>
        
        <div className="space-y-2">
          <h4 className="font-medium text-gray-900">Key Features:</h4>
          <ul className="grid grid-cols-2 gap-2">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <button className="w-full mt-4 bg-primary-custom hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
