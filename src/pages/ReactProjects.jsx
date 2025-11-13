import React from 'react';
import Card from '../components/Card';
import Reacty from '../images/Reacty.jpg';
import UXUI from '../images/UXUI.jpg';
import Wordpress from '../images/Wordpress.jpg';


const reactProjects = [
  {
    title: 'Portfolio React',
    description: 'Portfolio personal con React y Vite.',
    imageSrc: Reacty,
    link: 'https://github.com/PaulaKDev/my-portfolio'
  },
  {
    title: 'App React',
    description: 'Aplicación interactiva con React Hooks.',
    imageSrc: UXUI,
    link: 'https://github.com/PaulaKDev/react-app'
  },
  {
    title: 'Landing React',
    description: 'Landing page responsive con React y CSS.',
    imageSrc: Wordpress,
    link: 'https://github.com/PaulaKDev/react-landing'
  }
];

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
        {reactProjects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default ReactProjects;
