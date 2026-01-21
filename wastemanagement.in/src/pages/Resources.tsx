import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Download, BarChart3, Calculator } from 'lucide-react';
import Hero from '../components/Hero';

const Resources = () => {
  return (
    <div className="min-h-screen">
      <title>Waste Management Resources - Educational Materials and Downloads</title>
      
      <Hero
        title="Comprehensive Educational Resources"
        subtitle="Access guides, toolkits, and materials supporting waste management education and implementation."
        backgroundImage="https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg"
      />

      {/* Educational Guides Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <BookOpen className="h-16 w-16 mx-auto mb-6 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Educational Guides</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-blue-50 rounded-lg p-8 shadow-lg">
              <p className="text-lg text-slate-700 leading-relaxed">
                Comprehensive educational guides provide detailed information supporting waste management implementation 
                in households, schools, and communities effectively. Home composting guides include step-by-step instructions, 
                troubleshooting tips, and maintenance schedules for successful organic waste processing. Recycling identification 
                guides help citizens recognize recyclable materials while understanding proper preparation methods for different 
                material types. Waste reduction checklists provide actionable items for households and businesses seeking to 
                minimize waste generation through daily practices. School curriculum resources support teachers in environmental 
                education while engaging students in hands-on learning activities. Community program toolkits include planning 
                guides, resource lists, and implementation strategies for local initiatives. Business waste audit templates 
                help organizations assess current practices while developing improvement strategies.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Home Composting Guide',
                description: 'Complete step-by-step instructions for setting up and maintaining home composting systems.',
                pages: '24 pages',
                format: 'PDF',
                topics: ['Bin setup', 'Material ratios', 'Troubleshooting', 'Maintenance schedule']
              },
              {
                title: 'Recycling Identification Guide',
                description: 'Visual guide to recognizing and properly preparing recyclable materials.',
                pages: '16 pages',
                format: 'PDF',
                topics: ['Plastic symbols', 'Paper types', 'Metal identification', 'Glass preparation']
              },
              {
                title: 'Waste Reduction Checklist',
                description: 'Actionable checklist for households and businesses to minimize waste generation.',
                pages: '8 pages',
                format: 'PDF',
                topics: ['Kitchen practices', 'Shopping habits', 'Office procedures', 'Maintenance tips']
              },
              {
                title: 'School Curriculum Resources',
                description: 'Educational materials and activities for environmental education in schools.',
                pages: '32 pages',
                format: 'PDF',
                topics: ['Lesson plans', 'Activities', 'Assessment tools', 'Extension projects']
              },
              {
                title: 'Community Program Toolkit',
                description: 'Comprehensive toolkit for planning and implementing community waste management programs.',
                pages: '40 pages',
                format: 'PDF',
                topics: ['Program planning', 'Resource lists', 'Implementation guides', 'Evaluation methods']
              },
              {
                title: 'Business Waste Audit Template',
                description: 'Templates and guidelines for conducting waste audits in business environments.',
                pages: '12 pages',
                format: 'Excel/PDF',
                topics: ['Audit procedures', 'Data collection', 'Analysis methods', 'Improvement planning']
              }
            ].map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg border-t-4 border-blue-500 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-slate-800 mb-3">{guide.title}</h3>
                <p className="text-slate-600 mb-4 text-sm">{guide.description}</p>
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-slate-500">{guide.pages}</span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{guide.format}</span>
                  </div>
                  <div className="space-y-1">
                    {guide.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="text-xs text-slate-600 flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2 flex-shrink-0" />
                        {topic}
                      </div>
                    ))}
                  </div>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 text-sm">
                  Download Guide
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Materials Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Download className="h-16 w-16 mx-auto mb-6 text-green-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Downloadable Materials</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <p className="text-lg text-slate-700 leading-relaxed">
                Free downloadable materials support education and awareness campaigns while providing practical tools for 
                waste management implementation. Printable posters and infographics communicate key messages while supporting 
                community education and awareness initiatives effectively. Segregation labels and bin markers help households 
                and organizations implement proper waste sorting systems consistently. Activity sheets and games engage children 
                in environmental learning while teaching sustainable practices through interactive methods. Presentation templates 
                support educators and advocates in delivering effective waste management training and awareness programs. 
                Checklists and tracking sheets help individuals and organizations monitor progress while maintaining consistent 
                sustainable practices. Newsletter templates enable communities to share information while building engagement 
                around environmental initiatives.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: 'Posters & Infographics',
                items: ['Segregation poster', 'Composting infographic', 'Recycling symbols', 'Waste hierarchy'],
                format: 'PNG/PDF',
                count: '12 items'
              },
              {
                category: 'Labels & Markers',
                items: ['Bin labels', 'Segregation stickers', 'Hazard warnings', 'Collection schedules'],
                format: 'PDF',
                count: '20 items'
              },
              {
                category: 'Activity Sheets',
                items: ['Coloring pages', 'Word puzzles', 'Memory games', 'Quiz sheets'],
                format: 'PDF',
                count: '16 items'
              },
              {
                category: 'Templates',
                items: ['Presentations', 'Newsletters', 'Checklists', 'Tracking sheets'],
                format: 'PPT/Word',
                count: '8 items'
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-green-800 mb-4">{category.category}</h3>
                <div className="space-y-2 mb-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="text-sm text-slate-600 flex items-center">
                      <span className="w-2 h-2 rounded-full bg-green-400 mr-2 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs text-slate-500">{category.count}</span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">{category.format}</span>
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 text-sm">
                  Download Pack
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <BarChart3 className="h-16 w-16 mx-auto mb-6 text-purple-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Research & Statistics</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-purple-50 rounded-lg p-8 shadow-lg">
              <p className="text-lg text-slate-700 leading-relaxed">
                Current research and statistics provide evidence-based information supporting policy development, program 
                planning, and public awareness campaigns effectively. Waste generation data by state and city helps communities 
                understand local challenges while benchmarking against national averages. Environmental impact studies demonstrate 
                consequences of poor waste management while highlighting benefits of sustainable practices. Technology assessment 
                reports evaluate processing options while supporting decision-making for infrastructure investment and program 
                development. International best practices provide lessons learned while inspiring innovative approaches to local 
                waste management challenges. Economic analysis demonstrates cost-effectiveness of different management approaches 
                while supporting business cases for sustainable investments. Success stories showcase effective programs while 
                providing models for replication in similar contexts.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                report: 'Waste Generation Data by State',
                description: 'Comprehensive data on waste generation patterns across Indian states and cities.',
                highlights: ['62M tonnes annual generation', 'State-wise breakdown', 'Urban vs rural comparison', 'Growth trends']
              },
              {
                report: 'Environmental Impact Studies',
                description: 'Research on environmental consequences of different waste management practices.',
                highlights: ['Air quality impact', 'Water contamination', 'Soil degradation', 'Climate effects']
              },
              {
                report: 'Technology Assessment Report',
                description: 'Evaluation of waste processing technologies suitable for Indian conditions.',
                highlights: ['Composting methods', 'Recycling technologies', 'Waste-to-energy', 'Cost analysis']
              },
              {
                report: 'International Best Practices',
                description: 'Global case studies and lessons learned from successful waste management programs.',
                highlights: ['European models', 'Asian innovations', 'Developing country solutions', 'Policy frameworks']
              },
              {
                report: 'Economic Analysis',
                description: 'Cost-benefit analysis of different waste management approaches and investments.',
                highlights: ['Investment requirements', 'Operating costs', 'Revenue potential', 'Job creation']
              },
              {
                report: 'Success Stories Collection',
                description: 'Documented case studies of successful waste management initiatives in India.',
                highlights: ['Community programs', 'City transformations', 'Business innovations', 'Policy impacts']
              }
            ].map((report, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg border-t-4 border-purple-500 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-purple-800 mb-3">{report.report}</h3>
                <p className="text-slate-600 mb-4 text-sm">{report.description}</p>
                <div className="space-y-2 mb-4">
                  {report.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="text-xs text-slate-600 flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2 flex-shrink-0" />
                      {highlight}
                    </div>
                  ))}
                </div>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 text-sm">
                  Access Report
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tools Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Calculator className="h-16 w-16 mx-auto mb-6 text-orange-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Interactive Tools</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <p className="text-lg text-slate-700 leading-relaxed">
                Interactive online tools engage users in waste management learning while providing personalized recommendations 
                and feedback mechanisms. Carbon footprint calculators demonstrate environmental impact of waste generation while 
                motivating behavior change through quantified results. Waste audit tools help households and businesses assess 
                current practices while identifying improvement opportunities and priorities. Recycling locators connect users 
                with collection points and services while supporting participation in recycling programs. Composting calculators 
                estimate volume reduction and compost production while encouraging home composting adoption. Educational quizzes 
                test knowledge while reinforcing key concepts through interactive learning experiences. Progress tracking tools 
                monitor waste reduction while celebrating achievements and maintaining motivation for continued improvement.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                tool: 'Carbon Footprint Calculator',
                description: 'Calculate environmental impact of your waste generation and reduction efforts.',
                features: ['Household input', 'Impact visualization', 'Reduction suggestions', 'Annual projections']
              },
              {
                tool: 'Waste Audit Tool',
                description: 'Digital tool to assess current waste management practices and identify improvements.',
                features: ['Practice assessment', 'Improvement opportunities', 'Priority ranking', 'Action planning']
              },
              {
                tool: 'Recycling Locator',
                description: 'Find nearby recycling centers and collection points for different material types.',
                features: ['GPS integration', 'Material filtering', 'Facility information', 'Operating hours']
              },
              {
                tool: 'Composting Calculator',
                description: 'Estimate compost production and waste volume reduction from organic materials.',
                features: ['Volume estimation', 'Nutrient analysis', 'Timeline prediction', 'Tips integration']
              },
              {
                tool: 'Educational Quiz System',
                description: 'Interactive quizzes to test and improve waste management knowledge.',
                features: ['Multiple categories', 'Instant feedback', 'Progress tracking', 'Certificate generation']
              },
              {
                tool: 'Progress Tracker',
                description: 'Monitor waste reduction progress and celebrate environmental achievements.',
                features: ['Goal setting', 'Progress visualization', 'Achievement badges', 'Social sharing']
              }
            ].map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-orange-500 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-orange-800 mb-3">{tool.tool}</h3>
                <p className="text-slate-600 mb-4 text-sm">{tool.description}</p>
                <div className="space-y-2 mb-4">
                  {tool.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-xs text-slate-600 flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 text-sm">
                  Launch Tool
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Resources;