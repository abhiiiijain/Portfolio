import React from 'react'
import Education from './Education'
import Experience from './Experience'

export default function Resume() {
  return (
    <section id="resume" className="resume resumed">
      <div className="container">
        <div className="section-title"><p>Resume</p></div>
        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Abhinandan Jain</h4>
              <p><em>Quest to work and learn in a professional & vying environment that enables me to explore the latest technologies, widen the spectrum of my knowledge and achieve personal and organizational goals.</em></p>
              <ul>
                <li>Abhinandan Jain</li>
                <li>(+91) 9588544510</li>
                <li><a href="mailto:abhinandanbansal123@gmail.com">abhinandanbansal123@gmail.com</a></li>
              </ul>
            </div>
            <Education />
          </div>
          <div className="col-lg-6">
            <Experience />
          </div>
        </div>
      </div>
    </section>
  )
}

