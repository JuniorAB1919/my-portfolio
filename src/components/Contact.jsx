import { useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { profile } from '../data/portfolioData'
import ContactModal from './ContactModal'

export default function Contact() {
  const [open, setOpen] = useState(false)

  return (
    <div id="contact">
      <span className="eyebrow">Get in touch</span>
      <h2 className="contact-title">Let&rsquo;s build something.</h2>
      <p className="contact-copy">
        Have a project, opportunity or idea you&rsquo;d like to discuss? Let&rsquo;s connect.
      </p>

      <dl className="contact-details">
        <dt>Phone</dt>
        <dd>{profile.phones.join(' · ')}</dd>

        <dt>Email</dt>
        <dd><a href={`mailto:${profile.email}`}>{profile.email}</a></dd>

        <dt>GitHub</dt>
        <dd><a href={profile.github} target="_blank" rel="noreferrer">{profile.githubHandle}</a></dd>

        <dt>LinkedIn</dt>
        <dd><a href={profile.linkedin} target="_blank" rel="noreferrer">{profile.name}</a></dd>
      </dl>

      <button className="btn-primary" onClick={() => setOpen(true)}>
        Get in touch <FiArrowRight />
      </button>

      <ContactModal open={open} onClose={() => setOpen(false)} />
    </div>
  )
}