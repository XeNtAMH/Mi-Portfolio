import Reveal from "./Reveal";

export default function Section({ id, eyebrow, title, subtitle, alt = false, children }) {
  return (
    <section id={id} className={`section ${alt ? "alt" : ""}`}>
      <div className="container">
        {title && (
          <Reveal className="section-head">
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            <h2 className="section-title">{title}</h2>
            {subtitle && <p className="section-sub">{subtitle}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}