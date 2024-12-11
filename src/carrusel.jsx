import React, { useState } from 'react';
import './Carrusel.css';

const Carrusel = () => {
  const servicios = [
    { id: 1, title: 'Servicio 1', description: 'Descripción del Servicio 1' },
    { id: 2, title: 'Servicio 2', description: 'Descripción del Servicio 2' },
    { id: 3, title: 'Servicio 3', description: 'Descripción del Servicio 3' },
    { id: 4, title: 'Servicio 4', description: 'Descripción del Servicio 4' },
  ];

  const [indiceActual, setIndiceActual] = useState(0);

  const manejarSiguiente = () => {
    setIndiceActual((prevIndex) => (prevIndex + 1) % servicios.length);
  };

  const manejarAnterior = () => {
    setIndiceActual((prevIndex) =>
      prevIndex === 0 ? servicios.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carrusel-container">
      {/* Botón de navegación anterior */}
      <button className="carrusel-boton anterior" onClick={manejarAnterior}>
        ❮
      </button>

      {/* Carrusel */}
      <div
        className="carrusel"
        style={{ transform: `translateX(-${indiceActual * 100}%)` }}
      >
        {servicios.map((servicio) => (
          <div key={servicio.id} className="carrusel-item">
            <div>
              <h2>{servicio.title}</h2>
              <p>{servicio.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Botón de navegación siguiente */}
      <button className="carrusel-boton siguiente" onClick={manejarSiguiente}>
        ❯
      </button>
    </div>
  );
};

export default Carrusel;
