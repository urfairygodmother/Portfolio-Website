import type { ContentData } from '../types/portfolio';

export const portfolioContent: ContentData = {
  personalInfo: {
    name: "Nanda Krishna C",
    role: "B.Tech Computer Science and Engineering Student (1st Year)",
    location: "Vellore, India",
    shortBio:
      "First-year Computer Science student at VIT Vellore who loves discovering new things and exploring what's still unknown. Currently building skills in  and web development.",
    extendedBio: [
      "Hello! I'm Nanda Krishna, a first-year undergraduate student in Computer Science and Engineering at Vellore Institute of Technology (VIT), Vellore.",
      "I am deeply curious about how the web works under the hood. Right now, I'm dedicating my time to mastering modern Python, responsive CSS architectures, and Git workflows.",
      "When I am not writing code or experimenting with front-end designs, I enjoy reading, exploring tech problem-solving, and sketching out interactive ideas.",
    ],
    email: "nandakrishnac2008@gmail.com",
    github: "https://github.com/urfairygodmother",
    githubUsername: "urfairygodmother",
    linkedin: "https://www.linkedin.com/in/nanda-krishna-c-728135446/",
    tagline: "Exploring what's still unknown, one line of code at a time.",
    subTagline: "Hand-crafted web experiments & foundational computer science explorations.",
    lastUpdated: "October 2026",
    statusText: "Open for beginner open-source contributions & collaborative peer projects 🌱",
  },

  education: {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Vellore Institute of Technology (VIT)",
    location: "Vellore, Tamil Nadu, India",
    period: "2026 — 2030 (Expected)",
    expectedYear: "2030",
    status: "1st Year Undergraduate",
    highlights: [
      "Building a solid academic foundation in computational thinking, problem solving, and discrete mathematics.",
      "Active participant in technical student clubs and developer communities on campus.",
      "Practicing structured programming and exploring web design principles.",
    ],
    coursework: [
      "Problem Solving & Algorithmic Thinking",
      "Calculus & Linear Algebra",
      "Digital Systems & Computer Organization",
      "Structured Programming & Data Foundations",
    ],
  },

  skills: [
    {
      name: "Core Web Technologies",
      iconName: "Code",
      description: "Foundational languages for crafting interactive digital interfaces.",
      skills: [
        { name: "Python", level: "Active Focus", highlight: true, blobShape: "54% 46% 62% 38% / 41% 58% 42% 59%" },
        { name: "HTML5 & Semantic Markup", level: "Proficient", highlight: true, blobShape: "48% 52% 43% 57% / 55% 45% 55% 45%" },
        { name: "CSS3 & Responsive Design", level: "Proficient", highlight: true, blobShape: "60% 40% 50% 50% / 44% 63% 37% 56%" },
      ],
    },
    {
      name: "Version Control & Tooling",
      iconName: "GitBranch",
      description: "Collaborative development and source code management.",
      skills: [
        { name: "Git", level: "Intermediate", highlight: true, blobShape: "43% 57% 52% 48% / 58% 39% 61% 42%" },
        { name: "GitHub", level: "Intermediate", highlight: true, blobShape: "51% 49% 41% 59% / 46% 56% 44% 54%" },
        { name: "Command Line / Terminal", level: "Familiar", highlight: false, blobShape: "57% 43% 65% 35% / 47% 54% 46% 53%" },
      ],
    },
    {
      name: "Practices & Concepts",
      iconName: "Compass",
      description: "Principles guiding how I build software and learn new concepts.",
      skills: [
        { name: "Clean Code & Formatting", level: "Core Habit", highlight: false, blobShape: "46% 54% 48% 52% / 52% 47% 53% 48%" },
        { name: "Web Accessibility (a11y)", level: "Practicing", highlight: false, blobShape: "55% 45% 58% 42% / 43% 59% 41% 57%" },
        { name: "Algorithms & Logic", level: "Learning", highlight: false, blobShape: "49% 51% 44% 56% / 56% 43% 57% 44%" },
      ],
    },
  ],

  /*
   * --------------------------------------------------------------------------
   * PROJECTS SECTION
   * NOTE FOR USER: The projects below are starter placeholder projects crafted
   * to showcase your skills in Python, HTML, CSS, and Git.
   * You can easily replace the titles, descriptions, links, and tools here!
   * --------------------------------------------------------------------------
   */
  projects: [
    {
      id: "sprout-notes",
      title: "SproutNotes — Local-First Study Pad",
      tagline: "A distraction-free, browser-based note taking web app with auto-save.",
      summary:
        "A lightweight, distraction-free markdown study pad built with vanilla Python, featuring real-time word counting, tag-based filtering, and persistent localStorage sync.",
      fullDescription:
        "SproutNotes was created to solve a personal challenge: needing a clean, rapid scratchpad during lecture hours that works completely offline without sign-up friction. It offers instantaneous local persistence, auto-saving drafts so work is never lost, and clean markdown preview parsing.",
      problem:
        "Most commercial note apps have heavy load times, require user accounts, and feel overly cluttered for quick lecture notes and code snippet dumps.",
      solution:
        "Engineered a zero-dependency web application using vanilla Python and localStorage. Built a debounce auto-save engine, keyboard shortcuts for fast capture, and an organic soft-palette theme.",
      learnings: [
        "Mastered DOM manipulation, Event Listeners, and input debouncing techniques in vanilla JS.",
        "Deepened understanding of the Web Storage API (localStorage) and state serialization.",
        "Implemented semantic keyboard shortcuts (Ctrl+S, Ctrl+B) and accessible screen-reader notices.",
      ],
      tools: ["Python", "HTML5", "CSS3", "LocalStorage", "Git"],
      year: "2026",
      demoUrl: "https://github.com/urfairygodmother",
      githubUrl: "https://github.com/urfairygodmother",
      badge: "Featured Exploration",
      cornerRadii: "32px 24px 36px 20px",
      accentColor: "#bfdcb5",
      isPlaceholder: true,
    },
    {
      id: "algocanvas",
      title: "AlgoCanvas — Interactive Sorting Playground",
      tagline: "Visualizing fundamental sorting algorithms with step-by-step playback.",
      summary:
        "An interactive algorithm visualizer that breathes life into Bubble, Selection, and Insertion sorts with speed control, step counters, and custom array generators.",
      fullDescription:
        "Designed to help fellow first-year classmates understand algorithmic time complexity and array mutations visually. AlgoCanvas allows students to generate randomized, inverted, or nearly-sorted datasets and step through comparisons and swaps one by one.",
      problem:
        "Reading pseudocode and trace tables can feel abstract and difficult to internalize for beginning computer science students.",
      solution:
        "Built a modular visualization canvas using asynchronous Python promises and CSS transition states. Color-codes array elements during comparison, swap, and finalized sorted states.",
      learnings: [
        "Understood async/await control flow and setTimeout scheduling for animation sequencing.",
        "Strengthened understanding of algorithmic time and space complexity (Big-O notation).",
        "Created an intuitive control UI with play/pause, step-forward, and variable speed slider.",
      ],
      tools: ["Python", "HTML5", "CSS Flexbox", "Async/Await", "GitHub"],
      year: "2026",
      demoUrl: "https://github.com/urfairygodmother",
      githubUrl: "https://github.com/urfairygodmother",
      badge: "Interactive Demo",
      cornerRadii: "24px 34px 22px 32px",
      accentColor: "#f6c9a6",
      isPlaceholder: true,
    },
    {
      id: "ecocalc",
      title: "Campus EcoTracker — Sustainability Calc",
      tagline: "Helping students measure and reduce their daily campus carbon footprint.",
      summary:
        "A responsive utility web app that computes student commuting, meal choices, and lab electricity usage into an intuitive daily sustainability score.",
      fullDescription:
        "Built for an environmental science and web dev peer challenge. Campus EcoTracker provides an easy 4-step wizard calculating estimated kg CO2 equivalents with actionable suggestions to lower daily ecological impact on campus.",
      problem:
        "Students are often unaware of how routine daily choices (commuting type, single-use cups, lab hardware idle time) compound over a semester.",
      solution:
        "Crafted a mobile-first responsive multi-step form with dynamic client-side calculations, visual progress indicators, and instant breakdown charts rendered with pure CSS bars.",
      learnings: [
        "Implemented multi-step form validation and user input sanitization in pure Python.",
        "Built clean responsive layouts adapted to mobile screens without heavy CSS frameworks.",
        "Practiced Git branching, pull requests, and commit discipline during the development cycle.",
      ],
      tools: ["Python", "Semantic HTML", "Modern CSS", "Git"],
      year: "2026",
      demoUrl: "https://github.com/urfairygodmother",
      githubUrl: "https://github.com/urfairygodmother",
      badge: "Student Project",
      cornerRadii: "30px 22px 34px 26px",
      accentColor: "#f4e3a1",
      isPlaceholder: true,
    },
  ],
};
