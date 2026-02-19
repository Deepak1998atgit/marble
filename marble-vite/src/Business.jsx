import './Business.css'

export default function Business() {
  return (
    <div className="business-page">
      {/* ===== TOP NAV ===== */}
      <div className="top-nav">
        <div className="container-nav">
          <div className="nav-left">
            <span className="nav-item inactive">Personal</span>
            <span className="nav-item active">Business</span>
            <span className="nav-item inactive">Wholesale</span>
          </div>

          <div className="nav-right">
            <span className="nav-item inactive">About</span>
            <span className="nav-item inactive">Support</span>
            <button className="lang-btn">EN ▾</button>
          </div>
        </div>
      </div>

      {/* ===== MAIN NAV ===== */}
      <div className="main-nav">
        <div className="container-nav">
          <div className="logo-section">
            <div className="logo-icon"></div>
            <h1 className="logo-text">salam</h1>
          </div>

          <div className="menu-items">
            <span>Business Services ▾</span>
            <span>Connectivity Solutions ▾</span>
            <span>Cloud Services ▾</span>
            <span>Cyber Security Services ▾</span>
            <span>Industry ▾</span>
            <span className="coverage-link">Check your coverage</span>
          </div>
        </div>
      </div>

      {/* ===== HERO SECTION (FIXED LAYOUT) ===== */}
      <section className="hero-section">
        <div className="container-hero">
          <div className="hero-grid">

            {/* LEFT TEXT */}
            <div className="hero-content">
              <h1 className="hero-title">
                Ensure your business
                <br />
                continuity
              </h1>

              <p className="hero-subtitle">
                With Salam 5G Business Wireless Internet (BWI)
              </p>

              <button className="learn-btn">
                <span className="arrow">›</span>
                Learn more..
              </button>
            </div>

            {/* RIGHT IMAGE */}
            <div className="hero-image">
              <img src="/5g.png" alt="5G" />
            </div>

          </div>
        </div>

        {/* SIDE ARROWS */}
        <div className="nav-arrow left">‹</div>
        <div className="nav-arrow right">›</div>

        {/* DOT */}
        <div className="dot-indicator"></div>
      </section>
    </div>
  )
}
