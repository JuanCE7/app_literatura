import React from 'react';
import { BookOpen, Users, FileText, Video, MessageCircle, Menu, X, Sparkles } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  navigateToPage: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  currentPage,
  isMenuOpen,
  setIsMenuOpen,
  navigateToPage
}) => {
  const navigationItems = [
    { id: 'inicio', label: 'Inicio', icon: BookOpen },
    { id: 'autores', label: 'Autores 6to', icon: Users },
    { id: 'ensayos', label: 'Ensayos', icon: FileText },
    { id: 'video-resenas', label: 'Video Reseñas', icon: Video },
    { id: 'comunidad', label: 'Comunidad', icon: MessageCircle }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-amber-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="flex items-center space-x-2 sm:space-x-3 group cursor-pointer" onClick={() => navigateToPage('inicio')}>
            <div className="relative">
              <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600 group-hover:rotate-12 transition-transform duration-300" />
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <h1 className="text-lg sm:text-xl font-serif font-bold text-gray-800 group-hover:text-amber-600 transition-colors">
              Pedagogía Literaria
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigateToPage(item.id)}
                className={`flex items-center space-x-2 text-sm font-medium transition-all duration-300 px-3 py-2 rounded-lg hover:bg-amber-50 ${
                  currentPage === item.id
                    ? 'text-amber-600 bg-amber-100 shadow-md'
                    : 'text-gray-600 hover:text-amber-600'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-amber-600 hover:bg-amber-50 transition-all duration-200"
          >
            {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-amber-200 bg-white/95 backdrop-blur-sm animate-slide-down">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigateToPage(item.id)}
                  className={`flex items-center space-x-3 w-full text-left px-3 py-3 text-base font-medium rounded-md transition-all duration-200 ${
                    currentPage === item.id
                      ? 'text-amber-600 bg-amber-100'
                      : 'text-gray-600 hover:text-amber-600 hover:bg-amber-50'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;