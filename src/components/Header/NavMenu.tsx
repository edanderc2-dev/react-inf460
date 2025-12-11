import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './NavMenu.css';

interface NavItem {
  label: string;
  path: string;
  icon: string;
}

interface NavMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

const NavMenu: React.FC<NavMenuProps> = ({ isOpen, closeMenu }) => {
  const { t } = useTranslation();

  // Categorías con iconos Font Awesome
  const categoryItems: NavItem[] = [
    { label: "Costillon", path: "/cotillon", icon: "fa-solid fa-party-horn" },
    { label: "Baño", path: "/BAÑO", icon: "fa-solid fa-toilet" },
    { label: "Infantes", path: "/infantes", icon: "fa-solid fa-horse-rocking" },
    { label: "Cocina", path: "/cocina", icon: "fa-solid fa-pot-food" },
    { label: "Decoración", path: "/decoracion", icon: "fa-solid fa-couch" },
    { label: "Dormitorio", path: "/dormitorio", icon: "fa-solid fa-bed" },
    { label: "Ferretería", path: "/ferreteria", icon: "fa-solid fa-wrench" },
    { label: "Iluminación", path: "/iluminacion", icon: "fa-solid fa-lightbulb" },
    { label: "Jardín", path: "/jardin", icon: "fa-solid fa-seedling" },
    { label: "Living, Comedor", path: "/living", icon: "fa-solid fa-tv" },
    { label: "Mascotas", path: "/mascotas", icon: "fa-solid fa-paw" },
    { label: "Oficina y Papelería", path: "/oficina", icon: "fa-solid fa-pen" },
    { label: "Indumentaria", path: "/indumentaria", icon: "fa-solid fa-shirt" },
    { label: "Salud y Belleza", path: "/salud", icon: "fa-solid fa-heart-pulse" },
  ];

  return (
    <>
      <div className={`nav-menu-overlay ${isOpen ? 'active' : ''}`} onClick={closeMenu}></div>
      <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={closeMenu}>&times;</button>
        
        <div className="menu-grid">
          {categoryItems.map(item => (
            <Link 
              key={item.label} 
              to={item.path} 
              className="menu-item"
              onClick={closeMenu}
            >
              <i className={`menu-icon ${item.icon}`}></i>
              {t(item.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
            </Link>
          ))}

          {/* Item de Ofertas con estilo especial */}
          <Link 
            to="/ofertas" 
            className="menu-item offers-item"
            onClick={closeMenu}
          >
            <i className="menu-icon fa-solid fa-tag"></i>
            {t('offers')}
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavMenu;
