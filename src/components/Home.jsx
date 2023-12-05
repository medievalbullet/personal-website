import React from 'react'
import AboutSection from './AboutSection'
import SkillsSection from './SkillsSection'
import TopNavbar from './TopNavbar'
import { ProjectsMainSection } from './ProjectsMainSection.jsx'
import { ProjectsDetailSection } from './ProjectsDetailSectionSection.jsx'
import WelcomeSection from './WelcomeSection.jsx'
//import ProjectsSection from './ProjectsSection'
//import ContactSection from './ContactSection'

export default function Home() {
  return (
    <div className='home'>
      <header className="header">
        <TopNavbar />
      </header>
      <main id='home-sections'>
        <WelcomeSection />
        <AboutSection />
        <ProjectsMainSection />
        <ProjectsDetailSection />
      </main>
      <footer className="footer">
        <div>© {new Date().getFullYear()}, Built with React by Mastershaff, All Rights Reserved.</div>
      </footer>
    </div>
  )
}

