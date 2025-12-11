import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import styles from './Contact.module.css';
import heroImage from '../../assets/ahumado2.jfif';

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  captcha: string;
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);
  const [isVerified, setIsVerified] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm<FormData>();

  const onRecaptchaChange = (token: string | null) => {
    setIsVerified(!!token);
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (!isVerified) {
      setSubmitStatus({
        success: false,
        message: 'Por favor, completa la verificación CAPTCHA.'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Using environment variables for EmailJS configuration
      const result = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || '', 
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '', 
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message,
          'g-recaptcha-response': data.captcha
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '' 
      );

      if (result.status === 200) {
        setSubmitStatus({
          success: true,
          message: '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.'
        });
        reset();
        recaptchaRef.current?.reset();
        setIsVerified(false);
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus({
        success: false,
        message: 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className={styles.contact}>
      {/* Hero Section */}
      <section 
        className={styles.hero}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className={styles.heroContent}>
          <motion.h1 
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contáctanos
          </motion.h1>
          <motion.p 
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Estamos aquí para responder a todas tus preguntas
          </motion.p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <motion.div 
            className={styles.contactGrid}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Contact Information */}
            <motion.div 
              className={styles.contactInfo}
              variants={item}
            >
              <h2 className={styles.sectionTitle}>Información de Contacto</h2>
              <p className={styles.sectionSubtitle}>
                Estamos aquí para ayudarte. Contáctanos a través de cualquiera de estos canales.
              </p>
              
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3>Dirección</h3>
                    <p>{process.env.REACT_APP_BUSINESS_ADDRESS || "Av. Principal #1234, Colonia Centro<br />Ciudad de México, 06000"}</p>
                  </div>
                </div>
                
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <FaPhone />
                  </div>
                  <div>
                    <h3>Teléfono</h3>
                    <p>
                      <a href={`tel:${process.env.REACT_APP_BUSINESS_PHONE || "+525512345678"}`}>{process.env.REACT_APP_BUSINESS_PHONE_DISPLAY || "+52 55 1234 5678"}</a><br />
                      <a href={`tel:${process.env.REACT_APP_BUSINESS_PHONE_2 || "+5255987654321"}`}>{process.env.REACT_APP_BUSINESS_PHONE_2_DISPLAY || "+52 55 9876 5432"}</a>
                    </p>
                  </div>
                </div>
                
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3>Correo Electrónico</h3>
                    <p>
                      <a href={`mailto:${process.env.REACT_APP_BUSINESS_EMAIL || "info@panycarneahumada.com"}`}>{process.env.REACT_APP_BUSINESS_EMAIL || "info@panycarneahumada.com"}</a><br />
                      <a href={`mailto:${process.env.REACT_APP_BUSINESS_EMAIL_RESERVATIONS || "reservaciones@panycarneahumada.com"}`}>{process.env.REACT_APP_BUSINESS_EMAIL_RESERVATIONS || "reservaciones@panycarneahumada.com"}</a>
                    </p>
                  </div>
                </div>
                
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <FaClock />
                  </div>
                  <div>
                    <h3>Horario de Atención</h3>
                    <p>
                      Lunes a Viernes: 8:00 AM - 10:00 PM<br />
                      Sábado y Domingo: 9:00 AM - 11:00 PM
                    </p>
                  </div>
                </div>
              </div>
              
              <div className={styles.socialSection}>
                <h3>Síguenos en Redes Sociales</h3>
                <div className={styles.socialLinks}>
                  <a href="#" className={styles.socialLink} aria-label="Facebook">
                    <FaFacebookF />
                  </a>
                  <a href="#" className={styles.socialLink} aria-label="Instagram">
                    <FaInstagram />
                  </a>
                  <a href="#" className={styles.socialLink} aria-label="Twitter">
                    <FaTwitter />
                  </a>
                  <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              className={styles.contactFormContainer}
              variants={item}
            >
              <h2 className={styles.sectionTitle}>Envíanos un Mensaje</h2>
              <p className={styles.sectionSubtitle}>
                Completa el siguiente formulario y nos pondremos en contacto contigo lo antes posible.
              </p>
              
              <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
                {submitStatus && (
                  <div className={`${styles.alert} ${submitStatus.success ? styles.success : styles.error}`}>
                    {submitStatus.message}
                  </div>
                )}
                
                <div className={styles.formGroup}>
                  <label htmlFor="name">Nombre Completo *</label>
                  <input
                    id="name"
                    type="text"
                    className={`${styles.formControl} ${errors.name ? styles.errorInput : ''}`}
                    {...register('name', { required: 'El nombre es requerido' })}
                    disabled={isSubmitting}
                  />
                  {errors.name && <span className={styles.errorMessage}>{errors.name.message}</span>}
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="email">Correo Electrónico *</label>
                  <input
                    id="email"
                    type="email"
                    className={`${styles.formControl} ${errors.email ? styles.errorInput : ''}`}
                    {...register('email', { 
                      required: 'El correo electrónico es requerido',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: 'Correo electrónico inválido'
                      }
                    })}
                    disabled={isSubmitting}
                  />
                  {errors.email && <span className={styles.errorMessage}>{errors.email.message}</span>}
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Teléfono</label>
                  <input
                    id="phone"
                    type="tel"
                    className={styles.formControl}
                    {...register('phone')}
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="subject">Asunto *</label>
                  <input
                    id="subject"
                    type="text"
                    className={`${styles.formControl} ${errors.subject ? styles.errorInput : ''}`}
                    {...register('subject', { required: 'El asunto es requerido' })}
                    disabled={isSubmitting}
                  />
                  {errors.subject && <span className={styles.errorMessage}>{errors.subject.message}</span>}
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="message">Mensaje *</label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`${styles.formControl} ${errors.message ? styles.errorInput : ''}`}
                    {...register('message', { 
                      required: 'El mensaje es requerido',
                      minLength: {
                        value: 10,
                        message: 'El mensaje debe tener al menos 10 caracteres'
                      }
                    })}
                    disabled={isSubmitting}
                  ></textarea>
                  {errors.message && <span className={styles.errorMessage}>{errors.message.message}</span>}
                </div>
                
                <div className={styles.formGroup}>
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY || "YOUR_RECAPTCHA_SITE_KEY"} // Using environment variable for reCAPTCHA site key
                    onChange={onRecaptchaChange}
                  />
                  {!isVerified && submitStatus && !submitStatus.success && (
                    <span className={styles.errorMessage}>Por favor, completa la verificación CAPTCHA.</span>
                  )}
                </div>
                
                <button 
                  type="submit" 
                  className={styles.submitButton}
                  disabled={isSubmitting || !isVerified}
                >
                  {isSubmitting ? (
                    <span>Enviando...</span>
                  ) : (
                    <>
                      <FaPaperPlane className={styles.buttonIcon} />
                      <span>Enviar Mensaje</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </motion.div>
          
          {/* Map Section */}
          <motion.div 
            className={styles.mapContainer}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.sectionTitle}>Nuestra Ubicación</h2>
            <p className={styles.sectionSubtitle}>
              Visítanos en nuestro restaurante o envíanos un mensaje.
            </p>
            
            <div className={styles.map}>
              <iframe 
                src={process.env.REACT_APP_GOOGLE_MAPS_EMBED_URL || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.123456789012!2d-74.12345678901234!3d4.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3e123456789abc%3A0x1234567890abcdef!2sCalle%20107%20%238b-30%2C%20Bogotá%2C%20Colombia!5e0!3m2!1ses!2sco!4v1623456789012!5m2!1ses!2sco"} 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Ubicación del Restaurante"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>¿Tienes alguna pregunta?</h2>
          <p>No dudes en contactarnos, nuestro equipo está listo para ayudarte.</p>
          <div className={styles.ctaButtons}>
            <a href={`tel:${process.env.REACT_APP_BUSINESS_PHONE || "+525512345678"}`} className={styles.ctaButton}>
              <FaPhone className={styles.buttonIcon} />
              Llamar Ahora
            </a>
            <a href={`mailto:${process.env.REACT_APP_BUSINESS_EMAIL || "info@panrock.com"}`} className={styles.ctaButtonOutline}>
              <FaEnvelope className={styles.buttonIcon} />
              Enviar Correo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
