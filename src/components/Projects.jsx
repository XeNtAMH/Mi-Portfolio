import { useState } from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import { useLanguage } from "../context/LanguageContext";
import { projectsBase } from "../data/content";

const filterIds = ["all", "frontend", "fullstack"];

export default function Projects() {
  const { t } = useLanguage();
  const p = t.projects;
  const [filter, setFilter] = useState("all");

  const visible = projectsBase.filter(
    (project) => filter === "all" || project.category === filter
  );

  return (
    <Section id="projects" eyebrow={p.eyebrow} title={p.title} subtitle={p.intro} alt>
      <Reveal>
        <div className="filters" role="group">
          {filterIds.map((id) => (
            <button
              key={id}
              className={`filter ${filter === id ? "active" : ""}`}
              onClick={() => setFilter(id)}
            >
              {p.filters[id]}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="cards">
        {visible.map((project, i) => (
          <Reveal key={project.id} delay={(i % 2) * 120}>
            <ProjectCard
              project={project}
              text={p.items[project.id]}
              labels={p}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}