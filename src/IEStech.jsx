import React, { useState } from 'react';
import Carrusel from './carrusel';
import './Navbar.css';

const Navbar = () => {
  const [menuLateralAbierto, setMenuLateralAbierto] = useState(false);

  const manejarMenu = () => {
    setMenuLateralAbierto(!menuLateralAbierto);
  };

  return (
    <div>
      {/* Barra de Navegación */}
      <nav className="navbar">
        <div className="logo">
          <h1>IESTECH </h1>
        </div>

        {/* Redes sociales */}
        <div className="enlaces-sociales">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>

        {/* Botón para el menú lateral */}
        <div className="boton-menu" onClick={manejarMenu}>
          ☰
        </div>
      </nav>

      {/* Carrusel */}
      <div className="seccion-carrusel">
        <Carrusel />
      </div>

      {/* Menú lateral */}
      <div className={`menu-lateral ${menuLateralAbierto ? 'abierto' : ''}`}>
        <h2>Información de contacto</h2>
        <p>Email: contacto@empresa.com</p>
        <p>Teléfono: +1 234 567 890</p>
        <button onClick={manejarMenu} style={{ marginTop: '10px' }}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Navbar;
