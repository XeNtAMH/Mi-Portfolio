import Section from "./Section";
import Reveal from "./Reveal";
import { CheckIcon } from "./Icons";
import { useLanguage } from "../context/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();
  const e = t.experience;

  return (
    <Section id="experience" eyebrow={e.eyebrow} title={e.title} alt>
      <div className="timeline">
        {e.items.map((item) => (
          <Reveal key={item.date} direction="right" className="t-item">
            <span className="t-dot" />
            <div className="t-card">
              <span className="t-date">{item.date}</span>
              <h3>{item.role}</h3>
              <p className="t-company">{item.company}</p>
              <ul className="exp-list">
                {item.bullets.map((b) => (
                  <li key={b}>
                    <CheckIcon size={16} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}