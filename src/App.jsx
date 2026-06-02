// src/App.jsx
import { useEffect } from "react";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import PageTransition from "./Components/PageTransition.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Team from "./pages/Team.jsx";
import Sponsors from "./pages/Sponsors.jsx";
import Join from "./pages/Join.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    const id = setTimeout(() => {
      document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
    }, 80);
    return () => { clearTimeout(id); observer.disconnect(); };
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <div className="app">
        <PageTransition key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/join" element={<Join />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </PageTransition>
      </div>
      <Footer />
    </>
  );
}