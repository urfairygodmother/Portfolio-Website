import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';
import { Education } from '../components/Education';
import { CvSection } from '../components/CvSection';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

interface HomeProps {
  onOpenCvModal: (triggerEl?: HTMLElement | null) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenCvModal }) => {
  const handleExploreWork = () => {
    const el = document.getElementById('work');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main id="main-content">
      {/* 1. Hero Section */}
      <Hero
        onExploreWork={handleExploreWork}
        onOpenCvModal={onOpenCvModal}
      />

      {/* 2. About Section */}
      <About />

      {/* 3. Selected Work Projects Grid & Modal */}
      <Projects />

      {/* 4. Skills Plant Garden Metaphor */}
      <Skills />

      {/* 5. Education Vertical Vine */}
      <Education />

      {/* 6. CV Summary Section between Education & Contact */}
      <CvSection onOpenCvModal={onOpenCvModal} />

      {/* 7. Contact & Socials */}
      <Contact onOpenCvModal={onOpenCvModal} />

      {/* 8. Footer & Back-to-top sprout */}
      <Footer />
    </main>
  );
};
