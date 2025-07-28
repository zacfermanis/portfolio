import { projectsData } from '@/data/portfolio';

export default function StructuredData() {
  const projectsStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Zac Fermanis Projects",
    "description": "Featured projects showcasing expertise in full-stack development, enterprise systems, and AI integration",
    "itemListElement": projectsData.projects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "CreativeWork",
        "name": project.title,
        "description": project.description,
        "image": `https://zacfermanis.com${project.image}`,
        "url": project.liveUrl !== "#" ? project.liveUrl : `https://zacfermanis.com/#projects`,
        "author": {
          "@type": "Person",
          "name": "Zac Fermanis"
        },
        "keywords": project.technologies.join(", "),
        "genre": project.category
      }
    }))
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Zac Fermanis Portfolio",
    "url": "https://zacfermanis.com",
    "description": "Professional portfolio of Zac Fermanis - Solutions Engineer, Architect & AI Leader",
    "author": {
      "@type": "Person",
      "name": "Zac Fermanis"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://zacfermanis.com/#projects",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectsStructuredData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData)
        }}
      />
    </>
  );
} 