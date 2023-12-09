import React from 'react'
import AboutSection from './AboutSection'
import SkillsSection from './SkillsSection'
import TopNavbar from './TopNavbar'
import ProjectsMainSection from './ProjectsMainSection'
import ProjectsDetailSection from './ProjectsDetailSection.jsx'
import WelcomeSection from './WelcomeSection.jsx'
import { Footer } from './Footer.jsx'
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
        <ProjectsDetailSection />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  )
}

