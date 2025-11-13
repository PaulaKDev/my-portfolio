// src/pages/ReactProjects.jsx
import React from 'react';
import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard';

function ReactProjects() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Proyectos React</h1>
      <div className="projects-grid">
        {projects.react.map((project, index) => (
            <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default ReactProjects;