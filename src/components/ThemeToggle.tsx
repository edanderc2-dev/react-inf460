import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
import './ThemeToggle.css'; 

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { i18n } = useTranslation();

  const changeLanguage = (lng: 'es' | 'en') => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="theme-lang-controls">
      {/* Botones de Idioma */}
      <div className="language-switcher">
        <button 
          onClick={() => changeLanguage('es')} 
          className={i18n.language === 'es' ? 'active' : ''}
          aria-label="Español"
        >
          ES
        </button>
        <span className="separator">|</span>
        <button 
          onClick={() => changeLanguage('en')} 
          className={i18n.language === 'en' ? 'active' : ''}
          aria-label="English"
        >
          EN
        </button>
      </div>

      {/* Botón de Tema */}
      <button 
        onClick={toggleTheme} 
        className="theme-toggle-btn"
        aria-label={theme === 'light' ? 'Cambiar a tema oscuro' : 'Cambiar a tema claro'}
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </div>
  );
};

export default ThemeToggle;