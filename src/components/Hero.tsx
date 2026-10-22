import React, { useRef } from 'react';
import { portfolioContent } from '../data/content';
import {
  SproutDoodle,
  SquigglyUnderline,
  TwinkleStar,
  HandDrawnArrow,
  LeafDoodle,
} from './DoodleIcons';
import { Download, ArrowDown, Eye } from 'lucide-react';

interface HeroProps {
  onExploreWork: () => void;
  onOpenCvModal: (triggerEl?: HTMLElement | null) => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onOpenCvModal }) => {
  const { personalInfo } = portfolioContent;
  const heroViewCvRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
      {/* Decorative Floating Blobs (Aria-hidden) */}
      <div
        className="blob morph-blob-1 absolute -top-10 -left-12 opacity-70 pointer-events-none"
        style={{
          width: '240px',
          height: '220px',
          background: '#bfdcb5',
          zIndex: 0,
        }}
        aria-hidden="true"
      />
      <div
        className="blob morph-blob-2 absolute top-1/4 -right-14 opacity-60 pointer-events-none hidden sm:block"
        style={{
          width: '310px',
          height: '280px',
          background: '#d3ebd0',
          zIndex: 0,
        }}
        aria-hidden="true"
      />
      <div
        className="blob absolute bottom-0 left-1/3 opacity-40 pointer-events-none"
        style={{
          width: '180px',
          height: '160px',
          background: '#f4e3a1',
          borderRadius: '45% 55% 62% 38% / 51% 39% 61% 49%',
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          
          {/* Friendly Status / Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border-2 border-[#2f4a2a] shadow-[0_3px_0_#9bc08f] mb-6 transform -rotate-1 hover:rotate-0 transition-transform duration-200"
            style={{ borderRadius: '24px 30px 22px 28px' }}
          >
            <SproutDoodle width={20} height={20} />
            <span className="font-['Nunito'] text-xs sm:text-sm font-bold text-[#2f4a2a]">
              {personalInfo.statusText}
            </span>
          </div>

          {/* Heading with Squiggly Underline */}
          <div className="relative mb-5 inline-block">
            <h1 className="font-['Fraunces'] text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#2f4a2a] tracking-tight">
              {personalInfo.name}
            </h1>
            <SquigglyUnderline
              className="mt-1"
              color="#9bc08f"
              height={14}
            />
            {/* Playful twinkling doodle stars */}
            <div className="absolute -top-4 -right-6 hidden sm:block" aria-hidden="true">
              <TwinkleStar width={24} height={24} color="#f4e3a1" />
            </div>
            <div className="absolute top-1/2 -left-8 hidden sm:block" aria-hidden="true">
              <LeafDoodle width={24} height={24} color="#4a6b44" />
            </div>
          </div>

          {/* Role badge */}
          <div
            className="px-5 py-2 bg-[#bfdcb5] border-2 border-[#2f4a2a] shadow-[0_4px_0_#9bc08f] mb-5 transform rotate-1 inline-block"
            style={{ borderRadius: '28px 22px 32px 18px' }}
          >
            <span className="font-['Nunito'] font-extrabold text-sm sm:text-base text-[#2f4a2a]">
              {personalInfo.role}
            </span>
          </div>

          {/* Handwritten Tagline & Bio */}
          <p className="font-['Patrick_Hand'] text-xl sm:text-2xl text-[#3b5d35] max-w-2xl mb-4 leading-snug">
            "{personalInfo.tagline}"
          </p>

          <p className="font-['Nunito'] text-base sm:text-lg text-[#2f4a2a] max-w-xl mb-9 leading-relaxed opacity-95">
            {personalInfo.shortBio}
          </p>

          {/* CTA Buttons: "See my work", "View CV", "Download CV" in that order */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full">
            {/* 1. See my work */}
            <button
              onClick={onExploreWork}
              className="btn btn-organic btn-yellow text-sm sm:text-base px-5 sm:px-6 py-3 flex items-center gap-2"
              style={{ borderRadius: '34% 66% 41% 59% / 54% 45% 55% 46%' }}
              aria-label="See my work"
            >
              <span>See my work</span>
              <ArrowDown size={17} className="animate-bounce" />
            </button>

            {/* 2. View CV (secondary .btn.alt style) */}
            <button
              ref={heroViewCvRef}
              onClick={() => onOpenCvModal(heroViewCvRef.current)}
              className="btn btn-organic btn-alt btn-white text-sm sm:text-base px-5 sm:px-6 py-3 flex items-center gap-2"
              style={{ borderRadius: '50% 50% 48% 52% / 52% 48% 52% 48%' }}
              aria-label="View Nanda Krishna C's CV in modal"
            >
              <Eye size={17} />
              <span>View CV</span>
            </button>

            {/* 3. Download CV */}
            <a
              href="Nanda-Krishna-C-CV.pdf"
              download="Nanda-Krishna-C-CV.pdf"
              className="btn btn-organic btn-peach text-sm sm:text-base px-5 sm:px-6 py-3 flex items-center gap-2"
              style={{ borderRadius: '55% 45% 62% 38% / 46% 57% 43% 54%' }}
              aria-label="Download Nanda Krishna C's CV"
            >
              <Download size={17} />
              <span>Download CV</span>
            </a>
          </div>

          {/* Hand-drawn arrow doodle pointing down */}
          <div className="mt-8 flex items-center gap-2 text-[#5e7d58]" aria-hidden="true">
            <span className="font-['Patrick_Hand'] text-base">crafted by hand with curiosity</span>
            <div className="rotate-90">
              <HandDrawnArrow width={32} height={18} color="#5e7d58" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
