import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ProductCarousel.css';

interface Product {
  id: number;
  name: string;
  price: number;
  imageSrc: string;
}

interface ProductCarouselProps {
  products: Product[];
  title: string;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products, title }) => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quantity, setQuantity] = useState<{[key: number]: number}>({});

  const getVisibleCount = () => {
    if (window.innerWidth <= 480) return 2;
    if (window.innerWidth <= 768) return 2;
    if (window.innerWidth <= 1024) return 3;
    return 4;
  };

  const [visibleCount, setVisibleCount] = React.useState(getVisibleCount());

  React.useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, products.length - visibleCount);

  const goToPrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  const handleQuantityChange = (productId: number, value: number) => {
    setQuantity(prev => ({ ...prev, [productId]: Math.max(1, value) }));
  };

  const handleBuy = (productId: number, productName: string) => {
    const qty = quantity[productId] || 1;
    console.log(`Comprando ${qty} de ${productName}`);
  };

  return (
    <div className="product-carousel-section">
      <h2 className="section-title-bar">{title}</h2>
      
      <div className="product-carousel-container">
        {currentIndex > 0 && (
          <button 
            className="carousel-nav-btn prev" 
            onClick={goToPrev}
            aria-label="Anterior"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
        )}

        <div className="product-carousel-wrapper">
          <div 
            className="product-carousel-track"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              width: `${(products.length / visibleCount) * 100}%`
            }}
          >
            {products.map((product) => (
              <div 
                key={product.id} 
                className="product-carousel-item"
                style={{ width: `${100 / products.length}%` }}
              >
                <div className="product-card">
                  <div className="product-image-container">
                    <img src={product.imageSrc} alt={product.name} className="product-image" />
                    <span className="heart-icon">❤️</span>
                  </div>
                  <p className="product-name">{product.name}</p>
                  <p className="product-price">$U {product.price.toLocaleString('es-UY')}</p>
                  <div className="buy-controls">
                    <input
                      type="number"
                      value={quantity[product.id] || 1}
                      onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value) || 1)}
                      min={1}
                      className="quantity-input"
                    />
                    <button 
                      className="buy-button"
                      onClick={() => handleBuy(product.id, product.name)}
                    >
                      {t('buy')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {currentIndex < maxIndex && (
          <button 
            className="carousel-nav-btn next" 
            onClick={goToNext}
            aria-label="Siguiente"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCarousel;