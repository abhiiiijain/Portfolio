import React, { useEffect } from 'react'

function Skills() {
  return (
    <div className="skills container">
      <div className="section-title"><h2>Skills</h2></div>
      <div className="row skills-content">
        {[
          ['UI Path', 90],
          ['Power Automate', 85],
          ['Python', 80],
          ['HTML', 70],
          ['Tableau', 70],
          ['SQL', 80],
          ['C++', 70],
          ['CSS', 65],
        ].map(([label, val]) => (
          <div key={label} className="col-lg-6">
            <div className="progress">
              <span className="skill">{label} <i className="val"></i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={val} aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Interests() {
  return (
    <div className="interests container">
      <div className="section-title"><h2>Interests</h2></div>
      <div className="row">
        {['Artificial Inteligence', 'Machine Learning', 'Dats Science', 'Github'].map((t) => (
          <div key={t} className="col-lg-3 col-md-4 mt-4 mt-md-4"><div className="icon-box"><h3>{t}</h3></div></div>
        ))}
      </div>
    </div>
  )
}

function Languages() {
  return (
    <div className="language container">
      <div className="section-title"><h2>Languages</h2></div>
      <div className="row">
        {['English', 'Hindi'].map((t) => (
          <div key={t} className="col-lg-3 col-md-4"><div className="icon-box"><h3>{t}</h3></div></div>
        ))}
      </div>
    </div>
  )
}

function OtherSkills() {
  return (
    <div className="testimonials container">
      <div className="section-title"><h2>Other skills</h2></div>
      <div className="owl-carousel testimonials-carousel">
        {[
          'Excellent verbal, interpersonal and written communication skills to stand in society and take part in debates.',
          'Ability to effectively operate in a team environment and co-operate with all other members for efficient work.',
          'Well-developed skills in organization, decision-making, and time-management.',
          'Focused, multi-task oriented, ability to work effectively in challenging and emergency situations.',
          'Strong work ethic, including experience with developing presentations.'
        ].map((text) => (
          <div key={text} className="testimonial-item"><p><i className="bx bxs-quote-alt-left quote-icon-left"></i>{text}<i className="bx bxs-quote-alt-right quote-icon-right"></i></p></div>
        ))}
      </div>
    </div>
  )
}

export default function About() {
  useEffect(() => {
    const w = window
    const $ = w.jQuery || w.$
    if ($ && $.fn && typeof $.fn.owlCarousel === 'function') {
      $('.testimonials-carousel').owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
          0: { items: 1 },
          768: { items: 2 },
          900: { items: 3 }
        }
      })
    }
  }, [])
  return (
    <section id="about" className="about section-show">
      <div className="about-me container">
        <div className="section-title">
          <p>About Me</p>
        </div>
        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src={`${import.meta.env.BASE_URL}assets/img/dp.jpg`} className="img-fluid" alt="priyanshitayal" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Software Engineer</h3>
            <p className="font-italic">
              Results-driven RPA Developer with one year of experience designing and deploying automation solutions using UiPath and Power Automate. Skilled in process analysis, system integration, and workflow optimization across ERP, CRM, and legacy platforms, with a focus on delivering scalable and cost-efficient automation aligned with business objectives. I hold a Bachelor’s degree in Computer Science from Chandigarh Engineering College, CGC Landran, and bring strong technical foundations in C++, Python, and DSA.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="icofont-rounded-right"></i> <strong>Date of Birth:</strong> 10 Sep 2001</li>
                  <li><i className="icofont-rounded-right"></i> <strong>Phone:</strong> 8171548621</li>
                  <li><i className="icofont-rounded-right"></i> <strong>City:</strong> Roorkee, India</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="icofont-rounded-right"></i> <strong>Age:</strong> <span id="age"></span></li>
                  <li><i className="icofont-rounded-right"></i> <strong>Email:</strong> <a href="mailto:priyanshitayal10@gmail.com">priyanshitayal10@gmail.com</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Skills />
      <Interests />
      <Languages />
      <OtherSkills />
    </section>
  )
}

