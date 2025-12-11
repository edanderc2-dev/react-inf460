import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <footer className="main-footer">
            {/* NEWSLETTER */}
            <div className="footer-newsletter">
                <p>Boletín por email</p>
                <input type="email" placeholder="Tu email" />
                <button>Registrarme</button>
            </div>

            {/* REDES SOCIALES */}
            <div className="footer-social">
                <p>{t('follow_us', { defaultValue: 'Seguimos' })}</p>
                <div className="social-icons">
                    <a href="#" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a>
                    <a href="#" aria-label="Teléfono"><i className="fa-solid fa-phone"></i></a>
                    <a href="#" aria-label="Llamada"><i className="fa-solid fa-mobile-screen"></i></a>
                    <a href="#" aria-label="Threads"><i className="fa-brands fa-threads"></i></a>
                    <a href="#" aria-label="Email"><i className="fa-solid fa-envelope"></i></a>
                    <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href="#" aria-label="Pinterest"><i className="fa-brands fa-pinterest"></i></a>
                    <a href="#" aria-label="TikTok"><i className="fa-brands fa-tiktok"></i></a>
                    <a href="#" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
                    <a href="#" aria-label="Ubicación"><i className="fa-solid fa-location-dot"></i></a>
                </div>
            </div>

            {/* GRID DE LINKS - 4 COLUMNAS CON ICONOS */}
            <div className="footer-links-grid">
                {/* COLUMNA 1: NOSOTROS */}
                <div className="footer-section">
                    <div className="footer-section-header">
                        <div className="footer-icon-wrapper">
                            <i className="fa-solid fa-circle-info"></i>
                        </div>
                        <h4>Nosotros</h4>
                    </div>
                    <ul>
                        <li><i className="fa-solid fa-building"></i> Empresa</li>
                        <li><i className="fa-solid fa-map-marker-alt"></i> Ubicación</li>
                        <li><i className="fa-solid fa-newspaper"></i> Noticias</li>
                        <li><i className="fa-solid fa-phone"></i> Contacto</li>
                    </ul>
                </div>

                {/* COLUMNA 2: TIENDA */}
                <div className="footer-section">
                    <div className="footer-section-header">
                        <div className="footer-icon-wrapper">
                            <i className="fa-solid fa-tag"></i>
                        </div>
                        <h4>Tienda</h4>
                    </div>
                    <ul>
                        <li><i className="fa-solid fa-star"></i> Destacados</li>
                        <li><i className="fa-solid fa-sparkles"></i> Nuevos</li>
                        <li><i className="fa-solid fa-percent"></i> Ofertas</li>
                        <li><i className="fa-solid fa-copyright"></i> Marcas</li>
                        <li><i className="fa-solid fa-boxes"></i> Venta por mayor</li>
                    </ul>
                </div>

                {/* COLUMNA 3: AYUDA */}
                <div className="footer-section">
                    <div className="footer-section-header">
                        <div className="footer-icon-wrapper">
                            <i className="fa-solid fa-circle-question"></i>
                        </div>
                        <h4>Ayuda</h4>
                    </div>
                    <ul>
                        <li><i className="fa-solid fa-circle-question"></i> Preguntas</li>
                        <li><i className="fa-solid fa-truck"></i> Envíos</li>
                        <li><i className="fa-solid fa-credit-card"></i> Formas de pago</li>
                        <li><i className="fa-solid fa-file-contract"></i> Condiciones</li>
                        <li><i className="fa-solid fa-shield"></i> Privacidad</li>
                    </ul>
                </div>

                {/* COLUMNA 4: MI CUENTA */}
                <div className="footer-section">
                    <div className="footer-section-header">
                        <div className="footer-icon-wrapper">
                            <i className="fa-solid fa-user"></i>
                        </div>
                        <h4>Mi cuenta</h4>
                    </div>
                    <ul>
                        <li><i className="fa-solid fa-user-circle"></i> Mi Cuenta</li>
                        <li><i className="fa-solid fa-envelope"></i> Boletín</li>
                    </ul>
                </div>
            </div>

            {/* FOOTER BOTTOM - INFORMACIÓN DE CONTACTO */}
            <div className="footer-bottom">
                <div className="contact-footer-info">
                    <div className="footer-logo-section">
                        <div className="footer-logo-circle">
                            <img src="public/images/foto32_90.jpg" alt="PRO HOME" className="footer-logo-img"/>
                        </div>
                        <p className="footer-company-name">PRO Accesorios - ProHome</p>
                    </div>
                    
                    <div className="footer-contact-details">
                        <p>
                            <i className="fa-solid fa-phone"></i>
                            <span>2900 7264</span>
                        </p>
                        <p>
                            <i className="fa-solid fa-mobile-screen"></i>
                            <span>97 497 597</span>
                        </p>
                        <p>
                            <i className="fa-brands fa-whatsapp"></i>
                            <span>WhatsApp</span>
                        </p>
                        <p>
                            <i className="fa-solid fa-location-dot"></i>
                            <span>Cerro Largo 1173 entre Av. Libertador y Cuareim</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;