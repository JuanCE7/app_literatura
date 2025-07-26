import React, { useState } from 'react';

// Components
import Navigation from './components/Navigation';
import PageTransition from './components/PageTransition';
import FloatingParticles from './components/FloatingParticles';
import MouseFollower from './components/MouseFollower';
import PageNavigation from './components/PageNavigation';

// Pages
import InicioPage from './pages/InicioPage';
import AutoresPage from './pages/AutoresPage';
import EnsayosPage from './pages/EnsayosPage';
import VideoResenasPage from './pages/VideoResenasPage';
import ComunidadPage from './pages/ComunidadPage';

// Data
import { autores, ensayos, videoResenas } from './data/mockData';
import { useTypewriter } from './hooks/useTypewriter';

// Hooks

function App() {
  const [currentPage, setCurrentPage] = useState('inicio');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const heroTexts = [
    "Descubre la magia de las palabras...",
    "Explorando nuevos horizontes literarios...",
    "Donde la pedagogía encuentra la literatura...",
    "Transformando mentes a través de la lectura..."
  ];

  const currentText = useTypewriter(heroTexts);

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
      {/* Interactive Elements */}
      <FloatingParticles />
      <MouseFollower isTransitioning={isTransitioning} />

      {/* Navigation */}
      <Navigation
        currentPage={currentPage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        navigateToPage={navigateToPage}
      />

      {/* Page Transition */}
      <PageTransition isTransitioning={isTransitioning} />

      {/* Main Content */}
      <div className={`transition-all duration-700 ${isTransitioning ? 'animate-page-turn' : ''}`}>
        {renderCurrentPage()}
      </div>

      {/* Page Navigation */}
      <PageNavigation currentPage={currentPage} navigateToPage={navigateToPage} />
    </div>
  );
}

export default App;