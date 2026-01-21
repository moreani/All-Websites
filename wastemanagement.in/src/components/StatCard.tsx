import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  number: string;
  label: string;
  description: string;
  index: number;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, number, label, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
        <Icon className="h-6 w-6 text-green-600" />
      </div>
      <h3 className="text-3xl font-bold text-green-800 mb-2">{number}</h3>
      <h4 className="text-lg font-semibold text-slate-800 mb-2">{label}</h4>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default StatCard;