import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Heart, Award, Headphones, Shield, Zap, Users, Globe } from 'lucide-react';

const WhyChoose = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const reasons = [
    {
      icon: MapPin,
      title: 'Local Insight, Global Vision',
      description: 'As an Ethiopian-based company, we understand the unique challenges and opportunities in the region while applying global standards and technologies.',
      color: 'from-blue-600 to-cyan-600',
      bgColor: 'from-blue-50 to-cyan-50',
      stats: '15+ Countries Served'
    },
    {
      icon: Heart,
      title: 'Client-Centered Approach',
      description: 'We work closely with our clients to understand their goals and deliver solutions that align with their vision and drive success.',
      color: 'from-purple-600 to-pink-600',
      bgColor: 'from-purple-50 to-pink-50',
      stats: '98% Client Satisfaction'
    },
    {
      icon: Award,
      title: 'Experienced Team',
      description: 'Our diverse team of developers, engineers, designers, and IT strategists bring years of experience and passion to every project.',
      color: 'from-indigo-600 to-purple-600',
      bgColor: 'from-indigo-50 to-purple-50',
      stats: '50+ Expert Professionals'
    },
    {
      icon: Headphones,
      title: 'End-to-End Support',
      description: 'From planning and development to deployment and maintenance — we\'re with you every step of the way.',
      color: 'from-emerald-600 to-teal-600',
      bgColor: 'from-emerald-50 to-teal-50',
      stats: '24/7 Support Available'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'We implement industry-leading security practices to protect your data and ensure compliance with international standards.',
      color: 'from-red-600 to-orange-600',
      bgColor: 'from-red-50 to-orange-50',
      stats: '99.9% Security Rating'
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Technology',
      description: 'We leverage the latest technologies and frameworks to build future-ready solutions that scale with your business.',
      color: 'from-yellow-600 to-orange-600',
      bgColor: 'from-yellow-50 to-orange-50',
      stats: 'Latest Tech Stack'
    }
  ];

  const additionalFeatures = [
    {
      icon: Users,
      title: 'Agile Methodology',
      description: 'Fast, iterative development with continuous client feedback'
    },
    {
      icon: Globe,
      title: 'Scalable Solutions',
      description: 'Built to grow with your business and adapt to changing needs'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control processes'
    },
    {
      icon: Headphones,
      title: 'Ongoing Maintenance',
      description: 'Continuous support and updates to keep systems running smoothly'
    }
  ];

  const backgroundPattern = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-l from-purple-100 to-pink-100 rounded-full blur-3xl opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-blue-200/50">
            <span>🌍 Why Choose RadianTech?</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">
            Your Trusted
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Technology Partner
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We combine local expertise with global standards to deliver exceptional IT solutions 
            that drive your business forward. Here's what sets us apart in the competitive landscape.
          </p>
        </div>

        {/* Main Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br ${reason.bgColor} rounded-2xl p-8 border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 transform ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon and Stats */}
              <div className="flex items-center justify-between mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-right">
                  <div className={`text-sm font-semibold bg-gradient-to-r ${reason.color} bg-clip-text text-transparent`}>
                    {reason.stats}
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-900 transition-colors">
                {reason.title}
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                {reason.description}
              </p>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div 
                  className={`bg-gradient-to-r ${reason.color} h-1 rounded-full transition-all duration-1000 ease-out`}
                  style={{ 
                    width: isVisible ? '100%' : '0%',
                    transitionDelay: `${index * 200 + 500}ms`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-200/50 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Benefits
            </h3>
            <p className="text-lg text-gray-600">
              More reasons why businesses across Ethiopia trust RadianTech
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Focus */}
        <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className={`absolute inset-0 bg-[url('${backgroundPattern}')] opacity-40`}></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Serving Diverse Industries
              </h3>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                From our home base in Ethiopia, RadianTech proudly serves startups, SMEs, NGOs, 
                and enterprises across various industries, helping them embrace technology and lead with confidence.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  'Financial Services', 'Healthcare', 'Education', 'Manufacturing',
                  'NGOs & Non-Profits', 'Retail & E-commerce', 'Government', 'Agriculture'
                ].map((industry, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                    <span className="text-blue-100">{industry}</span>
                  </div>
                ))}
              </div>
              
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors transform hover:scale-105 duration-300"
              >
                <span>Start Your Project</span>
                <Award className="w-5 h-5" />
              </a>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center space-y-8">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <Award className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold">Quality Guarantee</h4>
                  <p className="text-blue-100 leading-relaxed">
                    We stand behind our work with comprehensive quality assurance, ongoing support, 
                    and a commitment to your success. Your satisfaction is our priority.
                  </p>
                  <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20">
                    <div className="text-center">
                      <div className="text-3xl font-bold">99.9%</div>
                      <div className="text-sm text-blue-100">Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">5★</div>
                      <div className="text-sm text-blue-100">Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">24/7</div>
                      <div className="text-sm text-blue-100">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;