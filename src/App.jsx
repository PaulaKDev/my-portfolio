// Sin cambios significativos aquí, solo para referencia
import React from 'react';
import Header from './components/Header';
import LandingSection from './components/LandingSection';
import ProjectsSection from './components/ProjectsSection';
import ContactMeSection from './components/ContactMeSection';
import Footer from './components/Footer';
import { AlertProvider } from './context/alertContext';

function App() {
  return (
    <AlertProvider>
      <div style={{ scrollBehavior: 'smooth' }}>
        <Header />
        <main>
          <LandingSection />
          <ProjectsSection />
          <ContactMeSection />
        </main>
        <Footer />
      </div>
    </AlertProvider>
  );
}

export default App;
