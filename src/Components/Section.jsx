// src/components/Section.jsx
export default function Section({ id, title, children }) {
    return (
      <section id={id} className="section">
        <div className="section-inner">
          <h2 className="section-title">{title}</h2>
          <div className="section-body">{children}</div>
        </div>
      </section>
    );
  }
  