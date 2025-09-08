import React, { useEffect } from 'react'

function Skills() {
  return (
    <div className="skills container">
      <div className="section-title"><h2>Skills</h2></div>
      <div className="row skills-content">
        {[
          ['HTML', 90],
          ['CSS', 90],
          ['JavaScript', 80],
          ['ReactJS', 80],
          ['Node.js', 70],
          ['Express', 60],
          ['MySQL', 80],
          ['MongoDB', 85],
          ['Tailwind CSS', 90],
          ['C++', 80],
          ['Data Structures and Algorithms', 80],
          ['SCSS', 70]
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
        {['Data Structures and Algorithms', 'SQL', 'Problem Solving', 'MERN Stack', 'C++', 'SCSS'].map((t) => (
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
        {['English', 'Punjabi', 'Hindi'].map((t) => (
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
          'Strong verbal, written, and interpersonal communication skills with the ability to confidently engage in discussions and presentations.',
          'Proven ability to collaborate effectively within team environments to achieve common goals.',
          'Well-developed organizational, decision-making, and time-management skills.',
          'Adaptable and focused, with the ability to manage multiple tasks and perform effectively in challenging or high-pressure situations.',
          'Committed work ethic, with experience in creating and delivering impactful presentations.',
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
            <img src={`${import.meta.env.BASE_URL}assets/img/dpabhiii.png`} className="img-fluid" alt="AbhinandanJain" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Software Engineer</h3>
            <p className="font-italic">
              Driven by the desire to grow in a dynamic and competitive environment, I aim to leverage my skills
              to contribute to impactful digital solutions while expanding my knowledge of cutting-edge technologies.
              I hold a Bachelor of Technology in Computer Science from Chandigarh Engineering College, CGC Landran,
              with a strong foundation in Operating Systems, Data Structures, Algorithms, Databases, and Networking.
              <br />
              I have hands-on experience in developing and optimizing scalable, user-friendly web applications using
              the MERN Stack and MySQL, gained through professional project work in collaborative Agile environments.
              My technical expertise includes C++, Data Structures and Algorithms (DSA), HTML, CSS, JavaScript, ReactJS,
              Node.js, Express, MySQL, and MongoDB, along with proficiency in Redux, Tailwind CSS, and Ant Design. I
              also hold a 5-star C++ badge on HackerRank and possess strong problem-solving abilities with a
              focus on writing efficient, maintainable code.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="icofont-rounded-right"></i> <strong>Date of Birth:</strong> 13 May 2001</li>
                  <li><i className="icofont-rounded-right"></i> <strong>Phone:</strong> 9588544510</li>
                  <li><i className="icofont-rounded-right"></i> <strong>City:</strong> Ratia, India</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="icofont-rounded-right"></i> <strong>Age:</strong> <span id="age"></span></li>
                  <li><i className="icofont-rounded-right"></i> <strong>Email:</strong> <a href="mailto:abhinandanbansal123@gmail.com">abhinandanbansal123@gmail.com</a></li>
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

