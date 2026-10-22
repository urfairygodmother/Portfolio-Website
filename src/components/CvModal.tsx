import React, { useEffect, useRef } from 'react';
import { X, ExternalLink, Download, FileText } from 'lucide-react';
import { WashiTape, SproutDoodle } from './DoodleIcons';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  triggerElement?: HTMLElement | null;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose, triggerElement }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  // Preserve the triggering button to restore focus when the modal closes
  useEffect(() => {
    if (triggerElement) {
      triggerRef.current = triggerElement;
    } else if (isOpen && document.activeElement instanceof HTMLElement) {
      triggerRef.current = document.activeElement;
    }
  }, [isOpen, triggerElement]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
      // Accessibility: move focus into the modal
      requestAnimationFrame(() => {
        closeButtonRef.current?.focus();
      });
      // Prevent background scrolling
      document.body.style.overflow = 'hidden';
    } else {
      if (dialog.open) {
        dialog.close();
      }
      document.body.style.overflow = '';
      // Accessibility: return focus to the button that opened the modal
      triggerRef.current?.focus();
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClose = () => {
    onClose();
  };

  // Close on Escape
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDialogElement>) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      handleClose();
    }
  };

  // Close when clicking directly on the backdrop
  const handleDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      handleClose();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      id="cv-modal"
      className="cv-dialog"
      aria-labelledby="cv-modal-title"
      onKeyDown={handleKeyDown}
      onClick={handleDialogClick}
      onCancel={(e) => {
        e.preventDefault();
        handleClose();
      }}
    >
      {/* Modal Card with blob corners, border, and offset shadow */}
      <div
        className="relative w-full max-w-4xl bg-white border-3 border-[#2f4a2a] p-4 sm:p-7 my-auto max-h-[94vh] flex flex-col"
        style={{
          borderRadius: '32px 24px 34px 22px',
          boxShadow: '0 10px 0 #9bc08f',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Washi Tape Accent */}
        <div className="absolute -top-3 left-10 pointer-events-none" aria-hidden="true">
          <WashiTape color="rgba(246, 201, 166, 0.9)" rotation={-2} />
        </div>

        {/* Modal Header */}
        <div className="flex items-center justify-between gap-3 mb-3 pb-3 border-b-2 border-[#e9f3e6] flex-wrap">
          <div className="flex items-center gap-2.5">
            <div
              className="w-9 h-9 flex items-center justify-center bg-[#bfdcb5] border-2 border-[#2f4a2a] shrink-0"
              style={{ borderRadius: '54% 46% 60% 40% / 45% 58% 42% 55%' }}
            >
              <SproutDoodle width={20} height={20} />
            </div>
            <div>
              <h2
                id="cv-modal-title"
                className="font-['Fraunces'] text-lg sm:text-2xl font-extrabold text-[#2f4a2a] leading-none"
              >
                Curriculum Vitae — Nanda Krishna C
              </h2>
              <span className="font-['Patrick_Hand'] text-xs sm:text-sm text-[#5e7d58] block mt-0.5">
                B.Tech CSE • VIT Vellore (2026–2030)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 ml-auto">
            {/* Open in new tab link in header */}
            <a
              href="Nanda-Krishna-C-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-bold text-[#2f4a2a] hover:text-[#5e7d58] transition-colors flex items-center gap-1.5 underline decoration-[#9bc08f] decoration-2 underline-offset-4 py-1"
              title="Open CV PDF in full-screen tab"
            >
              <span>Open in new tab</span>
              <ExternalLink size={14} />
            </a>

            {/* Close Button */}
            <button
              ref={closeButtonRef}
              onClick={handleClose}
              className="p-2 bg-[#e9f3e6] hover:bg-[#bfdcb5] border-2 border-[#2f4a2a] text-[#2f4a2a] transition-transform duration-150 hover:scale-105 cursor-pointer shadow-[0_2px_0_#9bc08f] focus-visible:outline-3 focus-visible:outline-[#2f4a2a]"
              style={{ borderRadius: '50%' }}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="w-full flex-1 min-h-[360px] sm:min-h-[460px] md:h-[75vh] max-h-[75vh] relative rounded-xl overflow-hidden border-2 border-[#2f4a2a] bg-[#f7faf5] mb-3">
          <iframe
            src="Nanda-Krishna-C-CV.pdf#toolbar=0&view=FitH"
            title="Nanda Krishna C CV"
            className="w-full h-full border-none block"
          >
            <p className="p-4 text-center text-[#2f4a2a] font-['Nunito']">
              Your browser does not support inline PDF viewing.{' '}
              <a
                href="Nanda-Krishna-C-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline"
              >
                Open in new tab
              </a>{' '}
              or{' '}
              <a
                href="Nanda-Krishna-C-CV.pdf"
                download="Nanda-Krishna-C-CV.pdf"
                className="font-bold underline"
              >
                Download CV
              </a>
              .
            </p>
          </iframe>
        </div>

        {/* Fallback bar for mobile or browsers unable to render inline PDFs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3 bg-[#e9f3e6] border-2 border-[#2f4a2a]"
          style={{ borderRadius: '18px 22px 16px 20px' }}
        >
          <div className="flex items-center gap-2 text-center sm:text-left">
            <FileText size={18} className="text-[#4a6b44] shrink-0 hidden sm:block" />
            <span className="font-['Nunito'] text-xs sm:text-sm font-bold text-[#2f4a2a]">
              Can't see the CV here?
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
            <a
              href="Nanda-Krishna-C-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-organic btn-yellow text-xs py-1.5 px-3 flex items-center gap-1.5"
              style={{ borderRadius: '16px 20px 18px 14px' }}
            >
              <span>Open in new tab</span>
              <ExternalLink size={13} />
            </a>

            <a
              href="Nanda-Krishna-C-CV.pdf"
              download="Nanda-Krishna-C-CV.pdf"
              className="btn btn-organic btn-peach text-xs py-1.5 px-3 flex items-center gap-1.5"
              style={{ borderRadius: '14px 18px 16px 20px' }}
            >
              <Download size={13} />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </dialog>
  );
};
