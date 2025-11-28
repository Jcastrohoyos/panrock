import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAppContext } from '../../context/AppContext';
import { Bars3Icon, XMarkIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { isMenuOpen, toggleMenu, closeMenu, cartItems } = useAppContext();
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Efecto para manejar el scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Cerrar el menú al cambiar de ruta
  useEffect(() => {
    closeMenu();
  }, [location, closeMenu]);

  // Cerrar menú al hacer clic en un enlace
  const handleNavLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLAnchorElement;
    const href = target.getAttribute('href');
    
    // Cerrar el menú
    closeMenu();
    
    // Navegar después de que la animación de cierre haya terminado
    setTimeout(() => {
      if (href) {
        window.location.href = href;
      }
    }, 300);
  };
  
  // Efecto para manejar el menú en dispositivos móviles
  useEffect(() => {
    const nav = document.querySelector(`.${styles.nav}`) as HTMLElement;
    const overlay = document.querySelector(`.${styles.overlay}`) as HTMLElement;
    
    if (!nav || !overlay) return;
    
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      nav.style.right = '0';
      overlay.style.display = 'block';
      setTimeout(() => {
        overlay.style.opacity = '1';
      }, 10);
    } else {
      overlay.style.opacity = '0';
      nav.style.right = '-100%';
      
      setTimeout(() => {
        if (!isMenuOpen) {
          overlay.style.display = 'none';
          document.body.style.overflow = 'unset';
        }
      }, 300);
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Menú', path: '/menu' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <img 
            src="/images/logo.svg" 
            alt="Logo Pan y Carne Ahumada" 
            className={styles.logoImage}
          />
        </Link>

        {isMenuOpen && (
          <div 
            className={styles.overlay}
            onClick={closeMenu}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Escape' && closeMenu()}
            aria-label="Cerrar menú"
          />
        )}
        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.path} className={styles.navItem}>
                <Link 
                  to={link.path}
                  className={`${styles.navLink} ${
                    location.pathname === link.path ? styles.active : ''
                  }`}
                  onClick={handleNavLinkClick}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Link to="/carrito" className={styles.cartIcon}>
            <ShoppingCartIcon className="w-6 h-6" />
            {totalItems > 0 && (
              <span className={styles.cartBadge}>{totalItems}</span>
            )}
          </Link>
          
          <button 
            className={styles.menuToggle} 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-8 h-8" />
            ) : (
              <Bars3Icon className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
