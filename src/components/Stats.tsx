import React, { useEffect, useState, useRef } from 'react';
import { TrendingUp, Award, Clock, Globe } from 'lucide-react';

const backgroundPattern = "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.3'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ projects: 0, clients: 0, countries: 0, uptime: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const targets = { projects: 500, clients: 200, countries: 15, uptime: 99.9 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      const intervals = Object.entries(targets).map(([key, target]) => {
        const increment = target / steps;
        let current = 0;
        
        return setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(intervals.find(i => i === interval));
          }
          setCounts(prev => ({ ...prev, [key]: current }));
        }, stepDuration);
      });

      return () => intervals.forEach(clearInterval);
    }
  }, [isVisible]);

  const stats = [
    {
      icon: TrendingUp,
      value: Math.floor(counts.projects),
      suffix: '+',
      label: 'Projects Completed',
      description: 'Successfully delivered across various industries',
      color: 'from-blue-600 to-cyan-600',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      icon: Award,
      value: Math.floor(counts.clients),
      suffix: '+',
      label: 'Satisfied Clients',
      description: 'Businesses transformed through our solutions',
      color: 'from-purple-600 to-pink-600',
      bgColor: 'from-purple-50 to-pink-50'
    },
    {
      icon: Globe,
      value: Math.floor(counts.countries),
      suffix: '+',
      label: 'Countries Served',
      description: 'Global reach with local expertise',
      color: 'from-indigo-600 to-blue-600',
      bgColor: 'from-indigo-50 to-blue-50'
    },
    {
      icon: Clock,
      value: counts.uptime,
      suffix: '%',
      label: 'System Uptime',
      description: 'Reliable infrastructure and support',
      color: 'from-emerald-600 to-teal-600',
      bgColor: 'from-emerald-50 to-teal-50'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className={`absolute inset-0 bg-[url('${backgroundPattern}')] opacity-30`}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-blue-200/50">
            <TrendingUp className="w-4 h-4" />
            <span>Our Impact in Numbers</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Driving Digital Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to innovation and quality has enabled us to deliver exceptional results 
            for businesses across Africa and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${stat.bgColor} rounded-2xl p-8 border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 transform ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value.toFixed(stat.suffix === '%' ? 1 : 0)}{stat.suffix}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {stat.label}
                  </h3>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {stat.description}
                </p>
                
                {/* Progress Bar */}
                <div className="mt-4 w-full bg-gray-200 rounded-full h-1">
                  <div 
                    className={`bg-gradient-to-r ${stat.color} h-1 rounded-full transition-all duration-1000 ease-out`}
                    style={{ 
                      width: isVisible ? '100%' : '0%',
                      transitionDelay: `${index * 200 + 500}ms`
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-20 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Trusted by Leading Organizations
            </h3>
            <p className="text-gray-600 mb-6">
              From startups to enterprises, NGOs to government agencies, we've helped organizations 
              across Ethiopia and beyond achieve their digital transformation goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span className="bg-gray-100 px-4 py-2 rounded-full">Financial Services</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full">Healthcare</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full">Education</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full">Manufacturing</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full">Government</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full">NGOs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;