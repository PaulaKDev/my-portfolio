import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  // Diccionario para convertir rutas en títulos bonitos
  const titles = {
    'react-projects': 'Proyectos React',
    'ux-ui-projects': 'Proyectos UX/UI',
    'wordpress-projects': 'Proyectos WordPress'
  };

  return (
    <nav style={{
      backgroundColor: 'var(--color-accent)',
      padding: '0.8rem 1rem',
      fontFamily: 'var(--font-body)',
      fontSize: '1rem'
    }}>
      <Link to="/" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>
        Inicio
      </Link>
      {pathnames.map((name, index) => {
        const routeTo = '/' + pathnames.slice(0, index + 1).join('/');
        const displayName = titles[name] || name.replace('-', ' ');
        return (
          <span key={index}>
            {' / '}
            <Link to={routeTo} style={{ color: 'var(--color-secondary)', textDecoration: 'none' }}>
              {displayName}
            </Link>
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;