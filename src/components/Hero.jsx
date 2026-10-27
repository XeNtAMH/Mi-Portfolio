import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { profile } from "../data/content";
import { ArrowRightIcon, GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

function ProfilePhoto() {
  const [ok, setOk] = useState(true);
  const initials = profile.name
    .split(" ")
    .filter((_, i, arr) => i === 0 || i === arr.length - 2)
    .map((w) => w[0])
    .join("");

  return (
    <div className="photo-wrap">
      <div className="photo">
        {ok ? (
          <img
            src={profile.photo}
            alt={profile.name}
            onError={() => setOk(false)}
          />
        ) : (
          <div className="photo-fallback">{initials}</div>
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="badge hero-anim" style={{ "--d": "0ms" }}>
            <i /> {t.hero.available}
          </span>
          <p className="hero-greeting hero-anim" style={{ "--d": "100ms" }}>
            {t.hero.greeting}
          </p>
          <h1 className="hero-anim" style={{ "--d": "200ms" }}>
            {profile.name}
          </h1>
          <p className="hero-role hero-anim" style={{ "--d": "300ms" }}>
            {t.hero.role}
          </p>
          <p className="hero-text hero-anim" style={{ "--d": "400ms" }}>
            {t.hero.text}
          </p>

          <div className="hero-actions hero-anim" style={{ "--d": "500ms" }}>
            <a href="#projects" className="btn btn-primary">
              {t.hero.ctaProjects} <ArrowRightIcon size={18} />
            </a>
            <a href="#contact" className="btn btn-outline">
              <MailIcon size={18} /> {t.hero.ctaContact}
            </a>
          </div>

          <div className="social hero-anim" style={{ "--d": "600ms" }}>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GithubIcon size={20} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>

        <div className="hero-media hero-anim" style={{ "--d": "300ms" }}>
          <ProfilePhoto />
        </div>
      </div>
    </section>
  );
}