"use client";

import Layout from '@/components/layout/Layout'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import BandSection from '@/components/sections/BandSection'
import Contact from '@/components/sections/Contact'
import StructuredData from '@/components/SEO/StructuredData'
import { heroData, aboutData, projectsData, skillsData, contactData } from '@/data/portfolio'
import { usePageTracking } from '@/hooks/usePageTracking'

export default function Home() {
  usePageTracking();
  
  return (
    <Layout>
      <StructuredData />
      <Hero {...heroData} />
      <About {...aboutData} />
      <Projects {...projectsData} />
      <Skills {...skillsData} />
      <Contact {...contactData} />
      <BandSection />
    </Layout>
  )
}
