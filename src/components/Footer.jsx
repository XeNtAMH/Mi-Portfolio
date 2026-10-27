import { useLanguage } from "../context/LanguageContext";
import { profile } from "../data/content";
import { GithubIcon, LinkedinIcon, MailIcon, ArrowUpIcon } from "./Icons";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} <span className="accent">{profile.name}</span>.{" "}
          {t.footer.rights}
        </p>

        <div className="footer-links">
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <MailIcon size={18} />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GithubIcon size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedinIcon size={18} />
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label={t.footer.top}
            title={t.footer.top}
          >
            <ArrowUpIcon size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}