import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaTimes } from 'react-icons/fa';
import { menuItems } from '../../data/menuItems';
import type { MenuItem } from '../../data/menuItems';
import styles from './Menu.module.css';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Obtener categorías únicas
  const categories = ['Todos', ...new Set(menuItems.map(item => item.category))];

  // Filtrar elementos del menú
  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'Todos' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Agrupar por categoría
  const itemsByCategory = filteredItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, MenuItem[]>);

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <div className={styles.menuContainer}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Nuestro Menú</h1>
          <p>Especialidades de lomo de cerdo ahumado, preparadas con sabor auténtico.</p>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Buscar en el menú..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
          </div>
        </div>
      </div>

      {/* Categorías */}
      <div className={styles.categories}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.categoryButton} ${activeCategory === category ? styles.active : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Contenido del Menú */}
      <div className={styles.menuContent}>
        {Object.keys(itemsByCategory).length > 0 && (
          <motion.div
            className={styles.menuItems}
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 28, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 14, scale: 0.96 }}
                  transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -8 }}
                  className={`${styles.menuItem} ${item.popular ? styles.popular : ''}`}
                  onClick={() => handleItemClick(item)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      handleItemClick(item);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`Ver detalles de ${item.name}`}
                >
                  <div className={styles.itemImage} style={{ backgroundImage: `url(${item.image})` }}>
                    {item.popular && <span className={styles.popularBadge}><FaStar /> Popular</span>}
                    <div className={styles.itemOverlay}><span>Ver detalles</span></div>
                  </div>
                  <div className={styles.itemContent}>
                    <div className={styles.itemHeader}>
                      <h3>{item.name}</h3>
                      <span className={styles.price}>{item.price > 0 ? `$${item.price.toFixed(2)}` : 'Consultar'}</span>
                    </div>
                    <p>{item.description}</p>
                    <div className={styles.smokePreview}>
                      <span>⏱️ {item.smokeTime}</span>
                      <span>🪵 {item.woodType}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Modal de Detalles */}
      <AnimatePresence>
      {isModalOpen && selectedItem && (
        <motion.div
          className={styles.modalOverlay}
          onClick={() => setIsModalOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={styles.modalContent}
            onClick={(event) => event.stopPropagation()}
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.97 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <button className={styles.closeButton} onClick={() => setIsModalOpen(false)}>
              <FaTimes />
            </button>
            <div className={styles.modalImage} style={{ backgroundImage: `url(${selectedItem.image})` }}></div>
            <div className={styles.modalBody}>
              <h2>{selectedItem.name}</h2>
              <p className={styles.modalDescription}>{selectedItem.description}</p>
              
              <div className={styles.smokeInfo}>
                <h3>Detalles del Ahumado</h3>
                <div className={styles.smokeDetails}>
                  <div className={styles.smokeDetail}>
                    <span className={styles.smokeLabel}>Tiempo de Ahumado:</span>
                    <span className={styles.smokeValue}>{selectedItem.smokeTime}</span>
                  </div>
                  <div className={styles.smokeDetail}>
                    <span className={styles.smokeLabel}>Maderas Utilizadas:</span>
                    <span className={styles.smokeValue}>{selectedItem.woodType}</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.modalFooter}>
                <span className={styles.modalPrice}>{selectedItem.price > 0 ? `$${selectedItem.price.toFixed(2)}` : 'Consultar precio'}</span>
                <button 
                  className={styles.orderButton}
                  onClick={() => {
                    const message = `Hola, quiero consultar información sobre ${selectedItem.name}.`;
                    window.open(`https://wa.me/1234567890?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
                    setIsModalOpen(false);
                  }}
                >
                  Consultar por WhatsApp
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
