// src/pages/Contact.jsx
import { useState } from "react";
import Section from "../Components/Section.jsx";
import { CONTACT_EMAIL } from "../data/constants.js";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const inputStyle = {
    width: "100%",
    padding: "0.7rem 1rem",
    borderRadius: "0.5rem",
    border: "1px solid rgba(148, 163, 184, 0.2)",
    background: "transparent",
    color: "var(--text-main)",
    fontSize: "0.9rem",
    fontFamily: "inherit",
    outline: "none",
  };

  const labelStyle = {
    display: "block",
    fontSize: "0.9rem",
    fontWeight: "500",
    marginBottom: "0.4rem",
    color: "var(--text-main)",
  };

  return (
    <main className="app">
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

      <Section id="contact-form" title="Send Us a Message">
        <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
          <div style={{ marginBottom: "1.2rem" }}>
            <label htmlFor="name" style={labelStyle}>Name *</label>
            <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} style={inputStyle} />
          </div>
          <div style={{ marginBottom: "1.2rem" }}>
            <label htmlFor="email" style={labelStyle}>Email *</label>
            <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} style={inputStyle} />
          </div>
          <div style={{ marginBottom: "1.2rem" }}>
            <label htmlFor="subject" style={labelStyle}>Subject *</label>
            <input type="text" id="subject" name="subject" required value={formData.subject} onChange={handleChange} style={inputStyle} />
          </div>
          <div style={{ marginBottom: "1.2rem" }}>
            <label htmlFor="message" style={labelStyle}>Message *</label>
            <textarea id="message" name="message" required rows="6" value={formData.message} onChange={handleChange} style={{ ...inputStyle, resize: "vertical" }} />
          </div>

          {submitted && (
            <div style={{ padding: "0.8rem", marginBottom: "1rem", borderRadius: "0.5rem", background: "rgba(250, 204, 21, 0.1)", border: "1px solid rgba(250, 204, 21, 0.3)", color: "var(--text-main)", fontSize: "0.9rem" }}>
              Message sent! We'll get back to you soon.
            </div>
          )}

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </Section>

      <Section id="contact-info" title="Contact Information">
        <ul className="contact-list">
          <li>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: "var(--accent)" }}>
              {CONTACT_EMAIL}
            </a>
          </li>
          <li><strong>Location:</strong> McMaster University, Hamilton, ON</li>
          <li><strong>Engineering Building:</strong> We're based in the Faculty of Engineering</li>
        </ul>
      </Section>

      <Section id="socials" title="Follow Us">
        <p>Stay connected with us on social media:</p>
        <ul className="contact-list">
          <li>
            <strong>Instagram:</strong>{" "}
            <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ color: "var(--accent)" }}>
              @rov.club
            </a>
          </li>
          <li>
            <strong>GitHub:</strong>{" "}
            <a href="https://github.com" target="_blank" rel="noreferrer" style={{ color: "var(--accent)" }}>
              @murt
            </a>
          </li>
        </ul>
      </Section>
    </main>
  );
}
