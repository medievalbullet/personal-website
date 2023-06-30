import React, { useEffect } from 'react'
import { Link } from'react-router-dom'

function handleSectionJump(section) {
  setTimeout(
    document.getElementsByClassName(section)[0].scrollIntoView({behavior: 'smooth'})
    ,1000 )
}

export default function TopNavbar() {
  return (
    <nav className="flexbox" id='top-navbar'>
        <Link to={"/"}>
          Home
        </Link>
        <span onClick={() => (handleSectionJump('footer'))}>About</span>
        <span>Skills</span>
        <span>Projects</span>
        <span id='navbar-contact'>Contact</span>
    </nav>
  )
}
