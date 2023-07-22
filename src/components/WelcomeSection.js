import React from 'react'

export default function WelcomeSection() {
  return (
    <section>
        <div className='flexbox' id='welcome-section'>
          <span id='welcome-overlay'></span>
          <div className='flexbox' id='welcome-content'>
            <div className='flexbox' id='welcome-text'>
              <span className='slide-in-element' id='welcome-hello'>Hello,</span>
              <div id='welcome-name' className='flexbox'>
                <span className='slide-in-element' id='welcome-im'>I'm,</span>
                <span className='slide-in-element' id='welcome-kirill'>Kirill</span>
                <span className='slide-in-element' id='welcome-reznagy'>Réz-Nagy</span>
              </div>
              <span className='slide-in-element' id='welcome-frontend'>Frontend Developer & Web Designer</span>
            </div>
            <img className='slide-in-element' id='welcome-image' src="https://pbs.twimg.com/profile_images/1673241368582340609/y2RiRmMj_400x400.jpg" alt='prfile picture'/>
          </div>
          <div className='flexbox' id='welcome-nav'>
            <span id='welcome-nav-projects'>Jump to projects</span>
            <div className='flexbox' id='welcome-nav-readmore'>
              <span id='welcome-nav-readmore-text'>Read more</span>
              <i className='material-icons' id='welcome-nav-readmore-arrow'>arrow_downward</i>
            </div>
          </div>
        </div>
    </section>
  )
}
