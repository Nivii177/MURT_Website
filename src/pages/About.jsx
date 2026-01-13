// src/pages/About.jsx
import Section from "../Components/Section.jsx";
import { WHAT_WE_DO } from "../data/constants.js";

export default function About() {
  return (
    <main className="app">
      <section className="section" style={{ paddingTop: "calc(var(--navbar-height) + 2rem)" }}>
        <div className="section-inner">
          <h1 className="section-title" style={{ fontSize: "2rem", marginBottom: "1.2rem" }}>
            We build underwater robots for the MATE ROV Competition.
          </h1>
          <p className="section-body" style={{ fontSize: "1.05rem", lineHeight: "1.7" }}>
            The McMaster Underwater Robotics Team (MURT) is a student-led organization dedicated to advancing underwater robotics technology through innovative design, research, and hands-on experience. Our mission is to provide students with opportunities to develop their skills in engineering, programming, and teamwork while contributing to the field of underwater robotics.
          </p>
        </div>
      </section>

      <Section id="mission" title="Our Mission">
        <p>
          We believe in hands-on engineering education through real-world challenges. Our mission focuses on:
        </p>
        <ul className="bullet-list">
          <li><strong>Hands-on Engineering:</strong> Building real systems that work in challenging underwater environments</li>
          <li><strong>Real-World Ocean Missions:</strong> Solving problems inspired by actual marine engineering challenges</li>
          <li><strong>Safety & Reliability:</strong> Engineering robust systems with proper testing and fail-safes</li>
          <li><strong>Learning by Building:</strong> Teaching through doing, with mentorship and collaboration at every step</li>
        </ul>
      </Section>

      <Section id="what-we-do" title="What We Do">
        <p>Our team works across multiple technical domains to build a complete ROV system:</p>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
          gap: "1.2rem", 
          marginTop: "1.2rem" 
        }}>
          {WHAT_WE_DO.map((item, index) => (
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

      <Section id="competition" title="The MATE ROV Competition">
        <p>
          The <strong>MATE ROV Competition</strong> challenges teams to design and build remotely operated vehicles (ROVs) that complete mission tasks simulating real-world underwater operations. Each year, teams receive a mission scenario—such as underwater infrastructure inspection, scientific sampling, or search and rescue—and must design their ROV to complete specific tasks within time limits.
        </p>
        <p>
          Mission tasks typically include object manipulation, sample collection, sensor deployment, and navigation challenges. Teams are evaluated on technical documentation, engineering presentations, and mission performance, making it a comprehensive test of engineering, project management, and communication skills.
        </p>
      </Section>

      <Section id="values" title="Our Values">
        <ul className="bullet-list">
          <li><strong>Teamwork:</strong> Collaboration across disciplines is essential to building a successful ROV</li>
          <li><strong>Documentation:</strong> Clear technical documentation ensures knowledge transfer and maintainability</li>
          <li><strong>Testing:</strong> Rigorous testing at every stage prevents failures in competition</li>
          <li><strong>Professionalism:</strong> We maintain high standards in our engineering practices and team interactions</li>
          <li><strong>Outreach:</strong> Sharing our work with the community inspires the next generation of engineers</li>
        </ul>
      </Section>
    </main>
  );
}
