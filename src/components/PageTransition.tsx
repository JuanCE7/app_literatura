import React from 'react';
import { BookOpen } from 'lucide-react';

interface PageTransitionProps {
  isTransitioning: boolean;
}

const PageTransition: React.FC<PageTransitionProps> = ({ isTransitioning }) => {
  if (!isTransitioning) return null;

  return (
    <div className="fixed inset-0 z-40 bg-gradient-to-r from-amber-100 via-orange-100 to-yellow-100 animate-page-flip">
      <div className="flex items-center justify-center h-full">
        <div className="text-center px-4">
          <BookOpen className="w-12 h-12 sm:w-16 sm:h-16 text-amber-600 mx-auto mb-4 animate-spin" />
          <p className="text-lg sm:text-xl font-serif text-gray-700">Pasando página...</p>
        </div>
      </div>
    </div>
  );
};

export default PageTransition;