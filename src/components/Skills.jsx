import Section from "./Section";
import Reveal from "./Reveal";
import TechLogo from "./TechLogo";
import { CheckIcon } from "./Icons";
import { useLanguage } from "../context/LanguageContext";
import { skillGroups, techs } from "../data/content";

export default function Skills() {
  const { t } = useLanguage();
  const s = t.skills;

  return (
    <Section id="skills" eyebrow={s.eyebrow} title={s.title} subtitle={s.intro}>
      <div className="skill-groups">
        {skillGroups.map((group, i) => (
          <Reveal key={group.id} delay={i * 100}>
            <div className="group-card">
              <h3>{s.groups[group.id]}</h3>
              <div className="tech-grid">
                {group.items.map((id) => (
                  <div key={id} className="tech-tile">
                    <TechLogo tech={techs[id]} size={38} />
                    {techs[id].name}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <h3 className="competencies-title">{s.competenciesTitle}</h3>
      </Reveal>

      <div className="competencies">
        {s.competencies.map((c, i) => (
          <Reveal key={c} delay={i * 70} direction="zoom">
            <div className="competency">
              <span className="icon-box">
                <CheckIcon size={16} />
              </span>
              {c}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}