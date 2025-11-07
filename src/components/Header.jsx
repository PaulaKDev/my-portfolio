import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faMedium, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Aunque no se usa en el header, lo mantengo por si acaso

const socials = [
  {
    icon: faGithub,
    url: 'https://github.com',
  },
  {
    icon: faLinkedin,
    url: 'https://www.linkedin.com',
  },
  {
    icon: faMedium,
    url: 'https://medium.com',
  },
  {
    icon: faStackOverflow,
    url: 'https://stackoverflow.com',
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const headerElement = headerRef.current;

      if (!headerElement) return;

      if (prevScrollPos > currentScrollPos || currentScrollPos < 100) { // Mostrar el header si subes o estás arriba del todo
        headerElement.style.transform = 'translateY(0)';
      } else {
        headerElement.style.transform = 'translateY(-200px)';
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const handleClick = (anchor) => (e) => {
    e.preventDefault(); // Evitar el comportamiento predeterminado del enlace
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header
      ref={headerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'var(--color-primary)', // Usar tu color principal
        color: 'var(--color-text-light)', // Texto claro
        padding: '1rem 0',
        zIndex: 1000,
        transition: 'transform 0.3s ease-in-out',
        boxShadow: 'var(--box-shadow-light)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 var(--spacing-unit)',
        }}
      >
        <nav>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', gap: 'calc(var(--spacing-unit) * 1.5)' }}>
            {socials.map((social, index) => (
              <li key={index}>
                <a href={social.url} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={social.icon} size="2x" style={{ color: 'var(--color-text-light)' }} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <nav>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', gap: 'calc(var(--spacing-unit) * 2)' }}>
            <li>
              <a href="#projects-section" onClick={handleClick('projects')} style={{ color: 'var(--color-text-light)', textDecoration: 'none', fontSize: '1.1rem', fontFamily: 'var(--font-heading)', fontWeight: '600' }}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contactme-section" onClick={handleClick('contactme')} style={{ color: 'var(--color-text-light)', textDecoration: 'none', fontSize: '1.1rem', fontFamily: 'var(--font-heading)', fontWeight: '600' }}>
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;