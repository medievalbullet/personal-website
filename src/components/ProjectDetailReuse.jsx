import React from 'react'
import { useLog } from '../hooks/useLog'

export const ProjectsDetailReuse = (props) => {

  // SCRIPTS
  

  ////////////////////////////////////////// DETAIL SECTION /////////////////////////////////////////////

  if (!props) {
    console.error("Props not found in projects detail section!")
  } else {
    return (
      <>
        {/* Detail Section */}
        <section className='projects-detail-main' id={props.id}>
          <div className='projects-detail-elements'>
            <section>
              <h3 className='projects-detail-title slide-in-element'><i className="material-icons projects-detail-title-icon" style={{color: props.projects.color}}>description</i>Description, Features</h3>
              <div className="separator-h"></div>
              <p className='slide-in-element' dangerouslySetInnerHTML={{ __html: props.projects.desc }}>
                {/* {props.projects.desc} */}
              </p>
            </section>
            <section className='projects-detail-tools'>
              <h3 className='projects-detail-title slide-in-element'><i className="material-icons sub-heading-icon projects-detail-title-icon" style={{color: props.projects.color}}>build</i>Tools Used:</h3>
              <div className="separator-h"></div>
              <div className='projects-detail-tools-elements'>
                {props.projects.toolsList.map((tool, index) => (
                  <div className='projects-detail-tools-logo-container slide-in-element' key={index}>
                    <span style={{background: "radial-gradient(black, " + tool.color +")"}}><img className='projects-detail-tools-logo' src={tool.logo} alt={tool.logoAlt} />{tool.title}</span>
                    <p>- {tool.desc}</p>
                  </div>
                ))}
              </div>
            </section>
            {/* Proccess Section */}
            <section className='projects-detail-process'>
              <h3 className='projects-detail-title slide-in-element'><i className="material-icons projects-detail-title-icon" style={{color: props.projects.color}}>account_tree</i>Process, Challenges</h3>
              <div className="separator-h"></div>
              <p className='projects-detail-process-main'>
                <p className='slide-in-element' dangerouslySetInnerHTML={{ __html: props.projects.process }}>{/* {props.projects.process} */}</p>
                <div className='projects-detail-process-links' style={{borderColor: props.projects.color}}>
                  <a className='slide-in-element' href={props.projects.websiteLink} target='_blank' style={{color: props.projects.color}}>[ <i className="material-icons" style={{color: props.projects.color}}>arrow_outward</i> VISIT THE WEBSITE ]</a>
                  <a className='slide-in-element' href={props.projects.githubLink} target='_blank' style={{color: props.projects.color}}>[ <img id='projects-detail-process-links-github' className='projects-detail-logo' style={{filter: 'invert(1)'}} src={require('../resources/github logo.png')} /> SOURCE CODE ]</a>
                </div>
              </p>
            </section>
          </div>
        </section>
      </>
    )
  }
}

