
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=500&fit=crop" 
              alt="AI Algorithms and Data Analytics"
              className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
            />
          </div>
          
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-6">
              The <span className="text-primary">AI-Powered Future</span> of BPO is Here
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                BPO Jobs is at the forefront of AI innovation for the Business Process Outsourcing industry in India. We're not just another tech vendor; we're a team of seasoned BPO experts and AI specialists who deeply understand the nuances of the Indian market.
              </p>
              <p>
                Our mission is to empower BPOs with AI-driven solutions that automate repetitive tasks, optimize workflows, and unlock actionable insights from vast datasets. We leverage cutting-edge technologies like Natural Language Processing (NLP), Machine Learning (ML), and Robotic Process Automation (RPA) to transform traditional BPO processes.
              </p>
              <p>
                Our solutions are designed to be seamlessly integrated into existing systems, minimizing disruption and maximizing ROI. We pride ourselves on our commitment to providing customized solutions that address the specific needs of each client.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-600">BPO Clients</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-accent mb-2">80%</div>
                <div className="text-gray-600">Cost Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
