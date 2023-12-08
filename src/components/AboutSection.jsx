import React from 'react'

/*
function AboutBox(text, title) {
  return (
    <div className='flexbox'>
    <span>{text}</span>
    <span>{title}</span>
  </div>
  )
}
*/

export default function AboutSection() {
  return (
    <section id='about-container'>
        <div id='about-main'>
          <h2 className='slide-in-element' id='about-header'>ABOUT ME</h2>
          <div id='about-content'>
            <section className='about-section'>
              <h3 className='about-title slide-in-element' id='about-journey'><i class="material-icons about-icon">fork_right</i>My Journey</h3>
              <div className="separator-h"></div>
              <p className='about-text slide-in-element' id='about-journey-text'>
                My coding journey originally started with game development, specifically the Godot game engine, and it's own programming language GDScript.
              </p>
              <p>
                <strong>GDScript</strong> is beginner friendly language similar to python, with a simple synthax and no types.
                At this point in time I didn't have much experience, Even with my lack of experience with coding, I really enjoyed the proccess of making games, 
                I never finished a game, but I was fascinated by the fact that I could create my own games.
              </p>
              <p>
                I used <strong>python</strong> as well for a while, and some basic C. 
                I didn't create anything complicated just some basic apps like a tournament simulation game with python, 
                where from a 16 teams, and a bracket system, each team gets randomly placed into brackets and then the winner is decided on based on the two teams power score.
              </p>
              <p>
                Then i got into web development just a year ago, mainly as usefull skill that would land me a job.
                I chose frontend developement because I'm a really a visual type of a person and i though it would fit me well.
              </p>
              <p></p>
            </section>
            <section className='about-section'>
              <h3 className='about-title slide-in-element' id='about-journey-title'><i class="material-icons about-icon">sports_esports</i>Hobbies & Interests</h3>
              <div className="separator-h"></div>
              <p className='about-text slide-in-element' id='about-journey-text'>
                I like:
                <ul>
                  <li>Listening to music</li>
                  <li>Music production</li>
                  <li>Playing games</li>
                  <li></li>
                </ul>
                
                
                

              </p>
            </section>
          </div>
        </div>
    </section>
  )
}
