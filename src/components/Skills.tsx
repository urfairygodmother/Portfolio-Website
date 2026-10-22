import React from 'react';
import { portfolioContent } from '../data/content';
import {
  SproutDoodle,
  LeafDoodle,
  SquigglyUnderline,
} from './DoodleIcons';
import { Code, GitBranch, Compass, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const { skills } = portfolioContent;

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code size={18} className="text-[#2f4a2a]" />;
      case 'GitBranch':
        return <GitBranch size={18} className="text-[#2f4a2a]" />;
      case 'Compass':
      default:
        return <Compass size={18} className="text-[#2f4a2a]" />;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24 relative scroll-mt-20">
      <div className="container">
        
        {/* Section Heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <LeafDoodle width={20} height={20} color="#4a6b44" />
            <span className="font-['Patrick_Hand'] text-lg text-[#4a6b44]">
              growing leaves of knowledge
            </span>
          </div>
          <div className="relative inline-block">
            <h2 className="font-['Fraunces'] text-3xl sm:text-4xl md:text-5xl font-bold text-[#2f4a2a]">
              The Skill Garden
            </h2>
            <SquigglyUnderline color="#9bc08f" height={10} />
          </div>
          <p className="font-['Nunito'] text-base text-[#4a6b44] max-w-lg mx-auto mt-4">
            Technologies, tools, and developmental habits I am actively nurturing through coursework, personal projects, and daily code commits.
          </p>
        </div>

        {/* Botanical Plant / Leaf Chips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skills.map((category, catIdx) => {
            const cardRadii = [
              '28px 22px 32px 20px',
              '22px 30px 20px 32px',
              '30px 20px 28px 30px',
            ][catIdx % 3];

            return (
              <div
                key={category.name}
                className="card p-6 sm:p-7 relative border-2 border-[#2f4a2a] flex flex-col justify-between"
                style={{
                  borderRadius: cardRadii,
                  boxShadow: '0 6px 0 #9bc08f',
                  transform: catIdx === 1 ? 'rotate(-1deg)' : 'rotate(1deg)',
                }}
              >
                {/* Category Header */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 flex items-center justify-center bg-[#bfdcb5] border-2 border-[#2f4a2a]"
                      style={{ borderRadius: '48% 52% 43% 57% / 55% 45% 55% 45%' }}
                    >
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <div>
                      <h3 className="font-['Fraunces'] text-lg font-bold text-[#2f4a2a] leading-tight">
                        {category.name}
                      </h3>
                      <span className="font-['Patrick_Hand'] text-xs text-[#5e7d58]">
                        Active cultivation
                      </span>
                    </div>
                  </div>

                  <p className="font-['Nunito'] text-xs sm:text-sm text-[#44643d] mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills Sprouting Leaves / Chips */}
                  <div className="flex flex-col gap-3">
                    {category.skills.map((skill) => {
                      const isHighlighted = skill.highlight;
                      return (
                        <div
                          key={skill.name}
                          className="group relative flex items-center justify-between px-4 py-2.5 bg-white hover:bg-[#e9f3e6] border-2 border-[#2f4a2a] transition-all duration-150 cursor-default"
                          style={{
                            borderRadius: skill.blobShape || '20px 16px 22px 18px',
                            boxShadow: '0 3px 0 #9bc08f',
                          }}
                        >
                          <div className="flex items-center gap-2">
                            <SproutDoodle width={16} height={16} />
                            <span className="font-['Nunito'] font-bold text-sm text-[#2f4a2a]">
                              {skill.name}
                            </span>
                          </div>
                          
                          <div className="flex items-center gap-1.5">
                            {isHighlighted && (
                              <Sparkles size={12} className="text-[#a87a19]" />
                            )}
                            <span
                              className={`text-[11px] font-bold px-2 py-0.5 border border-[#2f4a2a] ${
                                isHighlighted
                                  ? 'bg-[#f4e3a1] text-[#2f4a2a]'
                                  : 'bg-[#bfdcb5] text-[#2f4a2a]'
                              }`}
                              style={{ borderRadius: '10px' }}
                            >
                              {skill.level}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Botanical sprout marker at bottom */}
                <div className="mt-6 pt-4 border-t border-[#e9f3e6] flex items-center justify-between text-[#5e7d58]">
                  <span className="font-['Patrick_Hand'] text-xs">
                    branch #{catIdx + 1}
                  </span>
                  <LeafDoodle width={16} height={16} color="#7da572" />
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
