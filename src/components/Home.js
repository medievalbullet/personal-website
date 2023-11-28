import React from 'react'
import WelcomeSection from './WelcomeSection'
import AboutSection from './AboutSection'
import SkillsSection from './SkillsSection'
import { ProjectsSection } from './ProjectsSection'
//import ProjectsSection from './ProjectsSection'
//import ContactSection from './ContactSection'

export default function Home() {
  return (
    <article>
        <WelcomeSection />
        <ProjectsSection />
        <AboutSection />
    </article>
  )
}

