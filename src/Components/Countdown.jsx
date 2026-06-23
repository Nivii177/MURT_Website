import { useState, useEffect } from "react";

const COMPETITION_DATE = new Date("2027-06-23T00:00:00");

function getTimeLeft() {
  const diff = COMPETITION_DATE - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <section className="countdown-section">
      <p className="countdown-label">Time until the 2027 MATE ROV World Championship</p>
      <div className="countdown-grid">
        {units.map(({ label, value }) => (
          <div key={label} className="countdown-unit">
            <span className="countdown-value">{String(value).padStart(2, "0")}</span>
            <span className="countdown-unit-label">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
