import React from 'react';
import { Brain, Heart, Globe, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-literata font-bold text-4xl lg:text-5xl text-text-dark mb-6">
            Revolutionizing How India{' '}
            <span className="text-primary">Discovers Great Books</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Main Text */}
          <div className="space-y-8">
            <div className="prose prose-lg">
              <p className="text-text-light leading-relaxed">
                At OnlineBooks AI, we believe every reader deserves to find their perfect book match. 
                Our revolutionary artificial intelligence platform transforms the overwhelming world of 
                literature into a personalized, intuitive discovery experience that understands not just 
                what you've read, but how you feel, what you're seeking, and where your reading journey should lead next.
              </p>
              
              <p className="text-text-light leading-relaxed">
                Our sophisticated AI engine goes far beyond traditional recommendation systems. While others 
                simply suggest "books like this," we analyze your reading patterns, emotional responses, 
                preferred themes, writing styles, and even your current life circumstances to create deeply 
                personal recommendations that resonate with your unique literary soul.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              alt="AI-powered reading experience"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/10 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Brain className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-literata font-semibold text-xl text-text-dark mb-3">
              AI Intelligence
            </h3>
            <p className="text-text-light">
              Advanced machine learning that understands your reading preferences at a deep level.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-literata font-semibold text-xl text-text-dark mb-3">
              Emotional Connection
            </h3>
            <p className="text-text-light">
              Reading recommendations that match your mood and emotional needs.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-literata font-semibold text-xl text-text-dark mb-3">
              Global Literature
            </h3>
            <p className="text-text-light">
              Discover hidden gems from global literature tailored to Indian readers.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-literata font-semibold text-xl text-text-dark mb-3">
              Personalized Journey
            </h3>
            <p className="text-text-light">
              Curated reading paths that evolve with your interests and growth.
            </p>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-literata font-bold text-2xl lg:text-3xl text-text-dark mb-6">
                Your Intelligent Reading Companion
              </h3>
              <p className="text-text-light leading-relaxed mb-6">
                Born from the recognition that India's diverse reading community needs more than generic 
                bestseller lists, OnlineBooks AI serves passionate readers across the nation—from literature 
                enthusiasts in metropolitan cities to genre lovers in growing towns.
              </p>
              <p className="text-text-light leading-relaxed">
                We're not just another book recommendation service; we're your intelligent reading companion. 
                Our AI learns from your interactions, understands your evolving tastes, and adapts to your 
                changing moods and interests.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Reading community"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;