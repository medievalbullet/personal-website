import React from 'react'

/*
function AboutBox(text, title) {
  return (
    <div className='flexbox'>
    <span>{text}</span>
    <span>{title}</span>
  </div>
  )
}
*/

export default function AboutSection() {
  return (
    <section id='about-container'>
        <div id='about-main'>
          <h2 className='slide-in-element' id='about-title'>ABOUT.</h2>
          <div id='about-content'>
            <section className='about-section'>
              <h3 className='about-titles-group slide-in-element' id='about-journey'>My Journey</h3>
              <p className='about-text slide-in-element' id='about-journey-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
            <section className='about-section'>
              <h3 className='about-titles-group slide-in-element' id='about-journey-title'>Hobbies & Activities</h3>
              <p className='about-text slide-in-element' id='about-journey-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
          </div>
        </div>
    </section>
  )
}
