import Section from "./Section";
import Reveal from "./Reveal";
import { useLanguage } from "../context/LanguageContext";
import { GradCapIcon, GlobeIcon, BriefcaseIcon } from "./Icons";

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  const cards = [
    { ...a.cards.education, icon: <GradCapIcon size={22} /> },
    { ...a.cards.languages, icon: <GlobeIcon size={22} /> },
    { ...a.cards.freelance, icon: <BriefcaseIcon size={22} /> },
  ];

  return (
    <Section id="about" eyebrow={a.eyebrow} title={a.title}>
      <div className="about-grid">
        <Reveal direction="left" className="about-text">
          <p>{a.summary}</p>
          <p>{a.summary2}</p>
        </Reveal>

        <div className="info-list">
          {cards.map((c, i) => (
            <Reveal key={c.title} direction="right" delay={i * 120}>
              <div className="info-card">
                <span className="icon-box">{c.icon}</span>
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.line1}</p>
                  <p>{c.line2}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}