// src/pages/Home.jsx
import { Helmet } from "react-helmet-async";
import Hero from "../Components/Hero.jsx";
import Countdown from "../Components/Countdown.jsx";

export default function Home() {
  return (
    <main className="app">
      <Helmet>
        <title>McMaster Underwater Robotics Team</title>
        <meta name="description" content="McMaster Underwater Robotics Team (MURT) is a MES-affiliated student engineering club at McMaster University building custom ROVs to compete in the MATE ROV Competition." />
        <link rel="canonical" href="https://www.macmurt.com/" />
      </Helmet>
      <Hero />

      <section id="about" className="about-home">
        <h2 className="about-home-title">About the Club</h2>
        <p>
          The <strong>McMaster Underwater Robotics Team (MURT)</strong> is a
          student engineering club at <strong>McMaster University</strong> in
          Hamilton, Ontario, proudly affiliated with the{" "}
          <strong>McMaster Engineering Society (MES)</strong>. We design and
          build a fully custom <strong>Remotely Operated Vehicle (ROV)</strong>{" "}
          from the ground up, competing against top universities across North
          America at the <strong>MATE ROV Competition</strong>. Our
          multidisciplinary team spans software, electrical, mechanical, and
          operations, united by a passion for robotics and real-world
          engineering.
        </p>
        <div className="about-badges">
          {[
            { label: "MES Affiliated" },
            { label: "McMaster University" },
            { label: "MATE ROV Competition" },
            { label: "Robotics Engineering" },
          ].map(({ label }) => (
            <span key={label} className="about-badge">{label}</span>
          ))}
        </div>
      </section>

      <Countdown />
    </main>
  );
}