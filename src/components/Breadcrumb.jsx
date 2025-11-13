import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <nav style={{
      backgroundColor: 'var(--color-accent)',
      padding: '0.8rem 1rem',
      fontFamily: 'var(--font-body)',
      fontSize: '1rem'
    }}>
      <Link to="/" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>Inicio</Link>
      {pathnames.map((name, index) => {
        const routeTo = '/' + pathnames.slice(0, index + 1).join('/');
        return (
          <span key={index}>
            {' / '}
            <Link to={routeTo} style={{ color: 'var(--color-secondary)', textDecoration: 'none' }}>
              {name.replace('-', ' ')}
            </Link>
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;