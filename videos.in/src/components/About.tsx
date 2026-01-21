
const About = () => {
  return (
    <section id="about" className="py-20 bg-brand-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-800 mb-8">
            About <span className="text-primary">Videos</span>
          </h2>
          
          <div className="text-lg font-roboto text-gray-600 leading-relaxed space-y-6">
            <p>
              Videos exists at the intersection of creativity and technology, harnessing the power of AI to revolutionize video production. Our mission is to empower businesses in India to produce compelling video content swiftly and efficiently.
            </p>
            
            <p>
              By utilizing state-of-the-art AI algorithms, we enable companies to enhance creativity, streamline workflows, and deliver captivating narratives that resonate with their audiences.
            </p>
            
            <p>
              In a digital age where video is king, we ensure our clients stay ahead of the curve, turning ideas into high-quality visual stories.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
