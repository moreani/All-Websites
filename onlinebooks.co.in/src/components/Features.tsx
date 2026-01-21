import React from 'react';
import { User, Palette, Route, Search, BookOpen, TrendingUp } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: User,
      title: "Personalized Reading Assistant",
      description: "Our advanced AI learns from every book you rate, review, and interact with, building a comprehensive understanding of your literary DNA. Unlike simple algorithms that only consider genres, our system analyzes narrative styles, character development preferences, thematic interests, and even your reading speed to create a living profile that evolves with your tastes.",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Palette,
      title: "Mood-Based Book Discovery",
      description: "Transform your emotional state into literary gold with our groundbreaking mood-based recommendation engine. Whether you're feeling adventurous, contemplative, romantic, or need an uplifting escape, our AI understands the emotional landscape of thousands of books and matches them to your current feelings.",
      color: "bg-accent/10 text-accent"
    },
    {
      icon: Route,
      title: "Intelligent Reading Journey Curation",
      description: "Discover the power of connected reading with our journey curation feature. Our AI identifies thematic connections, historical progressions, and intellectual pathways across different books, creating meaningful reading sequences that build upon each other for enhanced understanding and enjoyment.",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Search,
      title: "Smart Discovery Engine",
      description: "Break free from the echo chamber of popular recommendations with our sophisticated discovery engine. Our AI actively seeks out hidden gems, emerging authors, and books that align with your interests but exist outside mainstream attention, ensuring your reading experience remains fresh and surprising.",
      color: "bg-accent/10 text-accent"
    }
  ];

  return (
    <section id="features" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-literata font-bold text-4xl lg:text-5xl text-text-dark mb-6">
            Intelligent Features That{' '}
            <span className="text-primary">Transform Your Reading Experience</span>
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto leading-relaxed">
            Discover how our advanced AI technology revolutionizes the way you find, explore, 
            and enjoy books through sophisticated personalization and intelligent curation.
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-8"></div>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-light-gray rounded-3xl p-8 lg:p-12 hover:shadow-2xl transition-all duration-500 hover:bg-white"
            >
              {/* Icon */}
              <div className={`w-20 h-20 rounded-2xl ${feature.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-10 h-10" />
              </div>

              {/* Content */}
              <h3 className="font-literata font-bold text-2xl lg:text-3xl text-text-dark mb-6">
                {feature.title}
              </h3>
              <p className="text-text-light leading-relaxed text-lg">
                {feature.description}
              </p>

              {/* Decorative Element */}
              <div className={`absolute -top-2 -right-2 w-16 h-16 ${feature.color.includes('primary') ? 'bg-primary/5' : 'bg-accent/5'} rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-primary to-purple-600 rounded-3xl p-8 lg:p-16 text-white">
          <div className="text-center mb-12">
            <h3 className="font-literata font-bold text-3xl lg:text-4xl mb-4">
              Trusted by Passionate Readers Across India
            </h3>
            <p className="text-xl text-white/90">
              Join thousands of readers who have discovered their perfect book matches
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <BookOpen className="w-8 h-8 text-accent" />
              </div>
              <div className="font-bold text-3xl lg:text-4xl font-literata mb-2">50K+</div>
              <div className="text-white/80">Books Analyzed</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <User className="w-8 h-8 text-accent" />
              </div>
              <div className="font-bold text-3xl lg:text-4xl font-literata mb-2">10K+</div>
              <div className="text-white/80">Active Readers</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              <div className="font-bold text-3xl lg:text-4xl font-literata mb-2">95%</div>
              <div className="text-white/80">Match Accuracy</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Palette className="w-8 h-8 text-accent" />
              </div>
              <div className="font-bold text-3xl lg:text-4xl font-literata mb-2">200+</div>
              <div className="text-white/80">Mood Categories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;