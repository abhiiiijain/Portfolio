import React from 'react'

export default function ProjectsAndCerts() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="container">
          <div className="section-title"><p>Projects</p></div>
          <div className="row">
            {[
              ['bx bxl-dribbble', 'Virtual Desktop Assistant', 'Backend Developer\nSmarter learning, Set date and time, Calender and reminders etc'],
              ['bx bx-file', 'Artificial Intelligence Chatbot', 'It handle queries, 24*7 customer services, Chat deploy'],
              ['bx bx-tachometer', 'Traffic Sign Classifier (An E-commerce Website)', 'The objective is to classify images of traffic signs into their respective categories accurately.']
            ].map(([icon, title, desc]) => (
              <div key={title} className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="icon-box">
                  <div className="icon"><i className={icon}></i></div>
                  <h4><a href="">{title}</a></h4>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container">
          <div className="section-title"><p>Certifications</p></div>
          <div className="row">
            {[
              ['bx bx-world', 'RPA Developer Learning Plan for UiPath', 'https://drive.google.com/file/d/1DxChKhdpNkJ07XXDXcn9faNRIHyyouT-/view?usp=drivesdk'],
              ['bx bx-arch', 'Power Automate', 'https://drive.google.com/file/d/14TwcpuDU6UDWhpCDw4tq2VvVjQ7unKn1/view'],
              ['bx bx-slideshow', 'Snowflake', 'https://drive.google.com/file/d/1ykDaYVL-HF0a5JQZnnzMSyW0KOaN4_Zr/view']
            ].map(([icon, title, href]) => (
              <div key={title} className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box">
                  <div className="icon"><i className={icon}></i></div>
                  <h4><a href={href} target="_blank" rel="noreferrer">{title}</a></h4>
                </div>
              </div>
            ))}
          </div>

          <div className="row">
            {[
              ['bx bx-world', 'Microsoft Azure Fundamentals', 'https://drive.google.com/file/d/1rCBVL0NhmRDU9pPVAi8Ovg4Fw9jdYklH/view'],
              ['bx bx-slideshow', 'Advance Python', 'https://drive.google.com/file/d/1zuwPobJvlUVsUevi4J1T_G5dS4Aj5Xcr/view'],
              ['bx bx-arch', 'C++ For C Programmers Coursera (online)', 'https://coursera.org/share/25f95952fce3065e82423a0a03327ef7']
            ].map(([icon, title, href]) => (
              <div key={title} className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box">
                  <div className="icon"><i className={icon}></i></div>
                  <h4><a href={href} target="_blank" rel="noreferrer">{title}</a></h4>
                </div>
              </div>
            ))}
          </div>

          <div className="row">
            {[
              ['bx bx-world', 'React Js ThinkNext Technologies Pvt. Ltd. (Online)', 'http://certificates.thinknexttraining.com/en/verify/85494246192917'],
              ['bx bx-slideshow', 'Introduction to Data Analytics for Business (Online)', 'https://coursera.org/share/5070620f3c68530ebb563e17670014a7']
            ].map(([icon, title, href]) => (
              <div key={title} className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box">
                  <div className="icon"><i className={icon}></i></div>
                  <h4><a href={href} target="_blank" rel="noreferrer">{title}</a></h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

