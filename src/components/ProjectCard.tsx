import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  github: string;
  live: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, github, live }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-links">
        <a href={github} target="_blank" rel="noreferrer">🔗 GitHub</a>
        <a href={live} target="_blank" rel="noreferrer">🚀 Live</a>
      </div>
    </div>
  );
};

export default ProjectCard;
