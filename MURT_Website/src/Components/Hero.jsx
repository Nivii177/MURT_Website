import bgVideo from "../assets/rov-hero.mov"; 
import mcmasterlogo from "../assets/mcenglogo.jpg";
export default function Hero() {
  return (
    <section className="hero-full" id="top">
      {/* Background video */}
      <video
        className="hero-video"
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark overlay so text is readable */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-full-inner">
        <div className="hero-full-text">
          <h1 className="hero-title hero-title-large">
            McMaster <br></br>
            Underwater Robotics
          </h1>

          <p className="hero-subtitle-large">
            Beneath the surface, Lies Innovation.
          </p>

          <div className="hero-actions">
            <a href="https://materovcompetition.org/" target = "_blank" className="btn btn-primary">
              Competion Details
            </a>
            <a href="#about" className="btn btn-secondary">
              About Us
            </a>
          </div>

          <div className="hero-powered">
            <p className="powered-label">Powered By</p>
            <div className="sponsor-row">
              <div className="sponsor-card">
               <a href="https://www.eng.mcmaster.ca/" target ="_blank"> 
                 <img src={mcmasterlogo} alt="McMaster" />
               </a>
              </div>
              {/* <div className="sponsor-pill">Sponsor 1</div>
              <div className="sponsor-pill">Sponsor 2</div>
              <div className="sponsor-pill">Sponsor 3</div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
