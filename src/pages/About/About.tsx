import { motion } from 'framer-motion';
import TeamMember from '../../components/TeamMember/TeamMember';
import styles from './About.module.css';

const About = () => {

  
  const team = [
    {
      name: 'Carlos Méndez',
      role: 'Chef Ejecutivo',
      image: '/team/chef1.jpg',
      bio: 'Con más de 20 años de experiencia en cocina artesanal, Carlos es el alma de nuestra cocina.'
    },
    {
      name: 'María González',
      role: 'Panadera Maestra',
      image: '/team/baker1.jpg',
      bio: 'Especialista en panadería artesanal, María da vida a nuestros deliciosos panes con técnicas tradicionales.'
    },
    {
      name: 'Roberto Sánchez',
      role: 'Experto en Ahumados',
      image: '/team/grill-master.jpg',
      bio: 'Maestro en el arte de ahumar carnes, Roberto crea sabores inigualables con sus técnicas únicas.'
    },
  ];

  return (
    <div className={styles.about}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.h1 
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Nuestra Historia
          </motion.h1>
          <motion.p 
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Conoce más sobre nuestra pasión por la cocina artesanal
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <motion.div 
              className={styles.storyContent}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className={styles.sectionTitle}>Nuestro Viaje</h2>
              <p className={styles.sectionText}>
                Todo comenzó en 2008, cuando nuestro fundador, Juan Mercado, decidió combinar su pasión por el pan artesanal con el arte de ahumar carnes. Lo que empezó como un pequeño local en la ciudad, hoy se ha convertido en un referente de la cocina artesanal en la región.
              </p>
              <p className={styles.sectionText}>
                En Pan Rock, creemos en la autenticidad de los sabores y en la importancia de utilizar ingredientes locales y de temporada. Cada día, nuestro equipo trabaja con dedicación para ofrecer experiencias culinarias memorables.
              </p>
            </motion.div>
            <motion.div 
              className={styles.storyImage}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img src="/images/OIP.jfif" alt="Nuestra historia" />
            </motion.div>
          </div>
        </div>
      </section>



      {/* Our Team */}
      <section className={`${styles.section} ${styles.teamSection}`}>
        <div className={styles.container}>
          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.sectionTitle}>Conoce a Nuestro Equipo</h2>
            <p className={styles.sectionSubtitle}>
              Los talentosos chefs y panaderos detrás de nuestros deliciosos platillos
            </p>
          </motion.div>

          <div className={styles.teamGrid}>
            {team.map((member, index) => (
              <TeamMember 
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                bio={member.bio}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>¿Listo para una experiencia culinaria inolvidable?</h2>
          <p>Visítanos hoy y descubre por qué somos los favoritos de la ciudad.</p>
          <div className={styles.ctaButtons}>
            
            <a href="/contacto" className={styles.ctaSecondary}>
              Contáctanos
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
