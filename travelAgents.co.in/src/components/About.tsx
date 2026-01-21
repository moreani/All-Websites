const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-light-bg">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-primary mb-8 text-center">
            Built for the Ambition of Indian Travel.
          </h2>
          
          <div className="space-y-6 text-lg">
            <p>
              The Indian travel landscape is a paradox of immense opportunity and fierce complexity. Your clients demand hyper-personalized experiences, instant responses, and the best possible value. Meanwhile, your team is burdened with manual tasks: juggling vendor communications, managing intricate bookings, and processing endless paperwork. This operational drag doesn't just limit your efficiency; it caps your growth.
            </p>
            
            <p>
              TravelAgents AI was born from this challenge. Founded by a team of veteran travel industry experts and AI engineers, we understand the unique pressures and possibilities of the Indian market. We saw a critical gap between the technology available and the technology needed.
            </p>
            
            <p className="relative">
              <span className="absolute -left-4 top-0 h-full w-1 bg-accent rounded-full hidden md:block"></span>
              Our vision is not to replace the essential human touch of a great travel agent but to amplify it. We provide the intelligent engine that handles the repetitive, so your experts can focus on the exceptional—crafting unforgettable journeys and building lasting client relationships that drive your business forward.
            </p>
            
            <p className="font-medium text-primary">
              We are your strategic partner in transforming operational hurdles into a powerful competitive advantage.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "60%", label: "Reduction in Manual Tasks" },
              { number: "3.2x", label: "Increase in Client Capacity" },
              { number: "99%", label: "Accuracy in Documentation" },
              { number: "24/7", label: "Customer Support" }
            ].map((stat, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl md:text-3xl font-bold text-accent font-poppins">
                  {stat.number}
                </div>
                <div className="text-sm text-text-light mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
