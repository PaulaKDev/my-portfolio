import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingSection from './components/LandingSection';
import ProjectsSection from './components/ProjectsSection';
import ContactMeSection from './components/ContactMeSection';
import ReactProjects from './pages/ReactProjects';
import UXUIProjects from './pages/UXUIProjects';
import WordPressProjects from './pages/WordPressProjects';
import { AlertProvider } from './context/alertContext';

function App() {
  return (
    <AlertProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <LandingSection />
              <ProjectsSection />
              <ContactMeSection />
            </>
          } />
          <Route path="/react-projects" element={<ReactProjects />} />
          <Route path="/ux-ui-projects" element={<UXUIProjects />} />
          <Route path="/wordpress-projects" element={<WordPressProjects />} />
        </Routes>
        <Footer />
      </Router>
    </AlertProvider>
  );
}

export default App;
