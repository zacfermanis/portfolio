// Portfolio data for all sections

export const heroData = {
  name: "Zac Fermanis",
  title: "Solutions Engineer, Architect & AI Leader",
  description: "Experienced software engineer and technology leader with over 20 years of expertise in enterprise systems, full-stack development, and AI-driven solutions. Currently serving as Solutions Engineer at Liberty Mutual, leading AI initiatives and enterprise architecture for a Fortune 100 company. Named Corporate Functions AI Champion, advising senior leadership on AI strategy and implementation.",
  ctaText: "View My Work",
  ctaLink: "#projects",
  image: "/Me.jpg"
}

export const aboutData = {
  title: "About Me",
  subtitle: "Get to know me better",
  description: "I'm a seasoned software engineer and technology leader with over 20 years of experience building enterprise systems and leading technical teams. My expertise spans full-stack development, cloud architecture, and AI-driven solutions.",
  details: [
    "Named Corporate Functions AI Champion at Liberty Mutual, advising senior leadership on AI strategy and implementation",
    "Led implementation of award-winning 'Concierge' portal resulting in $5M+ in annual savings",
    "Co-founded and serve as CTO of Elegant Elephant Travel since 2016, achieving $1M+ annual revenue",
    "Developed 40+ enterprise systems across various FinTech and insurance industries",
    "Specialized in AI/ML integration, cloud-native architectures, and high-performance engineering",
    "Engineered systems processing 1M+ transactions per minute supporting $5B+ in daily assets"
  ],
  image: "/zac_oia.png",
  resumeUrl: "/Zac_Fermanis-Resume.pdf"
}

export const skillsData = {
  title: "Skills & Technologies",
  subtitle: "My technical expertise",
  description: "I've worked with a wide range of technologies throughout my career, from frontend frameworks to backend systems and cloud infrastructure. Here are the key areas where I excel:",
  skills: [
    {
      category: "AI & Machine Learning",
      technologies: ["AI Strategy", "Agentic Coding", "MCP", "TensorFlow", "PyTorch", "OpenAI API", "LangChain", "Computer Vision", "NLP", "MLOps", "Neural Networks", "Genetic Algorithms", "Machine Learning", "AI-Driven Automation"]
    },
    {
      category: "Enterprise Architecture",
      technologies: ["Enterprise AI", "Mentoring", "Talent Systems", "Security Best Practices", "Leadership", "Strategic Planning", "High Performance Engineering", "Networking/Network Security", "Micro-Frontends", "SuperGraphQL", "OPA", "LeanIX", "C4 Diagramming"]
    },
    {
      category: "Frontend Development",
      technologies: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js", "Vue.js", "Angular", "Vite", "JSP/ASP", "SASS", "jQuery", "Groovy/Grails", "Htmx", "UI/UX Design"]
    },
    {
      category: "Backend Development",
      technologies: ["Node.js", "Python", "Java", "C#", ".NET", "Express.js", "Django", "Spring Boot", "ASP.NET Core", "VB", "J#", "Go", "Rust", "Serverless", "AWS CDK", "J2EE", "ASP"]
    },
    {
      category: "Database & Cloud",
      technologies: ["PostgreSQL", "MongoDB", "MySQL", "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Redis", "Big Data - Hadoop/Hive", "SQL", "MQ"]
    },
    {
      category: "Financial & Integration Technologies",
      technologies: ["SWIFT", "FPML", "Financial Systems", "High-Performance Systems", "Integration", "Trade Processing", "Assets Under Management", "IBM Rational", "IBM Shark", "Fibre Channel", "SAN"]
    },
    {
      category: "Development Tools & DevOps",
      technologies: ["NPM/YARN/PNPM", "CVS/SVN/GIT/Github Actions", "K6 Load Testing", "Bamboo/Bamboo Specs", "Maven/Gradle", "Ab Initio", "Informatica (ETL)", "OIDC/OAuth 2 Flows", "System Administration", "Release Engineering", "Quality Assurance", "Network Testing"]
    }
  ]
}

export const projectsData = {
  title: "Featured Projects",
  subtitle: "Some of my recent work",
  description: "Here are some of the key projects I've worked on, showcasing my expertise in full-stack development, enterprise systems, and AI integration.",
  projects: [
    {
      id: "elegant-elephant",
      title: "Elegant Elephant Travel Platform",
      description: "Comprehensive travel management system serving thousands of customers with real-time booking, payment processing, and AI-powered recommendations. Built with modern web technologies and cloud infrastructure. Visit www.elegantelephanttravel.com to experience the platform.",
      image: "/logos/eelogo_llc_logo_color_rgb.webp",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Stripe API", "OpenAI API"],
      liveUrl: "https://elegantelephanttravel.com",
      githubUrl: "#",
      featured: true,
      category: "web" as const,
      categories: ["web", "ai"] as const,
      isPrivate: true
    },
    {
      id: "memory-banks",
      title: "Memory Bank for Agents",
      description: "A drop-in NPX script that installs and configures the Memory Bank system following the SPEC design process. Utilizes cutting-edge best practices in Agentic Coding to create intelligent memory management solutions for AI development workflows.",
      image: "/logos/memory-bank-logo.png",
      technologies: ["NPX", "TypeScript", "Agentic Coding", "SPEC Design", "AI/ML", "Memory Management", "Development Tools"],
      liveUrl: "#",
      githubUrl: "https://github.com/zacfermanis/memory-banks",
      featured: true,
      category: "ai" as const,
      categories: ["ai"] as const
    },
    {
      id: "ai-ga-tetris",
      title: "AI-GA Tetris",
      description: "Advanced Tetris implementation using genetic algorithms and artificial intelligence. Features neural network-based gameplay optimization, genetic algorithm training for optimal piece placement strategies, and real-time AI decision making for competitive gameplay.",
      image: "/logos/AI-GA-Tetris_Logo.png",
      technologies: ["Java", "Genetic Algorithms", "Neural Networks", "AI/ML", "Game Development", "Algorithm Optimization"],
      liveUrl: "#",
      githubUrl: "https://github.com/zacfermanis/ai-ga-tetris",
      featured: true,
      category: "games" as const,
      categories: ["games", "ai"] as const
    },
    {
      id: "bad-neighbor",
      title: "Bad Neighbor",
      description: "A LUA-based game developed using the Love2D framework. Features engaging gameplay mechanics, smooth animations, and interactive elements. Demonstrates game development skills and LUA programming expertise.",
      image: "/logos/bad_neighbor.png",
      technologies: ["LUA", "Love2D", "Game Development", "2D Graphics", "Game Mechanics", "Animation"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      category: "games" as const,
      categories: ["games", "ai"] as const,
      isPrivate: true
    },
    {
      id: "fermanis-lawncare",
      title: "Fermanis & Sons Lawn Care",
      description: "Business management system for lawn care operations, featuring customer management, scheduling, billing, and service tracking. Built with modern web technologies for efficient business operations. Visit www.fermanisandsons.com to see the platform in action.",
      image: "/logos/FermanisAndSonsLogo_transparent.webp",
      technologies: ["Web Development", "Business Management", "Customer Management", "Scheduling", "Billing System"],
      liveUrl: "https://fermanisandsons.com",
      githubUrl: "https://github.com/zacfermanis/fermanis_and_sons_lawncare",
      featured: false,
      category: "web" as const,
      categories: ["web"] as const
    },
    {
      id: "portfolio",
      title: "Personal Portfolio Website",
      description: "Modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, interactive components, and a clean design showcasing professional experience and projects. Includes contact form, resume download functionality, and optimized performance.",
      image: "/Me_Transparent_Drawn.png",
      technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Three.js", "Jest", "Testing Library", "Responsive Design", "Performance Optimization"],
      liveUrl: "https://zacfermanis.com",
      githubUrl: "https://github.com/zacfermanis/portfolio",
      featured: true,
      category: "web" as const,
      categories: ["web"] as const
    },

  ]
}

export const contactData = {
  title: "Get In Touch",
  subtitle: "Let's work together",
  description: "I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just want to connect, feel free to reach out.",
  email: "zacfermanis@gmail.com",
  location: "Raleigh, NC",
  social: {
    linkedin: "https://www.linkedin.com/in/zac-fermanis/",
    github: "https://github.com/zacfermanis",
    website: "https://zacfermanis.com"
  }
}

// CV Details data
export const cvData = {
  education: [
    {
      degree: "MS in Computer Science with Concentrations in Security and AI",
      institution: "Boston University",
      location: "Boston, MA",
      yearRange: "2017"
    },
    {
      degree: "BS in Computer Science, Minors: Mathematics, Economics",
      institution: "University of Southern Maine",
      location: "Portland, ME",
      yearRange: "2007"
    }
  ],
  workExperience: [
    {
      yearRange: "2017-Present",
      company: "Liberty Mutual",
      location: "Remote",
      title: "Solutions Engineer",
      description: [
        "Corporate Functions - Talent and Enterprise Services",
        "Named Corporate Functions AI Champion, advising Senior Leadership and Enterprise Architecture on AI strategy and implementation",
        "Established best practices and security guidelines for Agentic Coding, including creation of multiple MCP servers to accelerate application development",
        "Provided architectural support for Talent and Enterprise Services, a department of 150+ engineers",
        "Architected, designed, and led implementation of 'Concierge,' an award-winning intranet portal centralizing feedback management, performance evaluations, and merit/pay administration - resulting in $5M+ in annual savings",
        "Authored high-profile architectural strategies including Fine-Grained Authorization using OPA, Micro-Frontend Architectures, Microservices Architectures, and SuperGraphQL Data-flow",
        "Produced department-wide North Star Architecture diagrams and Reference Architectures; Certified LeanIX practitioner",
        "Mentored junior developers and contributed to High-Performance Engineering culture",
        "Led design and development of DEI portal to improve accessibility and reduce IT support call center volume by 36% in first year",
        "Led architecture and implementation of company-wide Performance Ecosystem overhaul, leveraging Micro-Frontends and SuperGraphQL architecture",
        "Orchestrated cross-functional 'Game-Day' exercises to enhance performance engineering and site reliability practices",
        "Enabled distribution of 37,000+ annual bonus statements in a single day with error rate under 0.5% - the largest volume in company history",
        "Finalist (2nd Place) in 2022 company-wide Hackathon (3,000+ participants)"
      ],
      technologies: ["AI/ML", "MCP", "Enterprise Architecture", "Security", "Leadership", "Micro-Frontends", "SuperGraphQL", "OPA", "LeanIX", "Performance Engineering"]
    },
    {
      yearRange: "2016-Present",
      company: "Elegant Elephant Travel",
      location: "Remote",
      title: "Chief Technology Officer - CoFounder",
      description: [
        "Oversaw all technical operations and strategy, enabling $1M+ in annual revenue with lean infrastructure footprint of less than $5K in annual operating costs",
        "Designed and developed high-performance, SEO-optimized eCommerce website with full social media integration: elegantelephanttravel.com",
        "Built and integrated automated workflows using TravelJoy.com APIs and additional travel CRM/portal tools to streamline client and itinerary management",
        "Created and deployed multiple AI-driven automation tools including:",
        "  • Automated Daily Email Summarizer",
        "  • Follow-Up Detection System", 
        "  • 'Ask My Inbox' natural language inbox assistant",
        "  • Itinerary Validator for catching typographical, logistical, and geographical errors in 3rd-party vendor documents"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "AI/ML", "Stripe API", "OpenAI API", "SEO", "eCommerce", "Automation"]
    },
    {
      yearRange: "2012-2017",
      company: "Liberty Mutual",
      location: "Dover, NH",
      title: "Principal Software Engineer",
      description: [
        "Enterprise Technology Services - Security Delivery",
        "Led architecture, design, development, system administration, and release engineering for a portfolio of 5 enterprise-wide systems and 35+ supporting applications",
        "Supported high-scale J2EE n-tier applications serving 5M+ customer accounts and 50K+ employee identities across the organization",
        "Reduced release cycle overhead by over 60% by scripting and automating previously manual deployment and maintenance tasks",
        "Refactored legacy systems to support hot-swappable configuration changes, eliminating downtime and enabling more agile deployments",
        "Provided architectural guidance and technical leadership to multiple development squads; mentored junior developers to build internal engineering capabilities"
      ],
      technologies: ["Java/J2EE", "Enterprise Systems", "Architecture", "Mentoring", "Automation", "System Administration", "Release Engineering"]
    },
    {
      yearRange: "2010-2012",
      company: "Liberty Mutual",
      location: "Dover, NH",
      title: "Software Developer",
      description: [
        "Products & Distribution Applications Development",
        "Contributed to successful release of refactored Auto Insurance sales platform (GEARS), serving as jQuery Subject Matter Expert (SME) for front-end team",
        "Served as lead developer and UI/UX designer for Personal Liability Protection (PLP) sales application, a high-visibility initiative within the organization",
        "Collaborated in enterprise Java environment using IBM Rational Application Developer (RAD) and Rational Team Concert (RTC) for development and source control"
      ],
      technologies: ["Java", "jQuery", "UI/UX Design", "IBM Rational", "Frontend Development", "JavaScript", "HTML", "CSS"]
    },
    {
      yearRange: "2005-2010",
      company: "Citigroup",
      location: "Boston, MA",
      title: "Senior Programmer Analyst",
      description: [
        "Applications Development",
        "Led multiple integration initiatives under Model Office (AIS Portal) program to onboard newly acquired Bisys Group into Citi's infrastructure, including upgrading and re-engineering several .NET/ASP applications to align with Citi's Information Security Standards and enterprise policies",
        "Served as Lead Developer for XSP (SWIFT/FPML) processing projects at CDIL, implementing SWIFT API using Java/J2EE and acting as Subject Matter Expert (SME) for integration workflows",
        "Led all trade processing and reporting integrations for BGI (Barclays Global Investors), delivering scalable Java/J2EE and .NET applications using SWIFT, MQ, and SQL",
        "Engineered systems capable of processing 1M+ transactions per minute, supporting over $5B in daily Assets Under Management (AUM)"
      ],
      technologies: ["Java/J2EE", ".NET/ASP", "SWIFT", "FPML", "MQ", "SQL", "Integration", "Financial Systems", "High-Performance Systems"]
    },
    {
      yearRange: "2000-2002",
      company: "Compaq Computer Co. / Hewlett Packard",
      location: "Shrewsbury, MA",
      title: "Quality Assurance Engineer",
      description: [
        "StorageWorks - SANSOFT",
        "Designed and executed network testing scripts for high-availability SAN systems",
        "Tested across IBM Shark/DS4400, Solaris, Red Hat Linux, and Windows Server",
        "Utilized Fibre Channel connections for multi-platform validation",
        "Analyzed and documented test results to ensure system stability",
        "Ensured cross-platform performance and compatibility compliance"
      ],
      technologies: ["SAN", "Fibre Channel", "IBM Shark", "Solaris", "Linux", "Windows Server", "Network Testing", "Quality Assurance"]
    }
  ]
} 