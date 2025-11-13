// src/pages/UXUIProjects.jsx
import React from 'react';
import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard';

function UXUIProjects() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Proyectos UX/UI</h1>
      <div className="projects-grid">
        {projects.uxui.map((project, index) => (
            <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default UXUIProjects;