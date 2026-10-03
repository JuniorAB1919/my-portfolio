import { FiArrowRight } from 'react-icons/fi'
import { profile, heroStack } from '../data/portfolioData'
import TechIcon from './TechIcon'
import pageIcon1 from '../assets/page_icon/page_icon1.jpg'
import pageIcon2 from '../assets/page_icon/page_icon2.jpg'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">{profile.name.toUpperCase()}</span>

          <h1 className="hero-title">
            {profile.role} | {profile.focus}
          </h1>

          <p className="hero-tagline">{profile.tagline}</p>

          <div className="hero-actions">
            <a
              className="btn-primary"
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View my projects <FiArrowRight />
            </a>
            <a
              className="btn-secondary"
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Let&rsquo;s work together
            </a>
          </div>

          <p className="hero-stack-label">Core stack</p>
          <div className="hero-stack">
            {heroStack.map((t) => (
              <span className="tech-chip" key={t.name} title={t.name}>
                <TechIcon icon={t.icon} name={t.name} />
              </span>
            ))}
          </div>
        </div>

        <HeroGraphic />
      </div>
    </section>
  )
}

// Two real screenshots arranged in the same stacked "browser window" layout
// as before, with the orange glow circle kept behind them.
function HeroGraphic() {
  return (
    <div className="hero-graphic-wrap">
      <div className="hero-glow" />

      <div className="mock-window mock-window-back">
        <div className="mock-window-bar mock-window-bar-purple">
          <span />
          <span />
        </div>
        <img src={pageIcon2} alt="Project preview 2" />
      </div>

      <div className="mock-window mock-window-front">
        <div className="mock-window-bar mock-window-bar-orange">
          <span />
          <span />
        </div>
        <img src={pageIcon1} alt="Project preview 1" />
      </div>

      <div className="code-chip">&lt;/&gt;</div>
    </div>
  )
}