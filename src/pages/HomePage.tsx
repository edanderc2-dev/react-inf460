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
      imageSrc: "public/images/productos31_6547.webp"
    },
    { 
      id: 6, 
      name: "Tira LED RGB 5 Metros con Control", 
      price: 320,
      imageSrc: "public/images/productos31_4637.webp"
    }
  ];

  const handleFeaturedNext = () => {
    setFeaturedIndex((prev) => (prev + 1) % featuredProducts.length);
  };

  const handleFeaturedPrev = () => {
    setFeaturedIndex((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
  };
  
  return ( 
    <div className="home-page-content"> 
      {/* CARRUSEL DE BANNER */} 
      <Carousel /> 

      {/* BLOQUES DE CATEGORÍA SUPERIORES (3 columnas con badges a la IZQUIERDA) */} 
      <section className="top-category-blocks"> 
        <div className="category-promo-card"> 
          <div className="category-badge">
            <i className="fa-solid fa-seedling"></i>
            PLANTAS
          </div>
          <img src="public/images/filename648.png" alt="Plantas" /> 
          <div className="category-overlay"> 
            <h3>PLANTAS ARTIFICIALES</h3> 
          </div> 
        </div> 

        <div className="category-promo-card"> 
          <div className="category-badge">
            <i className="fa-solid fa-wrench"></i>
            HERRAMIENTAS
          </div>
          <img src="public/images/filename650.png" alt="Ferretería" /> 
          <div className="category-overlay"> 
            <h3>FERRETERÍA</h3> 
          </div> 
        </div> 

        <div className="category-promo-card"> 
          <div className="category-badge">
            <i className="fa-solid fa-pot-food"></i>
            COCINA
          </div>
          <img src="public/images/filename649.png" alt="Cocina" /> 
          <div className="category-overlay"> 
            <h3>COCINA</h3> 
          </div> 
        </div> 
      </section> 

      {/* PRODUCTOS GRANDES DESTACADOS CON BADGE "★ DESTACADOS" - DESKTOP */} 
      <section className="large-featured-products"> 
        <div className="large-product-block"> 
          <img src="public/images/productos33_8495.webp" alt="Mopa Trapeador con Seguridad Cabeza Giratoria Removible" /> 
          <div className="product-details"> 
            <h3>Mopa Trapeador con Seguridad Cabeza Giratoria Removible</h3> 
            <div className="price-badge">$U 290</div> 
            <button className="buy-button-large">{t('buy')}</button> 
          </div> 
        </div>
        
        <div className="large-product-block"> 
          <img src="public/images/productos33_11333.webp" alt="Panel WPC Decorativo Pared Revestimiento Simil Madera" /> 
          <div className="product-details"> 
            <h3>Panel WPC Decorativo Pared Revestimiento Simil Madera</h3> 
            <div className="price-badge">$U 1.750</div> 
            <button className="buy-button-large">{t('buy')}</button> 
          </div> 
        </div>
      </section> 

      {/* PRODUCTO DESTACADO INDIVIDUAL - MÓVIL */}
      <section className="featured-product-single">
        <div className="featured-product-mobile">
          <h3>{featuredProducts[featuredIndex].name}</h3>
          <img src={featuredProducts[featuredIndex].image} alt={featuredProducts[featuredIndex].name} />
          <div className="price-badge">$U {featuredProducts[featuredIndex].price.toLocaleString('es-UY')}</div>
          <button className="buy-button-large">{t('buy')}</button>
          
          <div className="featured-carousel-nav">
            <button onClick={handleFeaturedPrev} aria-label="Anterior">
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button onClick={handleFeaturedNext} aria-label="Siguiente">
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE ILUMINACIÓN CON CARRUSEL */} 
      <ProductCarousel 
        products={iluminacionProducts}
        title="Iluminación"
      />

      {/* SECCIONES INFERIORES (3 columnas con badges a la IZQUIERDA) */} 
      <section className="bottom-category-blocks"> 
        <div className="category-promo-card"> 
          <div className="category-badge">
            <i className="fa-solid fa-tree"></i>
            EXTERIOR
          </div>
          <img src="public/images/filename567.png" alt="Jardín" /> 
          <div className="category-overlay"> 
            <h3>JARDÍN Y EXTERIOR</h3> 
          </div> 
        </div> 

        <div className="category-promo-card"> 
          <div className="category-badge">
            <i className="fa-solid fa-toilet"></i>
            BAÑO
          </div>
          <img src="public/images/filename639.png" alt="Baño" /> 
          <div className="category-overlay"> 
            <h3>ARTÍCULOS DE BAÑO</h3> 
          </div> 
        </div> 

        <div className="category-promo-card"> 
          <div className="category-badge">
            <i className="fa-solid fa-child"></i>
            INFANTIL
          </div>
          <img src="public/images/filename636.png" alt="Zona Infantil" /> 
          <div className="category-overlay"> 
            <h3>ZONA INFANTIL</h3> 
          </div> 
        </div> 
      </section> 
    </div> 
  ); 
}; 

export default HomePage;