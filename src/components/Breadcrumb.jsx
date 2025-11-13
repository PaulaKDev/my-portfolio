import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumb.css';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  const titles = {
    'react-projects': 'Proyectos React',
    'ux-ui-projects': 'Proyectos UX/UI',
    'wordpress-projects': 'Proyectos WordPress'
  };

  return (
    <nav className="breadcrumb">
        <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 var(--spacing-unit)',
            display: 'flex',
            alignItems: 'center',
            padding: '0 var(--spacing-unit)',
        }}>

      <Link to="/">Inicio</Link>
      {pathnames.map((name, index) => {
        const routeTo = '/' + pathnames.slice(0, index + 1).join('/');
        const displayName = titles[name] || name.replace('-', ' ');
        return (
          <span key={index}>
            {' / '}
            <Link to={routeTo}>{displayName}</Link>
          </span>
        );
      })}
      </div>
    </nav>
  );
};

export default Breadcrumb;