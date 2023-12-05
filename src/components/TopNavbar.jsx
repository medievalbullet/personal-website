import React from 'react'
import { Link } from'react-router-dom'
import HandleSectionJump from '../scripts/HandleSectionJump'
import { useJumpTo } from '../hooks/useJumpTo'

function toggleTopMenu() {
  const animatedElements = document.getElementsByClassName('top-navbar-small-items')
  const menuIcon = document.getElementById("top-navbar-small-btn")

  for (let i = 0; i < 3; i++){
    console.log(animatedElements)
  }

  if (!animatedElements[0].classList.contains('open-top-menu')) {
    
    //animate menu open, ontimeout(
    //  do that => that
    //)
    document.getElementById("top-navbar-small-menu").classList.add('open-top-menu-container')
    menuIcon.innerHTML = "close"
    
    setTimeout(() => {
      Array.from(animatedElements).forEach(element => {
        element.classList.add('open-top-menu')
      });
    }, 300);

  }

  else {

    document.getElementById("top-navbar-small-menu").classList.remove('open-top-menu-container')

    Array.from(animatedElements).forEach(element => {
      element.classList.remove('open-top-menu')
      menuIcon.innerHTML = "menu"
      
    });
  }
}

export default function TopNavbar() {
  return (
    <>
      <nav id='top-navbar' aria-label='primary-navigation'>
        <img className='link' id='top-navbar-logo' src={require("../resources/personal logo thick.svg")} alt="personal logo" />
        {/* <Link to={"/"} id='top-navbar-home' onClick={useJumpTo('welcome-section')}>
          Home
        </Link> */}
        <span className='link' style={{marginLeft: "-2rem"}}>Projects</span>
        <span className='link'>Skills</span>
        <span className='link' onClick={() => (useJumpTo('about-container'))}>About</span>        
        <span className='link'>Contact</span>
      </nav>
      <nav id='top-navbar-small' aria-label='primary-navigation'>
        <div id='top-navbar-small-head'>
          <Link to={"/"}>Home</Link>
          <i onClick={() => (toggleTopMenu())} className="material-icons" id='top-navbar-small-btn'>menu</i>
        </div>
        <div id='top-navbar-small-menu'>
          <span className='link top-navbar-small-items'>Projects</span>
          <span className='link top-navbar-small-items'>Skills</span>
          <span className='link top-navbar-small-items' onClick={() => (useJumpTo('about-container'), toggleTopMenu())}>About</span>
          <span className='link top-navbar-small-items'>Contact</span>
        </div>
      </nav>
    </>
  )
}
