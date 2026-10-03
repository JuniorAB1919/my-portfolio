import { about, profile } from '../data/portfolioData'

export default function About() {
  return (
    <div>
      <span className="eyebrow">About Andrews</span>
      <h2 className="section-title" style={{ marginBottom: 20 }}>A little about how I think.</h2>

      <div className="about-copy">
        {about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <dl className="about-side">
        <dt>Education</dt>
        <dd>{profile.location}</dd>

        <dt>Focus areas</dt>
        <dd>
          <div className="interest-list">
            {about.interests.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </dd>
      </dl>
    </div>
  )
}
