import React from 'react';

const greeting = 'Hello, I am Paula!'; // Personalizado para ti
const bio1 = 'A passionate Frontend Developer';
const bio2 = 'crafting delightful user experiences'; // Biografía un poco más descriptiva

const LandingSection = () => {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'var(--color-background)', // Fondo principal
        color: 'var(--color-text-dark)',
        textAlign: 'center',
        padding: 'calc(var(--spacing-unit) * 4) var(--spacing-unit)',
        marginTop: '60px', // Espacio para el header fijo
      }}
    >
      <img
        src="https://i.pravatar.cc/150?img=7" // Puedes cambiar esto por tu propia imagen de avatar
        alt="Avatar de Paula"
        style={{
          borderRadius: '50%',
          width: '180px', // Un poco más grande
          height: '180px',
          objectFit: 'cover',
          marginBottom: 'calc(var(--spacing-unit) * 1.5)',
          border: `4px solid var(--color-primary)`, // Borde con tu color principal
          boxShadow: 'var(--box-shadow-light)',
        }}
      />
      <h2 style={{
        fontSize: '1.8rem', // Tamaño ajustado
        marginBottom: '0.5rem',
        fontFamily: 'var(--font-body)', // Fuente del cuerpo para el saludo
        fontWeight: 'normal',
        color: 'var(--color-primary)', // Saludo con tu color principal
      }}>{greeting}</h2>
      <h1 style={{
        fontSize: '3.5rem', // Tamaño de título más prominente
        fontWeight: 'bold',
        marginBottom: 'calc(var(--spacing-unit) * 2)',
        fontFamily: 'var(--font-heading)', // Fuente de encabezado para el rol
        lineHeight: '1.2',
        maxWidth: '800px',
      }}>
        {bio1}
        <br />
        {bio2}
      </h1>
      {/* Podrías añadir un pequeño botón "View My Work" aquí */}
    </section>
  );
};

export default LandingSection;