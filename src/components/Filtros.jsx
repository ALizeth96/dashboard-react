import React, { useState } from 'react';
import "../ResumenPanel/ResumenPanel.css";

const Filtros = ({ pais, setPais, estado, setEstado, onFiltrar }) => {
  return (
    <div className="filtros-container">
      <div className="filtro">
        <label htmlFor="pais">Filtrar por País</label>
        <input
          list="paises"
          id="pais"
          name="pais"
          placeholder="Escribe o selecciona"
          value={pais}
          onChange={(e) => setPais(e.target.value)}
        />
        <datalist id="paises">
          <option value="México" />
          <option value="Colombia" />
          <option value="Chile" />
          <option value="Argentina" />
          <option value="Perú" />
          <option value="Venezuela" />
        </datalist>
      </div>

      <div className="filtro">
        <label htmlFor="estado">Personas activas</label>
        <select
          id="estado"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
        >
          <option value="todas">Todas</option>
          <option value="Activo">Activa</option>
          <option value="Inactivo">Inactiva</option>
        </select>
      </div>

      <div className="filtro">
        <button className="btn-filtrar" onClick={onFiltrar}>
          Filtrar
        </button>
      </div>
    </div>
  );
};

export default Filtros;
