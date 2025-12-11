import React, { useState, useEffect } from 'react';
import './Carousel.css';

// Array de imágenes del carrusel - REEMPLAZA con tus imágenes reales
const carouselImages = [
  { 
    id: 1, 
    src: 'public/images/presentaciones0_8059.jpeg',
    title: '' 
  }, 
  { 
    id: 2, 
    src: 'public/images/presentaciones0_8060.jpeg',
  }, 
  { 
    id: 3, 
    src: 'public/images/presentaciones0_8061.jpeg',
  },
  { 
    id: 4, 
    src: 'public/images/presentaciones0_8106.jpg',
  },
  { 
    id: 5, 
    src: 'public/images/presentaciones0_8059.jpeg',
  },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Avance automático cada 5 segundos
  useEffect(() => {
    if (!isAutoPlaying) return;

    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [isAutoPlaying]);

  const goToPrev = () => {
    setIsAutoPlaying(false); // Pausar autoplay al usar controles
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
    // Reactivar autoplay después de 10 segundos
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false); // Pausar autoplay al usar controles
    setCurrentIndex(prevIndex => 
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
    // Reactivar autoplay después de 10 segundos
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="carousel-container">
      <div 
        className="carousel-slides" 
        style={{ 
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {carouselImages.map((item) => (
          <div key={item.id} className="carousel-slide">
            <img src={item.src} alt={item.title} />
            <div className="carousel-caption">
              <h1>{item.title}</h1>
            </div>
          </div>
        ))}
      </div>

      {/* Botones de navegación */}
      <button 
        className="carousel-control prev" 
        onClick={goToPrev} 
        aria-label="Anterior"
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <button 
        className="carousel-control next" 
        onClick={goToNext} 
        aria-label="Siguiente"
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>

      {/* Puntos de paginación */}
      <div className="carousel-dots">
        {carouselImages.map((_, index) => (
          <button
            key={index} 
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Indicador de slide actual */}
      <div className="slide-counter">
        {currentIndex + 1} / {carouselImages.length}
      </div>
    </div>
  );
};

export default Carousel;