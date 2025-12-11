import React, { useState } from 'react'; 
import Carousel from '../components/Carousel'; 
import ProductCarousel from '../components/ProductCarousel';
import './HomePage.css'; 
import { useTranslation } from 'react-i18next'; 

const HomePage: React.FC = () => { 
  const { t } = useTranslation(); 
  const [featuredIndex, setFeaturedIndex] = useState(0);
  
  // Productos destacados para mostrar en móvil
  const featuredProducts = [
    {
      id: 1,
      name: "Mopa Trapeador con Seguridad Cabeza Giratoria Removible",
      price: 290,
      image: "public/images/productos33_8495.webp"
    },
    {
      id: 2,
      name: "Panel WPC Decorativo Pared Revestimiento Simil Madera",
      price: 1750,
      image: "public/images/productos33_11333.webp"
    },
    {
      id: 2,
      name: "Panel WPC Decorativo Pared Revestimiento Simil Madera",
      price: 1750,
      image: "public/images/productos33_11333.webp"
    }

  ];
  
  // Productos de iluminación para el carrusel
  const iluminacionProducts = [
    { 
      id: 1, 
      name: "Lámpara Solar con Sensor Redonda", 
      price: 200,
      imageSrc: "public/images/productos31_6547.webp"
    },
    { 
      id: 2, 
      name: "50 Luces Led Guirnalda 5 Metros a Pila Luz Cálida", 
      price: 145,
      imageSrc: "public/images/productos31_4637.webp"
    },
    { 
      id: 3, 
      name: "Lámpara del Himalaya Sal 2kg con Dimer", 
      price: 495,
      imageSrc: "public/images/productos31_4605.webp"
    },
    { 
      id: 4, 
      name: "Lámpara de Aluminio Simil Madera Colgante", 
      price: 1650,
      imageSrc: "public/images/productos31_4764.webp"
    },
    { 
      id: 5, 
      name: "Lámpara Colgante Moderna Blanca", 
      price: 890,
      imageSrc: "public/images/productos31_4652.webp"
    },
    { 
      id: 6, 
      name: "Tira LED RGB 5 Metros con Control", 
      price: 320,
      imageSrc: "public/images/productos31_4743.webp"
    }
  ];

  const handleFeaturedNext = () => {
    setFeaturedIndex((prev) => (prev + 1) % featuredProducts.length);
  };

  const handleFeaturedPrev = () => {
    setFeaturedIndex((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
  };

  const scrollFeatured = (dir: number) => {
    const container = document.getElementById("lfpCarousel");
    if (!container) return;

    const amount = container.offsetWidth / 2;
    container.scrollBy({
      left: dir * amount,
      behavior: "smooth"
    });
  };
  
  return ( 
    <div className="home-page-content"> 
      {/* CARRUSEL DE BANNER */} 
      <Carousel /> 

      {/* BLOQUES DE CATEGORÍA SUPERIORES */}
      <section className="top-category-blocks"> 
        <div className="category-promo-card"> 
          <img src="public/images/filename648.png" alt={t('plants')} /> 
          <div className="category-overlay"> 
            <h3>{t('plants')}</h3> 
          </div> 
        </div> 

        <div className="category-promo-card"> 
          <img src="public/images/filename650.png" alt={t('hardware')} /> 
          <div className="category-overlay"> 
            <h3>{t('hardware')}</h3> 
          </div> 
        </div> 

        <div className="category-promo-card"> 
          <img src="public/images/filename649.png" alt={t('kitchen')} /> 
          <div className="category-overlay"> 
            <h3>{t('kitchen')}</h3> 
          </div> 
        </div> 
      </section> 

      {/* CARRUSEL DE PRODUCTOS GRANDES */}
      <section className="large-featured-products-carousel">
        <button className="lfp-arrow left" onClick={() => scrollFeatured(-1)}>‹</button>

        <div className="lfp-container" id="lfpCarousel">
          <div className="large-product-block">
            <img src="public/images/productos33_8495.webp" alt={featuredProducts[0].name} />
            <div className="product-details">
              <h3>{featuredProducts[0].name}</h3>
              <div className="price-badge">$U 290</div>
              <button className="buy-button-large">{t('buy')}</button>
            </div>
          </div>

          <div className="large-product-block">
            <img src="public/images/productos33_11333.webp" alt={featuredProducts[1].name} />
            <div className="product-details">
              <h3>{featuredProducts[1].name}</h3>
              <div className="price-badge">$U 1.750</div>
              <button className="buy-button-large">{t('buy')}</button>
            </div>
          </div>
        </div>

        <button className="lfp-arrow right" onClick={() => scrollFeatured(1)}>›</button>
      </section>

      {/* PRODUCTO DESTACADO INDIVIDUAL - MÓVIL */}
      <section className="featured-product-single">
        <div className="featured-product-mobile">
          <h3>{featuredProducts[featuredIndex].name}</h3>
          <img src={featuredProducts[featuredIndex].image} alt={featuredProducts[featuredIndex].name} />
          <div className="price-badge">$U {featuredProducts[featuredIndex].price.toLocaleString('es-UY')}</div>
          <button className="buy-button-large">{t('buy')}</button>
          
          <div className="featured-carousel-nav">
            <button onClick={handleFeaturedPrev} aria-label={t('previous')}>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button onClick={handleFeaturedNext} aria-label={t('next')}>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE ILUMINACIÓN CON CARRUSEL */}
      <ProductCarousel 
        products={iluminacionProducts}
        title={t('lighting')}
      />

      {/* SECCIONES INFERIORES */}
      <section className="bottom-category-blocks"> 
        <div className="category-promo-card"> 
          <img src="public/images/filename567.png" alt={t('garden')} /> 
          <div className="category-overlay"> 
            <h3>{t('garden')}</h3> 
          </div> 
        </div> 

        <div className="category-promo-card"> 
          <img src="public/images/filename639.png" alt={t('bathroom')} /> 
          <div className="category-overlay"> 
            <h3>{t('bathroom')}</h3> 
          </div> 
        </div> 

        <div className="category-promo-card"> 
          <img src="public/images/filename636.png" alt={t('kids')} /> 
          <div className="category-overlay"> 
            <h3>{t('kids')}</h3> 
          </div> 
        </div> 
      </section> 
    </div> 
  ); 
}; 

export default HomePage;
