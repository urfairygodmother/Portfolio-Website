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
        "I'm planning to build a modular visualization canvas using asynchronous Python promises and CSS transition states. Will color-code array elements during comparison, swap, and finalized sorted states.",
      learnings: [
        "Planning to master async/await control flow and setTimeout scheduling for animation sequencing.",
        "Aiming to strengthen understanding of algorithmic time and space complexity (Big-O notation).",
        "Planning to create an intuitive control UI with play/pause, step-forward, and variable speed slider.",
      ],
      tools: ["Coming soon", "Python", "HTML5", "CSS Flexbox", "Async/Await", "GitHub"],
      year: "2026",
      badge: "Upcoming Project",
      cornerRadii: "24px 34px 22px 32px",
      accentColor: "#f6c9a6",
      isPlaceholder: true,
    },
  ],
};
