import React from 'react';
import { Shield, Target, Users } from 'lucide-react';

const ContentSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-primary">
            Why Choose InflationAI?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-secondary">
            Is inflation squeezing your business? InflationAI empowers Indian businesses to combat rising costs and economic uncertainty through intelligent financial process automation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center group">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
              <Shield className="text-primary group-hover:scale-110 transition-transform duration-300" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 font-primary">Secure & Reliable</h3>
            <p className="text-gray-600 font-secondary">
              Built with enterprise-grade security and designed specifically for the Indian market with GST compliance and regulatory adherence.
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
              <Target className="text-primary group-hover:scale-110 transition-transform duration-300" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 font-primary">Precision Automation</h3>
            <p className="text-gray-600 font-secondary">
              Leverage cutting-edge AI to streamline accounts payable, budgeting, forecasting, and other critical financial operations.
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
              <Users className="text-primary group-hover:scale-110 transition-transform duration-300" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 font-primary">Expert Support</h3>
            <p className="text-gray-600 font-secondary">
              Our team of experts will work closely with you to identify automation opportunities and ensure successful implementation.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed font-secondary">
              We leverage cutting-edge AI to streamline your accounts payable, budgeting, forecasting, and other critical financial operations, unlocking significant cost savings and boosting efficiency. Our solutions are specifically designed to integrate seamlessly with your existing systems and address the unique challenges of the Indian market. Reclaim control of your finances and build a more resilient, profitable future with InflationAI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;