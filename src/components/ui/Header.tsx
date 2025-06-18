"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Stethoscope } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      // Scrollspy logic
      const sections = ['features', 'how-it-works', 'testimonials', 'pricing'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || '');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/60 backdrop-blur-2xl border-b border-white/30 shadow-lg py-2' 
        : 'bg-white/30 backdrop-blur-xl border-b border-white/10 py-4'
    }`}
      style={{ WebkitBackdropFilter: 'blur(24px)', backdropFilter: 'blur(24px)' }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className={`flex items-center space-x-2 transition-all duration-300 ${
            isScrolled ? 'scale-95' : 'scale-100'
          }`}>
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              ClinicFlow
            </span>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Features', id: 'features' },
              { name: 'How It Works', id: 'how-it-works' },
              { name: 'Testimonials', id: 'testimonials' },
              { name: 'Pricing', id: 'pricing' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-gray-700 hover:text-blue-600 transition-colors font-medium px-2 py-1 rounded-lg ${
                  activeSection === item.id ? 'bg-gradient-to-r from-blue-100 to-teal-100 shadow text-blue-700' : ''
                }`}
                style={{
                  boxShadow: activeSection === item.id ? '0 2px 12px 0 rgba(59,130,246,0.08)' : undefined,
                  backdropFilter: activeSection === item.id ? 'blur(8px)' : undefined
                }}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-400 transition-all duration-300 ${
                  activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            ))}
          </nav>
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 font-medium transition-all duration-200 rounded-xl"
            >
              Login
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              Get Started
            </Button>
          </div>
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-blue-100/50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white/90 backdrop-blur-2xl rounded-2xl border border-white/30 shadow-xl">
            <nav className="flex flex-col space-y-4 p-6">
              {[
                { name: 'Features', id: 'features' },
                { name: 'How It Works', id: 'how-it-works' },
                { name: 'Testimonials', id: 'testimonials' },
                { name: 'Pricing', id: 'pricing' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left text-gray-700 hover:text-blue-600 transition-colors font-medium px-2 py-2 rounded-lg ${
                    activeSection === item.id ? 'bg-gradient-to-r from-blue-100 to-teal-100 shadow text-blue-700' : ''
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                <Button variant="ghost" className="justify-start text-gray-700">Login</Button>
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
