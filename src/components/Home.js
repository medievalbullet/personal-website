import React from 'react'
import WelcomeSection from './WelcomeSection'
import AboutSection from './AboutSection'
import SkillsSection from './SkillsSection'
import { ProjectsSection } from './ProjectsSection'
import { ProjectsDetailSection } from './ProjectsDetailSection'
//import ProjectsSection from './ProjectsSection'
//import ContactSection from './ContactSection'

export default function Home() {
  return (
    <article>
        <WelcomeSection />
        <ProjectsSection />
        <ProjectsDetailSection />
        <AboutSection />
    </article>
  )
}

