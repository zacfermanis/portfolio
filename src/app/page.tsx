import Layout from '@/components/layout/Layout'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import BandSection from '@/components/sections/BandSection'
import Contact from '@/components/sections/Contact'
import ThreeJSDebug from '@/components/background/ThreeJSDebug'
import { heroData, aboutData, projectsData, skillsData, contactData } from '@/data/portfolio'

export default function Home() {
  return (
    <Layout>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4 text-red-500">Three.js Debug Area</h2>
        <ThreeJSDebug />
      </div>
      <Hero {...heroData} />
      <About {...aboutData} />
      <Projects {...projectsData} />
      <Skills {...skillsData} />
      <Contact {...contactData} />
      <BandSection />
    </Layout>
  )
}
