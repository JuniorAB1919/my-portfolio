import { profile } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--line)', paddingTop: 40 }}>
      <div className="wrap" style={{ textAlign: 'center', paddingBottom: 28 }}>
        <h3 style={{ fontSize: 20 }}>{profile.name}</h3>
        <p style={{ color: 'var(--muted)', fontSize: 14, marginTop: 6 }}>
          {profile.role} | {profile.focus}
        </p>
      </div>

      <div className="footer" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap', gap: 10 }}>
          <span>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <div className="footer-links">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={`mailto:${profile.email}`}>Email</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
