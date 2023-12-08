import React from 'react'
import { useLog } from '../hooks/useLog'

// TODO Make tags universal and reusable!!

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

export const ProjectsDetailReuse = (props) => {

  if (props.descDesc) {
    console.error("Props not found in projects detail section!")
  } else {
    return (
      <section id='projects-detail-main'>
        <div className='projects-detail-elements'>
          <section>
            <h3 className='projects-detail-title'><i class="material-icons projects-detail-title-icon" style={{color: props.color}}>description</i>Description, Features</h3>
            <div className="separator-h"></div>
            <p>
              {props.desc}
            </p>
          </section>
          <section className='projects-detail-tools'>
            <h3 className='projects-detail-title'><i class="material-icons sub-heading-icon projects-detail-title-icon" style={{color: props.color}}>build</i>Tools Used:</h3>
            <div className="separator-h"></div>
            <div className='projects-detail-tools-elements'>
              {props.toolsToolList.map((tool) => (
                /* useLog("tool", "lightgreen", tool) */
                <div className='projects-detail-tools-logo-container'>
                  <span style={{backgroundColor: props.color}}><img className='projects-detail-tools-logo' src={tool.logo} alt={tool.logoAlt} />{tool.title}</span>
                  <p>- {tool.desc}</p>
                </div>
              ))}
            </div>
          </section>
          <section className='projects-detail-process'>
            <h3 className='projects-detail-title'><i class="material-icons projects-detail-title-icon" style={{color: props.color}}>account_tree</i>Process, Challenges</h3>
            <div className="separator-h"></div>
            <p className='projects-detail-process-main'>
              {props.process}
              <div className='projects-detail-process-links' style={{borderColor: props.color}}>
                <a href={props.websiteLink} target='_blank' style={{color: props.color}}>[ <i class="material-icons" style={{color: props.color}}>arrow_outward</i> VISIT THE WEBSITE ]</a>
                <a href={props.githubLink} target='_blank' style={{color: props.color}}>[ <img id='projects-detail-process-links-github' className='projects-detail-logo' style={{filter: 'invert(1)'}} src={require('../resources/github logo.png')} /> SOURCE CODE ]</a>
              </div>
            </p>
          </section>
        </div>
      </section>
    )
  }
}

