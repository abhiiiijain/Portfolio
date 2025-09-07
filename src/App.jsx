import { useEffect, useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import ProjectsAndCerts from './components/ProjectsAndCerts'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Credits from './components/Credits'

function App() {
  const [active, setActive] = useState('about')

  useEffect(() => {
    const el = document.getElementById('age')
    if (el) {
      const birthDate = new Date(2001, 8, 10)
      const today = new Date()
      let years = today.getFullYear() - birthDate.getFullYear()
      const hasHadBirthdayThisYear = (today.getMonth() > birthDate.getMonth()) || (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate())
      if (!hasHadBirthdayThisYear) years -= 1
      el.textContent = String(years)
    }
    document.querySelectorAll('.progress .progress-bar').forEach((bar) => {
      const val = bar.getAttribute('aria-valuenow')
      if (val) bar.setAttribute('style', `width: ${val}%`)
    })
  }, [active])

  return (
    <>
      <Header active={active} setActive={setActive} />
      {active === 'about' && <About />}
      {active === 'projects' && <ProjectsAndCerts />}
      {active === 'resume' && <Resume />}
      {active === 'contact' && <Contact />}
      <Credits />
    </>
  )
}

export default App
