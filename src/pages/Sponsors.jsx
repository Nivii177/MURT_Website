// src/pages/Sponsors.jsx
import { Link } from "react-router-dom";
import Section from "../Components/Section.jsx";
import { SPONSOR_TIERS } from "../data/constants.js";

export default function Sponsors() {
  return (
    <main className="app">
      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="section-inner">
          <h1 className="section-title" style={{ fontSize: "2rem", marginBottom: "1.2rem" }}>
            Support Our Mission
          </h1>
          <p className="section-body" style={{ fontSize: "1.05rem", lineHeight: "1.7" }}>
            Your sponsorship helps us build cutting-edge underwater robots and compete at the highest level. By supporting MURT, you're investing in the next generation of engineers and advancing STEM education at McMaster University.
          </p>
        </div>
      </section>

      <Section id="tiers" title="Sponsorship Tiers">
        <p>Choose a sponsorship tier that fits your organization:</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.2rem", marginTop: "1.2rem" }}>
          {SPONSOR_TIERS.map((tier, index) => (
            <div key={index}>
              <h3 style={{ fontSize: "1.3rem", fontWeight: "600", margin: "0 0 1rem", color: "var(--accent)" }}>
                {tier.name}
              </h3>
              <ul className="bullet-list" style={{ marginTop: "0.8rem" }}>
                {tier.benefits.map((benefit, idx) => (
                  <li key={idx} style={{ fontSize: "0.9rem" }}>{benefit}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="why-sponsor" title="Why Sponsor Us?">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem", marginTop: "1.2rem" }}>
          {[
            { title: "Hiring Pipeline", desc: "Connect directly with talented engineering students who have hands-on experience in robotics, software, and systems engineering." },
            { title: "Brand Visibility", desc: "Your logo will be featured on our ROV, website, competition materials, and social media, reaching thousands of students and industry professionals." },
            { title: "STEM Impact", desc: "Support hands-on engineering education and inspire the next generation of innovators in robotics and marine technology." },
            { title: "Demonstrations", desc: "Invitations to team demos, competition events, and opportunities to see our ROV in action at McMaster and beyond." },
          ].map(({ title, desc }) => (
            <div key={title}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: "600", margin: "0 0 0.6rem", color: "var(--text-main)" }}>{title}</h3>
              <p style={{ fontSize: "0.9rem", lineHeight: "1.6", margin: "0", color: "var(--text-muted)" }}>{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="sponsors" title="Our Sponsors">
        <p>We're grateful to our sponsors for their support:</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "1.2rem", marginTop: "1.2rem" }}>
          {[1, 2, 3, 4].map((item) => (
            <div key={item} style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "120px", color: "var(--text-muted)", fontSize: "0.85rem", textAlign: "center", borderBottom: "1px solid rgba(148,163,184,0.1)" }}>
              Your logo here
            </div>
          ))}
        </div>
      </Section>

      <Section id="cta" title="Become a Sponsor">
        <p>
          Interested in sponsoring MURT? We'd love to discuss how we can work together. Download our sponsorship package or reach out directly.
        </p>
        <div className="cta-row">
          <Link to="/contact" className="btn btn-primary">
            Become a Sponsor
          </Link>
          <a href="#" className="btn btn-outline" onClick={(e) => {
            e.preventDefault();
            alert("Sponsorship package download coming soon!");
          }}>
            Download Sponsorship Package
          </a>
        </div>
      </Section>
    </main>
  );
}
