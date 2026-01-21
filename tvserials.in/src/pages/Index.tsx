
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BarChart3, Brain, TrendingUp, Users, Zap, Play, Star, Globe } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Play className="w-4 h-4 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">TVSerials.in</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#analytics" className="text-gray-300 hover:text-white transition-colors">Analytics</a>
            <a href="#insights" className="text-gray-300 hover:text-white transition-colors">Insights</a>
          </div>
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
            Get Started
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">
          AI-Powered Entertainment Analytics
        </Badge>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Unlock the Power of
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> TV Analytics</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Harness cutting-edge AI to analyze TV serials, predict viewer trends, and discover content insights that drive engagement and revenue.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
            Start Free Trial <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500/10">
            Watch Demo
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Powered by Advanced AI</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Our platform combines machine learning, natural language processing, and predictive analytics to revolutionize entertainment insights.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <Brain className="w-10 h-10 text-purple-400 mb-2" />
              <CardTitle className="text-white">Content Analysis</CardTitle>
              <CardDescription className="text-gray-300">
                AI-powered analysis of storylines, character development, and narrative structures across TV serials.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <TrendingUp className="w-10 h-10 text-purple-400 mb-2" />
              <CardTitle className="text-white">Trend Prediction</CardTitle>
              <CardDescription className="text-gray-300">
                Predict viewer preferences and market trends using advanced machine learning algorithms.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <BarChart3 className="w-10 h-10 text-purple-400 mb-2" />
              <CardTitle className="text-white">Audience Insights</CardTitle>
              <CardDescription className="text-gray-300">
                Deep dive into audience demographics, engagement patterns, and viewing behaviors.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <Users className="w-10 h-10 text-purple-400 mb-2" />
              <CardTitle className="text-white">Social Sentiment</CardTitle>
              <CardDescription className="text-gray-300">
                Monitor social media buzz and sentiment analysis for TV shows and characters in real-time.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <Zap className="w-10 h-10 text-purple-400 mb-2" />
              <CardTitle className="text-white">Performance Metrics</CardTitle>
              <CardDescription className="text-gray-300">
                Track viewership, engagement rates, and ROI with comprehensive performance dashboards.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <Globe className="w-10 h-10 text-purple-400 mb-2" />
              <CardTitle className="text-white">Global Markets</CardTitle>
              <CardDescription className="text-gray-300">
                Analyze content performance across different regions and cultural markets worldwide.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Analytics Dashboard Preview */}
      <section id="analytics" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Real-Time Analytics Dashboard</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Get instant insights with our intuitive dashboard that transforms complex data into actionable intelligence.
          </p>
        </div>
        
        <Card className="bg-slate-800/30 border-slate-700 backdrop-blur-sm p-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">2.3M+</div>
              <div className="text-gray-300">Episodes Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">95%</div>
              <div className="text-gray-300">Prediction Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">150+</div>
              <div className="text-gray-300">Content Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-gray-300">Real-time Monitoring</div>
            </div>
          </div>
          
          <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
            <h3 className="text-xl font-semibold text-white mb-4">Top Performing Serials This Week</h3>
            <div className="space-y-3">
              {[
                { name: "The Crown Chronicles", rating: 8.9, trend: "+12%" },
                { name: "Mumbai Mysteries", rating: 8.7, trend: "+8%" },
                { name: "Tech Titans", rating: 8.5, trend: "+15%" },
              ].map((serial, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-white font-medium">{serial.name}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-300">{serial.rating}/10</span>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      {serial.trend}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-purple-500/30 backdrop-blur-sm">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Content Strategy?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join leading entertainment companies using AI to drive content decisions and maximize audience engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Schedule Demo
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-slate-700">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Play className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-white">TVSerials.in</span>
            </div>
            <p className="text-gray-400">
              AI-powered analytics for the entertainment industry.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 TVSerials.in. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
