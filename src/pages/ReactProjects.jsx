import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects.json'; // Si usas JSON dinámico

const ReactProjects = () => {
  return (
    <section
      style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 'calc(var(--spacing-unit) * 4) var(--spacing-unit)',
        backgroundColor: 'var(--color-accent)',
        color: 'var(--color-text-dark)',
      }}
    >
      <h1
        style={{
          fontSize: '2.8rem',
          marginBottom: 'calc(var(--spacing-unit) * 3)',
          fontFamily: 'var(--font-heading)',
          fontWeight: 'bold',
          color: 'var(--color-primary)',
        }}
      >
        Proyectos React
      </h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'calc(var(--spacing-unit) * 2)',
          maxWidth: '1200px',
          width: '100%',
        }}
      >
        {projects.react.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ReactProjects;