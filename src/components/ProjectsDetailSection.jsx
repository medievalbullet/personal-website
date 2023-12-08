import React from 'react'
import { ProjectsDetailReuse } from './ProjectDetailReuse'

/*
color

desc

toolList {
  logo
  logoAlt
  title
  desc
}

process

websiteLink
githubLink
*/

const ProjectsDetailSection = () => {

  const toolsToolList1 = [
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
  ]

  return (
    <ProjectsDetailReuse 

      color = "lightgreen"

      desc = "Imigator is a image database CRUD(Create, Read, Update, Delete) web application that allow users to upload images and tag them, then the images can be viewed and are also searchable by the user."

      toolsToolList = {toolsToolList1}
      
      process = "When building the project I faced numerous challenges. My main goal was to focus on building a functioning CRUD app, while learning all the fundamentals of <strong>React</strong> and typescript. I chose typescript just to get familiar with it."
      
      websiteLink = "/imigator"
      githubLink = "https://github.com/medievalbullet/Imigator"
    
    />
  )
}

export default ProjectsDetailSection