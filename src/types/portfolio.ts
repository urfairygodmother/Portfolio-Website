export interface Project {
  id: string;
  title: string;
  tagline: string;
  summary: string;
  fullDescription: string;
  problem: string;
  solution: string;
  learnings: string[];
  tools: string[];
  year: string;
  demoUrl?: string;
  githubUrl?: string;
  badge: string;
  cornerRadii: string;
  accentColor: string;
  isPlaceholder?: boolean;
}

export interface SkillCategory {
  name: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: string;
    icon?: string;
    blobShape?: string;
    highlight?: boolean;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  expectedYear: string;
  status: string;
  highlights: string[];
  coursework: string[];
}

export interface PersonalInfo {
  name: string;
  role: string;
  location: string;
  shortBio: string;
  extendedBio: string[];
  email: string;
  github: string;
  githubUsername: string;
  linkedin: string;
  tagline: string;
  subTagline: string;
  lastUpdated: string;
  statusText: string;
}

export interface ContentData {
  personalInfo: PersonalInfo;
  education: EducationItem;
  skills: SkillCategory[];
  projects: Project[];
}
