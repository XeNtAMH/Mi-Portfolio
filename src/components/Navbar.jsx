import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { SunIcon, MoonIcon } from "./Icons";

const sections = ["home", "about", "projects", "skills", "experience", "contact"];

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("home");

  // Barra de progreso y sombra al hacer scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Resalta la sección visible
  useEffect(() => {
    const elements = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#home" className="logo">
          ERIC<span>.</span>MORA
        </a>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {t.nav[id]}
            </a>
          ))}
        </nav>

        <div className="nav-tools">
          <div className="lang-toggle" role="group" aria-label="Language">
            {["es", "en"].map((l) => (
              <button
                key={l}
                className={lang === l ? "active" : ""}
                onClick={() => setLang(l)}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={t.nav.theme}
            title={t.nav.theme}
          >
            {theme === "dark" ? <SunIcon size={18} /> : <MoonIcon size={18} />}
          </button>

          <button
            className="menu-btn"
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      <div className="progress" style={{ width: `${progress}%` }} />
    </header>
  );
}