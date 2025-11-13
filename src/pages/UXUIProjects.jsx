// src/pages/UXUIProjects.jsx
import React from 'react';

function UXUIProjects() {
  return (
    <div>
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