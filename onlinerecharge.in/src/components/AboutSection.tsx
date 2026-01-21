
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 animate-fade-in-up">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&auto=format"
                alt="AI Team Collaboration in India"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-green-600/10"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8 animate-slide-in-right">
            <div className="space-y-4">
              <h2 className="text-4xl font-montserrat font-bold text-gray-900">
                About OnlineRecharge.in: 
                <span className="primary-color"> Pioneering AI Automation</span> in India
              </h2>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  OnlineRecharge.in is at the forefront of AI-driven automation, empowering businesses across India to achieve unprecedented levels of efficiency and growth. We understand the unique challenges and opportunities presented by the Indian market, and we've tailored our solutions to address these specific needs.
                </p>
                
                <p>
                  Our team of expert AI engineers and business strategists works closely with our clients to identify areas where automation can have the greatest impact, from streamlining customer service to optimizing supply chain management. We're not just implementing technology; we're building lasting partnerships and helping businesses realize their full potential in the digital age.
                </p>
                
                <p>
                  We believe in a human-centered approach to AI. Our solutions are designed to augment human capabilities, not replace them. We focus on automating repetitive tasks, freeing up your employees to focus on more strategic and creative work. We are committed to ethical and responsible AI development, ensuring that our solutions are fair, transparent, and aligned with your business values.
                </p>
                
                <p>
                  Our mission is to democratize access to AI automation, making it accessible and affordable for businesses of all sizes. We offer a range of flexible deployment options, from cloud-based solutions to on-premise installations, ensuring that you can choose the option that best fits your needs and budget.
                </p>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold primary-color">500+</div>
                <div className="text-sm text-gray-600 mt-1">Businesses Automated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold accent-color">95%</div>
                <div className="text-sm text-gray-600 mt-1">Efficiency Improvement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
