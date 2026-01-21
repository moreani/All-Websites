
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-gray-900 mb-6">
              The Science of{' '}
              <span className="text-marriageBlue">Compatibility</span>
            </h2>
            
            <div className="prose prose-lg text-gray-700 leading-relaxed">
              <p className="mb-6">
                MarriageAI was born from a desire to bring scientific rigor and technological innovation to the age-old 
                tradition of matchmaking. Founded by a team of AI experts and relationship psychologists, we recognized 
                the limitations of conventional methods and set out to create a more effective solution.
              </p>
              
              <p className="mb-6">
                Our proprietary algorithms analyze a comprehensive range of factors, including personality traits, values, 
                interests, and lifestyle preferences, to identify highly compatible matches. We understand the cultural 
                nuances and family values that are integral to Indian marriages, and our platform is designed to respect 
                and incorporate these traditions.
              </p>
              
              <p className="mb-6">
                Our mission is to empower individuals to make informed decisions about their future, fostering relationships 
                that are built on genuine connection and lasting happiness. MarriageAI is not just a matchmaking service; 
                it is a commitment to building stronger, more fulfilling unions in the digital age.
              </p>
            </div>
          </div>
          
          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="AI Algorithm Data Analysis"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-marriageBlue/20 to-marriageRed/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
