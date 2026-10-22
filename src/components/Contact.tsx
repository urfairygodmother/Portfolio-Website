import React, { useState, useRef } from 'react';
import { portfolioContent } from '../data/content';
import {
  SproutDoodle,
  SquigglyUnderline,
  WashiTape,
  HandDrawnArrow,
  GithubIcon,
  LinkedinIcon,
} from './DoodleIcons';
import { Mail, Copy, Check, Send, Download, Eye } from 'lucide-react';

interface ContactProps {
  onOpenCvModal: (triggerEl?: HTMLElement | null) => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenCvModal }) => {
  const { personalInfo } = portfolioContent;
  const [copied, setCopied] = useState(false);
  const contactViewCvRef = useRef<HTMLButtonElement>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative scroll-mt-20">
      <div className="container">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <Mail size={18} className="text-[#4a6b44]" />
            <span className="font-['Patrick_Hand'] text-lg text-[#4a6b44]">
              let's plant a conversation
            </span>
          </div>
          <div className="relative inline-block">
            <h2 className="font-['Fraunces'] text-3xl sm:text-4xl md:text-5xl font-bold text-[#2f4a2a]">
              Get in Touch
            </h2>
            <SquigglyUnderline color="#9bc08f" height={10} />
          </div>
        </div>

        {/* Contact Invitation Card */}
        <div
          className="card max-w-3xl mx-auto p-8 sm:p-12 relative border-3 border-[#2f4a2a] text-center"
          style={{
            borderRadius: '36px 26px 40px 24px',
            boxShadow: '0 8px 0 #9bc08f',
          }}
        >
          {/* Top Washi Tape */}
          <div className="absolute -top-3 left-12 pointer-events-none">
            <WashiTape color="rgba(246, 201, 166, 0.9)" rotation={-3} />
          </div>

          <div
            className="w-14 h-14 mx-auto mb-5 bg-[#bfdcb5] border-2 border-[#2f4a2a] flex items-center justify-center shadow-[0_3px_0_#9bc08f]"
            style={{ borderRadius: '52% 48% 60% 40% / 46% 54% 46% 54%' }}
          >
            <SproutDoodle width={28} height={28} />
          </div>

          <h3 className="font-['Fraunces'] text-2xl sm:text-3xl font-extrabold text-[#2f4a2a] mb-4">
            Have a question, collaboration idea, or just want to connect?
          </h3>

          <p className="font-['Nunito'] text-base sm:text-lg text-[#3b5d35] max-w-xl mx-auto mb-8 leading-relaxed">
            I am always eager to learn, contribute to peer initiatives, and discuss computer science concepts. Feel free to reach out directly!
          </p>

          {/* Large Friendly Email Link with Copy Button */}
          <div className="mb-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn-organic btn-yellow text-lg sm:text-xl py-3.5 px-6 font-bold flex items-center gap-2.5 max-w-full overflow-hidden"
              style={{ borderRadius: '28px 22px 30px 20px' }}
              aria-label={`Send email to ${personalInfo.email}`}
            >
              <Mail size={20} className="shrink-0" />
              <span className="truncate">{personalInfo.email}</span>
              <Send size={16} className="shrink-0" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="btn-organic btn-white text-sm py-3 px-4 flex items-center gap-1.5"
              style={{ borderRadius: '20px 24px 18px 22px' }}
              aria-label="Copy email address to clipboard"
            >
              {copied ? (
                <>
                  <Check size={16} className="text-[#3b5d35]" />
                  <span className="text-[#3b5d35] font-bold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={16} />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Hand-drawn note */}
          <div className="flex items-center justify-center gap-2 mb-8 text-[#5e7d58]" aria-hidden="true">
            <HandDrawnArrow width={36} height={18} color="#5e7d58" />
            <span className="font-['Patrick_Hand'] text-base">
              or find me on these developer platforms
            </span>
          </div>

          {/* Developer Platforms & CV: GitHub, LinkedIn, View CV, Download CV in that order */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {/* 1. GitHub Button */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-organic btn-green text-sm sm:text-base py-3 px-5 flex items-center gap-2"
              style={{
                borderRadius: '56% 44% 52% 48% / 46% 56% 44% 54%',
              }}
              aria-label="Visit Nanda Krishna C's GitHub profile"
            >
              <GithubIcon size={19} />
              <span>GitHub</span>
            </a>

            {/* 2. LinkedIn Button */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-organic btn-peach text-sm sm:text-base py-3 px-5 flex items-center gap-2"
              style={{
                borderRadius: '45% 55% 42% 58% / 58% 42% 58% 42%',
              }}
              aria-label="Visit Nanda Krishna C's LinkedIn profile"
            >
              <LinkedinIcon size={19} />
              <span>LinkedIn</span>
            </a>

            {/* 3. View CV Button (secondary .btn.alt style) */}
            <button
              ref={contactViewCvRef}
              onClick={() => onOpenCvModal(contactViewCvRef.current)}
              className="btn btn-organic btn-alt btn-white text-sm sm:text-base py-3 px-5 flex items-center gap-2"
              style={{
                borderRadius: '50% 50% 48% 52% / 52% 48% 52% 48%',
              }}
              aria-label="View Nanda Krishna C's CV in modal"
            >
              <Eye size={18} />
              <span>View CV</span>
            </button>

            {/* 4. Download CV Button */}
            <a
              href="Nanda-Krishna-C-CV.pdf"
              download="Nanda-Krishna-C-CV.pdf"
              className="btn btn-organic btn-yellow text-sm sm:text-base py-3 px-5 flex items-center gap-2"
              style={{
                borderRadius: '52% 48% 60% 40% / 46% 54% 46% 54%',
              }}
              aria-label="Download Nanda Krishna C's CV"
            >
              <Download size={18} />
              <span>Download CV</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
