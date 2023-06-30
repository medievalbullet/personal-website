import React from 'react'

export default function WelcomeSection() {
  return (
    <section>
        <div className='flexbox' id='welcome-section'>
          <span id='welcome-overlay'></span>
          <div className='flexbox' id='welcome-text'>
            <span id='welcome-hello'>Hello,</span>
            <div id='welcome-name' className='flexbox'>
              <span id='welcome-im'>I'm,</span>
              <span id='welcome-kirill'>Kirill</span>
              <span id='welcome-reznagy'>Réz-Nagy</span>
            </div>
            <span id='welcome-frontend'>Frontend Developer & Web Designer</span>
          </div>
          <img id='welcome-image' src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Juvenile_Ragdoll.jpg" alt='white kitten'/>
        </div>
    </section>
  )
}
