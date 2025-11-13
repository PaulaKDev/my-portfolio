import React from 'react';
import Card from '../components/Card';
import Reacty from '../images/Reacty.jpg';
import UXUI from '../images/UXUI.jpg';
import Wordpress from '../images/Wordpress.jpg';


const wordpressProjects = [
  {
    title: 'Blog WordPress',
    description: 'Diseño y desarrollo de blog en WordPress.',
    imageSrc: Reacty,
    link: 'https://tusitio.com/blog'
  },
  {
    title: 'E-commerce WordPress',
    description: 'Tienda online optimizada con WooCommerce.',
    imageSrc: UXUI,
    link: 'https://tusitio.com/ecommerce'
  },
  {
    title: 'Landing WordPress',
    description: 'Landing page profesional en WordPress.',
    imageSrc: Wordpress,
    link: 'https://tusitio.com/landing'
  }
];

const WordPressProjects = () => {
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
        Proyectos WordPress
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
        {wordpressProjects.map((project, index) => (
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

export default WordPressProjects;
