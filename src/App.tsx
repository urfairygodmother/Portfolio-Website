import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { CvPage } from './pages/CvPage';
import { CvModal } from './components/CvModal';

export function App() {
  const [currentView, setCurrentView] = useState<'home' | 'cv'>('home');
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [cvModalTrigger, setCvModalTrigger] = useState<HTMLElement | null>(null);

  // Sync route with URL path / hash
  useEffect(() => {
    const checkRoute = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path.includes('/cv') || hash === '#cv') {
        setCurrentView('cv');
      } else {
        setCurrentView('home');
      }
    };

    checkRoute();
    window.addEventListener('popstate', checkRoute);
    window.addEventListener('hashchange', checkRoute);
    return () => {
      window.removeEventListener('popstate', checkRoute);
      window.removeEventListener('hashchange', checkRoute);
    };
  }, []);

  const handleNavigate = (view: 'home' | 'cv') => {
    setCurrentView(view);
    if (view === 'cv') {
      window.history.pushState({}, '', '#cv');
    } else {
      window.history.pushState({}, '', window.location.pathname.replace(/\/cv\/?$/, '') || '/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCvModal = (trigger?: HTMLElement | null) => {
    setCvModalTrigger(trigger || (document.activeElement as HTMLElement) || null);
    setIsCvModalOpen(true);
  };

  const handleCloseCvModal = () => {
    setIsCvModalOpen(false);
  };

  return (
    <div className="min-h-screen relative text-[#2f4a2a]">
      {/* Subtle paper grain texture */}
      <div className="paper-grain" aria-hidden="true" />

      {/* Global Navbar */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenCvModal={handleOpenCvModal}
      />

      {/* Dynamic View */}
      {currentView === 'home' ? (
        <Home
          onOpenCvModal={handleOpenCvModal}
        />
      ) : (
        <CvPage onBackToHome={() => handleNavigate('home')} />
      )}

      {/* View CV Modal */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={handleCloseCvModal}
        triggerElement={cvModalTrigger}
      />
    </div>
  );
}

export default App;
