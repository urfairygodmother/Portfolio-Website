import React from 'react';
import {
  SproutDoodle,
  LeafDoodle,
  WobblyDivider,
  TwinkleStar,
} from './DoodleIcons';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-16 pt-6 pb-12 overflow-hidden site-footer">
      {/* Organic Wobbly Top Divider */}
      <WobblyDivider
        className="mb-8"
        fill="#e9f3e6"
        strokeColor="#9bc08f"
      />

      <div className="container">
        <div className="flex flex-col items-center justify-center text-center gap-6">
          
          {/* Back to Top Sprout Button */}
          <button
            onClick={scrollToTop}
            className="group flex flex-col items-center gap-1.5 bg-transparent border-none cursor-pointer focus-visible:outline-2"
            aria-label="Scroll back to top of the page"
          >
            <div
              className="w-12 h-12 bg-white group-hover:bg-[#bfdcb5] border-2 border-[#2f4a2a] shadow-[0_4px_0_#9bc08f] flex items-center justify-center transition-all duration-200 group-hover:-translate-y-1"
              style={{ borderRadius: '54% 46% 58% 42% / 44% 56% 44% 56%' }}
            >
              <SproutDoodle width={24} height={24} />
            </div>
            <span className="font-['Patrick_Hand'] text-sm font-bold text-[#4a6b44] flex items-center gap-1">
              <span>back to top</span>
              <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </button>

          {/* Hand-drawn Botanical Accent */}
          <div className="flex items-center gap-2 text-[#5e7d58]" aria-hidden="true">
            <LeafDoodle width={18} height={18} color="#7da572" />
            <span className="font-['Patrick_Hand'] text-base">
              grown with curiosity, HTML, CSS & modern JavaScript
            </span>
            <TwinkleStar width={16} height={16} color="#f4e3a1" />
          </div>

          {/* Copyright & Meta */}
          <div className="space-y-1">
            <p className="font-['Nunito'] text-sm font-semibold text-[#2f4a2a]">
              © {currentYear} Nanda Krishna C. All rights reserved.
            </p>
            <p className="font-['Nunito'] text-xs text-[#5e7d58]">
              Designed with an organic botanical journal aesthetic • VIT Vellore
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};
