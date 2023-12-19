import React from 'react'
import { useJumpTo } from '../hooks/useJumpTo'

export const Footer = () => {
  return (
    <section id='footer-main'>
      <div id='footer-elements'>
        <img id='footer-logo' src={require("../resources/personal logo thick.svg")} alt="personal logo" />
        <p>Created by <strong>Réz-Nagy Kirill</strong> with ReactJS</p>
      </div>
      {/* <span className='separator-h'></span> */}
      <nav id='footer-links'>
        <a onClick={() => useJumpTo("about-container")}>About</a>
        <span className='separator-v'></span>
        <a onClick={() => {}}>Skills</a>
        <span className='separator-v'></span>
        <a onClick={() => useJumpTo("projects-container")}>Projects</a>
        <span className='separator-v'></span>
        <a onClick={() => useJumpTo("about-container")}>Contact</a>
      </nav>
    </section>
  )
}
