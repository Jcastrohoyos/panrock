import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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
              <div className={styles.logoContainer}>
                <span className={styles.subtitle}>Bienvenido a</span>
                <img 
                  src="/images/logo.svg" 
                  alt="Pan y Carne Ahumada" 
                  className={styles.logoImage}
                  loading="eager"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rest of your content sections can go here */}
    </div>
  );
};

export default Home;
