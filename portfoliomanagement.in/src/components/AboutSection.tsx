
const AboutSection = () => {
  return (
    <section className="py-20 bg-backgroundLight">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-montserrat font-bold text-primary mb-8">
            Who We Are
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg font-roboto text-gray-700 leading-relaxed mb-6">
              Portfolio Management AI is dedicated to revolutionizing investment strategies through cutting-edge AI. 
              Our team of financial analysts and data scientists collaborates to develop tailored solutions that provide 
              predictive insights and enhance portfolio performance.
            </p>
            
            <p className="text-lg font-roboto text-gray-700 leading-relaxed mb-6">
              In a fast-paced market where quick and informed decisions are essential, our services stand out by merging 
              expertise in finance with the power of data analytics. We understand that each portfolio is unique; hence, 
              our personalized approach ensures that we maximize returns while mitigating potential risks.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 bg-backgroundDark rounded-lg">
              <div className="text-3xl font-bold text-accent mb-2">10+</div>
              <div className="text-primary font-montserrat font-semibold">Years of Experience</div>
            </div>
            <div className="text-center p-6 bg-backgroundDark rounded-lg">
              <div className="text-3xl font-bold text-accent mb-2">500+</div>
              <div className="text-primary font-montserrat font-semibold">Portfolios Managed</div>
            </div>
            <div className="text-center p-6 bg-backgroundDark rounded-lg">
              <div className="text-3xl font-bold text-accent mb-2">95%</div>
              <div className="text-primary font-montserrat font-semibold">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
