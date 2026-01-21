
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-open-sans">
            About <span className="gradient-text">WireTransfer.in</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-slate-700 border-slate-600 hover:border-wire-green transition-colors duration-300">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-wire-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Expert Team</h3>
                <p className="text-slate-300 font-roboto-mono text-sm">
                  Software engineers, AI specialists, and cybersecurity experts
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-700 border-slate-600 hover:border-wire-blue transition-colors duration-300">
              <CardContent className="p-6 text-center">
                <Target className="w-12 h-12 text-wire-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Mission</h3>
                <p className="text-slate-300 font-roboto-mono text-sm">
                  Revolutionizing file transfer with AI and robust security
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-700 border-slate-600 hover:border-wire-green transition-colors duration-300">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-wire-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Innovation</h3>
                <p className="text-slate-300 font-roboto-mono text-sm">
                  Next-generation solutions for modern businesses
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6 text-slate-300 font-roboto-mono leading-relaxed">
            <p>
              WireTransfer.in is revolutionizing file transfer technology by integrating cutting-edge AI algorithms with robust security protocols. We understand that in today's data-driven world, the need for secure, efficient, and automated file transfer solutions is paramount.
            </p>
            
            <p>
              Traditional methods are often slow, vulnerable to cyber threats, and require significant manual intervention. Our AI-powered platform addresses these challenges head-on, providing a seamless and secure file transfer experience.
            </p>
            
            <p>
              We are a team of experienced software engineers, AI specialists, and cybersecurity experts dedicated to building the next generation of file transfer solutions. Our deep understanding of data security best practices, combined with our expertise in artificial intelligence, allows us to deliver unparalleled performance and reliability.
            </p>
            
            <p>
              Whether you're a small business or a large enterprise, WireTransfer.in can help you streamline your file transfer processes, enhance data security, and improve overall productivity. We are proud to be based in India and committed to serving the needs of Indian businesses with world-class technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
