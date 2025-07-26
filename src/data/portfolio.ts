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
      technologies: ["AI Strategy", "Agentic Coding", "MCP", "TensorFlow", "PyTorch", "OpenAI API", "LangChain", "Computer Vision", "NLP", "MLOps"]
    },
    {
      category: "Enterprise Architecture",
      technologies: ["Enterprise AI", "Corporate Functions", "Talent Systems", "Security Best Practices", "Leadership", "Strategic Planning"]
    },
    {
      category: "Frontend Development",
      technologies: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js", "Vue.js", "Angular"]
    },
    {
      category: "Backend Development",
      technologies: ["Node.js", "Python", "Java", "C#", ".NET", "Express.js", "Django", "Spring Boot", "ASP.NET Core"]
    },
    {
      category: "Database & Cloud",
      technologies: ["PostgreSQL", "MongoDB", "MySQL", "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Redis"]
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