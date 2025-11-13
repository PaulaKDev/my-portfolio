// src/pages/WordPressProjects.jsx
import React from 'react';

function WordPressProjects() {
  return (
    <div>
      <h1>Proyectos WordPress</h1>
        <div className="projects-grid">
        {projects.wordpress.map((project, index) => (
            <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default WordPressProjects;