import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  github: string;
  live: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, github, live }) => {
  return (
    <div className="project-card" style={{ marginBottom: "2rem" }}>
      <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem", color: "#0077ff" }}>{title}</h3>
      <p style={{ fontSize: "1rem", marginBottom: "1rem", color: "#444" }}>{description}</p>
      <div className="project-links">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: "1rem", color: "#00b894", textDecoration: "none", fontWeight: 500 }}
          >
            🔗 GitHub
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#00b894", textDecoration: "none", fontWeight: 500 }}
          >
            🚀 Live
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
