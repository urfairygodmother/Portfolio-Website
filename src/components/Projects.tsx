import React, { useState } from 'react';
import { portfolioContent } from '../data/content';
import type { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import {
  SproutDoodle,
  SquigglyUnderline,
  WashiTape,
} from './DoodleIcons';
import { ArrowUpRight, FolderGit2, Calendar } from 'lucide-react';

export const Projects: React.FC = () => {
  const { projects } = portfolioContent;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const cornerRadii = cardCornerStyles[index % cardCornerStyles.length];
            const isFirst = index === 0;
            const isSecond = index === 1;

            return (
              <article
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="card group cursor-pointer flex flex-col justify-between p-6 sm:p-7 relative border-2 border-[#2f4a2a] transition-all duration-200"
                style={{
                  borderRadius: cornerRadii,
                  boxShadow: '0 6px 0 #9bc08f',
                  transform: index % 2 === 0 ? 'rotate(-0.6deg)' : 'rotate(0.8deg)',
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
                    color={
                      index === 0
                        ? 'rgba(246, 201, 166, 0.85)'
                        : index === 1
                        ? 'rgba(244, 227, 161, 0.85)'
                        : 'rgba(191, 220, 181, 0.9)'
                    }
                    rotation={index % 2 === 0 ? -3 : 2}
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
                    {isFirst ? (
                      <img
                        src="/sprout-notes.jpg"
                        alt="SproutNotes study pad sketchbook preview"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : isSecond ? (
                      <img
                        src="/algocanvas.jpg"
                        alt="AlgoCanvas sorting visualizer sketchbook preview"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      /* Rich Botanical Vector Mockup for EcoTracker */
                      <div className="w-full h-full bg-[#fdf8e6] p-4 flex flex-col justify-between">
                        <div className="flex items-center justify-between border-b border-[#9bc08f] pb-2">
                          <div className="flex items-center gap-1.5">
                            <SproutDoodle width={18} height={18} />
                            <span className="font-['Fraunces'] font-bold text-sm text-[#2f4a2a]">
                              Campus EcoTracker
                            </span>
                          </div>
                          <span className="font-['Patrick_Hand'] text-xs font-bold text-[#4a6b44]">
                            -38% CO2 Score
                          </span>
                        </div>
                        <div className="flex items-end justify-around h-20 pt-2">
                          <div className="flex flex-col items-center gap-1">
                            <div className="w-8 h-12 bg-[#bfdcb5] border border-[#2f4a2a] rounded-t-lg" />
                            <span className="text-[10px] font-bold text-[#2f4a2a]">Cycle</span>
                          </div>
                          <div className="flex flex-col items-center gap-1">
                            <div className="w-8 h-16 bg-[#f4e3a1] border border-[#2f4a2a] rounded-t-lg" />
                            <span className="text-[10px] font-bold text-[#2f4a2a]">Meals</span>
                          </div>
                          <div className="flex flex-col items-center gap-1">
                            <div className="w-8 h-8 bg-[#f6c9a6] border border-[#2f4a2a] rounded-t-lg" />
                            <span className="text-[10px] font-bold text-[#2f4a2a]">Lab</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Project Title */}
                  <h3 className="font-['Fraunces'] text-xl sm:text-2xl font-bold text-[#2f4a2a] mb-2 group-hover:text-[#44643d] transition-colors leading-snug">
                    {project.title}
                  </h3>

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
                        className="px-2.5 py-0.5 text-xs font-bold text-[#2f4a2a] bg-[#e9f3e6] border border-[#9bc08f]"
                        style={{ borderRadius: '12px 14px 12px 14px' }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Card Footer Action */}
                  <div className="pt-3 border-t border-[#e9f3e6] flex items-center justify-between">
                    <span className="font-['Patrick_Hand'] text-sm font-bold text-[#4a6b44] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
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

      {/* Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
