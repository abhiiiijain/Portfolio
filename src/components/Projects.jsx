import React from 'react'

export default function Projects() {
  return (
    <div className="container">
      <div className="section-title"><p>Projects</p></div>
      <div className="row">
        {[
          [
            'Expense Tracker',
            'This Expense Tracker app enables users to efficiently manage their finances by recording spending, categorizing expenses, and delivering valuable insights into financial habits. The backend is designed to be robust and scalable, ensuring reliable performance and smooth user experience.',
            '/assets/projects/expense.png',
            ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
            '#',
            '#'
          ],
          [
            'Arkitektur - An Interior Design Website',
            'A feature-rich Interior Design website that allows users to seamlessly book services such as Architecture, 3D Animation, House Planning, Renovation, Interior Design, and Construction.',
            '/assets/projects/arkitektur.png',
            ['React', 'Node.js', 'Express', 'MongoDB'],
            '#',
            '#'
          ],
          [
            'WoodCase',
            'WoodCase is a web application that allows users to view and purchase wooden products.',
            '/assets/projects/woodcase.png',
            ['HTML', 'SCSS', 'JavaScript'],
            '#',
            '#'
          ],
          [
            'Sars-Imprecation',
            'Developed a responsive website to track COVID-19 updates and allow users to raise requests for assistance. The platform is well-designed, functional, mobile-optimized, and provides users with accurate, high-quality content.',
            '/assets/projects/sars.png',
            ['HTML', 'CSS', 'PHP', 'MySQL'],
            '#',
            '#'
          ]
        ].map(([title, desc, img, stack, github, live]) => (
          <div key={title} className="col-lg-4 col-md-6 d-flex align-items-stretch mb-4">
            <div className="icon-box">
              {img && (
                <div className="project-image mb-3">
                  <img
                    src={`${import.meta.env.BASE_URL}${img.replace(/^\//, '')}`}
                    alt={`${title} image`}
                    className="img-fluid"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = `${import.meta.env.BASE_URL}assets/img/aj.png`;
                    }}
                  />
                </div>
              )}
              <h4><a href="">{title}</a></h4>
              <p>{desc}</p>
              {Array.isArray(stack) && stack.length > 0 && (
                <div className="mt-2">
                  {stack.map((tech) => (
                    <span key={tech} className="badge badge-secondary mr-2 mb-2 d-inline-block">{tech}</span>
                  ))}
                </div>
              )}
              {(github || live) && (
                <div className="mt-3">
                  {github && (
                    <a href={github} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-light mr-2">
                      <i className="bx bxl-github mr-1"></i>
                      GitHub
                    </a>
                  )}
                  {/* {live && (
                    <a href={live} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">
                      <i className="bx bx-link-external mr-1"></i>
                      Visit
                    </a>
                  )} */}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

