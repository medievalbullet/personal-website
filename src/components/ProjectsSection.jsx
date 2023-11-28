import React, { useEffect, useState } from 'react'
import { useLog } from '../hooks/useLog'

export const ProjectsSection = () => {

  /*
  useEffect(() => {
    const bg = document.getElementById("projects-bg")
    if (bg) {
      document.getElementById("projects-overlay").style.height = bg.offsetHeight
    }
  }, [])
  */

  ////////////////////////////////////////// SCRIPT ///////////////////////////////////////////
  
  // VARIABLES
  const [currentProject, setCurrentProject] = useState(1)

  const projects = [
    {
      id: 1,
      title: 'Imigator',
      desc: 'An image database with tagging and search functionallity',
      logo: require('../resources/logo192.png'),
      color: 'lightgreen'
    },
    {
      id: 2,
      title: 'Instuments Station',
      desc: 'View instruments in style',
      logo: require('../resources/logo192.png'),
      color: 'magenta'
    }
  ]
  
  let currentProjectRect
  let currentProjectRects

  // INIT
  useEffect(() => {
    currentProjectRect = document.getElementById('projects-quicknav-rect-' + currentProject)
  }, [])

  const handleNextProject = async () => {
  
    if (currentProject <= projects.length -1) {
      setCurrentProject(currentProject + 1)

      useLog("WE GOT HERE", "lightblue", currentProject)

    } else {
      setCurrentProject(1)

      useLog("WE GOT HERE", "red", currentProject)
    }
  }

  useEffect(() => {
    // HANDLE CURRENT PROJECT STYLES
    currentProjectRects = document.getElementsByClassName('projects-quicknav-rect')

    const currentProjectElement = currentProjectRects[currentProject - 1]
    useLog("currentProjectElement", "magenta", currentProjectElement)
    const currentProjectRestElement = Array.from(currentProjectRects).slice(0, currentProject - 1).concat(Array.from(currentProjectRects).slice(currentProject))

    if (currentProjectElement) {
      currentProjectElement.style.backgroundColor = projects[currentProject - 1].color
      currentProjectElement.style.opacity = 1

      useLog("currentProjectElement", "purple", currentProjectElement)
      useLog("currentProjectRestElement", "magenta", currentProjectRestElement)
      currentProjectRestElement.map((elem) => elem.style.backgroundColor = null)
      currentProjectRestElement.map((elem) => elem.style.opacity = null)
    }
  }, [currentProject])

  const jumpToProject = (index) => {
    useLog("jumpToProject", "orange", index)
    setCurrentProject(index + 1)
  }

  ////////////////////////////////////////// END //////////////////////////////////////////////

  return (
   
    <section id='projects-container'>
      <h2 id='projects-header'>PROJECTS</h2>
      
      <div id='projects-area'>
        <img id='projects-bg' src='https://images.unsplash.com/photo-1542378151504-0361b8ec8f93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='background image, waterfall'/>
        <div id='projects-overlay'></div>

        <div id='projects-main-container'>
          {projects.map((project, index) => (
            <div className='projects-main' key={index}>
              <img className='projects-logo' src={project.logo} alt="project logo" />
              <h4 className='projects-title'>{project.title}</h4>
              <p className='projects-desc'>{project.desc}</p>
            </div>
          ))}
        </div>


        <div id='projects-arrow' onClick={() => handleNextProject()}><i className='material-icons'>arrow_forward</i></div>

        <div id='projects-quicknav'>
          
          {projects.map((project, index) => (
            <span id={'projects-quicknav-rect-' + (index + 1)} className='projects-quicknav-rect' key={index} onClick={() => jumpToProject(index)}></span>
          ))}
        </div>

      </div>

    </section>
  )
}

/*



*/
