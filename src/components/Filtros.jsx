import React from 'react';
import "../ResumenPanel/ResumenPanel.css";


const Filtros = () => {
  return (
    <div className="filtros-container">
      <div className="filtro">
        <label htmlFor="periodo">FILTRAR PERÍODO</label>
        <select id="periodo">
          <option>Últimos 7 Días</option>
          <option>Últimos 30 Días</option>
          <option>Este Mes</option>
          <option>Año en curso</option>
        </select>
      </div>

      <div className="filtro">
        <label htmlFor="moneda">FILTRAR MONEDA VENTA</label>
        <select id="moneda">
          <option>Peso Uruguayo</option>
          <option>Dólar</option>
          <option>Euro</option>
        </select>
      </div>

      <div className="filtro">
        <button className="btn-filtrar">Filtrar</button>
      </div>
    </div>
  );
};

export default Filtros;
