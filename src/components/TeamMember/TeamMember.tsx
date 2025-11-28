import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import styles from './TeamMember.module.css';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  delay?: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, bio, delay = 0 }) => {
  return (
    <motion.div 
      className={styles.teamMember}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className={styles.imageContainer}>
        <img 
          src={image} 
          alt={name} 
          className={styles.memberImage}
          onError={(e) => {
            // Fallback image in case the provided one doesn't load
            e.currentTarget.src = '/team-placeholder.jpg';
          }}
        />
        <div className={styles.socialLinks}>
          <a href="#" className={styles.socialLink} aria-label={`Seguir a ${name} en Facebook`}>
            <FaFacebookF />
          </a>
          <a href="#" className={styles.socialLink} aria-label={`Seguir a ${name} en Twitter`}>
            <FaTwitter />
          </a>
          <a href="#" className={styles.socialLink} aria-label={`Seguir a ${name} en Instagram`}>
            <FaInstagram />
          </a>
          <a href="#" className={styles.socialLink} aria-label={`Ver perfil de ${name} en LinkedIn`}>
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div className={styles.memberInfo}>
        <h3 className={styles.memberName}>{name}</h3>
        <p className={styles.memberRole}>{role}</p>
        <p className={styles.memberBio}>{bio}</p>
      </div>
    </motion.div>
  );
};

export default TeamMember;
