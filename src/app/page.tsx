import Layout from '@/components/layout/Layout'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Contact from '@/components/sections/Contact'
import { heroData, aboutData, projectsData, skillsData, contactData } from '@/data/portfolio'

export default function Home() {
  return (
    <Layout>
      <Hero {...heroData} />
      <About {...aboutData} />
      <Projects {...projectsData} />
      <Skills {...skillsData} />
      <Contact {...contactData} />
    </Layout>
  )
}
