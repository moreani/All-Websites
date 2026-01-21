
const Index = () => {
  return (
    <div className="min-h-screen">
      {/* HTML Content will be rendered here */}
      <div dangerouslySetInnerHTML={{
        __html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>StockCharts AI - Revolutionizing Trading with Intelligent Insights</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        :root {
            --primary-color: #2c3e50;
            --accent-color: #e74c3c;
            --background-color: #F5F5F5;
            --white: #FFFFFF;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        html {
            scroll-behavior: smooth;
        }
        
        body {
            font-family: 'Open Sans', sans-serif;
            line-height: 1.6;
            color: #333;
        }
        
        .font-montserrat {
            font-family: 'Montserrat', sans-serif;
        }
        
        .bg-primary {
            background-color: var(--primary-color);
        }
        
        .bg-accent {
            background-color: var(--accent-color);
        }
        
        .text-primary {
            color: var(--primary-color);
        }
        
        .text-accent {
            color: var(--accent-color);
        }
        
        .hero-gradient {
            background: linear-gradient(135deg, var(--primary-color) 0%, #34495e 100%);
        }
        
        .card-hover {
            transition: all 0.3s ease;
        }
        
        .card-hover:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        
        .btn-primary {
            background: var(--accent-color);
            color: white;
            padding: 12px 30px;
            border-radius: 50px;
            text-decoration: none;
            display: inline-block;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
            font-weight: 600;
        }
        
        .btn-primary:hover {
            background: #c0392b;
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(231, 76, 60, 0.3);
        }
        
        .btn-secondary {
            background: var(--primary-color);
            color: white;
            padding: 12px 30px;
            border-radius: 50px;
            text-decoration: none;
            display: inline-block;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
            font-weight: 600;
        }
        
        .btn-secondary:hover {
            background: #1a252f;
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(44, 62, 80, 0.3);
        }
        
        .animate-fade-in {
            opacity: 0;
            transform: translateY(30px);
            animation: fadeInUp 0.8s ease forwards;
        }
        
        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .feature-card {
            background: white;
            padding: 2rem;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
            border-left: 4px solid var(--accent-color);
        }
        
        .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        
        .navbar {
            position: fixed;
            top: 0;
            width: 100%;
            background: rgba(44, 62, 80, 0.95);
            backdrop-filter: blur(10px);
            z-index: 1000;
            padding: 1rem 0;
            transition: all 0.3s ease;
        }
        
        .navbar.scrolled {
            background: rgba(44, 62, 80, 1);
            box-shadow: 0 2px 20px rgba(0,0,0,0.1);
        }
        
        .hero-particles {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: 1;
        }
        
        .particle {
            position: absolute;
            background: rgba(255,255,255,0.1);
            border-radius: 50%;
            animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .section-padding {
            padding: 6rem 1rem;
        }
        
        @media (max-width: 768px) {
            .section-padding {
                padding: 4rem 1rem;
            }
            
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .hero p {
                font-size: 1.1rem;
            }
        }
    </style>
</head>

<body>
    <!-- Navigation -->
    <nav class="navbar" id="navbar">
        <div class="container mx-auto px-4">
            <div class="flex justify-between items-center">
                <div class="text-white font-montserrat font-bold text-xl">
                    StockCharts AI
                </div>
                <div class="hidden md:flex space-x-6">
                    <a href="#about" class="text-white hover:text-red-400 transition">About</a>
                    <a href="#features" class="text-white hover:text-red-400 transition">Features</a>
                    <a href="#contact" class="text-white hover:text-red-400 transition">Contact</a>
                </div>
                <div class="md:hidden">
                    <button id="mobile-menu-btn" class="text-white">
                        <i class="fas fa-bars"></i>
                    </button>
                </div>
            </div>
            <div id="mobile-menu" class="hidden md:hidden mt-4 pb-4">
                <a href="#about" class="block text-white py-2 hover:text-red-400 transition">About</a>
                <a href="#features" class="block text-white py-2 hover:text-red-400 transition">Features</a>
                <a href="#contact" class="block text-white py-2 hover:text-red-400 transition">Contact</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero hero-gradient min-h-screen flex items-center justify-center text-white text-center relative overflow-hidden">
        <div class="hero-particles" id="particles"></div>
        <div class="container mx-auto px-4 relative z-10">
            <div class="animate-fade-in">
                <h1 class="text-5xl md:text-7xl font-montserrat font-bold mb-6">
                    StockCharts AI
                </h1>
                <p class="text-xl md:text-2xl mb-4 font-montserrat">
                    Revolutionizing Trading with Intelligent Insights
                </p>
                <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
                    Coming Soon! Join us in transforming the way you trade with cutting-edge AI technology designed for the Indian stock market.
                </p>
                <div class="space-x-4">
                    <a href="#contact" class="btn-primary">
                        <i class="fas fa-bell mr-2"></i>Stay Updated
                    </a>
                    <a href="#about" class="btn-secondary">
                        <i class="fas fa-arrow-down mr-2"></i>Learn More
                    </a>
                </div>
            </div>
        </div>
        <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <i class="fas fa-chevron-down text-white text-2xl"></i>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section-padding bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="text-4xl md:text-5xl font-montserrat font-bold mb-8 text-primary">
                    About StockCharts AI
                </h2>
                <div class="bg-white rounded-2xl p-8 shadow-2xl card-hover">
                    <p class="text-lg leading-relaxed text-gray-700 mb-6">
                        At StockCharts AI, we're dedicated to harnessing the power of artificial intelligence to empower traders in the stock market. Our upcoming platform promises to deliver groundbreaking insights and predictions that will allow traders to make informed decisions with confidence.
                    </p>
                    <p class="text-lg leading-relaxed text-gray-700">
                        With advanced data analytics tailored to the needs of Indian traders, we aim to create a tool that not only simplifies trading but enhances profitability. As we prepare for our launch, we invite you to join us on this exciting journey!
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="section-padding bg-white">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-montserrat font-bold mb-4 text-primary">
                    What to Expect
                </h2>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                    Discover the revolutionary features that will transform your trading experience
                </p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="feature-card animate-fade-in">
                    <div class="text-accent text-4xl mb-4">
                        <i class="fas fa-brain"></i>
                    </div>
                    <h3 class="text-xl font-montserrat font-bold mb-3 text-primary">Smart Trading Analytics</h3>
                    <p class="text-gray-600">Utilize AI algorithms to analyze market data and predict trends with unprecedented accuracy.</p>
                </div>
                
                <div class="feature-card animate-fade-in">
                    <div class="text-accent text-4xl mb-4">
                        <i class="fas fa-bell"></i>
                    </div>
                    <h3 class="text-xl font-montserrat font-bold mb-3 text-primary">Custom Alerts</h3>
                    <p class="text-gray-600">Stay informed with alerts customized to your trading preferences and strategies.</p>
                </div>
                
                <div class="feature-card animate-fade-in">
                    <div class="text-accent text-4xl mb-4">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <h3 class="text-xl font-montserrat font-bold mb-3 text-primary">Intuitive Dashboard</h3>
                    <p class="text-gray-600">Experience a user-friendly interface that makes navigating through complex data a breeze.</p>
                </div>
                
                <div class="feature-card animate-fade-in">
                    <div class="text-accent text-4xl mb-4">
                        <i class="fas fa-graduation-cap"></i>
                    </div>
                    <h3 class="text-xl font-montserrat font-bold mb-3 text-primary">Educational Resources</h3>
                    <p class="text-gray-600">Access tutorials and guides that help enhance your trading skills and AI understanding.</p>
                </div>
                
                <div class="feature-card animate-fade-in">
                    <div class="text-accent text-4xl mb-4">
                        <i class="fas fa-users"></i>
                    </div>
                    <h3 class="text-xl font-montserrat font-bold mb-3 text-primary">Community Engagement</h3>
                    <p class="text-gray-600">Become part of a vibrant community of traders sharing insights and strategies.</p>
                </div>
                
                <div class="feature-card animate-fade-in">
                    <div class="text-accent text-4xl mb-4">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <h3 class="text-xl font-montserrat font-bold mb-3 text-primary">Secure & Reliable</h3>
                    <p class="text-gray-600">Built with enterprise-grade security to protect your data and trading strategies.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section-padding bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="max-w-6xl mx-auto">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-montserrat font-bold mb-4 text-primary">
                        Stay Connected
                    </h2>
                    <p class="text-xl text-gray-600">
                        Be the first to know when we launch and get exclusive updates!
                    </p>
                </div>
                
                <div class="grid lg:grid-cols-2 gap-12">
                    <!-- Newsletter Form -->
                    <div class="bg-white rounded-2xl p-8 shadow-2xl">
                        <h3 class="text-2xl font-montserrat font-bold mb-6 text-primary">
                            <i class="fas fa-envelope text-accent mr-3"></i>
                            Subscribe to Our Newsletter
                        </h3>
                        <form id="newsletter-form" class="space-y-4">
                            <div>
                                <input type="text" placeholder="Your Name" required 
                                       class="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent transition">
                            </div>
                            <div>
                                <input type="email" placeholder="Your Email" required 
                                       class="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent transition">
                            </div>
                            <button type="submit" class="btn-secondary w-full">
                                <i class="fas fa-paper-plane mr-2"></i>Subscribe Now
                            </button>
                        </form>
                    </div>
                    
                    <!-- Contact Information -->
                    <div class="bg-white rounded-2xl p-8 shadow-2xl">
                        <h3 class="text-2xl font-montserrat font-bold mb-6 text-primary">
                            <i class="fas fa-phone text-accent mr-3"></i>
                            Contact Information
                        </h3>
                        <div class="space-y-6">
                            <div class="flex items-start space-x-4">
                                <i class="fas fa-map-marker-alt text-accent text-xl mt-1"></i>
                                <div>
                                    <h4 class="font-semibold text-primary">Address</h4>
                                    <p class="text-gray-600">701, Stellar Tower, Chembur East, Sion Opposite, Diamond Garden, Basant Garden, Chembur, Mumbai, Maharashtra 400071</p>
                                </div>
                            </div>
                            
                            <div class="flex items-center space-x-4">
                                <i class="fas fa-phone text-accent text-xl"></i>
                                <div>
                                    <h4 class="font-semibold text-primary">Phone</h4>
                                    <a href="tel:+918369848475" class="text-accent hover:underline">+91 8369848475</a>
                                </div>
                            </div>
                            
                            <div class="flex items-center space-x-4">
                                <i class="fas fa-envelope text-accent text-xl"></i>
                                <div>
                                    <h4 class="font-semibold text-primary">Email</h4>
                                    <a href="mailto:info@stockcharts.in" class="text-accent hover:underline">info@stockcharts.in</a>
                                </div>
                            </div>
                            
                            <div class="flex items-center space-x-4">
                                <i class="fas fa-globe text-accent text-xl"></i>
                                <div>
                                    <h4 class="font-semibold text-primary">Website</h4>
                                    <a href="https://stockcharts.in" class="text-accent hover:underline">stockcharts.in</a>
                                </div>
                            </div>
                            
                            <div class="pt-4">
                                <a href="https://wa.me/918369848475" class="btn-primary inline-flex items-center">
                                    <i class="fab fa-whatsapp mr-2"></i>WhatsApp Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Map -->
                <div class="mt-12 bg-white rounded-2xl p-4 shadow-2xl">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5267804847937!2d72.89623431469994!3d19.042686587086668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8c676b4b5c5%3A0x4c2b4c2b4c2b4c2b!2sChembur%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
                        width="100%" 
                        height="300" 
                        style="border:0; border-radius: 10px;" 
                        allowfullscreen="" 
                        loading="lazy">
                    </iframe>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-primary text-white py-12">
        <div class="container mx-auto px-4 text-center">
            <div class="mb-8">
                <h3 class="text-2xl font-montserrat font-bold mb-4">StockCharts AI</h3>
                <p class="text-gray-300 max-w-2xl mx-auto">
                    Revolutionizing Trading with Intelligent Insights. Stay tuned for the future of AI-powered trading.
                </p>
            </div>
            
            <div class="flex justify-center space-x-6 mb-8">
                <a href="#" class="text-gray-300 hover:text-white text-2xl transition">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="text-gray-300 hover:text-white text-2xl transition">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="#" class="text-gray-300 hover:text-white text-2xl transition">
                    <i class="fab fa-facebook"></i>
                </a>
                <a href="#" class="text-gray-300 hover:text-white text-2xl transition">
                    <i class="fab fa-instagram"></i>
                </a>
            </div>
            
            <div class="border-t border-gray-600 pt-8">
                <p class="text-gray-300">© 2025 StockCharts AI. All Rights Reserved.</p>
                <p class="text-gray-400 mt-2">Owned by <span class="text-accent">Scalium.in</span></p>
            </div>
        </div>
    </footer>

    <script>
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Mobile menu toggle
        document.getElementById('mobile-menu-btn').addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('hidden');
        });

        // Create floating particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 50;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.width = Math.random() * 4 + 2 + 'px';
                particle.style.height = particle.style.width;
                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationDelay = '0.2s';
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, observerOptions);

        // Form submission
        document.getElementById('newsletter-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for subscribing! We will keep you updated on our launch.');
            this.reset();
        });

        // Initialize particles and observers when page loads
        document.addEventListener('DOMContentLoaded', function() {
            createParticles();
            
            // Observe elements for animation
            document.querySelectorAll('.feature-card').forEach(card => {
                observer.observe(card);
            });
        });

        // Add some interactive hover effects
        document.querySelectorAll('.feature-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    </script>
</body>
</html>
        `
      }} />
    </div>
  );
};

export default Index;
