import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BarChart3, Users, Recycle, TrendingDown, Leaf, BookOpen } from 'lucide-react';
import Hero from '../components/Hero';
import StatCard from '../components/StatCard';
import ActionCard from '../components/ActionCard';
import WasteCalculator from '../components/WasteCalculator';

const Home = () => {
  const navigate = useNavigate();

  const stats = [
    {
      icon: BarChart3,
      number: '62M',
      label: 'Tonnes Annual Waste',
      description: 'India generates over 62 million tonnes of waste annually, requiring immediate action.'
    },
    {
      icon: TrendingDown,
      number: '75%',
      label: 'Collection Rate',
      description: 'Only 75% of waste is collected, leaving 25% improperly disposed in the environment.'
    },
    {
      icon: Recycle,
      number: '22%',
      label: 'Processing Rate',
      description: 'Just 22% of collected waste gets processed, highlighting the need for better infrastructure.'
    },
    {
      icon: Users,
      number: '90%',
      label: 'Urban Impact',
      description: 'Urban areas produce 90% more waste than rural regions, creating concentrated challenges.'
    }
  ];

  const actionAreas = [
    {
      icon: BookOpen,
      title: 'Learn About Waste',
      description: 'Understanding different waste types forms the foundation of effective management. Organic waste comprises 50% of household waste and can be composted easily. Recyclable materials like paper, plastic, and metal reduce landfill burden significantly. Hazardous waste requires special handling to prevent environmental contamination. Electronic waste contains valuable materials but needs proper recycling channels. Knowledge empowers individuals to make informed decisions about waste disposal and reduction strategies.',
      buttonText: 'Explore Waste Types',
      action: () => navigate('/waste-types')
    },
    {
      icon: TrendingDown,
      title: 'Reduce & Reuse',
      description: 'Waste reduction starts with conscious consumption choices and lifestyle modifications. Buying in bulk reduces packaging waste while supporting local businesses. Reusing containers, bags, and materials extends product lifecycles significantly. Digital receipts and online bills eliminate paper waste completely. Repairing items instead of replacing saves money and reduces environmental impact. Simple habit changes create substantial waste reduction over time.',
      buttonText: 'Learn Reduction Strategies',
      action: () => navigate('/reduce')
    },
    {
      icon: Recycle,
      title: 'Recycle Responsibly',
      description: 'Proper recycling transforms waste into valuable resources for new products. Clean segregation ensures materials maintain quality for processing facilities. Plastic bottles become clothing fibers, park benches, and new containers. Paper recycling saves trees, water, and reduces manufacturing energy consumption. Metal recycling preserves natural resources and supports circular economy principles. Community recycling programs make participation convenient and effective.',
      buttonText: 'Start Recycling',
      action: () => navigate('/recycle')
    }
  ];

  return (
    <div className="min-h-screen">
      {/* SEO Meta Tags */}
      <title>Waste Management India - Environmental Awareness & Sustainable Solutions</title>
      
      {/* Hero Section */}
      <Hero
        title="Transform India's Future Through Smart Waste Management"
        subtitle="Join the movement for sustainable living and environmental conservation across India."
        buttonText="Learn More"
        onButtonClick={() => navigate('/about')}
        backgroundImage="https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg"
      />

      {/* Key Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">India's Waste Challenge</h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              India generates over 62 million tonnes of waste annually, with only 75% collected and 22% processed. 
              Urban areas produce 90% more waste than rural regions. Plastic waste contributes to 9% of total waste, 
              creating severe environmental challenges. Poor waste management leads to soil contamination, water pollution, 
              and greenhouse gas emissions. Every citizen can make a difference through proper segregation, recycling, 
              and composting. Small changes in daily habits create significant environmental impact nationwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                icon={stat.icon}
                number={stat.number}
                label={stat.label}
                description={stat.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Action Areas Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Take Action Today</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Every individual can contribute to India's environmental transformation through informed action and sustainable practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {actionAreas.map((area, index) => (
              <ActionCard
                key={index}
                icon={area.icon}
                title={area.title}
                description={area.description}
                buttonText={area.buttonText}
                onButtonClick={area.action}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Calculator Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Calculate Your Impact</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Understand your household's waste generation and discover your potential for environmental impact reduction.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <WasteCalculator />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Leaf className="h-16 w-16 mx-auto mb-6 text-green-200" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join India's Environmental Movement</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Be part of the solution. Start your waste management journey today and contribute to a cleaner, 
              more sustainable India for future generations.
            </p>
            <button
              onClick={() => navigate('/get-involved')}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Involved Now
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;