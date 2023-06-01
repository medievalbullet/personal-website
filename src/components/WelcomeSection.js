import React from 'react'

export default function WelcomeSection() {
  return (
    <section className='flexbox' id='welcome-section'>
        <div className='flexbox'>
          <div className='flexbox' id='welcome-text'>
            <span id='welcome-hello'>Hello,</span>
            <span id='welcome-name'>I'm, Kirill Réz-Nagy</span>
            <span id='welcome-frontend'>Frontend Developer & Web Designer</span>
          </div>
          <img id='welcome-image' src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Juvenile_Ragdoll.jpg" alt='white kitten'/>
        </div>

    </section>
  )
}
