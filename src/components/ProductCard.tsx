import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ProductCard.css';

interface Product {
  id: number;
  name: string;
  price: number;
  imageSrc: string; // ← CAMBIADO: ahora recibe la ruta completa directamente
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { t } = useTranslation();
  const [quantity, setQuantity] = useState(1);

  const handleBuy = () => {
    console.log(`Comprando ${quantity} de ${product.name}`);
    // Aquí podrías agregar lógica para agregar al carrito
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        {/* ← CAMBIADO: usa directamente imageSrc sin concatenar */}
        <img src={product.imageSrc} alt={product.name} className="product-image" />
        <span className="heart-icon">❤️</span>
      </div>
      <p className="product-name">{product.name}</p>
      <p className="product-price">s/u {product.price.toLocaleString('es-UY')}</p>

      <div className="buy-controls">
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
          min={1}
          className="quantity-input"
        />
        <button className="buy-button" onClick={handleBuy}>
          {t('buy')}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;