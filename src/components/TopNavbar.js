import React from 'react'
import { Link } from'react-router-dom'

export default function TopNavbar() {
  return (
    <nav className="flexbox" id='top-navbar'>
        <Link to={"/"}>
          Home
        </Link>
        <span>About</span>
        <span>Skills</span>
        <span>Projects</span>
        <span>Contact</span>
    </nav>
  )
}
