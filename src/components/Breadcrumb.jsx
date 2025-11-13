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
    </nav>
  );
};

export default Breadcrumb;