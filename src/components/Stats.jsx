import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";
import Counter from "./Counter";

export default function Stats() {
  const { t } = useLanguage();

  return (
    <section className="stats">
      <div className="container">
        <Reveal direction="zoom" className="stats-card">
          {t.stats.map((s) => (
            <div key={s.label} className="stat">
              <strong>
                <Counter to={s.value} suffix={s.suffix} />
              </strong>
              <span>{s.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}