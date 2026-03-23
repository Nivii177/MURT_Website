// src/pages/Home.jsx
import Hero from "../Components/Hero.jsx";
import Countdown from "../Components/Countdown.jsx";

export default function Home() {
  return (
    <main className="app">
      <Hero />

      <section id="about" className="about-home">
        <h2 className="about-home-title">About the Club</h2>
        <p>
          We're a team of McMaster Engineering students designing the future of
          underwater robotics building a fully custom Remotely Operated Vehicle
          from the ground up to compete against some of the top universities in
          North America at the{" "}
          <strong>MATE ROV Competition</strong>.
        </p>
      </section>

      <Countdown />
    </main>
  );
}