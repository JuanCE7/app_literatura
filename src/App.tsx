import React, { useState } from 'react';

// Components
import Navigation from './components/Navigation';
import PageTransition from './components/PageTransition';
import FloatingElements from './components/FloatingElements';
import PageNavigation from './components/PageNavigation';

// Pages
import InicioPage from './pages/InicioPage';
import AutoresPage from './pages/AutoresPage';
import EnsayosPage from './pages/EnsayosPage';
import VideoResenasPage from './pages/VideoResenasPage';
import ComunidadPage from './pages/ComunidadPage';

// Hooks
import { useTypewriter } from './hooks/useTypewriter';
import { useParticles } from './hooks/useParticles';
import { useMousePosition } from './hooks/useMousePosition';

// Data
import { autores } from './data/autores';
import { ensayos } from './data/ensayos';
import { videoResenas } from './data/videos';

function App() {
  const [currentPage, setCurrentPage] = useState('inicio');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Custom hooks
  const heroTexts = [
    "Descubre la magia de las palabras...",
    "Explorando nuevos horizontes literarios...",
    "Donde la pedagogía encuentra la literatura...",
    "Transformando mentes a través de la lectura..."
  ];
  
  const currentText = useTypewriter(heroTexts);
  const particles = useParticles(2000);
  const mousePosition = useMousePosition();

  const navigateToPage = (pageId: string) => {
    if (pageId === currentPage) return;
    
    setIsTransitioning(true);
    setIsMenuOpen(false);
    
    setTimeout(() => {
      setCurrentPage(pageId);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 600);
  };

  const getPageTransitionClass = () => {
    if (!isTransitioning) return '';
    return 'animate-page-turn';
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'inicio':
        return <InicioPage currentText={currentText} navigateToPage={navigateToPage} />;
      case 'autores':
        return <AutoresPage autores={autores} />;
      case 'ensayos':
        return <EnsayosPage ensayos={ensayos} />;
      case 'video-resenas':
        return <VideoResenasPage videos={videoResenas} />;
      case 'comunidad':
        return <ComunidadPage />;
      default:
        return <InicioPage currentText={currentText} navigateToPage={navigateToPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Floating Elements */}
      <FloatingElements 
        particles={particles} 
        mousePosition={mousePosition} 
        isTransitioning={isTransitioning} 
      />

      {/* Navigation */}
      <Navigation
        currentPage={currentPage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        navigateToPage={navigateToPage}
      />

      {/* Page Transition Overlay */}
      <PageTransition isTransitioning={isTransitioning} />

      {/* Main Content */}
      <div className={`transition-all duration-700 ${getPageTransitionClass()}`}>
        {renderCurrentPage()}
      </div>

      {/* Page Navigation */}
      <PageNavigation currentPage={currentPage} navigateToPage={navigateToPage} />
    </div>
  );
}

export default App;