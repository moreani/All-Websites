import React from 'react';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: "The Science Behind AI-Powered Nutrition Planning",
      excerpt: "Discover how artificial intelligence is revolutionizing personalized nutrition by analyzing your unique metabolic profile and dietary preferences.",
      category: "Technology",
      readTime: "5 min read",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "10 Evidence-Based Tips for Sustainable Weight Loss",
      excerpt: "Learn the proven strategies that lead to long-term weight management success, backed by the latest research in nutrition science.",
      category: "Nutrition",
      readTime: "7 min read",
      date: "March 12, 2024",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Understanding Your Emotional Relationship with Food",
      excerpt: "Explore the psychological aspects of eating and learn how to develop a healthier relationship with food for lasting weight loss success.",
      category: "Psychology",
      readTime: "6 min read",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd78877?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Meal Prep Mastery: Your Guide to Effortless Healthy Eating",
      excerpt: "Master the art of meal preparation with our comprehensive guide, including time-saving tips and delicious recipes for the busy lifestyle.",
      category: "Lifestyle",
      readTime: "8 min read",
      date: "March 8, 2024",
      image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "The Role of Sleep in Weight Management",
      excerpt: "Uncover the crucial connection between quality sleep and weight loss, plus practical tips for optimizing your sleep for better health outcomes.",
      category: "Health",
      readTime: "5 min read",
      date: "March 5, 2024",
      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Building Healthy Habits That Actually Stick",
      excerpt: "Learn the psychology behind habit formation and discover practical strategies to make healthy choices automatic and sustainable.",
      category: "Mindset",
      readTime: "6 min read",
      date: "March 3, 2024",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text mb-4">
            Insights & Resources
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Expert insights, tips, and scientific research to support your weight loss journey
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10 max-w-4xl">
              <div className="flex items-center mb-4">
                <BookOpen className="w-6 h-6 mr-2" />
                <span className="text-accent font-semibold">Featured Article</span>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-heading font-bold mb-4">
                How AI is Transforming Personalized Weight Loss
              </h3>
              
              <p className="text-lg text-white/90 mb-6 max-w-2xl">
                Explore the cutting-edge technology behind our platform and learn how artificial intelligence is making personalized weight loss more effective and sustainable than ever before.
              </p>
              
              <button className="bg-accent hover:bg-accent-dark text-text font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center">
                Read Full Article
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-heading font-semibold text-text mb-3 line-clamp-2 hover:text-primary transition-colors duration-200">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className="text-primary hover:text-primary-dark font-semibold text-sm transition-colors duration-200 flex items-center">
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-background rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-heading font-semibold text-text mb-4">
              Want More Personalized Content?
            </h3>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter for weekly tips, recipes, and insights tailored to your weight loss journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-full transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;