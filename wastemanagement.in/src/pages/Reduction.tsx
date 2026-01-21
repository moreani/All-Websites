import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, RefreshCw, ShoppingBag, Building } from 'lucide-react';
import Hero from '../components/Hero';

const Reduction = () => {
  const strategies = [
    {
      icon: TrendingDown,
      title: 'Reduce at Source',
      description: 'Source reduction prevents waste generation through conscious consumption and purchasing decisions significantly impacting environmental outcomes. Buying products with minimal packaging reduces waste volume and disposal costs for households and communities. Choosing durable, repairable items over disposable alternatives extends product lifecycles and reduces replacement frequency. Bulk purchasing eliminates individual packaging while often providing cost savings for families. Digital receipts, bills, and communications reduce paper consumption and storage requirements dramatically. Planning meals prevents food waste and saves money on grocery expenses regularly. Borrowing or renting occasionally-used items reduces ownership costs and storage space requirements. Repair services extend product life and support local businesses while reducing waste generation.'
    },
    {
      icon: RefreshCw,
      title: 'Reuse Practices',
      description: 'Creative reuse transforms waste materials into functional items, reducing disposal needs and saving money on new purchases. Glass jars become storage containers for pantry items, craft supplies, and workshop organization efficiently. Cardboard boxes serve as organizers, planters, and children\'s craft projects before final recycling. Plastic containers work as seedling starters, paint water holders, and garage storage solutions effectively. Clothing alterations and repairs extend garment life while maintaining personal style preferences and fit. Furniture refurbishing creates unique pieces while avoiding landfill disposal and purchasing costs. Paper reuse includes scratch pads, gift wrapping, and art projects before recycling. Community swap events facilitate reuse while building neighborhood connections and reducing consumption needs.'
    },
    {
      icon: ShoppingBag,
      title: 'Sustainable Shopping',
      description: 'Sustainable shopping practices significantly reduce waste generation while supporting environmentally responsible businesses and manufacturing processes. Bringing reusable bags eliminates plastic bag consumption and reduces microplastic environmental contamination effectively. Choosing products with recyclable packaging supports circular economy principles and waste processing infrastructure development. Supporting local businesses reduces transportation packaging and supports community economic development simultaneously. Buying seasonal produce reduces packaging needs while supporting local agriculture and reducing transportation impacts. Choosing refillable containers for bulk items eliminates packaging waste while often providing cost savings. Digital product research reduces printed materials while enabling informed purchasing decisions. Quality over quantity purchasing reduces replacement frequency and long-term environmental impact significantly.'
    },
    {
      icon: Building,
      title: 'Workplace Reduction',
      description: 'Workplace waste reduction creates significant environmental impact while reducing operational costs and improving corporate sustainability ratings. Digital document management eliminates paper consumption while improving information accessibility and organization efficiency. Reusable water bottles and coffee cups reduce disposable container waste and long-term purchasing costs. Shared equipment and supplies reduce individual consumption while encouraging collaborative work environments. Energy-efficient appliances reduce electronic waste through extended lifecycles and lower operational costs. Proper equipment maintenance extends life while reducing replacement frequency and disposal needs. Employee education programs build awareness while encouraging sustainable practices throughout the organization. Green procurement policies support sustainable suppliers while reducing overall environmental impact.'
    }
  ];

  return (
    <div className="min-h-screen">
      <title>Waste Reduction Strategies - Practical Solutions for Sustainable Living</title>
      
      <Hero
        title="Practical Waste Reduction Strategies for Daily Life"
        subtitle="Implement simple yet effective methods to minimize waste generation and environmental impact."
        backgroundImage="https://images.pexels.com/photos/1210276/pexels-photo-1210276.jpeg"
      />

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">The Power of Prevention</h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              The most effective waste management strategy is preventing waste generation in the first place. Through conscious 
              consumption, reuse practices, and sustainable choices, we can dramatically reduce our environmental footprint 
              while often saving money and improving quality of life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Strategy Sections */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {strategies.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-white rounded-xl p-8 shadow-lg ${index % 2 === 1 ? 'ml-auto lg:ml-16' : 'mr-auto lg:mr-16'}`}
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl">
                      <strategy.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-800 mb-6">{strategy.title}</h3>
                    <p className="text-slate-700 leading-relaxed text-lg">{strategy.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Quick Reduction Tips</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Simple daily actions that make a significant cumulative impact on waste reduction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: 'Kitchen',
                tips: ['Plan meals weekly', 'Use reusable containers', 'Compost food scraps', 'Buy in bulk', 'Choose tap water']
              },
              {
                category: 'Shopping',
                tips: ['Bring reusable bags', 'Choose minimal packaging', 'Buy local products', 'Select quality items', 'Avoid single-use items']
              },
              {
                category: 'Office',
                tips: ['Go paperless', 'Use both sides', 'Share supplies', 'Maintain equipment', 'Digital communication']
              },
              {
                category: 'Personal Care',
                tips: ['Use refillable bottles', 'Choose bar soaps', 'Buy concentrated products', 'Repair clothing', 'Share/borrow items']
              },
              {
                category: 'Transportation',
                tips: ['Combine errands', 'Use public transport', 'Choose local services', 'Maintain vehicles', 'Plan efficient routes']
              },
              {
                category: 'Home',
                tips: ['Repair before replacing', 'Use energy-efficient appliances', 'Donate unused items', 'Choose durable goods', 'Regular maintenance']
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-green-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-green-800 mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="text-slate-700 text-sm flex items-center">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-3 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Calculator */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Your Reduction Impact</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Small changes compound over time to create significant environmental benefits.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                action: 'Using Reusable Bags',
                impact: '1,000',
                unit: 'plastic bags/year',
                description: 'Average family saves'
              },
              {
                action: 'Meal Planning',
                impact: '40%',
                unit: 'food waste reduction',
                description: 'Typical household achieves'
              },
              {
                action: 'Repairing Items',
                impact: '65%',
                unit: 'replacement delay',
                description: 'Extends product life by'
              },
              {
                action: 'Digital Documents',
                impact: '10,000',
                unit: 'paper sheets/year',
                description: 'Office worker saves'
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-sm font-semibold text-slate-600 mb-2">{stat.action}</h3>
                <div className="text-3xl font-bold text-green-600 mb-1">{stat.impact}</div>
                <div className="text-sm text-slate-500 mb-2">{stat.unit}</div>
                <p className="text-xs text-slate-600">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Reduction;