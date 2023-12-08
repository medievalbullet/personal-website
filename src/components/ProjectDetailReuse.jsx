import React from 'react'

// TODO Make tags universal and reusable!!

/*

- Description
descTitle
descDesc

- Tools Used
toolsTitle
toolsToolList {
  color  
  logo
  logoAlt
  title
  desc
}

- Process, Challenges
processTitle
processDesc

websiteLink
githubLink
*/

export const ProjectsDetailReuse = (props) => {

  if (props.descTitle) {
    console.error("Props not found in projects detail section!")
  } else {
    return (
      <section id='projects-detail-main'>
        <div className='projects-detail-elements'>
          <section>
            <h3 className='projects-detail-title'><i class="material-icons projects-detail-title-icon">description</i>{props.descTitle}</h3>
            <div className="separator-h"></div>
            <p className='projects-detail'>
              {props.descDesc}
            </p>
          </section>
          <section className='projects-detail-tools'>
            <h3 className='projects-detail-title'><i class="material-icons sub-heading-icon projects-detail-title-icon">build</i>{props.toolsTitle}</h3>
            <div className="separator-h"></div>
            <div className='projects-detail-tools-elements'>
              {props.toolsToolList.map((tool) => {
                <div className='projects-detail-tools-logo-container'>
                  <span style={tool.color}><img className='projects-detail-tools-logo' src={require(tool.logo)} alt={tool.logoAlt} />{tool.title}</span>
                  <p>- {tool.desc}</p>
                </div>
              })}
            </div>
          </section>
          <section className='projects-detail-process'>
            <h3 className='projects-detail-title'><i class="material-icons projects-detail-title-icon">account_tree</i>{props.processTitle}</h3>
            <div className="separator-h"></div>
            <p className='projects-detail-process-main'>
              {props.processDesc}
              <div className='projects-detail-process-links'>
                <a href={props.websiteLink} target='_blank'>[ <i class="material-icons">arrow_outward</i> VISIT THE WEBSITE ]</a>
                <a href={props.githubLink} target='_blank'>[ <img id='projects-detail-process-links-github' className='projects-detail-logo' style={{filter: 'invert(1)'}} src={require('../resources/github logo.png')} /> SOURCE CODE ]</a>
              </div>
            </p>
          </section>
        </div>
      </section>
    )
  }
}
