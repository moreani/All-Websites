import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Empowering India's IT Revolution</h2>
          
          <div className="space-y-6 text-text-dark">
            <p className="text-lg">
              In India's rapidly expanding IT landscape, staying competitive requires more than traditional approaches—it demands intelligent innovation. 
              IT Companies AI emerges as the definitive partner for IT businesses ready to harness artificial intelligence for operational excellence and market leadership.
            </p>
            
            <p>
              Our deep understanding of the Indian IT ecosystem, combined with cutting-edge AI technologies, positions us uniquely to address the specific challenges faced by software companies, 
              consulting firms, and technology service providers across Mumbai, Bangalore, Hyderabad, and beyond. We recognize that IT companies operate in a dynamic environment where project 
              complexities, client expectations, and market pressures demand sophisticated solutions.
            </p>
            
            <p>
              From startups developing their first applications to established firms managing global client portfolios, we deliver AI solutions that integrate seamlessly with existing workflows 
              while driving measurable improvements in efficiency, quality, and profitability. Our approach combines international AI standards with local market insights, ensuring solutions that 
              are both technologically advanced and culturally relevant.
            </p>
            
            <p>
              We believe that India's IT industry represents the future of global technology innovation, and our mission is to ensure that forward-thinking companies have access to the AI tools 
              and strategies needed to lead this transformation. Every solution we develop is crafted with the understanding that success in today's competitive landscape requires not just automation, 
              but intelligent automation that adapts, learns, and evolves with your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
