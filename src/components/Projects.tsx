import React, { useState, useRef, useEffect } from 'react';
import { portfolioContent } from '../data/content';
import type { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import {
  SproutDoodle,
  SquigglyUnderline,
  WashiTape,
} from './DoodleIcons';
import {
  ArrowUpRight,
  FolderGit2,
  Calendar,
  X,
  Award,
  Sparkles,
  Activity,
  FileText,
  Eye,
  Download,
  BookOpen,
  UserCheck,
  AlertCircle,
} from 'lucide-react';

export const Projects: React.FC = () => {
  const { projects } = portfolioContent;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // MTSE Dialog state
  const [isMtseModalOpen, setIsMtseModalOpen] = useState(false);
  const mtseCardRef = useRef<HTMLElement>(null);
  const mtseDialogRef = useRef<HTMLDialogElement>(null);
  const mtseCloseBtnRef = useRef<HTMLButtonElement>(null);

  // Smart Glove Dialog state
  const [isSmartGloveModalOpen, setIsSmartGloveModalOpen] = useState(false);
  const smartGloveCardRef = useRef<HTMLElement>(null);
  const smartGloveDialogRef = useRef<HTMLDialogElement>(null);
  const smartGloveCloseBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const dialog = mtseDialogRef.current;
    if (!dialog) return;

    if (isMtseModalOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
      requestAnimationFrame(() => {
        mtseCloseBtnRef.current?.focus();
      });
      document.body.style.overflow = 'hidden';
    } else {
      if (dialog.open) {
        dialog.close();
      }
      document.body.style.overflow = '';
      mtseCardRef.current?.focus();
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMtseModalOpen]);

  useEffect(() => {
    const dialog = smartGloveDialogRef.current;
    if (!dialog) return;

    if (isSmartGloveModalOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
      requestAnimationFrame(() => {
        smartGloveCloseBtnRef.current?.focus();
      });
      document.body.style.overflow = 'hidden';
    } else {
      if (dialog.open) {
        dialog.close();
      }
      document.body.style.overflow = '';
      smartGloveCardRef.current?.focus();
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isSmartGloveModalOpen]);

  // Distinct hand-cut corner radii for each card so none match
  const cardCornerStyles = [
    '32px 24px 36px 20px',
    '24px 34px 22px 32px',
    '30px 22px 34px 26px',
  ];

  return (
    <section id="work" className="py-16 md:py-24 relative scroll-mt-20">
      <div className="container">
        
        {/* Section Heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <SproutDoodle width={22} height={22} />
            <span className="font-['Patrick_Hand'] text-lg text-[#4a6b44]">
              experiments, scripts, & web applications
            </span>
          </div>
          <div className="relative inline-block">
            <h2 className="font-['Fraunces'] text-3xl sm:text-4xl md:text-5xl font-bold text-[#2f4a2a]">
              Selected Work
            </h2>
            <SquigglyUnderline color="#9bc08f" height={11} />
          </div>
          <p className="font-['Nunito'] text-base text-[#4a6b44] max-w-xl mx-auto mt-4">
            A collection of hands-on projects exploring JavaScript mechanics, responsive web layouts, and computer science foundations. Click any card for the full study.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {/* 1. Smart Glove Project Card (Finished Work) */}
          <article
            ref={smartGloveCardRef}
            onClick={() => setIsSmartGloveModalOpen(true)}
            className="card group cursor-pointer flex flex-col justify-between p-6 sm:p-7 relative border-2 border-[#2f4a2a] transition-all duration-200 col-span-1 motion-reduce:transform-none motion-reduce:transition-none"
            style={{
              borderRadius: '24px 34px 22px 32px',
              boxShadow: '0 6px 0 #9bc08f',
              transform: 'rotate(0.8deg)',
            }}
            tabIndex={0}
            role="button"
            aria-label="Open details for project: Smart Glove for Physiotherapy Tracking"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsSmartGloveModalOpen(true);
              }
            }}
          >
            {/* Washi Tape */}
            <div className="absolute -top-3 right-6 pointer-events-none">
              <WashiTape color="rgba(191, 220, 181, 0.9)" rotation={2} />
            </div>

            <div>
              {/* Top metadata row */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span
                  className="px-3 py-1 text-xs font-bold border-1.5 border-[#2f4a2a] text-[#2f4a2a] bg-[#bfdcb5]"
                  style={{ borderRadius: '16px 20px 18px 14px' }}
                >
                  Multidisciplinary project
                </span>
                <span className="font-['Patrick_Hand'] text-sm font-bold text-[#5e7d58]">
                  September 2026, VIT
                </span>
              </div>

              {/* Visual Preview Banner matching AlgoCanvas height */}
              <div
                className="w-full h-44 mb-4 overflow-hidden border-2 border-[#2f4a2a] bg-[#fdf8e6] relative p-3 sm:p-4 flex flex-col justify-between"
                style={{ borderRadius: '20px 18px 22px 16px' }}
              >
                <div className="flex items-center justify-between border-b border-[#9bc08f] pb-1.5">
                  <div className="flex items-center gap-1.5">
                    <Activity size={16} className="text-[#4a6b44]" />
                    <span className="font-['Fraunces'] font-bold text-xs sm:text-sm text-[#2f4a2a]">
                      Physiotherapy Tracking
                    </span>
                  </div>
                  <span className="font-['Patrick_Hand'] text-xs font-bold text-[#4a6b44]">
                    Hardware & ML Model
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center my-auto py-1">
                  <div className="p-2 bg-[#ffffff] border border-[#2f4a2a] rounded-lg shadow-[0_2px_0_#9bc08f]">
                    <span className="font-['Patrick_Hand'] text-xs font-bold text-[#2f4a2a] block">Flex Sensors</span>
                    <span className="text-[10px] text-[#5e7d58] block font-['Nunito']">5 Fingers</span>
                  </div>
                  <div className="p-2 bg-[#bfdcb5] border border-[#2f4a2a] rounded-lg shadow-[0_2px_0_#9bc08f]">
                    <span className="font-['Patrick_Hand'] text-xs font-bold text-[#2f4a2a] block">Wrist IMU</span>
                    <span className="text-[10px] text-[#2f4a2a] block font-['Nunito']">ESP32 Core</span>
                  </div>
                  <div className="p-2 bg-[#f6c9a6] border border-[#2f4a2a] rounded-lg shadow-[0_2px_0_#9bc08f]">
                    <span className="font-['Patrick_Hand'] text-xs font-bold text-[#2f4a2a] block">ML Classifier</span>
                    <span className="text-[10px] text-[#2f4a2a] block font-['Nunito']">Rep Scoring</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1 border-t border-[#e9f3e6] text-[11px] text-[#5e7d58] font-['Patrick_Hand']">
                  <span>Sensor Glove Hardware</span>
                  <span>Supervised Learning</span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="font-['Fraunces'] text-xl sm:text-2xl font-bold text-[#2f4a2a] mb-1 group-hover:text-[#44643d] transition-colors leading-snug">
                Smart Glove for Physiotherapy Tracking
              </h3>
              <p className="font-['Patrick_Hand'] text-sm font-bold text-[#5e7d58] mb-2.5">
                Multidisciplinary project
              </p>

              {/* Short text */}
              <p className="font-['Nunito'] text-sm sm:text-base text-[#2f4a2a] opacity-90 mb-4 line-clamp-3 leading-relaxed">
                A project proposal for a sensor glove that tracks finger and hand movement during rehabilitation exercises, with machine learning to count repetitions and score how correct each one is.
              </p>
            </div>

            <div>
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {['Flex + IMU sensors', 'ESP32', 'Machine learning', 'Rehab tech'].map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 text-xs font-bold text-[#2f4a2a] bg-[#e9f3e6] border border-[#9bc08f]"
                    style={{ borderRadius: '12px 14px 12px 14px' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links on the card: View PDF and Download PDF */}
              <div
                className="flex flex-wrap items-center gap-2 mb-4"
                onClick={(e) => e.stopPropagation()}
              >
                <a
                  href="/smart-glove-project.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-organic btn-alt btn-white text-xs py-1.5 px-3 flex items-center gap-1.5"
                  style={{ borderRadius: '14px 18px 16px 14px' }}
                  aria-label="View the Smart Glove project PDF in a new tab"
                >
                  <Eye size={13} />
                  <span>View PDF</span>
                </a>

                <a
                  href="/smart-glove-project.pdf"
                  download="Smart-Glove-Project.pdf"
                  className="btn btn-organic btn-peach text-xs py-1.5 px-3 flex items-center gap-1.5"
                  style={{ borderRadius: '16px 14px 14px 18px' }}
                  aria-label="Download the Smart Glove project PDF"
                >
                  <Download size={13} />
                  <span>Download PDF</span>
                </a>
              </div>

              {/* Card Footer Action */}
              <div className="pt-3 border-t border-[#e9f3e6] flex items-center justify-between">
                <span className="font-['Patrick_Hand'] text-sm font-bold text-[#4a6b44] flex items-center gap-1 group-hover:translate-x-1 transition-transform motion-reduce:transform-none">
                  Read project proposal
                  <ArrowUpRight size={15} />
                </span>
                <div className="p-1.5 bg-[#e9f3e6] group-hover:bg-[#bfdcb5] rounded-full border border-[#2f4a2a] transition-colors">
                  <FileText size={14} className="text-[#2f4a2a]" />
                </div>
              </div>
            </div>
          </article>

          {/* 2. Card B: Mathematics & Problem Solving Exploration (Finished Work) */}
          <article
            className="card flex flex-col justify-between p-6 sm:p-7 relative border-2 border-[#2f4a2a] transition-all duration-200 col-span-1 motion-reduce:transform-none motion-reduce:transition-none"
            style={{
              borderRadius: '26px 32px 34px 20px',
              boxShadow: '0 6px 0 #9bc08f',
              transform: 'rotate(0.7deg)',
            }}
          >
            {/* Washi Tape */}
            <div className="absolute -top-3 right-8 pointer-events-none">
              <WashiTape color="rgba(244, 227, 161, 0.85)" rotation={2} />
            </div>

            <div>
              {/* Meta row */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="font-['Patrick_Hand'] text-base sm:text-lg font-bold text-[#5e7d58]">
                  Over the years
                </span>
                <span
                  className="px-3 py-1 text-xs font-bold border-1.5 border-[#2f4a2a] text-[#2f4a2a] bg-[#d3ebd0]"
                  style={{ borderRadius: '16px 20px 18px 14px' }}
                >
                  Exploration
                </span>
              </div>

              {/* Title */}
              <h3 className="font-['Fraunces'] text-xl sm:text-2xl font-bold text-[#2f4a2a] mb-3 leading-snug">
                Math and out-of-the-box thinking exams
              </h3>

              {/* Text */}
              <p className="font-['Nunito'] text-sm sm:text-base text-[#2f4a2a] opacity-90 mb-5 leading-relaxed">
                Took part in multiple mathematics and out-of-the-box thinking examinations.
              </p>
            </div>

            <div>
              {/* Tag Chips */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {['Mathematics', 'Logical thinking'].map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 text-xs font-bold text-[#2f4a2a] bg-[#e9f3e6] border border-[#9bc08f]"
                    style={{ borderRadius: '12px 14px 12px 14px' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-[#e9f3e6] flex items-center justify-between text-xs font-bold text-[#5e7d58]">
                <span className="font-['Patrick_Hand'] text-sm">continuous problem solving</span>
                <div className="p-1.5 bg-[#e9f3e6] rounded-full border border-[#2f4a2a]">
                  <Sparkles size={14} className="text-[#2f4a2a]" />
                </div>
              </div>
            </div>
          </article>

          {/* 3. Card A: Featured Achievement Card (spans two columns on wide screens, one column on mobile) */}
          <article
            ref={mtseCardRef}
            onClick={() => setIsMtseModalOpen(true)}
            className="card group cursor-pointer flex flex-col justify-between p-6 sm:p-7 relative border-2 border-[#2f4a2a] transition-all duration-200 col-span-1 md:col-span-2 motion-reduce:transform-none motion-reduce:transition-none"
            style={{
              borderRadius: '34px 24px 38px 22px',
              boxShadow: '0 6px 0 #9bc08f',
              transform: 'rotate(-0.4deg)',
            }}
            tabIndex={0}
            role="button"
            aria-label="Open details for 1st Rank, Mathematics Talent Search Examination (MTSE)"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsMtseModalOpen(true);
              }
            }}
          >
            {/* Washi Tape */}
            <div className="absolute -top-3 left-8 pointer-events-none">
              <WashiTape color="rgba(246, 201, 166, 0.85)" rotation={-3} />
            </div>

            <div>
              {/* Top metadata row */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="font-['Patrick_Hand'] text-base sm:text-lg font-bold text-[#4a6b44]">
                  5th grade
                </span>
                <span
                  className="px-3 py-1 text-xs font-bold border-1.5 border-[#2f4a2a] text-[#2f4a2a] bg-[#f4e3a1]"
                  style={{ borderRadius: '16px 20px 18px 14px' }}
                >
                  Featured Achievement
                </span>
              </div>

              {/* Responsive layout: Photo + Text */}
              <div className="flex flex-col sm:flex-row gap-5 md:gap-6 items-center sm:items-start mb-4">
                {/* Photo in tilted, blob-cornered frame (4px white border, offset shadow, rotate 2deg) */}
                <div
                  className="w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 shrink-0 overflow-hidden border-4 border-white shadow-[0_4px_0_#9bc08f] transition-transform duration-300 group-hover:scale-102 motion-reduce:transform-none motion-reduce:transition-none"
                  style={{
                    borderRadius: '52% 48% 60% 40% / 46% 56% 44% 54%',
                    transform: 'rotate(2deg)',
                  }}
                >
                  <img
                    src="/mtse-photo.jpeg"
                    alt="Nanda Krishna C as a child, smiling and holding a Kerala Ganitha Sasthra Parishad certificate of merit"
                    width={720}
                    height={960}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 20%' }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 text-left">
                  <h3 className="font-['Fraunces'] text-xl sm:text-2xl font-bold text-[#2f4a2a] mb-2.5 group-hover:text-[#44643d] transition-colors leading-snug">
                    1st Rank, Mathematics Talent Search Examination (MTSE)
                  </h3>
                  <p className="font-['Nunito'] text-sm sm:text-base text-[#2f4a2a] opacity-90 leading-relaxed">
                    Secured the top rank in the state-wide competitive examination organized by the Kerala Ganitha Sasthra Parishad, in 5th grade.
                  </p>
                </div>
              </div>
            </div>

            <div>
              {/* Tag Chips */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {['Mathematics', 'Competition', 'Rank 1'].map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 text-xs font-bold text-[#2f4a2a] bg-[#e9f3e6] border border-[#9bc08f]"
                    style={{ borderRadius: '12px 14px 12px 14px' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Card Footer Action */}
              <div className="pt-3 border-t border-[#e9f3e6] flex items-center justify-between">
                <span className="font-['Patrick_Hand'] text-sm font-bold text-[#4a6b44] flex items-center gap-1 group-hover:translate-x-1 transition-transform motion-reduce:transform-none">
                  View certificate & details
                  <ArrowUpRight size={15} />
                </span>
                <div className="p-1.5 bg-[#e9f3e6] group-hover:bg-[#bfdcb5] rounded-full border border-[#2f4a2a] transition-colors">
                  <Award size={14} className="text-[#2f4a2a]" />
                </div>
              </div>
            </div>
          </article>

          {/* Sub-title: Upcoming (spans full grid width on its own line) */}
          <div
            className="col-span-1 md:col-span-2 pt-10"
            style={{ gridColumn: '1 / -1' }}
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-4">
              <div className="relative inline-block self-start">
                <h3
                  id="upcoming-projects-heading"
                  className="font-['Patrick_Hand'] text-[1.85rem] sm:text-[2.2rem] text-[#2f4a2a] leading-tight"
                >
                  Upcoming
                </h3>
                <SquigglyUnderline color="#9bc08f" height={10} className="w-24 sm:w-28 mt-0.5" />
              </div>
              <p className="font-['Nunito'] text-sm sm:text-base text-[#4a6b44]">
                Projects I'm planning to build next.
              </p>
            </div>
          </div>

          {/* Upcoming Cards Group (labelled by upcoming-projects-heading) */}
          <div
            role="group"
            aria-labelledby="upcoming-projects-heading"
            className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
            style={{ gridColumn: '1 / -1' }}
          >
            {projects.map((project, index) => {
              const cornerRadii = cardCornerStyles[index % cardCornerStyles.length];

              return (
                <article
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="card group cursor-pointer flex flex-col justify-between p-6 sm:p-7 relative border-2 border-[#2f4a2a] transition-all duration-200 col-span-1 motion-reduce:transform-none motion-reduce:transition-none"
                  style={{
                    borderRadius: cornerRadii,
                    boxShadow: '0 6px 0 #9bc08f',
                    transform: 'rotate(-0.6deg)',
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`Open details for project: ${project.title}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedProject(project);
                    }
                  }}
                >
                  {/* Washi Tape on card corner */}
                  <div className="absolute -top-3 left-6 pointer-events-none">
                    <WashiTape
                      color="rgba(244, 227, 161, 0.85)"
                      rotation={-2}
                    />
                  </div>

                  <div>
                    {/* Top metadata row */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span
                        className="px-3 py-1 text-xs font-bold border-1.5 border-[#2f4a2a] text-[#2f4a2a]"
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
                    </div>

                    {/* Visual Preview / Thumbnail */}
                    <div
                      className="w-full h-44 mb-4 overflow-hidden border-2 border-[#2f4a2a] bg-[#e9f3e6] relative flex items-center justify-center"
                      style={{ borderRadius: '20px 18px 22px 16px' }}
                    >
                      <img
                        src="/algocanvas.jpg"
                        alt="AlgoCanvas sorting visualizer sketchbook preview"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
                        loading="lazy"
                      />
                    </div>

                    {/* Project Title */}
                    <h4 className="font-['Fraunces'] text-xl sm:text-2xl font-bold text-[#2f4a2a] mb-2 group-hover:text-[#44643d] transition-colors leading-snug">
                      {project.title}
                    </h4>

                    {/* Summary */}
                    <p className="font-['Nunito'] text-sm sm:text-base text-[#2f4a2a] opacity-90 mb-4 line-clamp-3 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  <div>
                    {/* Tools Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tools.slice(0, 4).map((tool, idx) => (
                        <span
                          key={idx}
                          className={`px-2.5 py-0.5 text-xs font-bold ${
                            tool === 'Coming soon' || tool === 'Upcoming'
                              ? 'text-[#785d11] bg-[#fdf8e6] border border-[#d6ba5d]'
                              : 'text-[#2f4a2a] bg-[#e9f3e6] border border-[#9bc08f]'
                          }`}
                          style={{ borderRadius: '12px 14px 12px 14px' }}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* Card Footer Action */}
                    <div className="pt-3 border-t border-[#e9f3e6] flex items-center justify-between">
                      <span className="font-['Patrick_Hand'] text-sm font-bold text-[#4a6b44] flex items-center gap-1 group-hover:translate-x-1 transition-transform motion-reduce:transform-none">
                        Read project write-up
                        <ArrowUpRight size={15} />
                      </span>
                      <div className="p-1.5 bg-[#e9f3e6] group-hover:bg-[#f6c9a6] rounded-full border border-[#2f4a2a] transition-colors">
                        <FolderGit2 size={14} className="text-[#2f4a2a]" />
                      </div>
                    </div>
                  </div>

                </article>
              );
            })}
          </div>
        </div>

      </div>

      {/* Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Dialog for Featured Achievement Card A */}
      <dialog
        ref={mtseDialogRef}
        id="mtse-modal"
        className="cv-dialog"
        aria-labelledby="mtse-modal-title"
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            e.preventDefault();
            setIsMtseModalOpen(false);
          }
        }}
        onClick={(e) => {
          if (e.target === mtseDialogRef.current) {
            setIsMtseModalOpen(false);
          }
        }}
        onCancel={(e) => {
          e.preventDefault();
          setIsMtseModalOpen(false);
        }}
      >
        <div
          className="relative w-full max-w-2xl bg-white border-3 border-[#2f4a2a] p-5 sm:p-8 my-auto max-h-[92vh] overflow-y-auto flex flex-col"
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

          {/* Close Button */}
          <button
            ref={mtseCloseBtnRef}
            onClick={() => setIsMtseModalOpen(false)}
            className="absolute top-5 right-5 p-2 bg-[#e9f3e6] hover:bg-[#bfdcb5] border-2 border-[#2f4a2a] text-[#2f4a2a] transition-transform duration-150 hover:scale-105 cursor-pointer shadow-[0_2px_0_#9bc08f] focus-visible:outline-3 focus-visible:outline-[#2f4a2a]"
            style={{ borderRadius: '50%' }}
            aria-label="Close modal"
          >
            <X size={18} />
          </button>

          {/* Meta line & Badge */}
          <div className="flex items-center gap-3 mb-2">
            <span className="font-['Patrick_Hand'] text-base sm:text-lg font-bold text-[#4a6b44]">
              5th grade
            </span>
            <span
              className="px-3 py-1 text-xs font-bold border-1.5 border-[#2f4a2a] text-[#2f4a2a] bg-[#f4e3a1]"
              style={{ borderRadius: '16px 20px 18px 14px' }}
            >
              Rank 1 State-Wide
            </span>
          </div>

          {/* Title */}
          <h2
            id="mtse-modal-title"
            className="font-['Fraunces'] text-2xl sm:text-3xl font-extrabold text-[#2f4a2a] mb-4 leading-tight pr-10"
          >
            1st Rank, Mathematics Talent Search Examination (MTSE)
          </h2>

          {/* Larger Photo */}
          <div
            className="w-full max-h-[55vh] overflow-hidden border-2 border-[#2f4a2a] bg-[#e9f3e6] mb-5 flex items-center justify-center p-2"
            style={{ borderRadius: '24px 20px 22px 18px' }}
          >
            <img
              src="/mtse-photo.jpeg"
              alt="Nanda Krishna C as a child, smiling and holding a Kerala Ganitha Sasthra Parishad certificate of merit"
              className="max-h-[50vh] w-auto max-w-full object-contain rounded-xl shadow-[0_4px_0_#9bc08f]"
            />
          </div>

          {/* Text */}
          <p className="font-['Nunito'] text-base sm:text-lg text-[#2f4a2a] leading-relaxed mb-5">
            Secured the top rank in the state-wide competitive examination organized by the Kerala Ganitha Sasthra Parishad, in 5th grade.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-4 border-t-2 border-[#e9f3e6]">
            {['Mathematics', 'Competition', 'Rank 1'].map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-bold text-[#2f4a2a] bg-[#e9f3e6] border border-[#9bc08f]"
                style={{ borderRadius: '14px 18px 16px 20px' }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </dialog>

      {/* Dialog for Smart Glove Project Detail View */}
      <dialog
        ref={smartGloveDialogRef}
        id="smart-glove-modal"
        className="cv-dialog"
        aria-labelledby="smart-glove-modal-title"
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            e.preventDefault();
            setIsSmartGloveModalOpen(false);
          }
        }}
        onClick={(e) => {
          if (e.target === smartGloveDialogRef.current) {
            setIsSmartGloveModalOpen(false);
          }
        }}
        onCancel={(e) => {
          e.preventDefault();
          setIsSmartGloveModalOpen(false);
        }}
      >
        <div
          className="relative w-full max-w-2xl bg-white border-3 border-[#2f4a2a] p-6 sm:p-8 my-auto max-h-[92vh] overflow-y-auto flex flex-col"
          style={{
            borderRadius: '32px 24px 34px 22px',
            boxShadow: '0 10px 0 #9bc08f',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Washi Tape Accent */}
          <div className="absolute -top-3 left-10 pointer-events-none" aria-hidden="true">
            <WashiTape color="rgba(191, 220, 181, 0.9)" rotation={-2} />
          </div>

          {/* Close Button */}
          <button
            ref={smartGloveCloseBtnRef}
            onClick={() => setIsSmartGloveModalOpen(false)}
            className="absolute top-5 right-5 p-2 bg-[#e9f3e6] hover:bg-[#bfdcb5] border-2 border-[#2f4a2a] text-[#2f4a2a] transition-transform duration-150 hover:scale-105 cursor-pointer shadow-[0_2px_0_#9bc08f] focus-visible:outline-3 focus-visible:outline-[#2f4a2a]"
            style={{ borderRadius: '50%' }}
            aria-label="Close modal"
          >
            <X size={18} />
          </button>

          {/* Header row */}
          <div className="flex items-center gap-3 mb-2">
            <span
              className="px-3 py-1 text-xs font-bold border-1.5 border-[#2f4a2a] text-[#2f4a2a] bg-[#bfdcb5]"
              style={{ borderRadius: '16px 20px 18px 14px' }}
            >
              Multidisciplinary project
            </span>
            <span className="font-['Patrick_Hand'] text-base sm:text-lg font-bold text-[#5e7d58]">
              September 2026, VIT
            </span>
          </div>

          {/* Title */}
          <h2
            id="smart-glove-modal-title"
            className="font-['Fraunces'] text-2xl sm:text-3xl font-extrabold text-[#2f4a2a] mb-3 leading-tight pr-10"
          >
            Smart Glove for Physiotherapy Tracking
          </h2>

          {/* Prominent Status Callout */}
          <div
            className="p-3.5 bg-[#fdf8e6] border-2 border-[#2f4a2a] mb-5 flex items-start gap-2.5"
            style={{ borderRadius: '18px 22px 16px 20px' }}
          >
            <AlertCircle size={18} className="text-[#a07e1c] mt-0.5 shrink-0" />
            <div>
              <span className="font-['Fraunces'] font-bold text-xs uppercase tracking-wider text-[#785d11] block mb-0.5">
                Project Status
              </span>
              <p className="font-['Nunito'] text-sm font-bold text-[#2f4a2a]">
                Academic project proposal and presentation. It is not a finished device.
              </p>
            </div>
          </div>

          {/* The Problem & The Idea */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div
              className="p-4 bg-[#fcefe4] border-2 border-[#2f4a2a]"
              style={{ borderRadius: '20px 16px 18px 22px' }}
            >
              <h4 className="font-['Fraunces'] font-bold text-sm text-[#2f4a2a] mb-2 flex items-center gap-1.5">
                <span>🎯 The problem</span>
              </h4>
              <p className="font-['Nunito'] text-xs sm:text-sm text-[#2f4a2a] leading-relaxed">
                Patients doing hand rehabilitation have to repeat exercises at home, but therapists have no objective way to check whether the exercises are done correctly, how many repetitions were completed, or whether movement is improving.
              </p>
            </div>

            <div
              className="p-4 bg-[#e9f3e6] border-2 border-[#2f4a2a]"
              style={{ borderRadius: '16px 22px 20px 18px' }}
            >
              <h4 className="font-['Fraunces'] font-bold text-sm text-[#2f4a2a] mb-2 flex items-center gap-1.5">
                <span>💡 The idea</span>
              </h4>
              <p className="font-['Nunito'] text-xs sm:text-sm text-[#2f4a2a] leading-relaxed">
                A glove with flex sensors on the fingers and an IMU (accelerometer and gyroscope) at the wrist. A microcontroller such as an ESP32 reads the sensors and streams the data over Bluetooth or Wi-Fi to a companion app. A supervised machine learning model scores each repetition as valid, partial or incorrect, and the app shows the patient a rep count and score and logs it for the therapist.
              </p>
            </div>
          </div>

          {/* Basis */}
          <div className="mb-4">
            <h4 className="font-['Fraunces'] text-sm font-bold text-[#5e7d58] uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <BookOpen size={14} />
              <span>Basis</span>
            </h4>
            <p className="font-['Nunito'] text-sm sm:text-base text-[#2f4a2a] leading-relaxed">
              Built around a systematic review by Mohammed and Ali (2026), published in the Journal of Engineering and Applied Science, 73:246.
            </p>
          </div>

          {/* My Role */}
          <div className="mb-5">
            <h4 className="font-['Fraunces'] text-sm font-bold text-[#5e7d58] uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <UserCheck size={14} />
              <span>My role</span>
            </h4>
            <p className="font-['Nunito'] text-sm sm:text-base text-[#2f4a2a] leading-relaxed">
              Team member and section lead. I researched and presented the core hardware architecture: how microcontroller boards and specialized sensors fit together to track physical input accurately.
            </p>
          </div>

          {/* Tags */}
          <div className="mb-6">
            <h4 className="font-['Fraunces'] text-xs font-bold text-[#5e7d58] uppercase tracking-wider mb-2">
              Focus Areas & Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {['Flex + IMU sensors', 'ESP32', 'Machine learning', 'Rehab tech'].map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 text-xs font-bold text-[#2f4a2a] bg-[#e9f3e6] border border-[#9bc08f]"
                  style={{ borderRadius: '12px 14px 12px 14px' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* PDF Links & Close at bottom */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t-2 border-[#e9f3e6]">
            <a
              href="/smart-glove-project.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-organic btn-alt btn-white text-xs sm:text-sm py-2 px-4 flex items-center gap-1.5"
              style={{ borderRadius: '18px 22px 16px 20px' }}
              aria-label="View the Smart Glove project PDF in a new tab"
            >
              <Eye size={14} />
              <span>View PDF</span>
            </a>

            <a
              href="/smart-glove-project.pdf"
              download="Smart-Glove-Project.pdf"
              className="btn btn-organic btn-peach text-xs sm:text-sm py-2 px-4 flex items-center gap-1.5"
              style={{ borderRadius: '20px 16px 22px 18px' }}
              aria-label="Download the Smart Glove project PDF"
            >
              <Download size={14} />
              <span>Download PDF</span>
            </a>

            <button
              onClick={() => setIsSmartGloveModalOpen(false)}
              className="ml-auto font-bold text-sm text-[#5e7d58] hover:text-[#2f4a2a] bg-transparent border-none cursor-pointer py-2 px-3"
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </section>
  );
};
