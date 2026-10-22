import React, { useEffect } from 'react';
import type { Project } from '../types/portfolio';
import { SproutDoodle, LeafDoodle, WashiTape, GithubIcon } from './DoodleIcons';
import { X, ExternalLink, Calendar, Wrench, CheckCircle2, Sparkles } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isUpcoming = project.badge === 'Upcoming Project' || project.tools.includes('Coming soon');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1f381c]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div
        className="relative z-10 w-full max-w-3xl bg-white border-3 border-[#2f4a2a] my-8 p-6 sm:p-9 max-h-[90vh] overflow-y-auto"
        style={{
          borderRadius: '32px 24px 34px 22px',
          boxShadow: '0 10px 0 #9bc08f',
        }}
      >
        {/* Top Washi Tape */}
        <div className="absolute -top-3 left-10 pointer-events-none">
          <WashiTape color="rgba(246, 201, 166, 0.9)" rotation={-2} />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 bg-[#e9f3e6] hover:bg-[#bfdcb5] border-2 border-[#2f4a2a] text-[#2f4a2a] transition-transform duration-150 hover:scale-105 cursor-pointer shadow-[0_2px_0_#9bc08f]"
          style={{ borderRadius: '50%' }}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Badge & Year */}
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span
            className="px-3.5 py-1 text-xs font-bold border-2 border-[#2f4a2a] text-[#2f4a2a]"
            style={{
              backgroundColor: project.accentColor || '#bfdcb5',
              borderRadius: '16px 20px 18px 14px',
            }}
          >
            {project.badge}
          </span>
          <span className="flex items-center gap-1 text-xs font-bold text-[#5e7d58]">
            <Calendar size={13} />
            {project.year}
          </span>
          {project.isPlaceholder && (
            <span
              className="px-2.5 py-0.5 text-[11px] font-bold bg-[#fdf8e6] border border-[#d6ba5d] text-[#785d11]"
              style={{ borderRadius: '12px' }}
            >
              Editable in src/data/content.ts
            </span>
          )}
        </div>

        {/* Title */}
        <h2
          id="project-modal-title"
          className="font-['Fraunces'] text-2xl sm:text-4xl font-extrabold text-[#2f4a2a] mb-2 leading-tight"
        >
          {project.title}
        </h2>
        <p className="font-['Patrick_Hand'] text-lg sm:text-xl text-[#4a6b44] mb-6">
          {project.tagline}
        </p>

        {/* Image Preview if available */}
        <div
          className="w-full mb-6 overflow-hidden border-2 border-[#2f4a2a] bg-[#e9f3e6]"
          style={{ borderRadius: '24px 20px 22px 18px' }}
        >
          <img
            src="/algocanvas.jpg"
            alt={project.title}
            className="w-full h-56 sm:h-72 object-cover object-center"
          />
        </div>

        {/* What it is */}
        <div className="mb-6">
          <h3 className="font-['Fraunces'] text-lg font-bold text-[#2f4a2a] flex items-center gap-2 mb-2">
            <SproutDoodle width={18} height={18} />
            <span>Overview & Purpose</span>
          </h3>
          <p className="font-['Nunito'] text-base text-[#2f4a2a] leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Problem & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div
            className="p-4 bg-[#fdf8e6] border-2 border-[#2f4a2a]"
            style={{ borderRadius: '20px 16px 18px 22px' }}
          >
            <h4 className="font-['Fraunces'] font-bold text-sm text-[#2f4a2a] mb-1.5 flex items-center gap-1.5">
              <span>🎯 The Challenge</span>
            </h4>
            <p className="font-['Nunito'] text-xs sm:text-sm text-[#2f4a2a] leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div
            className="p-4 bg-[#e9f3e6] border-2 border-[#2f4a2a]"
            style={{ borderRadius: '16px 22px 20px 18px' }}
          >
            <h4 className="font-['Fraunces'] font-bold text-sm text-[#2f4a2a] mb-1.5 flex items-center gap-1.5">
              <span>💡 {isUpcoming ? 'Planned Implementation' : 'The Implementation'}</span>
            </h4>
            <p className="font-['Nunito'] text-xs sm:text-sm text-[#2f4a2a] leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Learnings */}
        <div className="mb-6">
          <h3 className="font-['Fraunces'] text-lg font-bold text-[#2f4a2a] flex items-center gap-2 mb-3">
            <LeafDoodle width={18} height={18} />
            <span>{isUpcoming ? 'What I Plan to Learn While Building' : 'What I Learned Building This'}</span>
          </h3>
          <ul className="space-y-2 list-none p-0 m-0">
            {project.learnings.map((learning, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 font-['Nunito'] text-sm sm:text-base text-[#2f4a2a]"
              >
                <CheckCircle2 size={16} className="text-[#4a6b44] mt-1 shrink-0" />
                <span>{learning}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tools */}
        <div className="mb-8">
          <h3 className="font-['Fraunces'] text-sm font-bold text-[#5e7d58] flex items-center gap-1.5 uppercase tracking-wider mb-2.5">
            <Wrench size={14} />
            <span>Technologies & Tools</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, idx) => (
              <span
                key={idx}
                className="blob-chip bg-[#ffffff]"
                style={{ borderRadius: '14px 18px 16px 20px' }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t-2 border-[#e9f3e6]">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-organic btn-white text-sm py-2.5 px-4 flex items-center gap-2"
              style={{ borderRadius: '20px 16px 22px 18px' }}
            >
              <GithubIcon size={16} />
              <span>Explore Code on GitHub</span>
              <ExternalLink size={13} />
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-organic btn-yellow text-sm py-2.5 px-4"
              style={{ borderRadius: '18px 22px 16px 20px' }}
            >
              <span>Live Demonstration</span>
              <ExternalLink size={13} />
            </a>
          )}
          {!project.githubUrl && !project.demoUrl && (
            <div
              className="px-3.5 py-2 bg-[#fdf8e6] border-2 border-[#2f4a2a] text-[#785d11] font-bold text-xs sm:text-sm flex items-center gap-2"
              style={{ borderRadius: '16px 20px 18px 14px' }}
            >
              <Sparkles size={15} className="text-[#987a1d]" />
              <span>Coming soon — Code repository & live demo will be posted once built</span>
            </div>
          )}
          <button
            onClick={onClose}
            className="ml-auto font-bold text-sm text-[#5e7d58] hover:text-[#2f4a2a] bg-transparent border-none cursor-pointer py-2 px-3"
          >
            Close Write-up
          </button>
        </div>

      </div>
    </div>
  );
};
