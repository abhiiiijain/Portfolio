import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title"><p>Contact</p></div>
        <div className="row mt-2">
          <div className="col-md-6 d-flex align-items-stretch">
            <div className="info-box"><i className="bx bx-map"></i><h3>Address</h3><p>#149, Ward No.2, Ratia, Haryana</p></div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
            <div className="info-box">
              <i className="bx bx-share-alt"></i>
              <h3>Social Profiles</h3>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/abhiiiijain" className="linkedin"><i className="icofont-linkedin"></i></a>
                <a href="https://github.com/abhiiiijain" className="github"><i className="icofont-github"></i></a>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-4 d-flex align-items-stretch">
            <div className="info-box"><i className="bx bx-envelope"></i><h3>Email</h3><p><a href="mailto:abhinandanbansal123@gmail.com">abhinandanbansal123@gmail.com</a></p></div>
          </div>
          <div className="col-md-6 mt-4 d-flex align-items-stretch">
            <div className="info-box"><i className="bx bx-phone-call"></i><h3>Contact</h3><p>+91 9588544510</p></div>
          </div>
        </div>
      </div>
    </section>
  )
}

