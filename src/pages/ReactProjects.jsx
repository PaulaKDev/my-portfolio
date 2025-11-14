import React from 'react';
import Card from '../components/Card';
import PortfolioReact  from '../images/PortfolioReact.png';
import LittleLemon from '../images/LittleLemon.png';
import Wordpress from '../images/Wordpress.jpg';


const reactProjects = [
  {
    title: 'Portfolio React',
    description: 'Portfolio personal con React y Vite.',
    imageSrc: PortfolioReact,
    link: 'https://github.com/PaulaKDev/my-portfolio'
  },
  {
    title: 'Little Lemon Restaurant',
    description: 'Funcionalidad web de reserva de mesas con React.',
    imageSrc: LittleLemon,
    link: 'https://github.com/PaulaKDev/little-lemon'
  },
  {
    title: 'ToDo List App',
    description: 'Aplicación "ToDo" con React',
    imageSrc: Wordpress,
    link: 'https://github.com/PaulaKDev/ToDo-App'
  }
];

const ReactProjects = () => {
  return (
<section
  style={{
    width: '100%',
    maxWidth: '1200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 'calc(var(--spacing-unit) * 4) var(--spacing-unit)',
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
