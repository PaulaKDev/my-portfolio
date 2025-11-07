import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: 'var(--color-primary)', // Pie de página con tu color principal
        color: 'var(--color-text-light)',
        padding: '1.5rem',
        textAlign: 'center',
        fontSize: '1rem',
        fontFamily: 'var(--font-body)',
      }}
    >
      <p>Paula K. • © 2023</p> {/* Actualizado con tu nombre */}
    </footer>
  );
};

export default Footer;