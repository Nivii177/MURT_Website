// src/pages/Home.jsx
import { Link } from "react-router-dom";
import Hero from "../Components/Hero.jsx";
import Section from "../Components/Section.jsx";

export default function Home() {
  return (
    <main className="app">
      <Hero />

      <Section id="about" title="About the Club">
        <p>
          We are a student-led underwater robotics team that designs, builds, and
          programs Remotely Operated Vehicles (ROVs) to compete in the{" "}
          <strong>MATE ROV Competition</strong> and explore real-world marine
          engineering challenges.
        </p>
        <p>
          Our members get hands-on experience in mechanical design, electronics,
          software, and project management while working on a full ROV system from
          scratch.
        </p>
      </Section>

      <Section id="teams" title="Sub-Teams">
        <ul className="bullet-list">
          <li>
            <strong>Mechanical:</strong> Frame design, buoyancy, thruster layout,
            waterproofing, and manipulators.
          </li>
          <li>
            <strong>Electrical:</strong> Power distribution, motor controllers,
            tether, sensor integration, and safety systems.
          </li>
          <li>
            <strong>Software:</strong> Control system, pilot interface, autonomy,
            computer vision, and simulation tools.
          </li>
          <li>
            <strong>Business & Outreach:</strong> Sponsorship, marketing, branding,
            documentation, and event planning.
          </li>
        </ul>
      </Section>

      <Section id="projects" title="What We’re Building">
        <p>This season, our main focus is developing a new ROV platform with:</p>
        <ul className="bullet-list">
          <li>Modular frame and easily swappable tools</li>
          <li>Improved pilot UI with camera overlays and sensor data</li>
          <li>Stable control using advanced PID and dead-zone compensation</li>
          <li>Support for mission-specific tools like manipulators and samplers</li>
        </ul>
      </Section>

      <Section id="join" title="Join the Team">
        <p>
          We welcome students from all years and programs – no prior robotics
          experience required. If you’re excited about building a real underwater
          robot, we’ll teach you the rest.
        </p>
        <p>To get involved, fill out our interest form or come to our next general meeting.</p>

        <div className="cta-row">
          <Link to="/join" className="btn btn-primary">
            I want to join
          </Link>
          <a href="#projects" className="btn btn-outline">
            View our projects
          </a>
        </div>
      </Section>

      <Section id="contact" title="Contact & Socials">
        <p>Have questions, ideas, or want to sponsor the team? Reach out to us:</p>
        <ul className="contact-list">
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:rov.club@example.com">rov.club@example.com</a>
          </li>
          <li>
            <strong>Instagram:</strong>{" "}
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              @rov.club
            </a>
          </li>
          <li>
            <strong>Location:</strong> McMaster University – Engineering building
          </li>
        </ul>
      </Section>
    </main>
  );
}