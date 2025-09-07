import React from 'react'

function Header({ active, setActive }) {
  return (
    <header id="header" className={active === 'home' ? 'header-tops' : 'header-top'}>
      <div className="container">
        <h1><a href="#header" onClick={(e) => { e.preventDefault(); setActive('home') }}>Priyanshi Tayal</a></h1>
        <h2>Software Engineer</h2>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/priyanshi-tayal-452792213" className="linkedin"><i className="icofont-linkedin"></i></a>
          <a href="https://github.com/tayalpriyanshi10" className="github"><i className="icofont-github"></i></a>
        </div>
        <nav className="nav-menu d-none d-lg-block">
          <ul>
            <li className={active === 'home' ? 'active' : ''}><a href="#header" onClick={(e) => { e.preventDefault(); setActive('home') }}>Home</a></li>
            <li className={active === 'about' ? 'active' : ''}><a href="#about" onClick={(e) => { e.preventDefault(); setActive('about') }}>About</a></li>
            <li className={active === 'projects' ? 'active' : ''}><a href="#projects" onClick={(e) => { e.preventDefault(); setActive('projects') }}>Projects and Certifications</a></li>
            <li className={active === 'resume' ? 'active' : ''}><a href="#resume" onClick={(e) => { e.preventDefault(); setActive('resume') }}>Resume</a></li>
            <li className={active === 'contact' ? 'active' : ''}><a href="#contact" onClick={(e) => { e.preventDefault(); setActive('contact') }}>Contact Me</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

