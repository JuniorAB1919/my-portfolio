import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(new Date())
  const [active, setActive] = useState('DASHBOARD')

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const menuItems = [
    'DASHBOARD',
    'NETWORK',
    'SYSTEM',
    'DATABASE',
    'TERMINAL',
  ]

  return (
    <div className="app">

      {/* Animated background */}
      <div className="grid"></div>
      <div className="scanline"></div>
      <div className="noise"></div>

      {/* Sidebar */}
      <aside className="sidebar">

        <div className="brand">
          <div className="brand-symbol">
            K
          </div>

          <div>
            <h1>KALCULUS</h1>
            <span>CYBER SYSTEM</span>
          </div>
        </div>

        <div className="profile">
          <div className="avatar">
            <span>K</span>
          </div>

          <div>
            <strong>KALCULUS</strong>
            <small>ROOT ACCESS</small>
          </div>

          <div className="online"></div>
        </div>

        <nav>
          <p className="nav-title">MAIN SYSTEM</p>

          {menuItems.map((item) => (
            <button
              key={item}
              className={`nav-button ${
                active === item ? 'active' : ''
              }`}
              onClick={() => setActive(item)}
            >
              <span className="nav-icon">
                {item === 'DASHBOARD' && '⌂'}
                {item === 'NETWORK' && '◈'}
                {item === 'SYSTEM' && '◉'}
                {item === 'DATABASE' && '▣'}
                {item === 'TERMINAL' && '>_'}
              </span>

              {item}

              {active === item && (
                <span className="active-line"></span>
              )}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="security-status">
            <span className="pulse"></span>
            <div>
              <small>SECURITY</small>
              <strong>ENCRYPTED</strong>
            </div>
          </div>

          <div className="version">
            KALCULUS OS v1.0.26
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="main">

        {/* Top bar */}
        <header className="topbar">
          <div>
            <div className="breadcrumb">
              SYSTEM / {active}
            </div>

            <h2>
              {active === 'DASHBOARD'
                ? 'WELCOME BACK, KALCULUS'
                : active}
            </h2>
          </div>

          <div className="clock">
            <span className="clock-dot"></span>
            {time.toLocaleTimeString()}
          </div>
        </header>

        {/* Hero */}
        <section className="hero">

          <div className="hero-content">
            <div className="terminal-tag">
              <span>●</span> SYSTEM ONLINE
            </div>

            <h1>
              KALCULUS
              <span> // CYBER COMMAND</span>
            </h1>

            <p>
              Welcome to the private command interface.
              Monitor systems, analyze networks and control
              your digital environment.
            </p>

            <div className="hero-buttons">
              <button className="primary-button">
                <span>INITIALIZE SYSTEM</span>
                <b>→</b>
              </button>

              <button className="secondary-button">
                VIEW LOGS
              </button>
            </div>
          </div>

          <div className="orb">
            <div className="orb-ring ring-one"></div>
            <div className="orb-ring ring-two"></div>
            <div className="orb-ring ring-three"></div>

            <div className="orb-core">
              K
            </div>
          </div>

        </section>

        {/* Stats */}
        <section className="stats">

          <div className="stat-card">
            <div className="stat-header">
              <span>SYSTEM STATUS</span>
              <i>◉</i>
            </div>

            <strong>ONLINE</strong>

            <div className="progress">
              <span style={{ width: '94%' }}></span>
            </div>

            <small>94% operational capacity</small>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <span>NETWORK</span>
              <i>◈</i>
            </div>

            <strong>SECURE</strong>

            <div className="progress">
              <span style={{ width: '87%' }}></span>
            </div>

            <small>Encrypted connection</small>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <span>DATABASE</span>
              <i>▣</i>
            </div>

            <strong>ACTIVE</strong>

            <div className="progress">
              <span style={{ width: '76%' }}></span>
            </div>

            <small>Database synchronization</small>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <span>FIREWALL</span>
              <i>◆</i>
            </div>

            <strong>PROTECTED</strong>

            <div className="progress">
              <span style={{ width: '99%' }}></span>
            </div>

            <small>Threat protection enabled</small>
          </div>

        </section>

        {/* Dashboard grid */}
        <section className="dashboard-grid">

          {/* Terminal */}
          <div className="panel terminal">

            <div className="panel-header">
              <div>
                <span className="mini-dot"></span>
                TERMINAL
              </div>

              <span>LIVE</span>
            </div>

            <div className="terminal-body">

              <p>
                <span className="green">kalculus@system</span>
                :~$ initialize
              </p>

              <p className="dim">
                Loading KALCULUS core...
              </p>

              <p className="dim">
                Checking system integrity...
              </p>

              <p className="success">
                [OK] SYSTEM INTEGRITY VERIFIED
              </p>

              <p className="success">
                [OK] NETWORK ENCRYPTION ACTIVE
              </p>

              <p className="success">
                [OK] FIREWALL PROTECTION ACTIVE
              </p>

              <p>
                <span className="green">kalculus@system</span>
                :~$ <span className="cursor">_</span>
              </p>

            </div>

          </div>

          {/* Activity */}
          <div className="panel activity">

            <div className="panel-header">
              <div>
                <span className="mini-dot"></span>
                SYSTEM ACTIVITY
              </div>

              <span>REAL TIME</span>
            </div>

            <div className="activity-list">

              <div>
                <span className="activity-icon">✓</span>
                <p>
                  System initialized
                  <small>Just now</small>
                </p>
              </div>

              <div>
                <span className="activity-icon">↗</span>
                <p>
                  Secure connection established
                  <small>2 min ago</small>
                </p>
              </div>

              <div>
                <span className="activity-icon">◆</span>
                <p>
                  Firewall scan completed
                  <small>5 min ago</small>
                </p>
              </div>

              <div>
                <span className="activity-icon">◈</span>
                <p>
                  Database synchronized
                  <small>8 min ago</small>
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* Bottom */}
        <footer>
          <span>
            KALCULUS // PRIVATE CYBER INTERFACE
          </span>

          <span>
            SYSTEM STATUS: <b>STABLE</b>
          </span>
        </footer>

      </main>
    </div>
  )
}

export default App