import React from 'react';
import Card from '../components/Card';
import PortfolioWordpress from '../images/PortfolioWP.png';
import UXUI from '../images/UXUI.jpg';
import Wordpress from '../images/Wordpress.jpg';


const wordpressProjects = [
  {
    title: 'Portfolio WordPress',
    description: 'Diseño y desarrollo de Portfolio en WordPress.',
    imageSrc: PortfolioWordpress,
    link: 'https://paulak.es'
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
