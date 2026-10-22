import React, { useState, useRef } from 'react';
import { SproutDoodle } from './DoodleIcons';
import { Download, Menu, X, FileText, Eye } from 'lucide-react';

interface NavbarProps {
  currentView: 'home' | 'cv';
  onNavigate: (view: 'home' | 'cv') => void;
  onOpenCvModal: (triggerEl?: HTMLElement | null) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, onOpenCvModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navViewCvRef = useRef<HTMLButtonElement>(null);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (currentView !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 py-3 px-4 md:px-8 transition-all duration-200">
      <nav
        aria-label="Main Navigation"
        className="max-w-6xl mx-auto flex items-center justify-between px-5 py-3 bg-white/95 backdrop-blur-sm border-2 border-[#2f4a2a] shadow-[0_4px_0_#9bc08f]"
        style={{
          borderRadius: '26px 20px 24px 22px',
        }}
      >
        {/* Brand / Logo */}
        <button
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 text-left group bg-transparent border-none cursor-pointer p-0"
          aria-label="Nanda Krishna C - Home"
        >
          <div
            className="w-10 h-10 flex items-center justify-center bg-[#bfdcb5] border-2 border-[#2f4a2a] transition-transform duration-200 group-hover:rotate-6"
            style={{ borderRadius: '54% 46% 60% 40% / 45% 58% 42% 55%' }}
          >
            <SproutDoodle width={22} height={22} />
          </div>
          <div>
            <span className="font-['Fraunces'] text-lg font-bold text-[#2f4a2a] leading-none block">
              Nanda Krishna C
            </span>
            <span className="font-['Patrick_Hand'] text-xs text-[#5e7d58] block leading-tight">
              VIT Vellore • 1st Year CSE
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection('about')}
            className="font-bold text-sm text-[#2f4a2a] hover:text-[#5e7d58] transition-colors bg-transparent border-none cursor-pointer py-1"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('work')}
            className="font-bold text-sm text-[#2f4a2a] hover:text-[#5e7d58] transition-colors bg-transparent border-none cursor-pointer py-1"
          >
            Selected Work
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="font-bold text-sm text-[#2f4a2a] hover:text-[#5e7d58] transition-colors bg-transparent border-none cursor-pointer py-1"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('education')}
            className="font-bold text-sm text-[#2f4a2a] hover:text-[#5e7d58] transition-colors bg-transparent border-none cursor-pointer py-1"
          >
            Education
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="font-bold text-sm text-[#2f4a2a] hover:text-[#5e7d58] transition-colors bg-transparent border-none cursor-pointer py-1"
          >
            Contact
          </button>
          
          {/* CV View Toggle */}
          <button
            onClick={() => {
              if (currentView === 'home') {
                onNavigate('cv');
              } else {
                onNavigate('home');
              }
            }}
            className={`font-bold text-sm px-3.5 py-1.5 border-2 border-[#2f4a2a] flex items-center gap-1.5 transition-all cursor-pointer ${
              currentView === 'cv'
                ? 'bg-[#f4e3a1] shadow-[0_3px_0_#9bc08f]'
                : 'bg-[#e9f3e6] hover:bg-[#bfdcb5] shadow-[0_2px_0_#9bc08f]'
            }`}
            style={{ borderRadius: '20px 18px 22px 16px' }}
          >
            <FileText size={15} />
            {currentView === 'cv' ? 'Portfolio Home' : 'CV / Resume'}
          </button>

          {/* View CV plain text link before Download CV */}
          <button
            ref={navViewCvRef}
            type="button"
            onClick={() => onOpenCvModal(navViewCvRef.current)}
            className="font-bold text-sm text-[#2f4a2a] hover:text-[#5e7d58] transition-colors bg-transparent border-none cursor-pointer py-1 underline-offset-4 hover:underline"
            aria-label="View Nanda Krishna C's CV in modal"
          >
            View CV
          </button>

          {/* Direct Download Button */}
          <a
            href="Nanda-Krishna-C-CV.pdf"
            download="Nanda-Krishna-C-CV.pdf"
            className="btn btn-organic btn-peach text-xs py-2 px-3.5 flex items-center gap-1.5"
            style={{ borderRadius: '48% 52% 46% 54% / 55% 45% 55% 45%' }}
            aria-label="Download Nanda Krishna C's PDF CV"
          >
            <Download size={14} />
            <span>Download CV</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href="Nanda-Krishna-C-CV.pdf"
            download="Nanda-Krishna-C-CV.pdf"
            className="btn btn-organic btn-peach p-2 text-xs"
            aria-label="Download CV"
            style={{ borderRadius: '50%' }}
          >
            <Download size={15} />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border-2 border-[#2f4a2a] bg-[#e9f3e6] rounded-xl text-[#2f4a2a] cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className="md:hidden mt-2 max-w-6xl mx-auto bg-white border-2 border-[#2f4a2a] shadow-[0_6px_0_#9bc08f] p-4 flex flex-col gap-3"
          style={{ borderRadius: '22px 28px 24px 20px' }}
        >
          <button
            onClick={() => scrollToSection('about')}
            className="text-left font-bold py-2 px-3 text-[#2f4a2a] hover:bg-[#e9f3e6] rounded-lg bg-transparent border-none cursor-pointer"
          >
            🌱 About Nanda
          </button>
          <button
            onClick={() => scrollToSection('work')}
            className="text-left font-bold py-2 px-3 text-[#2f4a2a] hover:bg-[#e9f3e6] rounded-lg bg-transparent border-none cursor-pointer"
          >
            📂 Selected Work
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-left font-bold py-2 px-3 text-[#2f4a2a] hover:bg-[#e9f3e6] rounded-lg bg-transparent border-none cursor-pointer"
          >
            🌿 Skills & Garden
          </button>
          <button
            onClick={() => scrollToSection('education')}
            className="text-left font-bold py-2 px-3 text-[#2f4a2a] hover:bg-[#e9f3e6] rounded-lg bg-transparent border-none cursor-pointer"
          >
            🎓 Education (VIT Vellore)
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-left font-bold py-2 px-3 text-[#2f4a2a] hover:bg-[#e9f3e6] rounded-lg bg-transparent border-none cursor-pointer"
          >
            📬 Contact
          </button>
          <div className="pt-2 border-t border-[#9bc08f] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCvModal();
              }}
              className="btn btn-organic btn-white w-full text-center py-2 flex items-center justify-center gap-2"
            >
              <Eye size={16} />
              <span>View CV (Modal)</span>
            </button>
            <a
              href="Nanda-Krishna-C-CV.pdf"
              download="Nanda-Krishna-C-CV.pdf"
              className="btn btn-organic btn-peach w-full text-center py-2 flex items-center justify-center gap-2"
            >
              <Download size={16} />
              <span>Download CV</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate(currentView === 'home' ? 'cv' : 'home');
              }}
              className="btn btn-organic btn-yellow w-full text-center py-2 flex items-center justify-center gap-2"
            >
              <FileText size={16} />
              <span>{currentView === 'cv' ? 'Back to Portfolio' : 'ATS CV Preview (/cv)'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
