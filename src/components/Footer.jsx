import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const socials = [
  { icon: faGithub, url: 'https://github.com/PaulaKDev' },
  { icon: faLinkedin, url: 'https://linkedin.com/in/paula-miraz-flores' },
  { icon: faGlobe, url: 'https://paulak.es' },
];

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: 'var(--color-primary)',
        color: 'var(--color-text-light)',
        padding: '1rem 0',
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
        {/* Redes sociales a la izquierda */}
        <nav>
          <ul
            style={{
              listStyle: 'none',
              margin: 0,
              padding: 0,
              display: 'flex',
              gap: 'calc(var(--spacing-unit) * 1.5)',
            }}
          >
            {socials.map((social, index) => (
              <li key={index}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--color-text-light)' }}
                >
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Texto a la derecha */}
        <div
          style={{
            fontSize: '1.1rem',
            fontFamily: 'var(--font-heading)',
            fontWeight: '600',
          }}
        >
          Paula K Portfolio
        </div>
      </div>
    </footer>
  );
};

export default Footer;