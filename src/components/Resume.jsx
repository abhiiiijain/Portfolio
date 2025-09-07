import React from 'react'

export default function Resume() {
  return (
    <section id="resume" className="resume resumed">
      <div className="container">
        <div className="section-title"><p>Resume</p></div>
        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Priyanshi Tayal</h4>
              <p><em>Quest to work and learn in a professional & vying environment that enables me to explore the latest technologies, widen the spectrum of my knowledge and achieve personal and organizational goals.</em></p>
              <ul>
                <li>Priyanshi Tayal</li>
                <li>(+91) 8171548621</li>
                <li><a href="mailto:priyanshitayal10@gmail.com">priyanshitayal10@gmail.com</a></li>
              </ul>
            </div>
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelors of Technology</h4>
              <h5>July 2019- July 2023</h5>
              <p><em>Chandigarh Group of Colleges, Landran Punjab</em></p>
              <p>Field: Computer Science<br/>CGPA: 8.5/10.00<br/>Board: IK Gujral Punjab Technical University(PTU).</p>
            </div>
            <div className="resume-item">
              <h4>Senior Secondary Education</h4>
              <h5>April 2018 - March 2019</h5>
              <p><em>St. Ann's Senior Secondary Roorkee</em></p>
              <p>Stream: Non-Medical<br/>Percentage: 80<br/>Board: CBSE</p>
            </div>
            <div className="resume-item">
              <h4>Secondary Education</h4>
              <h5>April 2016 - March 2017</h5>
              <p><em>St. Ann's Senior Secondary Roorkee</em></p>
              <p>CGPA: 9.4/10<br/>Board: CBSE</p>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Experience</h3>
            <div className="resume-item">
              <h4>RPA Developer</h4>
              <h5>April 2024 - Present</h5>
              <p><em>Optum Global Solutions Pvt. Ltd</em></p>
              <ul>
                <li>Acquired proficiency in RPA tools such as UiPath and Power Automate, and implemented automation solutions under mentorship.</li>
                <li>Assisted in designing, developing, testing, and deploying workflows to automate repetitive processes, ensuring quality through unit testing and peer reviews.</li>
                <li>Contributed to automation initiatives in the banking domain, streamlining critical operations including customer onboarding, KYC verification, and transaction monitoring.</li>
              </ul>
            </div>
            <h3 className="resume-title">Industrial Trainings and Internship</h3>
            <div className="resume-item">
              <h4>Artificial Inteligence</h4>
              <h5>Jan 2023 - June 2023</h5>
              <p><em>Koskill Limited Banglore</em></p>
              <ul><li>Learn Python modules for Artificial Intelligence.</li></ul>
            </div>
            <div className="resume-item">
              <h4>Machine Learning</h4>
              <h5>Feb 2023 - April 2023</h5>
              <p><em>Bharat Heavy Electricals Limited (BHEL) Haridwar</em></p>
              <ul><li>Learn Python modules for Machine Learning.</li></ul>
            </div>
            <div className="resume-item">
              <h4>ReactJS Training</h4>
              <h5>July 2021 - Aug 2021</h5>
              <p><em>Think Next Technologies Mohali, Punjab</em></p>
              <ul>
                <li>Learnt ReactJS and its features to develop frontend.</li>
                <li>Developed an E-commerce website using ReactJS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

