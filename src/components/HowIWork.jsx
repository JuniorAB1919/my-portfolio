import { process } from '../data/portfolioData'

export default function HowIWork() {
  return (
    <section className="section" id="process">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">Engineering approach</span>
            <h2 className="section-title">Five steps, every project.</h2>
          </div>
          <p className="section-note">
            Understand, design, build, test, improve — repeated until the system holds up in the real world.
          </p>
        </div>

        <div className="process-list">
          {process.map((item) => (
            <div className="process-item" key={item.step}>
              <div className="process-num">{item.step}</div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
