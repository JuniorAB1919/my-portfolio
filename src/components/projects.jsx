import { Link } from 'react-router-dom'
import { FiGithub, FiExternalLink, FiEye, FiCode, FiTrello, FiDollarSign, FiLock, FiClipboard } from 'react-icons/fi'
import { projects } from '../data/portfolioData'

const THUMB_ICON = {
  linimate: FiCode,
  flux: FiTrello,
  'finance-tracker': FiDollarSign,
  'flask-auth': FiLock,
  'restaurant-oms': FiClipboard,
}

const THUMB_BG = {
  linimate: 'linear-gradient(135deg, rgba(128,74,138,0.5), rgba(58,3,83,0.9))',
  flux: 'linear-gradient(135deg, rgba(245,158,81,0.35), rgba(58,3,83,0.9))',
  'finance-tracker': 'linear-gradient(135deg, rgba(248,210,153,0.3), rgba(58,3,83,0.9))',
  'flask-auth': 'linear-gradient(135deg, rgba(128,74,138,0.5), rgba(58,3,83,0.9))',
  'restaurant-oms': 'linear-gradient(135deg, rgba(245,158,81,0.35), rgba(58,3,83,0.9))',
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">Selected work</span>
            <h2 className="section-title">Projects</h2>
          </div>
          <p className="section-note">Full-stack apps, backend APIs and developer tools — built end to end.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => {
            const Icon = THUMB_ICON[project.id] || FiCode
            const isLast = i === projects.length - 1 && projects.length % 2 === 1
            return (
              <article className={`project-card${isLast ? ' span-2' : ''}`} key={project.id}>
                <Link to={`/projects/${project.id}`} className="project-thumb" style={{ background: THUMB_BG[project.id] }}>
                  {project.image ? (
                    <img src={project.image} alt={`${project.name} screenshot`} className="project-thumb-img" />
                  ) : (
                    <Icon size={40} color="#f8d299" opacity={0.85} />
                  )}
                </Link>

                <div className="project-body">
                  <span className="project-index">0{i + 1}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>

                  <div className="project-footer">
                    <div className="project-tags">
                      {project.tech.slice(0, 4).map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>

                    <div className="project-links">
                      <Link to={`/projects/${project.id}`} aria-label={`View ${project.name} details`}>
                        <FiEye />
                      </Link>
                      {project.links.demo && project.links.demo !== '#' && (
                        <a href={project.links.demo} aria-label={`${project.name} live demo`}>
                          <FiExternalLink />
                        </a>
                      )}
                      {project.links.github && project.links.github !== '#' && (
                        <a href={project.links.github} aria-label={`${project.name} source on GitHub`}>
                          <FiGithub />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}