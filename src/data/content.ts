// All copy lives here so it's easy to review, correct, and keep in sync
// with what was actually confirmed. Anything not confirmed is marked
// [MISSING INFORMATION] or [NEEDS CONFIRMATION] rather than invented.

export const person = {
  name: "Ipsita Saha", // sourced from her own repo README; confirm exact spelling/preferred form
  degree: "B.Tech, Computer Science / Software Engineering", // sourced from her own repo README
  role: "AI/ML · Data Analytics · Web Development",
  location: "[MISSING INFORMATION: city/region]",
  email: "[MISSING INFORMATION: email]",
  linkedin: "[MISSING INFORMATION: LinkedIn URL]",
  github: "https://github.com/2hbvf6",
};

export const heroTagline =
  "Computer Science graduate who turns messy real-world data — spectra, hospital records, restaurant bookings — into working software and clear answers.";

export const about = {
  professional: `I am a Computer Science graduate with a strong interest in Artificial Intelligence, Machine Learning, Software Development, and Data Analytics. I enjoy turning ideas and real-world problems into practical technology solutions.

During my academic journey, I have worked on projects involving Machine Learning, Deep Learning, NIR Spectroscopy, Data Analysis, Power BI, and Web Development. My major project focused on predicting tartrazine adulteration in turmeric powder using NIR spectroscopy and machine learning and deep learning techniques, giving me practical exposure to data preprocessing, dimensionality reduction, model development, and performance evaluation.

Alongside academics, I have gained experience through web development internships and hands-on projects, while continuously improving my skills in Python, C, SQL, DSA, Git/GitHub, and modern development technologies.

I am currently focused on building a career in AI/ML, Software Development, and Data-related roles, where I can continue learning, solve meaningful problems, and contribute to real-world projects.`,
  personal: `Beyond technology, I am someone who enjoys expressing myself through music and creativity. Singing has been an important part of my journey and has given me opportunities to perform, participate, achieve, and grow as a person.

I believe that life is not limited to one field. While technology allows me to explore my curiosity and problem-solving side, music allows me to express my emotions and creativity. Both have taught me the importance of practice, consistency, confidence, and continuous improvement.`,
};

export const skills = [
  {
    category: "Programming",
    items: ["Python", "C", "JavaScript"],
  },
  {
    category: "Data & Databases",
    items: ["SQL", "Data Analysis", "Power BI"],
  },
  {
    category: "AI / Machine Learning",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Dimensionality Reduction",
      "Model Evaluation",
    ],
  },
  {
    category: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React / Next.js"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Excel", "Power BI"],
  },
];

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  problem: string;
  built: string;
  technologies: string[];
  keyFeatures: string[];
  technicalDetails: string;
  contribution: string;
  result: string;
  githubUrl?: string;
  liveUrl?: string;
  publication?: {
    label: string;
    url: string;
    note: string;
  };
  featured: boolean;
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "nir-turmeric-adulteration",
    title: "NIR Spectroscopy Detection of Tartrazine Adulteration in Turmeric",
    tagline:
      "Using near-infrared spectroscopy and machine learning to flag adulterated turmeric powder — published at an IEEE conference.",
    problem:
      "Turmeric powder is a common target for food adulteration, including the addition of synthetic dyes such as tartrazine. Detecting this reliably and quickly is a real food-safety problem.",
    built:
      "An end-to-end pipeline that takes NIR spectral data from turmeric samples and predicts tartrazine adulteration using machine learning and deep learning models, covering the full path from raw spectra to a trained, evaluated model.",
    technologies: [
      "NIR Spectroscopy (data)",
      "Python",
      "Machine Learning",
      "Deep Learning",
    ],
    keyFeatures: [
      "Data preprocessing of raw NIR spectral data",
      "Dimensionality reduction to make spectral data tractable for modeling",
      "Multiple model development and comparison",
      "Performance evaluation of trained models",
    ],
    technicalDetails:
      "[NEEDS CONFIRMATION: the specific preprocessing steps (e.g. standardization method), the specific dimensionality-reduction technique(s), the specific ML/DL model architectures used, and the exact evaluation metrics/results] — the master brief for this site named several candidate techniques (Z-score standardization, Mahalanobis-distance outlier handling, PCA, LDA) as things the writeup *should* cover if used, but did not confirm which of these were the actual methods applied in this project. Please confirm the exact pipeline so this section reflects the real work rather than the candidate list.",
    contribution:
      "Full project: data preprocessing, dimensionality reduction, model development, and performance evaluation.",
    result:
      "[NEEDS CONFIRMATION: exact result values — do not want to invent accuracy/F1/error numbers]. The project was published via an IEEE conference proceeding.",
    publication: {
      label: "IEEE Publication",
      url: "https://ieeexplore.ieee.org/xpl/conhome/11396073/proceeding?sortType=vol-only-seq&isnumber=11396104&searchWithin=habibur",
      note: "[NEEDS CONFIRMATION: exact paper title, author list, conference/proceedings name, and DOI as shown on the official IEEE page — IEEE blocks automated page reads, so these could not be verified directly]",
    },
    featured: true,
  },
  {
    slug: "hospital-management-dashboard",
    title: "Hospital Management Dashboard",
    tagline:
      "An Excel-based hospital data dashboard built with pivot tables, pivot charts, and a full presentation of findings.",
    problem:
      "Raw hospital operational data is hard to read in its native form; the project set out to organize, clean, and visualize it into something a decision-maker could actually use.",
    built:
      "A complete Excel workbook — raw data, processed data, pivot tables, pivot charts, and an interactive dashboard — plus a companion presentation covering methodology, analysis, findings, and future scope.",
    technologies: [
      "Microsoft Excel",
      "Pivot Tables",
      "Pivot Charts",
      "Data Cleaning & Preprocessing",
      "Data Visualization",
    ],
    keyFeatures: [
      "Data cleaning and preprocessing of a publicly sourced hospital dataset",
      "Pivot-table-based summarization of patient, gender, and department-level data",
      "Interactive dashboard with charts and key figures",
      "A full project presentation covering methodology and future scope",
    ],
    technicalDetails:
      "The workflow runs raw data collection → cleaning/preprocessing → analysis → pivot tables → pivot charts → dashboard development → insights and presentation. The repository's own future-scope notes describe extending this toward IoT-based, real-time hospital data collection down the line.",
    contribution:
      "Built the full workbook (raw data, processed data, pivot tables, pivot charts, dashboard) and the accompanying presentation.",
    result:
      "A working interactive Excel dashboard summarizing patient and department-level hospital data, documented with screenshots and a presentation deck.",
    githubUrl: "https://github.com/2hbvf6/Hospital-Management-Dashboard",
    featured: true,
  },
  {
    slug: "kichhukshan-restaurant",
    title: "Kichhukshan Restaurant — Full-Stack Website",
    tagline:
      "A production-style full-stack restaurant website with a working reservation flow, built as part of a freelance portfolio.",
    problem:
      "Built as a client-style deliverable: a restaurant needs a real, production-quality site with a reservation system that actually persists bookings, not a static brochure page.",
    built:
      "A full-stack site split into a frontend and backend repository, following a full-stack build spec (real forms, real persistence, admin visibility, no placeholder buttons).",
    technologies: ["TypeScript (backend)", "HTML (frontend)"],
    keyFeatures: [
      "Separate frontend and backend repositories",
      "Built to a no-placeholder, fully-functional standard",
    ],
    technicalDetails:
      "[NEEDS CONFIRMATION: current tech stack detail beyond repo language stats — see your existing project notes for the fuller build spec.]",
    contribution: "Full-stack build across both the frontend and backend repositories.",
    result: "A working restaurant website with a functioning booking flow.",
    githubUrl: "https://github.com/2hbvf6/kichhukshan-frontend",
    featured: true,
  },
];

export const otherProjects = [
  {
    title: "Amazon Homepage Clone",
    description: "Amazon homepage clone built using HTML and CSS.",
    githubUrl: "https://github.com/2hbvf6/amazon-clone-html-css",
  },
  {
    title: "Amul Cool Website",
    description: "Front-end practice build recreating a branded landing page.",
    githubUrl: "https://github.com/2hbvf6/amul-cool-website",
  },
  {
    title: "Landing Page",
    description: "Standalone landing-page layout exercise.",
    githubUrl: "https://github.com/2hbvf6/Landing-Page",
  },
  {
    title: "Calculator",
    description: "Browser-based calculator built with HTML/JS fundamentals.",
    githubUrl: "https://github.com/2hbvf6/Calculator",
  },
  {
    title: "Temperature Converter",
    description: "Small utility app converting between temperature units.",
    githubUrl: "https://github.com/2hbvf6/Temperature-Converter",
  },
];

export const experience = [
  {
    org: "CodSoft", // [NEEDS CONFIRMATION: is this the internship referenced in the bio?]
    role: "Web Development Intern", // [NEEDS CONFIRMATION]
    duration: "[MISSING INFORMATION: dates]",
    summary:
      "[NEEDS CONFIRMATION: specific responsibilities and projects completed during this internship — a related repository exists but its contents weren't detailed enough to describe the work accurately.]",
  },
];

export const education = [
  {
    degree: "B.Tech, Computer Science / Software Engineering",
    institution: "[MISSING INFORMATION: institution name]", // graduation photos show a university convocation with "TIU"-lettered stoles
    duration: "[MISSING INFORMATION]",
    detail: "[MISSING INFORMATION: CGPA/percentage, honors]",
  },
];

export const achievements = {
  academic: ["[MISSING INFORMATION]"],
  technical: [
    "Research published via an IEEE conference proceeding (NIR turmeric adulteration project)",
  ],
  certifications: ["[MISSING INFORMATION]"],
  music: [
    "Live vocal performances at university cultural events",
    "Certificate of achievement received for a music/performance program",
  ],
};

export const musicJourney = {
  intro:
    "Singing has run alongside the technical side of my life — performing on stage, working with a live band, and picking up recognition along the way. It's taught me the same things good engineering does: practice, consistency, and showing up prepared.",
};

export const resume = {
  available: true,
  note:
    "[NEEDS CONFIRMATION: whether the CV file from the existing PORTFOLIO repository is current, or a newer resume should be used instead]",
};

export const contact = {
  email: "[MISSING INFORMATION]",
  linkedin: "[MISSING INFORMATION]",
  github: "https://github.com/2hbvf6",
};
