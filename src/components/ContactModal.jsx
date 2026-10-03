import { useEffect } from 'react'
import { FiX, FiPhone, FiMail, FiLinkedin } from 'react-icons/fi'
import { profile } from '../data/portfolioData'

export default function ContactModal({ open, onClose }) {
  // Close on Escape key
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <FiX />
        </button>

        <h3 className="modal-title">Get in touch</h3>
        <p className="modal-subtitle">Choose how you&rsquo;d like to reach me.</p>

        <div className="modal-options">
          {profile.phones.map((phone) => (
            <a className="modal-option" href={`tel:${phone.replace(/\s+/g, '')}`} key={phone}>
              <span className="modal-option-icon"><FiPhone /></span>
              <span>
                <strong>Call</strong>
                <small>{phone}</small>
              </span>
            </a>
          ))}

          <a className="modal-option" href={`mailto:${profile.email}`}>
            <span className="modal-option-icon"><FiMail /></span>
            <span>
              <strong>Email</strong>
              <small>{profile.email}</small>
            </span>
          </a>

          <a className="modal-option" href={profile.linkedin} target="_blank" rel="noreferrer">
            <span className="modal-option-icon"><FiLinkedin /></span>
            <span>
              <strong>LinkedIn</strong>
              <small>{profile.name}</small>
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}