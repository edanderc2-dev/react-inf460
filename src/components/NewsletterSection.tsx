import React, { useState } from 'react';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (email && email.includes('@')) {
      console.log('Email registrado:', email);
      alert(`¡Gracias por suscribirte con el email: ${email}!`);
      setEmail('');
    } else {
      alert('Por favor ingresa un email válido');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <p style={styles.label}>Boletín por email</p>
        <div style={styles.formWrapper}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Tu email"
            style={styles.input}
            onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
          />
          <button onClick={handleSubmit} style={styles.button}>
            Registrarme
          </button>
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    backgroundColor: '#d76d6d',
    padding: '25px 20px',
    marginTop: '50px',
    marginBottom: '0',
  },
  content: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  label: {
    margin: 0,
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1.1em',
  },
  formWrapper: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
  },
  input: {
    padding: '12px 20px',
    border: 'none',
    borderRadius: '6px',
    width: '280px',
    fontSize: '0.95em',
    backgroundColor: 'white',
    color: '#333',
  },
  button: {
    backgroundColor: '#ff6347',
    color: 'white',
    padding: '12px 35px',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    fontSize: '0.95em',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
};

export default NewsletterSection;