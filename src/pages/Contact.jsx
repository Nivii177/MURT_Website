// src/pages/Contact.jsx
import { Helmet } from "react-helmet-async";
import Section from "../Components/Section.jsx";
import { CONTACT_EMAIL } from "../data/constants.js";

export default function Contact() {
  return (
    <main className="app">
      <Helmet>
        <title>MAC UNDERWATER ROBOTICS TEAM</title>
        <meta name="description" content="Get in touch with MURT. Reach out about sponsorships, joining the team, or general inquiries. Based at McMaster University, Hamilton, ON." />
        <link rel="canonical" href="https://www.macmurt.com/contact" />
      </Helmet>
      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="section-inner">
          <h1 className="section-title" style={{ marginBottom: "1.2rem" }}>
            Get in Touch
          </h1>
          <p className="section-body" style={{ fontSize: "1.05rem", lineHeight: "1.7" }}>
            Have questions about the team, want to sponsor us, or interested in joining? We'd love to hear from you!
          </p>
        </div>
      </section>

      <Section id="contact-info" title="Contact Information">
        <ul className="contact-list">
          <li>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: "var(--accent)" }}>
              {CONTACT_EMAIL}
            </a>
          </li>
          <li><strong>Location:</strong> McMaster University, Hamilton, ON</li>
        </ul>
      </Section>

      <Section id="socials" title="Follow Us">
        <p>Stay connected with us on social media:</p>
        <ul className="contact-list">
          <li>
            <strong>Instagram:</strong>{" "}
            <a href="https://www.instagram.com/macmurt/" target="_blank" rel="noreferrer" style={{ color: "var(--accent)" }}>
              @macmurt
            </a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{" "}
            <a href="https://www.linkedin.com/company/mcmaster-underwater-robotics-team" target="_blank" rel="noreferrer" style={{ color: "var(--accent)" }}>
              McMaster Underwater Robotics Team
            </a>
          </li>
        </ul>
      </Section>
    </main>
  );
}
