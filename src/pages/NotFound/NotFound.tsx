import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaUtensils } from 'react-icons/fa';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.content}
        >
          <div className={styles.errorCode}>404</div>
          <h1 className={styles.title}>¡Página no encontrada!</h1>
          <p className={styles.message}>
            Lo sentimos, la página que estás buscando no existe o ha sido movida.
          </p>
          <div className={styles.buttons}>
            <Link to="/" className={styles.primaryButton}>
              <FaHome className={styles.buttonIcon} />
              Volver al Inicio
            </Link>
            <Link to="/menu" className={styles.secondaryButton}>
              <FaUtensils className={styles.buttonIcon} />
              Ver Nuestro Menú
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.illustration}
        >
          <div className={styles.plate}>
            <div className={styles.food}></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
