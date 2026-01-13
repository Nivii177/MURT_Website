// src/components/Footer.jsx
export default function Footer() {
    return (
      <footer className="footer">
        <div className="footer-inner">
          <p>© {new Date().getFullYear()} McMaster Underwater Robotics Team. All rights reserved.</p>
          <p className="footer-subtext">
            Built by students. Powered by curiosity, caffeine, and waterproof connectors.
          </p>
        </div>
      </footer>
    );
  }
  