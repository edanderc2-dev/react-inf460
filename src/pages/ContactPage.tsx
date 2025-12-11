import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ContactPage.css';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    pais: 'Bolivia',
    asunto: '',
    mensaje: '',
    boletin: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Guardar datos en localStorage (Requisito G)
    localStorage.setItem('customerData', JSON.stringify(formData));
    
    alert('Formulario enviado correctamente. Los datos han sido guardados.');
    console.log('Datos guardados:', formData);
    
    // Resetear formulario
    setFormData({
      nombre: '',
      telefono: '',
      email: '',
      pais: 'Bolivia',
      asunto: '',
      mensaje: '',
      boletin: false
    });
  };

  return (
    <div className="contact-page-container">
      {/* Header */}
      <div className="contact-header">
        <h2>{t('contact_header', { defaultValue: 'Contacto' })}</h2>
        <p>{t('contact_info', { defaultValue: 'Contacta con nuestro equipo y en muy breve te daremos respuesta. Gracias por tu tiempo.' })}</p>
      </div>

      <div className="contact-content-grid">
        {/* Panel Izquierdo: Información de Contacto */}
        <aside className="contact-info-panel">
          <p className="company-name">PRO Accesorios - ProHome</p>
          
          <div className="contact-details">
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
              <span>Cerro Largo 1173 entre Av. Libertador y Cuareim<br />Centro, Montevideo Uruguay</span>
            </p>
          </div>
        </aside>

        {/* Panel Derecho: Formulario */}
        <div className="contact-form-panel">
          <h3 className="form-header-title">{t('form_header', { defaultValue: 'Formulario de contacto' })}</h3>
          
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="nombre">{t('name', { defaultValue: 'Nombre y apellido' })} *</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Nombre y apellido *"
                />
              </div>

              <div className="form-group">
                <label htmlFor="asunto">{t('subject', { defaultValue: 'Asunto' })} *</label>
                <input
                  type="text"
                  id="asunto"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  required
                  placeholder="Asunto *"
                />
              </div>

              <div className="form-group">
                <label htmlFor="telefono">Teléfono *</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  placeholder="Teléfono *"
                />
              </div>

              <div className="form-group message-area">
                <label htmlFor="mensaje">{t('message', { defaultValue: 'Mensaje' })} *</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  placeholder="Mensaje *"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email *"
                />
              </div>

              <div className="form-group">
                <label htmlFor="pais">País</label>
                <select
                  id="pais"
                  name="pais"
                  value={formData.pais}
                  onChange={handleChange}
                >
                  <option value="Bolivia">Bolivia</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Uruguay">Uruguay</option>
                  <option value="Chile">Chile</option>
                  <option value="Paraguay">Paraguay</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="boletin"
                  checked={formData.boletin}
                  onChange={handleChange}
                />
                Boletín por email
              </label>

              <p className="privacy-note">
                Los datos suministrados son confidenciales y serán tratados como privados.<br />
                Gracias por el interés.
              </p>
            </div>

            <div className="form-footer">
              <button type="submit" className="submit-button">
                {t('send', { defaultValue: 'Enviar' })}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;