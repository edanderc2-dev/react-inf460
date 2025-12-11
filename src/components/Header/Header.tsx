import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import NavMenu from './NavMenu';
import ThemeToggle from '../ThemeToggle';
import './Header.css';

// ✅ Labels como keys de traducción
const SecondaryNavItems = [
    { label: "cotillon", path: "/cotillon", icon: "fa-solid fa-party-horn" },
    { label: "baño", path: "/bano", icon: "fa-solid fa-toilet" },
    { label: "infantes", path: "/infantes", icon: "fa-solid fa-horse-rocking" },
    { label: "cocina", path: "/cocina", icon: "fa-solid fa-pot-food" },
    { label: "decoracion", path: "/decoracion", icon: "fa-solid fa-couch" },
    { label: "dormitorio", path: "/dormitorio", icon: "fa-solid fa-bed" },
    { label: "ferreteria", path: "/ferreteria", icon: "fa-solid fa-wrench" },
    { label: "iluminacion", path: "/iluminacion", icon: "fa-solid fa-lightbulb" },
    { label: "jardin", path: "/jardin", icon: "fa-solid fa-seedling" },
    { label: "living", path: "/living", icon: "fa-solid fa-tv" },
    { label: "mascotas", path: "/mascotas", icon: "fa-solid fa-paw" },
    { label: "oficina", path: "/oficina", icon: "fa-solid fa-pen" },
    { label: "indumentaria", path: "/indumentaria", icon: "fa-solid fa-shirt" },
    { label: "salud", path: "/salud", icon: "fa-solid fa-heart-pulse" },
];

const Header: React.FC = () => {
    const { t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header>
            {/* 1. BARRA SUPERIOR */}
            <div className="top-bar">
                <div className="top-bar-content">
                    <div className="social-links">
                        <a href="#" aria-label="Threads"><i className="fa-brands fa-threads"></i></a>
                        <a href="#" aria-label="Email"><i className="fa-solid fa-envelope"></i></a>
                        <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                        <a href="#" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
                        <a href="#" aria-label="TikTok"><i className="fa-brands fa-tiktok"></i></a>
                        <a href="#" aria-label="Ubicación"><i className="fa-solid fa-location-dot"></i></a>
                    </div>
                    <ThemeToggle />
                </div>
            </div>

            {/* 2. BARRA PRINCIPAL */}
            <div className="main-nav">
                <div className="main-nav-content">
                    <button className="menu-icon-btn" onClick={toggleMenu}>
                        <i className="fa-solid fa-bars"></i> {t('products')}
                    </button>
                    
                    <Link to="/" className="logo">
                        <img 
                            src="public/images/foto32_90.jpg" 
                            alt="PRO HOME Logo" 
                            className="logo-image"
                        />
                    </Link>
                    
                    <div className="search-bar">
                        <input type="text" placeholder={t('search')} />
                        <button aria-label="Buscar"><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    
                    <div className="user-icons">
                        <Link to="/contacto" className="icon-link" aria-label="Contacto">
                            <i className="fa-solid fa-phone"></i>
                        </Link>
                        <button className="icon-link" aria-label="Usuario">
                            <i className="fa-solid fa-user"></i>
                        </button>
                        <button className="icon-link" aria-label="Carrito">
                            <i className="fa-solid fa-cart-shopping"></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* 3. BARRA SECUNDARIA CON ICONOS */}
            <div className="secondary-nav">
                <div className="secondary-nav-content">
                    <div className="category-links-wrapper">
                        {SecondaryNavItems.map((item) => (
                            <Link key={item.path} to={item.path} className="category-link">
                                <i className={item.icon}></i>
                                <span>{t(item.label)}</span> {/* 🔹 Traducción */}
                            </Link>
                        ))}
                    </div>
                    
                    <Link to="/ofertas" className="category-link offers-btn">
                        <i className="fa-solid fa-tag"></i>
                        <span>{t('offers')}</span>
                    </Link>
                </div>
            </div>

            <NavMenu isOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />
        </header>
    );
};

export default Header;
