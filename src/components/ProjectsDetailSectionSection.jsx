import React from 'react'

export const ProjectsDetailSection = () => {
  return (
    <div id='projects-detail-main'>
      <article className='projects-detail-elements'>
        <section>
          <h3>1. Description, Features</h3>
          <p>
            Imigator is a image database CRUD(Create, Read, Update, Delete) web application that allow users to upload images and tag them, 
            then the images can be viewed and are also searchable by the user.
          </p>
        </section>
        <section className='projects-detail-tools'>
          <h3>2. Tools used to create this project</h3>
          <div className='projects-detail-tools-elements'>
            <span>Vite</span>
            <span>ReactJS</span>
            <span>SCSS(SASS)</span>
            <span>Typescript</span>
          </div>
        </section>
        <section className='projects-detail-process'>
          <h3>3. Process & Difficulties</h3>
          <p className='projects-detail-process-main'>
            When building the project I faced numerous challenges. My main goal was to focus on building a functioning CRUD app,
            while learning all the fundamentals of React and typescript. I chose typescript just to get familiar with it.
            <div className='projects-detail-process-links'>
              <a href='/imigator' target='_blank'>[ VISIT THE WEBSITE ]</a>
              <a href='https://github.com/medievalbullet/Imigator' target='_blank'>[ GITHUB ]</a>
            </div>
          </p>
        </section>
      </article>

    </div>
  )
}
