// src/pages/Team.jsx
import { Helmet } from "react-helmet-async";
import Section from "../Components/Section.jsx";
import { TEAM_LEADS } from "../data/constants.js";

const SUBTEAMS = [
  { name: "Software", icon: "⌨" },
  { name: "Electrical", icon: "⚡" },
  { name: "Mechanical", icon: "⚙" },
  { name: "Marketing", icon: "📣" },
  { name: "Operations", icon: "📋" },
];

export default function Team() {
  return (
    <main className="app">
      <Helmet>
        <title>Our Team | McMaster Underwater Robotics Team</title>
        <meta name="description" content="Meet the student engineers behind MURT — our directors and subteams spanning software, electrical, mechanical, marketing, and operations." />
        <link rel="canonical" href="https://www.macmurt.com/team" />
      </Helmet>
      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="section-inner">
          <h1 className="section-title" style={{ marginBottom: "1.2rem" }}>
            Our Team
          </h1>
          <p className="section-body" style={{ fontSize: "1.05rem", lineHeight: "1.7" }}>
            We are a multidisciplinary team of engineering students working together to design, build, and compete with underwater robots. Our team combines expertise in software, electrical, mechanical, and systems engineering to create a complete ROV system from scratch.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "2rem" }}>
            {SUBTEAMS.map(({ name, icon }) => (
              <div key={name} style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.6rem 1.2rem", borderRadius: "999px", border: "1px solid rgba(250, 204, 21, 0.3)", color: "var(--text-main)", fontSize: "1rem" }}>
                <span>{icon}</span>
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section id="leads" title="Team Leadership">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 220px))", gap: "2.5rem", marginTop: "1.5rem", justifyContent: "center" }}>
          {TEAM_LEADS.map((lead, index) => (
            <div key={index} style={{ textAlign: "center" }}>
              {lead.photo ? (
                <img
                  src={lead.photo}
                  alt={lead.name}
                  style={{ width: "150px", height: "150px", borderRadius: "50%", objectFit: "cover", margin: "0 auto 1.2rem", display: "block" }}
                />
              ) : (
                <div style={{ width: "150px", height: "150px", borderRadius: "50%", background: "rgba(148, 163, 184, 0.15)", margin: "0 auto 1.2rem", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", fontSize: "1rem" }}>
                  Photo
                </div>
              )}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", margin: "0 0 0.5rem" }}>
                <h4 style={{ fontSize: "1.3rem", fontWeight: "600", margin: "0", color: "var(--text-main)" }}>
                  {lead.name}
                </h4>
                {lead.linkedin && (
                  <a href={lead.linkedin} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", color: "var(--text-muted)", transition: "color 150ms ease" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#0a66c2"}
                    onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                )}
              </div>
              <p style={{ fontSize: "1rem", margin: "0", color: "var(--text-muted)" }}>
                {lead.role}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
