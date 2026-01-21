import React from 'react';
import { Target, Shield, Globe, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins text-gray-900 mb-6">
            Transforming Trading with AI Intelligence
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-up">
            <p className="text-lg font-roboto text-gray-700 mb-6 leading-relaxed">
              In an era where data drives decision-making, <strong>Online Trading Insights</strong> empowers 
              traders by transforming complex datasets into actionable business intelligence. Our AI-powered 
              platform analyzes both technical and fundamental data thoroughly, helping users derive insights 
              that are not only timely but transformative.
            </p>
            
            <p className="text-lg font-roboto text-gray-700 mb-6 leading-relaxed">
              Harnessing the power of advanced analytics, our tools enable traders of all levels to interpret 
              market movements with precision. From automated chart pattern recognition to in-depth fundamental 
              data interpretation, we cater to a comprehensive trading experience focused on improving 
              profitability and reducing risks.
            </p>
            
            <p className="text-lg font-roboto text-gray-700 leading-relaxed">
              The platform is designed with Indian traders in mind, providing local insights combined with 
              global market perspectives. As trading becomes increasingly data-driven, Online Trading Insights 
              stands at the forefront, ready to equip users with the tools necessary for success in a rapidly 
              changing financial landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold font-poppins text-gray-900 mb-2">Precision</h3>
              <p className="text-sm font-roboto text-gray-600">
                AI-driven accuracy in market predictions
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold font-poppins text-gray-900 mb-2">Security</h3>
              <p className="text-sm font-roboto text-gray-600">
                Risk management through intelligent analysis
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold font-poppins text-gray-900 mb-2">Global Reach</h3>
              <p className="text-sm font-roboto text-gray-600">
                Local insights with international perspectives
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold font-poppins text-gray-900 mb-2">Community</h3>
              <p className="text-sm font-roboto text-gray-600">
                Supporting traders of all experience levels
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;