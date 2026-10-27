import { useState } from "react";
import { ExternalIcon, GithubIcon } from "./Icons";
import TechLogo from "./TechLogo";
import { techs } from "../data/content";

export default function ProjectCard({ project, text, labels }) {
  const [imageOk, setImageOk] = useState(true);
  const host = new URL(project.demo).host;

  return (
    <article className="card">
      <div className="browser">
        <div className="browser-bar">
          <i />
          <i />
          <i />
          <span>{host}</span>
        </div>
        <div className="card-media">
          {imageOk ? (
            <img
              src={project.image}
              alt={project.name}
              loading="lazy"
              onError={() => setImageOk(false)}
            />
          ) : (
            <div className="placeholder">
              <strong>{project.name}</strong>
              <small>{labels.imagePlaceholder}</small>
              <code>public{project.image}</code>
            </div>
          )}
        </div>
      </div>

      <div className="card-body">
        <div className="card-top">
          <span className="card-type">{text.type}</span>
          <span className="card-cat">{labels.filters[project.category]}</span>
        </div>

        <h3>{project.name}</h3>
        <p>{text.description}</p>

        <div className="tags">
          {project.tech.map((id) => (
            <span key={id} className="tag">
              <TechLogo tech={techs[id]} size={14} />
              {techs[id].name}
            </span>
          ))}
        </div>

        <div className="card-actions">
          <a
            className="btn btn-primary btn-sm"
            href={project.demo}
            target="_blank"
            rel="noreferrer"
          >
            {labels.demo} <ExternalIcon />
          </a>
          <a
            className="btn btn-outline btn-sm"
            href={project.repo}
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon size={16} /> {labels.repo}
          </a>
        </div>
      </div>
    </article>
  );
}