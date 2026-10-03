import { FiCpu, FiMonitor, FiServer, FiDatabase, FiTool } from 'react-icons/fi'
import { skillGroups } from '../data/portfolioData'

const GROUP_ICON = {
  'Software Engineering': FiCpu,
  Frontend: FiMonitor,
  Backend: FiServer,
  Databases: FiDatabase,
  Tools: FiTool,
}

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <span className="eyebrow">Skills &amp; technologies</span>
        <h2 className="section-title" style={{ marginBottom: 44 }}>What I build with.</h2>

        <div className="skills-grid">
          {skillGroups.map((group) => {
            const Icon = GROUP_ICON[group.label] || FiTool
            return (
              <div className="skill-group" key={group.label}>
                <div className="skill-group-head">
                  <Icon size={17} />
                  {group.label}
                </div>
                <p>{group.items.join(' · ')}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
