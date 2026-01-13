// src/pages/Team.jsx
import Section from "../Components/Section.jsx";
import { SUBTEAMS, TEAM_LEADS } from "../data/constants.js";

export default function Team() {
  return (
    <main className="app">
      <section className="section" style={{ paddingTop: "calc(var(--navbar-height) + 2rem)" }}>
        <div className="section-inner">
          <h1 className="section-title" style={{ fontSize: "2rem", marginBottom: "1.2rem" }}>
            Our Team
          </h1>
          <p className="section-body" style={{ fontSize: "1.05rem", lineHeight: "1.7" }}>
            We are a multidisciplinary team of engineering students working together to design, build, and compete with underwater robots. Our team combines expertise in software, electrical, mechanical, and systems engineering to create a complete ROV system from scratch.
          </p>
        </div>
      </section>

      <Section id="subteams" title="Subteams">
        <p>Our team is organized into specialized subteams, each with clear responsibilities:</p>
        
        {SUBTEAMS.map((subteam, index) => (
          <div key={index} style={{ marginTop: index > 0 ? "2rem" : "1.2rem" }}>
            <h3 style={{ 
              fontSize: "1.3rem", 
              fontWeight: "600", 
              margin: "0 0 0.8rem",
              color: "var(--text-main)"
            }}>
              {subteam.name}
            </h3>
            <ul className="bullet-list">
              {subteam.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </Section>

      <Section id="leads" title="Team Leads">
        <p>Our subteam leads coordinate efforts and mentor team members:</p>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
          gap: "1.2rem", 
          marginTop: "1.2rem" 
        }}>
          {TEAM_LEADS.map((lead, index) => (
            <div
              key={index}
              style={{
                padding: "1.4rem",
                borderRadius: "var(--radius-lg)",
                border: "1px solid rgba(148, 163, 184, 0.24)",
                background: "radial-gradient(circle at top left, rgba(30, 64, 175, 0.2), transparent 50%), rgba(15, 23, 42, 0.6)",
                textAlign: "center"
              }}
            >
              {lead.photo ? (
                <img 
                  src={lead.photo} 
                  alt={lead.name}
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    margin: "0 auto 0.8rem",
                    display: "block"
                  }}
                />
              ) : (
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: "rgba(148, 163, 184, 0.2)",
                    margin: "0 auto 0.8rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-muted)",
                    fontSize: "0.8rem"
                  }}
                >
                  Photo
                </div>
              )}
              <h4 style={{ 
                fontSize: "1rem", 
                fontWeight: "600", 
                margin: "0 0 0.4rem",
                color: "var(--text-main)"
              }}>
                {lead.name}
              </h4>
              <p style={{ 
                fontSize: "0.85rem", 
                margin: "0",
                color: "var(--text-muted)"
              }}>
                {lead.role}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="how-we-work" title="How We Work">
        <p>We follow professional engineering practices to ensure quality and maintainability:</p>
        <ul className="bullet-list">
          <li><strong>GitHub:</strong> All code is version-controlled with clear commit messages and pull request reviews</li>
          <li><strong>Code Reviews:</strong> Every change is reviewed by at least one other team member before merging</li>
          <li><strong>Testing:</strong> We write tests for critical systems and validate hardware through systematic testing procedures</li>
          <li><strong>Documentation:</strong> Technical documentation is maintained alongside code, including setup guides, architecture decisions, and design rationale</li>
          <li><strong>Regular Meetings:</strong> Weekly subteam meetings and bi-weekly full team meetings keep everyone aligned</li>
          <li><strong>Knowledge Sharing:</strong> Team members present on their work and teach others through workshops and documentation</li>
        </ul>
      </Section>
    </main>
  );
}
