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
        element.classList.remove('hidden')
      } else {
        // Hide other elements
        element.classList.add('hidden')
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
  const arrows = [
    document.getElementById("projects-next-arrow"),
    document.getElementById("projects-prev-arrow")
  ]

  const arrowIcons = [
    document.getElementById("projects-next-arrow-icon"),
    document.getElementById("projects-prev-arrow-icon")
  ]

  // Angle calculation
  const angle = (cx, cy, ex, ey) => {
    var dy = ey - cy;
    var dx = ex - cx;
    var theta = Math.atan2(dy, dx); // range (-PI, PI]
    theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
    //if (theta < 0) theta = 360 + theta; // range [0, 360)
    return theta;
  }

  let arrowFollow = false

  //-//- Arrows compined code block -//-//
  
  for (let i = 0; i < arrows.length; i++) {
    if (arrows[0] && arrows[1]) {
      
      arrows[i].addEventListener("mouseover", () => {
  
        arrowFollow = true
        arrowIcons[i].style.position = "fixed"
        
        if (arrowFollow === true) {
          document.addEventListener("mousemove", (e) => {
            
            // Positioning
            const my = e.clientY
  
            arrowIcons[i].style.top = my + "px"

            arrowIcons[0].style.right = "1.5rem"
            arrowIcons[1].style.left = "1.5rem"
  
            // Rotation
            const cx = (window.innerWidth / 2)
            const cy = (arrows[0].getBoundingClientRect().top * 2)
  
            const ex = arrowIcons[i].getBoundingClientRect().left
            const ey = arrowIcons[i].getBoundingClientRect().top
  
            if (i === 1) {
              useLog("[I] is 1!", "brown", i)
              arrowIcons[i].style.transform = "rotate(" + (angle(cx, cy, ex, ey) + 180) + "deg)"
            } else {
              arrowIcons[i].style.transform = "rotate(" + angle(cx, cy, ex, ey) + "deg)"
            }
            
          })
        } else {
          arrowIcons[i].style.transform = "rotate(" + 0 + "deg)"
        }
      })
      arrows[i].addEventListener("mouseout", () => {
        arrowFollow = false
        arrowIcons[i].style.position = "static"
        useLog("Mouse left!", "red", [arrowIcons[i], arrowFollow])
      })
    }
  }
  
  //-//- END -//-//

  ////////////////////////////////////////// END //////////////////////////////////////////////

  return (
    <section id='projects-container'>
      <h2 className='slide-in-element' id='projects-header'>PROJECTS</h2>
      <div id='projects-area'>
        {props.projects.map((project, index) => {
          return <img id='projects-bg' src={project.background} alt='background image, waterfall'/>
        })}

        {/* <img id='projects-bg' src='https://images.unsplash.com/photo-1542378151504-0361b8ec8f93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='background image, waterfall'/> */}

        <div id='projects-overlay'></div>

        <div id='projects-main-container'>
          {props.projects.map((project, index) => (
            <div className='projects-main' key={index}>
              <div className='projects-header'>
                <img className='projects-logo slide-in-element' src={project.logo} alt="project logo" />
                <h3 className='projects-title slide-in-element' style={{color: project.color}}>{project.title}</h3>
              </div>
              <p className='projects-desc slide-in-element'>{project.descShort}</p>
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
