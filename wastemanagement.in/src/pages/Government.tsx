import React from 'react';
import { motion } from 'framer-motion';
import { Flag, Target, MapPin, Shield } from 'lucide-react';
import Hero from '../components/Hero';

const Government = () => {
  return (
    <div className="min-h-screen">
      <title>Government Waste Management Initiatives - Policies and Programs India</title>
      
      <Hero
        title="Government Leadership in Waste Management"
        subtitle="Comprehensive policies and programs driving India's transition toward sustainable waste management systems."
        backgroundImage="https://images.pexels.com/photos/1166643/pexels-photo-1166643.jpeg"
      />

      {/* National Policies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Flag className="h-16 w-16 mx-auto mb-6 text-orange-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">National Policies</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-orange-50 rounded-lg p-8 shadow-lg">
              <p className="text-lg text-slate-700 leading-relaxed">
                India's National Environment Policy provides framework for waste management through regulatory measures, 
                institutional mechanisms, and stakeholder engagement strategies nationwide. Solid Waste Management Rules 2016 
                mandate source segregation, collection, and processing while establishing extended producer responsibility for 
                packaging waste. Plastic Waste Management Rules regulate production, use, and disposal of plastic materials 
                while promoting alternatives and recycling infrastructure development. E-Waste Management Rules address electronic 
                waste through collection targets, producer responsibility, and authorized recycler networks across states. 
                Hazardous Waste Management Rules ensure safe handling, treatment, and disposal through licensed facilities and 
                regulatory oversight mechanisms. Bio-Medical Waste Management Rules protect public health through proper collection, 
                treatment, and disposal of healthcare waste. Construction and Demolition Waste Management Rules promote recycling 
                and reuse in infrastructure projects.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Solid Waste Management Rules 2016',
                description: 'Comprehensive framework for municipal solid waste management with source segregation mandates.',
                keyPoints: ['Source segregation mandatory', 'Extended producer responsibility', 'Processing facility requirements']
              },
              {
                title: 'Plastic Waste Management Rules',
                description: 'Regulation of plastic production, use, and disposal with focus on alternatives.',
                keyPoints: ['Plastic bag thickness standards', 'Producer responsibility systems', 'Recycling infrastructure support']
              },
              {
                title: 'E-Waste Management Rules',
                description: 'Electronic waste collection, processing, and recycling through authorized channels.',
                keyPoints: ['Collection targets for producers', 'Authorized recycler networks', 'Consumer awareness programs']
              },
              {
                title: 'Hazardous Waste Rules',
                description: 'Safe handling and disposal of toxic and dangerous waste materials.',
                keyPoints: ['Licensed treatment facilities', 'Transportation regulations', 'Emergency response protocols']
              },
              {
                title: 'Bio-Medical Waste Rules',
                description: 'Healthcare waste management protecting public health and environment.',
                keyPoints: ['Color-coded segregation', 'Treatment before disposal', 'Training requirements']
              },
              {
                title: 'Construction Waste Rules',
                description: 'Recycling and reuse of construction and demolition materials.',
                keyPoints: ['On-site processing requirements', 'Recycled content mandates', 'Waste management plans']
              }
            ].map((policy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg border-t-4 border-orange-500 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-slate-800 mb-3">{policy.title}</h3>
                <p className="text-slate-600 mb-4 text-sm">{policy.description}</p>
                <ul className="space-y-2">
                  {policy.keyPoints.map((point, pointIndex) => (
                    <li key={pointIndex} className="text-xs text-slate-600 flex items-center">
                      <span className="w-2 h-2 rounded-full bg-orange-500 mr-2 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Swachh Bharat Mission Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Target className="h-16 w-16 mx-auto mb-6 text-green-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Swachh Bharat Mission</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <p className="text-lg text-slate-700 leading-relaxed">
                Swachh Bharat Mission represents India's largest cleanliness campaign, focusing on solid waste management, 
                toilet construction, and behavioral change nationwide. Urban component addresses municipal solid waste through 
                processing facilities, source segregation, and door-to-door collection systems in cities. Rural component 
                emphasizes toilet construction, waste management, and community participation in maintaining cleanliness 
                standards village-wide. The mission achieved significant progress including 100% toilet coverage, reduced 
                open defecation, and improved waste collection rates across states. Technology integration includes monitoring 
                systems, mobile applications, and citizen feedback mechanisms for program evaluation and improvement. 
                Public-private partnerships leverage expertise and resources while ensuring sustainable service delivery and 
                operational efficiency. Community mobilization creates awareness while encouraging citizen participation in 
                cleanliness activities.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-green-800 mb-6">Urban Component</h3>
              <ul className="space-y-3">
                {[
                  'Door-to-door waste collection in all cities',
                  'Source segregation at household level',
                  'Processing facilities for treatment',
                  'Public toilets and sanitation infrastructure',
                  'Citizen engagement and awareness programs'
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-green-800 mb-6">Rural Component</h3>
              <ul className="space-y-3">
                {[
                  'Individual household toilet construction',
                  'Community sanitary complexes',
                  'Solid and liquid waste management',
                  'Village cleanliness committees',
                  'Behavioral change communication'
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* State Initiatives Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <MapPin className="h-16 w-16 mx-auto mb-6 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">State Initiatives</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <p className="text-lg text-slate-700 leading-relaxed">
                State governments implement innovative waste management programs addressing local challenges while supporting 
                national policy objectives effectively. Maharashtra's plastic ban policy reduces single-use plastic consumption 
                while promoting alternatives and supporting recycling industry development. Kerala's Haritha Keralam Mission 
                focuses on waste segregation, composting, and resource recovery through community participation and local governance. 
                Tamil Nadu's comprehensive waste management policy emphasizes processing infrastructure, producer responsibility, 
                and circular economy principles statewide. Gujarat's waste-to-energy projects generate electricity while addressing 
                municipal solid waste disposal challenges in urban areas. Himachal Pradesh's plastic waste management model includes 
                collection systems, recycling facilities, and alternative material promotion programs. Rajasthan's rural waste 
                management initiatives focus on organic waste processing and community-based solutions.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                state: 'Maharashtra',
                initiative: 'Plastic Ban Policy',
                description: 'Comprehensive ban on single-use plastics with alternative promotion programs.',
                impact: '70% reduction in plastic bag usage'
              },
              {
                state: 'Kerala',
                initiative: 'Haritha Keralam Mission',
                description: 'Green Kerala mission focusing on waste segregation and organic processing.',
                impact: '80% waste segregation compliance'
              },
              {
                state: 'Tamil Nadu',
                initiative: 'Comprehensive Waste Policy',
                description: 'Integrated approach to waste management with circular economy focus.',
                impact: '60% processing capacity increase'
              },
              {
                state: 'Gujarat',
                initiative: 'Waste-to-Energy Projects',
                description: 'Converting municipal solid waste into electricity for urban areas.',
                impact: '500 MW renewable energy capacity'
              },
              {
                state: 'Himachal Pradesh',
                initiative: 'Plastic Management Model',
                description: 'Collection systems and recycling facilities for plastic waste.',
                impact: '90% plastic waste collection rate'
              },
              {
                state: 'Rajasthan',
                initiative: 'Rural Waste Management',
                description: 'Community-based organic waste processing in rural areas.',
                impact: '50% rural waste processing coverage'
              }
            ].map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-blue-800 mb-2">{initiative.state}</h3>
                <h4 className="text-md font-semibold text-slate-800 mb-3">{initiative.initiative}</h4>
                <p className="text-slate-600 mb-3 text-sm">{initiative.description}</p>
                <div className="bg-blue-50 rounded p-2">
                  <p className="text-xs font-semibold text-blue-800">Impact: {initiative.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Framework Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Shield className="h-16 w-16 mx-auto mb-6 text-red-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Regulatory Framework</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-red-50 rounded-lg p-8 shadow-lg">
              <p className="text-lg text-slate-700 leading-relaxed">
                Comprehensive regulatory framework ensures compliance, monitoring, and enforcement of waste management standards 
                across sectors and jurisdictions nationwide. Central Pollution Control Board provides technical guidelines, 
                monitoring protocols, and capacity building support for implementing agencies. State Pollution Control Boards 
                issue licenses, monitor compliance, and enforce regulations while supporting local governments and private operators. 
                Municipal corporations implement rules through collection systems, processing facilities, and citizen engagement 
                programs at the local level. Extended Producer Responsibility ensures manufacturers take responsibility for product 
                lifecycle including collection, recycling, and disposal costs. Penalties and incentives encourage compliance while 
                supporting innovation and investment in sustainable waste management technologies and infrastructure.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                level: 'Central Level',
                agencies: ['Ministry of Environment', 'Central Pollution Control Board', 'Bureau of Indian Standards'],
                responsibilities: ['Policy formulation', 'Technical guidelines', 'National monitoring']
              },
              {
                level: 'State Level',
                agencies: ['State Pollution Control Boards', 'Urban Development Departments', 'Rural Development Agencies'],
                responsibilities: ['License issuance', 'Compliance monitoring', 'Program implementation']
              },
              {
                level: 'Local Level',
                agencies: ['Municipal Corporations', 'Panchayati Raj Institutions', 'Waste Management Companies'],
                responsibilities: ['Service delivery', 'Citizen engagement', 'Local enforcement']
              },
              {
                level: 'Industry Level',
                agencies: ['Producer Responsibility Organizations', 'Recycling Industries', 'Waste Processing Companies'],
                responsibilities: ['Product stewardship', 'Material recovery', 'Technology innovation']
              }
            ].map((framework, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg border-t-4 border-red-500 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-red-800 mb-4">{framework.level}</h3>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-700 mb-2">Key Agencies</h4>
                  <ul className="space-y-1">
                    {framework.agencies.map((agency, agencyIndex) => (
                      <li key={agencyIndex} className="text-xs text-slate-600 flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 mr-2 flex-shrink-0" />
                        {agency}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-700 mb-2">Responsibilities</h4>
                  <ul className="space-y-1">
                    {framework.responsibilities.map((responsibility, responsibilityIndex) => (
                      <li key={responsibilityIndex} className="text-xs text-slate-600 flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 mr-2 flex-shrink-0" />
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Government;