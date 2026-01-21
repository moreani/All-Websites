
const AboutSection = () => {
  return (
    <section className="py-20 bg-brand-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-roboto text-primary mb-6">
              About Digital Media Marketing
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80"
                alt="Digital Marketing Analytics"
                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
            </div>
            
            <div className="animate-slide-in-right">
              <p className="text-lg font-lato text-gray-700 leading-relaxed mb-6">
                At <strong className="text-primary">Digital Media Marketing</strong>, we recognize the unique challenges facing businesses in the digital landscape. Our mission is to provide cutting-edge AI software that empowers clients to harness the full potential of their digital marketing initiatives.
              </p>
              
              <p className="text-lg font-lato text-gray-700 leading-relaxed mb-6">
                With a team of seasoned developers and marketing strategists, we build tools that not only automate processes but also provide insightful data analytics, enhancing decision-making and driving growth.
              </p>
              
              <p className="text-lg font-lato text-gray-700 leading-relaxed">
                Our commitment to innovation places us at the <strong className="text-accent">forefront of digital marketing solutions in India</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
