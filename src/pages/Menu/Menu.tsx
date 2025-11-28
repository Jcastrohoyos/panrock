import React, { useState } from 'react';
import { FaFire, FaLeaf, FaStar, FaTimes } from 'react-icons/fa';
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
          <p>Descubre nuestros exquisitos platillos preparados con los mejores ingredientes</p>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Buscar platillos o bebidas..."
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
        {Object.entries(itemsByCategory).map(([category, items]) => (
          <section key={category} className={styles.menuSection}>
            <h2 className={styles.sectionTitle} id={category.replace(/\s+/g, '-').toLowerCase()}>
              {category}
            </h2>
            <div className={styles.menuItems}>
              {items.map((item) => (
                <div 
                  key={item.id} 
                  className={`${styles.menuItem} ${item.popular ? styles.popular : ''}`}
                  onClick={() => handleItemClick(item)}
                >
                  <div className={styles.itemImage} style={{ backgroundImage: `url(${item.image})` }}>
                    {item.popular && <span className={styles.popularBadge}><FaStar /> Popular</span>}
                    <div className={styles.itemOverlay}>
                      <span>Ver detalles</span>
                    </div>
                  </div>
                  <div className={styles.itemContent}>
                    <div className={styles.itemHeader}>
                      <h3>{item.name}</h3>
                      <span className={styles.price}>${item.price.toFixed(2)}</span>
                    </div>
                    <p>{item.description.substring(0, 80)}...</p>
                    <div className={styles.itemTags}>
                      {item.spicy && <span className={styles.tag}><FaFire /> Picante</span>}
                      {item.vegetarian && <span className={styles.tag}><FaLeaf /> Vegetariano</span>}
                    </div>
                    <div className={styles.smokePreview}>
                      <span>⏱️ {item.smokeTime}</span>
                      <span>🪵 {item.woodType}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Modal de Detalles */}
      {isModalOpen && selectedItem && (
        <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
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
                <span className={styles.modalPrice}>${selectedItem.price.toFixed(2)}</span>
                <button 
                  className={styles.orderButton}
                  onClick={() => {
                    // Aquí puedes agregar la lógica para agregar al carrito
                    alert(`¡${selectedItem.name} agregado al carrito!`);
                    setIsModalOpen(false);
                  }}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
