import { useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const portfolioItems = [
    {
      image: "https://pub-cdn.sider.ai/u/U0KAH964791/web-coder/684fd112060d7d85c7238b74/resource/c3ceaac4-0cab-4330-8efd-67bf9f23905f.jpg",
      title: "Surat Textile E-commerce Launch",
      category: "E-Commerce",
      results: "340% increase in online orders",
      industries: ["e-commerce", "retail"]
    },
    {
      image: "https://pub-cdn.sider.ai/u/U0KAH964791/web-coder/684fd112060d7d85c7238b74/resource/e3f3712a-ebcf-414a-a82b-cd58448b19da.jpg",
      title: "Chennai Healthcare Brand Awareness",
      category: "Healthcare",
      results: "250% increase in qualified leads",
      industries: ["healthcare"]
    },
    {
      image: "https://pub-cdn.sider.ai/u/U0KAH964791/web-coder/684fd112060d7d85c7238b74/resource/761e5589-d97d-4c06-bfc5-1a5378491bef.jpg",
      title: "Delhi EdTech Mobile App Growth",
      category: "Education",
      results: "400% increase in app downloads",
      industries: ["education", "technology"]
    },
    {
      image: "https://pub-cdn.sider.ai/u/U0KAH964791/web-coder/684fd112060d7d85c7238b74/resource/e771ca09-5bc4-472c-9224-52d162d7fd0c.jpg",
      title: "Bangalore Organic Food Brand",
      category: "F&B",
      results: "180% growth in market share",
      industries: ["food", "retail"]
    },
    {
      image: "https://pub-cdn.sider.ai/u/U0KAH964791/web-coder/684fd112060d7d85c7238b74/resource/522046a3-69dc-4714-932e-6e1f00160672.jpg",
      title: "Mumbai Financial Services Expansion",
      category: "Finance",
      results: "210% increase in client acquisition",
      industries: ["finance"]
    },
    {
      image: "https://pub-cdn.sider.ai/u/U0KAH964791/web-coder/684fd112060d7d85c7238b74/resource/0d69c922-a594-4419-85d5-8958780a3860.jpg",
      title: "Pune Real Estate Lead Generation",
      category: "Real Estate",
      results: "300% improvement in lead quality",
      industries: ["real-estate"]
    }
  ];

  const filterItems = activeTab === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.industries.includes(activeTab));

  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">Our Success Stories</h2>
          <p className="text-[#6B7280] text-lg">
            Explore how we've helped businesses across India achieve remarkable growth through strategic digital marketing.
          </p>
        </div>

        <div className="flex justify-center mb-10 overflow-x-auto">
          <div className="inline-flex bg-white rounded-lg p-1 shadow-sm">
            {['all', 'e-commerce', 'healthcare', 'finance', 'education', 'real-estate', 'food'].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 text-sm font-medium rounded-md whitespace-nowrap transition-colors ${
                  activeTab === tab 
                    ? 'bg-[#0F7DFF] text-white' 
                    : 'text-[#6B7280] hover:text-[#1F2937]'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'all' ? 'All Industries' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filterItems.map((item, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="text-sm font-medium text-[#0F7DFF] mb-2">{item.category}</div>
                <h3 className="text-xl font-bold text-[#1F2937] mb-3">{item.title}</h3>
                <div className="bg-[#EFF6FF] text-[#0B5DC7] px-3 py-1 rounded-full text-sm inline-block mb-4">
                  {item.results}
                </div>
                <button className="flex items-center text-[#0F7DFF] hover:text-[#0B5DC7] font-medium group">
                  View Case Study 
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-[#0B5DC7] to-[#4DA3FF] rounded-xl text-white">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3">
              <h3 className="text-2xl font-bold mb-3">Ready to Achieve Similar Results?</h3>
              <p className="text-white/90">
                Let's discuss how our digital marketing strategies can help your business grow in India's competitive market.
              </p>
            </div>
            <div className="md:col-span-2 text-center md:text-right">
              <button className="inline-flex items-center bg-white text-[#0B5DC7] hover:bg-opacity-90 px-6 py-3 rounded-lg font-medium">
                Request a Custom Strategy <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
