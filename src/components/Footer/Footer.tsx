import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.675611279366!2d-74.05688968523717!3d4.683443396618995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a3e0e1b1b1f%3A0x1b8e5b0b0b0b0b0b0!2sCalle%20107%20%238b-30%2C%20Bogot%C3%A1%2C%20Colombia!5e0!3m2!1sen!2sco!4v1620000000000!5m2!1sen!2sco";

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.about}>
            <div className={styles.logoContainer}>
              <img 
                src="/images/logo.svg" 
                alt="Pan y Carne Ahumada" 
                className={styles.logoImage}
              />
            </div>
            <p className={styles.description}>
              Especialistas en pan artesanal y carnes ahumadas de la más alta calidad. 
              Ofrecemos una experiencia culinaria única que combina tradición y sabor.
            </p>
            <div className={styles.socialLinks}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook className={styles.socialIcon} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className={styles.socialIcon} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className={styles.socialIcon} />
              </a>
            </div>
          </div>

          <div className={styles.location}>
            <h4 className={styles.title}>Ubicación</h4>
            <div className={styles.mapContainer}>
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen
                loading="lazy"
                title="Ubicación de Pan y Carne Ahumada"
                className={styles.mapIframe}
              ></iframe>
              <p className={styles.mapCaption}>
                <FaMapMarkerAlt className={styles.mapIcon} />
                Calle 107 #8b-30, Bogotá, Colombia
              </p>
            </div>
          </div>

          <div className={styles.contact}>
            <h4 className={styles.title}>Contacto</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <FaPhone className={styles.contactIcon} />
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </li>
              <li className={styles.contactItem}>
                <FaEnvelope className={styles.contactIcon} />
                <a href="mailto:info@panrock.com">info@panrock.com</a>
              </li>
              <li className={styles.contactItem}>
                <FaClock className={styles.contactIcon} />
                <div>
                  <p>Lun-Sáb: 11:00 AM - 10:00 PM</p>
                  <p>Dom: 12:00 PM - 8:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          <div className={styles.newsletter}>
            <h4 className={styles.title}>Boletín Informativo</h4>
            <p className={styles.newsletterText}>
              Suscríbete para recibir nuestras últimas ofertas y promociones especiales.
            </p>
            <form className={styles.newsletterForm}>
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className={styles.newsletterInput}
                required 
              />
              <button type="submit" className={styles.newsletterButton}>
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.copyright}>
            &copy; {currentYear} Pan y Carne Ahumada. Todos los derechos reservados.
          </div>
          <div className={styles.legalLinks}>
            <Link to="/terminos" className={styles.legalLink}>Términos y Condiciones</Link>
            <span className={styles.divider}>|</span>
            <Link to="/privacidad" className={styles.legalLink}>Política de Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
