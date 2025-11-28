import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

// Estilos globales
import './styles/global.css';

// Componentes
import Navbar from './components/Navbar/Navbar.tsx';
import Footer from './components/Footer/Footer.tsx';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.tsx';
import FloatingWhatsApp from './components/FloatingWhatsApp/FloatingWhatsApp';

// Páginas
import Home from './pages/Home/Home.tsx';
import Menu from './pages/Menu/Menu.tsx';
import About from './pages/About/About.tsx';
import Contact from './pages/Contact/Contact.tsx';
import NotFound from './pages/NotFound/NotFound.tsx';

// Contexto de la aplicación
import { AppProvider } from './context/AppContext.tsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular carga de datos iniciales
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <h2>Cargando Pan Rock...</h2>
      </div>
    );
  }

  return (
    <AppProvider>
      <Router>
        <ScrollToTop />
        <div className="app">
          <Navbar />
          <main>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/nosotros" element={<About />} />
                <Route path="/contacto" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
