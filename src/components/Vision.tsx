import React, { useEffect, useState } from 'react';
import { Target, Rocket, Globe, Users, ArrowRight, Sparkles, Zap, Heart } from 'lucide-react';

const backgroundPattern = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

const Vision = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const visionPoints = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'Pioneering cutting-edge solutions for tomorrow\'s challenges with advanced AI, blockchain, and cloud technologies.',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      icon: Rocket,
      title: 'Growth Catalyst',
      description: 'Empowering businesses to scale and succeed digitally through strategic technology implementation.',
      color: 'from-purple-400 to-pink-400'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Connecting Africa to the global digital economy while preserving local values and culture.',
      color: 'from-indigo-400 to-purple-400'
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'Building technology that serves local communities and drives sustainable development.',
      color: 'from-emerald-400 to-teal-400'
    }
  ];

  const achievements = [
    {
      icon: Sparkles,
      title: 'Digital Transformation',
      description: 'Modernize your operations with cutting-edge technology solutions',
      stats: '500+ Transformations'
    },
    {
      icon: Zap,
      title: 'Strategic Partnership',
      description: 'Long-term collaboration focused on your success and growth',
      stats: '98% Retention Rate'
    },
    {
      icon: Heart,
      title: 'Future-Ready Solutions',
      description: 'Scalable technologies that grow with your business',
      stats: '99.9% Uptime'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Interactive Mouse Effect */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl transition-all duration-1000 ease-out pointer-events-none"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
        
        {/* Animated Grid */}
        <div className={`absolute inset-0 bg-[url('${backgroundPattern}')] opacity-40`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-white/20">
            <Sparkles className="w-4 h-4" />
            <span>💡 Our Vision</span>
          </div>
          <h2 className="text-4xl lg:text-7xl font-bold mb-8 leading-tight">
            Shaping Africa's
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-pulse">
              Digital Future
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            To be a catalyst for digital transformation in Africa by providing innovative, 
            reliable, and future-ready IT and software solutions that empower businesses 
            and communities to thrive in the digital age.
          </p>
        </div>

        {/* Vision Points */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {visionPoints.map((point, index) => (
            <div
              key={index}
              className="group text-center hover:transform hover:scale-105 transition-all duration-500"
            >
              <div className="relative mb-6">
                <div className={`w-20 h-20 bg-gradient-to-r ${point.color} rounded-2xl flex items-center justify-center mx-auto shadow-2xl group-hover:shadow-3xl transition-all duration-300 group-hover:rotate-6`}>
                  <point.icon className="w-10 h-10 text-white" />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-r ${point.color} rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
              </div>
              
              <h3 className="text-xl lg:text-2xl font-bold mb-4 group-hover:text-blue-300 transition-colors">
                {point.title}
              </h3>
              
              <p className="text-blue-100 leading-relaxed group-hover:text-white transition-colors">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Main CTA Section */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 lg:p-16 border border-white/10 shadow-2xl mb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-3xl lg:text-5xl font-bold leading-tight">
                Ready to Transform
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Your Business?
                </span>
              </h3>
              <p className="text-lg lg:text-xl text-blue-100 leading-relaxed">
                Join the digital revolution and unlock your business potential with RadianTech's 
                innovative IT solutions. Let's build the future together and create lasting impact 
                in your industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a
                  href="#contact"
                  className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 flex items-center justify-center space-x-3"
                >
                  <span className="relative z-10">Start Your Project</span>
                  <Rocket className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a
                  href="#services"
                  className="group flex items-center justify-center space-x-3 border-2 border-white/30 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
                >
                  <span>View Services</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group hover:scale-105"
                >
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold group-hover:text-blue-300 transition-colors">
                        {achievement.title}
                      </h4>
                      <div className="text-sm text-blue-300 font-medium">
                        {achievement.stats}
                      </div>
                    </div>
                  </div>
                  <p className="text-blue-100 group-hover:text-white transition-colors">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final Impact Statement */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Building Tomorrow's Technology Today
            </h3>
            <p className="text-blue-100 text-lg max-w-3xl mx-auto">
              Every line of code we write, every system we build, and every solution we deliver 
              contributes to a more connected, efficient, and prosperous Africa. Join us in 
              shaping the digital future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;