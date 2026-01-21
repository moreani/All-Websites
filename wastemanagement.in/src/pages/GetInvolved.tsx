import React from 'react';
import { motion } from 'framer-motion';
import { User, Users, Heart, Megaphone } from 'lucide-react';
import Hero from '../components/Hero';

const GetInvolved = () => {
  return (
    <div className="min-h-screen">
      <title>Get Involved - Join India's Waste Management Movement</title>
      
      <Hero
        title="Join the Waste Management Revolution"
        subtitle="Every individual action contributes to India's environmental transformation and sustainable future."
        backgroundImage="https://images.pexels.com/photos/1405963/pexels-photo-1405963.jpeg"
      />

      {/* Individual Actions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <User className="h-16 w-16 mx-auto mb-6 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Individual Actions</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-blue-50 rounded-lg p-8 shadow-lg">
              <p className="text-lg text-slate-700 leading-relaxed">
                Individual commitment to waste management creates ripple effects throughout communities while demonstrating 
                environmental leadership and personal responsibility. Daily segregation of waste into organic, recyclable, 
                and hazardous categories supports processing systems and reduces contamination effectively. Composting kitchen 
                waste reduces household waste volume while creating valuable soil amendment for gardens and plants. Choosing 
                reusable alternatives to single-use items prevents waste generation while often providing long-term cost savings. 
                Supporting businesses with sustainable practices encourages market transformation while rewarding environmental 
                responsibility through consumer choices. Educating family and friends multiplies impact while building community 
                awareness and participation in environmental protection. Participating in local cleanup events strengthens 
                community bonds while improving environmental conditions.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Daily Segregation',
                description: 'Separate waste into organic, recyclable, and hazardous categories every day.',
                impact: 'Reduces contamination by 80%'
              },
              {
                title: 'Home Composting',
                description: 'Convert kitchen waste into nutrient-rich soil amendment for plants.',
                impact: 'Reduces household waste by 40%'
              },
              {
                title: 'Choose Reusables',
                description: 'Replace single-use items with durable, reusable alternatives.',
                impact: 'Prevents 1000+ disposable items yearly'
              },
              {
                title: 'Support Green Businesses',
                description: 'Purchase from companies with sustainable packaging and practices.',
                impact: 'Drives market transformation'
              },
              {
                title: 'Educate Others',
                description: 'Share knowledge with family, friends, and colleagues about waste management.',
                impact: 'Multiplies environmental impact'
              },
              {
                title: 'Join Cleanups',
                description: 'Participate in community cleanup events and environmental activities.',
                impact: 'Improves local environmental conditions'
              }
            ].map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg border-t-4 border-blue-500 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-slate-800 mb-3">{action.title}</h3>
                <p className="text-slate-600 mb-4 text-sm">{action.description}</p>
                <div className="bg-blue-50 rounded p-2">
                  <p className="text-xs font-semibold text-blue-800">Impact: {action.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Programs Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Users className="h-16 w-16 mx-auto mb-6 text-green-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Community Programs</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <p className="text-lg text-slate-700 leading-relaxed">
                Community-based programs amplify individual efforts while creating systemic change through collective action 
                and shared resources effectively. Neighborhood composting programs process organic waste from multiple households 
                while reducing transportation costs and environmental impact. Community gardens utilize compost while providing 
                local food production, education, and social connection opportunities for residents. Recycling cooperatives 
                support informal workers while improving material recovery rates and providing fair compensation for services. 
                School education programs build environmental awareness among children while encouraging family participation 
                in sustainable practices. Resident welfare associations organize collection drives, awareness campaigns, and 
                policy advocacy for improved waste management services. Local government partnerships ensure community input 
                in policy development while supporting implementation and monitoring activities.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                program: 'Neighborhood Composting',
                description: 'Shared composting facilities for multiple households to process organic waste together.',
                benefits: ['Reduced transportation costs', 'Professional-grade equipment', 'Community education opportunities'],
                participation: 'Contact your RWA or local government'
              },
              {
                program: 'Community Gardens',
                description: 'Shared spaces for food production using compost from local organic waste.',
                benefits: ['Fresh local produce', 'Educational workshops', 'Social connections'],
                participation: 'Join local gardening groups'
              },
              {
                program: 'Recycling Cooperatives',
                description: 'Organized groups supporting informal recycling workers and improving material recovery.',
                benefits: ['Fair compensation for workers', 'Higher recovery rates', 'Dignified employment'],
                participation: 'Support cooperative initiatives'
              },
              {
                program: 'School Programs',
                description: 'Environmental education in schools teaching waste management to children.',
                benefits: ['Early environmental awareness', 'Family engagement', 'Behavior change'],
                participation: 'Volunteer as educator or advocate'
              },
              {
                program: 'RWA Initiatives',
                description: 'Resident welfare associations organizing waste management activities.',
                benefits: ['Improved local services', 'Policy advocacy', 'Community mobilization'],
                participation: 'Join your local RWA committee'
              },
              {
                program: 'Government Partnerships',
                description: 'Collaborations between communities and local government for waste management.',
                benefits: ['Policy input', 'Resource access', 'Systematic change'],
                participation: 'Attend public consultations'
              }
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-green-800 mb-3">{program.program}</h3>
                <p className="text-slate-600 mb-4 text-sm">{program.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-700 mb-2">Benefits</h4>
                  <ul className="space-y-1">
                    {program.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-xs text-slate-600 flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-green-50 rounded p-2">
                  <p className="text-xs font-semibold text-green-800">How to participate: {program.participation}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteering Opportunities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Heart className="h-16 w-16 mx-auto mb-6 text-red-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Volunteering Opportunities</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-red-50 rounded-lg p-8 shadow-lg">
              <p className="text-lg text-slate-700 leading-relaxed">
                Volunteering provides direct contribution to waste management initiatives while building skills, networks, 
                and environmental awareness among participants. Beach and river cleanup events remove pollution while raising 
                awareness about waste prevention and proper disposal practices. Educational program volunteers teach composting, 
                recycling, and waste reduction techniques in schools, communities, and organizations. Awareness campaign volunteers 
                distribute information, organize events, and engage citizens in environmental protection activities regularly. 
                Data collection volunteers support research and monitoring activities while contributing to evidence-based policy 
                development and program evaluation. Training program volunteers share expertise while building capacity among 
                community members and organizations. Advocacy volunteers support policy development while engaging decision-makers 
                in environmental protection initiatives.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                opportunity: 'Cleanup Events',
                time: '4-6 hours monthly',
                skills: 'Physical activity, teamwork',
                impact: 'Direct environmental improvement'
              },
              {
                opportunity: 'Educational Programs',
                time: '2-3 hours weekly',
                skills: 'Teaching, communication',
                impact: 'Knowledge building in communities'
              },
              {
                opportunity: 'Awareness Campaigns',
                time: '1-2 hours weekly',
                skills: 'Communication, creativity',
                impact: 'Behavior change promotion'
              },
              {
                opportunity: 'Data Collection',
                time: '3-4 hours monthly',
                skills: 'Attention to detail, basic tech',
                impact: 'Evidence-based policy support'
              },
              {
                opportunity: 'Training Programs',
                time: '4-5 hours monthly',
                skills: 'Subject expertise, presentation',
                impact: 'Capacity building in communities'
              },
              {
                opportunity: 'Policy Advocacy',
                time: '2-3 hours weekly',
                skills: 'Research, communication',
                impact: 'Systemic change support'
              }
            ].map((opportunity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg border-t-4 border-red-500 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-red-800 mb-4">{opportunity.opportunity}</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-semibold text-slate-700">Time Commitment: </span>
                    <span className="text-sm text-slate-600">{opportunity.time}</span>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-slate-700">Skills Needed: </span>
                    <span className="text-sm text-slate-600">{opportunity.skills}</span>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-slate-700">Impact: </span>
                    <span className="text-sm text-slate-600">{opportunity.impact}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advocacy & Awareness Section */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Megaphone className="h-16 w-16 mx-auto mb-6 text-purple-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Advocacy & Awareness</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <p className="text-lg text-slate-700 leading-relaxed">
                Advocacy efforts influence policy development while building public support for comprehensive waste management 
                systems and environmental protection. Citizen participation in policy consultations ensures community needs 
                and perspectives inform government decision-making processes effectively. Social media campaigns raise awareness 
                while encouraging behavior change and supporting environmental initiatives through digital engagement platforms. 
                Petition campaigns demonstrate public support for specific policies while pressuring decision-makers to prioritize 
                environmental protection measures. Local government meetings provide opportunities for direct engagement while 
                advocating for improved services and infrastructure investment. Environmental education reduces stigma while 
                building understanding of waste management challenges and solutions among diverse audiences. Partnership building 
                connects organizations while strengthening collective advocacy for systemic change.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-purple-800">Advocacy Strategies</h3>
              {[
                {
                  strategy: 'Policy Consultations',
                  description: 'Participate in government consultations to provide community input on waste management policies.'
                },
                {
                  strategy: 'Social Media Campaigns',
                  description: 'Use digital platforms to raise awareness and encourage sustainable practices among wider audiences.'
                },
                {
                  strategy: 'Petition Campaigns',
                  description: 'Organize or support petitions for specific environmental policies and infrastructure improvements.'
                },
                {
                  strategy: 'Local Government Engagement',
                  description: 'Attend council meetings and engage directly with elected officials on waste management issues.'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-4 shadow-lg"
                >
                  <h4 className="font-semibold text-slate-800 mb-2">{item.strategy}</h4>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-purple-800">Awareness Building</h3>
              {[
                {
                  method: 'Educational Workshops',
                  description: 'Organize or attend workshops on waste management techniques and environmental protection.'
                },
                {
                  method: 'Community Presentations',
                  description: 'Share knowledge through presentations at community centers, schools, and local organizations.'
                },
                {
                  method: 'Partnership Building',
                  description: 'Connect with other organizations to strengthen collective advocacy and resource sharing.'
                },
                {
                  method: 'Media Engagement',
                  description: 'Work with local media to highlight waste management issues and success stories.'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-4 shadow-lg"
                >
                  <h4 className="font-semibold text-slate-800 mb-2">{item.method}</h4>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Environmental Journey Today</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Choose your level of involvement and begin making a positive impact on India's environmental future. 
              Every action, no matter how small, contributes to meaningful change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 font-semibold px-8 py-3 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Individual Action
              </button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Join Community Program
              </button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default GetInvolved;