// Portfolio data for all sections

export const heroData = {
  name: "Zac Fermanis",
  title: "Solutions Engineer, Architect & AI Leader",
  description: "Experienced software engineer and technology leader with expertise in enterprise systems, full-stack development, and AI-driven solutions. Currently serving as Solutions Engineer at Liberty Mutual, leading AI initiatives and enterprise architecture for a Fortune 100 company.",
  ctaText: "View My Work",
  ctaLink: "#projects",
  image: "/Me_Transparent_Drawn.png"
}

export const aboutData = {
  title: "About Me",
  subtitle: "Get to know me better",
  description: "I'm a seasoned software engineer and technology leader with over 20 years of experience building enterprise systems and leading technical teams. My expertise spans full-stack development, cloud architecture, and AI-driven solutions.",
  details: [
    "Lead AI initiatives and enterprise architecture at Liberty Mutual as Solutions Engineer",
    "Named Corporate Functions AI champion, advising senior leadership on AI strategy",
    "Co-founded and serve as CTO of Elegant Elephant Travel, achieving $1M+ annual revenue",
    "Developed 40+ enterprise systems across various FinTech industries",
    "Specialized in AI/ML integration and cloud-native architectures"
  ],
  image: "/Me_Transparent_Drawn.png",
  resumeUrl: "/Zac_Fermanis-Resume.pdf"
}

export const skillsData = {
  title: "Skills & Technologies",
  subtitle: "My technical expertise",
  description: "I've worked with a wide range of technologies throughout my career, from frontend frameworks to backend systems and cloud infrastructure. Here are the key areas where I excel:",
  skills: [
    {
      category: "AI & Machine Learning",
      technologies: ["AI Strategy", "Agentic Coding", "MCP", "TensorFlow", "PyTorch", "OpenAI API", "LangChain", "Computer Vision", "NLP", "MLOps", "Neural Networks", "Genetic Algorithms", "Machine Learning"]
    },
    {
      category: "Enterprise Architecture",
      technologies: ["Enterprise AI", "Corporate Functions", "Talent Systems", "Security Best Practices", "Leadership", "Strategic Planning", "High Performance Engineering", "Networking/Network Security"]
    },
    {
      category: "Frontend Development",
      technologies: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js", "Vue.js", "Angular", "Vite", "JSP/ASP", "SASS", "jQuery", "Groovy/Grails", "Htmx"]
    },
    {
      category: "Backend Development",
      technologies: ["Node.js", "Python", "Java", "C#", ".NET", "Express.js", "Django", "Spring Boot", "ASP.NET Core", "VB", "J#", "Go", "Rust", "Serverless", "AWS CDK"]
    },
    {
      category: "Database & Cloud",
      technologies: ["PostgreSQL", "MongoDB", "MySQL", "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Redis", "Big Data - Hadoop/Hive"]
    },
    {
      category: "Development Tools & DevOps",
      technologies: ["NPM/YARN/PNPM", "CVS/SVN/GIT/Github Actions", "K6 Load Testing", "Bamboo/Bamboo Specs", "Maven/Gradle", "Ab Initio", "Informatica (ETL)", "OIDC/OAuth 2 Flows"]
    }
  ]
}

export const projectsData = {
  title: "Featured Projects",
  subtitle: "Some of my recent work",
  description: "Here are some of the key projects I've worked on, showcasing my expertise in full-stack development, enterprise systems, and AI integration.",
  projects: [
    {
      id: "liberty-mutual-ai",
      title: "Liberty Mutual AI Initiatives",
      description: "Leading AI strategy and implementation for Corporate Functions, including establishing best practices for Agentic Coding, creating MCP servers, and advising senior leadership on enterprise AI architecture.",
      image: "",
      technologies: ["AI/ML", "Enterprise Architecture", "MCP", "Python", "Security", "Leadership"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      category: "ai" as const
    },
    {
      id: "elegant-elephant",
      title: "Elegant Elephant Travel Platform",
      description: "Comprehensive travel management system serving thousands of customers with real-time booking, payment processing, and AI-powered recommendations. Built with modern web technologies and cloud infrastructure.",
      image: "",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Stripe API", "OpenAI API"],
      liveUrl: "https://elegantelephanttravel.com",
      githubUrl: "https://github.com/zacfermanis/elegant-elephant",
      featured: true,
      category: "web" as const
    },
    {
      id: "enterprise-crm",
      title: "Enterprise CRM System",
      description: "Large-scale customer relationship management system for Fortune 500 company, handling millions of customer records with advanced analytics and reporting capabilities.",
      image: "",
      technologies: ["Angular", "C#", ".NET Core", "SQL Server", "Azure", "Power BI"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      category: "web" as const
    },
    {
      id: "ai-analytics",
      title: "AI-Powered Analytics Platform",
      description: "Machine learning platform for predictive analytics and business intelligence, processing terabytes of data with real-time insights and automated reporting.",
      image: "",
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL", "Docker", "Kubernetes"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      category: "backend" as const
    },
    {
      id: "mobile-app",
      title: "Cross-Platform Mobile App",
      description: "React Native application for field service management, featuring offline capabilities, GPS tracking, and real-time synchronization with backend systems.",
      image: "",
      technologies: ["React Native", "Node.js", "MongoDB", "AWS", "Socket.io", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      category: "mobile" as const
    },
    {
      id: "cloud-migration",
      title: "Legacy System Cloud Migration",
      description: "Successfully migrated 20+ legacy applications to cloud infrastructure, improving performance by 300% and reducing operational costs by 60%.",
      image: "",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Monitoring"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      category: "other" as const
    }
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
      degree: "MS in Computer Science with Concentration in Security",
      institution: "Boston University",
      location: "Boston, MA",
      yearRange: "2017"
    },
    {
      degree: "BS in Computer Science",
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
        "Named Corporate Functions AI champion",
        "Responsible for advising senior leadership and Enterprise Architecture in Corporate AI guidance",
        "Established several best practices and created several key enablers in the Agentic Coding space",
        "Created several MCP servers to accelerate application development",
        "Established several security related best practices to safeguard Agentic Coding initiatives"
      ],
      technologies: ["AI/ML", "MCP", "Enterprise Architecture", "Security", "Leadership"]
    },
    {
      yearRange: "2019-Present",
      company: "Elegant Elephant Travel",
      location: "Remote",
      title: "CTO & Co-Founder",
      description: [
        "Co-founded and lead technical operations for successful travel management platform",
        "Achieved $1M+ annual revenue serving thousands of customers",
        "Developed comprehensive travel management system with real-time booking and payment processing",
        "Implemented AI-powered recommendations and personalized travel experiences",
        "Built and managed cloud infrastructure supporting high-traffic web applications",
        "Led technical team and established development best practices"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "AI/ML", "Stripe API", "OpenAI API"]
    },
    {
      yearRange: "2012-2017",
      company: "Liberty Mutual",
      location: "Boston, MA",
      title: "Principal Software Developer",
      description: [
        "Enterprise Technology Services - Security Delivery",
        "Lead Developer for IAM Systems",
        "Responsible for a portfolio of 5 Enterprise-wide systems and 35 supporting applications",
        "Responsible for Architecture, Design, System Administration, Release Engineering and Software Development for J2EE n-tier applications",
        "Implemented several tools and scripts to reduce release cycle overhead by over 60%",
        "Refactored several applications to support hot-swappable configuration changes",
        "Mentored several junior developers and provided architectural support for multiple development squads"
      ],
      technologies: ["Java/J2EE", "IAM", "Enterprise Systems", "Architecture", "Mentoring"]
    },
    {
      yearRange: "2010-2012",
      company: "Liberty Mutual",
      location: "Boston, MA",
      title: "Software Developer",
      description: [
        "Products & Distribution Applications Development",
        "Worked as a Front-End Developer in LMIT department",
        "Developed and maintained web applications for insurance products and distribution systems",
        "Collaborated with cross-functional teams to deliver high-quality software solutions"
      ],
      technologies: ["Frontend Development", "JavaScript", "HTML", "CSS", "Java", "JSP"]
    },
    {
      yearRange: "2008-2010",
      company: "Citigroup",
      location: "Boston, MA",
      title: "Senior Software Engineer",
      description: [
        "Global Consumer Technology",
        "Developed enterprise applications for consumer banking and financial services",
        "Led development of customer-facing web applications and backend services",
        "Implemented security best practices for financial data handling",
        "Mentored junior developers and conducted code reviews"
      ],
      technologies: ["Java", "Spring", "Oracle", "JavaScript", "Security", "Financial Systems"]
    },
    {
      yearRange: "2006-2008",
      company: "Compaq Computer Co / Hewlett Packard",
      location: "Shrewsbury, MA",
      title: "Software Engineer",
      description: [
        "Enterprise Systems Division",
        "Developed enterprise software solutions for corporate clients",
        "Worked on system integration and data processing applications",
        "Collaborated with cross-functional teams on product development",
        "Implemented automated testing and deployment processes"
      ],
      technologies: ["Java", "C#", "SQL Server", "Enterprise Systems", "Integration"]
    }
  ]
} 