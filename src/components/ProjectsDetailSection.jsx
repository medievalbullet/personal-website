import React, { useEffect, useState } from 'react'
import { ProjectsDetailReuse } from './ProjectDetailReuse'
import ProjectsMainSection from './ProjectsMainSection'
import { useLog } from '../hooks/useLog'
import { useFetcher } from 'react-router-dom'

export const ProjectsDetailSection = () => {

  const projects = [
    {
      id: 1,
  
      title: 'Imigate',
      descShort: 'An image storage app with tagging and search functionallity',
      logo: require('../resources/logo192.png'),
  
      color: "lightgreen",
  
      desc: "Imigate is a image storage CRUD(Create, Read, Update, Delete) web application that allow users to upload images and tag them, then the images can be viewed and are also searchable by the user.",
      toolsList: [
        {
          title: "Vite",
          desc: "Initializing, Building the project",
          logo: require("../resources/vite logo.png"),
          logoAlt: "vite logo"
        },
        {
          title: "ReactJS",
          desc: "The Framework used",
          logo: require("../resources/react logo.png"),
          logoAlt: "react logo"
        },
        {
          title: "Sass(SCSS)",
          desc: "CSS Preprocessor",
          logo: require("../resources/sass logo.png"),
          logoAlt: "sass logo"
        },
        {
          title: "Typescript",
          desc: "Main Programming Language",
          logo: require("../resources/typescript logo.webp"),
          logoAlt: "typescript logo"
        }
      ],
      process:
      `
      When building the project I faced numerous challenges.
      My main goal was to focus on building a functioning <strong>CRUD app</strong>, 
      while learning all the fundamentals of <strong>React</strong> and <strong>Typescript</strong>. 
      <br /><br />
      Imigate greatly expanded my react experience, it though me about all the fundamentals, 
      useState, useEffect, custom hooks and a lot more...
      <br /><br />
      Typescript was challanging to learn, I wasn't used to using types before, So in the beginning i got a lot type errors, 
      which slowed down my progress initially. But once i got the hang of it, it was a refreshing experience, 
      my code became cleaner and easier to read.
      <br /><br />
      Looking back, chosing the biggest project as my first one was a mistake. 
      A portion of the code in this project is not optimized properly because of my lack of skill at the time, 
      As the project became bigger it also got harder to see though it, and to comment and organize everything. 
      <br /><br />
      <h4>Conclusion</h4>
      Overall this project really helped me putting all my React and HTML skill to test, 
      and teaching me thoughout the proccess. 
      That being said if I could start over, I would deffinitely start with smaller porjects first, 
      and then when I have the skillset, move on to the bigger projects.
      `,
      websiteLink: "/imigator",
      githubLink: "https://github.com/medievalbullet/Imigator"
    },
    {
      id: 2,
  
      title: 'PROJECT2',
      descShort: 'WIP',
      logo: require('../resources/logo192.png'),
  
      color: "magenta",
  
      desc: "WIP",
      toolsList: [],
      process: "WIP",
      websiteLink: "/imigator",
      githubLink: ""
    },
    {
      id: 3,
  
      title: 'PROJECT3',
      descShort: 'WIP',
      logo: require('../resources/logo192.png'),
  
      color: "orange",
  
      desc: "WIP",
      toolsList: [],
      process: "WIP",
      websiteLink: "/imigator",
      githubLink: ""
    },
    {
      id: 4,
  
      title: 'Personal Website',
      descShort: 'Personal Website featuring my projects',
      logo: require('../resources/logo192.png'),
  
      color: "red",
  
      desc: "Personal Website with information about me and my projects, showcased in a stylish way!",
      toolsList: [],
      process: "WIP",
      websiteLink: "/imigator",
      githubLink: "https://github.com/medievalbullet/Imigator"
    }
  ]

  ///////////////////////////////////////// SCRIPTS //////////////////////////////////////

  //* let currentProject = 1

  const [currentProject, setCurrentProject] = useState(1)

  // REF
  const currentProjectRef = React.useRef(currentProject)

  // Create currentProject REF for event listeners
  const setCurrentProjectRef = (currentProject) => {
    currentProjectRef.current = currentProject
  }

  // Handle Current Project Change

  useEffect(() => {
    const arrowNext = document.getElementById("projects-next-arrow")
    const arrowPrev = document.getElementById("projects-prev-arrow")
  
    const projectCount = projects.length

    setCurrentProjectRef()

    // JUMP BUTTONS 1-[*]
    projects.forEach((project, index) => {
      const projectElement = document.getElementById("projects-quicknav-rect-" + (index + 1))
      projectElement.addEventListener("click", () => {
        //*currentProject = 1
        setCurrentProject(index + 1)
        useLog("currentProject", "red", currentProject)
      })
    })

    // ARROW NEXT
    arrowNext.addEventListener("click", async () => {
      useLog("currentProjectRef", "yellow", currentProjectRef)
      if (currentProjectRef.current < projectCount) {
        setCurrentProject(prevCurrentProject => prevCurrentProject + 1)
      // Jump to first
      } else {
        setCurrentProject(1)
      }
      useLog("currentProject", "red", currentProject)
    })
    

    // ARROW PREV
    arrowPrev.addEventListener("click", async () => {
      useLog("currentProjectRef", "yellow", currentProjectRef)
      if (currentProjectRef.current > 1) {
        setCurrentProject(prevCurrentProject => prevCurrentProject - 1)
      // Jump to last
      } else {
        setCurrentProject(projectCount)
      }
      useLog("currentProject", "red", currentProject)
    })

    // Hide NOT selected sections
    projects.forEach((project) => {
      if (project.id !== currentProject) {
        const element = document.getElementById("projects-detail-main-" + project.id)
        element.style.display = "none"
      }
    })

  }, [])

  useEffect(() => {
    let element
    if (currentProject < 1) {
      element = document.getElementById("projects-detail-main-" + projects.length)
    } else if (currentProject > projects.length) {
      element = document.getElementById("projects-detail-main-" + 1)
    } else {
      element = document.getElementById("projects-detail-main-" + currentProject)
    }
    useLog("currentProject", "red", currentProject)
    useLog("element", "blue", element)
    element.style.display = "flex"

    projects.forEach((project) => {
      if (project.id !== currentProject) {
        const element = document.getElementById("projects-detail-main-"+project.id)
        element.style.display = "none"
      }
    })

    setCurrentProjectRef(currentProject)
  }, [currentProject])




  // I cant select the elements that i need for changing the current project's detail section visibility

  return (
    <>
      {/* MAIN SECTION */}
      <ProjectsMainSection projects={projects} currentProject={currentProject}/>
      {projects.map((project) => {
        return <ProjectsDetailReuse id={"projects-detail-main-"+project.id} projects={project}/>
      })}
    </>
  )
}

export default ProjectsDetailSection