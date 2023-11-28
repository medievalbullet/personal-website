import React from 'react'
import { Link } from'react-router-dom'
import HandleSectionJump from '../scripts/HandleSectionJump'

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
      <nav className="flexbox" id='top-navbar'>
        <Link to={"/"} id='top-navbar-home'>
          Home
        </Link>
        <span className='link'>Projects</span>
        <span className='link'>Skills</span>
        <span className='link' onClick={() => (HandleSectionJump('about-section'))}>About</span>        
        <span className='link'>Contact</span>
      </nav>
      <nav className="flexbox" id='top-navbar-small'>
        <div className='flexbox' id='top-navbar-small-head'>
          <Link to={"/"}>Home</Link>
          <i onClick={() => (toggleTopMenu())} className="material-icons" id='top-navbar-small-btn'>menu</i>
        </div>
        <div className='flexbox' id='top-navbar-small-menu'>
          <span className='link top-navbar-small-items'>Projects</span>
          <span className='link top-navbar-small-items'>Skills</span>
          <span className='link top-navbar-small-items' onClick={() => (HandleSectionJump('about-section'), toggleTopMenu())}>About</span>
          <span className='link top-navbar-small-items'>Contact</span>
        </div>
      </nav>
    </>
  )
}
