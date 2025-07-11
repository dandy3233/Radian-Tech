import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Building, User } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Alemayehu Tadesse',
      position: 'CEO',
      company: 'Ethiopian Financial Solutions',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'RadianTech transformed our entire financial management system. Their ERP solution increased our operational efficiency by 300% and reduced processing time significantly. Outstanding work!',
      rating: 5,
      industry: 'Financial Services'
    },
    {
      name: 'Dr. Meron Bekele',
      position: 'Director of IT',
      company: 'Addis Health Network',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'The custom healthcare management system developed by RadianTech has revolutionized how we serve our patients. The team\'s expertise and dedication are unmatched.',
      rating: 5,
      industry: 'Healthcare'
    },
    {
      name: 'Samuel Girma',
      position: 'Founder',
      company: 'EthioTech Startup',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'From concept to launch, RadianTech guided us through every step. Their mobile app development expertise helped us reach over 100,000 users in just 6 months.',
      rating: 5,
      industry: 'Technology'
    },
    {
      name: 'Hanan Mohammed',
      position: 'Operations Manager',
      company: 'Nile Commerce Group',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Our e-commerce platform built by RadianTech has generated over $2M in revenue. Their attention to detail and ongoing support have been exceptional.',
      rating: 5,
      industry: 'E-commerce'
    },
    {
      name: 'Tekle Hailu',
      position: 'IT Director',
      company: 'Ethiopian Manufacturing Corp',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'RadianTech\'s system integration services connected all our departments seamlessly. Production efficiency increased by 40% within the first quarter.',
      rating: 5,
      industry: 'Manufacturing'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-blue-100 to-purple-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full blur-3xl opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-blue-200/50">
            <Star className="w-4 h-4 fill-current" />
            <span>Client Success Stories</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">
            What Our Clients
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Say About Us
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business leaders across Ethiopia 
            and beyond say about their experience with RadianTech.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-5xl mx-auto mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-200/50 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <Quote className="w-24 h-24 text-blue-600" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-2xl lg:text-3xl font-medium text-gray-900 text-center mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-6">
                <div className="relative">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[currentTestimonial].position}
                  </p>
                  <div className="flex items-center justify-center space-x-2 mt-2">
                    <Building className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-blue-600 font-medium">
                      {testimonials[currentTestimonial].company}
                    </span>
                  </div>
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium mt-2">
                    {testimonials[currentTestimonial].industry}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200/50 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-300 group"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200/50 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-300 group"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-3 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer ${
                index === currentTestimonial ? 'ring-2 ring-blue-500 bg-white/80' : ''
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-4 line-clamp-3">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h5 className="font-semibold text-gray-900 text-sm">
                    {testimonial.name}
                  </h5>
                  <p className="text-gray-600 text-xs">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Trusted by Industry Leaders
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm font-medium">Enterprise</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <User className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm font-medium">Startups</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm font-medium">Government</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <User className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm font-medium">NGOs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;