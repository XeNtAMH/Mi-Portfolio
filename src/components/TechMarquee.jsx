import { useLanguage } from "../context/LanguageContext";
import { marqueeOrder, techs } from "../data/content";
import TechLogo from "./TechLogo";

export default function TechMarquee() {
  const { t } = useLanguage();
  // Se duplica la lista para que el bucle sea continuo
  const loop = [...marqueeOrder, ...marqueeOrder];

  return (
    <section className="marquee-section" aria-label={t.marquee}>
      <p className="marquee-label">{t.marquee}</p>
      <div className="marquee">
        <div className="marquee-track">
          {loop.map((id, i) => (
            <div
              key={`${id}-${i}`}
              className="pill"
              aria-hidden={i >= marqueeOrder.length}
            >
              <TechLogo tech={techs[id]} size={28} />
              {techs[id].name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}