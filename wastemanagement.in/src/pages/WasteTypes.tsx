import React from 'react';
import { motion } from 'framer-motion';
import { Apple, Recycle, AlertTriangle, Smartphone } from 'lucide-react';
import Hero from '../components/Hero';

const WasteTypes = () => {
  const wasteTypes = [
    {
      icon: Apple,
      title: 'Organic Waste',
      color: 'green',
      description: 'Organic waste includes food scraps, garden trimmings, and biodegradable materials comprising 50% of household waste. Kitchen waste like vegetable peels, fruit scraps, and leftover food decomposes naturally through composting processes. Garden waste including leaves, grass clippings, and pruned branches provides excellent composting material. Paper and cardboard products biodegrade but require separate processing systems. Organic waste produces methane in landfills but creates valuable compost when processed correctly. Home composting reduces waste volume by 40% while producing nutrient-rich soil amendment. Proper segregation prevents contamination with non-biodegradable materials. Community composting programs handle larger volumes effectively through centralized processing facilities.'
    },
    {
      icon: Recycle,
      title: 'Recyclable Materials',
      color: 'blue',
      description: 'Recyclable materials maintain value through processing into new products, reducing resource consumption significantly. Paper products including newspapers, magazines, and cardboard support paper manufacturing industries efficiently. Plastic containers marked with recycling symbols 1-7 require different processing methods and facility types. Glass bottles and jars recycle indefinitely without quality loss, supporting circular economy principles. Metal cans made from aluminum and steel have high recovery value and processing efficiency. Proper cleaning removes food residues that contaminate recycling streams and processing equipment. Mixed materials like tetra packs need specialized facilities for component separation and recovery processes.'
    },
    {
      icon: AlertTriangle,
      title: 'Hazardous Waste',
      color: 'red',
      description: 'Hazardous waste contains toxic, flammable, corrosive, or reactive substances requiring specialized handling and disposal methods. Household hazardous waste includes batteries, paint, pesticides, and cleaning chemicals posing health risks. Medical waste from healthcare facilities needs incineration or autoclaving before final disposal procedures. Industrial hazardous waste requires licensed treatment facilities and regulatory compliance monitoring. Improper disposal contaminates soil, groundwater, and air quality permanently in surrounding areas. Collection programs provide safe disposal options for households and small businesses regularly. Professional handling prevents environmental contamination and protects public health from exposure risks effectively.'
    },
    {
      icon: Smartphone,
      title: 'Electronic Waste',
      color: 'purple',
      description: 'Electronic waste represents the fastest-growing waste stream globally, containing valuable metals and toxic substances requiring careful management. Smartphones, computers, televisions, and appliances contain gold, silver, copper, and rare earth elements worth recovering. Circuit boards, batteries, and screens contain lead, mercury, and cadmium posing serious health hazards. Proper dismantling recovers materials while preventing toxic substance release into the environment safely. Certified e-waste recyclers follow environmental regulations and worker safety protocols during processing operations. Consumer responsibility includes data deletion and choosing authorized collection points for disposal. Extended producer responsibility programs encourage manufacturers to design for recyclability and take-back systems.'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: 'bg-green-100 text-green-800 border-green-200',
      blue: 'bg-blue-100 text-blue-800 border-blue-200',
      red: 'bg-red-100 text-red-800 border-red-200',
      purple: 'bg-purple-100 text-purple-800 border-purple-200'
    };
    return colors[color as keyof typeof colors] || colors.green;
  };

  return (
    <div className="min-h-screen">
      <title>Types of Waste - Classification Guide for Proper Management</title>
      
      <Hero
        title="Understanding Different Types of Waste"
        subtitle="Proper classification enables effective segregation, processing, and disposal methods for environmental protection."
        backgroundImage="https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg"
      />

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Waste Classification System</h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Understanding different waste categories is essential for proper segregation, processing, and disposal. 
              Each type requires specific handling methods to maximize resource recovery while minimizing environmental impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Waste Types Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {wasteTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`border-2 rounded-xl p-8 shadow-lg bg-white ${index % 2 === 0 ? '' : ''}`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`lg:col-span-4 ${index % 2 === 1 ? 'lg:col-start-9' : ''}`}>
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-xl mb-6 ${getColorClasses(type.color)}`}>
                      <type.icon className="h-10 w-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">{type.title}</h3>
                    <div className={`w-16 h-1 rounded-full mb-6 ${type.color === 'green' ? 'bg-green-500' : type.color === 'blue' ? 'bg-blue-500' : type.color === 'red' ? 'bg-red-500' : 'bg-purple-500'}`} />
                  </div>
                  
                  <div className={`lg:col-span-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <p className="text-slate-700 leading-relaxed text-lg">
                      {type.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Segregation Guide */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Proper Segregation Guidelines</h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Effective waste segregation at source ensures materials maintain quality for processing and prevents contamination.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                color: 'Green Bin',
                items: ['Food scraps', 'Garden waste', 'Paper towels', 'Natural materials'],
                bgColor: 'bg-green-100',
                textColor: 'text-green-800',
                borderColor: 'border-green-300'
              },
              {
                color: 'Blue Bin',
                items: ['Plastic bottles', 'Glass containers', 'Metal cans', 'Clean paper'],
                bgColor: 'bg-blue-100',
                textColor: 'text-blue-800',
                borderColor: 'border-blue-300'
              },
              {
                color: 'Red Bin',
                items: ['Batteries', 'Paint', 'Chemicals', 'Medical waste'],
                bgColor: 'bg-red-100',
                textColor: 'text-red-800',
                borderColor: 'border-red-300'
              },
              {
                color: 'Yellow Bin',
                items: ['Electronics', 'Appliances', 'Circuit boards', 'Cables'],
                bgColor: 'bg-yellow-100',
                textColor: 'text-yellow-800',
                borderColor: 'border-yellow-300'
              }
            ].map((bin, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${bin.bgColor} ${bin.borderColor} border-2 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <h3 className={`text-lg font-bold ${bin.textColor} mb-4`}>{bin.color}</h3>
                <ul className="space-y-2">
                  {bin.items.map((item, itemIndex) => (
                    <li key={itemIndex} className={`${bin.textColor} text-sm flex items-center`}>
                      <span className="w-2 h-2 rounded-full bg-current mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Segregation Best Practices</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Clean Before Disposal',
                description: 'Rinse containers to remove food residues that can contaminate recycling streams.'
              },
              {
                title: 'Remove Labels',
                description: 'Remove adhesive labels from glass and plastic containers when possible.'
              },
              {
                title: 'Separate Components',
                description: 'Disassemble items with mixed materials into component parts for proper sorting.'
              },
              {
                title: 'Use Designated Bins',
                description: 'Always use color-coded bins according to local waste management guidelines.'
              },
              {
                title: 'Regular Collection',
                description: 'Schedule regular pickup to prevent overflow and maintain hygiene standards.'
              },
              {
                title: 'Educate Household',
                description: 'Ensure all family members understand proper segregation procedures and importance.'
              }
            ].map((practice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-slate-800 mb-3">{practice.title}</h3>
                <p className="text-slate-600 leading-relaxed">{practice.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default WasteTypes;