import React from 'react'
import { ProjectsDetailReuse } from './ProjectDetailReuse'
import ProjectsMainSection from './ProjectsMainSection'

const projects = [
  {
    id: 1,

    title: 'Imigator',
    descShort: 'An image database with tagging and search functionallity',
    logo: require('../resources/logo192.png'),

    color: "lightgreen",

    desc: "Imigator is a image database CRUD(Create, Read, Update, Delete) web application that allow users to upload images and tag them, then the images can be viewed and are also searchable by the user.",
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
    process: "When building the project I faced numerous challenges. My main goal was to focus on building a functioning CRUD app, while learning all the fundamentals of <strong>React</strong> and typescript. I chose typescript just to get familiar with it.",
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

const ProjectsDetailSection = () => {

  return (
    <>
      {/* MAIN SECTION */}
      <ProjectsMainSection projects = {projects}/>
      {/* Imigator */}
      <ProjectsDetailReuse projects = {projects[0]}/>
      {/* PROJECT2 */}
      <ProjectsDetailReuse projects = {projects[1]}/>
      {/* PROJECT3 */}
      <ProjectsDetailReuse projects = {projects[2]}/>
      {/* Personal Website */}
      <ProjectsDetailReuse projects = {projects[3]}/>
    </>
  )
}

export default ProjectsDetailSection