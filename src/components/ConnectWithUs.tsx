import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, SendHorizonal, Sparkles } from 'lucide-react';

const backgroundPattern =
  "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

const ConnectWithUs: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="ConnectWithUs" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Fancy Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl transition-all duration-1000 ease-out pointer-events-none"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
        <div className={`absolute inset-0 bg-[url('${backgroundPattern}')] opacity-40`}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20">
            <Sparkles className="w-4 h-4" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-pulse">Connect</span>
          </h2>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto">
            Whether you're looking to start a project or just want to say hello, we're ready to talk.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-blue-300" />
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <p className="text-blue-100">contact@radiantech.com</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-blue-300" />
                <div>
                  <h3 className="font-semibold text-white">Phone</h3>
                  <p className="text-blue-100">+1 (800) 123-4567</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-blue-300" />
                <div>
                  <h3 className="font-semibold text-white">Address</h3>
                  <p className="text-blue-100">123 Innovation Drive, Tech City, TX 75000</p>
                </div>
              </div>
            </div>
            <div className="flex space-x-4">
                            {[
                              { icon: Linkedin, href: '#', color: 'hover:bg-blue-600' },
                              { icon: Twitter, href: '#', color: 'hover:bg-blue-500' },
                              { icon: Github, href: '#', color: 'hover:bg-gray-700' }
                            ].map((social, index) => (
                              <a
                                key={index}
                                href={social.href}
                                className={`w-12 h-12 bg-white/10 backdrop-blur-sm ${social.color} rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border border-white/20`}
                              >
                                <social.icon className="w-5 h-5" />
                              </a>
                            ))}
                          </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6 bg-white/5 backdrop-blur-2xl rounded-2xl p-8 border border-white/10 shadow-xl">
            <div>
              <label className="block text-sm font-medium text-blue-100 mb-1">Full Name</label>
              <input
                type="text"
                required
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-blue-100 mb-1">Email</label>
              <input
                type="email"
                required
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-blue-100 mb-1">Message</label>
              <textarea
                rows={4}
                required
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-transform"
            >
              Send Message <SendHorizonal className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithUs;
