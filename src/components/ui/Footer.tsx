"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Stethoscope, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                <Stethoscope className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                ClinicFlow
              </span>
            </div>
            <p className="text-blue-100 mb-8 max-w-md text-lg leading-relaxed">
              Transforming healthcare workflows with voice-enabled appointments, 
              real-time synchronization, and AI-powered prescriptions.
            </p>
            {/* Newsletter Signup */}
            <div className="max-w-md">
              <h4 className="font-bold mb-4 text-xl">Stay Updated</h4>
              <form onSubmit={handleNewsletterSubmit} className="flex space-x-3">
                <Input 
                  type="email"
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder-blue-200 backdrop-blur-sm rounded-xl flex-1"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-6 rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-xl">Product</h4>
            <ul className="space-y-4 text-blue-100">
              <li>
                <a href="#features" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">
                  API Docs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">
                  Mobile App
                </a>
              </li>
            </ul>
          </div>
          {/* Support */}
          <div>
            <h4 className="font-bold mb-6 text-xl">Support</h4>
            <ul className="space-y-4 text-blue-100">
              <li>
                <a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">
                  System Status
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">
                  Training
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8 flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          <div className="flex flex-wrap justify-center lg:justify-start space-x-8 text-blue-100 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-white transition-colors">HIPAA Compliance</a>
          </div>
          <div className="flex items-center space-x-6">
            <span className="text-blue-100 text-sm">© 2024 ClinicFlow. All rights reserved.</span>
            <div className="flex space-x-4">
              {/* Social Icons */}
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors transform hover:scale-110 duration-200">
                <span className="text-sm font-bold">X</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors transform hover:scale-110 duration-200">
                <span className="text-sm font-bold">Li</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors transform hover:scale-110 duration-200">
                <span className="text-sm font-bold">GH</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-200 z-50"
        >
          <ArrowUp className="w-6 h-6 text-white" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
