// src/pages/Contact.jsx
import { Helmet } from "react-helmet-async";
import Section from "../Components/Section.jsx";
import { CONTACT_EMAIL } from "../data/constants.js";

export default function Contact() {
  return (
    <main className="app">
      <Helmet>
        <title>MAC UNDERWATER ROBOTICS</title>
        <meta name="description" content="Get in touch with MURT. Reach out about sponsorships, joining the team, or general inquiries. Based at McMaster University, Hamilton, ON." />
        <link rel="canonical" href="https://www.macmurt.com/contact" />
      </Helmet>

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
