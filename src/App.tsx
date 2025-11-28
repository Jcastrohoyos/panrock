import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
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
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <motion.div 
        className="loading-screen"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="loading-content">
          <motion.div
            className="logo-container"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img 
              src="/images/logo.svg" 
              alt="Pan y Carne Ahumada" 
              className="loading-logo"
            />
          </motion.div>
          
          <div className="spinner-container">
            <div className="spinner">
              <div className="spinner-ring"></div>
              <div className="spinner-ring"></div>
              <div className="spinner-ring"></div>
            </div>
          </div>
          
          <motion.h2 
            className="loading-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Cargando Pan Rock...
          </motion.h2>
          
          <motion.div 
            className="loading-dots"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span></span>
            <span></span>
            <span></span>
          </motion.div>
        </div>
      </motion.div>
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
