import React from 'react';
import Card from './Card';

const projects = [
  {
    title: 'Proyectos React',
    description:
      'Handy tool to display stats about the launches taking place in the SpaceX program',
    imageSrc: 'https://via.placeholder.com/400x220/A67B5B/FFFFFF?text=React+Space', // Imágenes con tu color principal
  },
  {
    title: 'Proyectos UX/UI',
    description:
      'A daily dose of jokes on your screen, powered by React and a third-party API',
    imageSrc: 'https://via.placeholder.com/400x220/BBAB8C/000000?text=React+Jokes', // Imágenes con tus colores
  },
  {
    title: 'Proyectos Wordpress',
    description:
      'A simple React photo gallery application fetching images from Unsplash API',
    imageSrc: 'https://via.placeholder.com/400x220/DED0B6/000000?text=Photo+Gallery',
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
      }}>Featured Projects</h2>
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