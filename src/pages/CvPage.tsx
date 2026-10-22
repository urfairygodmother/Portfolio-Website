import React from 'react';
import { portfolioContent } from '../data/content';
import { Download, Printer, ArrowLeft, FileCode } from 'lucide-react';

interface CvPageProps {
  onBackToHome: () => void;
}

export const CvPage: React.FC<CvPageProps> = ({ onBackToHome }) => {
  const { personalInfo, education, skills, projects } = portfolioContent;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="cv-page-wrapper">
      
      {/* Top Action Bar (Hidden during Print) */}
      <div className="cv-action-bar no-print">
        <button
          onClick={onBackToHome}
          className="btn-organic btn-white text-sm py-2 px-3.5 flex items-center gap-2"
          style={{ borderRadius: '18px 22px 16px 20px' }}
        >
          <ArrowLeft size={16} />
          <span>Back to Portfolio</span>
        </button>

        <div className="flex flex-wrap items-center gap-2.5">
          {/* Print / Save as PDF */}
          <button
            onClick={handlePrint}
            className="btn-organic btn-yellow text-sm py-2 px-3.5 flex items-center gap-1.5"
            style={{ borderRadius: '16px 20px 18px 14px' }}
            title="Open browser print dialog to save as PDF"
          >
            <Printer size={15} />
            <span>Print / Save PDF</span>
          </button>

          {/* Download Generated PDF */}
          <a
            href="Nanda-Krishna-C-CV.pdf"
            download="Nanda-Krishna-C-CV.pdf"
            className="btn-organic btn-peach text-sm py-2 px-4 flex items-center gap-1.5"
            style={{ borderRadius: '20px 16px 22px 18px' }}
          >
            <Download size={15} />
            <span>Download PDF</span>
          </a>

          {/* Download Generated Word DOCX */}
          <a
            href="/Nanda-Krishna-C-CV.docx"
            download="Nanda-Krishna-C-CV.docx"
            className="btn-organic btn-white text-sm py-2 px-3.5 flex items-center gap-1.5"
            style={{ borderRadius: '16px 18px 14px 20px' }}
            title="Download editable Microsoft Word DOCX"
          >
            <FileCode size={15} />
            <span>Word DOCX</span>
          </a>
        </div>
      </div>

      {/* ATS Friendly Document */}
      <main className="cv-document" id="cv-content">
        
        {/* CV Header */}
        <header>
          <h1 className="cv-header-title">{personalInfo.name}</h1>
          <div className="cv-subheading">
            {personalInfo.role} — {education.institution}
          </div>
          
          <div className="cv-contacts-row">
            <span className="cv-contact-item">
              <strong>Email:</strong>
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </span>
            <span className="cv-contact-item">
              <strong>GitHub:</strong>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                {personalInfo.github}
              </a>
            </span>
            <span className="cv-contact-item">
              <strong>Location:</strong> {personalInfo.location}
            </span>
          </div>
        </header>

        {/* 1. Education Section */}
        <section className="cv-section" aria-labelledby="cv-edu-heading">
          <h2 id="cv-edu-heading" className="cv-section-title">Education</h2>
          
          <div className="cv-item">
            <div className="cv-item-header">
              <div>
                <span className="cv-item-title">{education.degree}</span>
                <div className="cv-item-subtitle">
                  {education.institution}, {education.location}
                </div>
              </div>
              <span className="cv-item-date">{education.period}</span>
            </div>

            <ul className="cv-list">
              {education.highlights.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
              <li>
                <strong>Relevant Coursework:</strong> {education.coursework.join(', ')}
              </li>
            </ul>
          </div>
        </section>

        {/* 2. Technical Skills Section */}
        <section className="cv-section" aria-labelledby="cv-skills-heading">
          <h2 id="cv-skills-heading" className="cv-section-title">Technical Skills</h2>
          
          <div className="cv-skills-grid">
            {skills.map((category) => (
              <React.Fragment key={category.name}>
                <div className="cv-skill-label">{category.name}:</div>
                <div>{category.skills.map((s) => s.name).join(', ')}</div>
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* 3. Selected Academic & Technical Projects */}
        <section className="cv-section" aria-labelledby="cv-projects-heading">
          <h2 id="cv-projects-heading" className="cv-section-title">
            Selected Academic & Technical Projects
          </h2>

          {projects.map((project) => (
            <div key={project.id} className="cv-item">
              <div className="cv-item-header">
                <span className="cv-item-title">
                  {project.title}
                </span>
                <span className="cv-item-date">
                  {project.tools.slice(0, 3).join(', ')} | {project.year}
                </span>
              </div>
              
              <ul className="cv-list">
                <li>{project.summary}</li>
                <li>
                  <strong>Implementation & Learnings:</strong> {project.learnings.join('; ')}
                </li>
              </ul>
            </div>
          ))}
        </section>

        {/* CV Footer Metadata */}
        <footer className="cv-footer-meta">
          <span>
            Nanda Krishna C — Single source of truth: <code>src/data/content.ts</code>
          </span>
          <span>Last Updated: {personalInfo.lastUpdated}</span>
        </footer>

      </main>

    </div>
  );
};
