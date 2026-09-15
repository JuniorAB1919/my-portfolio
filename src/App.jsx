import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(new Date())
  const [active, setActive] = useState('DASHBOARD')
  const [typedText, setTypedText] = useState('')

  const fullText =
    'I build secure, scalable and intelligent software systems.'

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Typing animation
  useEffect(() => {
    let index = 0

    const typing = setInterval(() => {
      setTypedText(fullText.slice(0, index))
      index++

      if (index > fullText.length) {
        clearInterval(typing)
      }
    }, 45)

    return () => clearInterval(typing)
  }, [])

  const menuItems = [
    'DASHBOARD',
    'PROJECTS',
    'STACK',
    'ABOUT',
    'TERMINAL',
  ]

  const projects = [
    {
      name: 'SmartSlot',
      type: 'Java Desktop Application',
      description:
        'A smart timetable conflict resolution system designed for academic scheduling.',
      tech: ['Java', 'JavaFX', 'MongoDB', 'Maven'],
      status: 'ACTIVE',
    },
    {
      name: 'WealthCorePro',
      type: 'Full-Stack Finance Platform',
      description:
        'Personal finance and investment platform with authentication, analytics and portfolio management.',
      tech: ['React', 'Node.js', 'MongoDB', 'JWT'],
      status: 'DEVELOPING',
    },
    {
      name: 'Personal Finance Tracker',
      type: 'Backend API',
      description:
        'Secure financial management API with authentication, transactions and structured REST endpoints.',
      tech: ['Java', 'Spring Boot', 'JPA', 'JWT'],
      status: 'COMPLETED',
    },
  ]

  const skills = [
    ['Java / Spring Boot', 88],
    ['Python / Flask', 82],
    ['JavaScript / React', 80],
    ['Node.js / REST APIs', 84],
    ['MongoDB / SQL', 78],
    ['Git / GitHub', 86],
  ]

  const navigate = (item) => {
    setActive(item)

    setTimeout(() => {
      document
        .getElementById(item.toLowerCase())
        ?.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  return (
    <div className="app">

      {/* Background effects */}
      <div className="grid"></div>
      <div className="scanline"></div>
      <div className="noise"></div>

      {/* Floating particles */}
      <div className="particles">
        {[...Array(25)].map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div className="brand">

          <div className="brand-symbol">
            K
          </div>

          <div>
            <h1>KALCULUS</h1>
            <span>SOFTWARE ENGINEER</span>
          </div>

        </div>

        {/* Profile */}
        <div className="profile">

          <div className="avatar">
            <span>K</span>
          </div>

          <div className="profile-info">
            <strong>KALCULUS JNR</strong>
            <small>DEVELOPER ACCESS</small>
          </div>

          <div className="online"></div>

        </div>

        {/* Navigation */}
        <nav>

          <p className="nav-title">
            PORTFOLIO
          </p>

          {menuItems.map((item) => (

            <button
              key={item}
              className={`nav-button ${
                active === item ? 'active' : ''
              }`}
              onClick={() => navigate(item)}
            >

              <span className="nav-icon">

                {item === 'DASHBOARD' && '⌂'}
                {item === 'PROJECTS' && '◈'}
                {item === 'STACK' && '◇'}
                {item === 'ABOUT' && '◎'}
                {item === 'TERMINAL' && '>_'}

              </span>

              {item}

              {active === item && (
                <span className="active-line"></span>
              )}

            </button>

          ))}

        </nav>

        {/* Bottom */}
        <div className="sidebar-bottom">

          <div className="security-status">

            <span className="pulse"></span>

            <div>
              <small>AVAILABILITY</small>
              <strong>OPEN TO WORK</strong>
            </div>

          </div>

          <div className="version">
            KALCULUS.DEV // v2.0
          </div>

        </div>

      </aside>


      {/* MAIN */}
      <main className="main">

        {/* TOP BAR */}
        <header className="topbar">

          <div>

            <div className="breadcrumb">
              PORTFOLIO / {active}
            </div>

            <h2>
              {active === 'DASHBOARD'
                ? 'WELCOME TO MY DIGITAL SPACE'
                : active}
            </h2>

          </div>

          <div className="clock">

            <span className="clock-dot"></span>

            {time.toLocaleTimeString()}

          </div>

        </header>


        {/* HERO */}
        <section
          className="hero"
          id="dashboard"
        >

          <div className="hero-content">

            <div className="terminal-tag">

              <span>●</span>

              SOFTWARE ENGINEER // ONLINE

            </div>

            <h1>

              ANDREWS
              <span> OSEI BONSU</span>

            </h1>

            <div className="role">

              <span>&gt;</span>

              SOFTWARE ENGINEER
              <span className="cursor">_</span>

            </div>

            <p className="hero-description">

              {typedText}

            </p>

            <p className="hero-subtext">

              Backend Development • Full-Stack Engineering •
              AI • Data Security

            </p>

            <div className="hero-buttons">

              <button
                className="primary-button"
                onClick={() => navigate('PROJECTS')}
              >

                <span>EXPLORE MY WORK</span>

                <b>→</b>

              </button>

              <a
                className="secondary-button"
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                GITHUB
              </a>

            </div>

          </div>


          {/* ORBIT */}
          <div className="orb">

            <div className="orb-ring ring-one"></div>

            <div className="orb-ring ring-two"></div>

            <div className="orb-ring ring-three"></div>

            <div className="orb-core">

              <span>K</span>

              <small>DEV</small>

            </div>

          </div>

        </section>


        {/* STATS */}
        <section className="stats">

          <div className="stat-card">

            <div className="stat-header">
              <span>PROJECTS</span>
              <i>◈</i>
            </div>

            <strong>03+</strong>

            <div className="progress">
              <span style={{ width: '82%' }}></span>
            </div>

            <small>Real-world applications</small>

          </div>


          <div className="stat-card">

            <div className="stat-header">
              <span>BACKEND</span>
              <i>⌘</i>
            </div>

            <strong>84%</strong>

            <div className="progress">
              <span style={{ width: '84%' }}></span>
            </div>

            <small>APIs & server architecture</small>

          </div>


          <div className="stat-card">

            <div className="stat-header">
              <span>FULL STACK</span>
              <i>◇</i>
            </div>

            <strong>80%</strong>

            <div className="progress">
              <span style={{ width: '80%' }}></span>
            </div>

            <small>Frontend + backend</small>

          </div>


          <div className="stat-card">

            <div className="stat-header">
              <span>SECURITY</span>
              <i>◆</i>
            </div>

            <strong>ACTIVE</strong>

            <div className="progress">
              <span style={{ width: '91%' }}></span>
            </div>

            <small>Secure development mindset</small>

          </div>

        </section>


        {/* PROJECTS */}
        <section
          className="section"
          id="projects"
        >

          <div className="section-heading">

            <div>
              <span className="section-label">
                01 // SELECTED WORK
              </span>

              <h2>
                PROJECT <span>DATABASE</span>
              </h2>
            </div>

            <span className="section-status">
              LIVE PROJECTS
            </span>

          </div>


          <div className="projects-grid">

            {projects.map((project, index) => (

              <article
                className="project-card"
                key={project.name}
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >

                <div className="project-number">
                  0{index + 1}
                </div>

                <div className="project-top">

                  <span className="project-type">
                    {project.type}
                  </span>

                  <span className="project-status">
                    ● {project.status}
                  </span>

                </div>

                <h3>
                  {project.name}
                </h3>

                <p>
                  {project.description}
                </p>

                <div className="tech-list">

                  {project.tech.map((tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}

                </div>

                <button className="project-link">
                  VIEW PROJECT →
                </button>

              </article>

            ))}

          </div>

        </section>


        {/* STACK */}
        <section
          className="section"
          id="stack"
        >

          <div className="section-heading">

            <div>

              <span className="section-label">
                02 // TECHNOLOGY
              </span>

              <h2>
                ENGINEERING <span>STACK</span>
              </h2>

            </div>

          </div>


          <div className="stack-layout">

            <div className="skills-panel">

              {skills.map(([skill, percentage]) => (

                <div
                  className="skill"
                  key={skill}
                >

                  <div className="skill-info">

                    <span>{skill}</span>

                    <strong>
                      {percentage}%
                    </strong>

                  </div>

                  <div className="skill-bar">

                    <span
                      style={{
                        width: `${percentage}%`,
                      }}
                    ></span>

                  </div>

                </div>

              ))}

            </div>


            <div className="tech-cloud">

              <div className="tech-icon java">
                JAVA
              </div>

              <div className="tech-icon react">
                REACT
              </div>

              <div className="tech-icon python">
                PYTHON
              </div>

              <div className="tech-icon node">
                NODE
              </div>

              <div className="tech-icon mongo">
                MONGO
              </div>

              <div className="tech-icon spring">
                SPRING
              </div>

            </div>

          </div>

        </section>


        {/* ABOUT */}
        <section
          className="section about-section"
          id="about"
        >

          <div className="section-heading">

            <div>

              <span className="section-label">
                03 // IDENTITY
              </span>

              <h2>
                ABOUT <span>ME</span>
              </h2>

            </div>

          </div>


          <div className="about-grid">

            <div className="about-card">

              <div className="about-icon">
                &lt;/&gt;
              </div>

              <h3>
                SOFTWARE ENGINEER
              </h3>

              <p>
                I enjoy transforming ideas into functional
                software systems. My focus is on writing clean,
                maintainable and scalable code.
              </p>

            </div>


            <div className="about-card">

              <div className="about-icon">
                API
              </div>

              <h3>
                BACKEND ENGINEERING
              </h3>

              <p>
                I work with REST APIs, authentication,
                databases and server-side architecture to
                build reliable applications.
              </p>

            </div>


            <div className="about-card">

              <div className="about-icon">
                AI
              </div>

              <h3>
                AI & DATA
              </h3>

              <p>
                I'm exploring the intersection between
                software engineering, artificial intelligence
                and data-driven systems.
              </p>

            </div>


            <div className="about-card">

              <div className="about-icon">
                🔐
              </div>

              <h3>
                SECURITY
              </h3>

              <p>
                Security is part of my engineering mindset,
                from authentication and authorization to
                protecting application data.
              </p>

            </div>

          </div>

        </section>


        {/* TERMINAL */}
        <section
          className="section"
          id="terminal"
        >

          <div className="terminal-window">

            <div className="terminal-header">

              <div className="terminal-controls">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span>
                kalculus@portfolio:~
              </span>

              <span>
                bash
              </span>

            </div>


            <div className="terminal-content">

              <p>
                <span className="green">
                  kalculus@portfolio
                </span>
                :~$ whoami
              </p>

              <p className="terminal-output">
                Andrews Osei Bonsu
              </p>

              <p>
                <span className="green">
                  kalculus@portfolio
                </span>
                :~$ role
              </p>

              <p className="terminal-output">
                Software Engineer / Backend Developer
              </p>

              <p>
                <span className="green">
                  kalculus@portfolio
                </span>
                :~$ mission
              </p>

              <p className="terminal-output">
                Build useful software. Learn continuously.
                Solve real problems.
              </p>

              <p>
                <span className="green">
                  kalculus@portfolio
                </span>
                :~$ status
              </p>

              <p className="success">
                [OK] SYSTEM ONLINE
              </p>

              <p className="success">
                [OK] DEVELOPER MODE ACTIVE
              </p>

              <p className="success">
                [OK] READY TO BUILD
              </p>

              <p>
                <span className="green">
                  kalculus@portfolio
                </span>
                :~$ <span className="cursor">_</span>
              </p>

            </div>

          </div>

        </section>


        {/* CONTACT */}
        <section className="contact">

          <span className="section-label">
            04 // CONNECTION
          </span>

          <h2>
            LET'S BUILD
            <span> SOMETHING GREAT.</span>
          </h2>

          <p>
            Have a project, idea or opportunity?
            Let's connect and build something meaningful.
          </p>

          <div className="contact-buttons">

            <a
              href="mailto:your-email@example.com"
              className="primary-button"
            >
              CONTACT ME →
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              GITHUB
            </a>

          </div>

        </section>


        {/* FOOTER */}
        <footer>

          <span>
            KALCULUS.DEV // SOFTWARE ENGINEER
          </span>

          <span>
            SYSTEM STATUS:
            <b> ONLINE</b>
          </span>

        </footer>

      </main>

    </div>
  )
}

export default App