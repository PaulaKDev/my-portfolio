import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Card = ({ title, description, imageSrc,link }) => {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-text-light)', // Fondo blanco para la tarjeta
        borderRadius: 'var(--border-radius-soft)',
        overflow: 'hidden',
        boxShadow: 'var(--box-shadow-light)',
        display: 'flex',
        flexDirection: 'column',
        color: 'var(--color-text-dark)',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
      }}
    >
      <img
        src={imageSrc}
        alt={title}
        style={{
          width: '100%',
          height: '220px', // Un poco más alto
          objectFit: 'cover',
          borderBottom: '1px solid var(--color-accent)', // Pequeña línea divisoria
        }}
      />
      <div style={{
        padding: 'calc(var(--spacing-unit) * 1.5)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        textAlign: 'left' }}>

        <h3 style={{
          fontSize: '1.6rem',
          fontWeight: 'bold',
          margin: 0,
          fontFamily: 'var(--font-heading)',
          color: 'var(--color-primary)', // Título de la tarjeta con color principal
        }}>{title}</h3>

        <p style={{
          fontSize: '1rem',
          margin: 0,
          fontFamily: 'var(--font-body)',
          color: 'var(--color-text-dark)',
        }}>{description}</p>

        <p
          style={{
            fontSize: '1rem',
            margin: 0,
            fontFamily: 'var(--font-body)',
            color: 'var(--color-text-dark)',
          }}
        >
          {description}
        </p>

        {/*Convertimos el Span en Link*/}
        <Link
          to={link}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontWeight: '600',
            fontFamily: 'var(--font-heading)',
            color: 'var(--color-secondary)',
            marginTop: '0.5rem',
            textDecoration: 'none',
          }}
        >
          Ver más <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </Link>
      </div>
    </div>
  );
};

export default Card;
