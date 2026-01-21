import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Recycle, Leaf, Users, CheckCircle, Clock } from 'lucide-react';
import Hero from '../components/Hero';

const Recycling = () => {
  const [compostingStep, setCompostingStep] = useState(0);

  const compostingSteps = [
    { title: 'Collect Materials', description: 'Gather brown and green materials in 3:1 ratio' },
    { title: 'Layer Components', description: 'Alternate layers of brown and green materials' },
    { title: 'Add Water', description: 'Moisture should feel like a wrung-out sponge' },
    { title: 'Turn Regularly', description: 'Mix every 2-3 weeks for proper aeration' },
    { title: 'Monitor Progress', description: 'Check temperature and moisture levels' },
    { title: 'Harvest Compost', description: 'Ready in 3-6 months when dark and crumbly' }
  ];

  return (
    <div className="min-h-screen">
      <title>Recycling & Composting Guide - Sustainable Waste Processing Methods</title>
      
      <Hero
        title="Master Recycling and Composting Techniques"
        subtitle="Transform waste into valuable resources through proper recycling and composting methods."
        backgroundImage="https://images.pexels.com/photos/1470166/pexels-photo-1470166.jpeg"
      />

      {/* Recycling Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Recycle className="h-16 w-16 mx-auto mb-6 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">The Recycling Process</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-blue-50 rounded-lg p-8 shadow-lg">
              <p className="text-lg text-slate-700 leading-relaxed">
                Recycling transforms waste materials into new products through collection, sorting, processing, and 
                manufacturing stages requiring community participation and proper preparation. Clean segregation ensures 
                materials maintain quality for processing facilities and prevents contamination of recycling streams. 
                Paper recycling involves pulping, cleaning, and reforming into new paper products while removing inks 
                and adhesives. Plastic recycling includes sorting by resin type, shredding, melting, and forming new 
                products with specific applications. Glass recycling melts containers into new bottles and jars indefinitely 
                without quality degradation or material loss. Metal recycling processes aluminum and steel through melting 
                and reforming while preserving material properties completely. Proper preparation includes cleaning containers 
                and removing labels for optimal processing efficiency.
              </p>
            </div>
          </motion.div>

          {/* Recycling Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Collection', description: 'Gather recyclable materials from households and businesses' },
              { step: '2', title: 'Sorting', description: 'Separate materials by type using automated and manual processes' },
              { step: '3', title: 'Processing', description: 'Clean, shred, and prepare materials for manufacturing' },
              { step: '4', title: 'Manufacturing', description: 'Transform processed materials into new products' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg border-t-4 border-blue-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl font-bold text-blue-600 mb-3">{item.step}</div>
                <h3 className="text-lg font-bold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Home Composting Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Leaf className="h-16 w-16 mx-auto mb-6 text-green-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Home Composting Guide</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <p className="text-lg text-slate-700 leading-relaxed">
                Home composting converts organic waste into nutrient-rich soil amendment while reducing household waste 
                volume by 40% annually. Bin composting requires balancing green materials like food scraps with brown 
                materials including dried leaves and paper. Proper moisture levels, resembling a wrung-out sponge, support 
                decomposition while preventing odors and pest problems effectively. Regular turning provides oxygen for 
                aerobic decomposition and prevents anaerobic conditions that create methane and unpleasant smells. Temperature 
                monitoring ensures proper decomposition while killing harmful pathogens and weed seeds naturally. Finished 
                compost appears dark, crumbly, and earthy-smelling after 3-6 months of proper management. Troubleshooting 
                addresses common problems including odors, pests, and slow decomposition through adjustment techniques. 
                Urban composting options include worm bins and bokashi systems for apartment dwellers.
              </p>
            </div>
          </motion.div>

          {/* Interactive Composting Timer */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="h-6 w-6 text-green-600" />
                <h3 className="text-xl font-bold text-slate-800">Composting Progress Tracker</h3>
              </div>

              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-slate-700">Progress</span>
                  <span className="text-sm font-medium text-slate-700">{Math.round((compostingStep / (compostingSteps.length - 1)) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(compostingStep / (compostingSteps.length - 1)) * 100}%` }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {compostingSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0.5 }}
                    animate={{ 
                      opacity: index <= compostingStep ? 1 : 0.5,
                      scale: index === compostingStep ? 1.05 : 1
                    }}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                      index <= compostingStep 
                        ? 'border-green-500 bg-green-50' 
                        : 'border-gray-300 bg-gray-50'
                    }`}
                    onClick={() => setCompostingStep(index)}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        index <= compostingStep ? 'bg-green-500' : 'bg-gray-300'
                      }`}>
                        {index < compostingStep ? (
                          <CheckCircle className="h-4 w-4 text-white" />
                        ) : (
                          <span className="text-xs font-bold text-white">{index + 1}</span>
                        )}
                      </div>
                      <h4 className="font-semibold text-slate-800">{step.title}</h4>
                    </div>
                    <p className="text-sm text-slate-600">{step.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setCompostingStep(Math.max(0, compostingStep - 1))}
                  disabled={compostingStep === 0}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-400 transition-colors"
                >
                  Previous Step
                </button>
                <button
                  onClick={() => setCompostingStep(Math.min(compostingSteps.length - 1, compostingStep + 1))}
                  disabled={compostingStep === compostingSteps.length - 1}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-700 transition-colors"
                >
                  Next Step
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Programs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Users className="h-16 w-16 mx-auto mb-6 text-purple-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Community Programs</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-purple-50 rounded-lg p-8 shadow-lg">
              <p className="text-lg text-slate-700 leading-relaxed">
                Community recycling programs provide collection services and processing facilities for materials requiring 
                specialized handling and larger-scale operations. Curbside collection programs increase participation rates 
                while reducing transportation costs and individual effort requirements significantly. Drop-off centers handle 
                materials not included in regular collection including electronics, hazardous waste, and bulk items. Material 
                recovery facilities sort mixed recyclables using automated systems and manual labor for optimal material 
                recovery. Community composting programs process organic waste from multiple households using professional 
                equipment and management techniques. Educational programs build awareness while teaching proper preparation 
                and segregation techniques for maximum program effectiveness. Partnerships with local businesses create 
                markets for recycled materials while supporting regional economic development.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Curbside Collection',
                description: 'Regular pickup service for sorted recyclables from residential areas.',
                benefits: ['Convenient participation', 'Higher collection rates', 'Cost-effective transportation']
              },
              {
                title: 'Drop-off Centers',
                description: 'Centralized locations for specialized materials and bulk items.',
                benefits: ['Electronic waste handling', 'Hazardous material safety', 'Bulk item processing']
              },
              {
                title: 'Community Composting',
                description: 'Shared facilities for processing organic waste from multiple sources.',
                benefits: ['Professional equipment', 'Larger scale processing', 'Educational opportunities']
              }
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-purple-500 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-slate-800 mb-3">{program.title}</h3>
                <p className="text-slate-600 mb-4">{program.description}</p>
                <div className="space-y-2">
                  {program.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-slate-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Tips Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Success Tips</h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Successful recycling and composting require consistent habits, proper preparation, and understanding of local 
              program requirements and capabilities. Learning local recycling guidelines prevents contamination while maximizing 
              material recovery rates and processing efficiency. Proper storage prevents pest problems while maintaining material 
              quality until collection or processing occurs. Regular maintenance of composting systems ensures optimal conditions 
              for decomposition while preventing problems that discourage continued participation. Setting up convenient systems 
              encourages consistent participation while reducing effort required for proper waste management. Tracking progress 
              motivates continued participation while demonstrating environmental impact and waste reduction achievements over time. 
              Community involvement strengthens programs while building social connections around shared environmental goals.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Recycling;