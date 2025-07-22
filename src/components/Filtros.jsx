import React from 'react';
import "../ResumenPanel/ResumenPanel.css";

const Filtros = ({ pais, setPais, estado, setEstado, onFiltrar }) => {
  const paises = [
    "Argentina",
    "Chile",
    "Colombia",
    "México",
    "Perú",
    "Venezuela"
  ];

  return (
    <div className="filtros-container">
      {/* Filtro de País */}
      <div className="filtro">
        <label htmlFor="pais">Filtrar por país</label>
        <input
          list="paises"
          id="pais"
          name="pais"
          placeholder="Escribe o selecciona"
          value={pais}
          onChange={(e) => setPais(e.target.value)}
          aria-label="Filtrar por país"
        />
        <datalist id="paises">
          {paises.map((p, index) => (
            <option key={index} value={p} />
          ))}
        </datalist>
      </div>

      {/* Filtro de Estado */}
      <div className="filtro">
        <label htmlFor="estado">Personas activas</label>
        <select
          id="estado"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
          aria-label="Filtrar por estado de usuario"
        >
          <option value="todas">Todas</option>
          <option value="Activo">Activa</option>
          <option value="Inactivo">Inactiva</option>
        </select>
      </div>

      {/* Botón de acción */}
      <div className="filtro">
        <button className="btn-filtrar" onClick={onFiltrar} aria-label="Aplicar filtros">
          Filtrar
        </button>
      </div>
    </div>
  );
};

export default Filtros;


