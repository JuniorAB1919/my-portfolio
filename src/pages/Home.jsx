import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import Projects from '../components/projects'
import Skills from '../components/Skills'
import HowIWork from '../components/HowIWork'
import About from '../components/About'
import Contact from '../components/Contact'

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.slice(1)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }, [location])

  return (
    <main>
      <Hero />
      <Projects />
      <Skills />
      <HowIWork />

      <section className="section" id="about">
        <div className="wrap about-contact">
          <About />
          <Contact />
        </div>
      </section>
    </main>
  )
}