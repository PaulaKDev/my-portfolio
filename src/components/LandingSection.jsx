import React from 'react';
import Imagen_perfil from '../images/Imagen_perfil.png';

const greeting = 'Hola, soy Paula!'; // Personalizado
const bio1 = 'Soy Desarrolladora Front-End';
const bio2 = 'Y diseñadora UX/UI'; // Biografía un poco más descriptiva

const LandingSection = () => {
  return (
  <section
    style={{
      width: '100%',
      height: 'calc(100vh - 60px)', // ajusta por el header
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'var(--color-background)',
      color: 'var(--color-text-dark)',
      textAlign: 'center',
      padding: '2rem 1rem',
    }}
  >

      <img
        src={Imagen_perfil}
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
        color: 'var(--color-primary)', // Saludo con color principal
      }}>{greeting}</h2>
      <h1 style={{
        fontSize: '3.5rem', // Tamaño de título más prominente
        fontWeight: 'bold',
        marginBottom: 'calc(var(--spacing-unit) * 2)',
        fontFamily: 'var(--font-heading)', // Fuente de encabezado para el rol
        lineHeight: '1.2',
        maxWidth: '900px',
      }}>
        {bio1}
        <br />
        {bio2}
      </h1>
    </section>
  );
};

export default LandingSection;