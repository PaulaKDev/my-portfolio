import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingSection from './components/LandingSection';
import ProjectsSection from './components/ProjectsSection';
import ContactMeSection from './components/ContactMeSection';
import Breadcrumb from './components/Breadcrumb';
import ReactProjects from './pages/ReactProjects';
import UXUIProjects from './pages/UXUIProjects';
import WordPressProjects from './pages/WordPressProjects';
import { AlertProvider } from './context/alertContext';

function App() {
  return (
    <AlertProvider>
      <Router>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          {/* Breadcrumb siempre visible */}
          <Breadcrumb />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <LandingSection />
                    <ProjectsSection />
                    <ContactMeSection />
                  </>
                }
              />
              <Route path="/react-projects" element={<ReactProjects />} />
              <Route path="/ux-ui-projects" element={<UXUIProjects />} />
              <Route path="/wordpress-projects" element={<WordPressProjects />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AlertProvider>
  );
}

export default App;
