import React, { useEffect, useState } from 'react';
import { ArrowRight, Globe, Users, Zap, Star, Play } from 'lucide-react';

const backgroundPattern = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
        <div className={`absolute inset-0 bg-[url('${backgroundPattern}')] opacity-40`}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Interactive Mouse Effect */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl transition-all duration-1000 ease-out pointer-events-none"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Based in Ethiopia • Serving Globally</span>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Welcome to{' '}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 animate-pulse">
                    RadianTech
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 blur opacity-30 animate-pulse"></div>
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed font-light">
                Powering <span className="font-semibold text-white">Digital Transformation</span> in Ethiopia. 
                We are your trusted partner in innovation, delivering world-class IT solutions 
                tailored to the evolving needs of businesses in Africa and beyond.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-blue-200 font-medium">
                Our mission is to empower organizations through smart, scalable, and secure 
                technologies that drive growth, streamline operations, and enhance competitiveness 
                in the digital economy.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="#services"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 flex items-center justify-center space-x-3"
              >
                <span className="relative z-10">Explore Our Services</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a
                href="#about"
                className="group flex items-center justify-center space-x-3 border-2 border-white/30 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
              >
                <Play className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                <span>Watch Demo</span>
              </a>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/20">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                  500+
                </div>
                <div className="text-blue-200 font-medium">Projects Delivered</div>
                <div className="w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-2">
                  200+
                </div>
                <div className="text-blue-200 font-medium">Happy Clients</div>
                <div className="w-full h-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400 mb-2">
                  24/7
                </div>
                <div className="text-blue-200 font-medium">Support Available</div>
                <div className="w-full h-1 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Visual */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="space-y-8">
                  <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-shadow duration-300">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Digital Innovation</h3>
                      <p className="text-blue-200">Transforming businesses through technology</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-shadow duration-300">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Expert Team</h3>
                      <p className="text-blue-200">Skilled professionals dedicated to your success</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-shadow duration-300">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Global Standards</h3>
                      <p className="text-blue-200">Local insight with international quality</p>
                    </div>
                  </div>

                  {/* Progress Indicators */}
                  <div className="space-y-4 pt-6 border-t border-white/20">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">Client Satisfaction</span>
                      <span className="text-blue-200">98%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full w-[98%] animate-pulse"></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">Project Success Rate</span>
                      <span className="text-blue-200">99.5%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 h-2 rounded-full w-[99.5%] animate-pulse delay-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Background decorations */}
            <div className="absolute -top-8 -right-8 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-12 -left-8 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;