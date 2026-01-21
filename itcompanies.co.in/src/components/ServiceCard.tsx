import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow border border-neutral-light">
      <div className="bg-primary/10 p-3 rounded-lg inline-flex mb-4">
        <Icon size={28} className="text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-text-dark">{title}</h3>
      <p className="text-text-medium">{description}</p>
    </div>
  );
};

export default ServiceCard;
