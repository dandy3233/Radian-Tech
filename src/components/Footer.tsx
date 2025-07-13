import { Mail, Phone, MapPin, Zap, Globe, Linkedin, Twitter, Github, ArrowRight, Heart } from 'lucide-react';

const backgroundPattern = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className={`absolute inset-0 bg-[url('${backgroundPattern}')] opacity-40`}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-300 group-hover:scale-110">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold">RadianTech</h3>
                <p className="text-blue-200 font-medium">Digital Transformation</p>
              </div>
            </div>
            
            <p className="text-blue-100 text-lg leading-relaxed max-w-lg">
              Empowering organizations through smart, scalable, and secure technologies that drive growth, 
              streamline operations, and enhance competitiveness in the digital economy.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-blue-100 group-hover:text-white transition-colors">Based in Ethiopia</span>
              </div>
              <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-blue-100 group-hover:text-white transition-colors">+251 XXX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-blue-100 group-hover:text-white transition-colors">info@radiantech.et</span>
              </div>
              <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                  <Globe className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-blue-100 group-hover:text-white transition-colors">www.radiantech.et</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Our Services
            </h4>
            <ul className="space-y-4">
              {[
                'ERP Solutions',
                'Web Development',
                'Custom Software',
                'Mobile Apps',
                'IT Consulting',
                'E-commerce'
              ].map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="flex items-center space-x-2 text-blue-100 hover:text-white transition-all duration-300 group hover:translate-x-2"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Connect With Us
            </h4>
            <div className="space-y-6">
              <p className="text-blue-100 leading-relaxed">
                Ready to start your digital transformation journey? Let's discuss how we can help your business grow.
              </p>
              
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
              
              <a
                href="mailto:info@radiantech.et"
                className="group inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 relative overflow-hidden"
              >
                <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-16 pt-12">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="flex items-center space-x-2 text-blue-200">
              <span>© {currentYear} RadianTech. All rights reserved.</span>
              <span className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" />
                <span>in Ethiopia</span>
              </span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              {[
                'Privacy Policy',
                'Terms of Service',
                'Cookie Policy',
                'Sitemap'
              ].map((link, index) => (
                <a 
                  key={index}
                  href="#PrivacyPolicy" 
                  className="text-blue-200 hover:text-white transition-colors duration-300 hover:underline"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          
          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-blue-300 text-sm">
              Powering Digital Transformation in Ethiopia and Beyond • 
              <span className="font-semibold"> Trusted by 200+ Organizations</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;