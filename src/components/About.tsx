import React from 'react';
import { portfolioContent } from '../data/content';
import {
  SproutDoodle,
  LeafDoodle,
  WashiTape,
  SquigglyUnderline,
} from './DoodleIcons';
import { MapPin, School, BookOpen, Compass } from 'lucide-react';

export const About: React.FC = () => {
  const { personalInfo } = portfolioContent;

  return (
    <section id="about" className="py-16 md:py-24 relative scroll-mt-20">
      <div className="container">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <LeafDoodle width={22} height={22} color="#4a6b44" />
            <span className="font-['Patrick_Hand'] text-lg text-[#4a6b44]">
              the human behind the terminal
            </span>
          </div>
          <div className="relative inline-block">
            <h2 className="font-['Fraunces'] text-3xl sm:text-4xl md:text-5xl font-bold text-[#2f4a2a]">
              About Me & Journey
            </h2>
            <SquigglyUnderline color="#9bc08f" height={10} />
          </div>
        </div>

        {/* Main Irregular Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Blob Masked Portrait */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative">
              {/* Decorative back blob */}
              <div
                className="absolute -inset-3 bg-[#bfdcb5] border-2 border-[#2f4a2a] shadow-[0_6px_0_#9bc08f] pointer-events-none"
                style={{
                  borderRadius: '52% 48% 65% 35% / 42% 60% 40% 58%',
                  transform: 'rotate(-3deg)',
                }}
                aria-hidden="true"
              />

              {/* Portrait Image masked in irregular 8-value blob */}
              <div
                className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 overflow-hidden border-3 border-[#2f4a2a] bg-[#ffffff] transition-transform duration-300 hover:scale-102"
                style={{
                  borderRadius: '58% 42% 63% 37% / 45% 56% 44% 55%',
                }}
              >
                <picture className="w-full h-full block">
                  <source srcSet="/portrait.webp" type="image/webp" />
                  <img
                    src="/portrait.png"
                    alt="Illustrated portrait of Nanda Krishna C, smiling, with curly black hair and a light blue shirt, standing in a green garden"
                    width={288}
                    height={288}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 20%' }}
                    loading="lazy"
                  />
                </picture>
              </div>

              {/* Washi tape on top corner */}
              <div className="absolute -top-3 left-6 z-20">
                <WashiTape color="rgba(246, 201, 166, 0.85)" rotation={-4} />
              </div>

              {/* Small sticker tag */}
              <div
                className="absolute -bottom-3 -right-2 z-20 px-3.5 py-1.5 bg-[#f4e3a1] border-2 border-[#2f4a2a] shadow-[0_3px_0_#9bc08f] transform rotate-3 flex items-center gap-1.5"
                style={{ borderRadius: '24px 18px 22px 16px' }}
              >
                <SproutDoodle width={16} height={16} />
                <span className="font-['Patrick_Hand'] text-sm font-bold text-[#2f4a2a]">
                  Curious Explorer
                </span>
              </div>
            </div>

            {/* Quick Fact Badges */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <div
                className="flex items-center gap-1.5 px-3 py-1 bg-white border-2 border-[#2f4a2a] shadow-[0_2px_0_#9bc08f] text-xs font-bold text-[#2f4a2a]"
                style={{ borderRadius: '18px 22px 16px 20px' }}
              >
                <MapPin size={13} className="text-[#5e7d58]" />
                <span>{personalInfo.location}</span>
              </div>
              <div
                className="flex items-center gap-1.5 px-3 py-1 bg-white border-2 border-[#2f4a2a] shadow-[0_2px_0_#9bc08f] text-xs font-bold text-[#2f4a2a]"
                style={{ borderRadius: '22px 16px 20px 18px' }}
              >
                <School size={13} className="text-[#5e7d58]" />
                <span>VIT Vellore (2026-2030)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hand-cut Bio Card */}
          <div className="lg:col-span-7">
            <div
              className="card p-6 sm:p-9 relative"
              style={{
                borderRadius: '34px 24px 38px 22px',
                border: '2px solid #2f4a2a',
              }}
            >
              {/* Tape sticker on top right */}
              <div className="absolute -top-3 right-8">
                <WashiTape color="rgba(191, 220, 181, 0.9)" rotation={3} />
              </div>

              <div className="flex items-center gap-2 mb-4">
                <span className="font-['Patrick_Hand'] text-sm font-bold text-[#5e7d58] tracking-wider uppercase">
                  Field Notes & Philosophy
                </span>
              </div>

              <h3 className="font-['Fraunces'] text-2xl sm:text-3xl font-bold text-[#2f4a2a] mb-5 leading-snug">
                Building practical software with care, curiosity, and craft.
              </h3>

              <div className="space-y-4 font-['Nunito'] text-base sm:text-lg text-[#2f4a2a] leading-relaxed">
                {personalInfo.extendedBio.map((paragraph, index) => (
                  <p key={index} className="opacity-95">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Three Mini Pillars inside the card */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-8 pt-6 border-t-2 border-[#e9f3e6]">
                <div
                  className="p-3 bg-[#e9f3e6] border border-[#9bc08f]"
                  style={{ borderRadius: '18px 22px 16px 20px' }}
                >
                  <div className="flex items-center gap-1.5 font-['Fraunces'] font-bold text-sm text-[#2f4a2a] mb-1">
                    <BookOpen size={15} className="text-[#4a6b44]" />
                    <span>Foundation</span>
                  </div>
                  <p className="font-['Nunito'] text-xs text-[#44643d]">
                    Computer science fundamentals, algorithms, & discrete logic at VIT.
                  </p>
                </div>

                <div
                  className="p-3 bg-[#fdf8e6] border border-[#f4e3a1]"
                  style={{ borderRadius: '22px 16px 20px 18px' }}
                >
                  <div className="flex items-center gap-1.5 font-['Fraunces'] font-bold text-sm text-[#2f4a2a] mb-1">
                    <Compass size={15} className="text-[#a07e1c]" />
                    <span>Exploration</span>
                  </div>
                  <p className="font-['Nunito'] text-xs text-[#6e5814]">
                    Writing vanilla JS scripts, manipulating the DOM, and crafting layouts.
                  </p>
                </div>

                <div
                  className="p-3 bg-[#fcefe4] border border-[#f6c9a6]"
                  style={{ borderRadius: '20px 18px 22px 16px' }}
                >
                  <div className="flex items-center gap-1.5 font-['Fraunces'] font-bold text-sm text-[#2f4a2a] mb-1">
                    <SproutDoodle width={15} height={15} />
                    <span>Continuous Growth</span>
                  </div>
                  <p className="font-['Nunito'] text-xs text-[#824f2b]">
                    Daily GitHub commits, version control, and learning by building.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
