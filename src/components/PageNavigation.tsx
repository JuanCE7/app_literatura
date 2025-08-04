import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface PageNavigationProps {
  currentPage: string;
  navigateToPage: (page: string) => void;
}

const PageNavigation: React.FC<PageNavigationProps> = ({ currentPage, navigateToPage }) => {
  const pages = ['inicio', 'autores', 'ensayos', 'video-resenas', 'comunidad'];
  const currentIndex = pages.indexOf(currentPage);

  if (currentPage === 'inicio') return null;

  return (
    <div className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 flex space-x-2 sm:space-x-4 z-30">
      <button
        onClick={() => {
          if (currentIndex > 0) navigateToPage(pages[currentIndex - 1]);
        }}
        className="bg-white/90 backdrop-blur-sm text-amber-600 p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl hover:bg-amber-50 transition-all duration-300 transform hover:scale-110"
        disabled={currentIndex <= 0}
      >
        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
      <button
        onClick={() => {
          if (currentIndex < pages.length - 1) navigateToPage(pages[currentIndex + 1]);
        }}
        className="bg-white/90 backdrop-blur-sm text-amber-600 p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl hover:bg-amber-50 transition-all duration-300 transform hover:scale-110"
        disabled={currentIndex >= pages.length - 1}
      >
        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </div>
  );
};

export default PageNavigation;