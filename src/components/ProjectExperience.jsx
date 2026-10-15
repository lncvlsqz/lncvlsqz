import { ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";
import { projectExperience } from "../data";

export default function ProjectExperience() {
  return (
    <FadeIn
      as="section"
      className="section"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="section-heading">
        <span className="section-number">02</span>
        <h2 id="projects-title">Project experience</h2>
        <ArrowUpRight className="section-arrow" size={23} aria-hidden="true" />
      </div>
      <div className="project-timeline">
        {projectExperience.map((project) => (
          <article key={project.title} className="experience-card">
            <div className="project-heading">
              <h3>{project.title}</h3>
              <span className="year-badge">{project.year}</span>
            </div>
            <p className="project-role">{project.role}</p>
            <p className="project-organization">
              {project.organization} · {project.period}
            </p>
            <ul className="project-bullets">
              {project.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </FadeIn>
  );
}
