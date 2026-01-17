import { useState } from 'react';
import { Menu, X, BrainCircuit } from 'lucide-react';

export default function Navbar({ currentPage, setCurrentPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Features', id: 'features' },
    { name: 'How it Works', id: 'how-it-works' },
    { name: 'Services', id: 'services' },
    { name: 'About', id: 'about' },
    { name: 'Contact Us', id: 'contact' },
  ];

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-black to-gray-900 shadow-2xl fixed w-full top-0 z-50 border-b border-blue-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className="flex items-center cursor-pointer hover-scale group"
            onClick={() => setCurrentPage('home')}
          >
            <div className="animate-pulse-glow">
              <BrainCircuit className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
            </div>
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-blue-500 transition-all">
              RecruiterAI
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 group ${
                  currentPage === item.id
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-blue-400'
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 ${
                    currentPage === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                  }`}
                ></span>
              </button>
            ))}
            <button
              onClick={() => setCurrentPage('dashboard')}
              className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-500 hover:to-blue-600 transition-all duration-300 btn-glow overflow-hidden group"
            >
              <span className="relative z-10">Dashboard</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 rotate-90 transition-transform" />
              ) : (
                <Menu className="h-6 w-6 transition-transform" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-gray-900 to-black border-t border-blue-600/20 animate-slide-up">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setIsMenuOpen(false);
                }}
                style={{ animationDelay: `${index * 0.05}s` }}
                className={`animate-fade-in block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  currentPage === item.id
                    ? 'bg-blue-600/20 text-blue-400 border-l-2 border-blue-400'
                    : 'text-gray-300 hover:bg-gray-800/50 hover:text-blue-400'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => {
                setCurrentPage('dashboard');
                setIsMenuOpen(false);
              }}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-2 rounded-md text-base font-medium hover:from-blue-500 hover:to-blue-600 transition-all duration-300 btn-glow mt-2"
            >
              Dashboard
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
