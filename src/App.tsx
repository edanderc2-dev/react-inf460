import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Importa componentes de la estructura
import Header from './components/Header/Header'; 
import Footer from './components/Footer';
// Importa Páginas
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ProductListPage from './pages/ProductListPage';
import UserDataDisplayPage from './pages/UserDataDisplayPage';
import './App.css'; // Asegúrate de que este archivo App.css esté vacío o contenga solo estilos muy generales

const App: React.FC = () => {
    // Definición de las páginas que usan el ProductListPage (Requisito b)
    const categoryPages = [
        { path: "/cotillon", title: "Cotillón" },
        { path: "/bano", title: "Baño" },
        { path: "/infantes", title: "Infantes" },
        { path: "/cocina", title: "Cocina" },
        { path: "/decoracion", title: "Decoración" },
        { path: "/dormitorio", title: "Dormitorio" },
        { path: "/ferreteria", title: "Ferretería" },
        { path: "/iluminacion", title: "Iluminación" },
        { path: "/jardin", title: "Jardín" },
        { path: "/living", title: "Living, Comedor" },
        { path: "/mascotas", title: "Mascotas" },
        { path: "/oficina", title: "Oficina y Papelería" },
        { path: "/indumentaria", title: "Indumentaria" },
        { path: "/salud", title: "Salud y Belleza" },
        { path: "/ofertas", title: "Ofertas" },
    ];

    return (
        <>
            <Header />
            {/* Contenido principal centrado con padding */}
            <main style={{ minHeight: '80vh', maxWidth: 'var(--max-width-desktop)', margin: '0 auto', padding: '20px 10px' }}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    
                    {/* Requisito b & c: Páginas de menú */}
                    {categoryPages.map(page => (
                        <Route 
                            key={page.path}
                            path={page.path} 
                            element={<ProductListPage category={page.title} />} 
                        />
                    ))}

                    {/* Requisito b & c: Página de Contacto (pagina3.jpg) */}
                    <Route path="/contacto" element={<ContactPage />} />

                    {/* Requisito g: Página para mostrar datos del formulario */}
                    <Route path="/datos-cliente" element={<UserDataDisplayPage />} />
                    
                    <Route path="*" element={<h1>404 | Página no encontrada</h1>} />
                </Routes>
            </main>
            <Footer />
        </>
    );
};

export default App;