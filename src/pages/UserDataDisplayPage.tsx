import React, { useState, useEffect } from 'react';

interface FormData {
  nombre: string;
  asunto: string;
  telefono: string;
  mensaje: string;
  email: string;
  pais: string;
  boletin: boolean;
}

const UserDataDisplayPage: React.FC = () => {
  const [data, setData] = useState<FormData | null>(null);

  useEffect(() => {
    // Recuperar los datos del Local Storage
    const savedData = localStorage.getItem('customerData');
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  if (!data) {
    return <div className="data-display-container">
        <h2>No hay datos de formulario para mostrar.</h2>
        <p>Por favor, envíe el formulario de contacto primero en la sección de Contacto.</p>
    </div>;
  }

  return (
    <div className="data-display-container">
      <h2>Datos del Cliente Recolectados (Requisito G)</h2>
      <p>Estos son los datos que se guardaron localmente después de enviar el formulario:</p>
      
      <div className="data-table" style={{ 
          maxWidth: '500px', 
          margin: '20px 0', 
          padding: '20px', 
          border: '1px solid var(--border-color)',
          backgroundColor: 'var(--bg-header)',
          borderRadius: '4px'
        }}>
        <p><strong>Nombre:</strong> {data.nombre}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Teléfono:</strong> {data.telefono}</p>
        <p><strong>País:</strong> {data.pais}</p>
        <p><strong>Asunto:</strong> {data.asunto}</p>
        <p><strong>Boletín:</strong> {data.boletin ? 'Sí, suscrito' : 'No suscrito'}</p>
        <p><strong>Mensaje:</strong></p>
        <div style={{ borderLeft: '3px solid var(--color-primary)', paddingLeft: '10px', marginTop: '5px', color: '#666' }}>
            {data.mensaje}
        </div>
      </div>
    </div>
  );
};

export default UserDataDisplayPage;