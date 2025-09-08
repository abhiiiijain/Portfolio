import React from 'react'

export default function Certifications() {
  return (
    <div className="container">
      <div className="section-title"><p>Certifications</p></div>
      <div className="row">
        {[
          // [icon, title, href, issuer, completed]
          ['bx bx-certificate', 'MERN Stack Development', 'https://drive.google.com/file/d/1IsY2qIs1rBV7XLZFS4VfciKgAWqxncDw/view', 'A2IT Online Pvt. Ltd.', 'June 2023'],
          ['bx bx-certificate', 'React Js', 'https://certificates.thinknexttraining.com/en/verify/85494246192917/', 'ThinkNext Technologies Pvt. Ltd.', 'July 2021'],
          ['bx bx-certificate', 'SQL(Intermediate)', 'https://www.hackerrank.com/certificates/c4d15bcc8094', 'HackerRank', 'July 2023'],
          ['bx bx-certificate', 'React(Basic)', 'https://www.hackerrank.com/certificates/18fb8a9f4368', 'HackerRank', 'Sep 2021'],
          ['bx bx-certificate', 'Introduction to Python', 'https://ninjasfiles.s3.amazonaws.com/certificate10579455ae927e27c9741d63d3f039c4a7f566e.pdf', 'Coding Ninjas', 'Sep 2020'],
        ].map(([icon, title, href, issuer, completed]) => (
          <div key={`${title}-${href}`} className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mb-3">
            <div className="icon-box">
              <div className="icon"><i className={icon}></i></div>
              <h4 className="mb-1"><a href={href} target="_blank" rel="noreferrer">{title}</a></h4>
              {(issuer || completed) && (
                <p className="mb-0"><small className="text-muted">{issuer}{issuer && completed ? ' · ' : ''}{completed}</small></p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

