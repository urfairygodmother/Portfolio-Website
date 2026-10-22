import React from 'react';
import { portfolioContent } from '../data/content';
import {
  SproutDoodle,
  LeafDoodle,
  SquigglyUnderline,
  WashiTape,
} from './DoodleIcons';
import { School, Calendar, MapPin, Award, BookCheck } from 'lucide-react';

export const Education: React.FC = () => {
  const { education } = portfolioContent;

  return (
    <section id="education" className="py-16 md:py-24 relative scroll-mt-20">
      <div className="container">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <School size={18} className="text-[#4a6b44]" />
            <span className="font-['Patrick_Hand'] text-lg text-[#4a6b44]">
              academic root system
            </span>
          </div>
          <div className="relative inline-block">
            <h2 className="font-['Fraunces'] text-3xl sm:text-4xl md:text-5xl font-bold text-[#2f4a2a]">
              Education
            </h2>
            <SquigglyUnderline color="#9bc08f" height={10} />
          </div>
          <p className="font-['Nunito'] text-base text-[#4a6b44] max-w-lg mx-auto mt-4">
            Undergraduate foundation in Computer Science and Engineering at VIT Vellore.
          </p>
        </div>

        {/* Vertical Vine Timeline Layout */}
        <div className="relative max-w-3xl mx-auto">
          
          {/* Vertical Vine Stem (Aria-hidden) */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-[#9bc08f] transform -translate-x-1/2"
            aria-hidden="true"
          >
            {/* Vine Leaves along the stem */}
            <div className="absolute top-12 -left-3">
              <LeafDoodle width={22} height={22} color="#2f4a2a" />
            </div>
            <div className="absolute top-1/2 -right-3 transform scale-x-[-1]">
              <LeafDoodle width={22} height={22} color="#2f4a2a" />
            </div>
            <div className="absolute bottom-8 -left-3">
              <SproutDoodle width={24} height={24} />
            </div>
          </div>

          {/* Education Card on the Vine */}
          <div className="relative ml-12 md:ml-0 md:w-full flex md:justify-center">
            
            {/* Timeline Root Node */}
            <div
              className="absolute -left-12 md:left-1/2 md:-translate-x-1/2 top-8 w-10 h-10 bg-[#bfdcb5] border-3 border-[#2f4a2a] flex items-center justify-center z-10 shadow-[0_3px_0_#9bc08f]"
              style={{ borderRadius: '50% 50% 45% 55% / 55% 45% 55% 45%' }}
              aria-hidden="true"
            >
              <SproutDoodle width={20} height={20} />
            </div>

            {/* University Card */}
            <div
              className="card p-6 sm:p-9 relative border-2 border-[#2f4a2a] w-full max-w-2xl mt-4 md:mt-0"
              style={{
                borderRadius: '34px 22px 30px 24px',
                boxShadow: '0 8px 0 #9bc08f',
              }}
            >
              {/* Washi Tape */}
              <div className="absolute -top-3 left-10 pointer-events-none">
                <WashiTape color="rgba(244, 227, 161, 0.85)" rotation={-2} />
              </div>

              {/* Top metadata */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div
                  className="px-3 py-1 bg-[#f4e3a1] border-1.5 border-[#2f4a2a] font-['Nunito'] text-xs font-bold text-[#2f4a2a]"
                  style={{ borderRadius: '16px 20px 14px 18px' }}
                >
                  {education.status}
                </div>

                <div className="flex items-center gap-1.5 font-['Nunito'] text-xs sm:text-sm font-bold text-[#4a6b44]">
                  <Calendar size={14} />
                  <span>{education.period}</span>
                </div>
              </div>

              {/* Institution & Degree */}
              <h3 className="font-['Fraunces'] text-2xl sm:text-3xl font-extrabold text-[#2f4a2a] mb-2 leading-snug">
                {education.degree}
              </h3>
              
              <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-[#5e7d58] mb-6">
                <div className="flex items-center gap-1.5">
                  <School size={15} />
                  <span>{education.institution}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={15} />
                  <span>{education.location}</span>
                </div>
              </div>

              {/* Academic Highlights */}
              <div className="mb-6 space-y-2.5">
                <h4 className="font-['Fraunces'] text-base font-bold text-[#2f4a2a] flex items-center gap-1.5">
                  <Award size={16} className="text-[#4a6b44]" />
                  <span>Focus & Activities</span>
                </h4>
                <ul className="space-y-2 list-none p-0 m-0">
                  {education.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm sm:text-base font-['Nunito'] text-[#2f4a2a]"
                    >
                      <span className="text-[#7da572] mt-1 shrink-0 font-bold">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coursework Tags */}
              <div className="pt-5 border-t-2 border-[#e9f3e6]">
                <h4 className="font-['Fraunces'] text-sm font-bold text-[#5e7d58] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <BookCheck size={14} />
                  <span>Key Coursework & Explorations</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#e9f3e6] border border-[#9bc08f] text-xs font-bold text-[#2f4a2a]"
                      style={{ borderRadius: '16px 14px 18px 12px' }}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
