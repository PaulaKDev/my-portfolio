import React from 'react';
import Card from './Card';
import Reacty from '../images/Reacty.jpg';
import UXUI from '../images/UXUI.jpg';
import Wordpress from '../images/Wordpress.jpg';

const projects = [
  {
    title: 'Proyectos React',
    description:
      'Desarrollo interfaces web rápidas y accesibles con JavaScript y React, aplicando buenas prácticas de usabilidad y diseño responsivo.',
    imageSrc: Reacty,
    link: '/react-projects'// Link interno a la página de proyectos React
  },
  {
    title: 'Proyectos UX/UI',
    description:
      'Diseño interfaces accesibles, intuitivas y atractivas con Figma y Adobe XD, aplicando principios de usabilidad y diseño centrado en el usuario.',
    imageSrc: UXUI,
    link: '/uxui-projects' // Link interno a la página de proyectos UX/UI
  },
  {
    title: 'Proyectos Wordpress',
    description:
      'Diseño y desarrollo sitios web funcionales y optimizados en WordPress, aplicando buenas prácticas de usabilidad y diseño responsivo.',
    imageSrc: Wordpress,
    link: '/wordpress-projects' // Link interno a la página de proyectos WordPress
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects-section"
      style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 'calc(var(--spacing-unit) * 4) var(--spacing-unit)',
        backgroundColor: 'var(--color-accent)', // Fondo de acento
        color: 'var(--color-text-dark)',
        alignContent: 'center',
      }}
    >
      <h2 style={{
        fontSize: '2.8rem',
        marginBottom: 'calc(var(--spacing-unit) * 3)',
        fontFamily: 'var(--font-heading)',
        fontWeight: 'bold',
        color: 'var(--color-primary)', // Título con color principal
      }}>Proyectos Destacados</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'calc(var(--spacing-unit) * 2)',
          maxWidth: '1200px',
          width: '100%',
        }}
      >
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;