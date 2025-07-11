import { useState, useEffect } from 'react';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { 
      name: 'Services', 
      href: '#services',
      dropdown: [
        { name: 'ERP Solutions', href: '#services' },
        { name: 'Web Development', href: '#services' },
        { name: 'Mobile Apps', href: '#services' },
        { name: 'IT Consulting', href: '#services' }
      ]
    },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-lg shadow-black/5' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-300 group-hover:scale-110">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div>
              <h1 className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>RadianTech</h1>
              <p className={`text-sm transition-colors duration-300 ${
                isScrolled ? 'text-gray-600' : 'text-blue-100'
              }`}>Digital Transformation</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className={`flex items-center space-x-1 font-medium transition-all duration-300 hover:scale-105 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-blue-600' 
                      : 'text-white hover:text-blue-200'
                  }`}
                >
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </a>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                
                {item.dropdown && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-gray-200/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="py-2">
                      {item.dropdown.map((dropItem) => (
                        <a
                          key={dropItem.name}
                          href={dropItem.href}
                          className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-colors duration-200"
                        >
                          {dropItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="relative group overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
              isScrolled 
                ? 'hover:bg-gray-100 text-gray-900' 
                : 'hover:bg-white/10 text-white'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 bg-white/95 backdrop-blur-xl rounded-2xl mt-4 border border-gray-200/50">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 font-medium transition-all duration-200 rounded-lg mx-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-4 pt-4">
              <a
                href="#contact"
                className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold text-center transition-all duration-300 hover:shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;