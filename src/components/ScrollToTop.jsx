import React, { useLayoutEffect } from 'react'
import { useJumpTo } from '../hooks/useJumpTo'
import { useLog } from '../hooks/useLog'

export const ScrollToTop = () => {
  
  // SCRIPTS

  useLayoutEffect(() => {

    document.addEventListener('scroll', () => {
      const button = document.getElementById("scroll-to-top-button")
      if (button) {
        if (window.scrollY < 350) {
          button.classList.add("scroll-top-to-remove")
        } else {

          button.classList.remove("scroll-top-to-remove")
        }
      }
    })
  }, [])

  return (
    <div id='scroll-to-top'>
      <button id='scroll-to-top-button' onClick={() => useJumpTo("welcome-section")}><i className='material-icons'>arrow_upward</i></button>
    </div>
  )
}
