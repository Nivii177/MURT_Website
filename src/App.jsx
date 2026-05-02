// src/App.jsx
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