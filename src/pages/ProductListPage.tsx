import React from 'react';
import { useTranslation } from 'react-i18next';
import './ProductListPage.css';

interface ProductListPageProps {
  category: string;
}

const ProductListPage: React.FC<ProductListPageProps> = ({ category }) => {
  const { t } = useTranslation();
  
  return (
    <div className="product-list-page">
      <div className="breadcrumb">
        <a href="/">Home</a> &gt; <span>{category}</span>
      </div>
      
      <div className="content-layout">
        {/* Columna Izquierda: Filtros/Menú Lateral */}
        <aside className="sidebar-filters">
          <h3>{category}</h3>
          <div className="filter-block">
            <h4>Accesorios {category}</h4>
            <ul>
                <li>Organizadores</li>
                <li>Perchas</li>
                <li>Ropa de cama</li>
                <li>
                    Más Vendidos
                    <div className="most-sold-items">
                        <p>Organizador de Zapatos</p>
                        <p>Percha 8 en 1</p>
                    </div>
                </li>
            </ul>
          </div>
        </aside>

        {/* Columna Derecha: Listado de Productos */}
        <section className="product-listing-main">
          <h2>{category}</h2>

          {/* Barra de Ordenamiento */}
          <div className="sort-bar">
            <span>6 productos</span>
            <label>Ordenado por</label>
            <select>
              <option>Precio menor</option>
              <option>Precio mayor</option>
            </select>
            <label>Marca</label>
            <select>
              <option>Todas</option>
            </select>
            <button className="view-toggle-btn">Vista</button>
          </div>

          {/* Grid de Productos */}
          <div className="product-grid-4-cols">
            {/* Producto 1 */}
            <div className="product-card">
              <div className="product-image-container">
                <img src="public/images/productos31_6202.webp" alt="Percha 8 en 1 Organizador Tendedero Ropa 360g" className="product-image" />
                <span className="heart-icon">❤️</span>
              </div>
              <p className="product-name">Percha 8 en 1 Organizador Tendedero Ropa 360g</p>
              <p className="product-price">s/u {(90).toLocaleString('es-UY')}</p>
              <div className="buy-controls">
                <input type="number" defaultValue={1} min={1} className="quantity-input" />
                <button className="buy-button">{t('buy')}</button>
              </div>
            </div>

            {/* Producto 2 */}
            <div className="product-card">
              <div className="product-image-container">
                <img src="public/images/productos31_9095.webp" alt="Almohada Inflable Cuello Para Viaje Cómodo" className="product-image" />
                <span className="heart-icon">❤️</span>
              </div>
              <p className="product-name">Almohada Inflable Cuello Para Viaje Cómodo</p>
              <p className="product-price">s/u {(195).toLocaleString('es-UY')}</p>
              <div className="buy-controls">
                <input type="number" defaultValue={1} min={1} className="quantity-input" />
                <button className="buy-button">{t('buy')}</button>
              </div>
            </div>

            {/* Producto 3 */}
            <div className="product-card">
              <div className="product-image-container">
                <img src="public/images/productos31_5098.webp" alt="Organizador De Zapatos Almacenamiento Bajo Cama Zapatera" className="product-image" />
                <span className="heart-icon">❤️</span>
              </div>
              <p className="product-name">Organizador De Zapatos Almacenamiento Bajo Cama Zapatera</p>
              <p className="product-price">s/u {(210).toLocaleString('es-UY')}</p>
              <div className="buy-controls">
                <input type="number" defaultValue={1} min={1} className="quantity-input" />
                <button className="buy-button">{t('buy')}</button>
              </div>
            </div>

            {/* Producto 4 */}
            <div className="product-card">
              <div className="product-image-container">
                <img src="public/images/productos31_5050.webp" alt="Perchas Antideslizante Perchas Acero Inoxidable Set X10" className="product-image" />
                <span className="heart-icon">❤️</span>
              </div>
              <p className="product-name">Perchas Antideslizante Perchas Acero Inoxidable Set X10</p>
              <p className="product-price">s/u {(250).toLocaleString('es-UY')}</p>
              <div className="buy-controls">
                <input type="number" defaultValue={1} min={1} className="quantity-input" />
                <button className="buy-button">{t('buy')}</button>
              </div>
            </div>

            {/* Producto 5 */}
            <div className="product-card">
              <div className="product-image-container">
                <img src="public/images/productos31_4933.webp" alt="Otro producto de ejemplo" className="product-image" />
                <span className="heart-icon">❤️</span>
              </div>
              <p className="product-name">Otro producto de ejemplo</p>
              <p className="product-price">s/u {(150).toLocaleString('es-UY')}</p>
              <div className="buy-controls">
                <input type="number" defaultValue={1} min={1} className="quantity-input" />
                <button className="buy-button">{t('buy')}</button>
              </div>
            </div>

            {/* Producto 6 */}
            <div className="product-card">
              <div className="product-image-container">
                <img src="public/images/productos31_4805.webp" alt="Otro producto más" className="product-image" />
                <span className="heart-icon">❤️</span>
              </div>
              <p className="product-name">Otro producto más</p>
              <p className="product-price">s/u {(400).toLocaleString('es-UY')}</p>
              <div className="buy-controls">
                <input type="number" defaultValue={1} min={1} className="quantity-input" />
                <button className="buy-button">{t('buy')}</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductListPage;