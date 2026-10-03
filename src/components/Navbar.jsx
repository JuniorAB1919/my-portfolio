import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { FiGithub, FiLinkedin, FiMenu, FiX } from 'react-icons/fi'
import { profile } from '../data/portfolioData'

const LINKS = [
  { label: 'Home', id: 'top' },
  { label: 'Projects', id: 'projects' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    setOpen(false) // close the menu after clicking a link

    if (id === 'top') {
      navigate({ pathname: '/', hash: '' })
      window.history.replaceState(null, '', '/')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    navigate({ pathname: '/', hash: `#${id}` })
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link className="nav-mark" to="/" onClick={() => setOpen(false)}>
          ANDREWS<span>.</span>
        </Link>

        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Section links">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={link.id === 'top' ? '/' : `/#${link.id}`}
              onClick={(e) => {
                e.preventDefault()
                scrollTo(link.id)
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-social">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
        </div>

        <button
          className="nav-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  )
}