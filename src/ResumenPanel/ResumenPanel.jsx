import React from "react";
import GraficoTorta from "./GraficoTorta";
import Kpis from "./Kpis";
import GraficoLinea from "./GraficoLinea";
import UserTable from "../UserTable/UserTable.jsx";
import "./ResumenPanel.css";
import UsuariosActivos from "./UsuariosActivos";

const ResumenPanel = ({ users }) => {
  // Detectar cuántos usuarios están activos según el campo isActive
  const usuariosActivos = users.filter((u) => u.estado.toLowerCase() === "activo");

  return (
    <>
      <div className="resumen-panel-grid">
        {/* Gráfico circular */}
        <div className="card-panel grafico-container">
          <GraficoTorta users={users} />
        </div>

        {/* KPIs */}
        <div className="card-panel resumen-container">
          <Kpis users={users} />
        </div>

        {/* Panel de usuarios activos */}
        <div className="card-panel pagos-container">
          <h3>
            Usuarios activos{" "}
            <span
              style={{
                display: "inline-block",
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                marginLeft: "0.5rem",
                backgroundColor: usuariosActivos.length > 0 ? "#10b981" : "#ef4444",
              }}
              aria-label={
                usuariosActivos.length > 0
                  ? "Usuarios activos"
                  : "Ningún usuario activo"
              }
            ></span>
          </h3>
          <div className="total-pagos">{usuariosActivos.length}</div>
          <div className="total-pagos-label">
            Usuarios activos en el período actual (simulado).
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
