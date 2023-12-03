import React from 'react'
import { useJumpTo } from '../hooks/useJumpTo'

export default function WelcomeSection() {

  return (
    <section id='welcome-section'>
      <span id='welcome-overlay'></span>
      <div id='welcome-content'>
        <div id='welcome-text'>
          <span className='slide-in-element' id='welcome-hello'></span>
          <h1 id='welcome-name' className='slide-in-element'>Kirill&nbsp;Réz-Nagy</h1>
          <span className='slide-in-element' id='welcome-frontend'>Frontend Developer & Web Designer</span>
        </div>
        <img className='slide-in-element' id='welcome-image' src={require('../resources/jake mason.jpg')} alt='prfile picture'/>
      </div>
      <div id='welcome-nav'>
        <button id='welcome-nav-projects' onClick={() => {useJumpTo("projects-container"); console.log("USE JUMP TO???")}}>Jump to projects</button>
        <div id='welcome-nav-readmore'>
          <span id='welcome-nav-readmore-text'>Read more about me!</span>
          <i className='material-icons' id='welcome-nav-readmore-arrow'>arrow_downward</i>
        </div>
      </div>
    </section>
  )
}
