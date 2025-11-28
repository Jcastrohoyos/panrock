import React from 'react';
import styles from './WhatsAppButton.module.css';
import { FaWhatsapp } from 'react-icons/fa';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  label?: string;
  className?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = '1234567890', // Default number, should be replaced with your actual number
  message = '¡Hola! Me gustaría hacer una consulta sobre sus servicios.',
  label = 'Chatea con nosotros',
  className = ''
}) => {
  // Format the phone number and message for the WhatsApp URL
  const formattedPhone = phoneNumber.replace(/[^0-9]/g, '');
  const formattedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${formattedMessage}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`${styles.whatsappButton} ${className}`}
      aria-label="Chatea con nosotros por WhatsApp"
    >
      <FaWhatsapp className={styles.whatsappIcon} />
      <span className={styles.buttonText}>{label}</span>
    </a>
  );
};

export default WhatsAppButton;
