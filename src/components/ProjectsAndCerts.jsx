import React from 'react'
import Projects from './Projects'
import Certifications from './Certifications'

export default function ProjectsAndCerts() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <Projects />
        <Certifications />
      </div>
    </section>
  )
}

