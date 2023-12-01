import React from 'react'
import { useJumpTo } from '../hooks/useJumpTo'

export default function WelcomeSection() {

  return (
    <section id='welcome-section'>
      <span id='welcome-overlay'></span>
      <div id='welcome-content'>
        <div id='welcome-text'>
          <span className='slide-in-element' id='welcome-hello'></span>
          <div id='welcome-name'>
            <span className='slide-in-element' id='welcome-name'><span id='welcome-name-main'>Kirill&nbsp;Réz-Nagy</span></span>
          </div>
          <span className='slide-in-element' id='welcome-frontend'>Frontend Developer & Web Designer</span>
        </div>
        <img className='slide-in-element' id='welcome-image' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.imgflip.com%2F2kkro1.jpg&f=1&nofb=1&ipt=7b2688b7a643ef253369c058e8d51a4b447c8defd6fe04f97e134b0b47792956&ipo=images" alt='prfile picture'/>
      </div>
      <div id='welcome-nav'>
        <button id='welcome-nav-projects' onClick={() => {useJumpTo("projects-container"); console.log("USE JUMP TO???")}}>Jump to projects</button>
        <div id='welcome-nav-readmore'>
          <span id='welcome-nav-readmore-text'>Read more</span>
          <i className='material-icons' id='welcome-nav-readmore-arrow'>arrow_downward</i>
        </div>
      </div>
    </section>
  )
}
