import React from "react";
import GraficoTorta from "./GraficoTorta";
import Kpis from "./Kpis";
import GraficoLinea from "./GraficoLinea";
import UserTable from "../UserTable/UserTable.jsx";
import "./ResumenPanel.css";

const ResumenPanel = ({ users, filtroEstado }) => {
  // Calcular cantidad de usuarios activos
  const usuariosActivos = users.filter((u) => u.estado.toLowerCase() === "activo");

  // Determinar cantidad a mostrar
  const cantidadMostrar =
    filtroEstado.toLowerCase() === "activo"
      ? usuariosActivos.length
      : filtroEstado.toLowerCase() === "inactivo"
      ? users.length
      : usuariosActivos.length;

  // Color dinámico del puntico según el filtro
  let colorIndicador = "#d1d5db"; // blanco por defecto

  if (filtroEstado.toLowerCase() === "activo") {
    colorIndicador = "#10b981"; // verde
  } else if (filtroEstado.toLowerCase() === "inactivo") {
    colorIndicador = "#ef4444"; // rojo
  }

  return (
    <>
      <div className="resumen-panel-grid">
        {/* Gráfico circular */}
        <div className="card-panel grafico-container">
          <GraficoTorta users={users} />
        </div>

        {/* KPIs (simulados) */}
        <div className="card-panel resumen-container">
          <Kpis users={users} />
        </div>

        {/* Indicador de usuarios filtrados */}
        <div className="card-panel pagos-container">
          <h3>
            Usuarios{" "}
            {filtroEstado.toLowerCase() === "todas"
              ? "activos"
              : filtroEstado.charAt(0).toUpperCase() + filtroEstado.slice(1)}
            <span
              style={{
                display: "inline-block",
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                marginLeft: "0.5rem",
                backgroundColor: colorIndicador,
              }}
              aria-label={`Cantidad: ${cantidadMostrar}`}
            ></span>
          </h3>

          <div className="total-pagos">{cantidadMostrar}</div>

          <div className="total-pagos-label">
            {filtroEstado === "todas"
              ? "Usuarios activos en el periodo actual."
              : `Usuarios ${filtroEstado.toLowerCase()}s encontrados.`}
          </div>

          <div className="actualizado-label">
            Información actualizada al {new Date().toLocaleDateString()}
          </div>
        </div>
      </div>

      {/* Gráfico de líneas y tabla */}
      <div className="graficos-tabla-wrapper">
        <div className="grafico-linea-wrapper">
          <GraficoLinea users={users} />
        </div>

        <div className="user-table-wrapper">
          <UserTable users={users} />
        </div>
      </div>
    </>
  );
};

export default ResumenPanel;
