
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Software Engineer',
      image: '👩‍💻',
      rating: 5,
      text: "The AI perfectly understood my busy schedule and created short, effective lessons. I've learned more guitar in 3 months than I did in 2 years of traditional classes!"
    },
    {
      name: 'Arjun Patel',
      role: 'College Student',
      image: '👨‍🎓',
      rating: 5,
      text: "As a complete beginner, I was intimidated by music theory. The AI broke everything down into digestible pieces and adapted to my learning pace. Amazing experience!"
    },
    {
      name: 'Meera Krishnan',
      role: 'Music Enthusiast',
      image: '🎵',
      rating: 5,
      text: "I've been playing piano for years but felt stuck. The AI identified gaps in my knowledge and created advanced lessons that challenged me perfectly."
    },
    {
      name: 'Rohit Gupta',
      role: 'Working Professional',
      image: '👨‍💼',
      rating: 5,
      text: "The personalized practice sessions fit perfectly into my routine. The AI knows exactly what I need to work on and keeps me motivated with achievable goals."
    },
    {
      name: 'Anjali Singh',
      role: 'Teacher',
      image: '👩‍🏫',
      rating: 5,
      text: "Even as a music teacher myself, I was impressed by how the AI analyzes learning patterns. It's like having a personal tutor who never gets tired!"
    },
    {
      name: 'Vikram Rao',
      role: 'Entrepreneur',
      image: '🎸',
      rating: 5,
      text: "The voice analysis feature helped me improve my singing dramatically. The real-time feedback is incredibly accurate and helpful."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our{' '}
            <span className="bg-gradient-music bg-clip-text text-transparent">Students</span>{' '}
            Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of musicians who have transformed their learning experience with our AI-powered platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.image}</div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
                
                <p className="text-gray-600 leading-relaxed italic">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-secondary rounded-2xl p-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Join 10,000+ Happy Students
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Experience the future of music education with AI-powered personalized learning
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <span className="font-bold">4.9/5 Rating</span>
              </div>
              <div className="text-gray-600">•</div>
              <div className="font-bold">10,000+ Active Students</div>
              <div className="text-gray-600">•</div>
              <div className="font-bold">50+ Expert Instructors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
