
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-900 mb-6">
              About ConcertTickets.in: 
              <span className="text-primary"> Revolutionizing</span> the Event Experience
            </h2>
            
            <div className="prose prose-lg text-gray-700 font-roboto leading-relaxed">
              <p className="mb-6">
                ConcertTickets.in is dedicated to transforming the live entertainment industry in India 
                through the power of artificial intelligence. We understand the unique challenges faced 
                by event organizers, from optimizing ticket sales to ensuring a seamless and secure 
                experience for attendees.
              </p>
              
              <p className="mb-6">
                Our platform leverages advanced AI algorithms to provide data-driven insights, personalize 
                event recommendations, and detect fraudulent activities in real-time. We're not just selling 
                tickets; we're crafting the future of live entertainment.
              </p>
              
              <p className="mb-6">
                With a team of seasoned AI experts and passionate event enthusiasts, we are committed to 
                providing innovative and scalable solutions that empower organizers to thrive in a 
                competitive market. We're also deeply invested in understanding the Indian audience, 
                tailoring our AI models to reflect the nuances of local preferences and market dynamics.
              </p>
              
              <p>
                Our goal is to help you create unforgettable event experiences that resonate with your 
                audience, build lasting brand loyalty, and drive sustainable growth. We believe that AI 
                is the key to unlocking a new era of efficiency, engagement, and profitability in the 
                event industry.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="AI Technology and Live Events"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-poppins font-bold">AI-Powered</div>
                <div className="text-sm opacity-90">Innovation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
