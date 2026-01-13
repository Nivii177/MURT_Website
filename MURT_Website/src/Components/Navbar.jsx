// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.png"; // or whatever your logo path is

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/join", label: "Join" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => { 
    const handleScroll = () => {
      const triggerHeight = 95; // px from top before we hide navbar
      setHidden(window.scrollY > triggerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => setOpen((prev) => !prev);
  const handleNavClick = () => setOpen(false);

  return (
    <header className={`navbar ${hidden ? "navbar--hidden" : ""}`}>
      <div className="navbar-inner">
        <Link to="/" className="logo">
          <img src={logo} alt="ROV Logo" className="logo-img" />
          <span className="logo-text">MCMASTER UNDERWATER ROBOTICS TEAM</span>
        </Link>

        <nav className="nav-links">
          {navLinks.map((link) => (
            <Link key={link.href} to={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="nav-toggle"
          type="button"
          onClick={handleToggle}
          aria-label="Toggle navigation"
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>
      </div>

      {open && (
        <nav className="nav-mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="nav-mobile-link"
              onClick={handleNavClick}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}