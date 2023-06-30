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
    <div>
        <section className='flexbox' id='about-section'>
          <span id='about-title'>ABOUT.</span>
          <div className='flexbox' id='about-content'>
            <div className='flexbox'>
              <span className='about-titles-group' id='about-journey'>MY JOURNEY.</span>
              <div id='about-journey-text' className='about-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </div>
            <div className="flexbox">
              <span className='about-titles-group' id='about-journey-title'>HOBBIES & ACTIVTIES.</span>
              <div id='about-journey-text' className='about-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </div>
          </div>
        </section>
    </div>
  )
}
