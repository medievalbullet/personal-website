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
        <a href="">About</a>
        <span className='separator-v'></span>
        <a href="">Skills</a>
        <span className='separator-v'></span>
        <a href="">Projects</a>
        <span className='separator-v'></span>
        <a href="">Contact</a>
      </nav>
    </section>
  )
}
