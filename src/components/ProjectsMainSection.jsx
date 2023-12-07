import React, { useEffect, useState } from 'react'
import { useLog } from '../hooks/useLog'
import { createEvent } from '@testing-library/react'

export const ProjectsMainSection = () => {

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
      color: 'lightgreen',
      github: 'https://github.com/medievalbullet/Imigator'
    },
    {
      id: 2,
      title: 'Instuments Station',
      desc: 'View instruments in style',
      logo: require('../resources/logo192.png'),
      color: 'magenta',
      github: null
    },
    {
      id: 3,
      title: 'Shippington',
      desc: 'Shipping company landing page',
      logo: require('../resources/logo192.png'),
      color: 'orange',
      github: null
    },
    {
      id: 4,
      title: 'Gaming Gateway',
      desc: 'Gaming forum web appp',
      logo: require('../resources/logo192.png'),
      color: 'red',
      github: null
    }
  ]
  
  let currentProjectRect
  let currentProjectRects

  // INIT
  useEffect(() => {
    currentProjectRect = document.getElementById('projects-quicknav-rect-' + currentProject)
  }, [])


  // NEXT ARROW
  const handleNextProject = async () => {
    if (currentProject <= projects.length -1) {
      setCurrentProject(currentProject + 1)
    } else {
      setCurrentProject(1)
    }
  }

  // PREV ARROW
  const handlePrevProject = async () => {
    if (currentProject > 1) {
      setCurrentProject(currentProject - 1)
    } else {
      setCurrentProject(projects.length)
    }
  }

  useEffect(() => {
    // HANDLE CURRENT PROJECT STYLES
    
    /// PROJECT MAIN ///
    const projectMainElements = document.getElementsByClassName('projects-main')
    
    // HIDE all the current PROJECT ELEMENTS, that are not the current
    Array.from(projectMainElements).map((element, index) => {
      if (index === currentProject - 1) {
        element.classList.remove('projects-main-hidden')
      } else {
        // Hide other elements
        element.classList.add('projects-main-hidden')
      }
    })
    
    /// RECTS ///
    currentProjectRects = document.getElementsByClassName('projects-quicknav-rect')

    const currentProjectElement = currentProjectRects[currentProject - 1]
    const currentProjectRestElements = Array.from(currentProjectRects).slice(0, currentProject - 1).concat(Array.from(currentProjectRects).slice(currentProject))

    if (currentProjectElement) {
      
      
      currentProjectElement.style.backgroundColor = projects[currentProject - 1].color
      currentProjectElement.style.opacity = 1
      currentProjectElement.classList.add("projects-quicknav-rect-hover")
      currentProjectElement.classList.remove('outline-breath-class')
      setTimeout(() => {
        currentProjectElement.classList.remove("projects-quicknav-rect-hover")
      }, 300)

      currentProjectRestElements.map((elem) => elem.style.backgroundColor = null)
      currentProjectRestElements.map((elem) => elem.style.opacity = null)

      //HOVER ANIMS AND TRANSITIONS
      currentProjectRestElements.map((elem) => elem.classList.remove("projects-quicknav-rect-hover"))
      currentProjectRestElements.map((elem) => elem.classList.add('outline-breath-class'))
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
      <div className="separator-h"></div>
      <div id='projects-area'>
        <img id='projects-bg' src='https://images.unsplash.com/photo-1542378151504-0361b8ec8f93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='background image, waterfall'/>
        <div id='projects-overlay'></div>

        <div id='projects-main-container'>
          {projects.map((project, index) => (
            <div className='projects-main' key={index}>
              <div className='projects-header'>
                <img className='projects-logo' src={project.logo} alt="project logo" />
                <h3 className='projects-title' style={{color: project.color}}>{project.title}</h3>
              </div>
              <p className='projects-desc'>{project.desc}</p>
              <button className='projects-visit'><a href={"/" + (project.title).toLowerCase}>Take a look!</a></button>
              <span className='projects-readmore'>Read more below</span>
              <i className='material-icons projects-readmore-arrow' style={{color: project.color}}>arrow_downward</i>
            </div>
          ))}
        </div>


        <div id='projects-next-arrow' className='projects-arrow' onClick={() => handleNextProject()}><i className='material-icons'>arrow_forward</i></div>
        <div id='projects-prev-arrow' className='projects-arrow' onClick={() => handlePrevProject()}><i className='material-icons'>arrow_back</i></div>

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
