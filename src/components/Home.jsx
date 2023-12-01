import React from 'react'
import AboutSection from './AboutSection'
import SkillsSection from './SkillsSection'
import TopNavbar from './TopNavbar'
import { ProjectsSection } from './ProjectsSection'
import { ProjectsDetailSection } from './ProjectsDetailSection'
import WelcomeSection from './WelcomeSection.jsx'
//import ProjectsSection from './ProjectsSection'
//import ContactSection from './ContactSection'

export default function Home() {
  return (
    <div className='home'>    
      <header className="header">
        <TopNavbar />
      </header>
      <div id='home-sections'>
        <WelcomeSection />
        <AboutSection />
        <ProjectsSection />
        <ProjectsDetailSection />
      </div>
      <footer className="footer">
        <div>© {new Date().getFullYear()}, Built with React by Mastershaff, All Rights Reserved.</div>
      </footer>
    </div>
  )
}

