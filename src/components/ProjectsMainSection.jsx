import React, { useEffect, useState } from 'react'
import { useLog } from '../hooks/useLog'

export const ProjectsMainSection = (props) => {

  ////////////////////////////////////////// SCRIPT ///////////////////////////////////////////
  
  // VARIABLES
  const [currentProject, setCurrentProject] = useState(1)
  
  let currentProjectRect
  let currentProjectRects

  // INIT
  useEffect(() => {
    currentProjectRect = document.getElementById('projects-quicknav-rect-' + currentProject)
  }, [])


  // NEXT ARROW
  const handleNextProject = async () => {
    if (currentProject <= props.projects.length -1) {
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
      setCurrentProject(props.projects.length)
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
      
      
      currentProjectElement.style.backgroundColor = props.projects[currentProject - 1].color
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
    //useLog("jumpToProject", "orange", index)
    setCurrentProject(index + 1)
  }


  // Arrows Follow mouse
  const arrowNext = document.getElementById("projects-next-arrow")
  const arrowPrev = document.getElementById("projects-prev-arrow")

  const arrowNextIcon = document.getElementById("projects-next-arrow-icon")
  const arrowPrevIcon = document.getElementById("projects-prev-arrow-icon")

  let arrowNextFollow = false

  // NOTE: This doesn't work as intended, position fixed, made it work, but it doesnt reset back to position relative, and the while loop doesnt work.

  if (arrowNext) {
    arrowNext.addEventListener("mouseenter", () => {
      arrowNextFollow = true
      arrowNextIcon.style.position = "fixed"
      //useLog("Mouse entered!", "aquamarine", [arrowNextIcon, arrowNextFollow])
      
      if (arrowNextFollow === true) {
        document.addEventListener("mousemove", (e) => {
          const my = e.clientY
          useLog("my", "green", my)
          
          // Positioning
          arrowNextIcon.style.top = my + "px"
          arrowNextIcon.style.right = "1.5rem"

          // Rotation
          useLog("arrowNext.getBoundingClientRect().height", "purple", arrowNext.getBoundingClientRect().height)
          
          const angle = (cx, cy, ex, ey) => {
            var dy = ey - cy;
            var dx = ex - cx;
            var theta = Math.atan2(dy, dx); // range (-PI, PI]
            theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
            //if (theta < 0) theta = 360 + theta; // range [0, 360)
            return theta;
          }
          
          const rotationDeg = ""
          const cx = (arrowNext.getBoundingClientRect().height / 2)
          const cy = (window.innerWidth / 2)
          const ex = arrowNextIcon.getBoundingClientRect().left
          const ey = arrowNextIcon.getBoundingClientRect().top

          arrowNextIcon.style.transform = "rotate(" + angle(cx, cy, ex, ey) + "deg)"

          //useLog("arrowNextIcon.style.top", "cyan", arrowNextIcon.style.top)
          //useLog("arrowNextIcon.style.right", "blue", arrowNextIcon.style.left)
        })
      }
    })
    arrowNext.addEventListener("mouseleave", () => {
      arrowNextFollow = false
      arrowNextIcon.style.position = "static"
      useLog("Mouse left!", "red", [arrowNextIcon, arrowNextFollow])
    })
  }

  ////////////////////////////////////////// END //////////////////////////////////////////////


  return (
    <section id='projects-container'>
      <h2 id='projects-header'>PROJECTS</h2>
      <div id='projects-area'>
        <img id='projects-bg' src='https://images.unsplash.com/photo-1542378151504-0361b8ec8f93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='background image, waterfall'/>
        <div id='projects-overlay'></div>

        <div id='projects-main-container'>
          {props.projects.map((project, index) => (
            <div className='projects-main' key={index}>
              <div className='projects-header'>
                <img className='projects-logo' src={project.logo} alt="project logo" />
                <h3 className='projects-title' style={{color: project.color}}>{project.title}</h3>
              </div>
              <p className='projects-desc'>{project.descShort}</p>
              <button className='projects-visit'><a href={"/" + (project.title).toLowerCase}>Take a look!</a></button>
              <span className='projects-readmore'>Read more below</span>
              <i className='material-icons projects-readmore-arrow' style={{color: project.color}}>arrow_downward</i>
            </div>
          ))}
        </div>


        <div id='projects-next-arrow' className='projects-arrow' onClick={() => handleNextProject()}><i className='material-icons' id='projects-next-arrow-icon'>arrow_forward</i></div>
        <div id='projects-prev-arrow' className='projects-arrow' onClick={() => handlePrevProject()}><i className='material-icons' id='projects-prev-arrow-icon'>arrow_back</i></div>

        <div id='projects-quicknav'>
          
          {props.projects.map((project, index) => (
            <span id={'projects-quicknav-rect-' + (index + 1)} className='projects-quicknav-rect' key={index} onClick={() => jumpToProject(index)}></span>
          ))}
        </div>

      </div>

    </section>
  )
}

export default ProjectsMainSection
