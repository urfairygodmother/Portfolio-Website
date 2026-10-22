import React, { useRef } from 'react';
import { Download, Eye, FileText } from 'lucide-react';
import { WashiTape, SquigglyUnderline } from './DoodleIcons';

interface CvSectionProps {
  onOpenCvModal: (triggerEl?: HTMLElement | null) => void;
}

export const CvSection: React.FC<CvSectionProps> = ({ onOpenCvModal }) => {
  const viewCvBtnRef = useRef<HTMLButtonElement>(null);

  return (
    <section id="cv-summary" className="py-10 md:py-14 relative scroll-mt-20">
      <div className="container">
        <div
          className="card max-w-2xl mx-auto p-6 sm:p-9 relative border-3 border-[#2f4a2a] text-center bg-white"
          style={{
            borderRadius: '30px 24px 34px 22px',
            boxShadow: '0 8px 0 #9bc08f',
          }}
        >
          {/* Top Washi Tape */}
          <div className="absolute -top-3 right-12 pointer-events-none" aria-hidden="true">
            <WashiTape color="rgba(244, 227, 161, 0.9)" rotation={2} />
          </div>

          <div className="inline-flex items-center gap-2 mb-2">
            <FileText size={17} className="text-[#4a6b44]" />
            <span className="font-['Patrick_Hand'] text-base text-[#4a6b44]">
              curriculum vitae
            </span>
          </div>

          <div className="relative inline-block mb-2">
            <h2 className="font-['Fraunces'] text-2xl sm:text-3xl font-extrabold text-[#2f4a2a]">
              Prefer a one-page summary?
            </h2>
            <SquigglyUnderline color="#9bc08f" height={8} />
          </div>

          <p className="font-['Nunito'] text-base sm:text-lg text-[#3b5d35] mb-7 max-w-lg mx-auto">
            View or download my CV in PDF format
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {/* View CV button (styled as secondary .btn.alt) */}
            <button
              ref={viewCvBtnRef}
              onClick={() => onOpenCvModal(viewCvBtnRef.current)}
              className="btn btn-organic btn-alt btn-white text-sm sm:text-base py-2.5 px-5 flex items-center gap-2"
              style={{ borderRadius: '50% 50% 48% 52% / 52% 48% 52% 48%' }}
              aria-label="View CV in modal"
            >
              <Eye size={17} />
              <span>View CV</span>
            </button>

            {/* Download CV button */}
            <a
              href="Nanda-Krishna-C-CV.pdf"
              download="Nanda-Krishna-C-CV.pdf"
              className="btn btn-organic btn-peach text-sm sm:text-base py-2.5 px-5 flex items-center gap-2"
              style={{ borderRadius: '44% 56% 52% 48% / 54% 45% 55% 46%' }}
              aria-label="Download Nanda Krishna C's CV"
            >
              <Download size={17} />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
