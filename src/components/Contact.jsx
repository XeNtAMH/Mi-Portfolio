import Section from "./Section";
import Reveal from "./Reveal";
import { useLanguage } from "../context/LanguageContext";
import { profile } from "../data/content";
import {
  MailIcon,
  PhoneIcon,
  GithubIcon,
  LinkedinIcon,
  ArrowRightIcon,
} from "./Icons";

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;

  const items = [
    {
      label: c.email,
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: <MailIcon size={20} />,
    },
    {
      label: c.phone,
      value: profile.phone,
      href: profile.phoneLink,
      icon: <PhoneIcon size={20} />,
    },
    {
      label: "LinkedIn",
      value: "Eric Mora Hernández",
      href: profile.linkedin,
      icon: <LinkedinIcon size={20} />,
      external: true,
    },
    {
      label: "GitHub",
      value: "@XeNtAMH",
      href: profile.github,
      icon: <GithubIcon size={20} />,
      external: true,
    },
  ];

  return (
    <Section id="contact" eyebrow={null} title={null} alt={false}>
      <Reveal direction="zoom">
        <div className="cta">
          <span className="eyebrow">{c.eyebrow}</span>
          <h2>{c.title}</h2>
          <p>{c.text}</p>
          <a className="btn btn-red" href={`mailto:${profile.email}`}>
            {c.cta} <ArrowRightIcon size={18} />
          </a>
        </div>
      </Reveal>

      <div className="contact-grid">
        {items.map((item, i) => (
          <Reveal key={item.label} delay={i * 100}>
            <a
              className="contact-item"
              href={item.href}
              {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              <span className="icon-box">{item.icon}</span>
              <span>
                <small>{item.label}</small>
                <span className="value">{item.value}</span>
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}