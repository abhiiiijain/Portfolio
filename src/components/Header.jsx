import React, { useEffect, useState } from 'react'

function Header({ active, setActive }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('mobile-nav-active', mobileOpen)
    return () => {
      document.body.classList.remove('mobile-nav-active')
    }
  }, [mobileOpen])

  const handleNavClick = (e, section) => {
    e.preventDefault()
    setActive(section)
    setMobileOpen(false)
  }

  return (
    <header id="header" className={active === 'home' ? 'header-tops' : 'header-top'}>
      <div className="container">
        <h1><a href="#header" onClick={(e) => { e.preventDefault(); setActive('home') }}>Abhinandan Jain</a></h1>
        <h2>Software Engineer</h2>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/abhiiiijain" className="linkedin"><i className="icofont-linkedin"></i></a>
          <a href="https://github.com/abhiiiijain" className="github"><i className="icofont-github"></i></a>
        </div>
        <button
          type="button"
          className="mobile-nav-toggle d-lg-none"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <i className={mobileOpen ? 'icofont-close' : 'icofont-navigation-menu'}></i>
        </button>
        <nav className="nav-menu d-none d-lg-block">
          <ul>
            <li className={active === 'home' ? 'active' : ''}><a href="#header" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
            <li className={active === 'about' ? 'active' : ''}><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
            <li className={active === 'projects' ? 'active' : ''}><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects and Certifications</a></li>
            <li className={active === 'resume' ? 'active' : ''}><a href="#resume" onClick={(e) => handleNavClick(e, 'resume')}>Resume</a></li>
            <li className={active === 'contact' ? 'active' : ''}><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact Me</a></li>
          </ul>
        </nav>
        <nav className="mobile-nav d-lg-none" aria-hidden={!mobileOpen}>
          <ul>
            <li className={active === 'home' ? 'active' : ''}><a href="#header" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
            <li className={active === 'about' ? 'active' : ''}><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
            <li className={active === 'projects' ? 'active' : ''}><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects and Certifications</a></li>
            <li className={active === 'resume' ? 'active' : ''}><a href="#resume" onClick={(e) => handleNavClick(e, 'resume')}>Resume</a></li>
            <li className={active === 'contact' ? 'active' : ''}><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact Me</a></li>
          </ul>
        </nav>
        <div
          className="mobile-nav-overly d-lg-none"
          onClick={() => setMobileOpen(false)}
          style={{ display: mobileOpen ? 'block' : 'none' }}
        ></div>
      </div>
    </header>
  )
}

export default Header

