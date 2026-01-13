// src/pages/Join.jsx
import { useState } from "react";
import Section from "../Components/Section.jsx";
import { WHAT_YOU_LEARN, FAQ_ITEMS, JOIN_URL } from "../data/constants.js";

export default function Join() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="app">
      <section className="section" style={{ paddingTop: "calc(var(--navbar-height) + 2rem)" }}>
        <div className="section-inner">
          <h1 className="section-title" style={{ fontSize: "2rem", marginBottom: "1.2rem" }}>
            Join the Team
          </h1>
          <p className="section-body" style={{ fontSize: "1.05rem", lineHeight: "1.7" }}>
            We're always looking for passionate students who want to build real robots and solve challenging engineering problems. No prior experience required—we'll teach you everything you need to know.
          </p>
          <div className="cta-row" style={{ marginTop: "1.5rem" }}>
            <a href={JOIN_URL} className="btn btn-primary">
              Apply / Join Discord
            </a>
          </div>
        </div>
      </section>

      <Section id="who-we-need" title="Who We're Looking For">
        <p>We welcome students from all backgrounds and years. Here's what we're looking for:</p>
        <ul className="bullet-list">
          <li><strong>Software Engineers:</strong> Interest in ROS2, Python, C++, control systems, computer vision, or UI development</li>
          <li><strong>Mechanical Engineers:</strong> CAD design, fabrication, material selection, or hands-on building experience</li>
          <li><strong>Electrical Engineers:</strong> Circuit design, embedded systems, power systems, or sensor integration</li>
          <li><strong>Business & Marketing:</strong> Sponsorship outreach, social media, documentation, event planning, or project management</li>
          <li><strong>Anyone Curious:</strong> If you're excited about robotics and willing to learn, we want you!</li>
        </ul>
      </Section>

      <Section id="what-you-learn" title="What You'll Learn">
        <p>As a team member, you'll gain hands-on experience in:</p>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
          gap: "1.2rem", 
          marginTop: "1.2rem" 
        }}>
          {WHAT_YOU_LEARN.map((item, index) => (
            <div
              key={index}
              style={{
                padding: "1.4rem",
                borderRadius: "var(--radius-lg)",
                border: "1px solid rgba(148, 163, 184, 0.24)",
                background: "radial-gradient(circle at top left, rgba(30, 64, 175, 0.2), transparent 50%), rgba(15, 23, 42, 0.6)"
              }}
            >
              <h3 style={{ 
                fontSize: "1.1rem", 
                fontWeight: "600", 
                margin: "0 0 0.6rem",
                color: "var(--text-main)"
              }}>
                {item.title}
              </h3>
              <p style={{ 
                fontSize: "0.9rem", 
                lineHeight: "1.6", 
                margin: "0",
                color: "var(--text-muted)"
              }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="commitment" title="Time Commitment & Onboarding">
        <p><strong>Time Commitment:</strong></p>
        <ul className="bullet-list">
          <li>5-10 hours per week during the build season (fall/winter)</li>
          <li>Flexibility around exam periods—we understand academic priorities</li>
          <li>Weekly subteam meetings plus optional work sessions</li>
          <li>Increased activity leading up to competition (spring)</li>
        </ul>
        <p style={{ marginTop: "1.2rem" }}><strong>Onboarding Process:</strong></p>
        <ol style={{ 
          margin: "0.2rem 0 0", 
          paddingLeft: "1.5rem",
          color: "var(--text-main)"
        }}>
          <li style={{ marginBottom: "0.4rem" }}>Fill out our interest form or join our Discord</li>
          <li style={{ marginBottom: "0.4rem" }}>Attend a general meeting to learn about the team</li>
          <li style={{ marginBottom: "0.4rem" }}>Choose a subteam based on your interests</li>
          <li style={{ marginBottom: "0.4rem" }}>Complete onboarding tasks (GitHub setup, ROS2 basics, etc.)</li>
          <li style={{ marginBottom: "0.4rem" }}>Start contributing to projects with mentorship from experienced members</li>
        </ol>
      </Section>

      <Section id="faq" title="Frequently Asked Questions">
        {FAQ_ITEMS.map((item, index) => (
          <div
            key={index}
            style={{
              marginTop: index > 0 ? "1.2rem" : "0",
              padding: "1.2rem",
              borderRadius: "var(--radius-lg)",
              border: "1px solid rgba(148, 163, 184, 0.24)",
              background: "rgba(15, 23, 42, 0.4)",
              cursor: "pointer"
            }}
            onClick={() => setOpenFaq(openFaq === index ? null : index)}
          >
            <div style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "flex-start",
              gap: "1rem"
            }}>
              <h3 style={{ 
                fontSize: "1rem", 
                fontWeight: "600", 
                margin: "0",
                color: "var(--text-main)",
                flex: "1"
              }}>
                {item.question}
              </h3>
              <span style={{ 
                color: "var(--text-muted)",
                fontSize: "1.2rem",
                userSelect: "none"
              }}>
                {openFaq === index ? "−" : "+"}
              </span>
            </div>
            {openFaq === index && (
              <p style={{ 
                fontSize: "0.9rem", 
                lineHeight: "1.6", 
                margin: "0.8rem 0 0",
                color: "var(--text-muted)"
              }}>
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </Section>

      <Section id="apply" title="Ready to Join?">
        <p>
          If you're excited about building underwater robots and want to be part of our team, we'd love to hear from you!
        </p>
        <div className="cta-row">
          <a href={JOIN_URL} className="btn btn-primary">
            Apply / Join Discord
          </a>
          <a href="/contact" className="btn btn-outline">
            Contact Us
          </a>
        </div>
      </Section>
    </main>
  );
}
