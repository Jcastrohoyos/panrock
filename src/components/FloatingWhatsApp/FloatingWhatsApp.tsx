import React from 'react';
import WhatsAppButton from '../WhatsAppButton/WhatsAppButton';
import styles from './FloatingWhatsApp.module.css';

const FloatingWhatsApp: React.FC = () => {
  return (
    <div className={styles.floatingContainer}>
      <WhatsAppButton 
        phoneNumber="+1234567890" // Replace with your actual WhatsApp number
        message="¡Hola! Me gustaría hacer una consulta sobre sus servicios."
        className="floating"
      />
    </div>
  );
};

export default FloatingWhatsApp;
