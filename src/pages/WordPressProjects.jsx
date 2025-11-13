// src/pages/WordPressProjects.jsx
import React from 'react';
import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard';

function WordPressProjects() {
  return (
    <div style={{ padding: '2rem' }}>
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