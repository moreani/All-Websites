import { Shield, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      image: "https://pub-cdn.sider.ai/u/U0KAH964791/web-coder/684fd112060d7d85c7238b74/resource/ef86bbcb-8516-46fa-ab66-d55d2af0e2af.jpg",
      name: "Rajesh Kumar",
      position: "CEO & Founder",
    },
    {
      image: "https://pub-cdn.sider.ai/u/U0KAH964791/web-coder/684fd112060d7d85c7238b74/resource/bb978c9f-e7f0-4346-b8f2-c2ccc5d99c2c.jpg",
      name: "Priya Sharma",
      position: "Marketing Director",
    },
    {
      image: "https://pub-cdn.sider.ai/u/U0KAH964791/web-coder/684fd112060d7d85c7238b74/resource/56095f72-d3b8-4765-9211-2aafed2bf456.jpg",
      name: "Vikram Singh",
      position: "Technical Lead",
    },
    {
      image: "https://pub-cdn.sider.ai/u/U0KAH964791/web-coder/684fd112060d7d85c7238b74/resource/8685d58f-54af-48cf-852a-efe69ab7a111.jpg",
      name: "Ananya Patel",
      position: "Creative Director",
    }
  ];

  const companyValues = [
    {
      icon: <Shield className="h-8 w-8 text-[#0F7DFF]" />,
      title: "Trust & Transparency",
      description: "We believe in complete transparency with our clients, providing regular reports and honest assessments."
    },
    {
      icon: <Users className="h-8 w-8 text-[#0F7DFF]" />,
      title: "Client Partnership",
      description: "We view ourselves as an extension of your team, committed to your business growth and success."
    },
    {
      icon: <Award className="h-8 w-8 text-[#0F7DFF]" />,
      title: "Excellence",
      description: "We continuously refine our strategies to deliver exceptional results that exceed expectations."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-[#0F7DFF]" />,
      title: "Innovation",
      description: "We stay ahead of digital trends to provide cutting-edge solutions that drive business growth."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">About OnlineMarketing.in</h2>
          <p className="text-[#6B7280] text-lg">
            India's premier digital marketing agency with expertise in navigating the unique challenges of the Indian digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-[#1F2937] mb-4">Our Story</h3>
            <p className="text-[#6B7280] mb-6">
              OnlineMarketing.in emerged from a profound understanding of India's digital transformation journey, founded by marketing professionals who witnessed firsthand the challenges faced by Indian businesses transitioning from traditional marketing approaches to digital-first strategies.
            </p>
            <p className="text-[#6B7280] mb-6">
              Our story begins in Mumbai's bustling business district, where our founders recognized the gap between global digital marketing practices and the unique requirements of the Indian market ecosystem.
            </p>
            <p className="text-[#6B7280]">
              Over the years, we've developed deep expertise in navigating India's complex digital landscape, from understanding the nuanced consumer behaviors across different states and regions to mastering the art of multilingual marketing that speaks authentically to diverse Indian audiences.
            </p>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://pub-cdn.sider.ai/u/U0KAH964791/web-coder/684fd112060d7d85c7238b74/resource/bfc3435b-aa0e-4883-8a8a-cb6f38968ebc.jpg" 
                alt="OnlineMarketing.in Office" 
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="absolute top-10 -right-5 w-32 h-32 bg-[#FF6B35] rounded-lg z-0"></div>
            <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-[#0F7DFF] rounded-lg z-0"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {[
            { number: "10+", label: "Years of Experience" },
            { number: "250+", label: "Successful Campaigns" },
            { number: "50+", label: "Industry Experts" },
            { number: "20+", label: "Industry Awards" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-[#F5F5F5] rounded-lg">
              <div className="text-4xl font-bold text-[#0F7DFF] mb-2">{stat.number}</div>
              <div className="text-[#6B7280]">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-[#1F2937] mb-10">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="mb-4">{value.icon}</div>
                <h4 className="text-xl font-semibold text-[#1F2937] mb-2">{value.title}</h4>
                <p className="text-[#6B7280]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-center text-[#1F2937] mb-10">Meet Our Leadership Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 relative mx-auto w-48 h-48 overflow-hidden rounded-full">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold text-[#1F2937]">{member.name}</h4>
                <p className="text-[#6B7280]">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
