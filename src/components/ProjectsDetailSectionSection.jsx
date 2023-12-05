import React from 'react'

export const ProjectsDetailSection = () => {
  return (
    <section id='projects-detail-main'>
      <div className='projects-detail-elements'>
        <section>
          <h3 className='projects-detail-title'><i class="material-icons projects-detail-title-icon">description</i>Description, Features</h3>
          <p>
            Imigator is a image database CRUD(Create, Read, Update, Delete) web application that allow users to upload images and tag them, 
            then the images can be viewed and are also searchable by the user.
          </p>
        </section>
        <section className='projects-detail-tools'>
          <h3 className='projects-detail-title'><i class="material-icons projects-detail-title-icon">build</i>Tools Used:</h3>
          <div className='projects-detail-tools-elements'>
            <div className='projects-detail-tools-logo-container'>
              <span><img className='projects-detail-tools-logo' src={require('../resources/vite logo.png')} alt="vite logo" />Vite</span>
              <p>- Initializing, Building the project</p>
            </div>
            <div className='projects-detail-tools-logo-container'>
              <span><img className='projects-detail-tools-logo' src={require('../resources/react logo.png')} alt="react logo" />ReactJS</span>
              <p>- The Framework used</p>
            </div>
            <div className='projects-detail-tools-logo-container'>
              <span><img className='projects-detail-tools-logo' src={require('../resources/sass logo.png')} alt="sass logo" />Sass(SCSS)</span>
              <p>- CSS Preprocessor</p>
            </div>
            <div className='projects-detail-tools-logo-container'>
              <span><img className='projects-detail-tools-logo' src={require('../resources/typescript logo.webp')} alt="typescript logo" />Typescript</span>
              <p>- Main Programming Language</p>
            </div>
          </div>
        </section>
        <section className='projects-detail-process'>
          <h3 className='projects-detail-title'><i class="material-icons projects-detail-title-icon">account_tree</i>Process, Challenges</h3>
          <p className='projects-detail-process-main'>
            When building the project I faced numerous challenges. My main goal was to focus on building a functioning CRUD app,
            while learning all the fundamentals of <strong>React</strong> and typescript. I chose typescript just to get familiar with it.
            <div className='projects-detail-process-links'>
              <a href='/imigator' target='_blank'>[ <i class="material-icons">arrow_outward</i> VISIT THE WEBSITE ]</a>
              <a href='https://github.com/medievalbullet/Imigator' target='_blank'>[ <img id='projects-detail-process-links-github' className='projects-detail-logo' style={{filter: 'invert(1)'}} src={require('../resources/github logo.png')} /> SOURCE CODE ]</a>
            </div>
          </p>
        </section>
      </div>
    </section>
  )
}
