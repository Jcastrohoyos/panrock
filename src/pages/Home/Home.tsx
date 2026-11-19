import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaClock, FaFire, FaUtensils } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { menuItems } from '../../data/menuItems';
import styles from './Home.module.css';

const Home = () => {
  const [ref,] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Try to play video on mobile devices
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          await videoRef.current.play();
          console.log('Video autoplay started');
        } catch (err) {
          console.log('Autoplay prevented, showing fallback content');
          // Fallback content or play button can be shown here
        }
      }
    };

    playVideo();
  }, []);

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.target as HTMLVideoElement;
    console.error('Error loading video:', video.error);
  };

  const handleVideoLoad = () => {
    console.log('Video loaded successfully');
  };

  const handlePlayButtonClick = async () => {
    if (videoRef.current) {
      try {
        await videoRef.current.play();
      } catch (err) {
        console.error('Error playing video:', err);
      }
    }
  };

  return (
    <div className={styles.home}>
      {/* Hero Section with Video */}
      <section ref={ref} className={styles.hero}>
        <div className={styles.videoContainer}>
          <video 
            ref={videoRef}
            autoPlay 
            loop 
            muted 
            playsInline
            onError={handleVideoError}
            onLoadedData={handleVideoLoad}
            className={styles.heroVideo}
            preload="auto"
            webkit-playsinline="true"
          >
            <source src="/video/Movie_001.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Play button for mobile devices where autoplay might be blocked */}
          <button 
            className={styles.playButton}
            onClick={handlePlayButtonClick}
            aria-label="Play video"
          >
            ▶️
          </button>
          
          <div className={styles.heroContent}>
            <motion.div
              className={styles.heroText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className={styles.heroTitle}>Lomo de cerdo ahumado con auténtico sabor</h1>
              <p className={styles.heroDescription}>
                Tradición, paciencia y fuego lento para disfrutar una especialidad artesanal hecha con dedicación.
              </p>
              <div className={styles.heroActions}>
                <Link to="/menu" className={styles.heroPrimary}>Ver menú <FaArrowRight /></Link>
                <Link to="/contacto" className={styles.heroSecondary}>Contáctanos</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.introSection}>
        <motion.div
          className={styles.introContent}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.eyebrow}>Sabor artesanal</span>
          <h2>Una experiencia ahumada, preparada con paciencia</h2>
          <p>
            Nuestro proceso cuida cada detalle para ofrecer lomo de cerdo jugoso, aromático y lleno de carácter.
          </p>
        </motion.div>

        <div className={styles.highlightsGrid}>
          <motion.article className={styles.highlightCard} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <span className={styles.highlightIcon}><FaFire /></span>
            <h3>Ahumado artesanal</h3>
            <p>Preparado lentamente para conservar jugosidad y desarrollar sabor.</p>
          </motion.article>
          <motion.article className={styles.highlightCard} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <span className={styles.highlightIcon}><FaUtensils /></span>
            <h3>Atención auténtica</h3>
            <p>Productos sencillos, honestos y pensados para disfrutar en buena compañía.</p>
          </motion.article>
          <motion.article className={styles.highlightCard} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <span className={styles.highlightIcon}><FaClock /></span>
            <h3>Tiempo de calidad</h3>
            <p>El proceso exige dedicación: cada porción recibe el tiempo que merece.</p>
          </motion.article>
        </div>
      </section>

      <section className={styles.featuredSection}>
        <div className={styles.featuredHeader}>
          <div>
            <span className={styles.eyebrow}>Especialidades</span>
            <h2>Lo que hacemos mejor</h2>
          </div>
          <Link to="/menu" className={styles.viewMenuLink}>Ver menú completo <FaArrowRight /></Link>
        </div>
        <div className={styles.featuredGrid}>
          {menuItems.map((item, index) => (
            <motion.article
              key={item.id}
              className={styles.featuredCard}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              whileHover={{ y: -8 }}
            >
              <div className={styles.featuredImage} style={{ backgroundImage: `url(${item.image})` }} />
              <div className={styles.featuredContent}>
                <span>Especialidad</span>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <Link to="/menu" className={styles.featuredLink}>Conocer producto <FaArrowRight /></Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className={styles.finalCta}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
          <span className={styles.eyebrow}>¿Se te antoja?</span>
          <h2>Consulta disponibilidad y descubre nuestro sabor</h2>
          <p>Estamos listos para ayudarte a elegir la opción perfecta.</p>
          <div className={styles.finalCtaActions}>
            <Link to="/contacto" className={styles.heroPrimary}>Contáctanos</Link>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className={styles.heroSecondary}>Escribir por WhatsApp</a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
