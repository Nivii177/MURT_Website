export default function Hero() {
  return (
    <section className="hero-full" id="top">
      {/* Background video */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/rov-hero.mov" type="video/mp4" />
        <source src="/rov-hero.mov" type="video/quicktime" />
      </video>

      {/* Dark overlay so text is readable */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-full-inner">
        <div className="hero-full-text">
          <h1 className="hero-title hero-title-large">
            McMaster <br></br>
            Underwater Robotics Team
          </h1>

          <p className="hero-subtitle-large">
            Beneath the surface, Lies Innovation.
          </p>

          <div className="hero-actions">
            <a href="https://materovcompetition.org/2026" target="_blank" className="btn btn-yellow">
              Competion Details
            </a>
            <a href="#about" className="btn btn-yellow">
              About Us
            </a>
          </div>

          <div className="hero-powered">
            <p className="powered-label">Powered By</p>
            <div className="sponsor-row">
              <div className="sponsor-card">
                <a href="https://www.eng.mcmaster.ca/" target="_blank" rel="noreferrer">
                  <img src="/mcenglogo.jpg" alt="McMaster" />
                </a>
              </div>
              <div className="sponsor-card">
                <a href="https://macengsociety.ca/" target="_blank" rel="noreferrer">
                  <img src="/mes.png" alt="McMaster Engineering Society" />
                </a>
              </div>
              <div className="sponsor-card">
                <a href="https://precision3dprint.ca/" target="_blank" rel="noreferrer">
                  <img src="/Precision_Logo.png" alt="Precision 3D Printing and Prototyping" />
                </a>
              </div>
              <div className="sponsor-card">
                <a href="https://www.altium.com/" target="_blank" rel="noreferrer">
                  <img src="/altium.png" alt="Altium" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
