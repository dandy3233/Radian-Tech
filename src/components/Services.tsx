import React from 'react';
import { useEffect, useState } from 'react';
import { Database, Globe, Code, Smartphone, Settings, ShoppingCart, ArrowRight, Check } from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

useEffect(() => {
  const handleHashChange = () => {
    const hash = window.location.hash.replace('#', '');
    const index = services.findIndex(service => service.id === hash);
    if (index !== -1) {
      setActiveService(index);
    }
  };

  // Run on first load and when hash changes
  handleHashChange();
  window.addEventListener('hashchange', handleHashChange);

  return () => {
    window.removeEventListener('hashchange', handleHashChange);
  };
}, []);



  const services = [
    {
      id: 'erp-solutions',
      icon: Database,
      title: 'ERP Solutions',
      description: 'We design and implement powerful Enterprise Resource Planning systems that unify your operations — from finance and inventory to HR and customer management — under one integrated platform.',
      features: ['Financial Management', 'Inventory Control', 'HR Management', 'Customer Relations', 'Real-time Analytics', 'Multi-location Support'],
      technologies: ['Odoo', 'Oracle', 'Microsoft Dynamics', 'Custom Solutions'],
      color: 'from-blue-600 to-cyan-600',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      id: 'web-development',
      icon: Globe,
      title: 'Web Development',
      // id: 'web-development', // use kebab-case for simplicity
      description: 'Our expert developers craft fast, responsive, and secure websites that reflect your brand and engage your audience, from corporate sites to dynamic web applications.',
      features: ['Responsive Design', 'Security Focus', 'Performance Optimization', 'SEO Ready', 'CMS Integration', 'E-commerce Ready'],
      technologies: ['React', 'Next.js', 'Node.js', 'WordPress'],
      color: 'from-purple-600 to-pink-600',
      bgColor: 'from-purple-50 to-pink-50'
    },
    {
      id: 'custom-software',
      icon: Code,
      title: 'Custom Software Development',
      description: 'We build tailor-made software solutions that solve complex business problems and deliver measurable results with cutting-edge technologies.',
      features: ['Scalable Architecture', 'Modern Technologies', 'Agile Development', 'Quality Assurance', 'API Integration', 'Cloud-Native'],
      technologies: ['Python', 'Java', '.NET', 'React Native'],
      color: 'from-indigo-600 to-blue-600',
      bgColor: 'from-indigo-50 to-blue-50'
    },
    {
      id: 'mobile-apps',
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Reach your customers wherever they are with intuitive and high-performance mobile applications for Android and iOS platforms.',
      features: ['Cross-Platform', 'Native Performance', 'User-Centric Design', 'App Store Optimization', 'Push Notifications', 'Offline Support'],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      color: 'from-emerald-600 to-teal-600',
      bgColor: 'from-emerald-50 to-teal-50'
    },
    {
      id: 'it-consulting',
      icon: Settings,
      title: 'IT Consulting & System Integration',
      description: 'Our consultants guide you through your digital transformation journey with strategic advice and seamless integration of IT systems.',
      features: ['Strategic Planning', 'System Integration', 'Process Optimization', 'Technology Assessment', 'Digital Strategy', 'Change Management'],
      technologies: ['Cloud Platforms', 'DevOps', 'Microservices', 'API Management'],
      color: 'from-orange-600 to-red-600',
      bgColor: 'from-orange-50 to-red-50'
    },
    {
      id: 'ecommerce',
      icon: ShoppingCart,
      title: 'E-commerce Development',
      description: 'Launch and grow your online store with robust platforms, payment integrations, and user-friendly shopping experiences.',
      features: ['Payment Integration', 'Inventory Management', 'Mobile Commerce', 'Analytics & Reporting', 'Multi-vendor Support', 'International Shipping'],
      technologies: ['Shopify', 'WooCommerce', 'Magento', 'Custom Platforms'],
      color: 'from-violet-600 to-purple-600',
      bgColor: 'from-violet-50 to-purple-50'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-blue-200/50">
            <span>🚀 Our Core Services</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">
            Comprehensive IT Solutions
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              for Your Business
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From enterprise systems to mobile applications, we deliver cutting-edge technology solutions 
            that drive digital transformation and business growth across Africa and beyond.
          </p>
        </div>

        {/* Service Tabs */}
        <div  className="flex flex-wrap justify-center gap-4 mb-16">
          {services.map((service, index) => (
            <button
              key={index} id={service.id}
              onClick={() => setActiveService(index)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeService === index
                  ? `bg-gradient-to-r ${service.color} text-white shadow-lg transform scale-105`
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <service.icon className="w-5 h-5" />
              <span>{service.title}</span>
            </button>
          ))}
        </div>

        {/* Active Service Details */}
        <div className="mb-16">
          <div className={`bg-gradient-to-br ${services[activeService].bgColor} rounded-3xl p-8 lg:p-12 border border-gray-200/50 shadow-xl`}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${services[activeService].color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    {React.createElement(services[activeService].icon, { className: "w-8 h-8 text-white" })}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    {services[activeService].title}
                  </h3>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  {services[activeService].description}
                </p>
                
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-gray-900">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {services[activeService].features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-6 h-6 bg-gradient-to-r ${services[activeService].color} rounded-full flex items-center justify-center`}>
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <a
                  href="#contact"
                  className={`inline-flex items-center space-x-2 bg-gradient-to-r ${services[activeService].color} text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Technologies We Use:</h4>
                  <div className="flex flex-wrap gap-3">
                    {services[activeService].technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`bg-gradient-to-r ${services[activeService].color} text-white px-4 py-2 rounded-full text-sm font-medium`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us?</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Expert team with 5+ years experience</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Agile development methodology</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>24/7 support and maintenance</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Competitive pricing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl border-2 p-8 transition-all duration-500 hover:shadow-2xl hover:scale-105 transform cursor-pointer ${
                activeService === index 
                  ? `border-transparent bg-gradient-to-br ${service.bgColor} shadow-xl scale-105` 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setActiveService(index)}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                {service.description}
              </p>
              
              <div className="flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors group-hover:translate-x-2 transform duration-300">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;