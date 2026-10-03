import { useParams, useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiGithub, FiExternalLink } from 'react-icons/fi'
import { projects } from '../data/portfolioData'

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects.find((p) => p.id === id)

  const goBack = () => {
    // If we arrived here from within the app, idx > 0 and we can go back.
    // Otherwise (e.g. a direct link/refresh) fall back to the homepage.
    if (window.history.state?.idx > 0) {
      navigate(-1)
    } else {
      navigate('./')
    }
  }

  if (!project) {
    return (
      <main>
        <section className="section">
          <div className="wrap">
            <span className="eyebrow">Not found</span>
            <h2 className="section-title" style={{ marginBottom: 18 }}>That project doesn&rsquo;t exist.</h2>
            <button className="btn-secondary" onClick={goBack}>
              <FiArrowLeft /> Back to home
            </button>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main>
      <section className="section">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <span className="eyebrow">Project</span>
          <h2 className="section-title" style={{ marginBottom: 18 }}>{project.name}</h2>

          {project.image && (
            <img
              src={project.image}
              alt={`${project.name} screenshot`}
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 12, marginBottom: 32 }}
            />
          )}

          <h3 style={{ fontSize: 17, marginBottom: 10 }}>What it does</h3>
          <p className="copy" style={{ marginBottom: 28 }}>{project.description}</p>

          <h3 style={{ fontSize: 17, marginBottom: 10 }}>What I used</h3>
          <div className="project-tags" style={{ marginBottom: 28 }}>
            {project.tech.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>

          <h3 style={{ fontSize: 17, marginBottom: 10 }}>What was hard</h3>
          <p className="copy" style={{ marginBottom: 36 }}>
            {project.whatWasHard || 'Add a note here about the trickiest part of building this.'}
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <button className="btn-secondary" onClick={goBack}>
              <FiArrowLeft /> Back to home
            </button>
            {project.links.demo && project.links.demo !== '#' && (
              <a className="btn-secondary" href={project.links.demo} target="_blank" rel="noreferrer">
                <FiExternalLink /> Live demo
              </a>
            )}
            {project.links.github && project.links.github !== '#' && (
              <a className="btn-secondary" href={project.links.github} target="_blank" rel="noreferrer">
                <FiGithub /> Source
              </a>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}