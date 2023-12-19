import React, { useEffect, useLayoutEffect } from 'react'

export const ContactSection = () => {

  // SCRIPTS
  let email

  useLayoutEffect(() => {
    email = document.getElementById('contact-email')
  }, [])

  //NOTE: WIP: Dont work yet


  /* if (!email) {
    return
  } */

  const copyEmail = () => {
    email.select()
    document.execCommand('copy')
  }

  return (
    <section id='contact-container'>
      <h2 id='contact-header'>Contact</h2>
      <div id='contact-main'>
        <span id='contact-title'>Email</span>
        <span className='separator-v'>&nbsp;</span>
        <input id='contact-email' type="text" value='reznagykirill@gmail.com' />
        <span className='separator-v'>&nbsp;</span>
        <button onClick={() => copyEmail()} id='contact-copy-button'><i id='contact-copy-icon' className='material-icons'>content_copy</i></button>
      </div>
    </section>
  )
}
